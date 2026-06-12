import Image from "next/image";
import Link from "next/link";
import { localeHref, type Lang } from "@/lib/i18n";

/** Brand mark (blue "pa" ring) + text wordmark. */
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
      className={`inline-flex items-center gap-2 font-display text-2xl font-bold tracking-tight ${
        onDark ? "text-white" : "text-heading"
      }`}
    >
      <Image
        src="/logo-mark.png"
        alt=""
        width={184}
        height={184}
        unoptimized
        className="size-8"
      />
      <span>
        iPAB<span className="text-blue">.</span>
      </span>
    </Link>
  );
}
