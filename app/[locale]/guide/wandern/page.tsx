import type { Metadata } from "next";
import Link from "next/link";
import { getLocale } from 'next-intl/server'
import { generateSeoMetadata } from '@/lib/seo';
import RegionImage from '@/lib/regionImage';

const metaTitles: Record<string, string> = {
  de: 'Wandern in der Vulkaneifel – Lieserpfad, Eifelsteig & Maare-Runden',
  en: 'Hiking in the Vulkan Eifel – Lieser Path, Eifel Trail & Lake Routes',
  nl: 'Wandelen in de Vulkaan Eifel – Lieserpfad, Eifelsteig & Marenroutes',
  fr: "Randonnée dans l'Eifel Volcanique – Lieserpfad, Eifelsteig & Routes",
}

const metaDescriptions: Record<string, string> = {
  de: 'Die schönsten Wanderrouten in der Vulkaneifel: Lieserpfad, Eifelsteig, Manderscheider Burgenstieg und HeimatSpuren ab Kirchweiler bei Daun.',
  en: 'The best hiking routes in the Vulkan Eifel: Lieser Path, Eifel Trail, Manderscheid Castle Trail and HeimatSpuren from Kirchweiler near Daun.',
  nl: 'De mooiste wandelroutes in de Vulkaan Eifel: Lieserpfad, Eifelsteig, Burgenpad Manderscheid en HeimatSpuren vanaf Kirchweiler bij Daun.',
  fr: "Les plus belles randonnées dans l'Eifel volcanique: Lieserpfad, Eifelsteig, sentier des châteaux de Manderscheid depuis Kirchweiler.",
}

const translations = {
  de: {
    routen: [
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
    ],
    heading: "Wandern in der Vulkaneifel",
    intro: "Die Vulkaneifel ist ein Wanderparadies – mit markierten Wegen durch Wälder, über Vulkankegel und entlang von Maaren. Ob gemütlicher Spaziergang oder anspruchsvolle Tagestour, hier ist für jeden etwas dabei.",
    tipsHeading: "Wandertipps von uns",
    tips: [
      "Karten: Kompass Wanderkarte Vulkaneifel (1:50.000) – erhältlich in Daun",
      "App: Komoot & Outdooractive mit offline Karten empfohlen",
      "Beste Wanderzeit: Mai–Oktober, Herbst besonders schön",
      "Wanderstöcke für steilere Abschnitte empfehlenswert",
      "Eifelsteig-Pass: In der Tourist-Info Daun erhältlich",
    ],
    breadcrumb: { guide: "Reiseführer", wandern: "Wandern" },
    diffLabels: { Leicht: "Leicht", Mittel: "Mittel", Schwer: "Schwer" },
    startLabel: "Start:",
    ctaHike: "Dauner Maare entdecken",
    ctaDog: "Wandern mit Hund",
    lauschtourHeading: "Lauschtour Grüne Hölle",
    lauschtourText: "Die Lauschtour \u201eGr\u00fcne H\u00f6lle\u201c ist ein multimedialer Erlebnispfad durch das wildromantische Liesertal. Entlang des Weges erz\u00e4hlen interaktive H\u00f6rstationen Geschichten aus Natur, Sagenwelt und Geschichte der Eifel. Startpunkt ist Manderscheid \u2013 von MaarZeit in etwa 15 Minuten mit dem Auto erreichbar.",
  },
  en: {
    routen: [
      {
        name: "Maar-Runde Daun",
        laenge: "12 km",
        hoehe: "250 m",
        dauer: "3–3.5h",
        schwierigkeit: "Easy",
        start: "Gemündener Maar car park",
        beschreibung: "The classic: all three Daun Maare connected in one loop through shaded forest paths and meadow sections.",
      },
      {
        name: "Eifelsteig Stage 9",
        laenge: "21 km",
        hoehe: "450 m",
        dauer: "5–6h",
        schwierigkeit: "Medium",
        start: "Daun train station",
        beschreibung: "Part of the award-winning Eifelsteig long-distance trail – varied through forests, stream valleys and volcanic cones.",
      },
      {
        name: "Vulkanpfad Strohn",
        laenge: "8 km",
        hoehe: "180 m",
        dauer: "2h",
        schwierigkeit: "Easy",
        start: "Strohn (Maarbad)",
        beschreibung: "Family-friendly walk around the Strohn Maar – with information boards on volcanic geology.",
      },
      {
        name: "Hochkelberg Loop",
        laenge: "15 km",
        hoehe: "380 m",
        dauer: "4h",
        schwierigkeit: "Medium",
        start: "Kelberg",
        beschreibung: "Up to the highest volcanic cone in the Eifel – with wide panoramic views across the entire region.",
      },
      {
        name: "Lieser Valley Trail",
        laenge: "18 km",
        hoehe: "320 m",
        dauer: "4.5h",
        schwierigkeit: "Medium",
        start: "Manderscheid",
        beschreibung: "Through the romantic Lieser Valley with the Manderscheid castle ruins – one of the Eifel's finest valley walks.",
      },
    ],
    heading: "Hiking in the Vulkan Eifel",
    intro: "The Vulkan Eifel is a hiking paradise – with waymarked trails through forests, over volcanic cones and along maare. Whether a leisurely stroll or a challenging day hike, there is something for everyone here.",
    tipsHeading: "Our hiking tips",
    tips: [
      "Maps: Kompass Wanderkarte Vulkaneifel (1:50,000) – available in Daun",
      "App: Komoot & Outdooractive with offline maps recommended",
      "Best hiking season: May–October, autumn particularly beautiful",
      "Hiking poles recommended for steeper sections",
      "Eifelsteig passport: available at the Daun tourist office",
    ],
    breadcrumb: { guide: "Travel Guide", wandern: "Hiking" },
    diffLabels: { Leicht: "Easy", Mittel: "Medium", Schwer: "Hard" },
    startLabel: "Start:",
    ctaHike: "Discover the Dauner Maare",
    ctaDog: "Hiking with dogs",
    lauschtourHeading: "Lauschtour Grüne Hölle",
    lauschtourText: "The Lauschtour 'Grüne Hölle' (Green Hell) is a multimedia experience trail through the wild-romantic Lieser Valley. Interactive audio stations along the way tell stories from nature, local legend and Eifel history. The starting point is Manderscheid – about 15 minutes by car from MaarZeit.",
  },
  nl: {
    routen: [
      {
        name: "Maar-Ronde Daun",
        laenge: "12 km",
        hoehe: "250 m",
        dauer: "3–3,5 uur",
        schwierigkeit: "Makkelijk",
        start: "Wanderparkplatz Gemündener Maar",
        beschreibung: "De klassieker: alle drie Dauner Maren verbonden in één ronde door schaduwrijke bospaden en weide-secties.",
      },
      {
        name: "Eifelsteig Etappe 9",
        laenge: "21 km",
        hoehe: "450 m",
        dauer: "5–6 uur",
        schwierigkeit: "Gemiddeld",
        start: "Daun Bahnhof",
        beschreibung: "Onderdeel van de bekroonde Eifelsteig langeafstandsroute – afwisselend door bossen, beekvalleys en vulkaankegels.",
      },
      {
        name: "Vulkanpfad Strohn",
        laenge: "8 km",
        hoehe: "180 m",
        dauer: "2 uur",
        schwierigkeit: "Makkelijk",
        start: "Strohn (Maarbad)",
        beschreibung: "Gezinsvriendelijke wandeling rondom het Strohner Maar – met infoborden over vulkaangeologie.",
      },
      {
        name: "Hochkelberg-Ronde",
        laenge: "15 km",
        hoehe: "380 m",
        dauer: "4 uur",
        schwierigkeit: "Gemiddeld",
        start: "Kelberg",
        beschreibung: "Naar de hoogste vulkaankegel van de Eifel – met wijd panoramisch uitzicht over de hele regio.",
      },
      {
        name: "Lieservallei-Weg",
        laenge: "18 km",
        hoehe: "320 m",
        dauer: "4,5 uur",
        schwierigkeit: "Gemiddeld",
        start: "Manderscheid",
        beschreibung: "Door de romantische Lieservallei met de kasteelruïnes van Manderscheid – een van de mooiste dalwandelingen van de Eifel.",
      },
    ],
    heading: "Wandelen in de Vulkaan Eifel",
    intro: "De Vulkaan Eifel is een wandelparadijs – met bewegwijzerde paden door bossen, over vulkaankegels en langs maren. Of u nu rustig wilt wandelen of een uitdagende dagtocht zoekt, hier is voor ieder wat wils.",
    tipsHeading: "Onze wandeltips",
    tips: [
      "Kaarten: Kompass Wandelkaart Vulkaneifel (1:50.000) – verkrijgbaar in Daun",
      "App: Komoot & Outdooractive met offline kaarten aanbevolen",
      "Beste wandelseizoen: mei–oktober, herfst bijzonder mooi",
      "Wandelstokken aanbevolen voor steilere gedeelten",
      "Eifelsteig-pas: verkrijgbaar bij de VVV in Daun",
    ],
    breadcrumb: { guide: "Reisgids", wandern: "Wandelen" },
    diffLabels: { Leicht: "Makkelijk", Mittel: "Gemiddeld", Schwer: "Moeilijk" },
    startLabel: "Start:",
    ctaHike: "Ontdek de Dauner Maren",
    ctaDog: "Wandelen met hond",
    lauschtourHeading: "Lauschtour Grüne Hölle",
    lauschtourText: "De Lauschtour 'Grüne Hölle' is een multimediaal ervaringsparcours door de wildromantische Lieservallei. Interactieve luisterstations langs de route vertellen verhalen uit de natuur, sagen en geschiedenis van de Eifel. Het startpunt is Manderscheid – vanuit MaarZeit ongeveer 15 minuten rijden.",
  },
  fr: {
    routen: [
      {
        name: "Tour des Maare de Daun",
        laenge: "12 km",
        hoehe: "250 m",
        dauer: "3–3,5 h",
        schwierigkeit: "Facile",
        start: "Wanderparkplatz Gemündener Maar",
        beschreibung: "Le classique : les trois Dauner Maare reliés en une boucle à travers sentiers forestiers ombragés et prairies.",
      },
      {
        name: "Eifelsteig Étape 9",
        laenge: "21 km",
        hoehe: "450 m",
        dauer: "5–6 h",
        schwierigkeit: "Moyen",
        start: "Gare de Daun",
        beschreibung: "Partie du sentier de grande randonnée primé Eifelsteig – varié à travers forêts, vallées et cônes volcaniques.",
      },
      {
        name: "Vulkanpfad Strohn",
        laenge: "8 km",
        hoehe: "180 m",
        dauer: "2 h",
        schwierigkeit: "Facile",
        start: "Strohn (Maarbad)",
        beschreibung: "Balade familiale autour du Strohner Maar – avec panneaux d'information sur la géologie volcanique.",
      },
      {
        name: "Tour du Hochkelberg",
        laenge: "15 km",
        hoehe: "380 m",
        dauer: "4 h",
        schwierigkeit: "Moyen",
        start: "Kelberg",
        beschreibung: "Jusqu'au plus haut cône volcanique de l'Eifel – avec un large panorama sur toute la région.",
      },
      {
        name: "Sentier de la Vallée de la Lieser",
        laenge: "18 km",
        hoehe: "320 m",
        dauer: "4,5 h",
        schwierigkeit: "Moyen",
        start: "Manderscheid",
        beschreibung: "À travers la romantique vallée de la Lieser et les ruines des châteaux de Manderscheid – l'une des plus belles randonnées en vallée de l'Eifel.",
      },
    ],
    heading: "Randonnée dans l'Eifel Volcanique",
    intro: "L'Eifel volcanique est un paradis pour les randonneurs – avec des sentiers balisés à travers les forêts, sur des cônes volcaniques et le long des maare. Qu'il s'agisse d'une promenade tranquille ou d'une randonnée exigeante à la journée, il y en a pour tous les goûts.",
    tipsHeading: "Nos conseils randonnée",
    tips: [
      "Cartes : Kompass Wanderkarte Vulkaneifel (1:50 000) – disponible à Daun",
      "Application : Komoot & Outdooractive avec cartes hors ligne recommandée",
      "Meilleure saison : mai–octobre, l'automne est particulièrement beau",
      "Bâtons de randonnée recommandés pour les sections plus escarpées",
      "Passeport Eifelsteig : disponible à l'office de tourisme de Daun",
    ],
    breadcrumb: { guide: "Guide de voyage", wandern: "Randonnée" },
    diffLabels: { Leicht: "Facile", Mittel: "Moyen", Schwer: "Difficile" },
    startLabel: "Départ :",
    ctaHike: "Découvrir les Dauner Maare",
    ctaDog: "Randonnée avec chien",
    lauschtourHeading: "Lauschtour Grüne Hölle",
    lauschtourText: "La Lauschtour 'Grüne Hölle' est un sentier d'expérience multimédia à travers la vallée romantique de la Lieser. Des stations audio interactives racontent des histoires de la nature, des légendes locales et de l'histoire de l'Eifel. Le point de départ est Manderscheid – à environ 15 minutes en voiture de MaarZeit.",
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
    'de': 'Wandern Vulkaneifel – Lieserpfad, Eifelsteig & Maare-Routen',
    'en': 'Hiking in the Vulkan Eifel – Lieser Path, Eifel Trail & Lake Routes',
    'nl': 'Wandelen in de Vulkaan Eifel – Lieserpfad, Eifelsteig & Marenroutes',
    'fr': 'Randonnée dans l\'Eifel Volcanique – Lieserpfad, Eifelsteig & Routes',
  }
  const descs = {
    'de': 'Wanderwege in der Vulkaneifel: Lieserpfad, Eifelsteig und Maare-Routen ab Daun.',
    'en': 'Hiking trails in the Vulkan Eifel: Lieser Path, Eifel Trail and lake routes from Daun.',
    'nl': 'Wandelpaden in de Vulkaan Eifel: Lieserpfad, Eifelsteig en marenroutes vanuit Daun.',
    'fr': 'Sentiers de randonnée dans l\'Eifel volcanique: Lieserpfad, Eifelsteig et routes des lacs.',
  }
  const l = locale as keyof typeof titles
  return generateSeoMetadata('/guide/wandern', locale, titles[l] || titles.de, descs[l] || descs.de)
}

export default async function WandernPage() {
  const locale = await getLocale()
  const tr = translations[locale as keyof typeof translations] ?? translations.de

  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <nav className="text-sm text-stone-500 mb-6">
        <Link href="/guide" className="hover:text-green-800">{tr.breadcrumb.guide}</Link>
        {" › "}
        <span>{tr.breadcrumb.wandern}</span>
      </nav>

      <h1 className="section-title">{tr.heading}</h1>
      <p className="text-stone-600 text-lg mb-8 max-w-2xl leading-relaxed">
        {tr.intro}
      </p>

      <RegionImage
        src="/images/region/wandern-eifel.jpg"
        alt="Wandern in der Vulkaneifel – Blick über Maare und Wälder"
        credit="Eifel Tourismus GmbH, D. Ketz"
        height={300}
        className="mb-10"
      />

      <div className="space-y-4 mb-12">
        {tr.routen.map((r) => (
          <div key={r.name} className="card border border-stone-100 hover:border-green-200 transition-colors">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="flex-1">
                <h3 className="font-bold text-green-900 text-lg">{r.name}</h3>
                <p className="text-stone-600 text-sm mt-1 mb-3 leading-relaxed">{r.beschreibung}</p>
                <p className="text-xs text-stone-500">
                  <strong>{tr.startLabel}</strong> {r.start}
                </p>
              </div>
              <div className="flex flex-col gap-1 items-end text-sm min-w-[120px]">
                <span className="font-bold text-green-800">{r.laenge}</span>
                <span className="text-stone-500">{r.dauer}</span>
                <span className="text-stone-500">↑ {r.hoehe}</span>
                <span className={`text-xs px-2 py-1 rounded-full mt-1 ${
                  r.schwierigkeit === tr.diffLabels.Leicht ? "bg-green-100 text-green-800" :
                  r.schwierigkeit === tr.diffLabels.Mittel ? "bg-amber-100 text-amber-800" :
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
        <h3 className="font-bold text-green-900 mb-3">{tr.tipsHeading}</h3>
        <ul className="text-sm text-stone-700 space-y-2">
          {tr.tips.map((tip) => (
            <li key={tip} className="flex items-start gap-2">
              <span className="text-green-600 mt-0.5">💡</span> {tip}
            </li>
          ))}
        </ul>
      </div>

      {/* Lauschtour Grüne Hölle */}
      <div className="mt-12 mb-4">
        <h2 className="text-2xl font-bold text-green-900 mb-3">{tr.lauschtourHeading}</h2>
        <p className="text-stone-600 mb-5 leading-relaxed">{tr.lauschtourText}</p>
        <RegionImage
          src="/images/region/lauschtour-gruene-hoelle.jpg"
          alt="Lauschtour Grüne Hölle – Wanderweg Vulkaneifel"
          credit="Eifel Tourismus GmbH"
          height={260}
          className="mb-6"
        />
      </div>

      <div className="flex flex-wrap gap-4">
        <Link href="/guide/dauner-maare" className="btn-primary">{tr.ctaHike}</Link>
        <Link href="/hund" className="btn-secondary">{tr.ctaDog}</Link>
      </div>
    </div>
  );
}
