import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Wandern Vulkaneifel – Lieserpfad, Eifelsteig & Maare-Routen',
  description: 'Die schönsten Wanderrouten in der Vulkaneifel: Lieserpfad, Eifelsteig, Manderscheider Burgenstieg und HeimatSpuren ab Kirchweiler bei Daun.',
  alternates: { canonical: 'https://www.ferienwohnung-in-der-vulkaneifel.de/guide/wandern' },
};

const routen = [
  {
    name: "Maar-Runde Daun",
    laenge: "12 km",
    hoehe: "250 m",
    dauer: "3–3,5 Std.",
    schwierigkeit: "Leicht",
    start: "Wanderparkplatz Gemündener Maar",
    beschreibung: "Der Klassiker: Alle drei Dauner Maare in einer Runde verbunden durch schattige Waldpfade und Wiesenabschnitte.",
  },
  {
    name: "Eifelsteig Etappe 9",
    laenge: "21 km",
    hoehe: "450 m",
    dauer: "5–6 Std.",
    schwierigkeit: "Mittel",
    start: "Daun Bahnhof",
    beschreibung: "Teil des prämierten Fernwanderwegs Eifelsteig – abwechslungsreich durch Wälder, Bachtäler und Vulkankegel.",
  },
  {
    name: "Vulkanpfad Strohn",
    laenge: "8 km",
    hoehe: "180 m",
    dauer: "2 Std.",
    schwierigkeit: "Leicht",
    start: "Strohn (Maarbad)",
    beschreibung: "Familienfreundlicher Weg rund um den Strohner Maar – mit Infostationen zur Vulkangeologie.",
  },
  {
    name: "Hochkelberg-Runde",
    laenge: "15 km",
    hoehe: "380 m",
    dauer: "4 Std.",
    schwierigkeit: "Mittel",
    start: "Kelberg",
    beschreibung: "Auf den höchsten Vulkankegel der Eifel – mit weitem Panoramablick über die gesamte Region.",
  },
  {
    name: "Liesertal-Weg",
    laenge: "18 km",
    hoehe: "320 m",
    dauer: "4,5 Std.",
    schwierigkeit: "Mittel",
    start: "Manderscheid",
    beschreibung: "Durch das romantische Liesertal mit den Burgruinen Manderscheid – eine der schönsten Talwanderungen der Eifel.",
  },
];

export default function WandernPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <nav className="text-sm text-stone-500 mb-6">
        <Link href="/guide" className="hover:text-green-800">Reiseführer</Link>
        {" › "}
        <span>Wandern</span>
      </nav>

      <h1 className="section-title">Wandern in der Vulkaneifel</h1>
      <p className="text-stone-600 text-lg mb-10 max-w-2xl leading-relaxed">
        Die Vulkaneifel ist ein Wanderparadies – mit markierten Wegen durch Wälder,
        über Vulkankegel und entlang von Maaren. Ob gemütlicher Spaziergang oder
        anspruchsvolle Tagestour, hier ist für jeden etwas dabei.
      </p>

      <div className="space-y-4 mb-12">
        {routen.map((r) => (
          <div key={r.name} className="card border border-stone-100 hover:border-green-200 transition-colors">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="flex-1">
                <h3 className="font-bold text-green-900 text-lg">{r.name}</h3>
                <p className="text-stone-600 text-sm mt-1 mb-3 leading-relaxed">{r.beschreibung}</p>
                <p className="text-xs text-stone-500">
                  <strong>Start:</strong> {r.start}
                </p>
              </div>
              <div className="flex flex-col gap-1 items-end text-sm min-w-[120px]">
                <span className="font-bold text-green-800">{r.laenge}</span>
                <span className="text-stone-500">{r.dauer}</span>
                <span className="text-stone-500">↑ {r.hoehe}</span>
                <span className={`text-xs px-2 py-1 rounded-full mt-1 ${
                  r.schwierigkeit === "Leicht" ? "bg-green-100 text-green-800" :
                  r.schwierigkeit === "Mittel" ? "bg-amber-100 text-amber-800" :
                  "bg-red-100 text-red-800"
                }`}>
                  {r.schwierigkeit}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="card bg-green-50 border border-green-200 mb-10">
        <h3 className="font-bold text-green-900 mb-3">Wandertipps von uns</h3>
        <ul className="text-sm text-stone-700 space-y-2">
          {[
            "Karten: Kompass Wanderkarte Vulkaneifel (1:50.000) – erhältlich in Daun",
            "App: Komoot & Outdooractive mit offline Karten empfohlen",
            "Beste Wanderzeit: Mai–Oktober, Herbst besonders schön",
            "Wanderstöcke für steilere Abschnitte empfehlenswert",
            "Eifelsteig-Pass: In der Tourist-Info Daun erhältlich",
          ].map((tip) => (
            <li key={tip} className="flex items-start gap-2">
              <span className="text-green-600 mt-0.5">💡</span> {tip}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-wrap gap-4">
        <Link href="/guide/dauner-maare" className="btn-primary">Dauner Maare entdecken</Link>
        <Link href="/hund" className="btn-secondary">Wandern mit Hund</Link>
      </div>
    </div>
  );
}
