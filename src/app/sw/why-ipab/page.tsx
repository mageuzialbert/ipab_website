import type { Metadata } from "next";
import WhyView from "@/views/WhyView";

export const metadata: Metadata = {
  title: "Kwa nini iPAB",
  description:
    "iPAB ilianza kwa kukaa ndani ya biashara za Tanzania na kujenga kinachozuia hasara. Leo biashara 1,220+ zinatumia iPAB kila siku.",
  alternates: {
    canonical: "/sw/why-ipab",
    languages: { en: "/why-ipab", sw: "/sw/why-ipab" },
  },
};

export default function SwWhyIpabPage() {
  return <WhyView lang="sw" />;
}
