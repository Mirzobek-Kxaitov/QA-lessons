import json
from pathlib import Path
import tempfile
import unittest
from unittest.mock import patch
import refresh_health
class HealthTests(unittest.TestCase):
 def test_failed_attempt_preserves_last_success(self):
  with tempfile.TemporaryDirectory() as tmp,patch.object(refresh_health,'ROOT',Path(tmp)):
   path=Path(tmp)/'hh-health.json';path.write_text(json.dumps({'last_success_at':'2026-10-28T00:00:00Z'}))
   with self.assertRaises(RuntimeError):refresh_health.execute('hh',lambda:2)
   actual=json.loads(path.read_text());self.assertEqual(actual['status'],'failed');self.assertEqual(actual['last_success_at'],'2026-10-28T00:00:00Z')
 def test_success_replaces_attempt_status_atomically(self):
  with tempfile.TemporaryDirectory() as tmp,patch.object(refresh_health,'ROOT',Path(tmp)):
   refresh_health.execute('telegram',lambda:None)
   actual=json.loads((Path(tmp)/'telegram-health.json').read_text());self.assertEqual(actual['status'],'success');self.assertIsNotNone(actual['last_success_at']);self.assertFalse((Path(tmp)/'telegram-health.tmp').exists())
