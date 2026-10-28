"""hh.uz software QA collection. No login, applications, or CAPTCHA solving."""
import argparse
import csv
import hashlib
import json
import os
from pathlib import Path
import re
import sqlite3
import sys
import time
from datetime import datetime, timezone
from urllib.parse import urlencode
from zoneinfo import ZoneInfo

from bs4 import BeautifulSoup
from playwright.sync_api import sync_playwright, TimeoutError as PlaywrightTimeout
import requests

ROOT = Path(__file__).resolve().parent
QUERIES = ['QA', 'тестировщик', 'тестированию', 'tester', 'SDET', 'AQA', 'Quality Assurance']
TITLE_SELECTOR = '[data-qa="serp-item__title"]'
DESC_SELECTOR = '[data-qa="vacancy-description"]'
SKILLS = {
    'SQL': r'\bsql\b', 'Postman': r'\bpostman\b',
    'API testing': r'\bapi\b|\brest(?:ful)?\b|\bgrpc\b',
    'Python': r'\bpython\b', 'Java': r'\bjava\b',
    'JavaScript': r'\bjavascript\b|\bjs\b', 'TypeScript': r'\btypescript\b',
    'Selenium': r'\bselenium\b', 'Playwright': r'\bplaywright\b',
    'Cypress': r'\bcypress\b', 'Appium': r'\bappium\b',
    'pytest': r'\bpytest\b', 'Git': r'\bgit\b',
    'CI/CD': r'\bci\s*/?\s*cd\b|\bjenkins\b|\bgithub actions\b|\bgitlab ci\b',
    'Docker': r'\bdocker\b', 'Linux': r'\blinux\b',
    'PostgreSQL': r'\bpostgres(?:ql)?\b', 'MySQL': r'\bmysql\b',
    'MongoDB': r'\bmongodb\b', 'Redis': r'\bredis\b',
    'Jira': r'\bjira\b', 'TestRail': r'\btestrail\b',
    'JMeter': r'\bjmeter\b', 'k6': r'\bk6\b', 'Locust': r'\blocust\b',
    'Test documentation': r'тест[ -]?(?:кейс|план)|test[ -]?case|чек[ -]?лист|checklist|баг[ -]?репорт|bug[ -]?report',
    'Test design': r'тест[ -]?дизайн|test design|эквивалентност|граничн',
    'Mobile testing': r'\bandroid\b|\bios\b|мобильн|mobile',
    'English': r'английск|\benglish\b|ingliz',
    'Russian': r'русск(?:ий|ого|им|ом)|\brussian\b|rus tili',
    'Uzbek': r'узбекск|\buzbek\b|o[‘\x27ʻ]zbek',
}


def now():
    return datetime.now(timezone.utc).isoformat()


def clean(value):
    return re.sub(r'\s+', ' ', str(value or '')).strip()


def qa_text(soup, name):
    node = soup.select_one(f'[data-qa="{name}"]')
    return clean(node.get_text(' ', strip=True)) if node else None


def requirement_blocks(html):
    """Keep source text and section context; never label every mention mandatory."""
    soup = BeautifulSoup(html, 'html.parser')
    result = []
    section = 'unspecified'
    # hh uses both semantic blocks and standalone strong/br headings.
    for br in soup.find_all('br'):
        br.replace_with('\n')
    for node in list(soup.find_all(['div', 'p', 'li', 'h1', 'h2', 'h3', 'h4', 'strong', 'b'])):
        if node.name in ['strong', 'b'] and node.find_parent(['p', 'li', 'h1', 'h2', 'h3', 'h4']):
            continue
        node.insert_before('\n')
        node.insert_after('\n')
    for line in soup.get_text().splitlines():
        text = clean(line)
        if not text:
            continue
        lower = text.lower().rstrip(':')
        if len(text) < 130:
            if re.match(r'^(?:будет плюсом|желательно|преимущества|nice.to.have|preferred|плюсом|бонусом|afzal)', lower):
                section = 'preferred'
                continue
            if re.match(r'^(?:(?:основные|ваши|наши|job|your)\s+)?(?:задачи|обязанности|responsibilit|duties|vazifa)|^(?:чем|что).*(?:заниматься|делать)|^предстоит', lower):
                section = 'responsibility'
                continue
            if re.match(r'^(?:(?:наши|основные|обязательные|ключевые)\s+)?(?:требования|ожидания|навыки)|^мы ожидаем|^что ищут в кандидате|^majburiy talab|^requirements|^qualifications|^required skills|^must.have|^what.*(?:need|bring|expect)|^что.*(?:нужно|важно)|^talab|^(?:asosiy )?ko[‘\x27ʻ]nikma', lower):
                section = 'required'
                continue
            if re.match(r'^условия|^(?:мы |что мы )?предлагаем|^benefits|^what we offer|^conditions|^о компании|^about us|^почему.*нами|^что.*получ|^sharoit|^bizning afzallik|^biz (?:taklif|taqdim)|^nimalarni taklif|^why this', lower):
                section = 'other'
                continue
        kind = section
        if re.search(r'будет плюсом|буд(?:ет|ут) преимуществом|желательно|приветствуется|nice.to.have|preferred|will be (?:a )?plus|afzal', lower):
            kind = 'preferred'
        if re.search(r'не (?:требуется|обязател)|not required|no .* required', lower):
            kind = 'unspecified'
        result.append({'kind': kind, 'evidence': text})
    return result


def skill_matches(skill, text):
    if not re.search(SKILLS[skill], text, re.I):
        return False
    if skill in ('API testing', 'Mobile testing'):
        # Product/domain mentions alone are not evidence of a testing skill.
        signal = r'test|тест|провер|опыт|знани|навык|понима|умени|владен|knowledge|experience|skill|familiar|bilim|tajriba|ko[‘\x27ʻ]nikma|tushun'
        return bool(re.search(signal, text, re.I)) or len(text.strip()) <= 45
    return True


def requirements(html):
    result = []
    for block in requirement_blocks(html):
        for skill, pattern in SKILLS.items():
            if skill_matches(skill, block['evidence']):
                result.append({'skill': skill, **block})
    return list({(x['skill'], x['kind'], x['evidence']): x for x in result}.values())


def classify(title, description):
    t = title.lower()
    title_is_testing = re.search(r'\bqa\b|\baqa\b|\bsdet\b|\btester\b|\btesting\b|quality assurance|тестиров|тестирован', t)
    if not title_is_testing:
        return 'excluded'
    software = re.search(r'\bapi\b|\bsoftware\b|\bpostman\b|\bselenium\b|\bplaywright\b|\bsql\b|\bweb\b|веб|программн|автотест|тест.кейс|test.case|тестировани.{0,40}(?:по\b|приложен|систем|интеграц)', description, re.I)
    nonsoftware = re.search(r'фармацевт|pharma|\bofficer\b|\bcollection\b|метролог|строитель|пищев|химик|химическ|завод|производств|контрол[ья] качества|лаборант|\bfmcg\b|городских локаций|qa\s*/\s*qc', t)
    if nonsoftware:
        return 'review' if software else 'excluded'
    if software:
        return 'included'
    return 'review'


def parse_detail(html, url, collected_at=None):
    soup = BeautifulSoup(html, 'html.parser')
    state_node = soup.find('template', id='HH-Lux-InitialState')
    state = {}
    if state_node:
        try:
            state = json.loads(state_node.decode_contents()).get('vacancyView', {}).get('vacancyFull', {}).get('vacancy', {})
        except (ValueError, AttributeError):
            pass
    job = {}
    for script in soup.select('script[type="application/ld+json"]'):
        try:
            value = json.loads(script.get_text())
            values = value if isinstance(value, list) else [value]
            for item in values:
                if item.get('@type') == 'JobPosting':
                    job = item
        except (ValueError, AttributeError):
            continue
    title = qa_text(soup, 'vacancy-title') or job.get('title')
    node = soup.select_one(DESC_SELECTOR)
    description_html = str(node) if node else job.get('description')
    if not title or not description_html:
        raise ValueError('Title/description missing; refusing to save an empty vacancy')
    description = BeautifulSoup(description_html, 'html.parser').get_text('\n', strip=True)
    identifier = re.search(r'/vacancy/(\d+)', url)
    if not identifier:
        raise ValueError('Unknown vacancy URL')
    location = job.get('jobLocation') or {}
    if isinstance(location, list):
        location = location[0] if location else {}
    address = location.get('address') or {}
    country = address.get('addressCountry') or (state.get('area') or {}).get('countryIsoCode')
    if isinstance(country, dict):
        country = country.get('name')
    body = soup.get_text('\n', strip=True)
    work_match = re.search(r'Формат работы:\s*([^\n]+)', body)
    salary = job.get('baseSalary')
    compensation = state.get('compensation') or {}
    time_node = soup.find('time', datetime=True)
    grades = [name for name, pattern in [
        ('Intern', r'\bintern\b|\btrainee\b|стаж[её]р|стажиров|amaliyot'),
        ('Junior', r'\bjunior\b|\bjr\b|джун'),
        ('Middle', r'\bmiddle\b|\bmid\b|мидл'),
        ('Senior', r'\bsenior\b|\bsr\b|сеньор|синьор'),
        ('Lead', r'\blead\b|руководител')
    ] if re.search(pattern, title, re.I)] or ['Unspecified']
    directions = []
    if re.search(r'manual|ручн', title, re.I):
        directions.append('Manual')
    if re.search(r'automation|automat|\baqa\b|\bsdet\b|автомат', title, re.I):
        directions.append('Automation')
    record = {
        'id': identifier.group(1), 'url': f'https://hh.uz/vacancy/{identifier.group(1)}',
        'source': 'hh.uz', 'title': clean(title),
        'company': qa_text(soup, 'vacancy-company-name') or (job.get('hiringOrganization') or {}).get('name'),
        'city': address.get('addressLocality') or (state.get('area') or {}).get('name'), 'country': country,
        'area_id': (state.get('area') or {}).get('id'),
        'area_path': (state.get('area') or {}).get('path'),
        'address': qa_text(soup, 'vacancy-view-raw-address') or address.get('streetAddress'),
        'published_at': job.get('datePosted') or (time_node['datetime'] if time_node else None),
        'valid_through': job.get('validThrough'),
        'experience': qa_text(soup, 'vacancy-experience'),
        'grades': grades, 'grade_source': 'title',
        'directions': directions or ['Unspecified'], 'direction_source': 'title',
        'work_format': clean(work_match.group(1)) if work_match else None,
        'salary': salary, 'salary_text': qa_text(soup, 'vacancy-salary'),
        'compensation': compensation,
        'employment_type': job.get('employmentType') or state.get('employmentForm'),
        'work_format_codes': state.get('workFormats', []),
        'archived': (state.get('status') or {}).get('archived'),
        'description': description, 'description_html': description_html,
        'key_skills': [clean(x.get_text(' ', strip=True)) for x in soup.select('[data-qa="skills-element"]')],
        'requirements': requirements(description_html),
        'requirement_blocks': requirement_blocks(description_html),
        'classification': classify(title, description),
        'collected_at': collected_at or now(), 'parser_version': 2, 'status_checked_at': collected_at or now(),
    }
    if not record['salary_text'] and compensation.get('noCompensation'):
        record['salary_text'] = 'Ko‘rsatilmagan'
    elif not record['salary_text'] and compensation:
        low, high = compensation.get('from'), compensation.get('to')
        record['salary_text'] = clean(' '.join(str(x) for x in [
            f'{low}–{high}' if low is not None and high is not None else
            f'from {low}' if low is not None else f'up to {high}' if high is not None else None,
            compensation.get('currencyCode'), compensation.get('mode'),
            'gross' if compensation.get('gross') is True else 'net' if compensation.get('gross') is False else None,
        ] if x is not None)) or None
    area_path = record['area_path']
    if area_path and not str(area_path).startswith('.97.'):
        record['classification'] = 'excluded_region'
    if country and country.upper() not in ['UZ', 'UZBEKISTAN', 'УЗБЕКИСТАН', 'O‘ZBEKISTON']:
        record['classification'] = 'excluded_region'
    return record


def database(path):
    db = sqlite3.connect(path)
    db.executescript('''
    CREATE TABLE IF NOT EXISTS runs (
      id TEXT PRIMARY KEY, started_at TEXT NOT NULL, finished_at TEXT,
      status TEXT NOT NULL, details TEXT NOT NULL);
    CREATE TABLE IF NOT EXISTS vacancies (
      id TEXT PRIMARY KEY, first_seen TEXT NOT NULL, last_seen TEXT NOT NULL,
      published_at TEXT, classification TEXT NOT NULL, data TEXT NOT NULL);
    CREATE TABLE IF NOT EXISTS observations (
      run_id TEXT NOT NULL, vacancy_id TEXT NOT NULL, observed_at TEXT NOT NULL,
      content_hash TEXT NOT NULL, data TEXT NOT NULL,
      PRIMARY KEY (run_id, vacancy_id));
    ''')
    return db


def save_record(db, run_id, record):
    payload = json.dumps(record, ensure_ascii=False, sort_keys=True)
    content = {k: v for k, v in record.items() if k != 'collected_at'}
    digest = hashlib.sha256(json.dumps(content, ensure_ascii=False, sort_keys=True).encode()).hexdigest()
    db.execute('''INSERT INTO vacancies VALUES (?, ?, ?, ?, ?, ?)
        ON CONFLICT(id) DO UPDATE SET last_seen=excluded.last_seen,
        published_at=excluded.published_at, classification=excluded.classification, data=excluded.data''',
        (record['id'], record['collected_at'], record['collected_at'], record['published_at'], record['classification'], payload))
    db.execute('INSERT OR REPLACE INTO observations VALUES (?, ?, ?, ?, ?)',
               (run_id, record['id'], record['collected_at'], digest, payload))
    db.commit()


def api_probe():
    token = os.environ.get('HH_ACCESS_TOKEN')
    headers = {'User-Agent': os.environ.get('HH_USER_AGENT', 'QA-Market/0.1')}
    if token:
        headers['Authorization'] = f'Bearer {token}'
    result = {}
    for name, endpoint, params in [
        ('areas', 'areas/97', {}),
        ('vacancies', 'vacancies', {'area': '97', 'host': 'hh.uz', 'text': 'QA', 'search_field': 'name', 'per_page': 1})
    ]:
        try:
            r = requests.get(f'https://api.hh.ru/{endpoint}', params=params, headers=headers, timeout=25)
            result[name] = {'status': r.status_code}
            try:
                value = r.json()
                result[name]['errors'] = value.get('errors')
                result[name]['found'] = value.get('found')
            except ValueError:
                result[name]['errors'] = 'Non-JSON response'
        except requests.RequestException as exc:
            result[name] = {'error': type(exc).__name__}
    return result


class Blocked(RuntimeError):
    pass


def fetch(page, url, selector, artifact, delay, allow_missing=False):
    time.sleep(delay)
    response = page.goto(url, wait_until='domcontentloaded', timeout=60000)
    status = response.status if response else 0
    # Stop rather than retry aggressively or attempt to solve a challenge.
    if status in (403, 406, 429) or 'captcha' in page.url.lower():
        artifact.write_text(page.content(), encoding='utf-8')
        raise Blocked(f'HTTP {status} or CAPTCHA at {url}; stopped, HTML: {artifact}')
    if allow_missing and status in (404, 410):
        return status
    if status >= 400:
        raise RuntimeError(f'HTTP {status}: {url}')
    try:
        page.wait_for_selector(selector, state='attached', timeout=20000)
    except PlaywrightTimeout:
        artifact.write_text(page.content(), encoding='utf-8')
        if page.locator('input[name*="captcha"], img[src*="captcha"]').count():
            raise Blocked(f'CAPTCHA requires manual action; HTML: {artifact}')
        raise ValueError(f'Expected {selector} missing at {url}; HTML: {artifact}')


def search(page, query, run_dir, delay, max_pages):
    found = {}
    expected = None
    for index in range(max_pages):
        params = {'area': '97', 'text': query, 'search_field': 'name', 'page': index}
        url = 'https://hh.uz/search/vacancy?' + urlencode(params)
        artifact = run_dir / f'search-{hashlib.sha1(query.encode()).hexdigest()[:8]}-{index}.html'
        fetch(page, url, 'body', artifact, delay)
        # Initial rendering may contain only a subset. Scroll and wait for changes.
        try:
            page.wait_for_function('''() => document.querySelector('[data-qa="serp-item__title"]') ||
                /ничего не найдено|вакансии не найдены|вакансий не найдено|найдено 0 вакансий/i.test(document.body.innerText)''', timeout=20000)
        except PlaywrightTimeout:
            artifact.write_text(page.content(), encoding='utf-8')
            raise ValueError(f'Search is neither loaded nor explicitly empty: {artifact}')
        body = page.locator('body').inner_text()
        count_match = re.search(r'(?:Найдено|Найдена|Найдены)\s+([\d\s\u00a0\u202f]+)\s+ваканс', body, re.I)
        if count_match:
            expected = int(re.sub(r'\D', '', count_match.group(1)))
        previous = -1
        stable = 0
        for _ in range(30):
            current = page.locator(TITLE_SELECTOR).count()
            stable = stable + 1 if current == previous else 0
            if stable >= 2:
                break
            previous = current
            page.evaluate('window.scrollTo(0, document.body.scrollHeight)')
            try:
                page.wait_for_function('(n) => document.querySelectorAll(\'[data-qa="serp-item__title"]\').length > n', arg=current, timeout=1800)
            except PlaywrightTimeout:
                pass
        html = page.content()
        artifact.write_text(html, encoding='utf-8')
        soup = BeautifulSoup(html, 'html.parser')
        before = len(found)
        for a in soup.select(TITLE_SELECTOR):
            match = re.search(r'/vacancy/(\d+)', a.get('href', ''))
            if match:
                found[match.group(1)] = {'id': match.group(1), 'url': f'https://hh.uz/vacancy/{match.group(1)}', 'title': clean(a.get_text(' ', strip=True))}
        if expected is not None and len(found) >= expected:
            return list(found.values()), True, expected
        next_link = soup.select_one('a[data-qa="pager-next"]')
        if not next_link:
            return list(found.values()), expected is not None and len(found) >= expected, expected
        if len(found) == before:
            break
    return list(found.values()), False, expected


def export(db, folder):
    records = [json.loads(row[0]) for row in db.execute('SELECT data FROM vacancies ORDER BY published_at DESC')]
    with (folder / 'vacancies.jsonl').open('w', encoding='utf-8') as file:
        for item in records:
            file.write(json.dumps(item, ensure_ascii=False) + '\n')
    columns = ['id', 'title', 'company', 'city', 'country', 'published_at', 'experience', 'grades', 'directions', 'work_format', 'salary_text', 'classification', 'url']
    with (folder / 'vacancies.csv').open('w', encoding='utf-8-sig', newline='') as file:
        writer = csv.DictWriter(file, fieldnames=columns)
        writer.writeheader()
        for item in records:
            writer.writerow({key: '; '.join(item[key]) if isinstance(item.get(key), list) else item.get(key) for key in columns})
    # ISO weeks use publication date in Uzbekistan, not collection date.
    weeks = {}
    for item in records:
        if item['classification'] != 'included' or not item['published_at']:
            continue
        date = datetime.fromisoformat(item['published_at'].replace('Z', '+00:00')).astimezone(ZoneInfo('Asia/Tashkent'))
        year, week, _ = date.isocalendar()
        key = f'{year}-W{week:02}'
        group = weeks.setdefault(key, {'vacancy_ids': [], 'skills': {}, 'mentioned_skills': {}})
        group['vacancy_ids'].append(item['id'])
        for skill in {r['skill'] for r in item['requirements'] if r['kind'] in ['required', 'preferred']}:
            group['skills'][skill] = group['skills'].get(skill, 0) + 1
        for skill in {r['skill'] for r in item['requirements']}:
            group['mentioned_skills'][skill] = group['mentioned_skills'].get(skill, 0) + 1
    for group in weeks.values():
        group['vacancies'] = len(group['vacancy_ids'])
        group['requirements_percent'] = {skill: round(n * 100 / group['vacancies'], 1) for skill, n in group['skills'].items()}
    (folder / 'weekly.json').write_text(json.dumps({'note': 'Observed sample only; earlier weeks are not a complete historical census. skills = recognized required/preferred sections; mentioned_skills also includes duties and unspecified context. Counts use unique vacancy IDs.', 'weeks': weeks}, ensure_ascii=False, indent=2), encoding='utf-8')


def collect(args):
    folder = args.data.resolve()
    folder.mkdir(parents=True, exist_ok=True)
    stamp = datetime.now(timezone.utc).strftime('%Y%m%dT%H%M%S%fZ')
    run_dir = folder / 'raw' / stamp
    run_dir.mkdir(parents=True)
    db = database(folder / 'vacancies.sqlite3')
    report = {'queries': {}, 'errors': [], 'candidates': 0, 'collected': 0, 'classifications': {}, 'limited': bool(args.limit)}
    db.execute('INSERT INTO runs VALUES (?, ?, NULL, ?, ?)', (stamp, now(), 'running', '{}'))
    db.commit()
    status = 'failed'
    try:
        with sync_playwright() as p:
            browser = p.chromium.launch(headless=not args.headed)
            context = browser.new_context(locale='ru-RU', viewport={'width': 1440, 'height': 1000})
            page = context.new_page()
            candidates = {}
            for query in args.query or QUERIES:
                try:
                    items, complete, expected = search(page, query, run_dir, args.delay, args.max_pages)
                    for item in items:
                        candidates.setdefault(item['id'], item)
                    report['queries'][query] = {'observed': len(items), 'reported': expected, 'complete': complete}
                    print(f'SEARCH {query}: {len(items)} / {expected}, complete={complete}', flush=True)
                except Blocked:
                    raise
                except Exception as exc:
                    report['errors'].append({'query': query, 'error': str(exc)})
                    print(f'SEARCH ERROR {query}: {exc}', flush=True)
            # Revisit prior records absent from search. Absence alone never means closed.
            if not args.limit and not args.query:
                for (payload,) in db.execute('SELECT data FROM vacancies'):
                    previous = json.loads(payload)
                    decisions = json.loads((ROOT / 'review-decisions.json').read_text())
                    category = decisions.get(previous['id'], {}).get('classification', previous.get('classification'))
                    if category == 'included' and previous.get('archived') is not True:
                        candidates.setdefault(previous['id'], {'id': previous['id'], 'url': previous['url']})
            report['candidates'] = len(candidates)
            selected = list(candidates.values())[:args.limit] if args.limit else list(candidates.values())
            for index, item in enumerate(selected, 1):
                artifact = run_dir / f'vacancy-{item["id"]}.html'
                try:
                    response_status = fetch(page, item['url'], DESC_SELECTOR + ', [data-qa="vacancy-archive-message"]', artifact, args.delay, allow_missing=True)
                    html = page.content()
                    if response_status in (404, 410):
                        previous = db.execute('SELECT data FROM vacancies WHERE id=?', (item['id'],)).fetchone()
                        if previous:
                            record = json.loads(previous[0])
                            record.update(status_checked_at=now(), availability='unavailable')
                            save_record(db, stamp, record)
                            report['collected'] += 1
                        else:
                            raise ValueError('New vacancy unavailable')
                        continue
                    artifact.write_text(html, encoding='utf-8')
                    if BeautifulSoup(html, 'html.parser').select_one('[data-qa="vacancy-archive-message"]') and not BeautifulSoup(html, 'html.parser').select_one(DESC_SELECTOR):
                        previous = db.execute('SELECT data FROM vacancies WHERE id=?', (item['id'],)).fetchone()
                        if not previous:
                            raise ValueError('Archive page without a previously collected description')
                        record = json.loads(previous[0])
                        record.update(archived=True, status_checked_at=now())
                    else:
                        record = parse_detail(html, item['url'])
                    if BeautifulSoup(html, 'html.parser').select_one('[data-qa="vacancy-archive-message"]'):
                        record['archived'] = True
                    record['availability'] = 'archived' if record.get('archived') is True else 'observed'
                    save_record(db, stamp, record)
                    report['collected'] += 1
                    category = record['classification']
                    report['classifications'][category] = report['classifications'].get(category, 0) + 1
                    print(f'DETAIL {index}/{len(selected)} {record["id"]} [{category}] {record["title"]}', flush=True)
                except Blocked:
                    raise
                except Exception as exc:
                    report['errors'].append({'id': item['id'], 'error': str(exc)})
                    print(f'DETAIL ERROR {item["id"]}: {exc}', flush=True)
            browser.close()
        complete = bool(report['queries']) and all(q['complete'] for q in report['queries'].values())
        status = 'complete' if complete and not report['errors'] and not args.limit else 'partial'
    except Exception as exc:
        report['errors'].append({'fatal': str(exc)})
        print(f'STOPPED: {exc}', file=sys.stderr, flush=True)
    finally:
        report['status'] = status
        report['finished_at'] = now()
        db.execute('UPDATE runs SET finished_at=?, status=?, details=? WHERE id=?', (report['finished_at'], status, json.dumps(report, ensure_ascii=False), stamp))
        db.commit()
        export(db, folder)
        (run_dir / 'report.json').write_text(json.dumps(report, ensure_ascii=False, indent=2), encoding='utf-8')
        db.close()
    print(json.dumps(report, ensure_ascii=False, indent=2), flush=True)
    return 0 if status == 'complete' else 2


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--probe-api', action='store_true')
    parser.add_argument('--headed', action='store_true')
    parser.add_argument('--query', action='append', help='Override default queries; repeatable')
    parser.add_argument('--limit', type=int, default=0, help='Smoke collection only; marks run partial')
    parser.add_argument('--max-pages', type=int, default=20)
    parser.add_argument('--delay', type=float, default=1.0)
    parser.add_argument('--data', type=Path, default=ROOT / 'data')
    args = parser.parse_args()
    if args.limit < 0 or args.delay < 0 or args.max_pages < 1:
        parser.error('limit/delay must be nonnegative, max-pages >= 1')
    if args.probe_api:
        print(json.dumps(api_probe(), ensure_ascii=False, indent=2))
        return 0
    return collect(args)


if __name__ == '__main__':
    sys.exit(main())
