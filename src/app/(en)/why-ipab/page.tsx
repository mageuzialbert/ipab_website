import type { Metadata } from "next";
import WhyView from "@/views/WhyView";

export const metadata: Metadata = {
  title: "Why iPAB",
  description:
    "iPAB shapes proven systems around how your business runs, with local support until it works. 1,220+ Tanzanian businesses run on iPAB, sharpened by 9,000+ daily users.",
  alternates: {
    canonical: "/why-ipab",
    languages: { en: "/why-ipab", sw: "/sw/why-ipab" },
  },
};

export default function WhyIpabPage() {
  return <WhyView lang="en" />;
}
