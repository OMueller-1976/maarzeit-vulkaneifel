import type { Metadata } from 'next'
import Link from 'next/link'
import { getLocale } from 'next-intl/server'
import { generateSeoMetadata } from '@/lib/seo';

const metaTitles: Record<string, string> = {
  de: 'Schlechtwetter-Tipps Vulkaneifel – Was tun bei Regen?',
  en: 'Rainy Day Activities in the Vulkan Eifel – Indoor Tips near Daun',
  nl: 'Slechtweer Activiteiten Vulkaan Eifel – Tips bij Regen rond Daun',
  fr: "Activités par Mauvais Temps dans l'Eifel – Idées Intérieures près de Daun",
}

const metaDescriptions: Record<string, string> = {
  de: 'Was tun bei Regen in der Vulkaneifel? Vulkanmuseum Daun, Thermalbäder, Moselausflug und gemütliche Einkehr. Tipps für Regentage in der Eifel.',
  en: 'What to do on rainy days in the Vulkan Eifel? Volcano museum Daun, indoor pools, Moselle trip and cosy restaurants. Tips for wet days in the Eifel.',
  nl: 'Wat te doen bij regen in de Vulkaan Eifel? Vulkaanmuseum Daun, zwembaden, Moezeluitstap en gezellige restaurants. Tips voor regenachtige dagen.',
  fr: "Que faire par temps de pluie dans l'Eifel volcanique? Musée des volcans Daun, piscines intérieures, excursion sur la Moselle. Conseils pour les jours de pluie.",
}

const translations = {
  de: {
    breadcrumb: 'Reiseführer › Schlechtwetter',
    heroHeading: 'Regentag? Kein Problem.',
    heroDesc: 'Die Vulkaneifel hat auch bei Regen einiges zu bieten – von Höhlen und Museen bis Hallenbad und Kino.',
    geheimtippLabel: 'Geheimtipp',
    geheimtippQuote: '„Fahren Sie an einem Regentag nach Cochem. Die Mosel-Altstadt im Nieselregen, eine warme Weinstube, der Blick auf die Reichsburg – das ist Eifel-Urlaub in seiner besten Form."',
    btnPrimary: 'Alle Ausflugsziele',
    btnSecondary: 'Urlaub buchen',
    tipps: [
      {
        name: 'Kinopalast Vulkaneifel Daun',
        badge: 'Unterhaltung',
        text: 'Modernes Kino in Daun mit aktuellen Filmen in angenehmer Atmosphäre. Der klassische Regentag-Plan – funktioniert immer.',
      },
      {
        name: 'Laurentiusbad Daun',
        badge: 'Hallenbad',
        text: 'Hallenbad mit 28 °C Wassertemperatur, Schwimmer- und Nichtschwimmerbereich. Barrierefrei, ganzjährig geöffnet. Entspannung und Bewegung, egal wie das Wetter draußen ist.',
      },
      {
        name: 'Eifel-Vulkanmuseum Daun',
        badge: 'Museum',
        text: 'Interaktives Museum zur Entstehung der Vulkanlandschaft. Verständliche Aufbereitung für alle Altersgruppen, familienfreundlich. Pflichtprogramm für alle, die die Eifel wirklich verstehen möchten.',
      },
      {
        name: 'Buchenlochhöhle Gerolstein',
        badge: 'Höhle',
        text: 'Eiszeithöhle mit Fundstücken aus der Altsteinzeit, von Steinzeitmenschen vor rund 30.000 Jahren bewohnt, Teil der Gerolsteiner Dolomiten. Geführte Touren ganzjährig – innen trocken, besonders stimmungsvoll bei Regen draußen.',
      },
      {
        name: 'Maarmuseum Manderscheid',
        badge: 'Museum',
        text: 'Museum über die Entstehung der Maare – gut kombinierbar mit einem Besuch der Manderscheider Burgruinen. Regen stört hier nicht, da der Besuch größtenteils drinnen stattfindet.',
      },
      {
        name: 'Heimwebermuseum Schalkenmehren',
        badge: 'Heimatgeschichte',
        text: 'Einblick in das traditionelle Handwerk und die Kulturgeschichte der Eifel. Klein, ruhig und authentisch – ein guter Halt für ein bis zwei Stunden.',
      },
      {
        name: 'Einkaufen in Daun',
        badge: 'Einkauf',
        text: 'Die Dauner Innenstadt hat eine überschaubare, angenehme Einkaufszone mit inhabergeführten Geschäften. Wochenmarkt mit regionalen Produkten – Termine vorab prüfen.',
      },
      {
        name: 'Moselausflug nach Cochem',
        badge: 'Tagesausflug',
        text: 'Reichsburg, Altstadt und gemütliche Weinstuben direkt an der Mosel. Bei Regen hat Cochem seinen ganz eigenen Charme – verwinkelte Gassen und warme Gasträume laden zum Verweilen ein.',
      },
      {
        name: 'Schloss Bürresheim',
        badge: 'Schloss',
        text: 'Das besterhaltene Schloss der Eifel – nie zerstört, mit originalem Inventar aus mehreren Jahrhunderten. Geführte Touren täglich, innen vollständig zu besichtigen.',
      },
      {
        name: 'Gerolsteiner Brunnen Erlebniswelt',
        badge: 'Neu 2026 · Kostenlos',
        text: 'Neue interaktive Erlebniswelt bei Deutschlands größtem Mineralbrunnen. Führungen durch die Abfüllanlagen mit Gratisverkostung. Voranmeldung erforderlich (besucherzentrum@gerolsteiner.com, Tel. +49 6591 14238). Führungen Mo–Do: 09:30 und 11:30 Uhr. Innen, warm, kostenlos.',
      },
      {
        name: 'Birresborner Eishöhlen',
        badge: 'Höhle · Geführt',
        text: 'Vier Lavahöhlen im Vulkanpark Birresborn – im Inneren ganzjährig um 0 °C, daher der Name. Geführte Touren buchbar, Schutzkleidung wird gestellt. Ein außergewöhnliches Erlebnis, das wetterfest ist.',
      },
      {
        name: 'Naturkundemuseum Gerolstein',
        badge: 'Museum',
        text: 'Museum zur Naturgeschichte der Vulkaneifel – Geologie, Fossilien und Fauna der Region. Gut kombinierbar mit dem Felsenpfad oder der Erlebniswelt. Öffnungszeiten vorab prüfen.',
      },
      {
        name: 'Wassermühle Birgel',
        badge: 'Museum · Hofladen',
        text: 'Das größte Mühlen-Erlebniszentrum Europas: vier Mühlen in Betrieb (Senf, Getreide, Öl, Säge). Führungen buchbar, Hofladen mit regionalen Produkten. Schön auch bei schlechtem Wetter.',
      },
    ],
  },
  en: {
    breadcrumb: 'Travel Guide › Rainy Days',
    heroHeading: 'Rainy Day? No Problem.',
    heroDesc: 'The Vulkan Eifel has plenty to offer even in the rain – from caves and museums to indoor pools and cinemas.',
    geheimtippLabel: 'Insider Tip',
    geheimtippQuote: '"Take a drive to Cochem on a rainy day. The Moselle old town in the drizzle, a warm wine tavern, the view of the Reichsburg – that is Eifel holiday at its finest."',
    btnPrimary: 'All Excursions',
    btnSecondary: 'Book Holiday',
    tipps: [
      {
        name: 'Kinopalast Vulkaneifel Daun',
        badge: 'Entertainment',
        text: 'Modern cinema in Daun showing current films in a pleasant atmosphere. The classic rainy day plan – always works.',
      },
      {
        name: 'Laurentiusbad Daun',
        badge: 'Indoor Pool',
        text: 'Indoor pool with 28°C water temperature, lanes for swimmers and non-swimmers. Barrier-free, open year-round. Relaxation and exercise whatever the weather.',
      },
      {
        name: 'Eifel Volcano Museum Daun',
        badge: 'Museum',
        text: 'Interactive museum on the formation of the volcanic landscape. Presented accessibly for all ages, family-friendly. Essential for anyone who really wants to understand the Eifel.',
      },
      {
        name: 'Buchenlochhöhle Gerolstein',
        badge: 'Cave',
        text: 'Ice Age cave inhabited by Stone Age people around 30,000 years ago, part of the Gerolstein Dolomites. Guided tours year-round – dry inside, especially atmospheric when it\'s raining outside.',
      },
      {
        name: 'Maarmuseum Manderscheid',
        badge: 'Museum',
        text: 'Museum about the formation of the maare – easily combined with a visit to the Manderscheid castle ruins. Rain doesn\'t matter here as the visit is mostly indoors.',
      },
      {
        name: 'Heimwebermuseum Schalkenmehren',
        badge: 'Local History',
        text: 'Insight into traditional crafts and the cultural history of the Eifel. Small, quiet and authentic – a good stop for one or two hours.',
      },
      {
        name: 'Shopping in Daun',
        badge: 'Shopping',
        text: 'Daun town centre has a pleasant, manageable shopping area with owner-operated shops. Weekly market with regional products – check dates in advance.',
      },
      {
        name: 'Moselle Day Trip to Cochem',
        badge: 'Day Trip',
        text: 'Reichsburg castle, old town and cosy wine taverns right on the Moselle. In the rain, Cochem has its own special charm – winding alleys and warm restaurants invite you to linger.',
      },
      {
        name: 'Bürresheim Castle',
        badge: 'Castle',
        text: 'The best-preserved castle in the Eifel – never destroyed, with original furnishings from several centuries. Guided tours daily, fully accessible inside.',
      },
      {
        name: 'Gerolsteiner Brunnen Erlebniswelt',
        badge: 'New 2026 · Free',
        text: 'New interactive experience world at Germany\'s largest mineral spring. Tours through the bottling plant with free tasting. Registration required (besucherzentrum@gerolsteiner.com, tel. +49 6591 14238). Tours Mon–Thu: 9:30 and 11:30. Indoors, warm, free.',
      },
      {
        name: 'Birresborner Ice Caves',
        badge: 'Cave · Guided',
        text: 'Four lava caves in the Birresborn Volcano Park – a constant 0°C inside year-round, hence the name. Guided tours bookable, protective clothing provided. An extraordinary, weatherproof experience.',
      },
      {
        name: 'Natural History Museum Gerolstein',
        badge: 'Museum',
        text: 'Museum on the natural history of the Vulkan Eifel – geology, fossils and fauna of the region. Well combined with the rock path or experience world. Check opening times in advance.',
      },
      {
        name: 'Birgel Watermill',
        badge: 'Museum · Farm Shop',
        text: 'Europe\'s largest mill experience centre: four working mills (mustard, grain, oil, saw). Tours bookable, farm shop with regional products. Great even in bad weather.',
      },
    ],
  },
  nl: {
    breadcrumb: 'Reisgids › Slecht Weer',
    heroHeading: 'Regendag? Geen Probleem.',
    heroDesc: 'De Vulkaan Eifel heeft ook bij regen veel te bieden – van grotten en musea tot zwembaden en bioscopen.',
    geheimtippLabel: 'Insidertip',
    geheimtippQuote: '"Rij op een regendag naar Cochem. De Moezelstad in de motregen, een warm wijnkafé, het uitzicht op de Reichsburg – dat is Eifel-vakantie op zijn best."',
    btnPrimary: 'Alle Uitstapjes',
    btnSecondary: 'Vakantie Boeken',
    tipps: [
      {
        name: 'Kinopalast Vulkaneifel Daun',
        badge: 'Amusement',
        text: 'Moderne bioscoop in Daun met actuele films in een aangename sfeer. Het klassieke regendagplan – werkt altijd.',
      },
      {
        name: 'Laurentiusbad Daun',
        badge: 'Zwembad',
        text: 'Overdekt zwembad met een watertemperatuur van 28°C, banen voor zwemmers en niet-zwemmers. Toegankelijk voor iedereen, het hele jaar open. Ontspanning en beweging, wat het weer ook doet.',
      },
      {
        name: 'Eifel-Vulkanmuseum Daun',
        badge: 'Museum',
        text: 'Interactief museum over het ontstaan van het vulkaanlandschap. Begrijpelijk voor alle leeftijden, gezinsvriendelijk. Een must voor iedereen die de Eifel echt wil begrijpen.',
      },
      {
        name: 'Buchenlochhöhle Gerolstein',
        badge: 'Grot',
        text: 'IJstijdgrot die door mensen uit de steentijd zo\'n 30.000 jaar geleden werd bewoond, onderdeel van de Gerolsteiner Dolomiten. Rondleidingen het hele jaar door – droog van binnen, extra sfeervol als het buiten regent.',
      },
      {
        name: 'Maarmuseum Manderscheid',
        badge: 'Museum',
        text: 'Museum over het ontstaan van de maren – goed te combineren met een bezoek aan de kasteelruïnes van Manderscheid. Regen stoort hier niet, want het bezoek vindt grotendeels binnen plaats.',
      },
      {
        name: 'Heimwebermuseum Schalkenmehren',
        badge: 'Streekgeschiedenis',
        text: 'Inzicht in de traditionele ambachten en de cultuurgeschiedenis van de Eifel. Klein, rustig en authentiek – een goede stop voor een of twee uur.',
      },
      {
        name: 'Winkelen in Daun',
        badge: 'Winkelen',
        text: 'Het stadscentrum van Daun heeft een overzichtelijke, aangename winkelzone met door eigenaren gerunde winkels. Weekmarkt met regionale producten – data vooraf controleren.',
      },
      {
        name: 'Moezeluitstap naar Cochem',
        badge: 'Daguitstap',
        text: 'De Reichsburg, de oude stad en gezellige wijnkafés direct aan de Moezel. Bij regen heeft Cochem zijn heel eigen charme – kronkelende steegjes en warme restaurants nodigen uit tot vertoeven.',
      },
      {
        name: 'Kasteel Bürresheim',
        badge: 'Kasteel',
        text: 'Het best bewaarde kasteel van de Eifel – nooit verwoest, met origineel interieur uit meerdere eeuwen. Dagelijkse rondleidingen, volledig toegankelijk van binnen.',
      },
      {
        name: 'Gerolsteiner Brunnen Erlebniswelt',
        badge: 'Nieuw 2026 · Gratis',
        text: 'Nieuwe interactieve belevingswereld bij de grootste mineraalwaterbron van Duitsland. Rondleidingen door de afvulinstallaties met gratis proeverij. Aanmelding verplicht (besucherzentrum@gerolsteiner.com, tel. +49 6591 14238). Rondleidingen ma–do: 9:30 en 11:30. Binnen, warm, gratis.',
      },
      {
        name: 'Birresborner IJsgrotten',
        badge: 'Grot · Rondleiding',
        text: 'Vier lavagrot in het Vulkanpark Birresborn – binnen het hele jaar rond 0°C, vandaar de naam. Begeleide rondleidingen te boeken, beschermende kleding wordt verstrekt. Een buitengewone, weerbestendige ervaring.',
      },
      {
        name: 'Natuurhistorisch Museum Gerolstein',
        badge: 'Museum',
        text: 'Museum over de natuurgeschiedenis van de Vulkaan Eifel – geologie, fossielen en fauna van de regio. Goed te combineren met het rotspad of de belevingswereld. Openingstijden vooraf controleren.',
      },
      {
        name: 'Watermolen Birgel',
        badge: 'Museum · Boerderijwinkel',
        text: 'Het grootste molenervaringcentrum van Europa: vier werkende molens (mosterd, graan, olie, zaag). Rondleidingen te boeken, boerderijwinkel met regionale producten. Fijn ook bij slecht weer.',
      },
    ],
  },
  fr: {
    breadcrumb: 'Guide de Voyage › Mauvais Temps',
    heroHeading: 'Jour de Pluie ? Pas de Problème.',
    heroDesc: "L'Eifel volcanique a beaucoup à offrir même par temps de pluie – des grottes et musées aux piscines et cinémas.",
    geheimtippLabel: 'Bon Plan',
    geheimtippQuote: '"Allez à Cochem par un jour de pluie. La vieille ville de la Moselle sous la bruine, une taverne viticole chaleureuse, la vue sur la Reichsburg – c\'est des vacances dans l\'Eifel dans sa meilleure forme."',
    btnPrimary: 'Toutes les Excursions',
    btnSecondary: 'Réserver des Vacances',
    tipps: [
      {
        name: 'Kinopalast Vulkaneifel Daun',
        badge: 'Divertissement',
        text: 'Cinéma moderne à Daun proposant des films actuels dans une atmosphère agréable. Le plan classique pour un jour de pluie – fonctionne toujours.',
      },
      {
        name: 'Laurentiusbad Daun',
        badge: 'Piscine Couverte',
        text: 'Piscine couverte avec une température de l\'eau de 28°C, couloirs pour nageurs et non-nageurs. Accessible à tous, ouvert toute l\'année. Détente et exercice quel que soit le temps.',
      },
      {
        name: 'Musée du Volcan Eifel Daun',
        badge: 'Musée',
        text: 'Musée interactif sur la formation du paysage volcanique. Présentation accessible à tous les âges, adapté aux familles. Incontournable pour quiconque veut vraiment comprendre l\'Eifel.',
      },
      {
        name: 'Buchenlochhöhle Gerolstein',
        badge: 'Grotte',
        text: 'Grotte de l\'ère glaciaire habitée par des hommes préhistoriques il y a environ 30 000 ans, partie des Dolomites de Gerolstein. Visites guidées toute l\'année – sec à l\'intérieur, particulièrement atmosphérique quand il pleut dehors.',
      },
      {
        name: 'Maarmuseum Manderscheid',
        badge: 'Musée',
        text: 'Musée sur la formation des maares – facilement combiné avec une visite aux ruines du château de Manderscheid. La pluie ne pose pas de problème ici car la visite se déroule principalement en intérieur.',
      },
      {
        name: 'Heimwebermuseum Schalkenmehren',
        badge: 'Histoire Locale',
        text: "Aperçu des métiers traditionnels et de l'histoire culturelle de l'Eifel. Petit, calme et authentique – un bon arrêt pour une ou deux heures.",
      },
      {
        name: 'Shopping à Daun',
        badge: 'Shopping',
        text: 'Le centre-ville de Daun dispose d\'une zone commerciale agréable et accessible avec des boutiques indépendantes. Marché hebdomadaire avec des produits régionaux – vérifier les dates à l\'avance.',
      },
      {
        name: 'Excursion Moselle à Cochem',
        badge: 'Excursion',
        text: 'Le château Reichsburg, la vieille ville et de chaleureuses tavernes viticoles au bord de la Moselle. Sous la pluie, Cochem a son propre charme particulier – des ruelles tortueuses et des restaurants chaleureux invitent à s\'attarder.',
      },
      {
        name: 'Château de Bürresheim',
        badge: 'Château',
        text: "Le château le mieux conservé de l'Eifel – jamais détruit, avec un mobilier d'origine de plusieurs siècles. Visites guidées quotidiennes, entièrement accessible à l'intérieur.",
      },
      {
        name: 'Gerolsteiner Brunnen Erlebniswelt',
        badge: 'Nouveau 2026 · Gratuit',
        text: 'Nouveau monde d\'expérience interactif à la plus grande source minérale d\'Allemagne. Visites de l\'usine d\'embouteillage avec dégustation gratuite. Inscription requise (besucherzentrum@gerolsteiner.com, tél. +49 6591 14238). Visites lun–jeu : 9h30 et 11h30. En intérieur, au chaud, gratuit.',
      },
      {
        name: 'Grottes de Glace de Birresborn',
        badge: 'Grotte · Visite Guidée',
        text: 'Quatre grottes de lave dans le Parc Volcanique de Birresborn – une température constante de 0°C à l\'intérieur toute l\'année, d\'où le nom. Visites guidées réservables, vêtements de protection fournis. Une expérience extraordinaire, à l\'abri des intempéries.',
      },
      {
        name: 'Musée d\'Histoire Naturelle de Gerolstein',
        badge: 'Musée',
        text: "Musée sur l'histoire naturelle de l'Eifel volcanique – géologie, fossiles et faune de la région. Bien combiné avec le sentier rocheux ou le monde d'expérience. Vérifier les horaires d'ouverture à l'avance.",
      },
      {
        name: 'Moulin à Eau de Birgel',
        badge: 'Musée · Épicerie',
        text: 'Le plus grand centre d\'expérience de moulins en Europe : quatre moulins en fonctionnement (moutarde, grain, huile, scierie). Visites réservables, épicerie de la ferme avec des produits régionaux. Agréable même par mauvais temps.',
      },
    ],
  },
}

const entfernungen = [
  'ca. 6 km',
  'ca. 6 km',
  'ca. 6 km',
  'ca. 18 km',
  'ca. 18 km',
  'ca. 5 km',
  'ca. 6 km',
  'ca. 45 km',
  'ca. 25 km',
  'ca. 18 km',
  'ca. 30 km',
  'ca. 18 km',
  'ca. 20 km',
]


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
    'de': 'Schlechtwetter Vulkaneifel – Ausflüge bei Regen rund um Daun',
    'en': 'Rainy Day Activities in the Vulkan Eifel – Indoor Tips near Daun',
    'nl': 'Slechtweer Activiteiten Vulkaan Eifel – Tips bij Regen rond Daun',
    'fr': 'Activités par Mauvais Temps dans l\'Eifel – Idées près de Daun',
  }
  const descs = {
    'de': 'Was tun bei schlechtem Wetter in der Vulkaneifel? Museen, Thermen und Indoor-Tipps rund um Daun.',
    'en': 'What to do in bad weather in the Vulkan Eifel? Museums, spas and indoor tips around Daun.',
    'nl': 'Wat te doen bij slecht weer in de Vulkaan Eifel? Musea, thermen en binnentips rond Daun.',
    'fr': 'Que faire par mauvais temps dans l\'Eifel? Musées, thermes et activités intérieures près de Daun.',
  }
  const l = locale as keyof typeof titles
  return generateSeoMetadata('/guide/schlechtwetter', locale, titles[l] || titles.de, descs[l] || descs.de)
}

export default async function SchlechtwetterPage() {
  const locale = await getLocale()
  const tr = translations[locale as keyof typeof translations] ?? translations.de

  return (
    <>
      {/* Hero */}
      <section style={{ background: '#1C3A22', color: 'white', padding: '4rem 1.5rem' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <nav style={{ fontSize: '0.78rem', color: '#666', marginBottom: '2rem' }}>
            <Link href="/guide" style={{ color: '#888', textDecoration: 'none' }}>{tr.breadcrumb.split(' › ')[0]}</Link>
            {' › '}
            <span>{tr.breadcrumb.split(' › ')[1]}</span>
          </nav>
          <h1 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 'normal', marginBottom: '1rem', lineHeight: 1.2 }}>
            {tr.heroHeading}
          </h1>
          <p style={{ color: '#AAA', fontSize: '1.05rem', lineHeight: 1.7, maxWidth: '560px' }}>
            {tr.heroDesc}
          </p>
        </div>
      </section>

      {/* Tipps */}
      <div style={{ maxWidth: '960px', margin: '0 auto', padding: '4rem 1.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '3rem' }}>
          {tr.tipps.map((t, i) => (
            <div key={t.name} style={{ background: 'white', border: '1px solid #E5E5E5', padding: '1.75rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem', gap: '1rem' }}>
                <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '1rem', fontWeight: 'normal', color: '#1A1A1A', lineHeight: 1.3 }}>
                  {t.name}
                </h3>
                <span style={{ fontSize: '0.72rem', color: '#999', whiteSpace: 'nowrap', flexShrink: 0 }}>
                  {entfernungen[i]}
                </span>
              </div>
              <p style={{ color: '#555', lineHeight: 1.7, fontSize: '0.88rem', marginBottom: '1rem' }}>
                {t.text}
              </p>
              <span style={{ fontSize: '0.68rem', letterSpacing: '0.08em', textTransform: 'uppercase', border: '1px solid #2D5A35', color: '#2D5A35', padding: '0.2rem 0.6rem' }}>
                {t.badge}
              </span>
            </div>
          ))}
        </div>

        {/* Geheimtipp */}
        <div style={{ background: 'white', border: '1px solid #E5E5E5', padding: '2rem', marginBottom: '3rem' }}>
          <p style={{ fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#888', marginBottom: '0.75rem' }}>
            {tr.geheimtippLabel}
          </p>
          <p style={{ fontFamily: 'Georgia, serif', fontSize: '1.05rem', color: '#1A1A1A', lineHeight: 1.7, fontStyle: 'italic' }}>
            {tr.geheimtippQuote}
          </p>
        </div>

        <div style={{ borderTop: '1px solid #E5E5E5', paddingTop: '2.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/guide/ausflugsziele" className="btn-primary">{tr.btnPrimary}</Link>
          <Link href="/buchung" className="btn-secondary">{tr.btnSecondary}</Link>
        </div>
      </div>
    </>
  )
}
