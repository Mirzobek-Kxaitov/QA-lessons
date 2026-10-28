import unittest
from daily_audit import reconcile,day

class AuditTests(unittest.TestCase):
 def row(self,id,kind='included'):
  return {'id':id,'url':'https://t.me/unilance/'+id,'published_at':'2026-10-27T22:00:00Z','classification':kind,'reason':'Tekshirish kerak'}
 def test_uzbekistan_day_boundary(self):
  self.assertEqual(day('2026-10-27T22:00:00Z'),'2026-10-28')
 def test_missing_and_review_are_separate(self):
  snapshot={'collected_at':'2026-10-29T02:00:00Z','audit_inventory':[self.row('1'),self.row('2'),self.row('3','review')],'jobs':[]}
  report=reconcile('telegram',snapshot,{'jobs':[{'id':'1'}]},'2026-10-28')
  self.assertEqual((report['confirmed'],report['arrived'],len(report['missing']),len(report['review'])),(2,1,1,1));self.assertEqual(report['status'],'needs_review')
 def test_unavailable_live_site_does_not_look_like_zero_delivery(self):
  snapshot={'collected_at':'2026-10-29T02:00:00Z','audit_inventory':[self.row('1')]}
  self.assertIsNone(reconcile('telegram',snapshot,None,'2026-10-28')['arrived'])
 def test_stale_content_is_detected_even_when_id_arrived(self):
  snapshot={'collected_at':'2026-10-29T02:00:00Z','audit_inventory':[self.row('1')],'jobs':[{'id':'1','salary_text':'12–15 mln'}]}
  report=reconcile('hh.uz',snapshot,{'jobs':[{'id':'1','salary_text':'12–20 mln'}]},'2026-10-28')
  self.assertEqual(report['arrived'],1);self.assertEqual(len(report['stale']),1)
 def test_incomplete_day_and_missing_inventory_are_not_success(self):
  self.assertEqual(reconcile('hh.uz',{}, {'jobs':[]},'2026-10-28')['status'],'inventory_missing')
  self.assertEqual(reconcile('telegram',{'collected_at':'2026-10-28T15:00:00Z','audit_inventory':[]},{'jobs':[]},'2026-10-28')['status'],'provisional')
 def test_unreadable_media_does_not_inflate_confirmed_qa(self):
  report=reconcile('telegram',{'collected_at':'2026-10-29T02:00:00Z','audit_inventory':[self.row('1','unreadable')]},{'jobs':[]},'2026-10-28')
  self.assertEqual(report['confirmed'],0);self.assertEqual(len(report['unreadable']),1);self.assertEqual(report['status'],'needs_review')
