import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "MaarZeit Vulkaneifel – Ferienwohnung an den Dauner Maaren",
    template: "%s | MaarZeit Vulkaneifel",
  },
  description:
    "Ferienwohnung in der Vulkaneifel – direkt bei den Dauner Maaren. Naturnahes Urlaubsdomizil für Wanderer, Radfahrer und Motorradfahrer. Hunde willkommen.",
  keywords: [
    "Ferienwohnung Vulkaneifel",
    "Dauner Maare",
    "Urlaub Eifel",
    "Wandern Vulkaneifel",
    "Motorrad Eifel",
    "Hund Ferienwohnung",
  ],
  openGraph: {
    title: "MaarZeit Vulkaneifel – Ferienwohnung an den Dauner Maaren",
    description:
      "Naturnahes Urlaubsdomizil in der Vulkaneifel. Wandern, Radfahren, Motorradfahren – Hunde willkommen.",
    locale: "de_DE",
    type: "website",
  },
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
      </body>
    </html>
  );
}
