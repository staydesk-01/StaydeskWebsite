# TrulyHello website

Next.js (App Router) + Tailwind + Framer Motion, with form backends in the same app.

```bash
cp .env.example .env.local   # set MONGODB_URI
npm install
npm run dev                  # http://localhost:3000
```

## Backend
| Route | Collection | Notes |
|---|---|---|
| `POST /api/early-access` | `earlyaccesses` | |
| `POST /api/demo` | `demorequests` | UI then opens the Cal.com scheduler |
| `POST /api/contact` | `contacts` | |
| `POST /api/careers` | `careerinterests` | |
| `GET /api/health` | – | DB + email configuration status (no secrets) |

- Validation: Zod schemas in `lib/validation.ts` (shared with the client forms).
- Spam: honeypot field, 2-minute duplicate suppression, in-memory rate limit (`lib/api/rate-limit.ts`; swap for Redis when running multiple instances).
- Attribution: every record stores `source` (`?source=hero|navbar|footer|…`, else the page default) plus `utm_source/medium/campaign` and `pagePath`.
- Email: set `RESEND_API_KEY`, `NOTIFY_EMAIL_TO`, `EMAIL_FROM` to get internal notifications; if unset they're skipped and submissions still save.
- Admin-ready: each model has a `status` (workflow enum), `createdAt`/`updatedAt`, and indexes on `status`, `source`, `createdAt`, `email`.
- Cal.com: the booking URL lives only in `config/site.ts`; use `components/ScheduleMeeting.tsx`.
- Auth: none yet. `/sign-in` is UI only; add real auth behind `lib/auth.ts`.
