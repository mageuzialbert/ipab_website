import type { Metadata } from "next";
import ContactView from "@/views/ContactView";

export const metadata: Metadata = {
  title: "Wasiliana",
  description:
    "Ongea na binadamu iPAB; WhatsApp, simu, au tutembelee Dar es Salaam. Jumatatu–Jumamosi 8:00–17:00.",
  alternates: {
    canonical: "/sw/contact",
    languages: { en: "/contact", sw: "/sw/contact" },
  },
};

export default function SwContactPage() {
  return <ContactView lang="sw" />;
}
