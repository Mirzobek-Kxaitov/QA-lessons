import tempfile
import unittest
import requests
from transport import fetch_parsed

class Response:
 def __init__(self,text,status=200):self.text=text;self.status_code=status;self.url='https://t.me/s/unilance'
 def raise_for_status(self):
  if self.status_code>=400:raise requests.HTTPError(str(self.status_code))
class Session:
 def __init__(self,responses):self.responses=iter(responses);self.calls=0
 def get(self,*args,**kwargs):self.calls+=1;return next(self.responses)
class TransportTests(unittest.TestCase):
 def test_temporary_empty_markup_recovers(self):
  session=Session([Response('landing'),Response('posts')])
  def parse(text):
   if text!='posts':raise ValueError('Post markup missing')
   return ['ok']
  with tempfile.TemporaryDirectory() as folder:self.assertEqual(fetch_parsed(session,'https://t.me/s/unilance',parse,folder,sleep=lambda _:None),['ok'])
  self.assertEqual(session.calls,2)
 def test_rate_limit_is_not_retried(self):
  session=Session([Response('rate limit',429)])
  with tempfile.TemporaryDirectory() as folder:
   with self.assertRaises(requests.HTTPError):fetch_parsed(session,'https://t.me/s/unilance',lambda x:x,folder,sleep=lambda _:None)
  self.assertEqual(session.calls,1)
 def test_persistent_bad_markup_is_bounded(self):
  session=Session([Response('landing')]*3)
  def parse(_):raise ValueError('No posts')
  with tempfile.TemporaryDirectory() as folder:
   with self.assertRaises(RuntimeError):fetch_parsed(session,'https://t.me/s/unilance',parse,folder,sleep=lambda _:None)
  self.assertEqual(session.calls,3)

class HHTransportTests(unittest.TestCase):
 def test_transient_server_error_is_retried(self):
  from unittest.mock import Mock,patch
  from pathlib import Path
  from collector import fetch
  page=Mock();page.url='https://hh.uz/vacancy/1';page.goto.side_effect=[Mock(status=503),Mock(status=200)]
  with tempfile.TemporaryDirectory() as folder,patch('collector.time.sleep'):
   fetch(page,page.url,'.description',Path(folder)/'page.html',0)
  self.assertEqual(page.goto.call_count,2);self.assertEqual(page.wait_for_selector.call_count,1)
 def test_access_restriction_stops_without_retries(self):
  from unittest.mock import Mock,patch
  from pathlib import Path
  from collector import fetch,Blocked
  page=Mock();page.url='https://hh.uz/vacancy/1';page.goto.return_value=Mock(status=403);page.content.return_value='Access denied'
  with tempfile.TemporaryDirectory() as folder,patch('collector.time.sleep'):
   with self.assertRaises(Blocked):fetch(page,page.url,'.description',Path(folder)/'page.html',0)
  self.assertEqual(page.goto.call_count,1)
