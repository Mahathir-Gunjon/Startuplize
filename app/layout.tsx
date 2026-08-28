import "./globals.css";
import { Bricolage_Grotesque, Instrument_Serif } from "next/font/google";
import type { Metadata } from "next";
import { LenisProvider } from "@/hooks/useLenis";

const fontSans = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const fontSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://startuplize.com"),
  title: "Startuplize | Elite Creative Agency & Conversion-Led Partner",
  description:
    "We engineer visual prestige, bespoke digital products, high-conversion web architectures, and scaled paid acquisition funnels for high-growth tech brands.",
  keywords: [
    "creative agency",
    "web design",
    "webflow development",
    "wordpress next.js",
    "brand identity",
    "technical SEO",
    "meta ads",
    "google ads",
    "Awwwards agency",
  ],
  authors: [{ name: "Startuplize Creative Studio" }],
  openGraph: {
    title: "Startuplize — Elite Creative Agency",
    description:
      "Conversion-led design and scaled growth partner for tier-1 tech brands.",
    url: "https://startuplize.com",
    siteName: "Startuplize",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Startuplize Creative Agency",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Startuplize — Elite Creative Agency",
    description:
      "Conversion-led design and scaled growth partner for tier-1 tech brands.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Startuplize",
  url: "https://startuplize.com",
  logo: "https://startuplize.com/logo.png",
  image: "https://startuplize.com/images/og-image.jpg",
  description:
    "Elite creative agency specializing in bespoke branding, high-conversion web development, and performance growth.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "San Francisco",
    addressRegion: "CA",
    addressCountry: "US",
  },
  founder: {
    "@type": "Person",
    name: "Mahathir",
    jobTitle: "Founder & Creative Director",
  },
  sameAs: [
    "https://twitter.com/startuplize",
    "https://linkedin.com/company/startuplize",
    "https://instagram.com/startuplize",
    "https://dribbble.com/startuplize",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fontSans.variable} ${fontSerif.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#FAFAFA] text-[#1A1A1A] font-sans antialiased selection:bg-[#00D28F] selection:text-[#0A0A0A] overflow-x-hidden">
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
