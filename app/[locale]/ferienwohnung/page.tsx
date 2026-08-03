import type { Metadata } from "next";
import Link from "next/link";
import { getLocale } from 'next-intl/server'
import { generateSeoMetadata } from '@/lib/seo';

const translations = {
  de: {
    meta: {
      title: 'Die Ferienwohnung – 35 qm Neubau mit Terrasse & Parkplatz',
      description: 'Moderne 35 qm Neubau-Ferienwohnung 2023. Separater Eingang, Parkplatz, Terrasse, Küchenzeile, Amazon Prime. Hund willkommen.',
    },
    hero: { title: 'Die Ferienwohnung', subtitle: 'Ihr Zuhause in der Vulkaneifel' },
    features: { title: 'Ausstattung', items: ['35 qm für bis zu 3 Personen','Neubau 2023, modernes Design','Separater Eingang','Eigener Parkplatz','Küchenzeile mit Mini-Backofen','Terrasse mit Gartenmöbeln','Garten mit Feuerschale & Schwenkgrill','WLAN & TV mit Amazon Prime','Hunde willkommen'] },
    cta: 'Jetzt buchen',
    ctaContact: 'Fragen? Schreiben Sie uns',
    intro1: 'Unsere Ferienwohnung MaarZeit liegt ruhig in der Vulkaneifel, ca. 15 km von den weltberühmten Dauner Maaren entfernt (19 Min. per Auto). Auf 35 qm finden Sie alles, was Sie für einen erholsamen Urlaub brauchen – modern eingerichtet (Neubau 2023), gemütlich und naturnah.',
    intro2: 'Die Terrasse mit Gartenmöbeln lädt zu gemütlichen Stunden im Freien ein. Der Garten mit Feuerschale ist gemeinsam nutzbar – ideal für entspannte Abende in der Eifelluft.',
    imgCaption: 'Garten mit Feuerschale – für entspannte Abende unter dem Eifelturm.',
    eckdaten: [
      { label: 'Größe', value: '35 qm' },
      { label: 'Personen', value: 'bis 3' },
      { label: 'Schlafzimmer', value: '1 + Sofa' },
      { label: 'Haustiere', value: 'Ja (1 Hund)' },
    ],
    ausstattung: [
      '35 qm Wohnfläche',
      'Neubau 2023',
      'Separater Eingang',
      'Eigener Parkplatz',
      'Doppelbett',
      'Sofa (als Klappsofa für 3. Person nutzbar)',
      'Küchenzeile',
      'Kühlschrank',
      'Bar-Esstisch mit Hockern',
      'Terrasse mit Gartenmöbeln (3 Stühle & Tisch)',
      'Garten mit Feuerschale',
      'Schwenkgrill',
      'Bad mit Dusche',
      'WLAN',
      'TV mit Amazon Prime',
      'Haarfön',
      'Hunde erlaubt',
      'Nichtraucherwohnung',
      'Motorradfreundlich',
    ],
    lageTitle: 'Lage & Umgebung',
    lagePara: 'Die Wohnung befindet sich in Kirchweiler, Kreis Daun, im Herzen der Vulkaneifel. Die Dauner Maare sind ca. 15 km entfernt (19 Min. per Auto), die Kreisstadt Daun mit Restaurants, Supermärkten und Apotheke liegt nur 5 km entfernt.',
    lageItems: [
      'Dauner Maare: ca. 15 km (19 Min. per Auto)',
      'Daun Innenstadt: 5 km',
      'Nürburgring: 45 km',
      'Trier: 70 km',
    ],
  },
  en: {
    meta: {
      title: 'The Apartment – 35 sqm New Build with Terrace & Parking',
      description: 'Modern 35 sqm new build apartment 2023. Separate entrance, parking, terrace, kitchenette, Amazon Prime. Dogs welcome.',
    },
    hero: { title: 'The Apartment', subtitle: 'Your Home in the Vulkan Eifel' },
    features: { title: 'Facilities', items: ['35 sqm for up to 3 persons','New build 2023, modern design','Separate entrance','Private parking space','Kitchenette with mini oven','Terrace with garden furniture','Garden with fire bowl & swing grill','WiFi & TV with Amazon Prime','Dogs welcome'] },
    cta: 'Book Now',
    ctaContact: 'Questions? Write to us',
    intro1: 'Our holiday apartment MaarZeit is peacefully located in the Vulkan Eifel, approximately 15 km from the world-famous Daun Lakes (19 min by car). On 35 sqm you will find everything you need for a relaxing holiday – modern furnishings (new build 2023), cosy and close to nature.',
    intro2: 'The terrace with garden furniture invites you to enjoy relaxing hours outdoors. The garden with fire bowl is shared – perfect for relaxed evenings in the fresh Eifel air.',
    imgCaption: 'Garden with fire bowl – for relaxed evenings under the Eifel sky.',
    eckdaten: [
      { label: 'Size', value: '35 sqm' },
      { label: 'Persons', value: 'up to 3' },
      { label: 'Bedroom', value: '1 + sofa' },
      { label: 'Pets', value: 'Yes (1 dog)' },
    ],
    ausstattung: [
      '35 sqm living space',
      'New build 2023',
      'Separate entrance',
      'Private parking space',
      'Double bed',
      'Sofa (foldable for 3rd person)',
      'Kitchenette',
      'Refrigerator',
      'Bar dining table with stools',
      'Terrace with garden furniture (3 chairs & table)',
      'Garden with fire bowl',
      'Swing grill',
      'Bathroom with shower',
      'WiFi',
      'TV with Amazon Prime',
      'Hair dryer',
      'Dogs allowed',
      'Non-smoking apartment',
      'Motorcycle-friendly',
    ],
    lageTitle: 'Location & Surroundings',
    lagePara: 'The apartment is located in Kirchweiler, Daun district, in the heart of the Vulkan Eifel. The Daun Lakes are approx. 15 km away (19 min by car), and the district town of Daun with restaurants, supermarkets and a pharmacy is only 5 km away.',
    lageItems: [
      'Daun Lakes: approx. 15 km (19 min by car)',
      'Daun town centre: 5 km',
      'Nürburgring: 45 km',
      'Trier: 70 km',
    ],
  },
  nl: {
    meta: {
      title: 'Het Appartement – 35 m² Nieuwbouw met Terras & Parkeerplaats',
      description: 'Modern 35 m² nieuwbouwappartement 2023. Aparte ingang, parkeerplaats, terras, kitchenette, Amazon Prime. Honden welkom.',
    },
    hero: { title: 'Het Appartement', subtitle: 'Uw Thuis in de Vulkaan Eifel' },
    features: { title: 'Voorzieningen', items: ['35 m² voor maximaal 3 personen','Nieuwbouw 2023, modern design','Aparte ingang','Eigen parkeerplaats','Kitchenette met mini-oven','Terras met tuinmeubelen','Tuin met vuurschaal & zwenkgrill','WiFi & tv met Amazon Prime','Honden welkom'] },
    cta: 'Nu Boeken',
    ctaContact: 'Vragen? Schrijf ons',
    intro1: 'Ons vakantieappartement MaarZeit ligt rustig in de Vulkaan Eifel, ca. 15 km van de wereldberoemde Dauner Maren (19 min. per auto). Op 35 m² vindt u alles wat u nodig heeft voor een ontspannen vakantie – modern ingericht (nieuwbouw 2023), gezellig en natuurlijk.',
    intro2: 'Het terras met tuinmeubelen nodigt uit tot gezellige uren buiten. De tuin met vuurschaal is gezamenlijk te gebruiken – ideaal voor ontspannen avonden in de frisse Eifellucht.',
    imgCaption: 'Tuin met vuurschaal – voor ontspannen avonden onder de Eifelhemel.',
    eckdaten: [
      { label: 'Oppervlakte', value: '35 m²' },
      { label: 'Personen', value: 'tot 3' },
      { label: 'Slaapkamer', value: '1 + slaapbank' },
      { label: 'Huisdieren', value: 'Ja (1 hond)' },
    ],
    ausstattung: [
      '35 m² woonoppervlak',
      'Nieuwbouw 2023',
      'Aparte ingang',
      'Eigen parkeerplaats',
      'Tweepersoonsbed',
      'Slaapbank (voor 3e persoon)',
      'Kitchenette',
      'Koelkast',
      'Barkruk-eettafel met krukken',
      'Terras met tuinmeubelen (3 stoelen & tafel)',
      'Tuin met vuurschaal',
      'Zwenkgrill',
      'Badkamer met douche',
      'WiFi',
      'TV met Amazon Prime',
      'Haardroger',
      'Honden toegestaan',
      'Rookvrij appartement',
      'Motorvriendelijk',
    ],
    lageTitle: 'Ligging & Omgeving',
    lagePara: 'Het appartement bevindt zich in Kirchweiler, district Daun, in het hart van de Vulkaan Eifel. De Dauner Maren liggen op ca. 15 km (19 min. per auto), de stad Daun met restaurants, supermarkten en apotheek ligt op slechts 5 km.',
    lageItems: [
      'Dauner Maren: ca. 15 km (19 min. per auto)',
      'Daun stadscentrum: 5 km',
      'Nürburgring: 45 km',
      'Trier: 70 km',
    ],
  },
  fr: {
    meta: {
      title: "L'Appartement – 35 m² Construction Neuve avec Terrasse & Parking",
      description: "Appartement moderne de 35 m² construction neuve 2023. Entrée séparée, parking, terrasse, kitchenette, Amazon Prime. Chiens bienvenus.",
    },
    hero: { title: "L'Appartement", subtitle: "Votre Chez-Vous dans l'Eifel Volcanique" },
    features: { title: 'Équipements', items: ['35 m² pour 3 personnes maximum','Construction neuve 2023, design moderne','Entrée séparée','Place de parking privée','Kitchenette avec mini-four','Terrasse avec mobilier de jardin','Jardin avec brasero & barbecue pivotant','WiFi & TV avec Amazon Prime','Chiens bienvenus'] },
    cta: 'Réserver Maintenant',
    ctaContact: 'Des questions ? Écrivez-nous',
    intro1: "Notre appartement de vacances MaarZeit est idéalement situé dans l'Eifel volcanique, à environ 15 km des célèbres lacs de Daun (19 min en voiture). Sur 35 m² vous trouverez tout le nécessaire pour des vacances reposantes – décoré de façon moderne (construction neuve 2023), confortable et proche de la nature.",
    intro2: "La terrasse avec mobilier de jardin invite à des moments conviviaux en plein air. Le jardin avec brasero est partagé – idéal pour des soirées détendues dans l'air frais de l'Eifel.",
    imgCaption: "Jardin avec brasero – pour des soirées détendues sous le ciel de l'Eifel.",
    eckdaten: [
      { label: 'Superficie', value: '35 m²' },
      { label: 'Personnes', value: "jusqu'à 3" },
      { label: 'Chambre', value: '1 + canapé' },
      { label: 'Animaux', value: 'Oui (1 chien)' },
    ],
    ausstattung: [
      '35 m² de surface habitable',
      'Construction neuve 2023',
      'Entrée séparée',
      'Place de parking privée',
      'Lit double',
      'Canapé-lit (pour 3e personne)',
      'Kitchenette',
      'Réfrigérateur',
      'Table bar avec tabourets',
      'Terrasse avec mobilier de jardin (3 chaises & table)',
      'Jardin avec brasero',
      'Barbecue pivotant',
      'Salle de bain avec douche',
      'WiFi',
      'TV avec Amazon Prime',
      'Sèche-cheveux',
      'Chiens autorisés',
      'Appartement non-fumeur',
      'Adapté aux motards',
    ],
    lageTitle: 'Situation & Environs',
    lagePara: "L'appartement se trouve à Kirchweiler, arrondissement de Daun, au cœur de l'Eifel volcanique. Les lacs de Daun sont à environ 15 km (19 min en voiture), et la ville de Daun avec restaurants, supermarchés et pharmacie est à seulement 5 km.",
    lageItems: [
      'Lacs de Daun : environ 15 km (19 min en voiture)',
      'Centre-ville de Daun : 5 km',
      'Nürburgring : 45 km',
      'Trèves : 70 km',
    ],
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
    'de': 'Die Ferienwohnung – 35 qm Neubau mit Terrasse & Parkplatz',
    'en': 'The Apartment – 35 sqm New Build with Terrace & Parking',
    'nl': 'Het Appartement – 35 m² Nieuwbouw met Terras & Parkeerplaats',
    'fr': 'L\'Appartement – 35 m² Construction Neuve avec Terrasse & Parking',
  }
  const descs = {
    'de': 'Moderne 35 qm Neubau-Ferienwohnung 2023. Separater Eingang, Parkplatz, Terrasse, Amazon Prime. Hund willkommen.',
    'en': 'Modern 35 sqm new build 2023. Separate entrance, parking, terrace, Amazon Prime. Dogs welcome.',
    'nl': 'Modern 35 m² nieuwbouwappartement 2023. Aparte ingang, parkeerplaats, terras, Amazon Prime. Honden welkom.',
    'fr': 'Appartement moderne 35 m² construction neuve 2023. Entrée séparée, parking, terrasse, Amazon Prime. Chiens bienvenus.',
  }
  const l = locale as keyof typeof titles
  return generateSeoMetadata('/ferienwohnung', locale, titles[l] || titles.de, descs[l] || descs.de)
}

export default async function FerienwohnungPage() {
  const locale = await getLocale()
  const tr = translations[locale as keyof typeof translations] ?? translations.de

  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="section-title">{tr.hero.title}</h1>
      <p className="text-stone-600 text-lg mb-6 max-w-2xl leading-relaxed">
        {tr.intro1}
      </p>
      <p className="text-stone-600 mb-10 max-w-2xl leading-relaxed">
        {tr.intro2}
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
        <p className="text-stone-500 text-sm mt-2">{tr.imgCaption}</p>
      </div>

      {/* Eckdaten */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
        {tr.eckdaten.map((e) => (
          <div key={e.label} className="card text-center border border-green-100">
            <p className="text-2xl font-bold text-green-800">{e.value}</p>
            <p className="text-stone-500 text-sm mt-1">{e.label}</p>
          </div>
        ))}
      </div>

      {/* Ausstattung */}
      <h2 className="text-2xl font-bold text-green-900 mb-6">{tr.features.title}</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-14">
        {tr.ausstattung.map((item) => (
          <div key={item} className="flex items-start gap-2 text-sm text-stone-700">
            <span className="text-green-600 mt-0.5 shrink-0">✓</span>
            {item}
          </div>
        ))}
      </div>

      {/* Lage */}
      <h2 className="text-2xl font-bold text-green-900 mb-4">{tr.lageTitle}</h2>
      <p className="text-stone-600 mb-4 leading-relaxed">
        {tr.lagePara}
      </p>
      <ul className="text-sm text-stone-700 space-y-1 mb-10">
        {tr.lageItems.map((item) => (
          <li key={item} className="flex items-center gap-2">
            <span className="text-green-600">📍</span> {item}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-4">
        <Link href="/buchung" className="btn-primary">{tr.cta}</Link>
        <Link href="/kontakt" className="btn-secondary">{tr.ctaContact}</Link>
      </div>
    </div>
  );
}
