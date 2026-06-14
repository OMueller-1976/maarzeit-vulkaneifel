import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Ausflugsziele Vulkaneifel – Wildpark, Burgen & Nürburgring',
  description: 'Ausflugsziele rund um Kirchweiler: Wild- & Erlebnispark Daun, Manderscheider Burgen, Vulkanmuseum, Nürburgring 55 km, Mosel 45 km.',
  alternates: { canonical: 'https://ferienwohnung-in-der-vulkaneifel.de/guide/ausflugsziele' },
};

const ziele = [
  {
    name: "Nürburgring",
    entfernung: "45 km",
    icon: "🏎️",
    beschreibung: "Die legendäre Nordschleife – Motorsportmekka und Freizeitpark. Touristenfahrten auf der Nordschleife möglich.",
  },
  {
    name: "Mosel & Weinorte",
    entfernung: "40–60 km",
    icon: "🍷",
    beschreibung: "Cochem, Bernkastel-Kues, Traben-Trarbach – mittelalterliche Weinorte entlang der romantischen Mosel.",
  },
  {
    name: "Gerolsteiner Felsen",
    entfernung: "15 km",
    icon: "🪨",
    beschreibung: "Die Gerolsteiner Dolomiten: beeindruckende Kalksteinfelsen mitten in der Eifel mit Wanderwegen und Aussichtspunkten.",
  },
  {
    name: "Römerthermen Zülpich",
    entfernung: "80 km",
    icon: "♨️",
    beschreibung: "Eines der modernsten Freizeitbäder der Region – ideal für Regentage oder zur Entspannung nach langen Wanderungen.",
  },
  {
    name: "Trier – Porta Nigra",
    entfernung: "70 km",
    icon: "🏛️",
    beschreibung: "Deutschlands älteste Stadt mit UNESCO-Weltkulturerbe: Porta Nigra, Kaiserthermen und das Karl-Marx-Haus.",
  },
  {
    name: "Manderscheid Burgruinen",
    entfernung: "20 km",
    icon: "🏰",
    beschreibung: "Die zwei Burgruinen von Manderscheid hoch über dem Liesertal – kostenlos zugänglich, Traumausblick garantiert.",
  },
  {
    name: "Naturpark Südeifel & Luxemburg",
    entfernung: "60 km",
    icon: "🇱🇺",
    beschreibung: "Grenzüberschreitend in den Naturpark Südeifel – und weiter nach Luxemburg Stadt für Kultur und Gastlichkeit.",
  },
  {
    name: "Aachen",
    entfernung: "110 km",
    icon: "⛪",
    beschreibung: "Karolingischer Dom, Schatzkammer und charmante Innenstadt – ein perfekter Tagesausflug für Kulturinteressierte.",
  },
];

export default function AusflugszielePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <nav className="text-sm text-stone-500 mb-6">
        <Link href="/guide" className="hover:text-green-800">Reiseführer</Link>
        {" › "}
        <span>Ausflugsziele</span>
      </nav>

      <h1 className="section-title">Ausflugsziele in der Umgebung</h1>
      <p className="text-stone-600 text-lg mb-10 max-w-2xl leading-relaxed">
        Die zentrale Lage der Vulkaneifel macht MaarZeit zum idealen Ausgangspunkt
        für Tagesausflüge in alle Richtungen – von der Mosel bis zum Nürburgring,
        von Trier bis nach Luxemburg.
      </p>

      <div className="grid md:grid-cols-2 gap-5 mb-10">
        {ziele.map((z) => (
          <div key={z.name} className="card border border-stone-100 hover:border-green-200 transition-colors flex gap-4">
            <div className="text-3xl">{z.icon}</div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-bold text-green-900">{z.name}</h3>
                <span className="text-xs text-stone-400">ca. {z.entfernung}</span>
              </div>
              <p className="text-stone-600 text-sm leading-relaxed">{z.beschreibung}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-4">
        <Link href="/buchung" className="btn-primary">Urlaub planen & buchen</Link>
        <Link href="/guide/schlechtwetter" className="btn-secondary">Schlechtwetter-Tipps</Link>
      </div>
    </div>
  );
}
