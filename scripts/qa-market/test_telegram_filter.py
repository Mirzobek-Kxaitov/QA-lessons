import unittest
from telegram_filter import classify_post

class TelegramFilterTests(unittest.TestCase):
    def test_qa_hiring_in_three_languages(self):
        for text in [
            'QA tester kerak. Talablar: SQL, Postman. Oylik 12 mln.',
            'Ищем QA инженера. Требования: SQL и API. Зарплата договорная.',
            'We are hiring a Junior QA Engineer. Requirements: API testing. Apply today.',
        ]:
            self.assertEqual(classify_post(text)['classification'],'included',text)

    def test_other_jobs_and_quality_control_are_not_software_qa(self):
        for text in ['Python developer kerak. Salary $2000.','QA/QC engineer construction vacancy. Salary $2000.']:
            self.assertEqual(classify_post(text)['classification'],'excluded')

    def test_course_and_candidate_posts_are_not_job_openings(self):
        for text in ['QA kursimizga qabul boshlandi. Postman va SQL o‘rganing!','QA tester. Ish qidiryapman. SQL, API.','Ищу работу QA. Опыт SQL и API.']:
            self.assertEqual(classify_post(text)['classification'],'excluded',text)

    def test_ambiguous_qa_post_is_not_published_automatically(self):
        self.assertEqual(classify_post('QA Engineer — SQL va API haqida fikrlar')['classification'],'review')
        self.assertEqual(classify_post('QA kursimiz uchun mentor kerak')['classification'],'review')
