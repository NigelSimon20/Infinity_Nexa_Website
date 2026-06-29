import type { Metadata, Viewport } from "next";
import { Nunito_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { company, socials } from "@/lib/data";
import { Analytics } from "@vercel/analytics/next"

/* Avenir Next is a macOS system font; this loads a close web fallback
   (Nunito Sans) for visitors who don't have Avenir Next installed. */
const fallbackSans = Nunito_Sans({
  variable: "--font-fallback",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

/* Chillax (display) — self-hosted for speed (no third-party request). */
const chillax = localFont({
  variable: "--font-chillax",
  display: "swap",
  src: [
    { path: "./fonts/chillax-400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/chillax-500.woff2", weight: "500", style: "normal" },
    { path: "./fonts/chillax-600.woff2", weight: "600", style: "normal" },
    { path: "./fonts/chillax-700.woff2", weight: "700", style: "normal" },
  ],
});

const SITE_URL = "https://www.infinitynexa.co.zw";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Infinity Nexa | Accounting, ZIMRA Compliance & IT Services in Harare",
    template: "%s | Infinity Nexa",
  },
  description:
    "Infinity Nexa Business & IT Services (Pvt) Ltd combines accounting & ZIMRA compliance with web, software and IT solutions for SMEs, corporates and start-ups across Zimbabwe.",
  applicationName: "Infinity Nexa",
  authors: [{ name: "Infinity Nexa" }],
  creator: "Infinity Nexa",
  publisher: "Infinity Nexa",
  keywords: [
    "accounting Zimbabwe",
    "ZIMRA compliance",
    "ZIMRA returns Harare",
    "bookkeeping Harare",
    "payroll Zimbabwe",
    "tax health check Zimbabwe",
    "website design Zimbabwe",
    "software development Harare",
    "Sage Pastel setup",
    "Sage X3 Zimbabwe",
    "IT support Harare",
    "cybersecurity Zimbabwe",
    "Infinity Nexa",
  ],
  category: "business",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_ZW",
    url: SITE_URL,
    siteName: "Infinity Nexa",
    title: "Infinity Nexa | Accounting, ZIMRA Compliance & IT Services",
    description:
      "Where Business Meets Technology — finance, ZIMRA compliance and IT under one roof for Zimbabwean businesses.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Infinity Nexa | Business & IT Services",
    description:
      "Finance, ZIMRA compliance and IT solutions under one roof in Harare, Zimbabwe.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#0a1733",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#organization`,
    name: company.legalName,
    alternateName: company.name,
    url: SITE_URL,
    email: company.email,
    slogan: company.tagline,
    description: company.intro,
    image: `${SITE_URL}/logo.png`,
    logo: `${SITE_URL}/icon.png`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Harare",
      addressCountry: "ZW",
    },
    areaServed: { "@type": "Country", name: "Zimbabwe" },
    sameAs: socials.map((s) => s.href),
    knowsAbout: [
      "Accounting",
      "ZIMRA tax compliance",
      "Bookkeeping",
      "Payroll",
      "Web design",
      "Software development",
      "IT support",
      "Cybersecurity",
    ],
  };

  return (
    <html
      lang="en"
      className={`${fallbackSans.variable} ${chillax.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-slate-900">
        <JsonLd data={jsonLd} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-brand-600 focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Analytics/>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
