# QA Market collection

Run from repository root with Python 3.12+:

```
pip install -r scripts/qa-market/requirements.txt
python -m playwright install chromium
python scripts/qa-market/seed.py
python scripts/qa-market/collector.py
python scripts/qa-market/build_dashboard.py
```

The GitHub Actions `Refresh QA market` workflow runs daily at 07:00 Asia/Tashkent (02:00 UTC; GitHub can delay scheduled runs) and supports manual dispatch. It restores the previous SQLite history from a 90-day Actions artifact. If none exists, it seeds a baseline from the last public snapshot. Only a fully successful run replaces `qa-bozor/data.json`. Failed/blocked runs retain history artifacts and leave the published snapshot unchanged. The dashboard shows an age warning after two days.

Collection revisits previously collected, non-archived vacancies even when absent from search. Absence is never interpreted as closure. Explicit archived metadata/notice means archived; HTTP 404/410 means unavailable. These records remain in history and are omitted from the current dashboard list. CAPTCHA/403/406/429 stops collection; no bypass is attempted. Runtime HTML/SQLite is gitignored and is not part of the public website.

Direction and grade are derived from job titles. Unspecified directions appear in Manual by product decision, with a visible explanation. Unspecified grades remain unknown. Skill extraction uses a conservative dictionary and source sentences; API/mobile product mentions without skill evidence are excluded. This is not full semantic analysis.

Checks:

```
python -m unittest discover -s scripts/qa-market -v
node --test tests/filter-state.test.mjs
```
