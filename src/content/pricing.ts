import { WA_PREFILLS } from "@/content/site";
import type { Lang } from "@/lib/i18n";

/**
 * English verbatim from CONTENT.md.
 * Swahili drafted in translation; TODO (Albert): review before launch.
 */

export const PRICING_INTRO: Record<
  Lang,
  {
    headline: string;
    sub: string;
    installLabel: string;
    installRange: string;
    installNote: string;
    hardwareLead: string;
    hardware: string;
    askOnWhatsApp: string;
    tiersHeading: string;
  }
> = {
  en: {
    headline: "Honest pricing. No hidden costs.",
    sub: "One-time installation covers setup, customization, and training your staff. Then a monthly plan, billed every 3 months.",
    installLabel: "One-time installation",
    installRange: "TZS 50,000 – 1,000,000",
    installNote:
      "Depends on customization and the number of staff to train. Exact quote after a free visit.",
    hardwareLead: "Need hardware?",
    hardware:
      "We also supply printers, scanners, and POS hardware. Ask on WhatsApp.",
    askOnWhatsApp: "Ask on WhatsApp",
    tiersHeading: "Pick a plan. Upgrade anytime.",
  },
  sw: {
    headline: "Bei za wazi. Hakuna gharama za siri.",
    sub: "Usimikaji wa mara moja unajumuisha usanidi, marekebisho, na mafunzo ya wafanyakazi wako. Kisha mpango wa mwezi, unaolipwa kila miezi 3.",
    installLabel: "Usimikaji wa mara moja",
    installRange: "TZS 50,000 – 1,000,000",
    installNote:
      "Inategemea marekebisho na idadi ya wafanyakazi wa kufundishwa. Bei kamili baada ya ziara ya bure.",
    hardwareLead: "Unahitaji vifaa?",
    hardware:
      "Tunauza pia printa, scanner, na vifaa vya POS. Ulizia kwenye WhatsApp.",
    askOnWhatsApp: "Ulizia WhatsApp",
    tiersHeading: "Chagua mpango. Panda daraja wakati wowote.",
  },
};

export type PricingTier = {
  name: string;
  /** Monthly price in TZS, or null for custom pricing. */
  priceTzs: number | null;
  audience: string;
  includes: string[];
  popular?: boolean;
  waPrefill: string;
};

// TODO: confirm exact inclusions per tier with Albert before launch; draft per CONTENT.md
export const PRICING_TIERS: Record<Lang, PricingTier[]> = {
  en: [
    {
      name: "Starter",
      priceTzs: 15_000,
      audience: "Small shop, 1 user",
      includes: ["Core system", "Daily reports", "WhatsApp support"],
      waPrefill: WA_PREFILLS.en.pricingTier("Starter"),
    },
    {
      name: "Business",
      priceTzs: 30_000,
      audience: "Growing business, multi-staff",
      includes: [
        "Everything in Starter",
        "Staff accounts",
        "Loss alerts",
        "Customer records",
      ],
      popular: true,
      waPrefill: WA_PREFILLS.en.pricingTier("Business"),
    },
    {
      name: "Pro",
      priceTzs: 50_000,
      audience: "Pharmacies, hotels, busy wholesalers",
      includes: [
        "Everything in Business",
        "AI audit / industry module",
        "Priority support",
      ],
      waPrefill: WA_PREFILLS.en.pricingTier("Pro"),
    },
    {
      name: "Max",
      priceTzs: 100_000,
      audience: "Multi-branch / colleges",
      includes: [
        "Everything in Pro",
        "Branches",
        "Advanced reports",
        "On-site visits",
      ],
      waPrefill: WA_PREFILLS.en.pricingTier("Max"),
    },
    {
      name: "Custom",
      priceTzs: null,
      audience: "Special requirements",
      includes: ["Tailored scope"],
      waPrefill: WA_PREFILLS.en.pricingTier("Custom"),
    },
  ],
  sw: [
    {
      name: "Starter",
      priceTzs: 15_000,
      audience: "Duka dogo, mtumiaji 1",
      includes: [
        "Mfumo wa msingi",
        "Ripoti za kila siku",
        "Msaada kwa WhatsApp",
      ],
      waPrefill: WA_PREFILLS.sw.pricingTier("Starter"),
    },
    {
      name: "Business",
      priceTzs: 30_000,
      audience: "Biashara inayokua, wafanyakazi wengi",
      includes: [
        "Yote ya Starter",
        "Akaunti za wafanyakazi",
        "Tahadhari za upotevu",
        "Kumbukumbu za wateja",
      ],
      popular: true,
      waPrefill: WA_PREFILLS.sw.pricingTier("Business"),
    },
    {
      name: "Pro",
      priceTzs: 50_000,
      audience: "Maduka ya dawa, hoteli, wauzaji wa jumla wenye shughuli nyingi",
      includes: [
        "Yote ya Business",
        "Ukaguzi wa AI / moduli ya sekta",
        "Msaada wa kipaumbele",
      ],
      waPrefill: WA_PREFILLS.sw.pricingTier("Pro"),
    },
    {
      name: "Max",
      priceTzs: 100_000,
      audience: "Matawi mengi / vyuo",
      includes: [
        "Yote ya Pro",
        "Matawi",
        "Ripoti za kina",
        "Ziara za ofisini kwako",
      ],
      waPrefill: WA_PREFILLS.sw.pricingTier("Max"),
    },
    {
      name: "Custom",
      priceTzs: null,
      audience: "Mahitaji maalum",
      includes: ["Huduma kulingana na mahitaji yako"],
      waPrefill: WA_PREFILLS.sw.pricingTier("Custom"),
    },
  ],
};

/** Format per design system: `TZS 30,000/month` / `TZS 30,000/mwezi`. */
export function formatTzsPerMonth(price: number | null, lang: Lang): string {
  if (price === null) return lang === "sw" ? "Tuongee" : "Let's talk";
  return `TZS ${price.toLocaleString("en-US")}/${lang === "sw" ? "mwezi" : "month"}`;
}
