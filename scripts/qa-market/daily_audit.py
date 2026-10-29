"""Reconcile observed source inventory against the deployed public snapshots.

This measures coverage of configured searches/channels, not an independent census
of every QA job or semantic accuracy of automatic classification.
"""
import argparse
from datetime import datetime, timedelta
import json
from pathlib import Path
from zoneinfo import ZoneInfo
import requests
import time

ROOT=Path(__file__).resolve().parents[2]/'qa-bozor'
BASE='https://www.qa-academy.uz/qa-bozor/'
TZ=ZoneInfo('Asia/Tashkent')


def day(value):
    try:return datetime.fromisoformat(value.replace('Z','+00:00')).astimezone(TZ).date().isoformat()
    except (ValueError,AttributeError):return None


def reconcile(source, snapshot, live, target):
    inventory=snapshot.get('audit_inventory')
    checked=snapshot.get('collected_at') or (snapshot.get('runs') or [{}])[-1].get('finished_at')
    if inventory is None:
        return {'source':source,'status':'inventory_missing','checked_at':checked,'confirmed':None,'arrived':None,'missing':[],'review':[],'unreadable':[],'reason':'Manba inventari hali yozilmagan; to‘liq solishtirib bo‘lmaydi'}
    rows={r['id']:r for r in inventory if day(r.get('published_at'))==target}
    confirmed=[r for r in rows.values() if r['classification']=='included']
    review=[r for r in rows.values() if r['classification']=='review']
    unreadable=[r for r in rows.values() if r['classification']=='unreadable']
    base={'source':source,'checked_at':checked,'observed':len(rows),'confirmed':len(confirmed),'review':review,'unreadable':unreadable,'excluded':sum(r['classification'] not in ('included','review','unreadable') for r in rows.values()),'missing':[],'excluded_items':[r for r in rows.values() if r['classification'] not in ('included','review','unreadable')]}
    if live is None:
        return {**base,'status':'live_unavailable','arrived':None,'reason':'Saytdagi JSON ochilmadi; bu nol e’lon degani emas'}
    ids={r['id'] for r in live['jobs']}
    # Deployed hh and Telegram data are separate files; a Telegram post remains
    # delivered even when the UI merges an explicit hh link into one vacancy.
    arrived=[r for r in confirmed if r['id'] in ids]
    missing=[{**r,'reason':'Manbada QA deb ajratilgan, saytdagi jamlanmada ID topilmadi'} for r in confirmed if r['id'] not in ids]
    # A matching ID alone is insufficient when edited source content is stale.
    local_jobs={j['id']:j for j in snapshot.get('jobs',[])}
    live_jobs={j['id']:j for j in live.get('jobs',[])}
    stale=[]
    for r in arrived:
        expected=local_jobs.get(r['id']);actual=live_jobs[r['id']]
        if expected and any(expected.get(k)!=actual.get(k) for k in ('title','salary_text','description','requirements')):
            stale.append({**r,'reason':'ID yetib kelgan, lekin matn/maosh/talablarning eski nusxasi turibdi'})
    status='needs_review' if missing or review or unreadable or stale else 'matched'
    if not checked or day(checked)<=target:status='provisional'
    return {**base,'status':status,'arrived':len(arrived),'missing':missing,'stale':stale,'hidden':sum(j.get('archived') is True or j.get('availability')=='unavailable' for j in live_jobs.values() if j['id'] in {r['id'] for r in arrived})}


def run(target=None):
    today=datetime.now(TZ).date();target=target or (today-timedelta(days=1)).isoformat()
    # Validate CLI input before writing any report.
    datetime.strptime(target,'%Y-%m-%d')
    sources=[]
    for name,file in [('hh.uz','data.json'),('telegram','telegram-data.json')]:
        local=json.loads((ROOT/file).read_text())
        try:
            response=requests.get(BASE+file,params={'audit':datetime.now(TZ).isoformat()},timeout=30);response.raise_for_status();live=response.json()
            if not isinstance(live.get('jobs'),list):raise ValueError('Invalid deployed snapshot')
        except (requests.RequestException,ValueError):live=None
        result=reconcile(name,local,live,target)
        for attempt in range(2):
            if not result.get('missing') and not result.get('stale'):break
            time.sleep(15)
            try:
                response=requests.get(BASE+file,params={'audit':datetime.now(TZ).isoformat()},timeout=30);response.raise_for_status();live=response.json()
                if not isinstance(live.get('jobs'),list):raise ValueError('Invalid deployed snapshot')
            except (requests.RequestException,ValueError):live=None
            result=reconcile(name,local,live,target)
        health_file=ROOT/('hh-health.json' if name=='hh.uz' else 'telegram-health.json')
        if health_file.exists():
            health=json.loads(health_file.read_text())
            result['last_attempt_at']=health.get('finished_at')
            result['last_attempt_status']=health.get('status')
            if health.get('status')=='failed':
                result['status']='collection_failed'
                result['reason']='Oxirgi yig‘ish muvaffaqiyatsiz: '+str(health.get('error') or 'Sabab diagnostikada')+'; oxirgi yaxshi jamlanma saqlangan.'
        sources.append(result)
    report={'date':target,'generated_at':datetime.now(TZ).isoformat(),'open_day':target>=today.isoformat(),'sources':sources}
    output=ROOT/'audit-data.json'
    previous=json.loads(output.read_text()) if output.exists() else {'days':[]}
    days=[r for r in previous['days'] if r['date']!=target]+[report]
    payload={'schema_version':1,'scope':'Faqat sozlangan hh.uz qidiruvlari va @unilance ochiq postlari. Bu butun bozorning mustaqil sanog‘i emas.','days':sorted(days,key=lambda r:r['date'],reverse=True)[:90]}
    temp=output.with_suffix('.tmp');temp.write_text(json.dumps(payload,ensure_ascii=False),encoding='utf-8');temp.replace(output)
    print(json.dumps(report,ensure_ascii=False))


if __name__=='__main__':
    parser=argparse.ArgumentParser();parser.add_argument('--date');args=parser.parse_args()
    if args.date:run(args.date)
    else:
        run()
        run(datetime.now(TZ).date().isoformat())
