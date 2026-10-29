"""Independent systemd scheduler; collectors continue to run in GitHub Actions."""
import argparse
import json
import os
from datetime import datetime, timezone
from urllib.request import Request, urlopen
from zoneinfo import ZoneInfo

REPO = 'Mirzobek-Kxaitov/QA-lessons'


def api(path, payload=None):
    req = Request('https://api.github.com/repos/' + REPO + '/' + path,
                  data=None if payload is None else json.dumps(payload).encode(),
                  headers={'Authorization': 'Bearer ' + os.environ['GH_TOKEN'],
                           'Accept': 'application/vnd.github+json',
                           'X-GitHub-Api-Version': '2022-11-28',
                           'User-Agent': 'qa-market-vps-watchdog'})
    with urlopen(req, timeout=30) as response:
        body = response.read()
        return json.loads(body) if body else None


def run(dry_run=False):
    now = datetime.now(timezone.utc)
    local = now.astimezone(ZoneInfo('Asia/Tashkent'))
    for source, workflow in [('hh', 'qa-market.yml'), ('telegram', 'qa-telegram.yml')]:
        import base64
        content = api(f'contents/qa-bozor/{source}-health.json?ref=main')
        health = json.loads(base64.b64decode(content['content']))
        stamp = health.get('last_success_at')
        last = datetime.fromisoformat(stamp.replace('Z', '+00:00')) if stamp else None
        due = (last is None or (now-last).total_seconds() >= 1800) if source == 'telegram' else (
            local.hour >= 7 and (last is None or last.astimezone(ZoneInfo('Asia/Tashkent')).date() < local.date()))
        if not due:
            print(source + ': fresh', flush=True)
            continue
        runs = api(f'actions/workflows/{workflow}/runs?branch=main&per_page=1')['workflow_runs']
        if runs:
            recent = runs[0]
            age = (now-datetime.fromisoformat(recent['created_at'].replace('Z', '+00:00'))).total_seconds()
            if recent['status'] != 'completed' or age < 1800:
                print(source + ': active or retry cooldown', flush=True)
                continue
        if dry_run:
            print(source + ': dispatch required (dry run)', flush=True)
        else:
            api(f'actions/workflows/{workflow}/dispatches', {'ref': 'main'})
            print(source + ': dispatched', flush=True)


if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('--dry-run', action='store_true')
    run(parser.parse_args().dry_run)
