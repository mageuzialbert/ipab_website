import type { Metadata } from "next";
import AIChat from "@/components/AIChat";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import WhatsAppButton from "@/components/WhatsAppButton";
import { SITE } from "@/content/site";
import { UI } from "@/lib/i18n";

export const metadata: Metadata = {
  title: {
    default: "iPAB — Tunatengeneza Biashara kwa Teknolojia | Tanzania",
    template: `%s — iPAB | ${SITE.taglineSw}`,
  },
  description:
    "iPAB inafunga mifumo rahisi inayozuia upotevu wa stoo na kuongeza wateja wanaorudi. Inaaminiwa na biashara 1,220+ za Tanzania. Mipango kuanzia TZS 15,000/mwezi.",
  openGraph: {
    siteName: SITE.legalName,
    locale: "sw_TZ",
    type: "website",
  },
};

export default function SwahiliLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <html lang> is owned by the root layout (static export; one tree);
    // lang is inheritable, so this wrapper marks the whole Swahili UI.
    <div lang="sw" className="flex flex-1 flex-col">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-navy focus:px-4 focus:py-2 focus:text-white"
      >
        {UI.sw.skipToContent}
      </a>
      <Header lang="sw" />
      <main id="main" className="flex-1">
        {children}
      </main>
      <Footer lang="sw" />
      <WhatsAppButton lang="sw" />
      <AIChat lang="sw" />
    </div>
  );
}
