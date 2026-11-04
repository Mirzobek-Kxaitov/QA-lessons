"""Snapshots live on a data-only branch so refreshes do not deploy the website."""
import json
from pathlib import Path
import subprocess
import tempfile
import time

BRANCH='codex/qa-data'
FILES=['qa-bozor/'+name for name in ['data.json','telegram-data.json','audit-data.json','hh-health.json','telegram-health.json']]


def git(*args,cwd=None,check=True):
    return subprocess.run(['git',*args],cwd=cwd,check=check,capture_output=True,text=True)


def restore():
    git('fetch','origin',BRANCH)
    for path in FILES:
        body=git('show',f'origin/{BRANCH}:{path}').stdout
        json.loads(body)
        Path(path).write_text(body)


def publish(paths):
    if any(path not in FILES for path in paths):raise ValueError('Only QA snapshot paths may be published')
    payload={path:Path(path).read_bytes() for path in paths}
    for attempt in range(3):
        git('fetch','origin',BRANCH)
        with tempfile.TemporaryDirectory() as tmp:
            tree=Path(tmp)/'store'
            git('worktree','add','--detach',str(tree),f'origin/{BRANCH}')
            try:
                for path,body in payload.items():(tree/path).write_bytes(body)
                git('config','user.name','github-actions[bot]',cwd=tree)
                git('config','user.email','41898282+github-actions[bot]@users.noreply.github.com',cwd=tree)
                git('add','--',*paths,cwd=tree)
                if git('diff','--cached','--quiet',cwd=tree,check=False).returncode==0:return
                git('commit','-m','data: update QA snapshots',cwd=tree)
                if git('push','origin',f'HEAD:refs/heads/{BRANCH}',cwd=tree,check=False).returncode==0:return
            finally:git('worktree','remove','--force',str(tree))
        time.sleep(2*(attempt+1))
    raise RuntimeError('Data branch publish failed; no force push attempted')


if __name__=='__main__':restore()
