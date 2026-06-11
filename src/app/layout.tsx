import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import { SITE } from "@/content/site";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "iPAB — We Fix Businesses With Technology | Tanzania",
    template: `%s — iPAB | ${SITE.tagline}`,
  },
  description:
    "iPAB installs simple systems that stop stock losses and grow repeat customers. Trusted by 1,220+ Tanzanian businesses. Plans from TZS 15,000/month.",
  openGraph: {
    siteName: SITE.legalName,
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${inter.variable} h-full`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col">
        {/* No-flash theme init: must run before first paint */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");if(t==="dark"||(!t&&matchMedia("(prefers-color-scheme: dark)").matches))document.documentElement.classList.add("dark")}catch(e){}})()`,
          }}
        />
        {children}
      </body>
    </html>
  );
}
