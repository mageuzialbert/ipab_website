import type { Lang } from "@/lib/i18n";

/**
 * Home page copy. English verbatim from CONTENT.md.
 * Swahili drafted in translation; TODO (Albert): review before launch.
 */

export const HERO: Record<
  Lang,
  {
    eyebrow: string;
    h1: string;
    /** Word inside h1 rendered in brand blue. */
    h1Highlight: string;
    subhead: string;
    ctaPrimary: string;
    ctaSecondary: string;
  }
> = {
  en: {
    eyebrow: "iPAB International; Tanzania",
    h1: "Your business is leaking money. We find it.",
    h1Highlight: "money",
    // Alt H1 options, pick at review:
    // "We fix broken businesses with technology."
    // "Know every shilling. Keep every customer."
    subhead:
      "iPAB installs a simple system that tracks every sale, every item of stock, and every customer; so nothing goes missing and more customers come back. Already running in 1,220+ Tanzanian businesses.",
    ctaPrimary: "Chat on WhatsApp",
    ctaSecondary: "See how it works",
  },
  sw: {
    eyebrow: "iPAB International; Tanzania",
    h1: "Biashara yako inapoteza pesa. Tunakuonyesha panapopotea.",
    h1Highlight: "pesa",
    subhead:
      "iPAB inakuwekea mfumo rahisi unaofuatilia kila mauzo, kila bidhaa ya stoo, na kila mteja; hakuna kinachopotea, na wateja wengi zaidi wanarudi. Tayari unatumika kwenye biashara 1,220+ za Tanzania.",
    ctaPrimary: "Chati WhatsApp",
    ctaSecondary: "Inavyofanya kazi",
  },
};

export const TRUST_BAR: Record<Lang, { line: string }> = {
  en: {
    line: "Trusted by 1,220+ paying businesses across Tanzania; pharmacies, hotels, colleges, wholesalers.",
    // TODO: real client logos (grayscale 60% opacity, full on hover)
  },
  sw: {
    line: "Inaaminiwa na biashara 1,220+ zinazolipia Tanzania; maduka ya dawa, hoteli, vyuo, wauzaji wa jumla.",
  },
};

export const PROBLEMS: Record<
  Lang,
  {
    heading: string;
    cards: { title: string; body: string }[];
    closer: string;
  }
> = {
  en: {
    heading: "Sound familiar?",
    cards: [
      {
        title: "Stock disappears.",
        body: "You buy 100, sell 70, and somehow 20 are missing. Nobody knows where.",
      },
      {
        title: "You can't see today's numbers.",
        body: 'You ask "how much did we sell?" and wait for someone to count.',
      },
      {
        title: "Customers buy once and vanish.",
        body: "No records, no follow-up, no repeat sales.",
      },
    ],
    closer:
      "We've fixed this exact situation in 1,220+ businesses. Yours is next.",
  },
  sw: {
    heading: "Unayafahamu haya?",
    cards: [
      {
        title: "Stoo inapotea.",
        body: "Unanunua 100, unauza 70, na 20 hazijulikani zilipo. Hakuna anayejua.",
      },
      {
        title: "Huwezi kuona mauzo ya leo.",
        body: 'Unauliza "tumeuza kiasi gani?" halafu unasubiri mtu ahesabu.',
      },
      {
        title: "Wateja wananunua mara moja, wanatoweka.",
        body: "Hakuna kumbukumbu, hakuna ufuatiliaji, hakuna mauzo ya marudio.",
      },
    ],
    closer:
      "Tumeshatatua tatizo hili hili kwenye biashara 1,220+. Yako inafuata.",
  },
};

export const SOLUTION_INTRO: Record<Lang, { heading: string; body: string }> =
  {
    en: {
      heading: "One system. Full control.",
      body: "We don't sell you an app and disappear. We study your business, install the right system, train your people, and stay until it works.",
    },
    sw: {
      heading: "Mfumo mmoja. Udhibiti kamili.",
      body: "Hatukuuzii app halafu tukatoweka. Tunaisoma biashara yako, tunafunga mfumo unaofaa, tunafundisha watu wako, na tunabaki mpaka ufanikiwe.",
    },
  };

export const HOW_IT_WORKS: Record<
  Lang,
  { heading: string; steps: { title: string; body: string }[] }
> = {
  en: {
    heading: "How it works",
    steps: [
      {
        title: "Talk to us.",
        body: "One WhatsApp message. We visit and study how your business runs.",
      },
      {
        title: "We install and train.",
        body: "Setup plus staff training, typically in days; not months.",
      },
      {
        title: "You take control.",
        body: "Sales, stock, and customers on your phone. Live.",
      },
    ],
  },
  sw: {
    heading: "Inavyofanya kazi",
    steps: [
      {
        title: "Ongea nasi.",
        body: "Ujumbe mmoja wa WhatsApp. Tunakuja kuona jinsi biashara yako inavyoendeshwa.",
      },
      {
        title: "Tunafunga na kufundisha.",
        body: "Usimikaji na mafunzo ya wafanyakazi; kwa kawaida ndani ya siku chache, si miezi.",
      },
      {
        title: "Unachukua udhibiti.",
        body: "Mauzo, stoo, na wateja kwenye simu yako. Papo hapo.",
      },
    ],
  },
};

export const PRICING_TEASER: Record<
  Lang,
  { eyebrow: string; heading: string; body: string; cta: string }
> = {
  en: {
    eyebrow: "Pricing",
    heading: "From TZS 15,000/month",
    body: "One-time installation from TZS 50,000, then a monthly plan billed every 3 months. Public pricing, no surprises.",
    cta: "See pricing",
  },
  sw: {
    eyebrow: "Bei",
    heading: "Kuanzia TZS 15,000/mwezi",
    body: "Usimikaji wa mara moja kuanzia TZS 50,000, kisha mpango wa mwezi unaolipwa kila miezi 3. Bei ziko wazi, hakuna cha kushtukiza.",
    cta: "Ona bei",
  },
};

export const FINAL_CTA: Record<
  Lang,
  { heading: string; sub: string; button: string }
> = {
  en: {
    heading: "Find out where your business is leaking.",
    sub: "One WhatsApp message. We'll tell you exactly what we'd fix.",
    button: "Chat on WhatsApp",
  },
  sw: {
    heading: "Jua biashara yako inapoteza pesa wapi.",
    sub: "Ujumbe mmoja wa WhatsApp. Tutakuambia hasa tungerekebisha nini.",
    button: "Ongea nasi WhatsApp",
  },
};
