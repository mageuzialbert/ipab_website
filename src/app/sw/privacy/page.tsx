import type { Metadata } from "next";
import PrivacyView from "@/views/PrivacyView";

export const metadata: Metadata = {
  title: "Sera ya Faragha",
  description:
    "Jinsi iPAB International inavyokusanya, kutumia, na kulinda taarifa zako katika tovuti, bidhaa, na namba ya WhatsApp Business.",
  alternates: {
    canonical: "/sw/privacy",
    languages: { en: "/privacy", sw: "/sw/privacy" },
  },
};

export default function SwPrivacyPage() {
  return <PrivacyView lang="sw" />;
}
