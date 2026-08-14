import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import Analytics from "@/components/Analytics";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.ferienwohnung-in-der-vulkaneifel.de'),
  title: {
    default: 'MaarZeit Vulkaneifel – Ferienwohnung bei Daun | Hund, Motorrad & Wandern',
    template: '%s | MaarZeit Vulkaneifel',
  },
  description: 'Moderne 35 qm Ferienwohnung in der Vulkaneifel bei Daun. Separater Eingang, Parkplatz, Terrasse, Hund willkommen. Ideal für Wandern, Dauner Maare und Motorradtouren.',
  keywords: ['Ferienwohnung Vulkaneifel', 'Ferienwohnung Daun', 'Unterkunft Vulkaneifel', 'Ferienwohnung mit Hund Eifel', 'Motorradurlaub Eifel', 'Dauner Maare Unterkunft', 'Wandern Vulkaneifel', 'Kurzurlaub Eifel', 'Ferienwohnung Kirchweiler'],
  authors: [{ name: 'Markus Müller', url: 'https://www.ferienwohnung-in-der-vulkaneifel.de' }],
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://www.ferienwohnung-in-der-vulkaneifel.de',
    siteName: 'MaarZeit Vulkaneifel',
    title: 'MaarZeit Vulkaneifel – Ferienwohnung bei Daun',
    description: 'Moderne 35 qm Ferienwohnung in der Vulkaneifel. Hund willkommen, Parkplatz, Terrasse.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'MaarZeit Vulkaneifel Ferienwohnung' }],
  },
  twitter: { card: 'summary_large_image', title: 'MaarZeit Vulkaneifel – Ferienwohnung bei Daun', description: 'Moderne 35 qm Ferienwohnung in der Vulkaneifel. Hund willkommen, Parkplatz, Terrasse.', images: ['/og-image.jpg'] },
  icons: {
    icon: [
      { url: '/icon-favicon.png', sizes: '32x32',   type: 'image/png' },
      { url: '/icon-64.png',      sizes: '64x64',   type: 'image/png' },
      { url: '/icon-128.png',     sizes: '128x128', type: 'image/png' },
      { url: '/icon-192.png',     sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
    ],
    shortcut: '/icon-favicon.png',
  },
  manifest: '/manifest.json',
  verification: {
    google: 'b83e8e154a47617a',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const messages = await getMessages();

  return (
    <html lang="de">
      <head>
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LodgingBusiness",
              "name": "MaarZeit Vulkaneifel",
              "description": "Moderne 35 qm Ferienwohnung in der Vulkaneifel bei Daun. Separater Eingang, Parkplatz, Terrasse, Hund willkommen.",
              "url": "https://www.ferienwohnung-in-der-vulkaneifel.de",
              "telephone": "",
              "email": "kontakt@ferienwohnung-in-der-vulkaneifel.de",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Am Bruchborn 6",
                "addressLocality": "Kirchweiler",
                "postalCode": "54570",
                "addressRegion": "Rheinland-Pfalz",
                "addressCountry": "DE"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 50.1747,
                "longitude": 6.8397
              },
              "priceRange": "75€ - 125€",
              "amenityFeature": [
                { "@type": "LocationFeatureSpecification", "name": "Parkplatz", "value": true },
                { "@type": "LocationFeatureSpecification", "name": "Hunde erlaubt", "value": true },
                { "@type": "LocationFeatureSpecification", "name": "WLAN", "value": true },
                { "@type": "LocationFeatureSpecification", "name": "Küche", "value": true },
                { "@type": "LocationFeatureSpecification", "name": "Terrasse", "value": true },
                { "@type": "LocationFeatureSpecification", "name": "TV", "value": true }
              ],
              "checkinTime": "15:00",
              "checkoutTime": "11:00",
              "petsAllowed": true,
              "numberOfRooms": 1,
              "floorSize": { "@type": "QuantitativeValue", "value": 35, "unitCode": "MTK" }
            })
          }}
        />
      </head>
      <body className="bg-stone-50 text-stone-800 min-h-screen flex flex-col">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MS9529LN"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <NextIntlClientProvider messages={messages}>
          <Nav />
          <main className="flex-1">{children}</main>
          <Footer />
          <CookieBanner />
          <Analytics />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
