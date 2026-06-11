import { SITE } from "@/content/site";

/** Build a WhatsApp deep link with a page-specific prefilled message. */
export function waLink(message: string): string {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
