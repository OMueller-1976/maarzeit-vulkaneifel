import type { Metadata } from "next";
import Link from "next/link";
import { getLocale } from 'next-intl/server'

import MapWrapper from "@/components/MapWrapper";

const translations = {
  de: {
    meta: {
      title: 'Anreise zur Ferienwohnung in Kirchweiler – Karte & Entfernungen',
      description: 'Anreise zur MaarZeit Ferienwohnung in Kirchweiler. Karte, Routenplanung und Entfernungen.',
    },
    hero: { title: 'Anreise & Entfernungen', subtitle: 'Am Bruchborn 6 · 54570 Kirchweiler' },
    mapTitle: 'Lage auf der Karte',
    btnGoogle: 'Route mit Google Maps planen',
    btnApple: 'Route mit Apple Maps planen',
    distancesTitle: 'Entfernungen ab Kirchweiler',
    distancesNote: 'Alle Angaben sind Richtwerte per PKW ohne Stau.',
    cols: { dest: 'Ziel', dist: 'Entfernung', time: 'Fahrzeit' },
    howTitle: 'So erreichen Sie uns',
    car: { title: 'Per PKW' },
    train: { title: 'Per Bahn' },
    plane: { title: 'Per Flugzeug' },
    moto: { title: 'Per Motorrad' },
    addressTitle: 'Adresse & GPS',
    cta: 'Jetzt Verfügbarkeit prüfen',
  },
  en: {
    meta: {
      title: 'Getting to the Holiday Apartment in Kirchweiler – Map & Distances',
      description: 'Directions to MaarZeit holiday apartment in Kirchweiler. Map, route planning and distances.',
    },
    hero: { title: 'Getting Here', subtitle: 'Am Bruchborn 6 · 54570 Kirchweiler' },
    mapTitle: 'Location on the Map',
    btnGoogle: 'Plan Route with Google Maps',
    btnApple: 'Plan Route with Apple Maps',
    distancesTitle: 'Distances from Kirchweiler',
    distancesNote: 'All figures are approximate by car without traffic.',
    cols: { dest: 'Destination', dist: 'Distance', time: 'Travel Time' },
    howTitle: 'How to Reach Us',
    car: { title: 'By Car' },
    train: { title: 'By Train' },
    plane: { title: 'By Plane' },
    moto: { title: 'By Motorcycle' },
    addressTitle: 'Address & GPS',
    cta: 'Check Availability Now',
  },
  nl: {
    meta: {
      title: 'Aanrijden naar het Vakantieappartement in Kirchweiler – Kaart & Afstanden',
      description: 'Routebeschrijving naar MaarZeit vakantieappartement in Kirchweiler. Kaart en afstanden.',
    },
    hero: { title: 'Aanrijden', subtitle: 'Am Bruchborn 6 · 54570 Kirchweiler' },
    mapTitle: 'Locatie op de Kaart',
    btnGoogle: 'Route Plannen met Google Maps',
    btnApple: 'Route Plannen met Apple Maps',
    distancesTitle: 'Afstanden vanuit Kirchweiler',
    distancesNote: 'Alle gegevens zijn richtwaarden per auto zonder file.',
    cols: { dest: 'Bestemming', dist: 'Afstand', time: 'Reistijd' },
    howTitle: 'Hoe U Ons Bereikt',
    car: { title: 'Per Auto' },
    train: { title: 'Per Trein' },
    plane: { title: 'Per Vliegtuig' },
    moto: { title: 'Per Motor' },
    addressTitle: 'Adres & GPS',
    cta: 'Controleer Nu Beschikbaarheid',
  },
  fr: {
    meta: {
      title: "Accès à l'Appartement de Vacances à Kirchweiler – Carte & Distances",
      description: "Itinéraire vers l'appartement MaarZeit à Kirchweiler. Carte et distances.",
    },
    hero: { title: 'Comment Nous Rejoindre', subtitle: 'Am Bruchborn 6 · 54570 Kirchweiler' },
    mapTitle: 'Localisation sur la Carte',
    btnGoogle: "Planifier l'Itinéraire avec Google Maps",
    btnApple: "Planifier l'Itinéraire avec Apple Maps",
    distancesTitle: 'Distances depuis Kirchweiler',
    distancesNote: 'Toutes les données sont indicatives par voiture sans trafic.',
    cols: { dest: 'Destination', dist: 'Distance', time: 'Temps de Trajet' },
    howTitle: 'Comment Nous Rejoindre',
    car: { title: 'En Voiture' },
    train: { title: 'En Train' },
    plane: { title: 'En Avion' },
    moto: { title: 'En Moto' },
    addressTitle: 'Adresse & GPS',
    cta: 'Vérifier la Disponibilité',
  },
}

const entfernungen = [
  { ziel: "Daun (Kreisstadt)", km: "6 km", zeit: "ca. 8 Min.", hinweis: "Einkauf, Supermarkt, Arzt" },
  { ziel: "Gerolstein", km: "15 km", zeit: "ca. 18 Min.", hinweis: "Altstadt, Felsmassiv, Ausflugsziel" },
  { ziel: "Manderscheid", km: "18 km", zeit: "ca. 20 Min.", hinweis: "Burgruinen, Liesertal, Wandern" },
  { ziel: "Bitburg", km: "40 km", zeit: "ca. 35 Min.", hinweis: "Bitburger Brauerei, Römerstadt" },
  { ziel: "Cochem", km: "45 km", zeit: "ca. 45 Min.", hinweis: "Reichsburg, Moselwein, Altstadt" },
  { ziel: "Bernkastel-Kues", km: "50 km", zeit: "ca. 50 Min.", hinweis: "Mosel, Weinkultur, Mittelaltermarkt" },
  { ziel: "Nürburgring", km: "55 km", zeit: "ca. 50 Min.", hinweis: "Motorsport, Nordschleife, Erlebniswelt" },
  { ziel: "Grenze Luxemburg (Weiswampach)", km: "60 km", zeit: "ca. 50 Min.", hinweis: "Tanken, Shopping, Grenzgebiet" },
  { ziel: "Trier", km: "75 km", zeit: "ca. 55 Min.", hinweis: "Porta Nigra, UNESCO-Welterbe, Römerstadt" },
  { ziel: "Koblenz", km: "85 km", zeit: "ca. 65 Min.", hinweis: "Deutsches Eck, Festung Ehrenbreitstein" },
  { ziel: "Luxemburg Stadt", km: "95 km", zeit: "ca. 75 Min.", hinweis: "UNESCO-Altstadt, Kultur, Shopping" },
  { ziel: "Bonn", km: "110 km", zeit: "ca. 80 Min.", hinweis: "Beethoven-Stadt, Museen, Rhein" },
  { ziel: "Lüttich / Liège (Belgien)", km: "120 km", zeit: "ca. 90 Min.", hinweis: "Belgien, Durchreise Richtung Küste" },
  { ziel: "Flughafen Köln/Bonn (CGN)", km: "135 km", zeit: "ca. 95 Min.", hinweis: "Flughafen, Ferienflüge" },
  { ziel: "Köln", km: "130 km", zeit: "ca. 95 Min.", hinweis: "Dom, Rheinufer, Museen, Stadtleben" },
  { ziel: "Maastricht (Niederlande)", km: "160 km", zeit: "ca. 110 Min.", hinweis: "Niederlande, Kulturstadt" },
  { ziel: "Flughafen Düsseldorf (DUS)", km: "185 km", zeit: "ca. 130 Min.", hinweis: "Internationaler Flughafen" },
  { ziel: "Flughafen Frankfurt (FRA)", km: "190 km", zeit: "ca. 130 Min.", hinweis: "Internationaler Flughafen" },
];

const verkehrsmittel = [
  {
    titel: "Per PKW",
    inhalt: [
      "Die Ferienwohnung liegt direkt an der B421 zwischen Daun und Gerolstein.",
      "Ab Köln: A1 → A61 → Ausfahrt Mayen → B262 → Daun → Kirchweiler (ca. 1 Std. 45 Min.)",
      "Ab Frankfurt: A3 → A61 → Ausfahrt Mayen → B262 → Daun → Kirchweiler (ca. 2 Std. 30 Min.)",
      "Ab Düsseldorf: A46 → A61 → Ausfahrt Mayen → B262 → Daun → Kirchweiler (ca. 1 Std. 45 Min.)",
      "Ab Luxemburg Stadt: A6 → B50 → Bitburg → Prüm → Daun → Kirchweiler (ca. 1 Std. 15 Min.)",
      "Parkplatz: Ein eigener PKW-Stellplatz steht direkt an der Ferienwohnung zur Verfügung.",
    ],
  },
  {
    titel: "Per Bahn",
    inhalt: [
      "Nächster Bahnhof: Gerolstein (ca. 15 km). Verbindungen über Köln und Trier.",
      "Ab Bahnhof Gerolstein: Abholung nach Absprache möglich oder Taxi/Mietwagen vor Ort.",
      "Alternativ: Bahnhof Daun (ca. 6 km) – regionaler Halt mit Busanbindung.",
      "Tipp: DB Sparpreis-Tickets frühzeitig buchen für günstige Verbindungen.",
    ],
  },
  {
    titel: "Per Flugzeug",
    inhalt: [
      "Nächste Flughäfen:",
      "Köln/Bonn (CGN): ca. 135 km / ca. 1 Std. 35 Min. – empfohlen für Ferienflüge",
      "Frankfurt (FRA): ca. 190 km / ca. 2 Std. 10 Min. – größter internationaler Flughafen",
      "Düsseldorf (DUS): ca. 185 km / ca. 2 Std. 10 Min.",
      "Luxemburg (LUX): ca. 110 km / ca. 1 Std. 20 Min. – ideal für Gäste aus Benelux",
      "Mietwagen ab Flughafen empfohlen – die Vulkaneifel ist mit dem PKW am besten zu erkunden.",
    ],
  },
  {
    titel: "Per Motorrad",
    inhalt: [
      "Die Vulkaneifel gilt als eine der schönsten Motorradregionen Deutschlands.",
      "Klassische Einfahr-Routen:",
      "Ab Norden: Über Ahrtal → Adenau → Vulkaneifel",
      "Ab Süden: Moseltal → Cochem → Vulkaneifel",
      "Ab Westen: Eifelqueerweg → Daun → Kirchweiler",
      "Eigener Parkplatz direkt an der Unterkunft. Motorrad sicher abstellbar.",
    ],
  },
];


export function generateStaticParams() {
  return [
    { locale: 'de' },
    { locale: 'en' },
    { locale: 'nl' },
    { locale: 'fr' },
  ]
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const tr = translations[locale as keyof typeof translations] ?? translations.de
  return {
    title: tr.meta.title,
    description: tr.meta.description,
  }
}

export default async function AnreisePage() {
  const locale = await getLocale()
  const tr = translations[locale as keyof typeof translations] ?? translations.de

  return (
    <>
      {/* Hero */}
      <section className="bg-stone-900 text-white py-14 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-3" style={{ fontFamily: "Georgia, serif" }}>
          {tr.hero.title}
        </h1>
        <p className="text-stone-400 text-base mt-2">
          {tr.hero.subtitle} · Kreis Daun · Rheinland-Pfalz
        </p>
      </section>

      {/* Karte */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-green-900 mb-6" style={{ fontFamily: "Georgia, serif" }}>
          {tr.mapTitle}
        </h2>
        <div className="rounded-lg overflow-hidden border border-stone-200 shadow-sm">
          <MapWrapper />
        </div>
        <div className="flex flex-wrap gap-3 mt-4">
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=Am+Bruchborn+6,+54570+Kirchweiler"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-stone-700 text-stone-700 px-5 py-2.5 rounded text-sm hover:bg-stone-700 hover:text-white transition-colors"
          >
            {tr.btnGoogle}
          </a>
          <a
            href="https://maps.apple.com/?daddr=Am+Bruchborn+6,+54570+Kirchweiler"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-stone-700 text-stone-700 px-5 py-2.5 rounded text-sm hover:bg-stone-700 hover:text-white transition-colors"
          >
            {tr.btnApple}
          </a>
        </div>
      </section>

      {/* Entfernungstabelle */}
      <section className="max-w-5xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold text-green-900 mb-2" style={{ fontFamily: "Georgia, serif" }}>
          {tr.distancesTitle}
        </h2>
        <p className="text-stone-500 text-sm mb-6">
          {tr.distancesNote}
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr>
                <th
                  className="text-left pb-2 border-b border-stone-300"
                  style={{ fontSize: "0.72rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#999", fontWeight: 500 }}
                >
                  {tr.cols.dest}
                </th>
                <th
                  className="text-left pb-2 border-b border-stone-300"
                  style={{ fontSize: "0.72rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#999", fontWeight: 500 }}
                >
                  {tr.cols.dist}
                </th>
                <th
                  className="text-left pb-2 border-b border-stone-300"
                  style={{ fontSize: "0.72rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#999", fontWeight: 500 }}
                >
                  {tr.cols.time}
                </th>
                <th
                  className="text-left pb-2 border-b border-stone-300 hidden md:table-cell"
                  style={{ fontSize: "0.72rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#999", fontWeight: 500 }}
                >
                  Hinweis
                </th>
              </tr>
            </thead>
            <tbody>
              {entfernungen.map((row) => (
                <tr key={row.ziel} className="border-b border-stone-100">
                  <td className="py-2.5 pr-4" style={{ fontWeight: 500 }}>
                    {row.ziel}
                  </td>
                  <td className="py-2.5 pr-4 text-stone-600">{row.km}</td>
                  <td className="py-2.5 pr-4 text-stone-600">{row.zeit}</td>
                  <td
                    className="py-2.5 hidden md:table-cell"
                    style={{ color: "#888", fontSize: "0.85rem" }}
                  >
                    {row.hinweis}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Verkehrsmittel */}
      <section className="max-w-5xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold text-green-900 mb-8" style={{ fontFamily: "Georgia, serif" }}>
          {tr.howTitle}
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {verkehrsmittel.map((vm) => (
            <div key={vm.titel} className="border-t border-stone-200 pt-6">
              <h3 className="font-bold text-stone-900 text-base mb-3">{vm.titel}</h3>
              <ul className="space-y-1.5 text-sm text-stone-600 leading-relaxed">
                {vm.inhalt.map((zeile, i) => (
                  <li key={i}>{zeile}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Adresse & GPS */}
      <section className="max-w-5xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold text-green-900 mb-6" style={{ fontFamily: "Georgia, serif" }}>
          {tr.addressTitle}
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="text-sm text-stone-700 leading-loose">
            <p className="font-semibold text-stone-900">Markus Müller</p>
            <p>Am Bruchborn 6</p>
            <p>54570 Kirchweiler</p>
            <p>Kreis Daun, Rheinland-Pfalz</p>
            <p>Deutschland</p>
            <p className="mt-4 text-stone-500">GPS: 50.1747° N, 6.8397° O</p>
            <p className="text-stone-400 text-xs mt-1">What3Words: (folgt)</p>
          </div>
          <div>
            <p className="text-xs text-stone-500 uppercase tracking-widest mb-2">
              Für das Navigationsgerät
            </p>
            <div className="bg-stone-100 rounded px-4 py-3 font-mono text-sm text-stone-800 select-all border border-stone-200">
              Am Bruchborn 6, 54570 Kirchweiler
            </div>
            <p className="text-xs text-stone-400 mt-2">
              Exakt so ins Navigationsgerät eingeben.
            </p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Am+Bruchborn+6,+54570+Kirchweiler"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-4 inline-block text-sm"
            >
              In Google Maps öffnen
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-16 px-4 text-center text-white mt-8"
        style={{ backgroundColor: "#1A1A1A" }}
      >
        <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "Georgia, serif" }}>
          Bereit für Ihre Auszeit in der Vulkaneifel?
        </h2>
        <Link
          href="/buchung"
          className="inline-block bg-white text-stone-900 font-semibold px-8 py-3 rounded hover:bg-stone-100 transition-colors"
        >
          {tr.cta}
        </Link>
      </section>
    </>
  );
}
