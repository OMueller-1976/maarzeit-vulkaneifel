import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Die Ferienwohnung",
  description:
    "75 m² Ferienwohnung in der Vulkaneifel – voll ausgestattet, sonnige Terrasse, Garten, WLAN, für 2–4 Personen. Hunde willkommen.",
};

const ausstattung = [
  { kategorie: "Wohnen", items: ["Wohnzimmer mit Couch & TV", "Esstisch für 4 Personen", "Kamin (Holz gestellt)", "Kostenfreies WLAN"] },
  { kategorie: "Schlafen", items: ["Schlafzimmer mit Doppelbett (180×200)", "Ausziehsofa für 2 weitere Personen", "Bettwäsche & Handtücher inklusive", "Verdunklungsrollos"] },
  { kategorie: "Küche", items: ["Voll ausgestattete Küchenzeile", "Geschirrspüler", "Backofen, Herd & Mikrowelle", "Kaffeemaschine & Wasserkocher"] },
  { kategorie: "Bad", items: ["Duschbad", "Haarfön", "Waschmaschine (auf Anfrage)"] },
  { kategorie: "Außen", items: ["Sonnige Süd-Terrasse", "Eingezäunter Garten (ideal für Hunde)", "2 Fahrräder inklusive", "Kostenloser Parkplatz direkt am Haus"] },
];

export default function FerienwohnungPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="section-title">Die Ferienwohnung</h1>
      <p className="text-stone-600 text-lg mb-10 max-w-2xl leading-relaxed">
        Unsere Ferienwohnung MaarZeit liegt ruhig in der Vulkaneifel, nur wenige Minuten von
        den weltberühmten Dauner Maaren entfernt. Auf ca. 75 m² finden Sie alles, was Sie
        für einen erholsamen Urlaub brauchen – modern eingerichtet, gemütlich und naturnah.
      </p>

      {/* Eckdaten */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
        {[
          { label: "Größe", value: "75 m²" },
          { label: "Personen", value: "2–4" },
          { label: "Schlafzimmer", value: "1 + Sofa" },
          { label: "Haustiere", value: "Ja (1 Hund)" },
        ].map((e) => (
          <div key={e.label} className="card text-center border border-green-100">
            <p className="text-2xl font-bold text-green-800">{e.value}</p>
            <p className="text-stone-500 text-sm mt-1">{e.label}</p>
          </div>
        ))}
      </div>

      {/* Ausstattung */}
      <h2 className="text-2xl font-bold text-green-900 mb-6">Ausstattung</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
        {ausstattung.map((kat) => (
          <div key={kat.kategorie} className="card">
            <h3 className="font-bold text-green-800 mb-3 border-b border-green-100 pb-2">
              {kat.kategorie}
            </h3>
            <ul className="space-y-1.5">
              {kat.items.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-stone-700">
                  <span className="text-green-600 mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Lage */}
      <h2 className="text-2xl font-bold text-green-900 mb-4">Lage & Umgebung</h2>
      <p className="text-stone-600 mb-4 leading-relaxed">
        Die Wohnung befindet sich in der Nähe von Daun, dem Herzen der Vulkaneifel.
        Der Schalkenmehrener Maar ist in 10 Minuten zu Fuß erreichbar, der Gemündener Maar
        liegt nur 3 km entfernt. Die Kreisstadt Daun mit Restaurants, Supermärkten und
        Apotheke ist 5 Autominuten entfernt.
      </p>
      <ul className="text-sm text-stone-700 space-y-1 mb-10">
        {[
          "Schalkenmehrener Maar: 10 Min. zu Fuß",
          "Gemündener Maar: 3 km",
          "Weinfelder Maar: 4 km",
          "Daun Innenstadt: 5 km",
          "Nürburgring: 45 km",
          "Trier: 70 km",
        ].map((item) => (
          <li key={item} className="flex items-center gap-2">
            <span className="text-green-600">📍</span> {item}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-4">
        <Link href="/buchung" className="btn-primary">Jetzt buchen</Link>
        <Link href="/kontakt" className="btn-secondary">Fragen? Schreiben Sie uns</Link>
      </div>
    </div>
  );
}
