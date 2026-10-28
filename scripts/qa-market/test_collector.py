import json
import tempfile
import unittest
from pathlib import Path

from collector import classify, database, parse_detail, requirements, save_record, export


def fixture(title='Middle / Senior QA Engineer', country='UZ'):
    job = {'@type': 'JobPosting', 'title': title, 'datePosted': '2026-10-25T22:30:00Z',
           'jobLocation': {'address': {'addressLocality': 'Toshkent', 'addressCountry': country}}}
    return f'''<script type="application/ld+json">{json.dumps(job)}</script>
        <div data-qa="vacancy-description"><p>Требования</p><ul><li>Знание SQL и API</li></ul>
        <p>Будет плюсом</p><ul><li>Python и Playwright</li></ul>
        <p>Обязанности</p><ul><li>Ведение Jira</li></ul></div>'''


class CollectorTests(unittest.TestCase):
    def test_context_and_evidence(self):
        rows = requirements('<p>Требования</p><ul><li><p>SQL</p></li></ul><p>Будет плюсом</p><ul><li>Python</li></ul><p>Обязанности</p><p>Jira</p>')
        self.assertEqual([(r['skill'], r['kind']) for r in rows], [('SQL', 'required'), ('Python', 'preferred'), ('Jira', 'responsibility')])
        self.assertEqual(rows[0]['evidence'], 'SQL')

    def test_grades_not_inferred_from_experience(self):
        record = parse_detail(fixture(), 'https://hh.uz/vacancy/123')
        self.assertEqual(record['grades'], ['Middle', 'Senior'])
        self.assertEqual(record['classification'], 'included')
        self.assertEqual(parse_detail(fixture('QA Engineer'), 'https://hh.uz/vacancy/123')['grades'], ['Unspecified'])

    def test_duty_containing_word_requirements_is_not_heading(self):
        html = '<p>Чем предстоит заниматься</p><ul><li>Анализировать требования.</li><li>Проверять API</li></ul><p>Что для нас важно</p><ul><li>Ответственность</li></ul>'
        rows = requirements(html)
        self.assertEqual(rows[0]['kind'], 'responsibility')
        record = parse_detail(fixture().replace('Знание SQL и API', 'Ответственность и внимательность'), 'https://hh.uz/vacancy/123')
        self.assertTrue(any('Ответственность' in b['evidence'] for b in record['requirement_blocks']))

    def test_region_and_nonsoftware(self):
        self.assertEqual(parse_detail(fixture(country='VN'), 'https://hh.uz/vacancy/123')['classification'], 'excluded_region')
        self.assertEqual(classify('QA officer фармацевтический завод', 'Контроль качества сырья'), 'excluded')
        self.assertEqual(classify('QA Collection', 'Проверка SQL и API'), 'review')
        self.assertEqual(classify('Senior Java Software Engineer', 'REST API development and QA team'), 'excluded')
        self.assertEqual(classify('Тестировщик городских локаций', 'Нужен Android смартфон'), 'excluded')

    def test_observations_and_weekly_unique_counts(self):
        with tempfile.TemporaryDirectory() as folder:
            db = database(Path(folder) / 'test.sqlite3')
            row = parse_detail(fixture(), 'https://hh.uz/vacancy/123', '2026-10-27T01:00:00Z')
            save_record(db, 'one', row)
            save_record(db, 'one', row)
            row['collected_at'] = '2026-10-28T01:00:00Z'
            save_record(db, 'two', row)
            self.assertEqual(db.execute('SELECT COUNT(*) FROM vacancies').fetchone()[0], 1)
            self.assertEqual(db.execute('SELECT COUNT(*) FROM observations').fetchone()[0], 2)
            self.assertEqual(db.execute('SELECT first_seen FROM vacancies').fetchone()[0], '2026-10-27T01:00:00Z')
            export(db, Path(folder))
            # Sunday UTC is Monday in Uzbekistan; test ISO week attribution.
            week = json.loads((Path(folder) / 'weekly.json').read_text())['weeks']['2026-W44']
            self.assertEqual(week['skills']['SQL'], 1)
            self.assertNotIn('Jira', week['skills'])
            self.assertEqual(week['mentioned_skills']['Jira'], 1)
            db.close()

    def test_incomplete_html_refused(self):
        with self.assertRaises(ValueError):
            parse_detail('<html>Access denied</html>', 'https://hh.uz/vacancy/123')

    def test_standalone_headings_and_br(self):
        rows = requirements('<strong>Требования:</strong><ul><li>SQL</li></ul><p><strong>Vazifalar:</strong><br>Postman</p><p><strong>Talablar:</strong><br>Python</p>')
        self.assertEqual([(r['skill'], r['kind']) for r in rows], [('SQL', 'required'), ('Postman', 'responsibility'), ('Python', 'required')])

    def test_inline_preferred_requirement(self):
        rows = requirements('<strong>Требования:</strong><ul><li>Знание SQL будет преимуществом.</li><li>Postman</li></ul>')
        self.assertEqual([(r['skill'],r['kind']) for r in rows], [('SQL','preferred'),('Postman','required')])


if __name__ == '__main__':
    unittest.main()

class ExtractionRegressionTests(unittest.TestCase):
    def test_product_description_is_not_api_testing_requirement(self):
        rows=requirements('<p>Будет плюсом</p><p>Mobil ilova, backend, API va davlat axborot tizimlari integratsiyasini qamrab oluvchi kompleks IT mahsulot bilan ishlash;</p>')
        self.assertFalse(any(r['skill']=='API testing' for r in rows))
        rows=requirements('<p>Требования</p><p>Опыт тестирования REST API с Postman</p>')
        self.assertTrue(any(r['skill']=='API testing' for r in rows))
