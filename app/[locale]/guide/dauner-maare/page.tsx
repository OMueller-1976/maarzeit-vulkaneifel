import type { Metadata } from "next";
import Link from "next/link";
import { getLocale } from 'next-intl/server'
import { generateSeoMetadata } from '@/lib/seo';
import RegionImage from '@/lib/regionImage';

const translations = {
  de: {
    meta: {
      title: 'Dauner Maare – Gemündener, Schalkenmehrener & Weinfelder Maar',
      description: 'Die Dauner Maare: Baden, Wandern und Natur in der Vulkaneifel. ca. 15 km entfernt von unserer Ferienwohnung.',
    },
    breadcrumb: { guide: 'Reiseführer', page: 'Dauner Maare' },
    heading: 'Dauner Maare',
    intro: 'Die drei Dauner Maare – Schalkenmehrener Maar, Gemündener Maar und Weinfelder Maar – sind das Herzstück der Vulkaneifel und gehören zu den schönsten Naturdenkmälern Deutschlands. Sie entstanden vor etwa 20.000 bis 30.000 Jahren durch gewaltige Vulkanausbrüche.',
    overviewHeading: 'Die drei Maare im Überblick',
    maare: [
      {
        name: 'Schalkenmehrener Maar',
        tiefe: '22 m',
        umfang: 'ca. 3 km',
        tiefLabel: 'Tiefe',
        umfangLabel: 'Umfang',
        info: 'Das größte und bekannteste der drei Maare. Im Sommer Badesee, im Winter bei Frost Eislaufparadies. Direkt an MaarZeit gelegen – in 10 Minuten zu Fuß erreichbar.',
        besonderheit: 'Bademöglichkeit (Strand), Paddelboote, Strandbistro',
      },
      {
        name: 'Gemündener Maar',
        tiefe: '38 m',
        umfang: 'ca. 2,5 km',
        tiefLabel: 'Tiefe',
        umfangLabel: 'Umfang',
        info: 'Das tiefste und wildeste der Dauner Maare. Naturschutzgebiet, kein Baden erlaubt. Dafür herrliche Vogelbeobachtung und stille Wanderwege.',
        besonderheit: 'Naturschutzgebiet, Vogelbeobachtung, Angelparadies',
      },
      {
        name: 'Weinfelder Maar',
        tiefe: '51 m',
        umfang: 'ca. 2 km',
        tiefLabel: 'Tiefe',
        umfangLabel: 'Umfang',
        info: 'Das tiefste Maar mit der mystischsten Atmosphäre – auch „Totenmaar" genannt. Am Rand steht die mittelalterliche Kapelle St. Thomas, ein einzigartiges Bild.',
        besonderheit: 'Kapelle St. Thomas, tiefste Stelle aller Eifelmaare',
      },
    ],
    practicalHeading: 'Praktische Infos',
    parking: {
      title: 'Anfahrt & Parken',
      items: [
        '🅿️ Parkplatz am Schalkenmehrener Maar (kostenpflichtig, Sommer)',
        '🅿️ Großer Wanderparkplatz Gemündener Maar (kostenlos)',
        '🚶 Von MaarZeit zum Schalkenmehrener Maar: 10 Min. zu Fuß',
        '🚴 Mit dem Fahrrad alle drei Maare in einer Runde (ca. 12 km)',
      ],
    },
    season: {
      title: 'Beste Reisezeit',
      items: [
        '🌸 Frühling: Ruhige Wanderwege, blühende Ufer',
        '☀️ Sommer: Baden am Schalkenmehrener Maar',
        '🍂 Herbst: Spektakuläres Morgennebel-Panorama',
        '❄️ Winter: Eislaufen bei Frost, stimmungsvolle Stille',
      ],
    },
    ctaHike: 'Wanderwege rund um die Maare',
    ctaBook: 'Jetzt buchen',
  },
  en: {
    meta: {
      title: 'Daun Lakes – Gemündener, Schalkenmehren & Weinfeld Maar',
      description: 'The Daun Lakes: swimming, hiking and nature in the Vulkan Eifel. Approx. 15 km from our holiday apartment.',
    },
    breadcrumb: { guide: 'Travel Guide', page: 'Daun Lakes' },
    heading: 'Daun Lakes',
    intro: "The three Daun Maare – Schalkenmehrener Maar, Gemündener Maar and Weinfelder Maar – are the heart of the Vulkan Eifel and among Germany's most beautiful natural monuments. They were formed around 20,000 to 30,000 years ago by enormous volcanic eruptions.",
    overviewHeading: 'The Three Lakes at a Glance',
    maare: [
      {
        name: 'Schalkenmehrener Maar',
        tiefe: '22 m',
        umfang: 'approx. 3 km',
        tiefLabel: 'Depth',
        umfangLabel: 'Perimeter',
        info: 'The largest and most famous of the three lakes. A swimming lake in summer, an ice-skating paradise when frozen in winter. Right next to MaarZeit – reachable on foot in 10 minutes.',
        besonderheit: 'Swimming (beach), pedal boats, beach bistro',
      },
      {
        name: 'Gemündener Maar',
        tiefe: '38 m',
        umfang: 'approx. 2.5 km',
        tiefLabel: 'Depth',
        umfangLabel: 'Perimeter',
        info: 'The deepest and wildest of the Daun Lakes. Nature reserve – no swimming allowed. But magnificent birdwatching and quiet hiking trails.',
        besonderheit: "Nature reserve, birdwatching, angler's paradise",
      },
      {
        name: 'Weinfelder Maar',
        tiefe: '51 m',
        umfang: 'approx. 2 km',
        tiefLabel: 'Depth',
        umfangLabel: 'Perimeter',
        info: 'The deepest lake with the most mystical atmosphere – also known as the "Totenmaar" (Lake of the Dead). At its edge stands the medieval St. Thomas Chapel, a unique sight.',
        besonderheit: 'St. Thomas Chapel, deepest of all Eifel maare',
      },
    ],
    practicalHeading: 'Practical Information',
    parking: {
      title: 'Getting There & Parking',
      items: [
        '🅿️ Car park at Schalkenmehrener Maar (paid, summer)',
        '🅿️ Large hiking car park at Gemündener Maar (free)',
        '🚶 From MaarZeit to Schalkenmehrener Maar: 10 min on foot',
        '🚴 By bike: all three lakes in one loop (approx. 12 km)',
      ],
    },
    season: {
      title: 'Best Time to Visit',
      items: [
        '🌸 Spring: Quiet trails, blooming shores',
        '☀️ Summer: Swimming at Schalkenmehrener Maar',
        '🍂 Autumn: Spectacular morning mist panoramas',
        '❄️ Winter: Ice skating when frozen, atmospheric stillness',
      ],
    },
    ctaHike: 'Hiking Trails around the Lakes',
    ctaBook: 'Book Now',
  },
  nl: {
    meta: {
      title: 'Dauner Maren – Gemündener, Schalkenmehrener & Weinfelder Maar',
      description: 'De Dauner Maren: zwemmen, wandelen en natuur in de Vulkaan Eifel. Ca. 15 km van ons vakantieappartement.',
    },
    breadcrumb: { guide: 'Reisgids', page: 'Dauner Maren' },
    heading: 'Dauner Maren',
    intro: "De drie Dauner Maren – Schalkenmehrener Maar, Gemündener Maar en Weinfelder Maar – zijn het hart van de Vulkaan Eifel en behoren tot de mooiste natuurmonumenten van Duitsland. Ze ontstonden zo'n 20.000 tot 30.000 jaar geleden door enorme vulkaanuitbarstingen.",
    overviewHeading: 'De Drie Maren in Één Oogopslag',
    maare: [
      {
        name: 'Schalkenmehrener Maar',
        tiefe: '22 m',
        umfang: 'ca. 3 km',
        tiefLabel: 'Diepte',
        umfangLabel: 'Omtrek',
        info: 'Het grootste en bekendste van de drie maren. In de zomer zwemmeer, bij vorst in de winter een schaatsparadijs. Direct naast MaarZeit gelegen – in 10 minuten lopend bereikbaar.',
        besonderheit: 'Zwemmen (strand), watertrappen, strandbistro',
      },
      {
        name: 'Gemündener Maar',
        tiefe: '38 m',
        umfang: 'ca. 2,5 km',
        tiefLabel: 'Diepte',
        umfangLabel: 'Omtrek',
        info: 'Het diepste en wildste van de Dauner Maren. Natuurreservaat – zwemmen niet toegestaan. Maar prachtige vogelkijkmogelijkheden en stille wandelpaden.',
        besonderheit: 'Natuurreservaat, vogelkijken, visparadijs',
      },
      {
        name: 'Weinfelder Maar',
        tiefe: '51 m',
        umfang: 'ca. 2 km',
        tiefLabel: 'Diepte',
        umfangLabel: 'Omtrek',
        info: 'Het diepste meer met de meest mystische sfeer – ook wel "Totenmaar" genoemd. Aan de rand staat de middeleeuwse Kapel St. Thomas, een uniek gezicht.',
        besonderheit: 'Kapel St. Thomas, diepste van alle Eifelmaren',
      },
    ],
    practicalHeading: 'Praktische Informatie',
    parking: {
      title: 'Aanrijden & Parkeren',
      items: [
        '🅿️ Parkeerplaats bij Schalkenmehrener Maar (betaald, zomer)',
        '🅿️ Grote wandelparkeerplaats Gemündener Maar (gratis)',
        '🚶 Van MaarZeit naar Schalkenmehrener Maar: 10 min. te voet',
        '🚴 Per fiets alle drie maren in één ronde (ca. 12 km)',
      ],
    },
    season: {
      title: 'Beste Reistijd',
      items: [
        '🌸 Lente: Rustige wandelpaden, bloeiende oevers',
        '☀️ Zomer: Zwemmen bij het Schalkenmehrener Maar',
        '🍂 Herfst: Spectaculair ochtendmistpanorama',
        '❄️ Winter: Schaatsen bij vorst, sfeervolle stilte',
      ],
    },
    ctaHike: 'Wandelpaden rond de Maren',
    ctaBook: 'Nu Boeken',
  },
  fr: {
    meta: {
      title: 'Lacs de Daun – Gemündener, Schalkenmehren & Weinfeld Maar',
      description: "Les Lacs de Daun: baignade, randonnée et nature dans l'Eifel volcanique. Environ 15 km de notre appartement.",
    },
    breadcrumb: { guide: 'Guide de Voyage', page: 'Lacs de Daun' },
    heading: 'Lacs de Daun',
    intro: "Les trois Dauner Maare – Schalkenmehrener Maar, Gemündener Maar et Weinfelder Maar – sont le cœur de l'Eifel volcanique et comptent parmi les plus beaux monuments naturels d'Allemagne. Ils se sont formés il y a environ 20 000 à 30 000 ans lors d'énormes éruptions volcaniques.",
    overviewHeading: "Les Trois Lacs en un Coup d'Œil",
    maare: [
      {
        name: 'Schalkenmehrener Maar',
        tiefe: '22 m',
        umfang: 'env. 3 km',
        tiefLabel: 'Profondeur',
        umfangLabel: 'Périmètre',
        info: "Le plus grand et le plus célèbre des trois lacs. Lac de baignade en été, paradis de patinage lors des gelées en hiver. Directement à côté de MaarZeit – accessible à pied en 10 minutes.",
        besonderheit: 'Baignade (plage), pédalos, bistro de plage',
      },
      {
        name: 'Gemündener Maar',
        tiefe: '38 m',
        umfang: 'env. 2,5 km',
        tiefLabel: 'Profondeur',
        umfangLabel: 'Périmètre',
        info: "Le plus profond et le plus sauvage des Lacs de Daun. Réserve naturelle – baignade interdite. Mais observation magnifique des oiseaux et sentiers tranquilles.",
        besonderheit: 'Réserve naturelle, observation des oiseaux, paradis de pêche',
      },
      {
        name: 'Weinfelder Maar',
        tiefe: '51 m',
        umfang: 'env. 2 km',
        tiefLabel: 'Profondeur',
        umfangLabel: 'Périmètre',
        info: "Le lac le plus profond avec l'atmosphère la plus mystique – aussi appelé \"Totenmaar\" (Lac des Morts). Sur sa rive se dresse la chapelle médiévale St. Thomas, un panorama unique.",
        besonderheit: 'Chapelle St. Thomas, le plus profond de tous les maare de l\'Eifel',
      },
    ],
    practicalHeading: 'Informations Pratiques',
    parking: {
      title: 'Accès & Stationnement',
      items: [
        '🅿️ Parking au Schalkenmehrener Maar (payant, été)',
        '🅿️ Grand parking randonnée au Gemündener Maar (gratuit)',
        '🚶 De MaarZeit au Schalkenmehrener Maar : 10 min. à pied',
        '🚴 À vélo : les trois lacs en une boucle (env. 12 km)',
      ],
    },
    season: {
      title: 'Meilleure Saison',
      items: [
        '🌸 Printemps : sentiers tranquilles, rives fleuries',
        '☀️ Été : baignade au Schalkenmehrener Maar',
        '🍂 Automne : spectaculaire panorama de brume matinale',
        '❄️ Hiver : patinage lors du gel, silence envoûtant',
      ],
    },
    ctaHike: 'Sentiers de Randonnée autour des Lacs',
    ctaBook: 'Réserver',
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
  const tr = translations[locale as keyof typeof translations] ?? translations.de
  return generateSeoMetadata('/guide/dauner-maare', locale, tr.meta.title, tr.meta.description)
}

export default async function DaunerMaarePage() {
  const locale = await getLocale()
  const tr = translations[locale as keyof typeof translations] ?? translations.de

  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <nav className="text-sm text-stone-500 mb-6">
        <Link href="/guide" className="hover:text-green-800">{tr.breadcrumb.guide}</Link>
        {" › "}
        <span>{tr.breadcrumb.page}</span>
      </nav>

      <h1 className="section-title">{tr.heading}</h1>
      <p className="text-stone-600 text-lg mb-10 max-w-2xl leading-relaxed">
        {tr.intro}
      </p>

      {/* Weinfelder Maar Foto */}
      <RegionImage
        src="/images/region/weinfelder-maar.jpg"
        alt="Weinfelder Maar mit Kapelle St. Thomas – Vulkaneifel"
        credit="Eifel Tourismus GmbH, D. Ketz"
        height={340}
        className="mb-10"
      />

      {/* Die drei Maare */}
      <h2 className="text-2xl font-bold text-green-900 mb-6">{tr.overviewHeading}</h2>
      <div className="space-y-6 mb-14">
        {tr.maare.map((maar) => (
          <div key={maar.name} className="card border border-green-100">
            <h3 className="text-xl font-bold text-green-900 mb-2">{maar.name}</h3>
            <div className="flex gap-4 text-sm text-stone-500 mb-3">
              <span>{maar.tiefLabel}: <strong className="text-stone-700">{maar.tiefe}</strong></span>
              <span>{maar.umfangLabel}: <strong className="text-stone-700">{maar.umfang}</strong></span>
            </div>
            <p className="text-stone-600 mb-3 leading-relaxed">{maar.info}</p>
            <p className="text-sm text-green-700 font-medium">✦ {maar.besonderheit}</p>
          </div>
        ))}
      </div>

      {/* Praktisches */}
      <h2 className="text-2xl font-bold text-green-900 mb-4">{tr.practicalHeading}</h2>
      <div className="grid md:grid-cols-2 gap-6 mb-10">
        <div className="card">
          <h3 className="font-bold text-green-800 mb-3">{tr.parking.title}</h3>
          <ul className="text-sm text-stone-700 space-y-1.5">
            {tr.parking.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="card">
          <h3 className="font-bold text-green-800 mb-3">{tr.season.title}</h3>
          <ul className="text-sm text-stone-700 space-y-1.5">
            {tr.season.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex flex-wrap gap-4">
        <Link href="/guide/wandern" className="btn-primary">{tr.ctaHike}</Link>
        <Link href="/buchung" className="btn-secondary">{tr.ctaBook}</Link>
      </div>
    </div>
  );
}
