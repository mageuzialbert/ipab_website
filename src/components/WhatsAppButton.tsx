import WhatsAppIcon from "@/components/WhatsAppIcon";
import { WA_PREFILLS } from "@/content/site";
import { UI, type Lang } from "@/lib/i18n";
import { waLink } from "@/lib/whatsapp";

/**
 * Floating WhatsApp button; persistent on every page (bottom-right),
 * with a gentle pulse ring every ~4s (disabled for reduced motion).
 */
export default function WhatsAppButton({ lang = "en" }: { lang?: Lang }) {
  return (
    <a
      href={waLink(WA_PREFILLS[lang].global)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={UI[lang].whatsappAria}
      className="animate-pulse-ring fixed bottom-5 right-5 z-50 inline-flex size-14 items-center justify-center rounded-full bg-green text-white transition-transform duration-200 hover:scale-105 hover:bg-green-600 md:bottom-6 md:right-6"
    >
      <WhatsAppIcon className="size-7" />
    </a>
  );
}
