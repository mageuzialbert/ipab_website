import type { Metadata } from "next";
import PricingView from "@/views/PricingView";

export const metadata: Metadata = {
  title: "Bei",
  description:
    "Bei za wazi. Usimikaji wa mara moja kuanzia TZS 50,000, mipango ya mwezi kuanzia TZS 15,000; inayolipwa kila miezi 3. Hakuna gharama za siri.",
  alternates: {
    canonical: "/sw/pricing",
    languages: { en: "/pricing", sw: "/sw/pricing" },
  },
};

export default function SwPricingPage() {
  return <PricingView lang="sw" />;
}
