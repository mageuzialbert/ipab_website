import type { Metadata } from "next";
import WhyView from "@/views/WhyView";

export const metadata: Metadata = {
  title: "Why iPAB",
  description:
    "iPAB started by sitting inside Tanzanian businesses and building what stops the bleeding. Today 1,220+ businesses run on iPAB every day.",
  alternates: {
    canonical: "/why-ipab",
    languages: { en: "/why-ipab", sw: "/sw/why-ipab" },
  },
};

export default function WhyIpabPage() {
  return <WhyView lang="en" />;
}
