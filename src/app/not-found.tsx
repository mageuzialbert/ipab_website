import Link from "next/link";
import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Reveal from "@/components/Reveal";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import { UI } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Page not found",
  description: "The page you were looking for has moved or no longer exists.",
  robots: { index: false, follow: true },
};

// Global 404. The root layout renders no chrome, so this page brings its own
// Header/Footer. English only — Next.js can't know the locale of an unmatched
// route, and English is the default. TODO (Albert): a /sw 404 if traffic warrants.
const POPULAR = [
  { label: "Solutions", href: "/solutions" },
  { label: "Pricing", href: "/pricing" },
  { label: "Why iPAB", href: "/why-ipab" },
  { label: "Contact", href: "/contact" },
];

export default function NotFound() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-navy focus:px-4 focus:py-2 focus:text-white"
      >
        {UI.en.skipToContent}
      </a>
      <Header lang="en" />
      <main id="main" className="flex-1">
        <section className="dark relative isolate flex min-h-[70vh] items-center overflow-hidden border-b border-white/10 bg-navy">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 grid-lines-dark mask-fade-top"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-32 top-0 -z-10 size-[640px] glow-blue"
          />
          <div className="container-site max-w-2xl py-20 text-center md:py-28">
            <Reveal>
              <p className="eyebrow">Error 404</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-4 text-balance font-display text-display-sm font-bold text-heading md:text-display">
                This page took a <span className="text-blue">wrong turn</span>.
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mx-auto mt-5 max-w-lg text-slate">
                The link is broken or the page has moved. Your business
                shouldn&apos;t lose anything — let&apos;s get you back on track.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <WhatsAppCTA lang="en" size="lg" />
                <Link
                  href="/"
                  className="inline-flex items-center justify-center rounded-xl border border-heading/20 px-7 py-4 font-semibold text-heading transition-colors duration-200 hover:border-heading/50"
                >
                  Back to home
                </Link>
              </div>
            </Reveal>
            <Reveal delay={0.32}>
              <div className="mt-10 border-t border-white/10 pt-6">
                <p className="text-sm text-slate">Or jump to:</p>
                <nav className="mt-3 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
                  {POPULAR.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="font-medium text-heading/80 underline-offset-4 transition-colors hover:text-blue hover:underline"
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer lang="en" />
    </>
  );
}
