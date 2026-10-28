"""Recover a minimal baseline if CI history artifacts are unavailable."""
import json
from pathlib import Path
from collector import database, save_record
ROOT=Path(__file__).resolve().parent
folder=ROOT/'data';folder.mkdir(exist_ok=True)
if not (folder/'vacancies.sqlite3').exists():
    data=json.loads((ROOT.parents[1]/'qa-bozor/data.json').read_text())
    db=database(folder/'vacancies.sqlite3')
    for run in data['runs']:
        details={k:run.get(k) for k in ['queries','collected']};details['errors']=[{}]*run.get('errors',0)
        db.execute('INSERT INTO runs VALUES (?,?,?,?,?)',(run['id'],run['started_at'],run['finished_at'],run['status'],json.dumps(details)))
    db.commit()
    for job in data['jobs']:
        save_record(db,'seed',{**job,'classification':'included'})
    db.close()
