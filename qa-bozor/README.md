# QA Bozor

Static QA vacancy dashboard served at `/qa-bozor` inside QA Academy.

Edit HTML/CSS/JS here; `data.json` is a collected snapshot, not a live API. Data collection time and coverage are displayed in the dashboard. Daily collection is configured in `.github/workflows/qa-market.yml`; see `scripts/qa-market/README.md`. Only complete collections publish a new snapshot.

Preview from repository root: `python3 -m http.server 8851` then open `/qa-bozor/`. Assets use the `/qa-bozor/` prefix so Vercel clean URLs work with or without a trailing slash.

Filters are stored in URL query parameters; leaving the vacancies view clears its search text. Main and Russian homepage navigation link here. Production follows the existing repository deployment integration.

Telegram posts are loaded independently from `telegram-data.json`. `@unilance` is scanned hourly over the last 30 days. Source filters use `?source=telegram` or `?source=hh.uz`. Telegram failures preserve its previous snapshot and do not prevent hh jobs from loading.

Source health cards distinguish the last attempt from the last complete snapshot and warn about stale data. Recovery dispatches overdue GitHub workflows but cannot guarantee exact-time scheduling while GitHub cron is the only clock.
