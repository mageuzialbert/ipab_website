import { WA_PREFILLS } from "@/content/site";
import type { Lang } from "@/lib/i18n";

export type SolutionSlug =
  | "smartpoint"
  | "smartpharmacy"
  | "smarthotels"
  | "smartcolleges";

export const SOLUTION_SLUGS: SolutionSlug[] = [
  "smartpoint",
  "smartpharmacy",
  "smarthotels",
  "smartcolleges",
];

export type Solution = {
  slug: SolutionSlug;
  name: string;
  /** One-line outcome; sells the result, not the software. */
  tagline: string;
  /** "For: …" audience line used on cards. */
  audience: string;
  features: string[];
  waPrefill: string;
};

/**
 * English verbatim from CONTENT.md.
 * Swahili drafted in translation; TODO (Albert): review before launch.
 */
export const SOLUTIONS: Record<Lang, Solution[]> = {
  en: [
    {
      slug: "smartpoint",
      name: "SmartPoint",
      tagline: "Run your whole business from one screen.",
      audience: "Shops, wholesalers, and any business with stock and staff",
      features: [
        "Sales & POS tracking",
        "Stock control with loss alerts",
        "Expense tracking",
        "Customer records & repeat-sale follow-up",
        "Daily reports to your phone",
        "Staff accounts with permissions",
      ],
      waPrefill: WA_PREFILLS.en.smartpoint,
    },
    {
      slug: "smartpharmacy",
      name: "SmartPharmacy",
      tagline: "Every tablet accounted for.",
      audience: "Pharmacies",
      features: [
        "AI-powered audit that flags suspicious stock movement",
        "Automatic stock reports",
        "Expiry tracking",
        "Sales & prescriptions records",
        "Online catalogue your customers can browse",
        "Daily summary to the owner's phone",
      ],
      waPrefill: WA_PREFILLS.en.smartpharmacy,
    },
    {
      slug: "smarthotels",
      name: "SmartHotels",
      tagline: "Full house, zero chaos.",
      audience: "Hotels, lodges & guesthouses",
      features: [
        "Bookings & front desk",
        "Room status",
        "Restaurant/bar billing",
        "Housekeeping coordination",
        "Guest records for repeat business",
        "Owner's dashboard",
      ],
      waPrefill: WA_PREFILLS.en.smarthotels,
    },
    {
      slug: "smartcolleges",
      name: "SmartColleges",
      tagline: "NACTE compliance, handled.",
      audience: "Colleges under NACTVET",
      features: [
        "Collects NACTVET requirements automatically (incl. % attendance)",
        "Student records & results",
        "Fee tracking & balances",
        "Staff management",
        "Parent/student SMS notifications",
        "Reports ready for submission",
      ],
      waPrefill: WA_PREFILLS.en.smartcolleges,
    },
  ],
  sw: [
    {
      slug: "smartpoint",
      name: "SmartPoint",
      tagline: "Endesha biashara yako yote kwenye skrini moja.",
      audience:
        "Maduka, wauzaji wa jumla, na biashara yoyote yenye stoo na wafanyakazi",
      features: [
        "Ufuatiliaji wa mauzo na POS",
        "Udhibiti wa stoo na tahadhari za upotevu",
        "Ufuatiliaji wa matumizi",
        "Kumbukumbu za wateja na ufuatiliaji wa mauzo ya marudio",
        "Ripoti za kila siku kwenye simu yako",
        "Akaunti za wafanyakazi zenye ruhusa maalum",
      ],
      waPrefill: WA_PREFILLS.sw.smartpoint,
    },
    {
      slug: "smartpharmacy",
      name: "SmartPharmacy",
      tagline: "Kila kidonge kinahesabika.",
      audience: "Maduka ya dawa",
      features: [
        "Ukaguzi wa AI unaogundua mwenendo wa stoo unaotia shaka",
        "Ripoti za stoo za moja kwa moja",
        "Ufuatiliaji wa tarehe za mwisho wa matumizi",
        "Kumbukumbu za mauzo na maagizo ya daktari",
        "Katalogi ya mtandaoni ambayo wateja wako wanaweza kuangalia",
        "Muhtasari wa kila siku kwenye simu ya mmiliki",
      ],
      waPrefill: WA_PREFILLS.sw.smartpharmacy,
    },
    {
      slug: "smarthotels",
      name: "SmartHotels",
      tagline: "Wageni wamejaa, hakuna vurugu.",
      audience: "Hoteli, lodge na nyumba za wageni",
      features: [
        "Uhifadhi wa vyumba na mapokezi",
        "Hali ya vyumba",
        "Bili za mgahawa/baa",
        "Uratibu wa usafi wa vyumba",
        "Kumbukumbu za wageni kwa biashara ya marudio",
        "Dashibodi ya mmiliki",
      ],
      waPrefill: WA_PREFILLS.sw.smarthotels,
    },
    {
      slug: "smartcolleges",
      name: "SmartColleges",
      tagline: "Mahitaji ya NACTE, yameshughulikiwa.",
      audience: "Vyuo vilivyo chini ya NACTVET",
      features: [
        "Inakusanya mahitaji ya NACTVET moja kwa moja (pamoja na % ya mahudhurio)",
        "Kumbukumbu na matokeo ya wanafunzi",
        "Ufuatiliaji wa ada na bakaa",
        "Usimamizi wa wafanyakazi",
        "Taarifa za SMS kwa wazazi/wanafunzi",
        "Ripoti tayari kwa kuwasilishwa",
      ],
      waPrefill: WA_PREFILLS.sw.smartcolleges,
    },
  ],
};

export function getSolution(lang: Lang, slug: SolutionSlug): Solution {
  return SOLUTIONS[lang].find((s) => s.slug === slug)!;
}
