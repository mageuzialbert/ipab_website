/**
 * Two languages: English (default, no URL prefix) and Swahili (/sw prefix).
 *
 * NOTE: CONTENT.md is the English source of truth. All Swahili copy in
 * src/content and here was drafted in translation; TODO (Albert): review
 * every Swahili string before launch.
 */

export type Lang = "en" | "sw";

export const LANGS: Lang[] = ["en", "sw"];

/** Prefix internal hrefs for the active language. */
export function localeHref(lang: Lang, path: string): string {
  return lang === "sw" ? (path === "/" ? "/sw" : `/sw${path}`) : path;
}

/** Map a pathname to its counterpart in the other language. */
export function alternatePath(lang: Lang, pathname: string): string {
  if (lang === "sw") {
    const stripped = pathname.replace(/^\/sw(?=\/|$)/, "");
    return stripped === "" ? "/" : stripped;
  }
  return pathname === "/" ? "/sw" : `/sw${pathname}`;
}

/** Shared UI strings (nav, buttons, chrome). Page copy lives in src/content. */
export const UI = {
  en: {
    nav: [
      { label: "Pricing", href: "/pricing" },
      { label: "Why iPAB", href: "/why-ipab" },
      { label: "Contact", href: "/contact" },
    ],
    solutions: "Solutions",
    allSolutions: "All solutions",
    chatOnWhatsApp: "Chat on WhatsApp",
    seePricing: "See pricing",
    seeTheFeatures: "See the features",
    see: "See",
    for: "For",
    mostPopular: "Most popular",
    chatAbout: (name: string) => `Chat about ${name}`,
    quickQuestions: "Quick questions",
    questionsAnswered: "Questions, answered.",
    skipToContent: "Skip to content",
    whatsappAria: "Chat with iPAB on WhatsApp",
    themeAria: "Switch between light and dark mode",
    footer: {
      solutions: "Solutions",
      company: "Company",
      talkToUs: "Talk to us",
      quote:
        "We don't build apps, websites, or systems. We solve business challenges with technology.",
      forClients: "For our clients",
      tagline: "We fix businesses with technology.",
    },
  },
  sw: {
    nav: [
      { label: "Bei", href: "/pricing" },
      { label: "Kwa nini iPAB", href: "/why-ipab" },
      { label: "Wasiliana", href: "/contact" },
    ],
    solutions: "Suluhisho",
    allSolutions: "Suluhisho zote",
    chatOnWhatsApp: "Ongea nasi WhatsApp",
    seePricing: "Ona bei",
    seeTheFeatures: "Ona vipengele",
    see: "Ona",
    for: "Kwa",
    mostPopular: "Inayopendwa zaidi",
    chatAbout: (name: string) => `Ulizia ${name}`,
    quickQuestions: "Maswali ya haraka",
    questionsAnswered: "Maswali yanayoulizwa sana",
    skipToContent: "Ruka kwenda kwenye maudhui",
    whatsappAria: "Ongea na iPAB kwa WhatsApp",
    themeAria: "Badilisha kati ya mandhari ya mwanga na giza",
    footer: {
      solutions: "Suluhisho",
      company: "Kampuni",
      talkToUs: "Wasiliana nasi",
      quote:
        "Hatutengenezi app, tovuti, wala mifumo. Tunatatua changamoto za biashara kwa teknolojia.",
      forClients: "Kwa wateja wetu",
      tagline: "Tunatengeneza biashara kwa teknolojia.",
    },
  },
} as const;
