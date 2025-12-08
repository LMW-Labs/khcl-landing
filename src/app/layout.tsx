import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://khcllogistics.com"),
  title: {
    default: "KHCL Logistics | Freight Brokerage & Transportation Solutions",
    template: "%s | KHCL Logistics",
  },
  description:
    "KHCL Logistics LLC - Your trusted freight broker in Florence, Mississippi. Specializing in dry van, flatbed, reefer, and specialized freight. MC# 123853 | DOT# 3177936. Get a free quote today.",
  keywords: [
    "freight broker",
    "logistics",
    "transportation",
    "dry van",
    "flatbed",
    "reefer",
    "refrigerated freight",
    "Mississippi freight broker",
    "Florence MS",
    "KHCL Logistics",
    "trucking",
    "shipping",
    "freight shipping",
    "MC 123853",
    "freight brokerage",
    "LTL shipping",
    "FTL shipping",
    "supply chain",
  ],
  authors: [{ name: "KHCL Logistics LLC" }],
  creator: "KHCL Logistics LLC",
  publisher: "KHCL Logistics LLC",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://khcllogistics.com",
    siteName: "KHCL Logistics",
    title: "KHCL Logistics | Freight Brokerage & Transportation Solutions",
    description:
      "Your trusted freight broker connecting shippers with reliable carriers. Dry van, flatbed, reefer, and specialized freight solutions across the USA.",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "KHCL Logistics - Freight Brokerage",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KHCL Logistics | Freight Brokerage Solutions",
    description:
      "Trusted freight broker in Florence, MS. Dry van, flatbed, reefer & specialized freight. Get your free quote today.",
    images: ["/logo.jpg"],
  },
  alternates: {
    canonical: "https://khcllogistics.com",
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "KHCL Logistics LLC",
              description:
                "Licensed freight broker providing transportation solutions including dry van, flatbed, reefer, and specialized freight services.",
              url: "https://khcllogistics.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Florence",
                addressRegion: "MS",
                addressCountry: "US",
              },
              areaServed: "United States",
              priceRange: "$$",
              openingHours: "Mo-Fr 08:00-18:00",
              sameAs: [
                "https://www.linkedin.com/in/khcl-logistics-79967a1b4/",
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
