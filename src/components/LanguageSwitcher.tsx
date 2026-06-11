"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { alternatePath, type Lang } from "@/lib/i18n";

/** EN | SW switcher; links to the same page in the other language. */
export default function LanguageSwitcher({ lang }: { lang: Lang }) {
  const pathname = usePathname() ?? "/";
  const other = alternatePath(lang, pathname);

  return (
    <Link
      href={other}
      aria-label={
        lang === "en" ? "Soma kwa Kiswahili" : "Read in English"
      }
      className="inline-flex h-9 items-center gap-1 rounded-lg border border-slate/20 px-2.5 text-xs font-semibold tracking-wide"
    >
      <span className={lang === "en" ? "text-heading" : "text-slate/60"}>
        EN
      </span>
      <span className="text-slate/40">/</span>
      <span className={lang === "sw" ? "text-heading" : "text-slate/60"}>
        SW
      </span>
    </Link>
  );
}
