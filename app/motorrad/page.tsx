import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Motorradurlaub in der Vulkaneifel",
  description:
    "Die Vulkaneifel ist ein Paradies für Motorradfahrer. Kurvenreiche Strecken, wenig Verkehr und traumhafte Landschaft – mit Unterkunft in MaarZeit.",
};

const strecken = [
  {
    name: "Maaren-Runde",
    km: "ca. 85 km",
    highlights: "Schalkenmehrener Maar, Strohn, Ulmen",
    schwierigkeit: "Mittel",
    beschreibung: "Eine abwechslungsreiche Runde durch die Maare der Vulkaneifel mit wunderschönen Aussichten und ruhigen Landstraßen.",
  },
  {
    name: "Mosel-Eifel-Loop",
    km: "ca. 160 km",
    highlights: "Cochem, Traben-Trarbach, Bernkastel-Kues",
    schwierigkeit: "Leicht",
    beschreibung: "Von der Vulkaneifel hinunter zur Mosel – herrliche Weinberge, malerische Flussschleifen und charmante Winzerstädte.",
  },
  {
    name: "Nürburgring-Anfahrt",
    km: "ca. 45 km",
    highlights: "Adenau, Nürburgring, Hocheifel",
    schwierigkeit: "Leicht–Mittel",
    beschreibung: "Auf direktem Weg zum Ring über die traumhaften Hocheifel-Straßen – ideal für Motorsport-Fans.",
  },
  {
    name: "Südeifel & Felsenlandschaft",
    km: "ca. 130 km",
    highlights: "Gerolstein, Prüm, Our-Tal",
    schwierigkeit: "Mittel",
    beschreibung: "Durch die Gerolsteiner Felsenlandschaft und das romantische Our-Tal an der belgischen Grenze.",
  },
];

export default function MotorradPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="section-title">Motorrad in der Vulkaneifel</h1>
      <p className="text-stone-600 text-lg mb-10 max-w-2xl leading-relaxed">
        Kurvenreiche Landstraßen, kaum Verkehr, beeindruckende Vulkanlandschaft –
        die Vulkaneifel gehört zu den schönsten Motorradregionen Deutschlands.
        MaarZeit ist Ihre ideale Basis.
      </p>

      {/* Service */}
      <div className="grid md:grid-cols-2 gap-8 mb-14">
        <div className="card">
          <h2 className="text-xl font-bold text-green-900 mb-4">Unser Motorrad-Service</h2>
          <ul className="space-y-3 text-stone-700">
            {[
              "Überdachter Motorradstellplatz (abschließbar)",
              "Steckdose zum Laden / Warmhalten",
              "Karten und Streckenempfehlungen",
              "Empfehlung für lokale Motorrad-Cafés",
              "Kontakt zu Pannenhilfe in der Region",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-green-600 mt-0.5">🏍️</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="card bg-green-900 text-white">
          <h2 className="text-xl font-bold mb-4">Die Region auf einen Blick</h2>
          <ul className="space-y-3 text-green-100">
            {[
              "Hunderte Kilometer kurvenreicher Landstraßen",
              "Kaum LKW-Verkehr auf Nebenstraßen",
              "Optimale Tagesstrecken von 80–200 km",
              "Nürburgring nur 45 km entfernt",
              "Benelux & Luxemburg leicht erreichbar",
              "Viele Motorrad-Treffen in der Saison",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-0.5">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Strecken */}
      <h2 className="text-2xl font-bold text-green-900 mb-6">Empfohlene Strecken</h2>
      <div className="space-y-4 mb-12">
        {strecken.map((s) => (
          <div key={s.name} className="card border border-stone-100 hover:border-green-200 transition-colors">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h3 className="font-bold text-green-900 text-lg">{s.name}</h3>
                <p className="text-stone-600 text-sm mt-1 mb-2">{s.beschreibung}</p>
                <p className="text-sm text-stone-500">
                  <strong>Highlights:</strong> {s.highlights}
                </p>
              </div>
              <div className="flex flex-col items-end gap-1 min-w-[100px]">
                <span className="text-green-800 font-bold">{s.km}</span>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  s.schwierigkeit === "Leicht" ? "bg-green-100 text-green-800" :
                  s.schwierigkeit === "Mittel" ? "bg-amber-100 text-amber-800" :
                  "bg-red-100 text-red-800"
                }`}>
                  {s.schwierigkeit}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-4">
        <Link href="/buchung" className="btn-primary">Termin reservieren</Link>
        <Link href="/kontakt" className="btn-secondary">Fragen zur Anreise</Link>
      </div>
    </div>
  );
}
