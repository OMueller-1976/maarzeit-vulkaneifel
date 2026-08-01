import type { Metadata } from "next";
import Link from "next/link";
import { getLocale } from 'next-intl/server'

const translations = {
  de: {
    meta: {
      title: 'Die Ferienwohnung – 35 qm Neubau mit Terrasse & Parkplatz',
      description: 'Moderne 35 qm Neubau-Ferienwohnung 2023. Separater Eingang, Parkplatz, Terrasse, Küchenzeile, Amazon Prime. Hund willkommen.',
    },
    hero: { title: 'Die Ferienwohnung', subtitle: 'Ihr Zuhause in der Vulkaneifel' },
    features: { title: 'Ausstattung', items: ['35 qm für bis zu 3 Personen','Neubau 2023, modernes Design','Separater Eingang','Eigener Parkplatz','Küchenzeile mit Mini-Backofen','Terrasse mit Gartenmöbeln','Garten mit Feuerschale & Schwenkgrill','WLAN & TV mit Amazon Prime','Hunde willkommen'] },
    cta: 'Jetzt buchen',
  },
  en: {
    meta: {
      title: 'The Apartment – 35 sqm New Build with Terrace & Parking',
      description: 'Modern 35 sqm new build apartment 2023. Separate entrance, parking, terrace, kitchenette, Amazon Prime. Dogs welcome.',
    },
    hero: { title: 'The Apartment', subtitle: 'Your Home in the Vulkan Eifel' },
    features: { title: 'Facilities', items: ['35 sqm for up to 3 persons','New build 2023, modern design','Separate entrance','Private parking space','Kitchenette with mini oven','Terrace with garden furniture','Garden with fire bowl & swing grill','WiFi & TV with Amazon Prime','Dogs welcome'] },
    cta: 'Book Now',
  },
  nl: {
    meta: {
      title: 'Het Appartement – 35 m² Nieuwbouw met Terras & Parkeerplaats',
      description: 'Modern 35 m² nieuwbouwappartement 2023. Aparte ingang, parkeerplaats, terras, kitchenette, Amazon Prime. Honden welkom.',
    },
    hero: { title: 'Het Appartement', subtitle: 'Uw Thuis in de Vulkaan Eifel' },
    features: { title: 'Voorzieningen', items: ['35 m² voor maximaal 3 personen','Nieuwbouw 2023, modern design','Aparte ingang','Eigen parkeerplaats','Kitchenette met mini-oven','Terras met tuinmeubelen','Tuin met vuurschaal & zwenkgrill','WiFi & tv met Amazon Prime','Honden welkom'] },
    cta: 'Nu Boeken',
  },
  fr: {
    meta: {
      title: "L'Appartement – 35 m² Construction Neuve avec Terrasse & Parking",
      description: "Appartement moderne de 35 m² construction neuve 2023. Entrée séparée, parking, terrasse, kitchenette, Amazon Prime. Chiens bienvenus.",
    },
    hero: { title: "L'Appartement", subtitle: "Votre Chez-Vous dans l'Eifel Volcanique" },
    features: { title: 'Équipements', items: ['35 m² pour 3 personnes maximum','Construction neuve 2023, design moderne','Entrée séparée','Place de parking privée','Kitchenette avec mini-four','Terrasse avec mobilier de jardin','Jardin avec brasero & barbecue pivotant','WiFi & TV avec Amazon Prime','Chiens bienvenus'] },
    cta: 'Réserver Maintenant',
  },
}

const ausstattung = [
  "35 qm Wohnfläche",
  "Neubau 2023",
  "Separater Eingang",
  "Eigener Parkplatz",
  "Doppelbett",
  "Sofa (als Klappsofa für 3. Person nutzbar)",
  "Küchenzeile",
  "Kühlschrank",
  "Bar-Esstisch mit Hockern",
  "Terrasse mit Gartenmöbeln (3 Stühle & Tisch)",
  "Garten mit Feuerschale",
  "Schwenkgrill",
  "Bad mit Dusche",
  "WLAN",
  "TV mit Amazon Prime",
  "Haarfön",
  "Hunde erlaubt",
  "Nichtraucherwohnung",
  "Motorradfreundlich",
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
    alternates: { canonical: 'https://www.ferienwohnung-in-der-vulkaneifel.de/ferienwohnung' },
  }
}

export default async function FerienwohnungPage() {
  const locale = await getLocale()
  const tr = translations[locale as keyof typeof translations] ?? translations.de

  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="section-title">{tr.hero.title}</h1>
      <p className="text-stone-600 text-lg mb-6 max-w-2xl leading-relaxed">
        Unsere Ferienwohnung MaarZeit liegt ruhig in der Vulkaneifel, ca. 15 km von
        den weltberühmten Dauner Maaren entfernt (19 Min. per Auto). Auf 35 qm finden Sie alles, was Sie
        für einen erholsamen Urlaub brauchen – modern eingerichtet (Neubau 2023), gemütlich
        und naturnah.
      </p>
      <p className="text-stone-600 mb-10 max-w-2xl leading-relaxed">
        Die Terrasse mit Gartenmöbeln lädt zu gemütlichen Stunden im Freien ein. Der Garten
        mit Feuerschale ist gemeinsam nutzbar – ideal für entspannte Abende in der Eifelluft.
      </p>

      {/* Fotos */}
      <div className="mb-14">
        <div style={{ borderRadius: '10px', overflow: 'hidden', aspectRatio: '4/3', maxWidth: '640px' }}>
          <img
            src="/garten-feuerschale.jpeg"
            alt="Garten mit Feuerschale der Ferienwohnung MaarZeit Vulkaneifel"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        </div>
        <p className="text-stone-500 text-sm mt-2">Garten mit Feuerschale – für entspannte Abende unter dem Eifelturm.</p>
      </div>

      {/* Eckdaten */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
        {[
          { label: "Größe", value: "35 qm" },
          { label: "Personen", value: "bis 3" },
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
      <h2 className="text-2xl font-bold text-green-900 mb-6">{tr.features.title}</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-14">
        {ausstattung.map((item) => (
          <div key={item} className="flex items-start gap-2 text-sm text-stone-700">
            <span className="text-green-600 mt-0.5 shrink-0">✓</span>
            {item}
          </div>
        ))}
      </div>

      {/* Lage */}
      <h2 className="text-2xl font-bold text-green-900 mb-4">Lage & Umgebung</h2>
      <p className="text-stone-600 mb-4 leading-relaxed">
        Die Wohnung befindet sich in Kirchweiler, Kreis Daun, im Herzen der Vulkaneifel.
        Die Dauner Maare sind ca. 15 km entfernt (19 Min. per Auto), die Kreisstadt Daun
        mit Restaurants, Supermärkten und Apotheke liegt nur 5 km entfernt.
      </p>
      <ul className="text-sm text-stone-700 space-y-1 mb-10">
        {[
          "Dauner Maare: ca. 15 km (19 Min. per Auto)",
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
        <Link href="/buchung" className="btn-primary">{tr.cta}</Link>
        <Link href="/kontakt" className="btn-secondary">Fragen? Schreiben Sie uns</Link>
      </div>
    </div>
  );
}
