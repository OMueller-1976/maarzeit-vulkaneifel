import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Radfahren in der Vulkaneifel",
  description:
    "Radwege und Touren in der Vulkaneifel – Kyll-Radweg, Eifel-Ardenen-Trail und lokale Runden. Fahrradverleih und E-Bike-Infos.",
};

export default function RadfahrenPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <nav className="text-sm text-stone-500 mb-6">
        <Link href="/guide" className="hover:text-green-800">Reiseführer</Link>
        {" › "}
        <span>Radfahren</span>
      </nav>

      <h1 className="section-title">Radfahren in der Vulkaneifel</h1>
      <p className="text-stone-600 text-lg mb-10 max-w-2xl leading-relaxed">
        Ob entspannter Radausflug auf gut ausgebauten Radwegen oder sportliche Tour
        durch hügeliges Gelände – die Vulkaneifel bietet für jeden Radler die richtige
        Strecke. Bei MaarZeit stehen Ihnen zwei Leihfahrräder kostenlos zur Verfügung.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {[
          {
            name: "Kyll-Radweg",
            km: "150 km",
            schwierigkeit: "Leicht",
            route: "Prüm → Kyllburg → Trier",
            beschreibung: "Flacher Radweg entlang der Kyll, ideal für Familien und gemütliche Touren. Größtenteils asphaltiert.",
          },
          {
            name: "Maar-Runde",
            km: "22 km",
            schwierigkeit: "Leicht–Mittel",
            route: "Rund um alle drei Dauner Maare",
            beschreibung: "Hübsche Halbtagesrunde durch die Maarlandschaft – mit Badepause am Schalkenmehrener Maar.",
          },
          {
            name: "Vulkaneifel-Trail",
            km: "85 km",
            schwierigkeit: "Mittel",
            route: "Daun – Strohn – Ulmen – Daun",
            beschreibung: "Sportliche Tagesrunde mit Höhenunterschieden und tollen Ausblicken auf die Vulkanlandschaft.",
          },
          {
            name: "Mosel-Eifel-Radweg",
            km: "60 km",
            schwierigkeit: "Mittel",
            route: "Daun → Cochem",
            beschreibung: "Abfahrt von der Eifel ins Moseltal – bergige Anfahrt, belohnt mit herrlichem Panorama und Weinorten.",
          },
        ].map((r) => (
          <div key={r.name} className="card border border-stone-100 hover:border-green-200 transition-colors">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold text-green-900 text-lg">{r.name}</h3>
              <span className={`text-xs px-2 py-1 rounded-full ${
                r.schwierigkeit === "Leicht" ? "bg-green-100 text-green-800" :
                r.schwierigkeit === "Leicht–Mittel" ? "bg-lime-100 text-lime-800" :
                "bg-amber-100 text-amber-800"
              }`}>
                {r.schwierigkeit}
              </span>
            </div>
            <p className="text-sm text-stone-500 mb-2">
              🚴 {r.km} · {r.route}
            </p>
            <p className="text-stone-600 text-sm leading-relaxed">{r.beschreibung}</p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold text-green-900 mb-4">Fahrradverleih & E-Bikes</h2>
      <div className="card mb-10">
        <ul className="text-sm text-stone-700 space-y-2">
          {[
            "2 Leihfahrräder inklusive im Mietpreis (Trekking, 28 Zoll)",
            "Fahrradkeller mit abschließbarem Stellplatz für eigene Räder",
            "Werkzeug und Luftpumpe vorhanden",
            "E-Bike-Verleih: Zweirad-Center Daun (5 km), ab 35 €/Tag",
            "Fahrradkarte: liegt in der Wohnung aus",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="text-green-600 mt-0.5">🚲</span> {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-wrap gap-4">
        <Link href="/buchung" className="btn-primary">Jetzt buchen</Link>
        <Link href="/guide/wandern" className="btn-secondary">Lieber wandern?</Link>
      </div>
    </div>
  );
}
