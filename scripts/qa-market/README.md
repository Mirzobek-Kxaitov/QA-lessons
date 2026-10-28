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

## Telegram

`python scripts/qa-market/telegram_collect.py` reads public `@unilance` text posts from the last 30 days (up to 20 preview pages). The independent `Refresh Telegram QA posts` workflow runs hourly at minute 17; GitHub may delay scheduled jobs. No account, bot token or channel membership is used. Failure preserves the last Telegram snapshot and does not block hh collection. Photo/video-only content is not scanned.

Only posts with a QA role, hiring evidence and Uzbekistan/worldwide eligibility are published. Ambiguous posts are counted for review but not exposed as vacancies. The filter does not establish authenticity. Explicit hh vacancy links matching existing records are merged to prevent double counting; other reposts may still be separate. Deleted Telegram posts are not interpreted as confirmed closed jobs. Collection freshness is shown, and a warning appears after two days without updates.

## Daily delivery audit

`python scripts/qa-market/daily_audit.py` reconciles yesterday and today in Asia/Tashkent against deployed `data.json` and `telegram-data.json`. `--date YYYY-MM-DD` reruns one day. The audit runs at 07:40 Tashkent and after either source collection finishes. It keeps 90 dated reports in `qa-bozor/audit-data.json`.

Counts are based on the configured searches/channel inventory, not a separate census of all QA vacancies. Confirmed, delivered, missing, stale content, review candidates and media-only unreadable posts are separate. A failed site fetch is unknown, never zero. A collection finishing before day end is provisional. Canonical source manifests are compared with public deployed payloads, including ID and title/salary/description/requirements. Current UI filters do not affect delivery counts. Archived jobs are reported as delivered but intentionally hidden. Deployment differences are rechecked twice before they are recorded.
