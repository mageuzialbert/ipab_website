import type { Metadata } from "next";
import PricingView from "@/views/PricingView";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Honest, public pricing. One-time installation from TZS 50,000, monthly plans from TZS 15,000; billed every 3 months. No hidden costs.",
  alternates: {
    canonical: "/pricing",
    languages: { en: "/pricing", sw: "/sw/pricing" },
  },
};

export default function PricingPage() {
  return <PricingView lang="en" />;
}
