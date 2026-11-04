import json
import os
from pathlib import Path
import subprocess
import tempfile
import unittest
import snapshot_store

class StoreTests(unittest.TestCase):
    def test_publish_preserves_other_source_and_restore_reads_data_branch(self):
        before=Path.cwd()
        with tempfile.TemporaryDirectory() as tmp:
            root=Path(tmp);remote=root/'remote.git';work=root/'work'
            def git(*args,cwd=None):
                return subprocess.run(['git',*args],cwd=cwd,check=True,capture_output=True,text=True)
            git('init','--bare',str(remote));git('clone',str(remote),str(work))
            try:
                os.chdir(work);git('config','user.name','Test');git('config','user.email','test@example.com')
                for name in snapshot_store.FILES:
                    p=Path(name);p.parent.mkdir(exist_ok=True);p.write_text(json.dumps({'version':'baseline'}))
                git('add','.');git('commit','-m','baseline');git('branch','-M','main')
                git('push','origin','HEAD:refs/heads/'+snapshot_store.BRANCH)
                git('config','remote.origin.fetch','+refs/heads/main:refs/remotes/origin/main')
                Path('qa-bozor/hh-health.json').write_text('{"version":"new hh"}')
                snapshot_store.publish(['qa-bozor/hh-health.json'])
                Path('qa-bozor/telegram-health.json').write_text('{"version":"new tg"}')
                snapshot_store.publish(['qa-bozor/telegram-health.json'])
                Path('qa-bozor/hh-health.json').write_text('{}');snapshot_store.restore()
                self.assertEqual(json.loads(Path('qa-bozor/hh-health.json').read_text())['version'],'new hh')
                self.assertEqual(json.loads(Path('qa-bozor/telegram-health.json').read_text())['version'],'new tg')
                self.assertEqual(git('branch','--show-current').stdout.strip(),'main')
            finally:os.chdir(before)
