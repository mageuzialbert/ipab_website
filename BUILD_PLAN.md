# iPAB Website — Build Plan

Stack: Next.js (App Router) + Tailwind + TypeScript + Framer Motion. Copy source: `CONTENT.md`. Visual rules: `DESIGN_SYSTEM.md`.

## Site map

```
/                      Home — the conversion machine
/solutions             Solutions overview (4 cards)
/solutions/smartpoint      SmartPoint — business management
/solutions/smartpharmacy   SmartPharmacy — pharmacy + AI audit
/solutions/smarthotels     SmartHotels — hotel management
/solutions/smartcolleges   SmartColleges — NACTE/NACTVET compliance
/pricing               Transparent pricing
/why-ipab              About + trust page
/contact               Contact (WhatsApp-first)
```

Global: sticky header (logo, Solutions dropdown, Pricing, Why iPAB, Contact + green "Chat on WhatsApp" button), floating WhatsApp button (all pages, bottom-right), footer (solutions links, contact, TIN/legal name "iPAB International Limited", Dar es Salaam, socials incl. instagram.com/ipab_international).

---

## Phase 1 — Foundation
1. `create-next-app` (TypeScript, Tailwind, App Router, src dir).
2. Design tokens in Tailwind config + globals from DESIGN_SYSTEM.md (colors, fonts, radii, shadows).
3. Layout: Header, Footer, WhatsAppButton (floating, with subtle pulse, deep-link with page-specific prefilled text helper `waLink(message)`).
4. `src/content/` — typed content objects copied from CONTENT.md (solutions, pricing, stats, FAQs, testimonials).

## Phase 2 — Home page (most important page; budget the most effort here)
Section order is a conversion sequence — do not reorder:
1. **Hero** — headline + subhead from CONTENT.md, primary CTA "Chat on WhatsApp", secondary "See how it works" (scrolls to product section). Right side: stylized SmartPoint dashboard mockup (coded, not an image). Above the fold on mobile: headline + CTA visible without scrolling.
2. **Trust bar** — "Trusted by 50+ businesses across Tanzania" + client logo strip (grayscale placeholders, TODO real logos) — immediately under hero.
3. **Problem section** — "Sound familiar?" 3 pain cards (stock disappearing, no idea what sold today, customers never come back).
4. **Solution section** — "One system. Full control." 4 solution cards linking to solution pages, each: icon, one-line outcome, "For: pharmacies / hotels / colleges / any business".
5. **How it works** — 3 steps: 1) Chat with us on WhatsApp, 2) We install + train your staff (1–3 days), 3) You see every shilling. Kills the "complicated software" fear.
6. **Stats bar** — animated counters: 50+ paying businesses · 4 industries · 24/7 support · trained staff count (TODO confirm).
7. **Testimonials** — 2–3 quotes (placeholders marked TODO until real ones provided; never invent client names).
8. **Pricing teaser** — "From TZS 15,000/month" + link to /pricing. Transparency = trust.
9. **FAQ** — top 5 from CONTENT.md (accordion).
10. **Final CTA band** — full-width: "Your business is leaking money. Find out where." + WhatsApp button.

## Phase 3 — Solution pages (one template, 4 instances)
Template sections: outcome hero with solution-specific WhatsApp prefill → "built for {industry}" pain list → feature grid (from CONTENT.md) → product mockup → mini-FAQ → CTA band. SmartColleges page must prominently mention NACTE/NACTVET requirements (attendance %, reports). SmartPharmacy must lead with AI audit + stock reports + client-facing catalogue.

## Phase 4 — Pricing, Why iPAB, Contact
- **/pricing**: install fee explainer (TZS 50K–1M depending on customization & training) + subscription tiers 15K / 30K / 50K / 100K / Custom, billed from 3 months. Tier table: what's included per tier (from CONTENT.md). Every tier CTA = WhatsApp with tier-specific prefill. FAQ: "Why an installation fee?", "Can I cancel?", hardware availability.
- **/why-ipab**: story ("we fix broken businesses"), the no-apps positioning statement as a centerpiece quote, values, team placeholder, Instagram embed/link, map/area served.
- **/contact**: WhatsApp primary card, phone numbers (+255 743 525 913, +255 759 561 311), email, Dar es Salaam, hours Mon–Sat 8:00–17:00. Optional simple mailto form — no backend.

## Phase 5 — Polish & verify
1. Motion: fade/slide-up on scroll (Framer Motion, `once: true`, subtle — 12px, 0.4s), counter animations, hover lift on cards. Nothing that delays content paint.
2. SEO: metadata per page, OG image (generate a branded one), sitemap.xml, robots.txt, schema.org.
3. QA checklist: all WhatsApp links open with correct prefill; responsive 375/768/1440; Lighthouse mobile ≥ 90 perf & SEO & a11y; no console errors; all TODO placeholders clearly marked for Albert.
4. Write `README.md` in the project: how to run, where to replace placeholders (logos, testimonials, photos), how to deploy to Vercel + point ipab.co.tz DNS.

## Definition of done
A visitor on a phone understands within 5 seconds what iPAB does, sees proof within 10, and can start a WhatsApp chat in one tap from anywhere on the site.
