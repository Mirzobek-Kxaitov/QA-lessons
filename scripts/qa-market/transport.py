"""Bounded public-page fetching with diagnostics, no access-control bypass."""
import json
from pathlib import Path
import time
import requests


def fetch_parsed(session,url,parser,diagnostics,attempts=3,sleep=time.sleep):
    diagnostics=Path(diagnostics);diagnostics.mkdir(parents=True,exist_ok=True)
    last=None
    for attempt in range(1,attempts+1):
        response=None
        try:
            response=session.get(url,timeout=(10,30))
            # Do not retry an access challenge or a rate-limit response.
            if response.status_code in (401,403,429):
                response.raise_for_status()
            response.raise_for_status()
            return parser(response.text)
        except (requests.RequestException,ValueError) as error:
            last=error
            meta={'url':url,'attempt':attempt,'error':str(error),'status':response.status_code if response is not None else None}
            (diagnostics/f'attempt-{attempt}.json').write_text(json.dumps(meta,ensure_ascii=False),encoding='utf-8')
            if response is not None:(diagnostics/f'attempt-{attempt}.html').write_text(response.text,encoding='utf-8')
            if response is not None and 400<=response.status_code<500 and response.status_code not in (408,425):raise
            if response is not None and ('captcha' in response.url.lower() or 'captcha' in response.text.lower()):raise
            if attempt<attempts:sleep(min(20,3**attempt))
    raise RuntimeError(f'Public page failed after {attempts} attempts: {url}: {last}') from last
