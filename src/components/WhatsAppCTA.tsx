import WhatsAppIcon from "@/components/WhatsAppIcon";
import { WA_PREFILLS } from "@/content/site";
import { UI, type Lang } from "@/lib/i18n";
import { waLink } from "@/lib/whatsapp";

/**
 * Primary conversion button. Green is reserved for WhatsApp actions —
 * this must be the most clickable-looking thing on every screen.
 */
export default function WhatsAppCTA({
  lang = "en",
  message,
  label,
  size = "md",
  className = "",
}: {
  lang?: Lang;
  message?: string;
  label?: string;
  size?: "md" | "lg";
  className?: string;
}) {
  return (
    <a
      href={waLink(message ?? WA_PREFILLS[lang].global)}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2.5 rounded-xl bg-green font-semibold text-white transition-colors duration-200 hover:bg-green-600 ${
        size === "lg" ? "px-7 py-4 text-body" : "px-6 py-3.5 text-base"
      } ${className}`}
    >
      <WhatsAppIcon className={size === "lg" ? "size-5.5" : "size-5"} />
      {label ?? UI[lang].chatOnWhatsApp}
    </a>
  );
}
