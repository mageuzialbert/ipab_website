import Link from "next/link";
import { localeHref, type Lang } from "@/lib/i18n";

/** Text wordmark. TODO: replace with the real iPAB logo asset when provided. */
export default function Logo({
  onDark = false,
  lang = "en",
}: {
  onDark?: boolean;
  lang?: Lang;
}) {
  return (
    <Link
      href={localeHref(lang, "/")}
      aria-label="iPAB; home"
      className={`font-display text-2xl font-bold tracking-tight ${
        onDark ? "text-white" : "text-heading"
      }`}
    >
      iPAB<span className="text-blue">.</span>
    </Link>
  );
}
