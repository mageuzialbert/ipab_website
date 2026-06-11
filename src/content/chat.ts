import type { Lang } from "@/lib/i18n";

/**
 * AI chat widget copy. English authored here (chat is not in CONTENT.md).
 * Swahili drafted in translation; TODO (Albert): review before launch.
 */

export const CHAT: Record<
  Lang,
  {
    openAria: string;
    closeAria: string;
    title: string;
    subtitle: string;
    greeting: string;
    placeholder: string;
    send: string;
    sendToWhatsApp: string;
    error: string;
    errorCta: string;
  }
> = {
  en: {
    openAria: "Ask the iPAB assistant",
    closeAria: "Close chat",
    title: "iPAB Assistant",
    subtitle: "Two quick questions, then our team takes over on WhatsApp.",
    greeting:
      "Hi! I'm the iPAB assistant. Quick question so we point you to the right fix: what kind of business do you run?",
    placeholder: "Type your answer…",
    send: "Send",
    sendToWhatsApp: "Send my answers to iPAB on WhatsApp",
    error: "Something went wrong. Message us directly — we reply fast.",
    errorCta: "Chat on WhatsApp",
  },
  sw: {
    openAria: "Uliza msaidizi wa iPAB",
    closeAria: "Funga mazungumzo",
    title: "Msaidizi wa iPAB",
    subtitle: "Maswali mawili ya haraka, kisha timu yetu inaendelea WhatsApp.",
    greeting:
      "Habari! Mimi ni msaidizi wa iPAB. Swali la haraka ili tukuelekeze suluhisho sahihi: unaendesha biashara ya aina gani?",
    placeholder: "Andika jibu lako…",
    send: "Tuma",
    sendToWhatsApp: "Tuma majibu yangu kwa iPAB WhatsApp",
    error: "Kuna hitilafu. Tuandikie moja kwa moja — tunajibu haraka.",
    errorCta: "Ongea nasi WhatsApp",
  },
};
