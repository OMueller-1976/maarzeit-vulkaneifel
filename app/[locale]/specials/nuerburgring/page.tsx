import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { getLocale } from 'next-intl/server'
import { generateSeoMetadata } from '@/lib/seo';

const metaTitles: Record<string, string> = {
  de: 'Nürburgring Tagesausflug von Kirchweiler – nur 55 km',
  en: 'Nürburgring Day Trip from Kirchweiler – only 55 km',
  nl: 'Nürburgring Daguitstap vanuit Kirchweiler – slechts 55 km',
  fr: 'Excursion Nürburgring depuis Kirchweiler – à seulement 55 km',
}

const metaDescriptions: Record<string, string> = {
  de: 'Nürburgring liegt 55 km von unserer Ferienwohnung. Nordschleife, Erlebniswelt ring°werk, Touristenfahrten und Motorsport-Events in der Eifel.',
  en: 'Nürburgring is 55 km from our holiday apartment. Nordschleife, ring°werk experience world, tourist laps and motorsport events in the Eifel.',
  nl: 'Nürburgring ligt 55 km van ons vakantieappartement. Nordschleife, ring°werk belevingswereld, toeristische ritten en motorsportevenementen in de Eifel.',
  fr: 'Le Nürburgring est à 55 km de notre appartement de vacances. Nordschleife, monde ring°werk, tours touristiques et événements de motorsport dans l\'Eifel.',
}

const schema = {
  "@context": "https://schema.org",
  "@type": "TouristAttraction",
  "name": "Nürburgring",
  "description": "Legendäre Motorsportanlage in der Eifel mit Nordschleife, Touristenfahrten und Erlebniswelt ring°werk. 55 km ab Kirchweiler.",
  "url": "https://nuerburgring.de",
  "touristType": "Motorsport",
  "geo": { "@type": "GeoCoordinates", "latitude": 50.3356, "longitude": 6.9475 }
}

const translations = {
  de: {
    breadcrumb: 'Specials',
    distance: 'ca. 55 km · ca. 50 Minuten ab Kirchweiler',
    intro: 'Der Nürburgring gehört zu den bekanntesten Motorsportanlagen der Welt und liegt nur rund 55 Kilometer von unserer Ferienwohnung in Kirchweiler entfernt. Eine knappe Stunde Fahrt durch die kurvenreiche Eifellandschaft – und schon stehen Sie vor dem legendären Streckengelände in der Hocheifel. Für Motorsportfans, Familien und Neugierige gleichermaßen lohnt sich dieser Ausflug.',
    sections: [
      {
        title: 'Die Nordschleife – die Grüne Hölle',
        paras: [
          'Die Nordschleife des Nürburgrings gilt als eine der anspruchsvollsten Rennstrecken der Welt. Auf 20,8 Kilometern schlängelt sie sich durch die hügelige Eifellandschaft, überwindet mehr als 300 Meter Höhenunterschied und zählt über 70 Kurven. Niki Lauda nannte sie einmal die „Grüne Hölle" – und dieser Beiname ist bis heute geblieben.',
          'Gebaut zwischen 1925 und 1927, war die Nordschleife bis 1976 fester Bestandteil der Formel-1-Weltmeisterschaft. Noch heute ist sie als technische Referenzstrecke weltweit einzigartig. Automobilhersteller aus aller Welt testen hier ihre Neuheiten unter realen Bedingungen – weshalb man auf der Strecke immer wieder getarnte Prototypen zu Gesicht bekommt.',
        ],
      },
      {
        title: 'Touristenfahrten auf der Nordschleife',
        paras: [
          'An Tagen ohne Rennbetrieb ist die Nordschleife für die Öffentlichkeit freigegeben – sogenannte „Touristenfahrten" ermöglichen es jedem mit einem zugelassenen Fahrzeug, selbst auf der legendären Strecke zu fahren. Das Einfahrticket kostet je nach Saison und Tageszeit zwischen 30 und 35 Euro pro Runde und wird direkt am Einlass erworben.',
          'Wer mit dem Motorrad kommt, erlebt die Nordschleife noch einmal ganz anders: die engen Kurvenfolgen, der Wechsel von Schatten und Sonnenlicht, der Asphalt, der sich durch Wälder und Wiesen zieht – ein Erlebnis, das man nicht vergisst. Achten Sie unbedingt auf die Öffnungszeiten der Strecke, die sich je nach Saison und Rennkalender stark unterscheiden. Aktuelle Infos gibt es auf der offiziellen Website:',
        ],
        link: { href: 'https://nuerburgring.de/', label: 'nuerburgring.de' },
      },
      {
        title: 'ring°werk – die Erlebniswelt',
        paras: [
          'Auch wer keine Runde auf der Strecke drehen möchte, findet am Nürburgring eine Menge zu erleben. Das ring°werk ist die Erlebniswelt direkt am Hauptgelände und richtet sich an Besucher jedes Alters. Hier erwartet Sie eine interaktive Ausstellung zur Geschichte des Nürburgrings, Rennsport-Exponate, historische Rennfahrzeuge und moderne Fahrsimulator-Stationen, an denen Sie selbst virtuell die Nordschleife bezwingen können.',
          'Die Ausstellung ist besonders für Kinder und Jugendliche geeignet, die den Motorsport hautnah erleben möchten, ohne auf die Strecke zu müssen. Auch bei schlechtem Wetter ein lohnender Ausflugspunkt.',
        ],
      },
      {
        title: 'Rennsport-Events am Nürburgring',
        paras: [
          'Wer während seines Urlaubs in der Vulkaneifel ein Rennen live erleben möchte, sollte den Rennkalender des Nürburgrings im Blick behalten. Das Jahreshighlight ist zweifellos das 24-Stunden-Rennen Nürburgring, das traditionell im Mai oder Juni stattfindet und Zehntausende Fans aus aller Welt anzieht. Das Gelände verwandelt sich dabei in ein riesiges Motorsport-Camping-Festival.',
          'Darüber hinaus finden regelmäßig Läufe der ADAC Motorsport-Serien, DTM-Rennen, Motorrad-Events und Gleichmäßigkeitsfahrten statt. An Eventwochenenden ist die gesamte Region lebhafter als sonst – Hotels und Ferienwohnungen in der Eifel sind dann besonders gefragt. Ein Frühzeitiges Buchen lohnt sich.',
        ],
      },
      {
        title: 'Tipps für Ihren Besuch',
        paras: [
          'Wochentage sind in der Regel deutlich ruhiger als Wochenenden – sowohl auf der Strecke bei Touristenfahrten als auch im Bereich der Erlebniswelt. Wer früh anreist, vermeidet Wartezeiten an der Einfahrtskasse und erlebt die Strecke in ruhigerem Umfeld.',
          'Am Nürburgring gibt es mehrere Gastronomie-Angebote, von einfachen Imbissständen bis zu gepflegten Restaurants mit Streckenblick. Wer lieber etwas Rustikaleres sucht, findet in Adenau, dem nächstgelegenen Städtchen, gemütliche Gaststätten mit regionaler Eifelküche.',
          'Bitte beachten Sie: Bei Touristenfahrten sind bestimmte Fahrzeugtypen ausgeschlossen (z. B. Cabrios mit offenem Verdeck, Fahrzeuge über einem gewissen Gewicht). Die aktuellen Regeln entnehmen Sie bitte der offiziellen Website des Nürburgrings.',
        ],
      },
      {
        title: 'Anreise ab Kirchweiler',
        paras: [
          'Ab unserer Ferienwohnung in Kirchweiler fahren Sie zunächst Richtung Daun, dann über die B257 durch die Hocheifel. Über Kelberg und Adenau erreichen Sie den Nürburgring nach ca. 55 Kilometern und rund 50 Fahrminuten. Die Strecke führt durch wunderschöne Eifellandschaft – für Motorradfahrer ohnehin ein Genuss. Wer die Autobahn bevorzugt, kann auch über Mayen/Koblenz (A48) anfahren und bei Adenau wieder auf die Landstraße wechseln.',
        ],
      },
    ],
    ctaText: 'Planen Sie einen Urlaub in der Vulkaneifel mit Ausflug zum Nürburgring? Unsere Ferienwohnung in Kirchweiler ist Ihre ideale Basis – nur 55 km entfernt.',
    ctaBtn: 'Jetzt buchen',
    ctaBack: 'Alle Specials',
  },
  en: {
    breadcrumb: 'Specials',
    distance: 'approx. 55 km · approx. 50 minutes from Kirchweiler',
    intro: 'The Nürburgring is one of the most famous motorsport venues in the world and is only about 55 kilometres from our holiday apartment in Kirchweiler. Less than an hour\'s drive through the winding Eifel landscape – and you\'re standing in front of the legendary circuit in the Hocheifel. This trip is worth it for motorsport fans, families and curious visitors alike.',
    sections: [
      {
        title: 'The Nordschleife – the Green Hell',
        paras: [
          'The Nürburgring Nordschleife is considered one of the most demanding racing circuits in the world. Over 20.8 kilometres it winds through the hilly Eifel landscape, conquers more than 300 metres of elevation change and counts over 70 corners. Niki Lauda once called it the "Green Hell" – and this nickname has stuck to this day.',
          'Built between 1925 and 1927, the Nordschleife was a regular part of the Formula 1 World Championship until 1976. Today it remains unique worldwide as a technical reference circuit. Automobile manufacturers from all over the world test their new models here under real conditions – which is why you regularly see camouflaged prototypes on the track.',
        ],
      },
      {
        title: 'Tourist Laps on the Nordschleife',
        paras: [
          'On days without racing, the Nordschleife is open to the public – so-called "tourist laps" allow anyone with a road-legal vehicle to drive the legendary track themselves. The entry ticket costs between 30 and 35 euros per lap depending on the season and time of day, purchased directly at the entrance.',
          'Those who come by motorcycle experience the Nordschleife in a completely different way: the tight sequences of corners, the interplay of shade and sunlight, the tarmac winding through forests and meadows – an experience you won\'t forget. Be sure to check the track opening times, which vary greatly depending on the season and racing calendar. Current information is available on the official website:',
        ],
        link: { href: 'https://nuerburgring.de/', label: 'nuerburgring.de' },
      },
      {
        title: 'ring°werk – the Experience World',
        paras: [
          'Even if you don\'t want to do a lap on the track, there\'s plenty to experience at the Nürburgring. The ring°werk is the experience world directly at the main complex and caters to visitors of all ages. Here you\'ll find an interactive exhibition on the history of the Nürburgring, motorsport exhibits, historic racing cars and modern driving simulator stations where you can virtually conquer the Nordschleife yourself.',
          'The exhibition is particularly suitable for children and young people who want to experience motorsport up close without going on the track. Also a worthwhile destination in bad weather.',
        ],
      },
      {
        title: 'Racing Events at the Nürburgring',
        paras: [
          'Those who want to experience a live race during their holiday in the Vulkan Eifel should keep an eye on the Nürburgring\'s racing calendar. The annual highlight is undoubtedly the 24-Hour Race Nürburgring, which traditionally takes place in May or June and attracts tens of thousands of fans from all over the world. The venue transforms into a huge motorsport camping festival.',
          'In addition, rounds of the ADAC Motorsport series, DTM races, motorcycle events and regularity trials take place regularly. On event weekends the entire region is livelier than usual – hotels and holiday apartments in the Eifel are then in particularly high demand. Booking early is worthwhile.',
        ],
      },
      {
        title: 'Tips for Your Visit',
        paras: [
          'Weekdays are generally much quieter than weekends – both on the track during tourist laps and in the experience world area. Those who arrive early avoid queues at the entrance and experience the track in a calmer environment.',
          'The Nürburgring has several dining options, from simple snack stands to upmarket restaurants with track views. Those looking for something more rustic will find cosy restaurants with regional Eifel cuisine in Adenau, the nearest town.',
          'Please note: certain vehicle types are excluded from tourist laps (e.g. convertibles with open roofs, vehicles above a certain weight). Please check the current rules on the official Nürburgring website.',
        ],
      },
      {
        title: 'Getting Here from Kirchweiler',
        paras: [
          'From our holiday apartment in Kirchweiler, head towards Daun, then take the B257 through the Hocheifel. Via Kelberg and Adenau you reach the Nürburgring after about 55 kilometres and around 50 minutes\' drive. The route passes through beautiful Eifel landscape – a pleasure for motorcyclists in any case. Those who prefer the motorway can also approach via Mayen/Koblenz (A48) and switch back to the country road at Adenau.',
        ],
      },
    ],
    ctaText: 'Planning a holiday in the Vulkan Eifel with a trip to the Nürburgring? Our holiday apartment in Kirchweiler is your ideal base – only 55 km away.',
    ctaBtn: 'Book Now',
    ctaBack: 'All Specials',
  },
  nl: {
    breadcrumb: 'Specials',
    distance: 'ca. 55 km · ca. 50 minuten van Kirchweiler',
    intro: 'De Nürburgring behoort tot de bekendste motorsportlocaties ter wereld en ligt op slechts circa 55 kilometer van ons vakantieappartement in Kirchweiler. Minder dan een uur rijden door het bochtige Eifellandschap – en u staat voor het legendarische circuit in de Hocheifel. Voor motorsportfans, gezinnen en nieuwsgierige bezoekers is dit uitstapje de moeite waard.',
    sections: [
      {
        title: 'De Nordschleife – de Groene Hel',
        paras: [
          'De Nürburgring Nordschleife geldt als een van de meest veeleisende racecircuits ter wereld. Over 20,8 kilometer slingert het zich door het heuvelachtige Eifellandschap, overwint meer dan 300 meter hoogteverschil en telt meer dan 70 bochten. Niki Lauda noemde het ooit de "Groene Hel" – en deze bijnaam is tot op de dag van vandaag gebleven.',
          'Gebouwd tussen 1925 en 1927 was de Nordschleife tot 1976 een vast onderdeel van het Formule 1-wereldkampioenschap. Vandaag de dag is het als technisch referentiecircuit wereldwijd uniek. Autofabrikanten van over de hele wereld testen hier hun nieuwe modellen onder echte omstandigheden – waardoor u op het circuit regelmatig gecamoufleerde prototypes te zien krijgt.',
        ],
      },
      {
        title: 'Toeristische Ritten op de Nordschleife',
        paras: [
          'Op dagen zonder races is de Nordschleife opengesteld voor het publiek – zogenaamde "toeristische ritten" stellen iedereen met een toegelaten voertuig in staat om zelf op het legendarische circuit te rijden. Het entreeticket kost afhankelijk van het seizoen en tijdstip tussen 30 en 35 euro per ronde en wordt direct bij de ingang gekocht.',
          'Wie met de motor komt, ervaart de Nordschleife op een heel andere manier: de strakke bochtenreeksen, het samenspel van schaduw en zonlicht, het asfalt dat door bossen en weiden kronkelt – een ervaring die u niet vergeet. Let zeker op de openingstijden van het circuit, die sterk variëren afhankelijk van het seizoen en de racekalender. Actuele informatie vindt u op de officiële website:',
        ],
        link: { href: 'https://nuerburgring.de/', label: 'nuerburgring.de' },
      },
      {
        title: 'ring°werk – de Belevingswereld',
        paras: [
          'Ook wie geen ronde op het circuit wil rijden, vindt bij de Nürburgring veel te beleven. Het ring°werk is de belevingswereld direct bij het hoofdcomplex en richt zich op bezoekers van alle leeftijden. Hier wacht u een interactieve tentoonstelling over de geschiedenis van de Nürburgring, motorsportexponaten, historische racewagens en moderne rijsimulatoren waarop u virtueel de Nordschleife kunt veroveren.',
          'De tentoonstelling is bijzonder geschikt voor kinderen en jongeren die de motorsport van dichtbij willen meemaken zonder het circuit op te moeten. Ook bij slecht weer een lohnende bestemming.',
        ],
      },
      {
        title: 'Race-evenementen bij de Nürburgring',
        paras: [
          'Wie tijdens zijn vakantie in de Vulkaan Eifel een live race wil meemaken, moet de racekalender van de Nürburgring in de gaten houden. Het jaarlijkse hoogtepunt is ongetwijfeld de 24-uursrace Nürburgring, die traditioneel in mei of juni plaatsvindt en tienduizenden fans van over de hele wereld aantrekt. Het terrein verandert dan in een gigantisch motorsport-kampeerfeestival.',
          'Daarnaast vinden er regelmatig rondes van de ADAC Motorsport-series, DTM-races, motorevenementen en regelmatigsheidsritten plaats. In evenementenweekenden is de hele regio levendiger dan normaal – hotels en vakantieappartementen in de Eifel zijn dan bijzonder gewild. Vroeg boeken loont.',
        ],
      },
      {
        title: 'Tips voor uw Bezoek',
        paras: [
          'Doordeweekse dagen zijn over het algemeen veel rustiger dan weekenden – zowel op het circuit tijdens toeristische ritten als in het belevingswereldgebied. Wie vroeg aankomt, vermijdt wachttijden bij de kassa en ervaart het circuit in een rustiger omgeving.',
          'De Nürburgring heeft meerdere horecamogelijkheden, van eenvoudige snackbars tot verzorgde restaurants met zicht op het circuit. Wie liever iets rustiekers zoekt, vindt in Adenau, het dichtstbijzijnde stadje, gezellige restaurants met regionale Eifelkeuken.',
          'Let op: bij toeristische ritten zijn bepaalde voertuigtypes uitgesloten (bijv. cabriolets met open kap, voertuigen boven een bepaald gewicht). Raadpleeg de actuele regels op de officiële website van de Nürburgring.',
        ],
      },
      {
        title: 'Reizen vanuit Kirchweiler',
        paras: [
          'Vanuit ons vakantieappartement in Kirchweiler rijdt u richting Daun, dan via de B257 door de Hocheifel. Via Kelberg en Adenau bereikt u de Nürburgring na ca. 55 kilometer en ongeveer 50 minuten rijden. De route voert door prachtig Eifellandschap – voor motorrijders sowieso een genot. Wie de snelweg prefereert, kan ook via Mayen/Koblenz (A48) rijden en bij Adenau weer overstappen op de landweg.',
        ],
      },
    ],
    ctaText: 'Plant u een vakantie in de Vulkaan Eifel met een uitstapje naar de Nürburgring? Ons vakantieappartement in Kirchweiler is uw ideale uitvalsbasis – op slechts 55 km.',
    ctaBtn: 'Nu boeken',
    ctaBack: 'Alle Specials',
  },
  fr: {
    breadcrumb: 'Specials',
    distance: 'environ 55 km · environ 50 minutes de Kirchweiler',
    intro: "Le Nürburgring est l'une des installations de sport automobile les plus célèbres au monde et se trouve à seulement environ 55 kilomètres de notre appartement de vacances à Kirchweiler. Moins d'une heure de route à travers le paysage sinueux de l'Eifel – et vous vous trouvez devant le légendaire circuit dans le Hocheifel. Cette excursion vaut le détour pour les fans de sport automobile, les familles et les curieux.",
    sections: [
      {
        title: 'La Nordschleife – l\'Enfer Vert',
        paras: [
          "La Nordschleife du Nürburgring est considérée comme l'un des circuits de course les plus exigeants au monde. Sur 20,8 kilomètres, elle serpente à travers le paysage vallonné de l'Eifel, surmonte plus de 300 mètres de dénivelé et compte plus de 70 virages. Niki Lauda l'appelait autrefois l'\"Enfer Vert\" – et ce surnom est resté jusqu'à aujourd'hui.",
          "Construite entre 1925 et 1927, la Nordschleife a été un élément permanent du Championnat du monde de Formule 1 jusqu'en 1976. Aujourd'hui encore, elle est unique au monde comme circuit de référence technique. Des constructeurs automobiles du monde entier testent ici leurs nouvelles créations dans des conditions réelles – c'est pourquoi on aperçoit régulièrement des prototypes camouflés sur le circuit.",
        ],
      },
      {
        title: 'Tours Touristiques sur la Nordschleife',
        paras: [
          "Les jours sans course, la Nordschleife est ouverte au public – les soi-disant \"tours touristiques\" permettent à quiconque disposant d'un véhicule immatriculé de conduire sur le légendaire circuit. Le ticket d'entrée coûte entre 30 et 35 euros par tour selon la saison et l'heure, acheté directement à l'entrée.",
          "Ceux qui viennent en moto vivent la Nordschleife d'une manière totalement différente : les enchaînements serrés de virages, le jeu d'ombre et de lumière, l'asphalte qui serpente à travers forêts et prairies – une expérience inoubliable. Veillez absolument à vérifier les horaires d'ouverture du circuit, qui varient fortement selon la saison et le calendrier des courses. Des informations actuelles sont disponibles sur le site officiel :",
        ],
        link: { href: 'https://nuerburgring.de/', label: 'nuerburgring.de' },
      },
      {
        title: 'ring°werk – le Monde des Expériences',
        paras: [
          "Même ceux qui ne souhaitent pas faire un tour sur le circuit trouveront beaucoup à vivre au Nürburgring. Le ring°werk est le monde des expériences directement sur le site principal et s'adresse aux visiteurs de tous âges. Vous y trouverez une exposition interactive sur l'histoire du Nürburgring, des pièces de sport automobile, des voitures de course historiques et des simulateurs de conduite modernes sur lesquels vous pouvez virtuellement conquérir la Nordschleife.",
          "L'exposition convient particulièrement aux enfants et aux jeunes qui souhaitent vivre le sport automobile de près sans devoir aller sur la piste. Également un point d'excursion intéressant par mauvais temps.",
        ],
      },
      {
        title: 'Événements de Course au Nürburgring',
        paras: [
          "Ceux qui souhaitent assister à une course en direct pendant leurs vacances dans l'Eifel volcanique devraient suivre le calendrier des courses du Nürburgring. Le point fort annuel est sans aucun doute la course des 24 Heures du Nürburgring, qui se déroule traditionnellement en mai ou juin et attire des dizaines de milliers de fans du monde entier. Le site se transforme alors en un gigantesque festival de camping de sport automobile.",
          "De plus, des manches des séries ADAC Motorsport, des courses DTM, des événements moto et des épreuves de régularité ont lieu régulièrement. Les week-ends d'événements, toute la région est plus animée que d'habitude – hôtels et appartements de vacances dans l'Eifel sont alors très demandés. Réserver tôt est judicieux.",
        ],
      },
      {
        title: 'Conseils pour Votre Visite',
        paras: [
          "Les jours de semaine sont généralement beaucoup plus calmes que les week-ends – aussi bien sur le circuit lors des tours touristiques que dans la zone du monde des expériences. Ceux qui arrivent tôt évitent les files d'attente à la caisse et vivent le circuit dans un environnement plus tranquille.",
          "Le Nürburgring dispose de plusieurs options de restauration, des simples stands de snacks aux restaurants soignés avec vue sur le circuit. Ceux qui recherchent quelque chose de plus rustique trouveront dans Adenau, la ville la plus proche, des restaurants confortables avec une cuisine régionale de l'Eifel.",
          "Veuillez noter : certains types de véhicules sont exclus des tours touristiques (p. ex. cabriolets avec toit ouvert, véhicules dépassant un certain poids). Veuillez consulter les règles actuelles sur le site officiel du Nürburgring.",
        ],
      },
      {
        title: 'Itinéraire depuis Kirchweiler',
        paras: [
          "Depuis notre appartement de vacances à Kirchweiler, prenez la direction de Daun, puis la B257 à travers le Hocheifel. Via Kelberg et Adenau, vous atteignez le Nürburgring après environ 55 kilomètres et environ 50 minutes de route. L'itinéraire traverse un magnifique paysage de l'Eifel – un plaisir pour les motards de toute façon. Ceux qui préfèrent l'autoroute peuvent également passer par Mayen/Koblenz (A48) et reprendre la route de campagne à Adenau.",
        ],
      },
    ],
    ctaText: "Planifiez-vous des vacances dans l'Eifel volcanique avec une excursion au Nürburgring ? Notre appartement de vacances à Kirchweiler est votre base idéale – à seulement 55 km.",
    ctaBtn: 'Réserver Maintenant',
    ctaBack: 'Tous les Specials',
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
    'de': 'Nürburgring Ausflug ab Kirchweiler – nur 55 km',
    'en': 'Nürburgring Day Trip from Kirchweiler – only 55 km',
    'nl': 'Nürburgring Daguitstap vanuit Kirchweiler – slechts 55 km',
    'fr': 'Excursion Nürburgring depuis Kirchweiler – à seulement 55 km',
  }
  const descs = {
    'de': 'Der Nürburgring ist nur 55 km von der Ferienwohnung entfernt – ideal für Motorsport-Fans.',
    'en': 'The Nürburgring is only 55 km from the holiday apartment – perfect for motorsport fans.',
    'nl': 'De Nürburgring ligt op slechts 55 km van het vakantieappartement – ideaal voor motorsportfans.',
    'fr': 'Le Nürburgring est à seulement 55 km de l\'appartement – idéal pour les amateurs de sport automobile.',
  }
  const l = locale as keyof typeof titles
  return generateSeoMetadata('/specials/nuerburgring', locale, titles[l] || titles.de, descs[l] || descs.de)
}

export default async function NuerburgringPage() {
  const locale = await getLocale()
  const tr = translations[locale as keyof typeof translations] ?? translations.de

  return (
    <>
      <Script id="schema-tourist" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <div className="max-w-3xl mx-auto px-4 py-16">
      <nav className="text-sm text-stone-500 mb-6">
        <Link href="/specials" className="hover:text-green-800">{tr.breadcrumb}</Link>
        {" › "}
        <span>Nürburgring</span>
      </nav>

      <h1 className="section-title">Nürburgring</h1>
      <p className="text-stone-500 text-sm mb-8">{tr.distance}</p>

      <div className="prose-like space-y-8 text-stone-700 leading-relaxed">

        <p className="text-lg text-stone-600">
          {tr.intro}
        </p>

        {tr.sections.map((section) => (
          <section key={section.title}>
            <h2 className="text-2xl font-bold text-green-900 mb-3">{section.title}</h2>
            {section.paras.map((para, i) => (
              <p key={i} className={i > 0 ? 'mt-3' : ''}>
                {para}
              </p>
            ))}
            {'link' in section && section.link && (
              <p className="mt-3">
                <a
                  href={section.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-700 hover:underline font-medium"
                >
                  {section.link.label}
                </a>
              </p>
            )}
          </section>
        ))}

      </div>

      <div className="mt-12 pt-8 border-t border-stone-200">
        <p className="text-stone-600 mb-4">
          {tr.ctaText}
        </p>
        <div className="flex flex-wrap gap-4">
          <Link href="/buchung" className="btn-primary">{tr.ctaBtn}</Link>
          <Link href="/specials" className="btn-secondary">{tr.ctaBack}</Link>
        </div>
      </div>
    </div>
    </>
  );
}
