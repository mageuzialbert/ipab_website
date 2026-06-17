import type { Metadata } from "next";
import PrivacyView from "@/views/PrivacyView";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How iPAB International collects, uses, and protects your information across our website, products, and WhatsApp Business number.",
  alternates: {
    canonical: "/privacy",
    languages: { en: "/privacy", sw: "/sw/privacy" },
  },
};

export default function PrivacyPage() {
  return <PrivacyView lang="en" />;
}
