import type { Metadata } from "next";
import SolutionsView from "@/views/SolutionsView";

export const metadata: Metadata = {
  title: "Suluhisho",
  description:
    "SmartPoint, SmartPharmacy, SmartHotels, SmartColleges; mifumo iliyothibitishwa inayozuia hasara kwenye maduka, maduka ya dawa, hoteli, na vyuo vya Tanzania.",
  alternates: {
    canonical: "/sw/solutions",
    languages: { en: "/solutions", sw: "/sw/solutions" },
  },
};

export default function SwSolutionsPage() {
  return <SolutionsView lang="sw" />;
}
