"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import Logo from "@/components/Logo";
import ThemeToggle from "@/components/ThemeToggle";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import { SOLUTIONS } from "@/content/solutions";
import { UI, localeHref, type Lang } from "@/lib/i18n";

export default function Header({ lang = "en" }: { lang?: Lang }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const ui = UI[lang];

  // Close the mobile menu after navigating
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-40 border-b border-slate/10 bg-surface/90 backdrop-blur-md">
      <div className="container-site flex h-16 items-center justify-between gap-6 md:h-18">
        <Logo lang={lang} />

        {/* Desktop nav */}
        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          <div className="group relative">
            <Link
              href={localeHref(lang, "/solutions")}
              className="inline-flex items-center gap-1.5 rounded-lg px-4 py-2.5 text-base font-medium text-ink transition-colors hover:text-blue"
            >
              {ui.solutions}
              <svg
                viewBox="0 0 16 16"
                aria-hidden="true"
                className="size-3.5 text-slate transition-transform duration-200 group-hover:rotate-180"
              >
                <path
                  d="M4 6l4 4 4-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            {/* Dropdown; opens on hover and keyboard focus */}
            <div className="invisible absolute left-0 top-full w-80 translate-y-1 pt-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
              <div className="overflow-hidden rounded-2xl border border-slate/10 bg-card p-2 shadow-lift">
                {SOLUTIONS[lang].map((s) => (
                  <Link
                    key={s.slug}
                    href={localeHref(lang, `/solutions/${s.slug}`)}
                    className="block rounded-xl px-4 py-3 transition-colors hover:bg-surface-2"
                  >
                    <span className="block font-semibold text-ink">
                      {s.name}
                    </span>
                    <span className="block text-sm text-slate">
                      {s.tagline}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {ui.nav.map((link) => (
            <Link
              key={link.href}
              href={localeHref(lang, link.href)}
              className="rounded-lg px-4 py-2.5 text-base font-medium text-ink transition-colors hover:text-blue"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <LanguageSwitcher lang={lang} />
          <ThemeToggle />
          <WhatsAppCTA lang={lang} className="px-5 py-2.5" />
        </div>

        {/* Mobile: language + theme toggles + menu button */}
        <div className="-mr-2 flex items-center gap-1 lg:hidden">
          <LanguageSwitcher lang={lang} />
          <ThemeToggle />
          <button
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((o) => !o)}
            className="inline-flex size-11 items-center justify-center rounded-lg text-ink"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" className="size-6">
              {menuOpen ? (
                <path
                  d="M6 6l12 12M18 6L6 18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav
          id="mobile-menu"
          aria-label="Main"
          className="absolute inset-x-0 top-full h-[calc(100dvh-4rem)] overflow-y-auto border-t border-slate/10 bg-surface lg:hidden"
        >
          <div className="container-site flex flex-col gap-1 py-6">
            <p className="eyebrow px-2 pb-2">{ui.solutions}</p>
            {SOLUTIONS[lang].map((s) => (
              <Link
                key={s.slug}
                href={localeHref(lang, `/solutions/${s.slug}`)}
                className="rounded-xl px-2 py-3"
              >
                <span className="block font-semibold text-ink">{s.name}</span>
                <span className="block text-sm text-slate">{s.tagline}</span>
              </Link>
            ))}
            <Link
              href={localeHref(lang, "/solutions")}
              className="px-2 py-3 font-medium text-blue"
            >
              {ui.allSolutions}
            </Link>

            <div className="my-3 border-t border-slate/10" />

            {ui.nav.map((link) => (
              <Link
                key={link.href}
                href={localeHref(lang, link.href)}
                className="rounded-xl px-2 py-3 font-semibold text-ink"
              >
                {link.label}
              </Link>
            ))}

            <div className="mt-4 px-2">
              <WhatsAppCTA lang={lang} className="w-full" />
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
