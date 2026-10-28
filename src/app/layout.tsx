import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Manrope, Onest } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const onest = Onest({
  variable: "--font-onest",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#060612",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "startuplize — High-Performance WordPress & Webflow Agency",
  description:
    "We build and redesign high-converting WordPress and Webflow websites. Specialists in custom WordPress architecture, Webflow systems, WordPress redesigns, and local SEO marketing.",
  keywords: [
    "startuplize",
    "WordPress Agency",
    "WordPress Redesign",
    "Webflow Agency",
    "WordPress Development",
    "Webflow Systems",
    "Local SEO Marketing",
    "Google Local 3-Pack Dominance",
    "Core Web Vitals",
  ],
  authors: [{ name: "startuplize" }],
  openGraph: {
    title: "startuplize — High-Performance WordPress & Webflow Agency",
    description:
      "We build and redesign high-converting WordPress and Webflow websites. Specialists in custom WordPress architecture, Webflow systems, WordPress redesigns, and local SEO marketing.",
    type: "website",
  },
};

import { FloatingContactWidget } from "@/components/ui/FloatingContactWidget";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bricolage.variable} ${manrope.variable} ${onest.variable}`}>
      <body className="min-h-screen bg-[#faf9f8] text-[#060612] font-body text-body antialiased selection:bg-[#ff6321] selection:text-white overflow-x-hidden relative">
        {children}
        <FloatingContactWidget />
      </body>
    </html>
  );
}
