# Nirogya website

The marketing site for Nirogya: the home page (product, features, plans, FAQ,
security, demo request), the signup page and the privacy, terms and refund pages.

It is its **own app**, separate from the hospital app in `../frontend`: a Next.js 16 +
React 19 + TypeScript project with its own `package.json`, built as a static export.
The two share no code; they meet only at the "Sign in" link.

## Run it

```bash
cd website
npm install
npm run dev        # http://localhost:3100
npm run build      # static HTML in out/
npm test           # the signup module's tests (node --test, no extra packages)
npm start          # serves out/ on http://localhost:3100
```

Set at build time (see the root `.env.example`):

| Variable | Default | Used for |
|---|---|---|
| `NEXT_PUBLIC_APP_URL` | `http://localhost:3000` | "Sign in" links to `<this>/login` |
| `NEXT_PUBLIC_SITE_URL` | `http://localhost:3100` | the absolute share-image URL |
| `NEXT_PUBLIC_API_URL` | `http://localhost:8000` | the contact form and signup call `<this>/api/v1/public/…` from the browser; this site's origin must be in the API's `CORS_ORIGINS`, or signup says it "could not reach Nirogya" |

## Where things are

| Path | What |
|---|---|
| `src/app/layout.tsx` | the head: the design kit's stylesheets in their order, palette, page CSS |
| `src/app/page.tsx` | the home page, one component per section |
| `src/app/signup/page.tsx`, `src/components/SignupFlow.tsx` | signup: details → emailed code → password, then the app's `/auth/handoff` signs the person in and they pay there |
| `src/lib/signup.ts` | signup's checks, API calls and error sentences (tested by `npm test`) |
| `src/app/{privacy,terms,refunds}/page.tsx` | legal pages (drafts: **to be reviewed by a lawyer before launch**) |
| `src/components/sections/` | the home page's sections |
| `src/content/site.ts` | prices, plans, FAQ, contact address: each fact written once |
| `src/styles/` | the dealt palette and the page's own CSS (inlined after the kit) |
| `src/components/KitScripts.tsx` | loads the kit's scripts after React hydrates |
| `public/assets/` | the taste-skill design kit, copied as plain files (do not edit) |

## The design kit

The page is built on the taste-skill kit: its system CSS, UI fragments (the queue
window, consultation note, checklist, billing feed, bed chart, visit board, role
switches), diagrams, the liquid-type moment and the silk-folds / fluted-glass
grounds. The kit's checker and finish gate run on the built page:

```bash
npm run build
node <taste-skill>/scripts/gate.mjs --start out/index.html --root out
node <taste-skill>/scripts/gate.mjs
```

Waivers the gate accepts are in `.taste-skill/waivers.json`, each with its reason.

## Not done yet

- **Logo:** the arc mark in the nav and favicon is a stand-in until the logo arrives.
- **Domain:** add `alternates.canonical` in `layout.tsx` and set `NEXT_PUBLIC_SITE_URL`.
- **Sitemap and robots:** not generated yet.
- The signup token is kept in memory only: a refresh on the code step starts the
  details step again (the details are re-typed).
