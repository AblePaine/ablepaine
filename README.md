# ablepaine.com

The AblePaine studio site — a static one-pager (no build step), deployed on
Vercel from this repo.

- `index.html` / `styles.css` / `site.js` — the page. Palette and fonts come
  from the Chevron Cut production set (charcoal #232428, Lab Ink #1A2438,
  copper #C08552, rust #A63D29; Zilla Slab display, Montserrat body).
- `assets/` — the locked Chevron Cut mark (production set, 2026-11-03) and
  favicons.
- Newsletter form posts to the shared Kit umbrella form — the same capture
  rail as doughmatrix.com / microradicle.com / saponis.app. The form ID is
  the `UMBRELLA_FORM_ID` constant in `site.js`.

DNS lives on Cloudflare (mail is Proton — do not touch MX/SPF records).
Web records: `A @ → 76.76.21.21`, `CNAME www → cname.vercel-dns.com`.
