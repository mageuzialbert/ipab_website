import type { Metadata } from "next";
import SolutionsView from "@/views/SolutionsView";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "SmartPoint, SmartPharmacy, SmartHotels, SmartColleges; proven systems that stop losses in Tanzanian shops, pharmacies, hotels, and colleges.",
  alternates: {
    canonical: "/solutions",
    languages: { en: "/solutions", sw: "/sw/solutions" },
  },
};

export default function SolutionsPage() {
  return <SolutionsView lang="en" />;
}
