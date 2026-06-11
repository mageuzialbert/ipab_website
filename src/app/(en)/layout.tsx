import AIChat from "@/components/AIChat";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import WhatsAppButton from "@/components/WhatsAppButton";
import { UI } from "@/lib/i18n";

export default function EnglishLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
        {children}
      </main>
      <Footer lang="en" />
      <WhatsAppButton lang="en" />
      <AIChat lang="en" />
    </>
  );
}
