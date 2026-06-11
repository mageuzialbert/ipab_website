# iPAB International — Website Rebuild

You are building the new website for **iPAB International Limited** (replaces ipab.co.tz).
Read `BUILD_PLAN.md`, `DESIGN_SYSTEM.md`, and `CONTENT.md` before writing any code. All copy lives in CONTENT.md — do not invent claims, numbers, or client names.

## Who iPAB is (never get this wrong)

iPAB is a Tanzanian tech company that **fixes broken businesses using technology**. It is NOT a web/app development agency.

> **Positioning rule: iPAB doesn't sell apps, websites, or systems. iPAB solves business problems — lost stock, untracked sales, missed revenue, no repeat customers — using its own proven systems.**

The old site looked like a generic template dev shop ("we build websites and apps"). The new site must kill that perception. Every headline sells an outcome, not software.

Products (solutions): SmartPoint (business management), SmartPharmacy, SmartHotels, SmartColleges (NACTE/NACTVET compliance), plus minor cloud services (hosting, pro email, bulk SMS).
Proof: 1,220+ paying subscribed businesses, 9,000+ daily active users, 57K invoices daily, TZS 600M daily transactions; including highly reputable Tanzanian businesses, across pharmacies, hotels, colleges, wholesalers.

## Goal

A **premium, high-converting, trustable** site — the best tech company site in Tanzania. Benchmarks: Stripe/Linear (calm precision, ruthless above-fold clarity, real product UI), Flutterwave/Paystack (warmth + trust for an African market).

Primary conversion: **WhatsApp chat** — `https://wa.me/255759561311?text=<prefilled per page, see CONTENT.md>`. Every page must have a reachable WhatsApp CTA within one scroll, plus a persistent floating WhatsApp button.

## Stack & rules

- **Next.js 14+ (App Router) + Tailwind CSS + TypeScript.** Framer Motion for animation. No CMS, no database — content as typed constants/MDX.
- Static export-friendly (`next build` must work without server features) so it can deploy on Vercel or basic hosting.
- Mobile-first. Most Tanzanian traffic is mobile on average connections: target Lighthouse 90+ mobile, total JS minimal, images via `next/image`, no heavy hero video.
- English only.
- One component per file, reusable section components (`Hero`, `LogoStrip`, `SolutionCard`, `StatBar`, `Testimonial`, `PricingTable`, `FAQ`, `CTABand`, `WhatsAppButton`).
- SEO: per-page metadata, OpenGraph, sitemap, schema.org `Organization` + `Product`. Title pattern: `{Page} — iPAB | We Fix Businesses With Technology`.
- No stock photos of fake offices/handshakes. Use product UI mockups (build simple stylized dashboard mockups in code/SVG), real numbers, and brand patterns instead. Placeholder boxes with TODO comments where real photos/screenshots are needed.
- Accessibility: semantic HTML, visible focus, contrast AA.

## Build order

Follow the phases in BUILD_PLAN.md in order. Finish and verify each phase (run dev server, check responsive at 375px / 768px / 1440px) before the next.

## Tone of all copy

Confident, direct, outcome-first, zero jargon. Short sentences. Numbers over adjectives. "Stop losing stock" beats "innovative scalable solutions". Never use: "innovative", "cutting-edge", "scalable solutions", "empower", "unlock potential".
