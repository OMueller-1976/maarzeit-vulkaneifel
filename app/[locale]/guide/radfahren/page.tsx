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

const translations = {
  de: {
    routen: [
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
    ],
    heading: "Radfahren in der Vulkaneifel",
    intro: "Ob entspannter Radausflug auf gut ausgebauten Radwegen oder sportliche Tour durch hügeliges Gelände – die Vulkaneifel bietet für jeden Radler die richtige Strecke.",
    bikeHeading: "Fahrräder & E-Bikes",
    bikeItems: [
      "Fahrräder können im Freien abgestellt werden",
      "E-Bike-Verleih: Zweirad-Center Daun (5 km), ab 35 €/Tag",
      "Fahrradkarte: liegt in der Wohnung aus",
    ],
    breadcrumb: { guide: "Reiseführer", radfahren: "Radfahren" },
    diffLabels: { Leicht: "Leicht", LeichtMittel: "Leicht–Mittel", Mittel: "Mittel" },
    ctaBook: "Jetzt buchen",
    ctaHike: "Lieber wandern?",
  },
  en: {
    routen: [
      {
        name: "Kyll Cycle Route",
        km: "150 km",
        schwierigkeit: "Easy",
        route: "Prüm → Kyllburg → Trier",
        beschreibung: "Flat cycle route along the Kyll, ideal for families and leisurely tours. Mostly tarmac.",
      },
      {
        name: "Maar Loop",
        km: "22 km",
        schwierigkeit: "Easy–Medium",
        route: "Around all three Daun Maare",
        beschreibung: "A pretty half-day circuit through the maar landscape – with a swimming stop at Schalkenmehrener Maar.",
      },
      {
        name: "Vulkan Eifel Trail",
        km: "85 km",
        schwierigkeit: "Medium",
        route: "Daun – Strohn – Ulmen – Daun",
        beschreibung: "Sporty day loop with elevation changes and great views over the volcanic landscape.",
      },
      {
        name: "Moselle-Eifel Route",
        km: "60 km",
        schwierigkeit: "Medium",
        route: "Daun → Cochem",
        beschreibung: "Descent from the Eifel into the Moselle Valley – hilly approach rewarded with magnificent scenery and wine villages.",
      },
    ],
    heading: "Cycling in the Vulkan Eifel",
    intro: "Whether a relaxed cycle trip on well-developed cycle paths or a sporty tour through hilly terrain – the Vulkan Eifel has the right route for every cyclist.",
    bikeHeading: "Bikes & E-Bikes",
    bikeItems: [
      "Bicycles can be stored outside",
      "E-bike hire: Zweirad-Center Daun (5 km), from €35/day",
      "Cycle map: available in the apartment",
    ],
    breadcrumb: { guide: "Travel Guide", radfahren: "Cycling" },
    diffLabels: { Leicht: "Easy", LeichtMittel: "Easy–Medium", Mittel: "Medium" },
    ctaBook: "Book Now",
    ctaHike: "Prefer hiking?",
  },
  nl: {
    routen: [
      {
        name: "Kyll Fietsroute",
        km: "150 km",
        schwierigkeit: "Makkelijk",
        route: "Prüm → Kyllburg → Trier",
        beschreibung: "Vlakke fietsroute langs de Kyll, ideaal voor gezinnen en rustige tochten. Grotendeels geasfalteerd.",
      },
      {
        name: "Maar-Ronde",
        km: "22 km",
        schwierigkeit: "Makkelijk–Gemiddeld",
        route: "Rondom alle drie de Dauner Maren",
        beschreibung: "Mooie halve dagrit door het marenlandschap – met zwempauze bij het Schalkenmehrener Maar.",
      },
      {
        name: "Vulkaan Eifel Trail",
        km: "85 km",
        schwierigkeit: "Gemiddeld",
        route: "Daun – Strohn – Ulmen – Daun",
        beschreibung: "Sportieve dagtocht met hoogteverschillen en mooi uitzicht over het vulkanische landschap.",
      },
      {
        name: "Moezel-Eifel Route",
        km: "60 km",
        schwierigkeit: "Gemiddeld",
        route: "Daun → Cochem",
        beschreibung: "Afdaling van de Eifel naar het Moezeltal – heuvelachtige aanrit beloond met prachtig panorama en wijnplaatsen.",
      },
    ],
    heading: "Fietsen in de Vulkaan Eifel",
    intro: "Of het nu gaat om een ontspannen fietsuitstapje op goed aangelegde fietspaden of een sportieve tocht door heuvelachtig terrein – de Vulkaan Eifel heeft de juiste route voor elke fietser.",
    bikeHeading: "Fietsen & E-Bikes",
    bikeItems: [
      "Fietsen kunnen buiten worden gestald",
      "E-bike verhuur: Zweirad-Center Daun (5 km), vanaf €35/dag",
      "Fietskaart: beschikbaar in het appartement",
    ],
    breadcrumb: { guide: "Reisgids", radfahren: "Fietsen" },
    diffLabels: { Leicht: "Makkelijk", LeichtMittel: "Makkelijk–Gemiddeld", Mittel: "Gemiddeld" },
    ctaBook: "Nu boeken",
    ctaHike: "Liever wandelen?",
  },
  fr: {
    routen: [
      {
        name: "Piste de la Kyll",
        km: "150 km",
        schwierigkeit: "Facile",
        route: "Prüm → Kyllburg → Trier",
        beschreibung: "Piste cyclable plate le long de la Kyll, idéale pour les familles et les balades tranquilles. Majoritairement asphaltée.",
      },
      {
        name: "Tour des Maare",
        km: "22 km",
        schwierigkeit: "Facile–Moyen",
        route: "Autour des trois Dauner Maare",
        beschreibung: "Joli circuit d'une demi-journée dans le paysage des maare – avec baignade au Schalkenmehrener Maar.",
      },
      {
        name: "Sentier Eifel Volcanique",
        km: "85 km",
        schwierigkeit: "Moyen",
        route: "Daun – Strohn – Ulmen – Daun",
        beschreibung: "Boucle sportive à la journée avec dénivelé et belles vues sur le paysage volcanique.",
      },
      {
        name: "Route Moselle-Eifel",
        km: "60 km",
        schwierigkeit: "Moyen",
        route: "Daun → Cochem",
        beschreibung: "Descente de l'Eifel vers la vallée de la Moselle – montée vallonnée récompensée par un panorama magnifique et des villages viticoles.",
      },
    ],
    heading: "Vélo dans l'Eifel Volcanique",
    intro: "Qu'il s'agisse d'une balade à vélo détendue sur des pistes bien aménagées ou d'une sortie sportive en terrain vallonné – l'Eifel volcanique offre la bonne route pour chaque cycliste.",
    bikeHeading: "Vélos & E-Bikes",
    bikeItems: [
      "Les vélos peuvent être rangés à l'extérieur",
      "Location d'e-bikes : Zweirad-Center Daun (5 km), à partir de 35 €/jour",
      "Carte cycliste : disponible dans l'appartement",
    ],
    breadcrumb: { guide: "Guide de voyage", radfahren: "Vélo" },
    diffLabels: { Leicht: "Facile", LeichtMittel: "Facile–Moyen", Mittel: "Moyen" },
    ctaBook: "Réserver maintenant",
    ctaHike: "Vous préférez randonner ?",
  },
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
  const tr = translations[locale as keyof typeof translations] ?? translations.de

  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <nav className="text-sm text-stone-500 mb-6">
        <Link href="/guide" className="hover:text-green-800">{tr.breadcrumb.guide}</Link>
        {" › "}
        <span>{tr.breadcrumb.radfahren}</span>
      </nav>

      <h1 className="section-title">{tr.heading}</h1>
      <p className="text-stone-600 text-lg mb-10 max-w-2xl leading-relaxed">
        {tr.intro}
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {tr.routen.map((r) => (
          <div key={r.name} className="card border border-stone-100 hover:border-green-200 transition-colors">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold text-green-900 text-lg">{r.name}</h3>
              <span className={`text-xs px-2 py-1 rounded-full ${
                r.schwierigkeit === tr.diffLabels.Leicht ? "bg-green-100 text-green-800" :
                r.schwierigkeit === tr.diffLabels.LeichtMittel ? "bg-lime-100 text-lime-800" :
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

      <h2 className="text-2xl font-bold text-green-900 mb-4">{tr.bikeHeading}</h2>
      <div className="card mb-10">
        <ul className="text-sm text-stone-700 space-y-2">
          {tr.bikeItems.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="text-green-600 mt-0.5">🚲</span> {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-wrap gap-4">
        <Link href="/buchung" className="btn-primary">{tr.ctaBook}</Link>
        <Link href="/guide/wandern" className="btn-secondary">{tr.ctaHike}</Link>
      </div>
    </div>
  );
}
