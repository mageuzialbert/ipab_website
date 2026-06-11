import type { Metadata } from "next";
import ContactView from "@/views/ContactView";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk to a human at iPAB; WhatsApp, phone, or visit us in Dar es Salaam. Mon–Sat 8:00–17:00.",
  alternates: {
    canonical: "/contact",
    languages: { en: "/contact", sw: "/sw/contact" },
  },
};

export default function ContactPage() {
  return <ContactView lang="en" />;
}
