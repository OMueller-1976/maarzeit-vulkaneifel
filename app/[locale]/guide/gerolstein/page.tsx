import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import { getLocale } from 'next-intl/server'
import { generateSeoMetadata } from '@/lib/seo';

const metaTitles: Record<string, string> = {
  de: 'Gerolstein – Ausflugsziel in der Vulkaneifel',
  en: 'Gerolstein – Day Trip to the Mineral Water Town of the Vulkan Eifel',
  nl: 'Gerolstein – Daguitstap naar de Bronstad van de Vulkaan Eifel',
  fr: "Gerolstein – Excursion à la Ville des Eaux de l'Eifel Volcanique",
}

const metaDescriptions: Record<string, string> = {
  de: 'Gerolstein: Gerolsteiner Brunnen Erlebniswelt, Dolomiten, Felsenpfad, Kurpark, Höhlen und Kyll. Alle Tipps für einen Ausflug nach Gerolstein ab Kirchweiler (15 km).',
  en: 'Gerolstein: Gerolsteiner spring experience world, Dolomites, rock path, spa park, caves and Kyll. All tips for a day trip to Gerolstein from Kirchweiler (15 km).',
  nl: 'Gerolstein: Gerolsteiner bronnenwereld, Dolomieten, rotspad, kurpark, grotten en Kyll. Alle tips voor een daguitstap naar Gerolstein vanuit Kirchweiler (15 km).',
  fr: "Gerolstein: monde de la source Gerolsteiner, Dolomites, sentier rocheux, parc thermal, grottes et Kyll. Tous les conseils pour une excursion depuis Kirchweiler (15 km).",
}

const translations = {
  de: {
    nav: 'Reiseführer › Gerolstein',
    distanceBadge: 'ca. 18 km ab Kirchweiler · ca. 20 Minuten',
    subtitle: 'Die Brunnenstadt der Vulkaneifel – mit Dolomiten, Felsenpfad, Höhlen, Kurpark und der neuen Gerolsteiner Erlebniswelt.',
    intro1: 'Gerolstein liegt knapp 15 km von Kirchweiler entfernt und ist in etwa 18 Minuten erreichbar. Die Stadt ist bekannt als Heimat des gleichnamigen Mineralwassers, bietet aber weit mehr: ein beeindruckendes Felsenmassiv direkt über der Innenstadt, eine Karsthöhle aus der Steinzeit, einen weitläufigen Kurpark am Ufer der Kyll und seit 2026 eine neue Erlebniswelt rund um Deutschlands größten Mineralbrunnen.',
    intro2: 'Gerolstein eignet sich ideal für einen Halbtagsausflug – wer den Felsenpfad wandert und anschließend den Kurpark besucht, hat einen vollständigen, schönen Tag. Mit Besuch der Erlebniswelt (Voranmeldung nötig) auch als ganztägiger Ausflug empfehlenswert.',
    gastroTitle: 'Gastronomietipp',
    gastroText: 'In Gerolstein und Umgebung ist die Eifeler Krautroulade ein regionales Klassikgericht. Lokale Gasthäuser bieten traditionelle Eifeler Küche – nach einer langen Wanderung auf dem Felsenpfad ist eine herzhafte Mahlzeit mehr als verdient. Die Vulkanstubb und weitere inhabergeführte Restaurants in der Innenstadt sind eine gute Wahl.',
    gastroStrong1: 'Eifeler Krautroulade',
    gastroStrong2: 'Vulkanstubb',
    anreiseTitle: 'Anreise ab Kirchweiler',
    anreiseDistance: 'Entfernung:',
    anreiseDistanceVal: 'ca. 18 km',
    anreiseDuration: 'Fahrzeit:',
    anreiseDurationVal: 'ca. 20 Minuten über B410 und B421',
    anreiseParking: 'Parken:',
    anreiseParkingVal: 'Parkplatz am Kurpark (kostenlos), Innenstadt Tiefgarage',
    anreiseTrain: 'Bahn:',
    anreiseTrainVal: 'Gerolstein ist Bahnhof der Eifelstrecke Köln–Trier',
    ctaPrimary: 'Alle Ausflugsziele',
    ctaSecondary: 'Ferienwohnung buchen',
    highlights: [
      {
        name: 'Gerolsteiner Brunnen Erlebniswelt',
        badge: 'Neu 2026 · Kostenlos',
        text: 'Deutschlands größter Mineralbrunnen hat 2026 eine neue interaktive Erlebniswelt eröffnet. Führungen durch die Abfüllanlagen mit Gratisverkostung. Voranmeldung erforderlich: besucherzentrum@gerolsteiner.com oder Tel. +49 6591 14238.',
        hinweis: 'Führungen Mo–Do: 09:30 und 11:30 Uhr · Keine Hunde · Voranmeldung nötig · Eintritt kostenlos',
      },
      {
        name: 'Gerolsteiner Dolomiten & Felsenpfad',
        badge: 'Wanderung · ca. 8 km',
        text: 'Beeindruckendes Felsenmassiv über der Stadt Gerolstein. Der Felsenpfad führt als Rundweg über die Munterley (spektakulärer Blick ins Kylltal), die Löwenburg-Ruine und die Buchenlochhöhle. Einer der eindrucksvollsten Tagesausflüge der Vulkaneifel.',
        hinweis: 'Rundweg ca. 8 km · Startpunkt Kurpark Gerolstein · Hunde erlaubt',
      },
      {
        name: 'Kurpark Gerolstein & Helenenquelle',
        badge: 'Kostenlos',
        text: 'Weitläufiger Kurpark am Ufer der Kyll mit Wasserspielplatz, Liegewiesen und Kletterboot. Die Helenenquelle im Park bietet kostenlose Mineralwasserverkostung direkt an der Quelle. Startpunkt für Keltenpfad und Felsenpfad.',
        hinweis: 'Wasserspielplatz kostenlos · Eintritt frei · Helenenquelle ganzjährig',
      },
      {
        name: 'Buchenlochhöhle',
        badge: 'Kostenlos · Taschenlampe',
        text: 'Karsthöhle im Naturschutzgebiet, von Steinzeitmenschen vor rund 30.000 Jahren bewohnt. Frei zugänglich, Teil des Felsenpfads. Zugang über schmale Holzstiege – Taschenlampe empfehlenswert. Klein, aber eindrucksvoll.',
        hinweis: 'Kostenlos · Ganzjährig · Taschenlampe mitbringen · Enger Zugang',
      },
      {
        name: 'Löwenburg-Ruine',
        badge: 'Kostenlos',
        text: 'Mittelalterliche Burgruine auf einem Felsrücken über Gerolstein, ganzjährig frei zugänglich. Vom Felsenpfad aus direkt erreichbar. Guter Blick über das Kylltal und die Vulkaneifellandschaft.',
        hinweis: 'Kostenlos · Ganzjährig frei zugänglich · Teil des Felsenpfads',
      },
      {
        name: 'Naturkundemuseum Gerolstein',
        badge: 'Museum',
        text: 'Museum zur Naturgeschichte der Vulkaneifel – Geologie, Fossilien und Fauna der Region. Verständlich aufbereitet für alle Altersgruppen. Ideal für Regentage und naturinteressierte Besucher.',
        hinweis: 'Öffnungszeiten vorab prüfen · Kleiner Eintritt',
      },
      {
        name: 'Kyll – Spazierweg & Kurpark',
        badge: 'Spaziergang',
        text: 'Die Kyll fließt direkt durch Gerolstein. Spazierwege entlang des Ufers, Trittsteine und kleine Brücken laden zum Verweilen ein. Im Sommer lassen sich die Füße im klaren Fluss kühlen. Der Kyll-Radweg verläuft ebenfalls am Ufer.',
        hinweis: 'Hunde erlaubt · Kostenlos · Kyll-Radweg beginnt hier',
      },
      {
        name: 'Wassermühle Birgel',
        badge: 'Museum · Hofladen',
        text: 'Das größte Mühlen-Erlebniszentrum Europas liegt in Birgel, ca. 20 km von Kirchweiler. Vier Mühlen in Betrieb: Senf-, Getreide-, Öl- und Sägemühle. Führungen buchbar, Hofladen mit regionalen Produkten.',
        hinweis: 'ca. 20 km von Kirchweiler · Führungen buchbar · Hofladen',
      },
    ],
  },
  en: {
    nav: 'Travel Guide › Gerolstein',
    distanceBadge: 'approx. 18 km from Kirchweiler · approx. 20 minutes',
    subtitle: 'The mineral water town of the Vulkan Eifel – with Dolomites, rock path, caves, spa park and the new Gerolsteiner experience world.',
    intro1: 'Gerolstein is just under 15 km from Kirchweiler and reachable in about 18 minutes. The town is known as the home of the famous mineral water, but has much more to offer: an impressive rocky massif directly above the town centre, an Ice Age karst cave, a spacious spa park on the banks of the Kyll, and since 2026 a new experience world at Germany\'s largest mineral spring.',
    intro2: 'Gerolstein is ideal for a half-day trip – those who hike the rock path and then visit the spa park will have had a full, beautiful day. With a visit to the experience world (registration required), also recommended as a full day trip.',
    gastroTitle: 'Restaurant Tip',
    gastroText: 'In and around Gerolstein, the Eifeler Krautroulade (stuffed cabbage roll) is a regional classic. Local inns offer traditional Eifel cuisine – after a long hike on the rock path, a hearty meal is more than deserved. The Vulkanstubb and other owner-run restaurants in the town centre are a good choice.',
    gastroStrong1: 'Eifeler Krautroulade',
    gastroStrong2: 'Vulkanstubb',
    anreiseTitle: 'Getting There from Kirchweiler',
    anreiseDistance: 'Distance:',
    anreiseDistanceVal: 'approx. 18 km',
    anreiseDuration: 'Travel time:',
    anreiseDurationVal: 'approx. 20 minutes via B410 and B421',
    anreiseParking: 'Parking:',
    anreiseParkingVal: 'Kurpark car park (free), town centre underground parking',
    anreiseTrain: 'Train:',
    anreiseTrainVal: 'Gerolstein is a station on the Eifel line Cologne–Trier',
    ctaPrimary: 'All Excursions',
    ctaSecondary: 'Book Holiday Apartment',
    highlights: [
      {
        name: 'Gerolsteiner Brunnen Erlebniswelt',
        badge: 'New 2026 · Free',
        text: 'Germany\'s largest mineral spring opened a new interactive experience world in 2026. Tours through the bottling plant with free tasting. Registration required: besucherzentrum@gerolsteiner.com or tel. +49 6591 14238.',
        hinweis: 'Tours Mon–Thu: 9:30 and 11:30 · No dogs · Registration required · Free admission',
      },
      {
        name: 'Gerolstein Dolomites & Rock Path',
        badge: 'Hike · approx. 8 km',
        text: 'Impressive rock massif above Gerolstein. The rock path runs as a loop over the Munterley (spectacular view of the Kyll valley), the Löwenburg ruin and the Buchenlochhöhle cave. One of the most impressive day trips in the Vulkan Eifel.',
        hinweis: 'Circular route approx. 8 km · Start: Gerolstein spa park · Dogs allowed',
      },
      {
        name: 'Gerolstein Spa Park & Helenenquelle',
        badge: 'Free',
        text: 'Spacious spa park on the banks of the Kyll with water playground, meadows and climbing boat. The Helenenquelle spring in the park offers free mineral water tasting directly at the source. Starting point for the Celtic and rock paths.',
        hinweis: 'Water playground free · Free entry · Helenenquelle year-round',
      },
      {
        name: 'Buchenlochhöhle',
        badge: 'Free · Torch',
        text: 'Karst cave in a nature reserve, inhabited by Stone Age people around 30,000 years ago. Freely accessible, part of the rock path. Access via narrow wooden steps – torch recommended. Small but impressive.',
        hinweis: 'Free · Year-round · Bring a torch · Narrow entrance',
      },
      {
        name: 'Löwenburg Ruin',
        badge: 'Free',
        text: 'Medieval castle ruin on a rocky ridge above Gerolstein, freely accessible year-round. Reachable directly from the rock path. Good views over the Kyll valley and the Vulkan Eifel landscape.',
        hinweis: 'Free · Year-round open access · Part of the rock path',
      },
      {
        name: 'Natural History Museum Gerolstein',
        badge: 'Museum',
        text: 'Museum on the natural history of the Vulkan Eifel – geology, fossils and fauna of the region. Presented accessibly for all ages. Ideal for rainy days and nature-interested visitors.',
        hinweis: 'Check opening times in advance · Small entry fee',
      },
      {
        name: 'River Kyll – Promenade & Spa Park',
        badge: 'Walk',
        text: 'The Kyll flows directly through Gerolstein. Riverside paths, stepping stones and small bridges invite you to linger. In summer you can cool your feet in the clear river. The Kyll cycle route also runs along the bank.',
        hinweis: 'Dogs allowed · Free · Kyll cycle route starts here',
      },
      {
        name: 'Birgel Watermill',
        badge: 'Museum · Farm Shop',
        text: 'Europe\'s largest mill experience centre is in Birgel, approx. 20 km from Kirchweiler. Four working mills: mustard, grain, oil and saw. Tours bookable, farm shop with regional products.',
        hinweis: 'approx. 20 km from Kirchweiler · Tours bookable · Farm shop',
      },
    ],
  },
  nl: {
    nav: 'Reisgids › Gerolstein',
    distanceBadge: 'ca. 18 km vanuit Kirchweiler · ca. 20 minuten',
    subtitle: 'De bronnenstad van de Vulkaan Eifel – met Dolomiten, rotspad, grotten, kurpark en de nieuwe Gerolsteiner belevingswereld.',
    intro1: 'Gerolstein ligt iets minder dan 15 km van Kirchweiler en is in ongeveer 18 minuten bereikbaar. De stad is bekend als de thuisbasis van het gelijknamige mineraalwater, maar heeft veel meer te bieden: een indrukwekkend rotsmassief direct boven het stadscentrum, een ijstijdgrot uit de steentijd, een ruim kurpark aan de oever van de Kyll en sinds 2026 een nieuwe belevingswereld bij de grootste mineraalwaterbron van Duitsland.',
    intro2: 'Gerolstein is ideaal voor een halve dag uitstap – wie het rotspad wandelt en daarna het kurpark bezoekt, heeft een volledige, mooie dag gehad. Met een bezoek aan de belevingswereld (aanmelding vereist) ook aanbevolen als volledige daguitstap.',
    gastroTitle: 'Restaurantip',
    gastroText: 'In Gerolstein en omgeving is de Eifeler Krautroulade (gevulde koolrol) een regionaal klassiek gerecht. Lokale herbergen bieden traditionele Eifeler keuken – na een lange wandeling op het rotspad is een stevige maaltijd meer dan verdiend. De Vulkanstubb en andere door eigenaren gerunde restaurants in het stadscentrum zijn een goede keuze.',
    gastroStrong1: 'Eifeler Krautroulade',
    gastroStrong2: 'Vulkanstubb',
    anreiseTitle: 'Aanrijden vanuit Kirchweiler',
    anreiseDistance: 'Afstand:',
    anreiseDistanceVal: 'ca. 18 km',
    anreiseDuration: 'Reistijd:',
    anreiseDurationVal: 'ca. 20 minuten via B410 en B421',
    anreiseParking: 'Parkeren:',
    anreiseParkingVal: 'Parkeerplaats bij het kurpark (gratis), parkeergarage stadscentrum',
    anreiseTrain: 'Trein:',
    anreiseTrainVal: 'Gerolstein is een station op de Eifellijn Keulen–Trier',
    ctaPrimary: 'Alle Uitstapjes',
    ctaSecondary: 'Vakantieappartement Boeken',
    highlights: [
      {
        name: 'Gerolsteiner Brunnen Erlebniswelt',
        badge: 'Nieuw 2026 · Gratis',
        text: 'De grootste mineraalwaterbron van Duitsland opende in 2026 een nieuwe interactieve belevingswereld. Rondleidingen door de afvulinstallaties met gratis proeverij. Aanmelding verplicht: besucherzentrum@gerolsteiner.com of tel. +49 6591 14238.',
        hinweis: 'Rondleidingen ma–do: 9:30 en 11:30 · Geen honden · Aanmelding vereist · Gratis toegang',
      },
      {
        name: 'Gerolsteiner Dolomiten & Rotspad',
        badge: 'Wandeling · ca. 8 km',
        text: 'Indrukwekkend rotsmassief boven Gerolstein. Het rotspad loopt als rondweg over de Munterley (spectaculair uitzicht op het Kylldal), de Löwenburg-ruïne en de Buchenlochhöhle. Een van de indrukwekkendste daguitstappen van de Vulkaan Eifel.',
        hinweis: 'Rondroute ca. 8 km · Startpunt kurpark Gerolstein · Honden toegestaan',
      },
      {
        name: 'Kurpark Gerolstein & Helenenquelle',
        badge: 'Gratis',
        text: 'Ruim kurpark aan de oever van de Kyll met waterspeelplaats, ligweiden en klimboot. De Helenenquelle in het park biedt gratis mineraalwaterproeverij direct aan de bron. Startpunt voor het Keltenpad en het rotspad.',
        hinweis: 'Waterspeelplaats gratis · Vrije toegang · Helenenquelle het hele jaar',
      },
      {
        name: 'Buchenlochhöhle',
        badge: 'Gratis · Zaklamp',
        text: 'Karsthol in een natuurgebied, zo\'n 30.000 jaar geleden bewoond door mensen uit de steentijd. Vrij toegankelijk, onderdeel van het rotspad. Toegang via smalle houten trappen – zaklamp aanbevolen. Klein maar indrukwekkend.',
        hinweis: 'Gratis · Het hele jaar · Zaklamp meenemen · Smalle ingang',
      },
      {
        name: 'Löwenburg-Ruïne',
        badge: 'Gratis',
        text: 'Middeleeuwse kasteelruïne op een rotsrug boven Gerolstein, het hele jaar vrij toegankelijk. Direct bereikbaar via het rotspad. Goed uitzicht over het Kylldal en het Vulkaan Eifel-landschap.',
        hinweis: 'Gratis · Het hele jaar vrij toegankelijk · Onderdeel van het rotspad',
      },
      {
        name: 'Natuurhistorisch Museum Gerolstein',
        badge: 'Museum',
        text: 'Museum over de natuurgeschiedenis van de Vulkaan Eifel – geologie, fossielen en fauna van de regio. Begrijpelijk voor alle leeftijden. Ideaal voor regendagen en natuurgeïnteresseerde bezoekers.',
        hinweis: 'Openingstijden vooraf controleren · Kleine toegangsprijs',
      },
      {
        name: 'Rivier de Kyll – Promenade & Kurpark',
        badge: 'Wandeling',
        text: 'De Kyll stroomt direct door Gerolstein. Wandelpaden langs de oever, stapstenen en kleine bruggetjes nodigen uit tot vertoeven. In de zomer kunt u uw voeten koelen in de heldere rivier. De Kyll-fietsroute loopt ook langs de oever.',
        hinweis: 'Honden toegestaan · Gratis · Kyll-fietsroute begint hier',
      },
      {
        name: 'Watermolen Birgel',
        badge: 'Museum · Boerderijwinkel',
        text: 'Het grootste molenervaringcentrum van Europa ligt in Birgel, ca. 20 km van Kirchweiler. Vier werkende molens: mosterd-, graan-, olie- en zaagmolen. Rondleidingen te boeken, boerderijwinkel met regionale producten.',
        hinweis: 'ca. 20 km van Kirchweiler · Rondleidingen te boeken · Boerderijwinkel',
      },
    ],
  },
  fr: {
    nav: 'Guide de Voyage › Gerolstein',
    distanceBadge: 'env. 18 km de Kirchweiler · env. 20 minutes',
    subtitle: "La ville des eaux de l'Eifel volcanique – avec les Dolomites, le sentier rocheux, des grottes, le parc thermal et le nouveau monde de la source Gerolsteiner.",
    intro1: "Gerolstein est à moins de 15 km de Kirchweiler et accessible en environ 18 minutes. La ville est connue comme le berceau de l'eau minérale du même nom, mais a bien plus à offrir : un impressionnant massif rocheux directement au-dessus du centre-ville, une grotte karstique de l'âge de glace, un spacieux parc thermal au bord de la Kyll et depuis 2026 un nouveau monde d'expérience à la plus grande source minérale d'Allemagne.",
    intro2: "Gerolstein est idéal pour une demi-journée d'excursion – ceux qui randonnent sur le sentier rocheux puis visitent le parc thermal auront passé une belle journée complète. Avec la visite du monde d'expérience (inscription requise), également recommandé comme excursion d'une journée entière.",
    gastroTitle: 'Conseil Restaurant',
    gastroText: "À Gerolstein et dans ses environs, l'Eifeler Krautroulade (chou farci) est un classique régional. Les auberges locales proposent une cuisine traditionnelle de l'Eifel – après une longue randonnée sur le sentier rocheux, un repas copieux est plus que mérité. La Vulkanstubb et d'autres restaurants indépendants du centre-ville sont un bon choix.",
    gastroStrong1: 'Eifeler Krautroulade',
    gastroStrong2: 'Vulkanstubb',
    anreiseTitle: 'Accès depuis Kirchweiler',
    anreiseDistance: 'Distance :',
    anreiseDistanceVal: 'env. 18 km',
    anreiseDuration: 'Durée de trajet :',
    anreiseDurationVal: 'env. 20 minutes via B410 et B421',
    anreiseParking: 'Parking :',
    anreiseParkingVal: 'Parking du parc thermal (gratuit), parking souterrain du centre-ville',
    anreiseTrain: 'Train :',
    anreiseTrainVal: 'Gerolstein est une gare sur la ligne Eifel Cologne–Trèves',
    ctaPrimary: 'Toutes les Excursions',
    ctaSecondary: "Réserver l'Appartement",
    highlights: [
      {
        name: 'Gerolsteiner Brunnen Erlebniswelt',
        badge: 'Nouveau 2026 · Gratuit',
        text: "La plus grande source minérale d'Allemagne a ouvert un nouveau monde d'expérience interactif en 2026. Visites de l'usine d'embouteillage avec dégustation gratuite. Inscription requise : besucherzentrum@gerolsteiner.com ou tél. +49 6591 14238.",
        hinweis: 'Visites lun–jeu : 9h30 et 11h30 · Pas de chiens · Inscription requise · Entrée gratuite',
      },
      {
        name: 'Dolomites de Gerolstein & Sentier Rocheux',
        badge: 'Randonnée · env. 8 km',
        text: "Impressionnant massif rocheux au-dessus de Gerolstein. Le sentier rocheux forme une boucle sur la Munterley (vue spectaculaire sur la vallée de la Kyll), la ruine de la Löwenburg et la Buchenlochhöhle. L'une des excursions d'une journée les plus impressionnantes de l'Eifel volcanique.",
        hinweis: 'Circuit env. 8 km · Départ : parc thermal de Gerolstein · Chiens admis',
      },
      {
        name: 'Parc Thermal de Gerolstein & Helenenquelle',
        badge: 'Gratuit',
        text: "Spacieux parc thermal au bord de la Kyll avec aire de jeux aquatique, pelouses et bateau d'escalade. La source Helenenquelle dans le parc offre une dégustation gratuite d'eau minérale directement à la source. Point de départ des sentiers celtique et rocheux.",
        hinweis: 'Aire de jeux aquatique gratuite · Entrée libre · Helenenquelle toute l\'année',
      },
      {
        name: 'Buchenlochhöhle',
        badge: 'Gratuit · Lampe Torche',
        text: "Grotte karstique dans une réserve naturelle, habitée par des hommes préhistoriques il y a environ 30 000 ans. Librement accessible, partie du sentier rocheux. Accès par des marches en bois étroites – lampe torche recommandée. Petite mais impressionnante.",
        hinweis: 'Gratuit · Toute l\'année · Apporter une lampe torche · Entrée étroite',
      },
      {
        name: 'Ruine de la Löwenburg',
        badge: 'Gratuit',
        text: "Ruine de château médiéval sur une crête rocheuse au-dessus de Gerolstein, librement accessible toute l'année. Accessible directement depuis le sentier rocheux. Belle vue sur la vallée de la Kyll et le paysage de l'Eifel volcanique.",
        hinweis: 'Gratuit · Accès libre toute l\'année · Partie du sentier rocheux',
      },
      {
        name: 'Musée d\'Histoire Naturelle de Gerolstein',
        badge: 'Musée',
        text: "Musée sur l'histoire naturelle de l'Eifel volcanique – géologie, fossiles et faune de la région. Présenté de manière accessible à tous les âges. Idéal pour les jours de pluie et les visiteurs intéressés par la nature.",
        hinweis: 'Vérifier les horaires d\'ouverture · Petit droit d\'entrée',
      },
      {
        name: 'Rivière Kyll – Promenade & Parc Thermal',
        badge: 'Promenade',
        text: "La Kyll coule directement à travers Gerolstein. Des chemins de promenade le long de la berge, des pierres de gué et de petits ponts invitent à flâner. En été, on peut rafraîchir ses pieds dans la rivière claire. La piste cyclable de la Kyll longe également la berge.",
        hinweis: 'Chiens admis · Gratuit · La piste cyclable de la Kyll commence ici',
      },
      {
        name: 'Moulin à Eau de Birgel',
        badge: 'Musée · Épicerie',
        text: "Le plus grand centre d'expérience de moulins en Europe se trouve à Birgel, env. 20 km de Kirchweiler. Quatre moulins en fonctionnement : moutarde, grain, huile et scierie. Visites réservables, épicerie de la ferme avec des produits régionaux.",
        hinweis: 'env. 20 km de Kirchweiler · Visites réservables · Épicerie de la ferme',
      },
    ],
  },
}

const schema = {
  "@context": "https://schema.org",
  "@type": "TouristAttraction",
  "name": "Gerolstein – Brunnenstadt der Vulkaneifel",
  "description": "Gerolstein mit Gerolsteiner Brunnen Erlebniswelt, Dolomiten, Felsenpfad, Kurpark und Buchenlochhöhle. 15 km ab Kirchweiler.",
  "url": "https://gerolstein.de",
  "touristType": ["Natur", "Geologie", "Wandern"],
  "geo": { "@type": "GeoCoordinates", "latitude": 50.2205, "longitude": 6.6536 }
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
    'de': 'Gerolstein – Ausflug in die Brunnenstadt der Vulkaneifel',
    'en': 'Gerolstein – Day Trip to the Mineral Water Town of the Vulkan Eifel',
    'nl': 'Gerolstein – Daguitstap naar de Bronstad van de Vulkaan Eifel',
    'fr': 'Gerolstein – Excursion à la Ville des Eaux de l\'Eifel Volcanique',
  }
  const descs = {
    'de': 'Gerolstein Ausflug: Felsenmeer, Kasselburg und die berühmte Gerolsteiner Mineralquelle.',
    'en': 'Gerolstein day trip: Felsenmeer rock formations, Kasselburg castle and the famous mineral springs.',
    'nl': 'Gerolstein daguitstap: Felsenmeer, Kasselburg en de beroemde minerale bronnen.',
    'fr': 'Excursion à Gerolstein: Felsenmeer, château Kasselburg et les célèbres sources minérales.',
  }
  const l = locale as keyof typeof titles
  return generateSeoMetadata('/guide/gerolstein', locale, titles[l] || titles.de, descs[l] || descs.de)
}

export default async function GerolsteinPage() {
  const locale = await getLocale()
  const tr = translations[locale as keyof typeof translations] ?? translations.de

  return (
    <>
      <Script id="schema-tourist" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      {/* Hero */}
      <section style={{ background: '#1C3A22', color: 'white', padding: '4rem 1.5rem' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <nav style={{ fontSize: '0.78rem', color: '#666', marginBottom: '2rem' }}>
            <Link href="/guide" style={{ color: '#888', textDecoration: 'none' }}>{tr.nav.split(' › ')[0]}</Link>
            {' › '}
            <span>{tr.nav.split(' › ')[1]}</span>
          </nav>
          <p style={{ fontSize: '0.78rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#666', marginBottom: '1rem' }}>
            {tr.distanceBadge}
          </p>
          <h1 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 'normal', marginBottom: '1rem', lineHeight: 1.2 }}>
            Gerolstein
          </h1>
          <p style={{ color: '#AAA', fontSize: '1.05rem', lineHeight: 1.7, maxWidth: '560px' }}>
            {tr.subtitle}
          </p>
        </div>
      </section>

      {/* Einleitung */}
      <section style={{ maxWidth: '760px', margin: '0 auto', padding: '4rem 1.5rem 2rem' }}>
        <p style={{ color: '#444', lineHeight: 1.9, fontSize: '1rem', marginBottom: '1.2rem' }}>
          {tr.intro1}
        </p>
        <p style={{ color: '#444', lineHeight: 1.9, fontSize: '1rem' }}>
          {tr.intro2}
        </p>
      </section>

      {/* Highlights */}
      <div style={{ maxWidth: '960px', margin: '0 auto', padding: '2rem 1.5rem 4rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {tr.highlights.map((h, i) => (
            <div key={h.name} style={{ borderTop: '1px solid #E5E5E5', padding: '2rem 0', display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '3rem' }}>
              <div>
                <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '1.05rem', fontWeight: 'normal', color: '#1A1A1A', lineHeight: 1.4, marginBottom: '0.6rem' }}>
                  {h.name}
                </h2>
                <span style={{ fontSize: '0.68rem', letterSpacing: '0.08em', textTransform: 'uppercase', border: '1px solid #2D5A35', color: '#2D5A35', padding: '0.2rem 0.6rem' }}>
                  {h.badge}
                </span>
              </div>
              <div style={{ alignSelf: 'center' }}>
                <p style={{ color: '#444', lineHeight: 1.8, fontSize: '0.92rem', marginBottom: '0.75rem' }}>
                  {h.text}
                </p>
                <p style={{ fontSize: '0.78rem', color: '#888', borderTop: '1px solid #F0F0F0', paddingTop: '0.6rem' }}>
                  {h.hinweis}
                </p>
              </div>
            </div>
          ))}
          <div style={{ borderTop: '1px solid #E5E5E5' }} />
        </div>

        {/* Gastronomie */}
        <div style={{ background: 'white', border: '1px solid #E5E5E5', padding: '2rem', margin: '3rem 0' }}>
          <p style={{ fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#888', marginBottom: '0.75rem' }}>
            {tr.gastroTitle}
          </p>
          <p style={{ color: '#444', lineHeight: 1.8, fontSize: '0.92rem' }}>
            {tr.gastroText.split(tr.gastroStrong1)[0]}
            <strong>{tr.gastroStrong1}</strong>
            {tr.gastroText.split(tr.gastroStrong1)[1]?.split(tr.gastroStrong2)[0]}
            <strong>{tr.gastroStrong2}</strong>
            {tr.gastroText.split(tr.gastroStrong1)[1]?.split(tr.gastroStrong2)[1]}
          </p>
        </div>

        {/* Anreise */}
        <div style={{ background: 'white', border: '1px solid #E5E5E5', padding: '2rem', marginBottom: '3rem' }}>
          <p style={{ fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#888', marginBottom: '0.75rem' }}>
            {tr.anreiseTitle}
          </p>
          <p style={{ color: '#444', lineHeight: 1.8, fontSize: '0.92rem' }}>
            <strong>{tr.anreiseDistance}</strong> {tr.anreiseDistanceVal} · <strong>{tr.anreiseDuration}</strong> {tr.anreiseDurationVal}<br />
            <strong>{tr.anreiseParking}</strong> {tr.anreiseParkingVal}<br />
            <strong>{tr.anreiseTrain}</strong> {tr.anreiseTrainVal}
          </p>
        </div>

        <div style={{ borderTop: '1px solid #E5E5E5', paddingTop: '2.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/guide/ausflugsziele" className="btn-primary">{tr.ctaPrimary}</Link>
          <Link href="/buchung" className="btn-secondary">{tr.ctaSecondary}</Link>
        </div>
      </div>
    </>
  )
}
