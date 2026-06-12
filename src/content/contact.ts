import type { Lang } from "@/lib/i18n";

/**
 * Contact page copy. English per CONTENT.md.
 * Swahili drafted in translation; TODO (Albert): review before launch.
 */

export const CONTACT: Record<
  Lang,
  {
    eyebrow: string;
    h1: string;
    sub: string;
    whatsappHeading: string;
    whatsappBody: string;
    callUs: string;
    visitUs: string;
    openMap: string;
    emailUs: string;
  }
> = {
  en: {
    eyebrow: "Contact",
    h1: "Talk to a human. Today.",
    sub: "WhatsApp is the fastest way to reach us; real people in Dar es Salaam, not a ticket queue.",
    whatsappHeading: "Chat on WhatsApp",
    whatsappBody:
      "Fastest reply. Tell us what's leaking; stock, sales, or customers; and we'll tell you what we'd fix.",
    callUs: "Call us",
    visitUs: "Visit us",
    openMap: "Open in Google Maps",
    emailUs: "Email us",
  },
  sw: {
    eyebrow: "Wasiliana",
    h1: "Ongea na binadamu. Leo.",
    sub: "WhatsApp ndiyo njia ya haraka zaidi ya kutufikia; watu halisi Dar es Salaam, si foleni ya tiketi.",
    whatsappHeading: "Ongea nasi WhatsApp",
    whatsappBody:
      "Majibu ya haraka. Tuambie kinachopotea; stoo, mauzo, au wateja; tutakuambia tungerekebisha nini.",
    callUs: "Tupigie",
    visitUs: "Tutembelee",
    openMap: "Fungua ramani ya Google",
    emailUs: "Tuandikie barua pepe",
  },
};
