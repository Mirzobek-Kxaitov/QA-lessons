"""Persist last attempt separately from last good source snapshot."""
from datetime import datetime,timezone
import json
from pathlib import Path
import subprocess
import sys

ROOT=Path(__file__).resolve().parents[2]/'qa-bozor'


def execute(source,action):
    file=ROOT/f'{source}-health.json'
    previous=json.loads(file.read_text()) if file.exists() else {}
    if not previous.get('last_success_at'):
        snapshot_file=ROOT/('data.json' if source=='hh' else 'telegram-data.json')
        if snapshot_file.exists():
            snapshot=json.loads(snapshot_file.read_text())
            previous['last_success_at']=snapshot.get('collected_at') or (snapshot.get('runs') or [{}])[-1].get('finished_at')
    started=datetime.now(timezone.utc).isoformat()
    code=0;error=None
    try:
        result=action()
        if isinstance(result,int) and result:raise RuntimeError(f'Collector exited with code {result}; snapshot retained')
    except Exception as exc:
        code=1;error=str(exc)
    stamp=datetime.now(timezone.utc).isoformat()
    health={'source':source,'started_at':started,'finished_at':stamp,'status':'failed' if code else 'success','error':error,'last_success_at':previous.get('last_success_at') if code else stamp}
    temp=file.with_suffix('.tmp');temp.write_text(json.dumps(health,ensure_ascii=False),encoding='utf-8');temp.replace(file)
    if code:raise RuntimeError(error)


if __name__=='__main__':
    source=sys.argv[1]
    def action():
        root=Path(__file__).resolve().parent
        result=subprocess.run([sys.executable,str(root/'collector.py')])
        if result.returncode:
            import sqlite3
            with sqlite3.connect(root/'data/vacancies.sqlite3') as db:
                row=db.execute('SELECT details FROM runs ORDER BY started_at DESC LIMIT 1').fetchone()
            issues=len(json.loads(row[0]).get('errors',[])) if row else 0
            raise RuntimeError(f'Manbadagi yig‘ish to‘liq tugamadi ({issues} ta xato). Oxirgi yaxshi jamlanma saqlangan.')
        return subprocess.run([sys.executable,str(root/'build_dashboard.py')]).returncode
    execute(source,action)
