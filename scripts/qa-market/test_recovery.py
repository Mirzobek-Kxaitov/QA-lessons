from datetime import datetime,timezone
import unittest
from recover_refresh import due
class RecoveryTests(unittest.TestCase):
 def test_hh_not_due_before_local_seven(self):
  self.assertFalse(due('hh','2026-10-28T04:00:00Z',datetime(2026,10,29,1,59,tzinfo=timezone.utc)))
 def test_yesterday_hh_is_due_after_local_seven(self):
  self.assertTrue(due('hh','2026-10-28T04:00:00Z',datetime(2026,10,29,3,0,tzinfo=timezone.utc)))
 def test_telegram_stale_threshold(self):
  self.assertFalse(due('telegram','2026-10-29T03:00:00Z',datetime(2026,10,29,4,0,tzinfo=timezone.utc)))
  self.assertTrue(due('telegram','2026-10-29T01:00:00Z',datetime(2026,10,29,4,0,tzinfo=timezone.utc)))
