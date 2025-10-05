// src/app/layout.tsx
import type { Metadata } from "next";
import "@/styles/globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import { Raleway } from "next/font/google";
import localFont from "next/font/local";

// Google font
const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  display: "swap",
});

// Font locale (Clash Display)
const clash = localFont({
  src: "../public/fonts/ClashDisplay-Variable.ttf",
  variable: "--font-clash",
  weight: "100 900",
  style: "normal",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "IXI — DIGITAL AGENCY",
    template: "%s | IXI",
  },
  description:
    "IXI: siti web professionali, SEO e social. Performance, sicurezza e risultati.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.ixidigitalagency.com"
  ),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "IXI",
    title: "IXI — DIGITAL AGENCY",
    description:
      "Siti web professionali, performance, SEO e social per aziende e professionisti.",
    url: "/",
  },
  twitter: { card: "summary_large_image" },
  icons: {
    icon: "/favicon.ico", // ✅ favicon esplicita
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png", // (opzionale, se lo aggiungi in /public)
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it" className={`${raleway.variable} ${clash.variable}`}>
      <body className="flex min-h-screen flex-col antialiased font-body">
        <Header />

        {/* Header è fixed h-[120px] → padding top */}
        <main id="main" className="flex-1 pt-[120px]">
          {children}
        </main>

        {/* JSON-LD base (Organization) */}
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "IXI Digital Agency",
              url:
                process.env.NEXT_PUBLIC_SITE_URL ||
                "https://www.ixidigitalagency.com",
              logo: "/icons/brand/logo.webp",
              sameAs: [
                "https://www.linkedin.com/company/ixi-digital-agency/",
                "https://www.instagram.com/ixi.digital.agency/",
                "https://www.tiktok.com/@ixi.digital.agency",
                "https://www.facebook.com/share/1Cse4XkPXm/?mibextid=wwXIfr",
              ],
            }),
          }}
        />

        <Footer />
      </body>
    </html>
  );
}
