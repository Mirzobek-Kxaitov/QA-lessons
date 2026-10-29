"""Publish generated files; retry non-fast-forward races without force push."""
import subprocess
import sys
import time


def git(*args,check=True):return subprocess.run(['git',*args],check=check,text=True,capture_output=True)
def publish(paths):
    git('config','user.name','github-actions[bot]');git('config','user.email','41898282+github-actions[bot]@users.noreply.github.com')
    git('add','--',*paths)
    if git('diff','--cached','--quiet',check=False).returncode==0:return
    git('commit','-m','data: update QA source snapshots and health')
    for attempt in range(3):
        pulled=git('pull','--rebase','origin','main',check=False)
        if pulled.returncode:
            git('rebase','--abort',check=False)
            raise RuntimeError('Publish rebase conflict; no force push attempted')
        pushed=git('push','origin','HEAD:main',check=False)
        if pushed.returncode==0:return
        time.sleep(2*(attempt+1))
    raise RuntimeError('Publish failed after three push attempts')

if __name__=='__main__':publish(sys.argv[1:])
