import unittest
from telegram_collect import posts_from_html,to_job
from telegram_filter import classify_post

class TelegramCollectTests(unittest.TestCase):
 def test_public_post_links_and_line_breaks(self):
  posts,older=posts_from_html('<div class="tgme_widget_message" data-post="unilance/7933"><div class="tgme_widget_message_text">QA Engineer<br>Компания: Innowise<br>Зарплата: По договоренности<br>Локация: Узбекистан<br>Требования:<br>SQL, API</div><time datetime="2026-10-24T04:46:44+00:00"></time></div><a class="tme_messages_more" href="/s/unilance?before=7933"></a>','unilance')
  job,decision=to_job(posts[0],'unilance');self.assertEqual(decision['classification'],'included');self.assertEqual(job['source'],'telegram');self.assertEqual(job['company'],'Innowise');self.assertEqual(job['url'],'https://t.me/unilance/7933');self.assertTrue(older)
 def test_non_uzbekistan_role_is_held_for_review(self):
  job,decision=to_job({'text':'QA Engineer\nCompany: Test\nSalary: $3000\nLocation: Berlin','links':[]},'unilance')
  self.assertIsNone(job);self.assertEqual(decision['classification'],'review')
 def test_generic_team_qa_mention_is_not_a_qa_role(self):
  self.assertEqual(classify_post('Backend Developer vacancy\nWork with QA team. Requirements: SQL. Salary $1000')['classification'],'excluded')
 def test_missing_channel_markup_fails_instead_of_publishing_empty_snapshot(self):
  with self.assertRaises(ValueError):posts_from_html('<h1>Access denied</h1>','unilance')
