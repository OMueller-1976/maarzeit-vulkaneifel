import type { Metadata } from "next";
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
      <body className="bg-stone-50 text-stone-800 min-h-screen flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
