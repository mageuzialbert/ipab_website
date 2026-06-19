# iPAB Website Rebuild — Start Here

This folder is the working directory for Claude Code to build the new iPAB International website (replacing ipab.co.tz).

## How to start

```bash
cd ~/Desktop/ipab-website
claude
```

Then tell Claude Code:

> Read CLAUDE.md, BUILD_PLAN.md, DESIGN_SYSTEM.md and CONTENT.md, then build the website following the phases in BUILD_PLAN.md. Start with Phase 1.

## Files

- `CLAUDE.md` — Claude Code's standing instructions (positioning, stack, rules). It reads this automatically.
- `BUILD_PLAN.md` — site map + 5 build phases + definition of done.
- `DESIGN_SYSTEM.md` — colors, fonts, spacing, motion (Stripe/Linear-level bar).
- `CONTENT.md` — all website copy. Source of truth.

## Before launch — Albert's checklist

1. Replace TODOs in CONTENT.md: real client logos (with permission), 3 real testimonials, email address, exact office address, pricing tier inclusions, billing methods, lock-in policy.
2. Provide logo files + confirm exact brand blue.
3. Review the draft pricing table — it's a proposal, not final.
4. Confirm WhatsApp number +255 776 653 898 is the business line that will answer leads fast — speed of reply is half the conversion.
5. Deploy: Vercel (free) → point ipab.co.tz DNS. Claude Code will write deploy steps in the project README.
