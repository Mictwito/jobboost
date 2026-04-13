@AGENTS.md

# JobBoost — Project Summary

## Goal

Smart Hebrew career platform focused on tech/IT roles. Helps candidates find jobs, understand what recruiters want, and stand out. Built MVP-first — no scraping, no live AI, no automation yet.

---

## Tech Stack

| Layer | Choice |
|-------|--------|
| Framework | Next.js 16.2.3 — App Router, `src/` dir, TypeScript |
| Styling | Tailwind CSS v4 — `@import "tailwindcss"` in globals.css (no config file) |
| Font | Heebo (Google Fonts) — `subsets: ['hebrew', 'latin']` |
| Layout | RTL — `lang="he" dir="rtl"` on `<html>` |
| Email | Resend SDK — `from: 'onboarding@resend.dev'` for testing |
| Runtime | Node.js 24, React 19 |

**Critical Next.js 16 patterns:**
- `params` and `searchParams` are `Promise<{...}>` — must `await` them
- `useSearchParams()` in client components requires a `<Suspense>` parent
- Server components that are async can fetch data directly — no `useEffect`

---

## Project Structure

```
src/
  app/
    page.tsx                  # Homepage — hero, featured jobs, articles, email capture
    layout.tsx                # Root layout — Heebo font, RTL html tag
    globals.css               # Just: @import "tailwindcss"
    not-found.tsx             # Hebrew 404
    jobs/
      page.tsx                # Server component — passes jobs[] to JobsContent
      JobsContent.tsx         # 'use client' — search, location filter, grid
      [slug]/page.tsx         # Job detail — all enrichment sections + MatchScoreWidget
    apply/
      [slug]/page.tsx         # Apply page server wrapper
      [slug]/ApplyForm.tsx    # 'use client' — connected to /api/apply (Resend)
    articles/
      page.tsx                # Articles grid
      [slug]/page.tsx         # Article detail — inline markdown renderer
    tools/
      page.tsx                # Tools overview (4 AI tools)
      cv/page.tsx             # CV Improver — mock 3-step flow
      salary/page.tsx         # Salary Calculator — dropdown + experience
      career/page.tsx         # Career Agent — chat UI with predefined answers
    api/
      apply/route.ts          # POST — sends email via Resend to mictwito@gmail.com
      leads/route.ts          # POST — captures email leads (console.log for now)
  components/
    Header.tsx                # Sticky nav — links: דף הבית, משרות, מאמרים, כלים
    Footer.tsx                # Dark footer with nav links
    JobCard.tsx               # Job card — CTA: "בדוק התאמה למשרה"
    ArticleCard.tsx           # Article card with category badge
    SearchBar.tsx             # 'use client' — useRouter for search navigation
    EmailCapture.tsx          # 'use client' — POSTs to /api/leads
    MatchScoreWidget.tsx      # 'use client' — 3-step mock match score (42–91%)
  data/
    jobs.ts                   # 17 static tech jobs — full type + all enrichment fields
    articles.ts               # 12 Hebrew career articles
```

---

## Current State

### What works
- **17 tech jobs** across: Frontend, Backend, Fullstack, DevOps, QA, Data Engineering, Data Science, ML, AI, Cyber Security, IT/Sysadmin
- **Job detail pages** with 6 enrichment sections:
  - תיאור המשרה, דרישות, למי המשרה מתאימה, למה כדאי להגיש, טיפים להתבלט, איך להתקבל למשרה הזו, מה המגייס באמת מחפש
  - MatchScoreWidget — interactive mock score (Junior/Mid/Experienced/Senior)
- **12 career articles** covering: entering tech, CV writing, ATS, technical interviews, salaries 2026, AI impact, LinkedIn strategy, mistakes to avoid, portfolio building
- **4 AI tools** (all mock/UI only): CV Improver, Salary Calculator, Career Agent chat, Match Score
- **Apply form** connected to Resend API — sends to mictwito@gmail.com
- **Email capture** component (leads saved to console for now — no DB yet)
- **Homepage**: Hero with search, AI tools strip, featured jobs, 6 articles, value section, email capture

### What's mock / not yet real
- All AI features (CV scoring, match %, career agent) — predefined responses only
- Email leads — `console.log` only, no database
- Job data — static TypeScript array, not from a live source

---

## Important Decisions

### Company names
Never use "מלם טים" or generic AI phrases like "חברת SaaS בצמיחה". Use natural, realistic descriptions:
- "חברת SaaS בצמיחה מהירה", "סקייל-אפ בתחום הפינטק", "מרכז R&D של חברה גלובלית", "סטארטאפ בשלב Seed"

### Job enrichment philosophy
Every job has opinionated, specific content — not generic placeholders:
- `whoIsItFor` — describes the mindset, not just skills
- `whyApply` — concrete reasons (ownership, culture, impact, equity)
- `tips` — actionable prep, not "be yourself"
- `howToGetHired` — what to bring to the interview
- `whatRecruiterLooksFor` — honest recruiter lens

### No scraping
Tried fetching from Malam Team careers page — blocked by Cloudflare JS challenge (HTTP 403 on all server-to-server requests). Decision: use high-quality static data.

### Tailwind v4
No `tailwind.config.ts`. Config is zero — just `@import "tailwindcss"` in `globals.css`. Do not create a config file.

---

## Environment Variables

```env
# .env.local (not committed)
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
CONTACT_EMAIL=mictwito@gmail.com
```

Apply form sends from `onboarding@resend.dev` (Resend test domain — no domain verification needed).

---

## Next Steps

### High priority
1. **Real email leads storage** — connect `/api/leads` to a DB (Vercel KV, Postgres, or Resend Contacts API) instead of `console.log`
2. **More jobs** — expand from 17 to 40-50 with same quality content
3. **Category filter** on jobs page — currently only location filter exists

### Medium priority
4. **Real CV analysis** — integrate Claude API behind `/api/cv-analyze`
5. **Real salary data** — pull from actual market surveys or connect to data source
6. **SEO** — add `sitemap.xml`, `robots.txt`, structured data (JobPosting schema) per job
7. **Deploy to Vercel** — project is ready, just needs `vercel deploy`

### Nice to have
8. **Email alerts** — let users subscribe to job categories (needs DB + cron)
9. **Admin panel** — simple `/admin` to add/edit jobs without touching code
10. **Analytics** — track which jobs get most views and applications
