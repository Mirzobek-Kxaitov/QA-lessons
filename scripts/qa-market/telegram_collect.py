"""Read public Telegram text posts, without login, messages or bot credentials."""
from datetime import datetime, timedelta, timezone
import html
import json
from pathlib import Path
import re
import time
import unicodedata
from urllib.parse import urljoin
import requests
from bs4 import BeautifulSoup
from collector import parse_detail, now
from telegram_filter import classify_post, ROLE

ROOT=Path(__file__).resolve().parent
OUT=ROOT.parents[1]/'qa-bozor/telegram-data.json'
CHANNELS=['unilance']


def posts_from_html(source, channel):
    soup=BeautifulSoup(source,'html.parser');result=[]
    nodes=soup.select('.tgme_widget_message[data-post]')
    if not nodes:raise ValueError('Public channel posts missing; snapshot preserved')
    for node in nodes:
        ref=node.get('data-post','');text=node.select_one('.tgme_widget_message_text');stamp=node.select_one('time[datetime]')
        if not re.fullmatch(re.escape(channel)+r'/\d+',ref) or not stamp:continue
        if not text:continue  # Photo/video-only posts require a separate OCR workflow.
        for br in text.find_all('br'):br.replace_with('\n')
        result.append({'id':'tg:'+ref,'url':'https://t.me/'+ref,'published_at':stamp['datetime'],'text':unicodedata.normalize('NFKC',text.get_text('\n',strip=True)),'links':[a.get('href','') for a in text.select('a[href]')]})
    older=soup.select_one('a.tme_messages_more[href]')
    return result,older.get('href') if older else None


def field(text, names):
    match=re.search(r'(?im)^\W*(?:'+names+r')\s*:\s*(.+)$',text)
    return match.group(1).strip() if match else None


def to_job(post, channel):
    decision=classify_post(post['text'])
    if decision['classification']!='included':return None,decision
    text=post['text']
    # Keep the existing product scope: Uzbekistan or explicitly worldwide remote.
    if not re.search(r'uzbek|узбекист|o[‘\x27ʻ’]zbekiston|tashkent|toshkent|ташкент|samarkand|samarqand|самарканд|worldwide|butun dunyo',text,re.I):
        return None,{'classification':'review','reason':'O‘zbekiston uchun mosligi aniqlanmagan'}
    title=next((x.strip('# •') for x in text.splitlines() if ROLE.search(x) and not x.startswith('#')),None)
    if not title:return None,{'classification':'review','reason':'Lavozim sarlavhasi aniqlanmadi'}
    description='<div data-qa="vacancy-description">'+''.join('<p>'+html.escape(x)+'</p>' for x in text.splitlines() if x.strip() and not x.startswith('@'+channel))+'</div>'
    fixture='<script type="application/ld+json">'+json.dumps({'@type':'JobPosting','title':title,'datePosted':post['published_at'],'description':description})+'</script>'+description
    job=parse_detail(fixture,'https://hh.uz/vacancy/0')
    linked=next((re.search(r'https?://(?:[a-z]+\.)?hh\.(?:uz|ru)/vacancy/(\d+)',link) for link in post['links'] if re.search(r'https?://(?:[a-z]+\.)?hh\.(?:uz|ru)/vacancy/\d+',link)),None)
    job.update(id=post['id'],url=post['url'],source='telegram',channel=channel,company=field(text,'компания|company|kompaniya') or 'Kompaniya ko‘rsatilmagan',city=field(text,'локация|location|manzil|shahar') or 'Hudud ko‘rsatilmagan',salary_text=field(text,'зарплата|salary|maosh|oylik') or 'Maosh ko‘rsatilmagan',description=text,archived=None,availability='observed',status_checked_at=now(),linked_hh_id=linked.group(1) if linked else None)
    if re.search(r'tashkent|toshkent|ташкент',text,re.I):job['city']='Ташкент'
    job['experience']=field(text,'tajriba|experience|опыт')
    if re.search(r'(?i)\bremote\b|masofaviy|удал[её]н',field(text,'work model|ish turi|ish formati|ish sharoitlari|формат работы') or ''):job['work_format_codes']=['REMOTE']
    return job,decision


def collect(output=OUT, days=30, max_pages=20):
    cutoff=datetime.now(timezone.utc)-timedelta(days=days);jobs=[];counts={'included':0,'excluded':0,'review':0};seen=set();pages=0
    session=requests.Session()
    for channel in CHANNELS:
        url='https://t.me/s/'+channel
        for _ in range(max_pages):
            response=session.get(url,timeout=30);response.raise_for_status()
            posts,older=posts_from_html(response.text,channel);pages+=1
            for post in posts:
                if post['id'] in seen:continue
                seen.add(post['id'])
                if datetime.fromisoformat(post['published_at'])<cutoff:continue
                job,decision=to_job(post,channel);counts[decision['classification']]+=1
                if job:jobs.append(job)
            if not older or (posts and min(datetime.fromisoformat(p['published_at']) for p in posts)<cutoff):break
            next_url=urljoin('https://t.me',older)
            if not next_url.startswith('https://t.me/s/'+channel+'?before='):raise ValueError('Unexpected pagination URL')
            url=next_url;time.sleep(1)
        else:raise RuntimeError('Pagination limit reached; previous snapshot preserved')
    payload={'schema_version':1,'source':'telegram','channels':CHANNELS,'collected_at':now(),'window_days':days,'pages':pages,'coverage':counts,'jobs':sorted(jobs,key=lambda j:j['published_at'],reverse=True)}
    output.parent.mkdir(parents=True,exist_ok=True);temp=output.with_suffix('.tmp');temp.write_text(json.dumps(payload,ensure_ascii=False),encoding='utf-8');temp.replace(output)
    print(json.dumps({k:v for k,v in payload.items() if k!='jobs'},ensure_ascii=False));print('QA posts:',len(jobs))


if __name__=='__main__':collect()
