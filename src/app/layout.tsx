import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/* Avenir Next is a macOS system font; this loads a close web fallback
   (Nunito Sans) for visitors who don't have Avenir Next installed.
   Chillax (display font) is loaded via @import in globals.css. */
const fallbackSans = Nunito_Sans({
  variable: "--font-fallback",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.infinitynexa.co.zw"),
  title: {
    default: "Infinity Nexa | Business & IT Services — Harare, Zimbabwe",
    template: "%s | Infinity Nexa",
  },
  description:
    "Infinity Nexa Business & IT Services (Pvt) Ltd combines accounting & ZIMRA compliance with web, software and IT solutions for SMEs, corporates and start-ups across Zimbabwe.",
  keywords: [
    "ZIMRA compliance",
    "accounting Zimbabwe",
    "bookkeeping Harare",
    "website design Zimbabwe",
    "software development Harare",
    "Sage Pastel",
    "IT support Zimbabwe",
  ],
  openGraph: {
    title: "Infinity Nexa | Business & IT Services",
    description: "Where Business Meets Technology — Finance + IT under one roof.",
    url: "https://www.infinitynexa.co.zw",
    siteName: "Infinity Nexa",
    locale: "en_ZW",
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
      className={`${fallbackSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-slate-900">
        {/* Chillax display font (Fontshare). React hoists these to <head>. */}
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=chillax@400,500,600,700&display=swap"
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
