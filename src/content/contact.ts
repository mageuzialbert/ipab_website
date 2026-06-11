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
    addressTodo: string;
    emailTodo: string;
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
    addressTodo: "Exact address & map pin; TODO, to be provided",
    emailTodo:
      "Email address; TODO, being confirmed. Use WhatsApp or phone for now.",
  },
  sw: {
    eyebrow: "Wasiliana",
    h1: "Ongea na binadamu. Leo.",
    sub: "WhatsApp ndiyo njia ya haraka zaidi ya kutufikia; watu halisi Dar es Salaam, si foleni ya tiketi.",
    whatsappHeading: "Ongea nasi WhatsApp",
    whatsappBody:
      "Majibu ya haraka. Tuambie kinachovuja; stoo, mauzo, au wateja; tutakuambia tungerekebisha nini.",
    callUs: "Tupigie",
    visitUs: "Tutembelee",
    addressTodo: "Anwani kamili na ramani; TODO, italetwa baadaye",
    emailTodo:
      "Barua pepe; TODO, inathibitishwa. Tumia WhatsApp au simu kwa sasa.",
  },
};
