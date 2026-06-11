import type { Solution } from "@/content/solutions";

const PATHS: Record<Solution["slug"], React.ReactNode> = {
  // Dashboard screen with rising bars
  smartpoint: (
    <>
      <rect x="3" y="4" width="18" height="13" rx="2" />
      <path d="M7.5 13.5v-3M12 13.5V7.5M16.5 13.5v-4.5" />
      <path d="M9 21h6M12 17v4" />
    </>
  ),
  // Pharmacy cross in a shield (accountability)
  smartpharmacy: (
    <>
      <path d="M12 3l7 3v5c0 4.5-3 8.5-7 10-4-1.5-7-5.5-7-10V6l7-3z" />
      <path d="M12 8.5v6M9 11.5h6" />
    </>
  ),
  // Bed / front desk
  smarthotels: (
    <>
      <path d="M3 6v13" />
      <path d="M3 15h18v4" />
      <path d="M11 11h7a3 3 0 0 1 3 3v1" />
      <circle cx="7" cy="11.5" r="1.5" />
      <path d="M3 11.5h1" />
    </>
  ),
  // Graduation cap
  smartcolleges: (
    <>
      <path d="M12 4L2 9l10 5 10-5-10-5z" />
      <path d="M6 11.5V16c0 1.66 2.69 3 6 3s6-1.34 6-3v-4.5" />
      <path d="M22 9v5" />
    </>
  ),
};

export default function SolutionIcon({
  slug,
  className = "size-6",
}: {
  slug: Solution["slug"];
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {PATHS[slug]}
    </svg>
  );
}
