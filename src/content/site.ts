import type { Lang } from "@/lib/i18n";

/** Brand facts; source of truth: CONTENT.md. Never invent claims or numbers. */

export const SITE = {
  name: "iPAB",
  legalName: "iPAB International Limited",
  tagline: "We Fix Businesses With Technology",
  taglineSw: "Tunatengeneza Biashara kwa Teknolojia",
  url: "https://ipab.co.tz",
  location: "Dar es Salaam, Tanzania",
  hours: "Mon–Sat 8:00–17:00",
  hoursSw: "Jumatatu–Jumamosi 8:00–17:00",
  phones: ["+255 743 525 913", "+255 759 561 311"],
  whatsappNumber: "255759561311",
  instagram: "https://instagram.com/ipab_international",
  // TODO: confirm email address (old site obfuscated it)
  email: null as string | null,
} as const;

/**
 * WhatsApp prefill messages per page (raw text; waLink() handles encoding).
 * English verbatim from CONTENT.md; Swahili drafted; TODO (Albert): review.
 */
export const WA_PREFILLS: Record<
  Lang,
  {
    global: string;
    smartpoint: string;
    smartpharmacy: string;
    smarthotels: string;
    smartcolleges: string;
    pricingTier: (tier: string) => string;
  }
> = {
  en: {
    global: "Hi iPAB, I want to stop losses in my business. Can we talk?",
    smartpoint: "Hi iPAB, I'm interested in SmartPoint for my business.",
    smartpharmacy: "Hi iPAB, I run a pharmacy and want to see SmartPharmacy.",
    smarthotels: "Hi iPAB, I'd like a demo of SmartHotels for my hotel/lodge.",
    smartcolleges:
      "Hi iPAB, I manage a college and need help with NACTE requirements.",
    pricingTier: (tier: string) =>
      `Hi iPAB, I'm interested in the ${tier} plan. What's included?`,
  },
  sw: {
    global:
      "Habari iPAB, nataka kuzuia upotevu kwenye biashara yangu. Tunaweza kuongea?",
    smartpoint: "Habari iPAB, ninavutiwa na SmartPoint kwa biashara yangu.",
    smartpharmacy:
      "Habari iPAB, nina duka la dawa na ningependa kuona SmartPharmacy.",
    smarthotels:
      "Habari iPAB, ningependa demo ya SmartHotels kwa hoteli/lodge yangu.",
    smartcolleges:
      "Habari iPAB, ninasimamia chuo na nahitaji msaada na mahitaji ya NACTE.",
    pricingTier: (tier: string) =>
      `Habari iPAB, ninavutiwa na mpango wa ${tier}. Nini kinajumuishwa?`,
  },
};

/** Secondary cloud services; footer only, never compete with the 4 solutions. */
export const CLOUD_SERVICES: Record<Lang, string[]> = {
  en: ["website hosting", "professional email", "bulk SMS"],
  sw: ["kuhifadhi tovuti", "barua pepe za kikazi", "SMS kwa wingi"],
};
