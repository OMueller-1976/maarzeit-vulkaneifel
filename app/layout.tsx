import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

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
  alternates: { canonical: 'https://www.ferienwohnung-in-der-vulkaneifel.de' },
  verification: {
    google: 'b83e8e154a47617a',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <head>
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MS9529LN');`,
          }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-H24P94BWQD"
          strategy="afterInteractive"
        />
        <Script
          id="ga4-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-H24P94BWQD');`,
          }}
        />
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
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
