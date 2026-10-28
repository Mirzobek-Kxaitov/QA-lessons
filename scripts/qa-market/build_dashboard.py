"""Publish a public snapshot only after a complete collection."""
from collections import Counter
from datetime import datetime, timezone
import json
from pathlib import Path
import sqlite3
from collector import requirements, requirement_blocks

ROOT = Path(__file__).resolve().parent
OUT = ROOT.parents[1] / 'qa-bozor/data.json'


def build(folder=ROOT / 'data', output=OUT):
    db = sqlite3.connect(folder / 'vacancies.sqlite3')
    runs = []
    for run in db.execute('SELECT id,started_at,finished_at,status,details FROM runs ORDER BY started_at'):
        item = dict(zip(['id','started_at','finished_at','status','details'], run))
        details=json.loads(item.pop('details'))
        item.update(queries=details.get('queries'),collected=details.get('collected',0),errors=len(details.get('errors',[])))
        runs.append(item)
    if not runs or runs[-1]['status'] != 'complete':
        raise RuntimeError('Latest collection is incomplete; published snapshot is preserved')
    decisions=json.loads((ROOT/'review-decisions.json').read_text())
    counts=Counter(); jobs=[]; inventory=[]
    for (payload,) in db.execute('SELECT data FROM vacancies ORDER BY published_at DESC'):
        row=json.loads(payload)
        category=decisions.get(row['id'],{}).get('classification',row['classification'])
        counts[category]+=1
        inventory.append({'id':row['id'],'url':row['url'],'title':row['title'],'published_at':row.get('published_at'),'classification':category,'reason':decisions.get(row['id'],{}).get('reason') or ('Software QA dalili bor' if category=='included' else 'Qo‘lda tekshirish kerak' if category=='review' else 'QA yoki hudud mezoniga mos emas')})
        if category!='included':continue
        if row.get('description_html'):
            row['requirements']=requirements(row['description_html'])
            row['requirement_blocks']=requirement_blocks(row['description_html'])
        keys=['id','url','title','company','city','published_at','collected_at','experience','grades','directions','work_format','work_format_codes','salary_text','compensation','key_skills','requirements','requirement_blocks','description','archived','status_checked_at','availability']
        job={k:row.get(k) for k in keys}
        job['location_note']=None
        if row['id']=='138455672':
            job['city']='Ташкент'
            job['location_note']='Sahifadagi JSON-LD manzili va hh hudud kodi mos kelmaydi. Shahar filtri hh hudud kodi .97.2759. (Toshkent) asosida.'
        jobs.append(job)
    db.close()
    result={'schema_version':2,'built_at':datetime.now(timezone.utc).isoformat(),'source':'hh.uz','region':'O‘zbekiston','jobs':jobs,'runs':runs,'coverage':{'collected':sum(counts.values()),**counts,'reviewed_decisions':len(decisions)},'review_notes':list(decisions.values()),'audit_inventory':inventory}
    output.parent.mkdir(parents=True,exist_ok=True)
    temporary=output.with_suffix('.tmp')
    temporary.write_text(json.dumps(result,ensure_ascii=False),encoding='utf-8');temporary.replace(output)
    print(f'Exported {len(jobs)} QA vacancies')


if __name__=='__main__':build()
