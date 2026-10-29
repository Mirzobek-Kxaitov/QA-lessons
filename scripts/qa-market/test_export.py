import json
import tempfile
import unittest
from pathlib import Path
from collector import database,parse_detail,save_record
from test_collector import fixture
from build_dashboard import build

class ExportTests(unittest.TestCase):
    def test_failed_collection_does_not_overwrite_public_snapshot(self):
        with tempfile.TemporaryDirectory() as tmp:
            root=Path(tmp);out=root/'data.json';out.write_text('previous good snapshot')
            db=database(root/'vacancies.sqlite3');db.execute("INSERT INTO runs VALUES ('fail','2026-10-28',NULL,'partial','{}')");db.commit();db.close()
            with self.assertRaises(RuntimeError):build(root,out)
            self.assertEqual(out.read_text(),'previous good snapshot')

    def test_status_and_corrected_requirements_are_exported(self):
        with tempfile.TemporaryDirectory() as tmp:
            root=Path(tmp);db=database(root/'vacancies.sqlite3')
            db.execute("INSERT INTO runs VALUES ('ok','2026-10-28','2026-10-28','complete',?)",(json.dumps({'collected':1,'errors':[]}),));db.commit()
            job=parse_detail(fixture(),'https://hh.uz/vacancy/123');job.update(archived=True,availability='archived',status_checked_at='2026-10-28')
            save_record(db,'ok',job);db.close();out=root/'out.json';build(root,out)
            actual=json.loads(out.read_text())['jobs'][0]
            self.assertTrue(actual['archived']);self.assertEqual(actual['status_checked_at'],'2026-10-28')

    def test_archive_state_is_taken_from_source_metadata(self):
        html=fixture()+'<template id="HH-Lux-InitialState">'+json.dumps({'vacancyView':{'vacancyFull':{'vacancy':{'status':{'archived':True}}}}})+'</template>'
        job=parse_detail(html,'https://hh.uz/vacancy/123')
        self.assertTrue(job['archived'])
        self.assertIsNotNone(job['status_checked_at'])

class ArchivedMarkupTests(unittest.TestCase):
    def test_observed_hh_archived_selectors_are_supported(self):
        from collector import ARCHIVE_SELECTOR
        from bs4 import BeautifulSoup
        for marker in ['vacancy-title-archived-text','vacancy-archive-description','vacancy-archive-message']:
            self.assertIsNotNone(BeautifulSoup('<div data-qa="'+marker+'">В архиве</div>','html.parser').select_one(ARCHIVE_SELECTOR))
