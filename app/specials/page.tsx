import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Specials – Ausflugsziele & Erlebnisse ab Kirchweiler | MaarZeit Vulkaneifel",
  description:
    "Nürburgring, Cochem, Koblenz, Luxemburg, Köln und Familienurlaub mit Kind – die schönsten Ausflugsziele ab der Ferienwohnung in der Vulkaneifel mit Entfernungsangaben.",
};

const specials = [
  {
    href: "/specials/nuerburgring",
    title: "Nürburgring",
    entfernung: "ca. 55 km",
    beschreibung:
      "Motorsport, Nordschleife und die Erlebniswelt ring°werk – der Nürburgring ist eines der bekanntesten Ausflugsziele Deutschlands. Touristenfahrten auf der legendären Nordschleife sind möglich.",
  },
  {
    href: "/specials/auszeit-mit-kind",
    title: "Auszeit mit Kind",
    entfernung: "regional",
    beschreibung:
      "Die Vulkaneifel ist ein ideales Familienziel: Wildpark, Maare, Wanderwege und ein Garten mit Feuerschale. Naturerlebnisse ohne lange Anfahrten – direkt vor der Haustür.",
  },
  {
    href: "/specials/cochem",
    title: "Cochem an der Mosel",
    entfernung: "ca. 45 km",
    beschreibung:
      "Die Reichsburg hoch über der Mosel, eine malerische Altstadt und erstklassige Weinkultur machen Cochem zum schönsten Tagesausflug entlang der Mosel.",
  },
  {
    href: "/specials/koblenz",
    title: "Koblenz",
    entfernung: "ca. 85 km",
    beschreibung:
      "Dort, wo Rhein und Mosel zusammenfließen: Das Deutsche Eck, die Festung Ehrenbreitstein und eine lebendige Altstadt machen Koblenz zu einem lohnenswerten Ausflugsziel.",
  },
  {
    href: "/specials/luxemburg",
    title: "Luxemburg",
    entfernung: "ca. 95 km",
    beschreibung:
      "Die kleine Hauptstadt mit großem Charme: UNESCO-Altstadt, unterirdische Casemates, das Viertel Grund und internationales Flair – Luxemburg überrascht auf Tagesausflug.",
  },
  {
    href: "/specials/koeln",
    title: "Köln",
    entfernung: "ca. 130 km",
    beschreibung:
      "Der Kölner Dom, Brauhauskultur, Rheinufer und erstklassige Museen – Köln ist die nächste Metropole und ein großartiges Ziel für einen ausgedehnten Tagesausflug.",
  },
];

export default function SpecialsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="section-title">Specials</h1>
      <p className="text-stone-600 text-lg mb-12 max-w-2xl leading-relaxed">
        Die Ferienwohnung MaarZeit liegt zentral in der Vulkaneifel – ideal als Ausgangspunkt
        für Ausflüge in alle Richtungen. Ob Motorsport, Weinkultur, Metropolen oder
        Familienurlaub: Hier finden Sie unsere persönlichen Empfehlungen.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {specials.map((s) => (
          <Link
            key={s.href}
            href={s.href}
            className="card border border-stone-200 hover:border-stone-400 hover:shadow-md transition-all group flex flex-col"
          >
            <div className="flex items-baseline justify-between mb-3">
              <h2 className="font-bold text-green-900 text-xl group-hover:text-green-700 transition-colors">
                {s.title}
              </h2>
              <span className="text-xs text-stone-400 shrink-0 ml-2">{s.entfernung}</span>
            </div>
            <p className="text-stone-600 text-sm leading-relaxed flex-1">{s.beschreibung}</p>
            <span className="mt-4 text-sm text-green-700 font-medium group-hover:underline">
              Mehr erfahren →
            </span>
          </Link>
        ))}
      </div>

      <div className="mt-16 border-t border-stone-200 pt-10 text-center">
        <p className="text-stone-600 mb-4">
          Sie möchten eines dieser Ziele mit einem Aufenthalt in der Vulkaneifel verbinden?
        </p>
        <Link href="/buchung" className="btn-primary">
          Jetzt Ferienwohnung buchen
        </Link>
      </div>
    </div>
  );
}
