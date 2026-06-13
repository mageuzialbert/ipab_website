import type { Metadata } from "next";
import WhyView from "@/views/WhyView";

export const metadata: Metadata = {
  title: "Kwa nini iPAB",
  description:
    "iPAB inaunda mifumo iliyothibitishwa kulingana na jinsi biashara yako inavyoendeshwa, na msaada wa karibu mpaka ufanikiwe. Biashara 1,220+ za Tanzania zinatumia iPAB, zikiboreshwa na watumiaji 9,000+ wa kila siku.",
  alternates: {
    canonical: "/sw/why-ipab",
    languages: { en: "/why-ipab", sw: "/sw/why-ipab" },
  },
};

export default function SwWhyIpabPage() {
  return <WhyView lang="sw" />;
}
