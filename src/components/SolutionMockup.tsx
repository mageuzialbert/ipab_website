import CollegeMockup from "@/components/CollegeMockup";
import DashboardMockup from "@/components/DashboardMockup";
import HotelMockup from "@/components/HotelMockup";
import PharmacyMockup from "@/components/PharmacyMockup";
import type { Solution } from "@/content/solutions";

/** Picks the per-industry coded mockup. All are illustrative visuals. */
export default function SolutionMockup({ slug }: { slug: Solution["slug"] }) {
  if (slug === "smartpoint") return <DashboardMockup />;

  return (
    <div aria-hidden="true" className="select-none">
      {slug === "smartpharmacy" && <PharmacyMockup />}
      {slug === "smarthotels" && <HotelMockup />}
      {slug === "smartcolleges" && <CollegeMockup />}
    </div>
  );
}
