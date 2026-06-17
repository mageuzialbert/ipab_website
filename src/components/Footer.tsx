import Link from "next/link";
import Logo from "@/components/Logo";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { CLOUD_SERVICES, SITE, WA_PREFILLS } from "@/content/site";
import { SOLUTIONS } from "@/content/solutions";
import { UI, localeHref, type Lang } from "@/lib/i18n";
import { waLink } from "@/lib/whatsapp";

export default function Footer({ lang = "en" }: { lang?: Lang }) {
  const ui = UI[lang];

  return (
    <footer className="dot-grid-dark bg-navy text-white">
      <div className="container-site py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Logo onDark lang={lang} />
            <p className="max-w-xs text-sm leading-relaxed text-white/70">
              {ui.footer.quote}
            </p>
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="iPAB on Instagram"
              className="inline-flex size-10 items-center justify-center rounded-full border border-white/15 text-white/80 transition-colors hover:border-white/40 hover:text-white"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                aria-hidden="true"
                className="size-5"
              >
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.2" cy="6.8" r="0.8" fill="currentColor" />
              </svg>
            </a>
          </div>

          {/* Solutions */}
          <nav aria-label={ui.footer.solutions}>
            <p className="eyebrow mb-4 text-white/50">{ui.footer.solutions}</p>
            <ul className="space-y-3">
              {SOLUTIONS[lang].map((s) => (
                <li key={s.slug}>
                  <Link
                    href={localeHref(lang, `/solutions/${s.slug}`)}
                    className="text-sm text-white/80 transition-colors hover:text-white"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs text-white/40">
              {ui.footer.forClients}: {CLOUD_SERVICES[lang].join(" · ")}
            </p>
          </nav>

          {/* Company */}
          <nav aria-label={ui.footer.company}>
            <p className="eyebrow mb-4 text-white/50">{ui.footer.company}</p>
            <ul className="space-y-3">
              {ui.nav.map((link) => (
                <li key={link.href}>
                  <Link
                    href={localeHref(lang, link.href)}
                    className="text-sm text-white/80 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <p className="eyebrow mb-4 text-white/50">{ui.footer.talkToUs}</p>
            <ul className="space-y-3 text-sm text-white/80">
              <li>
                <a
                  href={waLink(WA_PREFILLS[lang].global)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-semibold text-green transition-colors hover:text-white"
                >
                  <WhatsAppIcon className="size-4" />
                  {ui.chatOnWhatsApp}
                </a>
              </li>
              {SITE.phones.map((phone) => (
                <li key={phone}>
                  <a
                    href={`tel:${phone.replaceAll(" ", "")}`}
                    className="transition-colors hover:text-white"
                  >
                    {phone}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="transition-colors hover:text-white"
                >
                  {SITE.email}
                </a>
              </li>
              <li>{`${SITE.address}, ${SITE.location}`}</li>
              <li>{lang === "sw" ? SITE.hoursSw : SITE.hours}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-white/10 pt-8 text-xs text-white/40 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE.legalName}. {SITE.location}.
          </p>
          {/* TODO: add TIN number when provided */}
          <div className="flex items-center gap-4">
            <Link
              href={localeHref(lang, "/privacy")}
              className="transition-colors hover:text-white"
            >
              {ui.footer.privacy}
            </Link>
            <span aria-hidden="true">·</span>
            <p>{ui.footer.tagline}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
