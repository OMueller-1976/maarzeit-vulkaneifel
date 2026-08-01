import Link from "next/link";
import { getLocale } from 'next-intl/server';

const translations = {
  de: {
    title: 'Motorradurlaub in der Vulkaneifel',
    subtitle: 'Motorrad in der Vulkaneifel',
    description: 'Kurvenreiche Landstraßen, kaum Verkehr, beeindruckende Vulkanlandschaft – die Vulkaneifel gehört zu den schönsten Motorradregionen Deutschlands. MaarZeit ist Ihre ideale Basis.',
    serviceTitle: 'Unser Motorrad-Service',
    serviceItems: [
      'Überdachter Motorradstellplatz (abschließbar)',
      'Steckdose zum Laden / Warmhalten',
      'Karten und Streckenempfehlungen',
      'Empfehlung für lokale Motorrad-Cafés',
      'Kontakt zu Pannenhilfe in der Region',
    ],
    advantagesTitle: 'Vulkaneifel-Vorteile',
    advantages: [
      'Hunderte Kilometer kurvenreicher Landstraßen',
      'Kaum LKW-Verkehr auf Nebenstraßen',
      'Optimale Tagesstrecken von 80–200 km',
      'Nürburgring nur 55 km entfernt',
      'Benelux & Luxemburg leicht erreichbar',
      'Viele Motorrad-Treffen in der Saison',
    ],
    routesTitle: 'Empfohlene Strecken',
    ctaBtn: 'Jetzt Verfügbarkeit prüfen',
    ctaContact: 'Fragen zur Anreise',
    meta: {
      title: 'Motorradfreundliche Ferienwohnung Eifel – Touren & Unterkunft',
      description: 'Motorradurlaub in der Vulkaneifel. Eigener Parkplatz, kurvige Eifelstraßen, Nürburgring 55 km.',
    }
  },
  en: {
    title: 'Motorcycle Holiday in the Vulkan Eifel',
    subtitle: 'Motorcycle in the Vulkan Eifel',
    description: "Winding country roads, minimal traffic, stunning volcanic landscapes – the Vulkan Eifel is one of Germany's most beautiful motorcycle regions. MaarZeit is your ideal base.",
    serviceTitle: 'Our Motorcycle Services',
    serviceItems: [
      'Covered motorcycle parking (lockable)',
      'Power socket for charging / warming up',
      'Maps and route recommendations',
      'Recommendations for local motorcycle cafés',
      'Contact for breakdown assistance in the region',
    ],
    advantagesTitle: 'Vulkan Eifel Advantages',
    advantages: [
      'Hundreds of kilometres of winding country roads',
      'Minimal truck traffic on side roads',
      'Ideal day routes of 80–200 km',
      'Nürburgring only 55 km away',
      'Benelux & Luxembourg easily reachable',
      'Many motorcycle meets in season',
    ],
    routesTitle: 'Recommended Routes',
    ctaBtn: 'Check Availability Now',
    ctaContact: 'Questions about getting here',
    meta: {
      title: 'Motorcycle-Friendly Holiday Apartment Eifel – Tours & Accommodation',
      description: 'Motorcycle holiday in the Vulkan Eifel. Private parking, winding Eifel roads, Nürburgring 55 km away.',
    }
  },
  nl: {
    title: 'Motorvakantie in de Vulkaan Eifel',
    subtitle: 'Motor in de Vulkaan Eifel',
    description: 'Bochtige landweggetjes, nauwelijks verkeer, indrukwekkende vulkanische landschappen – de Vulkaan Eifel behoort tot de mooiste motorgebieden van Duitsland. MaarZeit is uw ideale uitvalsbasis.',
    serviceTitle: 'Onze Motorservices',
    serviceItems: [
      'Overdekte motorparkeerplaats (afsluitbaar)',
      'Stopcontact voor opladen / opwarmen',
      'Kaarten en routeaanbevelingen',
      'Aanbevelingen voor lokale motorcafés',
      'Contact voor pechhulp in de regio',
    ],
    advantagesTitle: 'Vulkaan Eifel Voordelen',
    advantages: [
      'Honderden kilometers bochtige landwegen',
      'Nauwelijks vrachtverkeer op secundaire wegen',
      'Ideale dagroutes van 80–200 km',
      'Nürburgring op slechts 55 km',
      'Benelux & Luxemburg gemakkelijk bereikbaar',
      'Veel motorbijeenkomsten in het seizoen',
    ],
    routesTitle: 'Aanbevolen Routes',
    ctaBtn: 'Controleer Nu Beschikbaarheid',
    ctaContact: 'Vragen over de route',
    meta: {
      title: 'Motorvriendelijk Vakantieappartement Eifel – Touren & Verblijf',
      description: 'Motorvakantie in de Vulkaan Eifel. Eigen parkeerplaats, bochtige Eifelwegen, Nürburgring 55 km.',
    }
  },
  fr: {
    title: "Vacances Moto dans l'Eifel Volcanique",
    subtitle: "Moto dans l'Eifel Volcanique",
    description: "Routes sinueuses, peu de circulation, paysages volcaniques impressionnants – l'Eifel volcanique est l'une des plus belles régions moto d'Allemagne. MaarZeit est votre base idéale.",
    serviceTitle: 'Nos Services Moto',
    serviceItems: [
      'Parking moto couvert (fermable à clé)',
      'Prise électrique pour charger / préchauffer',
      "Cartes et recommandations d'itinéraires",
      'Recommandations de cafés moto locaux',
      'Contact pour assistance en cas de panne',
    ],
    advantagesTitle: "Avantages de l'Eifel Volcanique",
    advantages: [
      'Des centaines de kilomètres de routes sinueuses',
      'Peu de camions sur les routes secondaires',
      'Itinéraires journaliers idéaux de 80–200 km',
      'Nürburgring à seulement 55 km',
      'Benelux & Luxembourg facilement accessibles',
      'Nombreux rassemblements moto en saison',
    ],
    routesTitle: 'Itinéraires Recommandés',
    ctaBtn: 'Vérifier la Disponibilité',
    ctaContact: "Questions sur l'accès",
    meta: {
      title: 'Appartement de Vacances Moto Eifel – Circuits & Hébergement',
      description: "Vacances moto dans l'Eifel volcanique. Parking privé, routes sinueuses, Nürburgring à 55 km.",
    }
  },
}

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
]

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const tr = translations[locale as keyof typeof translations] ?? translations.de
  return {
    title: tr.meta.title,
    description: tr.meta.description,
  }
}

export function generateStaticParams() {
  return [
    { locale: 'de' },
    { locale: 'en' },
    { locale: 'nl' },
    { locale: 'fr' },
  ]
}

export default async function MotorradPage() {
  const locale = await getLocale()
  const tr = translations[locale as keyof typeof translations] ?? translations.de

  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="section-title">{tr.subtitle}</h1>
      <p className="text-stone-600 text-lg mb-10 max-w-2xl leading-relaxed">
        {tr.description}
      </p>

      {/* Service */}
      <div className="grid md:grid-cols-2 gap-8 mb-14">
        <div className="card">
          <h2 className="text-xl font-bold text-green-900 mb-4">{tr.serviceTitle}</h2>
          <ul className="space-y-3 text-stone-700">
            {tr.serviceItems.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-green-600 mt-0.5">🏍️</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="card">
          <h2 className="text-xl font-bold text-green-900 mb-4">{tr.advantagesTitle}</h2>
          <ul className="space-y-3" style={{ color: '#444' }}>
            {tr.advantages.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-0.5" style={{ color: '#2D5A35' }}>✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Strecken */}
      <h2 className="text-2xl font-bold text-green-900 mb-6">{tr.routesTitle}</h2>
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
        <Link href="/buchung" className="btn-primary">{tr.ctaBtn}</Link>
        <Link href="/kontakt" className="btn-secondary">{tr.ctaContact}</Link>
      </div>
    </div>
  );
}
