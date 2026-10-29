"""Best-effort GitHub recovery. An external scheduler is still needed for an SLA."""
from datetime import datetime,timezone
import json
from pathlib import Path
import subprocess
from zoneinfo import ZoneInfo

ROOT=Path(__file__).resolve().parents[2]/'qa-bozor'
REPO='Mirzobek-Kxaitov/QA-lessons'


def due(source,stamp,current):
    if not stamp:return True
    last=datetime.fromisoformat(stamp.replace('Z','+00:00'))
    if source=='telegram':return (current-last).total_seconds()>90*60
    local=current.astimezone(ZoneInfo('Asia/Tashkent'))
    return local.hour>=7 and last.astimezone(ZoneInfo('Asia/Tashkent')).date()<local.date()


def main():
    current=datetime.now(timezone.utc)
    for source,workflow,file in [('hh','qa-market.yml','data.json'),('telegram','qa-telegram.yml','telegram-data.json')]:
        snapshot=json.loads((ROOT/file).read_text())
        stamp=snapshot.get('collected_at') or snapshot['runs'][-1]['finished_at']
        if not due(source,stamp,current):continue
        recent=json.loads(subprocess.check_output(['gh','run','list','--repo',REPO,'--workflow',workflow,'--limit','1','--json','status,createdAt'],text=True))
        if recent:
            age=(current-datetime.fromisoformat(recent[0]['createdAt'].replace('Z','+00:00'))).total_seconds()
            if recent[0]['status']!='completed' or age<1800:continue
        subprocess.run(['gh','workflow','run',workflow,'--repo',REPO,'--ref','main'],check=True)
        print('Recovery dispatched:',source)

if __name__=='__main__':main()
