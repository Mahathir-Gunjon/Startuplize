import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Manrope } from "next/font/google";
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

export const viewport: Viewport = {
  themeColor: "#060612",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "startuplize — High-Performance Web & Digital Growth Engineering",
  description:
    "We design brands and platforms that move people. Custom WordPress, Webflow architecture, programmatic SEO, and local search dominance for ambitious businesses.",
  keywords: [
    "startuplize",
    "WordPress Engineering",
    "Webflow Systems",
    "Technical SEO",
    "Google Local 3-Pack Dominance",
    "Headless WordPress",
    "Core Web Vitals",
  ],
  authors: [{ name: "startuplize" }],
  openGraph: {
    title: "startuplize — High-Performance Web & Digital Growth Engineering",
    description:
      "We design brands and platforms that move people. Custom WordPress, Webflow architecture, programmatic SEO, and local search dominance for ambitious businesses.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bricolage.variable} ${manrope.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[#faf9f8] text-[#060612] font-body text-body antialiased selection:bg-[#ff6321] selection:text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
