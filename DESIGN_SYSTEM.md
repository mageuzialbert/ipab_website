# iPAB Design System

Goal feel: **premium, calm, engineered, Tanzanian-proud.** Benchmarks: Stripe (calm focus, product-led), Linear (typographic precision, spacing discipline), Flutterwave/Paystack (warmth + trust for African markets). If a section looks like a cheap HTML template, it's wrong.

## Colors
```
--navy:        #0A1A2F   primary background for dark sections, headlines
--navy-800:    #11263F   cards on dark
--white:       #FFFFFF   main background (site is light-first)
--off-white:   #F6F8FB   alternating section background
--ink:         #0F172A   body text on light
--slate:       #5B6B82   secondary text
--ipab-blue:   #1B6DF3   primary accent, links, key UI (adjust to logo blue — check assets)
--ipab-green:  #16A34A   WhatsApp CTAs ONLY (+ success states). Never decorative.
--amber:       #F5A623   tiny accents, stat highlights, sparingly
```
Rules: light site with strategic dark-navy sections (hero optional, stats, final CTA band). WhatsApp green is reserved for conversion actions — it must be the most clickable-looking thing on every screen. Contrast AA minimum.

## Typography
- Display/headings: **Sora** (or General Sans) — bold, tight tracking (-0.02em).
- Body/UI: **Inter**.
- Scale (desktop / mobile): h1 56/36, h2 40/28, h3 24/20, body 17/16, small 14. Line-height: headings 1.1, body 1.6.
- Headlines max ~8 words. Sentence case, not Title Case. No ALL CAPS except tiny eyebrow labels (12px, letter-spacing 0.08em, slate).

## Spacing & layout
- Container max-w 1200px. Section padding-y: 96px desktop / 64px mobile.
- 8px spacing grid. Generous whitespace — when in doubt, add space.
- Cards: radius 16px, border 1px slate/10%, shadow only on hover (lift 4px, 0.2s ease).
- Glows & gradients — allowed ONLY in two places, never elsewhere:
  1. Dark navy sections (hero, stat bar, final CTA band): one or two static radial
     blue glows (<30% peak opacity) + a masked 1px line grid (white at ~5%).
     Pure CSS, no canvas, nothing animated except entrances.
  2. Featured cards (max one per section, e.g. SmartPoint): a 1px gradient hairline
     border (blue→amber). Body-section cards may use a mouse-following spotlight
     hover (radial-gradient at cursor, ≤7% opacity).
  Everything else stays flat. Green remains WhatsApp-only. No glow may ever compete
  with the WhatsApp CTA for attention.
- Buttons: radius 12px, py-3.5 px-6, semibold. Primary = green (WhatsApp icon + label), secondary = navy outline.

## Imagery
- NO stock photos, NO 3D illustration packs, NO template shapes/blobs.
- Product UI mockups built in code: rounded-2xl window frame, subtle shadow, simplified dashboard (sales numbers in TZS, stock alerts, attendance %) — readable but stylized.
- Subtle dot-grid or thin-line pattern allowed on dark sections at <5% opacity. Light sections may carry a 1px line grid at ≤7% slate, masked to fade out.
- Real client logos grayscale at 60% opacity, full on hover.

## Motion
- Framer Motion, `viewport={{ once: true }}`. Entrance: opacity 0→1 + y 12→0, 0.4s, stagger 0.08s.
- Stat counters animate on scroll-into-view (1s).
- Floating WhatsApp button: gentle pulse ring every ~4s.
- Nothing autoplays, nothing loops aggressively, nothing blocks first paint. Respect `prefers-reduced-motion`.

## Voice in UI
Microcopy is part of design: buttons say what happens ("Chat on WhatsApp", "See SmartPharmacy") never "Learn more"/"Submit". Numbers formatted as `TZS 30,000/month`.
