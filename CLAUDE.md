# Contentedly.ai

A productised, sellable version of the Boxx Commercial Finance AI content engine.
One-time purchase, not a subscription — this is intentional and should not be changed
without the user explicitly asking. No monthly fees, no retainer, customer owns the code.

## What this is

- **DIY — $997**: codebase + Google Sheets template + prompts + video course. Customer builds it themselves.
- **DFY — $2,997**: built and configured by Mark, handed over running.
- Targets any business that needs content marketing automation (not just finance).
- Positioning: "Built by a business owner, not an agency." Proof = Boxx running live.

## Launch status

**Not launched yet.** The site is live and built, but purchasing is gated behind a
"Request Access" modal (not real checkout) — Mark is holding actual sales until
Boxx Commercial Finance (the proof case study) has 3-4 months of provable results
(AI visibility scores, traffic growth, rankings). Do not add real payment/checkout
flows unless explicitly asked — that's a deliberate decision, not an oversight.

## Stack

- React + Vite SPA, react-router-dom, react-helmet-async for per-page SEO
- Dark theme: navy (#0A0E1A) background, violet (#7C6FF0) primary accent, gold (#F0B23C) CTA accent
  — deliberately distinct from Boxx's navy/gold scheme
- **Form backend**: Google Apps Script webhook (see `apps-script/request-access.gs`), same
  zero-cost pattern already proven on Boxx's `MultiStepForm.jsx`. NOT Netlify Forms — the site
  deploys to SiteGround (traditional FTP/cPanel hosting), not Netlify.
- **Deploy**: GitHub Actions → FTP to SiteGround on push to `master`
  (`.github/workflows/deploy.yml`). FTP secrets and `VITE_GOOGLE_SCRIPT_URL` are GitHub repo secrets.
- Live at the SiteGround temp domain `markf319.sg-host.com` until `contentedly.ai` is purchased
  (domain was pending purchase as of late June 2026).

## Site structure

- `/` — homepage, 9 sections (hero, problem, solution, how-it-works, proof, pricing, FAQ, about, final CTA)
- `/done-for-you`, `/diy-content-system`, `/for-agencies`, `/for-professional-services` — landing pages
- Full copy source: see git history / original copy doc was `docs/contentedly-website-copy.md` in the
  Boxx Commercial Finance repo (separate repo — not present here)

## Known decisions worth respecting

- AI-generated illustrative images were tried in the hero and a feature card, then removed
  (user found them "terrible" — don't re-add generated images without asking first)
- AI visibility checking (ChatGPT/Perplexity/Claude/Gemini monitoring) and keyword research are
  major differentiators — keep them prominent, don't let them get buried in generic copy
- This was built and is maintained from a separate session/repo than Boxx Commercial Finance —
  treat them as fully independent codebases despite the shared origin
