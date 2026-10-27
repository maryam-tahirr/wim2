# WIM website

React + TypeScript site bundled with esbuild. Copy comes from `WIM_Website_Content_Rebuild.pdf`.

## Build and deploy
    npm install
    npm run build        # outputs dist/ (one index.html per route, sitemap.xml, robots.txt, 404.html)
Upload `dist/` to any static host (Netlify, Vercel, Cloudflare Pages, S3). Each route has its own HTML file, so direct URLs and refreshes work without rewrites. `public/_redirects` serves `404.html` for unknown URLs.

## Environment variables (set at build time)
- `WIM_SITE_URL` canonical domain, default https://womeninmentoring.org
- `WIM_FORM_ENDPOINT` HTTPS URL accepting JSON POSTs (Supabase Edge Function, Formspree, etc.). Unset = forms validate but say nothing was sent and offer a mailto link. Keep any secret keys on the server side of that endpoint.
- `WIM_SHOW_VERIFY=false` for launch: hides amber "To verify" notes and unconfirmed items (planned programmes, unconfirmed regions, unverified team names).

## Before launch (fill in `src/config.ts`)
Official social URLs, verified community stats + date, approved testimonials, hero photography, founder approval/portrait, upcoming events (`src/pages/Events.tsx`), magazine issues (`src/pages/Magazine.tsx`), approved Privacy Policy and Terms (`src/pages/Legal.tsx`), confirmed chapters and programme status (`src/content/site.ts`).

## Not built (optional later phases)
Member portal, matching engine, payments, admin dashboard, individual magazine article pages (no article text supplied).
