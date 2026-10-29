# QA Market collection

Run from repository root with Python 3.12+:

```
pip install -r scripts/qa-market/requirements.txt
python -m playwright install chromium
python scripts/qa-market/seed.py
python scripts/qa-market/collector.py
python scripts/qa-market/build_dashboard.py
```

The GitHub Actions `Refresh QA market` workflow runs daily at 07:07 Asia/Tashkent (02:07 UTC; GitHub can delay scheduled runs) and supports manual dispatch. It restores the previous SQLite history from a 90-day Actions artifact. If none exists, it seeds a baseline from the last public snapshot. Only a fully successful run replaces `qa-bozor/data.json`. Failed/blocked runs retain history artifacts and leave the published snapshot unchanged. The dashboard shows an age warning after two days.

Collection revisits previously collected, non-archived vacancies even when absent from search. Absence is never interpreted as closure. Explicit archived metadata/notice means archived; HTTP 404/410 means unavailable. These records remain in history and are omitted from the current dashboard list. CAPTCHA/403/406/429 stops collection; no bypass is attempted. Runtime HTML/SQLite is gitignored and is not part of the public website.

Direction and grade are derived from job titles. Unspecified directions appear in Manual by product decision, with a visible explanation. Unspecified grades remain unknown. Skill extraction uses a conservative dictionary and source sentences; API/mobile product mentions without skill evidence are excluded. This is not full semantic analysis.

Checks:

```
python -m unittest discover -s scripts/qa-market -v
node --test tests/filter-state.test.mjs
```

## Telegram

`python scripts/qa-market/telegram_collect.py` reads public `@unilance` text posts from the last 30 days (up to 20 preview pages). The independent `Refresh Telegram QA posts` workflow requests runs twice hourly at minutes 17 and 47; GitHub may delay scheduled jobs. No account, bot token or channel membership is used. Failure preserves the last Telegram snapshot and does not block hh collection. Photo/video-only content is not scanned.

Only posts with a QA role, hiring evidence and Uzbekistan/worldwide eligibility are published. Ambiguous posts are counted for review but not exposed as vacancies. The filter does not establish authenticity. Explicit hh vacancy links matching existing records are merged to prevent double counting; other reposts may still be separate. Deleted Telegram posts are not interpreted as confirmed closed jobs. Collection freshness is shown, and a warning appears after two days without updates.

## Daily delivery audit

`python scripts/qa-market/daily_audit.py` reconciles yesterday and today in Asia/Tashkent against deployed `data.json` and `telegram-data.json`. `--date YYYY-MM-DD` reruns one day. The audit runs at 07:40 Tashkent and after either source collection finishes. It keeps 90 dated reports in `qa-bozor/audit-data.json`.

Counts are based on the configured searches/channel inventory, not a separate census of all QA vacancies. Confirmed, delivered, missing, stale content, review candidates and media-only unreadable posts are separate. A failed site fetch is unknown, never zero. A collection finishing before day end is provisional. Canonical source manifests are compared with public deployed payloads, including ID and title/salary/description/requirements. Current UI filters do not affect delivery counts. Archived jobs are reported as delivered but intentionally hidden. Deployment differences are rechecked twice before they are recorded.

## Reliability and scheduling limits

Telegram public-page requests retry at most three times for transient transport/empty markup errors. Access/rate-limit responses and CAPTCHA are not bypassed. Failed responses are kept as short-retention CI diagnostics; a failed attempt cannot replace a good snapshot. A separate per-source health file is published even when collection fails, and the dashboard distinguishes latest attempt from last good data.

The recovery workflow checks source freshness, avoids already running/recent attempts, and dispatches overdue collection. It runs after audit and has an hourly best-effort schedule. All GitHub schedules may be delayed/dropped; these mechanisms reduce missed runs but cannot supply an exact-time SLA. For that, move scheduling to an always-on server or external scheduler. No external server scheduler has been installed yet.

Generated snapshot publication retries non-fast-forward races without force push. HH collection still stops on 403/CAPTCHA/429 and preserves its last complete snapshot.

### VPS freshness watchdog

`vps_watchdog.py` uses only Python standard libraries. The supplied systemd timer checks main-branch source health every five minutes. It dispatches hh after 07:00 Asia/Tashkent when today has no successful snapshot, and Telegram when its snapshot is at least 30 minutes old. Active runs and a 30-minute retry cooldown prevent duplicate dispatches. Collection, retained SQLite artifacts, publishing and delivery audits remain in GitHub Actions; GitHub queue time still applies.

Install the script at `/opt/qa-market-watchdog/vps_watchdog.py` and units from `systemd/` under `/etc/systemd/system/`. Store a repository Actions-write credential as `GH_TOKEN=...` in `/etc/qa-market-watchdog.env` with owner root and mode 0600. Never commit this file. Enable `qa-market-watchdog.timer`; inspect `journalctl -u qa-market-watchdog.service` for freshness/dispatch/errors. Credential expiry or server downtime requires operator attention. `--dry-run` verifies authenticated read access without dispatching.
