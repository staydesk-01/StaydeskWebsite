# TrulyHello website

Official website for **TrulyHello** — [https://trulyhello.com](https://trulyhello.com).

TrulyHello is an AI calling agent that turns customer conversations into completed business actions. This repo is the marketing site plus the form backends, in one Next.js app.

**Stack:** Next.js (App Router) · React · TypeScript · Tailwind CSS v4 · Framer Motion · MongoDB (Mongoose) · Zod

## Getting started

```bash
cp .env.example .env.local   # set MONGODB_URI and NEXT_PUBLIC_APP_URL
npm install
npm run dev                  # http://localhost:3000
```

| Script | Purpose |
|---|---|
| `npm run dev` | Local development server |
| `npm run build` | Production build |
| `npm start` | Serve the production build |

## Environment variables

| Variable | Required | Notes |
|---|---|---|
| `MONGODB_URI` | Yes | Form storage. Without it, forms return a generic error. |
| `NEXT_PUBLIC_APP_URL` | Production | Set to `https://trulyhello.com` (metadata, sitemap, Open Graph). |
| `RESEND_API_KEY`, `NOTIFY_EMAIL_TO`, `EMAIL_FROM` | No | Internal email notifications. If unset or failing, submissions still save. |

## Pages

`/` · `/product` · `/voice` · `/automation` · `/industries` · `/how-it-works` · `/company` · `/careers` · `/contact` · `/demo` · `/meeting` · `/early-access` · `/sign-in`

## Site configuration

`config/site.ts` is the single source of truth for the company name, title, description, contact email (`contact@trulyhello.com`) and the Cal.com booking URL. Navigation and footer links live in `lib/site.ts`.

## Backend

| Route | Collection | Notes |
|---|---|---|
| `POST /api/early-access` | `earlyaccesses` | |
| `POST /api/demo` | `demorequests` | UI then opens the Cal.com scheduler |
| `POST /api/contact` | `contacts` | |
| `POST /api/careers` | `careerinterests` | |
| `GET /api/health` | – | DB + email configuration status (no secrets) |

- Validation: Zod schemas in `lib/validation.ts` (shared with the client forms).
- Responses: success `{ success: true, data: { message } }`; validation errors `{ success: false, error, fieldErrors }` (400); rate limit 429; server error 500.
- Spam: honeypot field, 2-minute duplicate suppression, in-memory rate limit (`lib/api/rate-limit.ts`; swap for Redis when running multiple instances).
- Attribution: every record stores `source` (`?source=…`, else the page default) plus `utm_source/medium/campaign` and `pagePath`.
- Admin-ready: each model has a `status` (workflow enum), `createdAt`/`updatedAt`, and indexes on `status`, `source`, `createdAt`, `email`.
- Cal.com: the booking URL lives only in `config/site.ts`; use `components/ScheduleMeeting.tsx`.
- Auth: none yet. `/sign-in` is UI only; add real auth behind `lib/auth.ts`.

## Contact

[contact@trulyhello.com](mailto:contact@trulyhello.com)
