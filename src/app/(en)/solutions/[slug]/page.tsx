import type { Metadata } from "next";
import { SOLUTION_SLUGS, getSolution, type SolutionSlug } from "@/content/solutions";
import SolutionDetailView from "@/views/SolutionDetailView";

export const dynamicParams = false;

export function generateStaticParams() {
  return SOLUTION_SLUGS.map((slug) => ({ slug }));
}

type Params = { params: Promise<{ slug: SolutionSlug }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolution("en", slug);
  return {
    title: solution.name,
    description: `${solution.tagline} ${solution.name}; for ${solution.audience.toLowerCase()}. Installed, with staff training, by iPAB in Tanzania.`,
    alternates: {
      canonical: `/solutions/${slug}`,
      languages: {
        en: `/solutions/${slug}`,
        sw: `/sw/solutions/${slug}`,
      },
    },
  };
}

export default async function SolutionPage({ params }: Params) {
  const { slug } = await params;
  return <SolutionDetailView lang="en" slug={slug} />;
}
