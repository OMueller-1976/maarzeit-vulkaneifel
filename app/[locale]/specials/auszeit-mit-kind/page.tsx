import type { Metadata } from 'next'
import Link from 'next/link'
import { getLocale } from 'next-intl/server'
import { generateSeoMetadata } from '@/lib/seo';

const metaTitles: Record<string, string> = {
  de: 'Familienurlaub in der Vulkaneifel – Auszeit mit Kind',
  en: 'Family Holiday in the Vulkan Eifel – Break with Kids',
  nl: 'Gezinsvakantie in de Vulkaan Eifel – Uitje met Kinderen',
  fr: "Vacances en Famille dans l'Eifel Volcanique – Pause avec Enfants",
}

const metaDescriptions: Record<string, string> = {
  de: 'Familienurlaub in der Vulkaneifel: Wildpark Daun, Dauner Maare, Wandern mit Kindern, Vulkanmuseum und Adler- & Wolfspark Kasselburg. Hund willkommen.',
  en: 'Family holiday in the Vulkan Eifel: wildlife park Daun, Daun Lakes, hiking with kids, volcano museum and eagle & wolf park Kasselburg. Dogs welcome.',
  nl: 'Gezinsvakantie in de Vulkaan Eifel: wildpark Daun, Dauner Maren, wandelen met kinderen, vulkaanmuseum en adelaar- & wolvenpark Kasselburg. Honden welkom.',
  fr: "Vacances en famille dans l'Eifel volcanique: parc animalier Daun, Lacs de Daun, randonnée avec enfants, musée volcanique et parc aigles & loups Kasselburg. Chiens bienvenus.",
}

const translations = {
  de: {
    breadcrumbSpecials: 'Specials',
    breadcrumbCurrent: 'Auszeit mit Kind',
    h1: 'Auszeit mit Kind',
    intro: 'Familienurlaub in der Vulkaneifel – Ziplining, Wildpark, Maare, Wasserspielplatz und Naturerlebnisse direkt vor der Tür.',
    bodyIntro:
      'Die Vulkaneifel bietet Familien mit Kindern ein breites Spektrum an Erlebnissen – von Wildtierparks und Sommerrodelbahn über Naturschwimmen an den Maaren bis hin zu abenteuerlichem Ziplining bei Berlingen. Rund um Kirchweiler und Daun gibt es Ausflugsziele für jedes Alter, jedes Budget und jedes Wetter.',
    btnBook: 'Jetzt buchen',
    btnSpecials: 'Alle Specials',
    ziele: [
      {
        name: 'Wild- & Erlebnispark Daun',
        entfernung: 'ca. 6 km',
        badge: 'Tier & Natur',
        text: 'Autowanderroute durch den Park, Berberaffenschlucht, Greifvogel-Flugshows, Abenteuerspielplatz und Streichelzoo. Lamas, Mufflons, Wildyaks und Wildschweine auf großem Gelände. Für Kinder ein ganzer Nachmittag.',
      },
      {
        name: 'Sommerrodelbahn Daun',
        entfernung: 'ca. 6 km',
        badge: 'Spaß & Abenteuer',
        text: '800 Meter Abfahrt direkt am Wild- & Erlebnispark. Einer- und Zweierbob, Tempo selbst wählbar. Saison April bis Oktober – schnell, günstig und für Kinder ab etwa 4 Jahren geeignet.',
      },
      {
        name: 'Eifel Adventures Berlingen',
        entfernung: 'ca. 12 km',
        badge: 'Abenteuer',
        text: 'Ziplining, Adventure-Minigolf, Fußball-Billard und Boccia auf einem Outdoor-Gelände. Ideal für ältere Kinder und Jugendliche. Baumhaus-Übernachtungen möglich – auch für besondere Familienerlebnisse.',
      },
      {
        name: 'Adler- & Wolfspark Kasselburg Pelm',
        entfernung: 'ca. 20 km',
        badge: 'Tiererlebnis',
        text: 'Greifvogelshows und Wolfsfütterung auf 20 ha rund um eine historische Burg. Täglich Flugvorführungen in der Saison. Europäische Wölfe in weitläufigem Gehege – für Kinder ein Erlebnis, das lange nachwirkt.',
      },
      {
        name: 'Dauner Maare',
        entfernung: 'ca. 6 km',
        badge: 'Natur & Baden',
        text: 'Die drei Dauner Maare bieten ruhige Naturerlebnisse für Familien. Am Schalkenmehrener Maar gibt es im Sommer eine flache Badestelle. Der Rundweg ist auch mit kleineren Kindern gut begehbar.',
      },
      {
        name: 'Laurentiusbad Daun',
        entfernung: 'ca. 6 km',
        badge: 'Hallenbad',
        text: 'Hallenbad mit 28 °C Wassertemperatur, Schwimmer- und Nichtschwimmerbereich. Ganzjährig geöffnet – ideal für Regentage oder wenn die Maare zu kalt sind.',
      },
      {
        name: 'Dreimühlen Wasserfall',
        entfernung: 'ca. 18 km',
        badge: 'Naturdenkmal',
        text: 'Der einzige „wachsende" Wasserfall Deutschlands bei Üxheim-Ahütte. Kostenlos zugänglich, kurzer Spazierweg am Bach. Für Kinder ein spannender Ort – mit einfacher Erklärung wird daraus eine kleine Wissensstunde.',
      },
      {
        name: 'Kurpark Daun mit Wasserspielplatz',
        entfernung: 'ca. 6 km',
        badge: 'Spielen',
        text: 'Weitläufige Grünanlage im Zentrum Dauns mit Wasserspielplatz für Kinder. Kostenlos, ganzjährig nutzbar. Gut kombinierbar mit einem Stadtbummel und Eis in der Dauner Innenstadt.',
      },
      {
        name: 'Eifel-Vulkanmuseum Daun',
        entfernung: 'ca. 6 km',
        badge: 'Museum',
        text: 'Interaktives Museum zur Entstehung der Vulkanlandschaft – verständlich aufbereitet auch für Kinder. Ideal für Regentage. Wer danach weiß, wie ein Maar entsteht, sieht die Umgebung mit anderen Augen.',
      },
      {
        name: 'Wandern: HeimatSpuren Daun',
        entfernung: 'ab Daun ca. 6 km',
        badge: 'Wandern',
        text: 'Zertifizierte Rundwanderwege mit Informationsstationen zu Natur und Geologie. 4 bis 14 km Länge, verschiedene Schwierigkeitsgrade. Familiengeeignete Routen mit Rastplätzen und abwechslungsreicher Landschaft.',
      },
    ],
  },
  en: {
    breadcrumbSpecials: 'Specials',
    breadcrumbCurrent: 'Break with Kids',
    h1: 'Break with Kids',
    intro: 'Family holiday in the Vulkan Eifel – ziplining, wildlife park, volcanic lakes, water playground and nature experiences right on the doorstep.',
    bodyIntro:
      'The Vulkan Eifel offers families with children a wide range of experiences – from wildlife parks and summer toboggan runs to wild swimming in the maar lakes and adventurous ziplining near Berlingen. Around Kirchweiler and Daun there are excursion destinations for every age, every budget and every kind of weather.',
    btnBook: 'Book now',
    btnSpecials: 'All Specials',
    ziele: [
      {
        name: 'Wild- & Erlebnispark Daun',
        entfernung: 'approx. 6 km',
        badge: 'Animals & Nature',
        text: 'Drive-through wildlife route, Barbary macaque canyon, bird-of-prey flight shows, adventure playground and petting zoo. Llamas, mouflons, wild yaks and wild boar on expansive grounds. A full afternoon for children.',
      },
      {
        name: 'Summer Toboggan Run Daun',
        entfernung: 'approx. 6 km',
        badge: 'Fun & Adventure',
        text: '800 metres of descent right next to the wildlife park. Single and double bobsleds, speed of your own choosing. Season April to October – fast, affordable and suitable for children from around 4 years old.',
      },
      {
        name: 'Eifel Adventures Berlingen',
        entfernung: 'approx. 12 km',
        badge: 'Adventure',
        text: 'Ziplining, adventure mini-golf, footpool and pétanque on an outdoor site. Ideal for older children and teenagers. Treehouse overnight stays possible – great for a special family experience.',
      },
      {
        name: 'Eagle & Wolf Park Kasselburg Pelm',
        entfernung: 'approx. 20 km',
        badge: 'Animal Experience',
        text: 'Birds-of-prey shows and wolf feeding across 20 hectares around a historic castle. Daily flight displays in season. European wolves in spacious enclosures – an experience children will remember for years.',
      },
      {
        name: 'Daun Maar Lakes',
        entfernung: 'approx. 6 km',
        badge: 'Nature & Swimming',
        text: 'The three Daun maar lakes offer peaceful nature experiences for families. At Schalkenmehrener Maar there is a shallow bathing spot in summer. The circular trail is manageable even with younger children.',
      },
      {
        name: 'Laurentiusbad Daun Indoor Pool',
        entfernung: 'approx. 6 km',
        badge: 'Indoor Pool',
        text: 'Indoor pool with 28 °C water temperature, separate lanes for swimmers and non-swimmers. Open year-round – ideal for rainy days or when the maar lakes are too cold.',
      },
      {
        name: 'Dreimühlen Waterfall',
        entfernung: 'approx. 18 km',
        badge: 'Natural Monument',
        text: 'Germany\'s only "growing" waterfall near Üxheim-Ahütte. Free to visit, short walkway along the stream. A fascinating spot for children – with a simple explanation it becomes a mini science lesson.',
      },
      {
        name: 'Kurpark Daun with Water Playground',
        entfernung: 'approx. 6 km',
        badge: 'Play',
        text: 'Spacious green park in the centre of Daun with a water playground for children. Free of charge, usable year-round. Easily combined with a stroll through town and ice cream in Daun\'s centre.',
      },
      {
        name: 'Eifel Volcano Museum Daun',
        entfernung: 'approx. 6 km',
        badge: 'Museum',
        text: 'Interactive museum about the formation of the volcanic landscape – presented in a way children can understand. Ideal for rainy days. Once you know how a maar forms, you see the surroundings through different eyes.',
      },
      {
        name: 'Hiking: HeimatSpuren Daun',
        entfernung: 'from Daun approx. 6 km',
        badge: 'Hiking',
        text: 'Certified circular hiking trails with information stations about nature and geology. 4 to 14 km in length, varying difficulty levels. Family-friendly routes with rest spots and varied scenery.',
      },
    ],
  },
  nl: {
    breadcrumbSpecials: 'Specials',
    breadcrumbCurrent: 'Uitje met kinderen',
    h1: 'Uitje met kinderen',
    intro: 'Gezinsvakantie in de Vulkaan Eifel – ziplinen, wildpark, maren, waterspeeltuin en natuurbeleving voor de deur.',
    bodyIntro:
      'De Vulkaan Eifel biedt gezinnen met kinderen een breed scala aan belevenissen – van wildparken en zomerrodelbanen tot zwemmen in de maren en avontuurlijk ziplinen bij Berlingen. Rondom Kirchweiler en Daun zijn er uitstapjes voor elke leeftijd, elk budget en elk weer.',
    btnBook: 'Nu boeken',
    btnSpecials: 'Alle Specials',
    ziele: [
      {
        name: 'Wild- & Erlebnispark Daun',
        entfernung: 'ca. 6 km',
        badge: 'Dieren & Natuur',
        text: 'Autoroute door het park, Berbermakakkloof, vliegshows met roofvogels, avontuurlijke speeltuin en kinderboerderij. Lama\'s, moeflons, wilde jakken en wilde zwijnen op groot terrein. Voor kinderen een hele middag vol beleving.',
      },
      {
        name: 'Zomerrodelbaan Daun',
        entfernung: 'ca. 6 km',
        badge: 'Plezier & Avontuur',
        text: '800 meter afdaling direct naast het wildpark. Eenpersoons- en tweepersoonsbob, tempo zelf te kiezen. Seizoen april tot oktober – snel, voordelig en geschikt voor kinderen vanaf ongeveer 4 jaar.',
      },
      {
        name: 'Eifel Adventures Berlingen',
        entfernung: 'ca. 12 km',
        badge: 'Avontuur',
        text: 'Ziplinen, adventure-minigolf, voetbalbiljart en jeu de boules op een outdoor-terrein. Ideaal voor oudere kinderen en tieners. Overnachtingen in boomhut mogelijk – voor bijzondere familiemomenten.',
      },
      {
        name: 'Adelaar- & Wolvenpark Kasselburg Pelm',
        entfernung: 'ca. 20 km',
        badge: 'Dierenbeleving',
        text: 'Roofvogelshows en wolvenvoeding op 20 hectare rondom een historisch kasteel. Dagelijks vliegvoorstellingen in het seizoen. Europese wolven in ruime verblijven – voor kinderen een ervaring die lang bijblijft.',
      },
      {
        name: 'Dauner Maren',
        entfernung: 'ca. 6 km',
        badge: 'Natuur & Zwemmen',
        text: 'De drie Dauner maren bieden rustige natuurbeleving voor gezinnen. Bij het Schalkenmehrener Maar is er in de zomer een ondiep zwemgedeelte. Het rondje is ook met jonge kinderen goed te lopen.',
      },
      {
        name: 'Laurentiusbad Daun Zwembad',
        entfernung: 'ca. 6 km',
        badge: 'Binnenbad',
        text: 'Overdekt zwembad met 28 °C watertemperatuur, aparte banen voor zwemmers en niet-zwemmers. Het hele jaar open – ideaal op regendagen of als de maren te koud zijn.',
      },
      {
        name: 'Dreimühlen Waterval',
        entfernung: 'ca. 18 km',
        badge: 'Natuurmonument',
        text: 'De enige "groeiende" waterval van Duitsland bij Üxheim-Ahütte. Gratis toegankelijk, kort wandelpad langs de beek. Voor kinderen een bijzondere plek – met een eenvoudige uitleg wordt het een kleine kennisles.',
      },
      {
        name: 'Kurpark Daun met Waterspeeltuin',
        entfernung: 'ca. 6 km',
        badge: 'Spelen',
        text: 'Ruim park in het centrum van Daun met waterspeeltuin voor kinderen. Gratis, het hele jaar te gebruiken. Goed te combineren met een wandeling door de stad en een ijsje in het centrum van Daun.',
      },
      {
        name: 'Eifel Vulkaanmuseum Daun',
        entfernung: 'ca. 6 km',
        badge: 'Museum',
        text: 'Interactief museum over het ontstaan van het vulkaanlandschap – ook voor kinderen begrijpelijk gepresenteerd. Ideaal op regendagen. Wie daarna weet hoe een maar ontstaat, kijkt anders naar de omgeving.',
      },
      {
        name: 'Wandelen: HeimatSpuren Daun',
        entfernung: 'vanaf Daun ca. 6 km',
        badge: 'Wandelen',
        text: 'Gecertificeerde rondrouteswandelpaden met informatiestations over natuur en geologie. 4 tot 14 km lang, verschillende moeilijkheidsgraden. Gezinsvriendelijke routes met rustplaatsen en afwisselend landschap.',
      },
    ],
  },
  fr: {
    breadcrumbSpecials: 'Specials',
    breadcrumbCurrent: 'Pause avec enfants',
    h1: 'Pause avec enfants',
    intro: "Vacances en famille dans l'Eifel volcanique – tyrolienne, parc animalier, lacs de maar, aire de jeux aquatique et découvertes nature à deux pas.",
    bodyIntro:
      "L'Eifel volcanique offre aux familles avec enfants un large éventail d'expériences – des parcs animaliers et luges d'été à la baignade sauvage dans les lacs de maar en passant par une tyrolienne aventureuse à Berlingen. Autour de Kirchweiler et Daun, des excursions pour tous les âges, tous les budgets et tous les temps.",
    btnBook: 'Réserver maintenant',
    btnSpecials: 'Toutes les Offres',
    ziele: [
      {
        name: 'Wild- & Erlebnispark Daun',
        entfernung: 'env. 6 km',
        badge: 'Animaux & Nature',
        text: "Circuit en voiture dans le parc, gorge des macaques de Barbarie, spectacles de rapaces en vol, aire de jeux aventure et zoo de contact. Lamas, mouflons, yaks sauvages et sangliers sur un vaste terrain. Pour les enfants, tout un après-midi d'activités.",
      },
      {
        name: "Luge d'été de Daun",
        entfernung: 'env. 6 km',
        badge: 'Fun & Aventure',
        text: "800 mètres de descente juste à côté du parc animalier. Bob simple ou double, vitesse au choix. Saison d'avril à octobre – rapide, abordable et convenant aux enfants dès environ 4 ans.",
      },
      {
        name: 'Eifel Adventures Berlingen',
        entfernung: 'env. 12 km',
        badge: 'Aventure',
        text: "Tyrolienne, mini-golf aventure, football-billard et pétanque sur un site extérieur. Idéal pour les enfants plus grands et les adolescents. Nuitées en cabane dans les arbres possibles – pour des moments familiaux inoubliables.",
      },
      {
        name: 'Parc Aigles & Loups Kasselburg Pelm',
        entfernung: 'env. 20 km',
        badge: 'Expérience Animale',
        text: "Spectacles de rapaces et nourrissage des loups sur 20 ha autour d'un château historique. Représentations en vol quotidiennes en saison. Loups européens dans de vastes enclos – une expérience que les enfants n'oublieront pas de sitôt.",
      },
      {
        name: 'Lacs de Maar de Daun',
        entfernung: 'env. 6 km',
        badge: 'Nature & Baignade',
        text: "Les trois lacs de maar de Daun offrent des expériences naturelles tranquilles pour les familles. Au Schalkenmehrener Maar, une zone de baignade peu profonde est accessible en été. Le sentier circulaire est praticable même avec de jeunes enfants.",
      },
      {
        name: 'Piscine Laurentiusbad Daun',
        entfernung: 'env. 6 km',
        badge: 'Piscine couverte',
        text: "Piscine couverte avec une température de l'eau de 28 °C, zones nageurs et non-nageurs. Ouverte toute l'année – idéale par temps de pluie ou quand les lacs de maar sont trop froids.",
      },
      {
        name: 'Cascade Dreimühlen',
        entfernung: 'env. 18 km',
        badge: 'Monument naturel',
        text: "La seule cascade «croissante» d'Allemagne près d'Üxheim-Ahütte. Accès gratuit, court sentier le long du ruisseau. Un lieu fascinant pour les enfants – avec une explication simple, cela devient une petite leçon de sciences.",
      },
      {
        name: 'Kurpark Daun avec Aire de Jeux Aquatique',
        entfernung: 'env. 6 km',
        badge: 'Jeux',
        text: "Vaste parc verdoyant au centre de Daun avec aire de jeux aquatique pour enfants. Gratuit, utilisable toute l'année. Facilement combinable avec une balade en ville et une glace dans le centre de Daun.",
      },
      {
        name: 'Musée du Volcan Eifel Daun',
        entfernung: 'env. 6 km',
        badge: 'Musée',
        text: "Musée interactif sur la formation du paysage volcanique – présenté de manière compréhensible pour les enfants. Idéal par temps de pluie. Après avoir compris comment se forme un maar, on regarde les environs d'un tout autre œil.",
      },
      {
        name: 'Randonnée : HeimatSpuren Daun',
        entfernung: 'depuis Daun env. 6 km',
        badge: 'Randonnée',
        text: "Circuits de randonnée certifiés avec bornes d'information sur la nature et la géologie. De 4 à 14 km, différents niveaux de difficulté. Itinéraires adaptés aux familles avec aires de repos et paysages variés.",
      },
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
    'de': 'Familienurlaub Vulkaneifel – Auszeit mit Kind',
    'en': 'Family Holiday in the Vulkan Eifel – Break with Kids',
    'nl': 'Gezinsvakantie in de Vulkaan Eifel – Uitje met Kinderen',
    'fr': 'Vacances en Famille dans l\'Eifel Volcanique – Pause avec Enfants',
  }
  const descs = {
    'de': 'Familienurlaub in der Vulkaneifel: Tierpark, Maare, Spielplätze und kinderfreundliche Ausflüge.',
    'en': 'Family holiday in the Vulkan Eifel: animal park, lakes, playgrounds and child-friendly trips.',
    'nl': 'Gezinsvakantie in de Vulkaan Eifel: dierenpark, maren, speeltuinen en gezinsvriendelijke uitjes.',
    'fr': 'Vacances en famille dans l\'Eifel volcanique: parc animalier, lacs, aires de jeux et sorties.',
  }
  const l = locale as keyof typeof titles
  return generateSeoMetadata('/specials/auszeit-mit-kind', locale, titles[l] || titles.de, descs[l] || descs.de)
}

export default async function AuszeitMitKindPage() {
  const locale = await getLocale()
  const tr = translations[locale as keyof typeof translations] ?? translations.de

  return (
    <>
      {/* Hero */}
      <section style={{ background: '#1C3A22', color: 'white', padding: '4rem 1.5rem' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <nav style={{ fontSize: '0.78rem', color: '#666', marginBottom: '2rem' }}>
            <Link href="/specials" style={{ color: '#888', textDecoration: 'none' }}>{tr.breadcrumbSpecials}</Link>
            {' › '}
            <span>{tr.breadcrumbCurrent}</span>
          </nav>
          <h1 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 'normal', marginBottom: '1rem', lineHeight: 1.2 }}>
            {tr.h1}
          </h1>
          <p style={{ color: '#AAA', fontSize: '1.05rem', lineHeight: 1.7, maxWidth: '560px' }}>
            {tr.intro}
          </p>
        </div>
      </section>

      {/* Intro */}
      <section style={{ maxWidth: '760px', margin: '0 auto', padding: '4rem 1.5rem 2rem' }}>
        <p style={{ color: '#444', lineHeight: 1.9, fontSize: '1rem' }}>
          {tr.bodyIntro}
        </p>
      </section>

      {/* Ziele */}
      <div style={{ maxWidth: '960px', margin: '0 auto', padding: '2rem 1.5rem 4rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '3rem' }}>
          {tr.ziele.map((z) => (
            <div key={z.name} style={{ background: 'white', border: '1px solid #E5E5E5', padding: '1.75rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem', gap: '1rem' }}>
                <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '1rem', fontWeight: 'normal', color: '#1A1A1A', lineHeight: 1.3 }}>
                  {z.name}
                </h3>
                <span style={{ fontSize: '0.72rem', color: '#999', whiteSpace: 'nowrap', flexShrink: 0 }}>
                  {z.entfernung}
                </span>
              </div>
              <p style={{ color: '#555', lineHeight: 1.7, fontSize: '0.88rem', marginBottom: '1rem' }}>
                {z.text}
              </p>
              <span style={{ fontSize: '0.68rem', letterSpacing: '0.08em', textTransform: 'uppercase', border: '1px solid #2D5A35', color: '#2D5A35', padding: '0.2rem 0.6rem' }}>
                {z.badge}
              </span>
            </div>
          ))}
        </div>

        <div style={{ borderTop: '1px solid #E5E5E5', paddingTop: '2.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/buchung" className="btn-primary">{tr.btnBook}</Link>
          <Link href="/specials" className="btn-secondary">{tr.btnSpecials}</Link>
        </div>
      </div>
    </>
  )
}
