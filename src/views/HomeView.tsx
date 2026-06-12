import CTABand from "@/components/CTABand";
import FAQ from "@/components/FAQ";
import FieldGallery from "@/components/FieldGallery";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import LogoStrip from "@/components/LogoStrip";
import PricingTeaser from "@/components/PricingTeaser";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import StatBar from "@/components/StatBar";
import Testimonials from "@/components/Testimonials";
import { HOME_FAQS } from "@/content/faqs";
import { FINAL_CTA } from "@/content/home";
import { HOME_GALLERY } from "@/content/photos";
import { UI, type Lang } from "@/lib/i18n";

/** Section order is a conversion sequence (BUILD_PLAN.md); do not reorder. */
export default function HomeView({ lang }: { lang: Lang }) {
  return (
    <>
      <Hero lang={lang} />
      <LogoStrip lang={lang} />
      <ProblemSection lang={lang} />
      <SolutionSection lang={lang} />
      <HowItWorks lang={lang} />
      <FieldGallery className="bg-surface-2" {...HOME_GALLERY[lang]} />
      <StatBar lang={lang} />
      <Testimonials lang={lang} />
      <PricingTeaser lang={lang} />
      <FAQ title={UI[lang].questionsAnswered} items={HOME_FAQS[lang]} />
      <CTABand
        lang={lang}
        heading={FINAL_CTA[lang].heading}
        sub={FINAL_CTA[lang].sub}
      />
    </>
  );
}
