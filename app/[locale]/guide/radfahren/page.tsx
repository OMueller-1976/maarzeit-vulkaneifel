import type { Metadata } from "next";
import Link from "next/link";
import { getLocale } from 'next-intl/server'
import { generateSeoMetadata } from '@/lib/seo';

const metaTitles: Record<string, string> = {
  de: 'Radfahren in der Vulkaneifel – Maare-Mosel Radweg ab Daun',
  en: 'Cycling in the Vulkan Eifel – Maare-Mosel Cycle Route from Daun',
  nl: 'Fietsen in de Vulkaan Eifel – Maare-Mosel Fietsroute vanaf Daun',
  fr: "Vélo dans l'Eifel Volcanique – Piste Cyclable Maare-Mosel depuis Daun",
}

const metaDescriptions: Record<string, string> = {
  de: 'Maare-Mosel-Radweg: 51 km auf ehemaliger Bahntrasse von Daun bis zur Mosel. E-Bike-Touren in der Vulkaneifel ab unserer Ferienwohnung in Kirchweiler.',
  en: 'Maare-Mosel Cycle Route: 51 km on a former railway track from Daun to the Moselle. E-bike tours in the Vulkan Eifel from our holiday apartment in Kirchweiler.',
  nl: 'Maare-Mosel Fietsroute: 51 km op voormalig spoortraject van Daun naar de Moezel. E-bike tours in de Vulkaan Eifel vanuit ons vakantieappartement in Kirchweiler.',
  fr: "Piste cyclable Maare-Mosel: 51 km sur une ancienne voie ferrée de Daun à la Moselle. Randonnées à vélo dans l'Eifel volcanique depuis notre appartement à Kirchweiler.",
}


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
  const titles = {
    'de': 'Radfahren Vulkaneifel – Maare-Mosel-Radweg ab Daun',
    'en': 'Cycling in the Vulkan Eifel – Maare-Mosel Cycle Route from Daun',
    'nl': 'Fietsen in de Vulkaan Eifel – Maare-Mosel Fietsroute vanaf Daun',
    'fr': 'Vélo dans l\'Eifel Volcanique – Piste Cyclable Maare-Mosel depuis Daun',
  }
  const descs = {
    'de': 'Radfahren in der Vulkaneifel: Maare-Mosel-Radweg und weitere Touren ab Daun.',
    'en': 'Cycling in the Vulkan Eifel: Maare-Mosel cycle route and further tours from Daun.',
    'nl': 'Fietsen in de Vulkaan Eifel: Maare-Mosel fietsroute en andere tochten vanuit Daun.',
    'fr': 'Vélo dans l\'Eifel volcanique: piste Maare-Mosel et autres circuits depuis Daun.',
  }
  const l = locale as keyof typeof titles
  return generateSeoMetadata('/guide/radfahren', locale, titles[l] || titles.de, descs[l] || descs.de)
}

export default async function RadfahrenPage() {
  const locale = await getLocale()

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
        Strecke.
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

      <h2 className="text-2xl font-bold text-green-900 mb-4">Fahrräder & E-Bikes</h2>
      <div className="card mb-10">
        <ul className="text-sm text-stone-700 space-y-2">
          {[
            "Fahrräder können im Freien abgestellt werden",
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
