import type { Metadata } from 'next'
import Link from 'next/link'
import { getLocale } from 'next-intl/server'
import { generateSeoMetadata } from '@/lib/seo';
import RegionImage from '@/lib/regionImage';

const metaTitles: Record<string, string> = {
  de: 'Ausflugsziele Vulkaneifel – Wildpark, Höhlen & Nürburgring',
  en: 'Attractions in the Vulkan Eifel – Wildlife Park, Caves & Nürburgring',
  nl: 'Bezienswaardigheden Vulkaan Eifel – Wildpark, Grotten & Nürburgring',
  fr: "Attractions de l'Eifel Volcanique – Parc Animalier, Grottes & Nürburgring",
}

const metaDescriptions: Record<string, string> = {
  de: 'Alle Freizeitangebote im Umkreis von Kirchweiler: Eifel Adventures Berlingen, Sommerrodelbahn, Wildpark Daun, Dreimühlen Wasserfall, Kinopalast, Laurentiusbad und mehr.',
  en: 'All leisure activities near Kirchweiler: Eifel Adventures Berlingen, summer toboggan run, wildlife park Daun, Dreimühlen waterfall, cinema, Laurentiusbad and more.',
  nl: 'Alle vrijetijdsactiviteiten rondom Kirchweiler: Eifel Adventures Berlingen, zomerslee, wildpark Daun, Dreimühlen waterval, bioscoop, Laurentiusbad en meer.',
  fr: "Toutes les activités de loisirs autour de Kirchweiler: Eifel Adventures Berlingen, luge d'été, parc animalier Daun, cascade Dreimühlen, cinéma, Laurentiusbad et plus.",
}

const translations = {
  de: {
    breadcrumb: { guide: 'Reiseführer', page: 'Ausflugsziele' },
    heading: 'Ausflugsziele im Umkreis',
    subtitle: 'Freizeitangebote, Natur, Kultur und Erlebnis rund um Kirchweiler – von 5 km bis 70 km Entfernung.',
    ctaPrimary: 'Urlaub planen & buchen',
    ctaSecondary: 'Schlechtwetter-Tipps',
    ulmenerMaarHeading: 'Ulmener Maar',
    ulmenerMaarText: 'Das Ulmener Maar liegt 10 km nördlich von Kirchweiler und ist das jüngste bekannte Vulkankrater Deutschlands – entstanden vor ca. 11.000 Jahren. Der tiefe, kreisrunde See liegt idyllisch im Wald und ist von einem Rundwanderweg umgeben. Der Ort Ulmen mit seiner Burgruine liegt direkt am Maar-Rand.',
    kategorien: [
      {
        titel: 'Erlebnis & Abenteuer',
        eintraege: [
          {
            name: 'Eifel Adventures Berlingen',
            entfernung: 'ca. 12 km',
            badge: 'Abenteuer',
            text: 'Ziplining, Adventure-Minigolf, Fußball-Billard und Boccia auf einem weitläufigen Outdoor-Gelände. Baumhaus-Übernachtungen sind buchbar. Ideal für Gruppen, Familien und Teamerlebnisse.',
          },
          {
            name: 'Sommerrodelbahn Daun',
            entfernung: 'ca. 6 km',
            badge: 'Familie',
            text: '800 Meter lange Abfahrt am Wild- & Erlebnispark Daun. Einer- und Zweierbob, das Tempo wählen Sie selbst. Geöffnet in der Saison April bis Oktober – ein schneller Spaß für alle Altersgruppen.',
          },
          {
            name: 'Wild- & Erlebnispark Daun',
            entfernung: 'ca. 6 km',
            badge: 'Familie',
            text: 'Autowanderroute durch den Park, Berberaffenschlucht, Greifvogel-Flugshows, Abenteuerspielplatz und Streichelzoo. Lamas, Mufflons, Wildyaks und Wildschweine leben hier auf großem Gelände. Die Sommerrodelbahn liegt direkt davor.',
          },
        ],
      },
      {
        titel: 'Natur & Geologie',
        eintraege: [
          {
            name: 'Dreimühlen Wasserfall bei Üxheim-Ahütte',
            entfernung: 'ca. 18 km',
            badge: 'Naturdenkmal',
            text: 'Der einzige „wachsende" Wasserfall Deutschlands. Er entsteht durch Kalkablagerungen und wächst seit 1932 nachweislich. Kostenlos zugänglich, schöner Spazierweg entlang des Ahbachs. Ein stilles, beeindruckendes Naturdenkmal.',
          },
          {
            name: 'Wallender Born / Brubbel Wallenborn',
            entfernung: 'ca. 15 km',
            badge: 'Naturphänomen',
            text: 'Der einzige periodisch sprudelnde Kaltwassergeysir Deutschlands. Er sprudelt unregelmäßig alle paar Stunden und ist kostenlos zugänglich. Kurzer Spaziergang vom Parkplatz – ein Naturphänomen, das es so nur einmal gibt.',
          },
          {
            name: 'Buchenlochhöhle Gerolstein',
            entfernung: 'ca. 18 km',
            badge: 'Höhle',
            text: 'Eiszeithöhle mit Fundstücken aus der Altsteinzeit, Teil der Gerolsteiner Dolomiten. Geführte Touren ganzjährig möglich. Ein eindrucksvolles geologisches Zeugnis der Eifelgeschichte.',
          },
          {
            name: 'Strohner Lavabombe',
            entfernung: 'ca. 12 km',
            badge: 'Geologie',
            text: 'Gigantischer Lavabrocken aus dem Vulkanismus der Eifel – Wahrzeichen des Vulkandorfes Strohn. Kostenlos und für eine kurze Besichtigung gut geeignet. Eindrucksvoller Hinweis auf die geologische Vergangenheit der Region.',
          },
          {
            name: 'Observatorium Hoher List Schalkenmehren',
            entfernung: 'ca. 5 km',
            badge: 'Astronomie',
            text: 'Ehemaliges astronomisches Observatorium der Universität Bonn auf 551 m Höhe. Einer der dunkelsten Himmel Deutschlands – ideal für Sternbeobachtung. Die Kuppellandschaft ist auch tagsüber sehenswert.',
          },
          {
            name: 'Gerolsteiner Dolomiten',
            entfernung: 'ca. 20 km',
            badge: 'Felsen',
            text: 'Beeindruckende Kalksteinfelsen mitten in der Eifel mit gut ausgeschilderten Wanderwegen und Aussichtspunkten. Hunde sind auf den Hauptwegen erlaubt. Kurze Runden ab dem Stadtzentrum Gerolstein möglich.',
          },
        ],
      },
      {
        titel: 'Kultur & Museum',
        eintraege: [
          {
            name: 'Eifel-Vulkanmuseum Daun',
            entfernung: 'ca. 6 km',
            badge: 'Museum',
            text: 'Interaktives Museum zur Entstehung der Vulkanlandschaft, Teil des Natur- und Geoparks Vulkaneifel. Kinder- und familienfreundlich aufbereitet – ideal für Regentage und wissbegierige Besucher.',
          },
          {
            name: 'Adler- & Wolfspark Kasselburg Pelm',
            entfernung: 'ca. 20 km',
            badge: 'Tiererlebnis',
            text: 'Greifvogelshows und Wolfsfütterung auf 20 ha rund um eine historische Burg aus dem 12. Jahrhundert. Täglich Flugvorführungen in der Saison. Europäische Wölfe in weitläufigem Gehege – ein Highlight für alle Altersgruppen.',
          },
          {
            name: 'Maarmuseum Manderscheid',
            entfernung: 'ca. 18 km',
            badge: 'Museum',
            text: 'Museum über die Entstehung der Maare – gut in Kombination mit dem Manderscheider Burgenstieg. Verständliche Aufbereitung der Vulkangeologie für alle Generationen.',
          },
          {
            name: 'Heimwebermuseum Schalkenmehren',
            entfernung: 'ca. 5 km',
            badge: 'Heimatgeschichte',
            text: 'Einblick in das traditionelle Handwerk der Region und die Kulturgeschichte der Eifel. Kleiner Eintritt, ruhig gelegen – ein authentisches Stück Regionalgeschichte.',
          },
          {
            name: 'Manderscheid Burgruinen',
            entfernung: 'ca. 20 km',
            badge: 'Burg',
            text: 'Zwei Burgruinen hoch über dem Liesertal – kostenlos zugänglich, Traumausblick garantiert. In Kombination mit dem Manderscheider Burgenstieg (6,6 km) ein schöner Halbtagesausflug.',
          },
          {
            name: 'Kinopalast Vulkaneifel Daun',
            entfernung: 'ca. 6 km',
            badge: 'Unterhaltung',
            text: 'Modernes Kino in Daun mit aktuellen Filmen. Ideal für Regentage, Abendprogramm oder wenn man einfach einen entspannten Kinoabend einplanen möchte.',
          },
        ],
      },
      {
        titel: 'Wellness & Baden',
        eintraege: [
          {
            name: 'Laurentiusbad Daun',
            entfernung: 'ca. 6 km',
            badge: 'Hallenbad',
            text: 'Hallenbad mit 28 °C Wassertemperatur, Schwimmer- und Nichtschwimmerbereich. Barrierefrei zugänglich, ganzjährig geöffnet. Ideal für Regentage, Erholung oder sportliches Schwimmen.',
          },
          {
            name: 'Kurpark Daun',
            entfernung: 'ca. 6 km',
            badge: 'Spaziergang',
            text: 'Weitläufige Grünanlage im Zentrum Dauns mit ruhigen Spazierwegen, Brunnen und Bänken. Wasserspielplatz für Kinder vorhanden. Kostenlos zugänglich, ganzjährig nutzbar.',
          },
        ],
      },
      {
        titel: 'Radfahren & Mountainbike',
        eintraege: [
          {
            name: 'Maare-Mosel-Radweg',
            entfernung: 'Start Daun ca. 6 km',
            badge: 'Radweg',
            text: '51 km auf ehemaliger Bahntrasse von Daun bis Traben-Trarbach an der Mosel. Steigungsfrei, daher ideal für Familien und E-Bikes. Eine der schönsten Radrouten der Eifel.',
          },
          {
            name: 'Mountainbike El Dorado Vulkaneifel',
            entfernung: 'Region',
            badge: 'MTB',
            text: 'Über 750 km Strecken in allen Schwierigkeitsgraden, 13 ha Technik-Parcours. Guided Tours buchbar. Die Vulkaneifel ist eine der besten MTB-Regionen Westdeutschlands.',
          },
        ],
      },
      {
        titel: 'Winter & Wintersport',
        eintraege: [
          {
            name: 'Mäuseberg Ski-Hang Daun',
            entfernung: 'ca. 6 km',
            badge: 'Wintersport',
            text: 'Kleines Skigebiet bei Daun, ideal für Einsteiger und Familien. Nur bei ausreichend Schneefall geöffnet – in schneereichen Wintern ein schöner Kurzausflug direkt vor der Tür.',
          },
        ],
      },
      {
        titel: 'Höhlen & Unterirdisches',
        eintraege: [
          {
            name: 'Buchenlochhöhle Gerolstein',
            entfernung: 'ca. 18 km',
            badge: 'Höhle · Kostenlos',
            text: 'Karsthöhle in den Gerolsteiner Dolomiten, von Steinzeitmenschen vor rund 30.000 Jahren bewohnt. Frei zugänglich, Teil des Felsenpfads. Taschenlampe empfehlenswert – enger, aber eindrucksvoller Eingang.',
          },
          {
            name: 'Birresborner Eishöhlen',
            entfernung: 'ca. 30 km',
            badge: 'Höhle · Geführt',
            text: 'Vier Lavahöhlen im Vulkanpark Birresborn, entstanden durch erkaltende Lavaströme vor ca. 200.000 Jahren. Im Inneren herrschen ganzjährig Temperaturen um 0 °C – daher der Name. Geführte Touren buchbar, Schutzkleidung wird gestellt.',
          },
          {
            name: 'Mühlsteinhöhlen Mayen',
            entfernung: 'ca. 45 km',
            badge: 'Höhle · Museum',
            text: 'Unterirdisches Labyrinth aus mittelalterlichen Mühlsteinbrüchen im Lavakeller unter Mayen. Geführte Touren zeigen, wie seit der Römerzeit Basaltlava abgebaut wurde. Einmaliges Kulturdenkmal in situ.',
          },
        ],
      },
      {
        titel: 'Wasserfälle & Quellen',
        eintraege: [
          {
            name: 'Dreimühlen Wasserfall bei Üxheim-Ahütte',
            entfernung: 'ca. 18 km',
            badge: 'Naturdenkmal · Kostenlos',
            text: 'Der einzige „wachsende" Wasserfall Deutschlands. Er entsteht durch Kalkablagerungen (Kalktuff) und wächst seit 1932 nachweislich. Kostenlos zugänglich, schöner Spazierweg entlang des Ahbachs. Ein stilles, beeindruckendes Naturdenkmal.',
          },
          {
            name: 'Wallender Born / Brubbel Wallenborn',
            entfernung: 'ca. 15 km',
            badge: 'Naturphänomen · Kostenlos',
            text: 'Der einzige periodisch sprudelnde Kaltwassergeysir Deutschlands. Er sprudelt unregelmäßig alle paar Stunden und ist kostenlos zugänglich. Kurzer Spaziergang vom Parkplatz – ein Naturphänomen, das es so nur einmal gibt.',
          },
          {
            name: 'Helenenquelle im Kurpark Gerolstein',
            entfernung: 'ca. 18 km',
            badge: 'Quelle · Kostenlos',
            text: 'Natürliche Mineralwasserquelle direkt im Gerolsteiner Kurpark, kostenlos zugänglich. Das kohlensäurereiche Wasser kann direkt aus dem Quellstein verkostet werden – ein kleines, aber besonderes Erlebnis.',
          },
        ],
      },
      {
        titel: 'Gerolstein – Erlebnisse & Besichtigungen',
        eintraege: [
          {
            name: 'Gerolsteiner Brunnen Erlebniswelt',
            entfernung: 'ca. 18 km',
            badge: 'Neu 2026 · Kostenlos',
            text: 'Neue interaktive Erlebniswelt bei Deutschlands größtem Mineralbrunnen. Führungen durch die Abfüllanlagen mit Gratisverkostung. Voranmeldung erforderlich (besucherzentrum@gerolsteiner.com). Führungen Mo–Do: 09:30 und 11:30 Uhr.',
          },
          {
            name: 'Gerolsteiner Dolomiten & Felsenpfad',
            entfernung: 'ca. 18 km',
            badge: 'Wanderung · ca. 8 km',
            text: 'Beeindruckendes Felsenmassiv direkt über der Stadt Gerolstein. Der Felsenpfad (ca. 8 km Rundweg) führt über die Munterley mit spektakulärem Blick ins Kylltal, die Löwenburg-Ruine und die Buchenlochhöhle.',
          },
          {
            name: 'Naturkundemuseum Gerolstein',
            entfernung: 'ca. 18 km',
            badge: 'Museum',
            text: 'Museum zur Naturgeschichte der Vulkaneifel – Geologie, Fossilien und Fauna der Region. Verständlich aufbereitet für alle Altersgruppen. Ideal für Regentage und naturinteressierte Besucher.',
          },
          {
            name: 'Wassermühle Birgel',
            entfernung: 'ca. 20 km',
            badge: 'Museum · Hofladen',
            text: 'Das größte Mühlen-Erlebniszentrum Europas liegt in Birgel. Vier Mühlen in Betrieb: Senf-, Getreide-, Öl- und Sägemühle. Führungen buchbar, Hofladen mit regionalen Produkten. Für alle Altersgruppen ein Erlebnis.',
          },
        ],
      },
      {
        titel: 'Tagesausflüge in der Region',
        eintraege: [
          {
            name: 'Nürburgring',
            entfernung: 'ca. 55 km',
            badge: 'Motorsport',
            text: 'Die legendäre Nordschleife – Touristenfahrten, Erlebniswelt ring°werk und Motorsport-Events. Ein unvergesslicher Ausflug für Motorradfahrer und Autofans.',
          },
          {
            name: 'Cochem an der Mosel',
            entfernung: 'ca. 45 km',
            badge: 'Mosel',
            text: 'Reichsburg, mittelalterliche Altstadt und Weinkultur direkt an der Mosel. Einer der schönsten und bekanntesten Orte an der Mittelmosel.',
          },
          {
            name: 'Trier',
            entfernung: 'ca. 70 km',
            badge: 'UNESCO',
            text: 'Deutschlands älteste Stadt mit UNESCO-Weltkulturerbe: Porta Nigra, Kaiserthermen und Karl-Marx-Haus. Ideal für einen ganzen Kulturtag.',
          },
        ],
      },
    ],
  },
  en: {
    breadcrumb: { guide: 'Travel Guide', page: 'Excursions' },
    heading: 'Attractions Nearby',
    subtitle: 'Leisure, nature, culture and adventure around Kirchweiler – from 5 km to 70 km away.',
    ctaPrimary: 'Plan & Book Your Holiday',
    ctaSecondary: 'Rainy Day Tips',
    ulmenerMaarHeading: 'Ulmener Maar',
    ulmenerMaarText: 'The Ulmener Maar lies 10 km north of Kirchweiler and is the youngest known volcanic crater in Germany – formed around 11,000 years ago. The deep, circular lake sits idyllically in the forest, surrounded by a circular walking trail. The town of Ulmen with its castle ruins sits right on the lake\'s edge.',
    kategorien: [
      {
        titel: 'Adventure & Thrills',
        eintraege: [
          {
            name: 'Eifel Adventures Berlingen',
            entfernung: 'ca. 12 km',
            badge: 'Adventure',
            text: 'Ziplining, adventure minigolf, footpool and boules on a spacious outdoor site. Treehouse overnight stays bookable. Ideal for groups, families and team experiences.',
          },
          {
            name: 'Sommerrodelbahn Daun',
            entfernung: 'ca. 6 km',
            badge: 'Family',
            text: '800-metre run at the Wild & Adventure Park Daun. Single and double bob, you choose your speed. Open seasonally April to October – quick fun for all ages.',
          },
          {
            name: 'Wild- & Erlebnispark Daun',
            entfernung: 'ca. 6 km',
            badge: 'Family',
            text: 'Drive-through park by car, barbary macaque canyon, birds of prey shows, adventure playground and petting zoo. Llamas, mouflons, wild yaks and wild boar on large grounds. The summer toboggan run is right outside.',
          },
        ],
      },
      {
        titel: 'Nature & Geology',
        eintraege: [
          {
            name: 'Dreimühlen Wasserfall bei Üxheim-Ahütte',
            entfernung: 'ca. 18 km',
            badge: 'Natural Monument',
            text: "Germany's only 'growing' waterfall. Formed by limestone deposits and demonstrably growing since 1932. Free access, beautiful walk along the Ahbach. A quiet, impressive natural monument.",
          },
          {
            name: 'Wallender Born / Brubbel Wallenborn',
            entfernung: 'ca. 15 km',
            badge: 'Natural Phenomenon',
            text: "Germany's only periodically gushing cold-water geyser. It erupts irregularly every few hours and is free to access. Short walk from the car park – a natural phenomenon found nowhere else.",
          },
          {
            name: 'Buchenlochhöhle Gerolstein',
            entfernung: 'ca. 18 km',
            badge: 'Cave',
            text: 'Ice Age cave with Stone Age finds, part of the Gerolstein Dolomites. Guided tours available year-round. An impressive geological testament to Eifel history.',
          },
          {
            name: 'Strohner Lavabombe',
            entfernung: 'ca. 12 km',
            badge: 'Geology',
            text: "Giant lava boulder from the Eifel's volcanic activity – landmark of the volcano village of Strohn. Free and suitable for a short visit. Impressive reminder of the region's geological past.",
          },
          {
            name: 'Observatorium Hoher List Schalkenmehren',
            entfernung: 'ca. 5 km',
            badge: 'Astronomy',
            text: "Former astronomical observatory of the University of Bonn at 551 m altitude. One of Germany's darkest skies – ideal for stargazing. The dome landscape is also worth seeing by day.",
          },
          {
            name: 'Gerolsteiner Dolomiten',
            entfernung: 'ca. 20 km',
            badge: 'Rock Formation',
            text: 'Impressive limestone rock formations in the Eifel with well-marked hiking trails and viewpoints. Dogs allowed on main paths. Short loops possible from Gerolstein town centre.',
          },
        ],
      },
      {
        titel: 'Culture & Museums',
        eintraege: [
          {
            name: 'Eifel-Vulkanmuseum Daun',
            entfernung: 'ca. 6 km',
            badge: 'Museum',
            text: 'Interactive museum on the formation of the volcanic landscape, part of the Vulkan Eifel Nature and Geopark. Child- and family-friendly – ideal for rainy days and curious visitors.',
          },
          {
            name: 'Adler- & Wolfspark Kasselburg Pelm',
            entfernung: 'ca. 20 km',
            badge: 'Wildlife Experience',
            text: 'Birds of prey shows and wolf feeding on 20 ha around a historic 12th-century castle. Daily flying displays in season. European wolves in spacious enclosures – a highlight for all ages.',
          },
          {
            name: 'Maarmuseum Manderscheid',
            entfernung: 'ca. 18 km',
            badge: 'Museum',
            text: 'Museum on the formation of the maare – great in combination with the Manderscheid castle trail. Volcanic geology explained accessibly for all generations.',
          },
          {
            name: 'Heimwebermuseum Schalkenmehren',
            entfernung: 'ca. 5 km',
            badge: 'Local History',
            text: "Insight into the region's traditional crafts and the Eifel's cultural history. Small entrance fee, peaceful setting – an authentic piece of regional history.",
          },
          {
            name: 'Manderscheid Burgruinen',
            entfernung: 'ca. 20 km',
            badge: 'Castle',
            text: 'Two castle ruins high above the Lieser valley – free access, guaranteed dream views. Combined with the Manderscheid castle trail (6.6 km), a lovely half-day trip.',
          },
          {
            name: 'Kinopalast Vulkaneifel Daun',
            entfernung: 'ca. 6 km',
            badge: 'Entertainment',
            text: 'Modern cinema in Daun showing current films. Ideal for rainy days, evening programmes or simply a relaxing cinema night.',
          },
        ],
      },
      {
        titel: 'Wellness & Swimming',
        eintraege: [
          {
            name: 'Laurentiusbad Daun',
            entfernung: 'ca. 6 km',
            badge: 'Indoor Pool',
            text: 'Indoor pool with 28°C water temperature, lanes for swimmers and non-swimmers. Barrier-free, open year-round. Ideal for rainy days, relaxation or sports swimming.',
          },
          {
            name: 'Kurpark Daun',
            entfernung: 'ca. 6 km',
            badge: 'Walk',
            text: 'Spacious green area in the centre of Daun with quiet walking paths, fountains and benches. Water playground for children. Free access, usable year-round.',
          },
        ],
      },
      {
        titel: 'Cycling & Mountain Biking',
        eintraege: [
          {
            name: 'Maare-Mosel-Radweg',
            entfernung: 'Start Daun ca. 6 km',
            badge: 'Cycle Route',
            text: '51 km on a former railway track from Daun to Traben-Trarbach on the Moselle. Flat, ideal for families and e-bikes. One of the Eifel\'s finest cycle routes.',
          },
          {
            name: 'Mountainbike El Dorado Vulkaneifel',
            entfernung: 'Region',
            badge: 'MTB',
            text: "Over 750 km of trails at all difficulty levels, 13 ha technical course. Guided tours bookable. The Vulkan Eifel is one of western Germany's best MTB regions.",
          },
        ],
      },
      {
        titel: 'Winter & Snow Sports',
        eintraege: [
          {
            name: 'Mäuseberg Ski-Hang Daun',
            entfernung: 'ca. 6 km',
            badge: 'Winter Sports',
            text: 'Small ski area near Daun, ideal for beginners and families. Only open with sufficient snowfall – in snowy winters a lovely short trip right on the doorstep.',
          },
        ],
      },
      {
        titel: 'Caves & Underground',
        eintraege: [
          {
            name: 'Buchenlochhöhle Gerolstein',
            entfernung: 'ca. 18 km',
            badge: 'Cave · Free',
            text: 'Karst cave in the Gerolstein Dolomites, inhabited by Stone Age people around 30,000 years ago. Free access, part of the rock path. Torch recommended – narrow but impressive entrance.',
          },
          {
            name: 'Birresborner Eishöhlen',
            entfernung: 'ca. 30 km',
            badge: 'Cave · Guided',
            text: 'Four lava caves in Birresborn Volcano Park, formed by cooling lava flows approx. 200,000 years ago. Temperatures around 0°C inside year-round – hence the name. Guided tours bookable, protective clothing provided.',
          },
          {
            name: 'Mühlsteinhöhlen Mayen',
            entfernung: 'ca. 45 km',
            badge: 'Cave · Museum',
            text: 'Underground labyrinth from medieval millstone quarries in the lava cellar beneath Mayen. Guided tours show how basalt lava has been quarried since Roman times. Unique cultural monument in situ.',
          },
        ],
      },
      {
        titel: 'Waterfalls & Springs',
        eintraege: [
          {
            name: 'Dreimühlen Wasserfall bei Üxheim-Ahütte',
            entfernung: 'ca. 18 km',
            badge: 'Natural Monument · Free',
            text: "Germany's only 'growing' waterfall. Formed by limestone deposits (calcareous tufa) and demonstrably growing since 1932. Free access, beautiful walk along the Ahbach. A quiet, impressive natural monument.",
          },
          {
            name: 'Wallender Born / Brubbel Wallenborn',
            entfernung: 'ca. 15 km',
            badge: 'Natural Phenomenon · Free',
            text: "Germany's only periodically gushing cold-water geyser. It erupts irregularly every few hours and is free to access. Short walk from the car park – a natural phenomenon found nowhere else.",
          },
          {
            name: 'Helenenquelle im Kurpark Gerolstein',
            entfernung: 'ca. 18 km',
            badge: 'Spring · Free',
            text: "Natural mineral spring directly in Gerolstein's spa park, free access. The carbonated water can be tasted directly from the spring stone – a small but special experience.",
          },
        ],
      },
      {
        titel: 'Gerolstein – Experiences & Sights',
        eintraege: [
          {
            name: 'Gerolsteiner Brunnen Erlebniswelt',
            entfernung: 'ca. 18 km',
            badge: 'New 2026 · Free',
            text: "New interactive experience world at Germany's largest mineral spring. Tours through the bottling plant with free tasting. Registration required (besucherzentrum@gerolsteiner.com). Tours Mon–Thu: 9:30 and 11:30.",
          },
          {
            name: 'Gerolsteiner Dolomiten & Felsenpfad',
            entfernung: 'ca. 18 km',
            badge: 'Hike · approx. 8 km',
            text: 'Impressive rock massif directly above Gerolstein. The rock path (approx. 8 km loop) passes the Munterley with spectacular Kyll valley views, the Löwenburg ruin and the Buchenlochhöhle cave.',
          },
          {
            name: 'Naturkundemuseum Gerolstein',
            entfernung: 'ca. 18 km',
            badge: 'Museum',
            text: 'Museum on the natural history of the Vulkan Eifel – geology, fossils and fauna. Accessible for all ages. Ideal for rainy days and nature-minded visitors.',
          },
          {
            name: 'Wassermühle Birgel',
            entfernung: 'ca. 20 km',
            badge: 'Museum · Farm Shop',
            text: "Europe's largest mill experience centre in Birgel. Four working mills: mustard, grain, oil and saw. Tours bookable, farm shop with regional products. An experience for all ages.",
          },
        ],
      },
      {
        titel: 'Day Trips in the Region',
        eintraege: [
          {
            name: 'Nürburgring',
            entfernung: 'ca. 55 km',
            badge: 'Motorsport',
            text: 'The legendary Nordschleife – tourist laps, ring°werk experience world and motorsport events. An unforgettable trip for motorcycle riders and car enthusiasts.',
          },
          {
            name: 'Cochem an der Mosel',
            entfernung: 'ca. 45 km',
            badge: 'Moselle',
            text: 'Reichsburg castle, medieval old town and wine culture right on the Moselle. One of the most beautiful and well-known spots on the Middle Moselle.',
          },
          {
            name: 'Trier',
            entfernung: 'ca. 70 km',
            badge: 'UNESCO',
            text: "Germany's oldest city with UNESCO World Heritage: Porta Nigra, Imperial Baths and Karl Marx House. Ideal for a full cultural day.",
          },
        ],
      },
    ],
  },
  nl: {
    breadcrumb: { guide: 'Reisgids', page: 'Uitstapjes' },
    heading: 'Bezienswaardigheden in de Buurt',
    subtitle: 'Vrije tijd, natuur, cultuur en beleving rondom Kirchweiler – van 5 km tot 70 km afstand.',
    ctaPrimary: 'Vakantie Plannen & Boeken',
    ctaSecondary: 'Slechtweer Tips',
    ulmenerMaarHeading: 'Ulmener Maar',
    ulmenerMaarText: 'Het Ulmener Maar ligt 10 km ten noorden van Kirchweiler en is de jongste bekende vulkaankrater van Duitsland – ontstaan ca. 11.000 jaar geleden. Het diepe, ronde meer ligt idyllisch in het bos, omgeven door een rondetrekpad. Het stadje Ulmen met zijn kasteelruïne ligt direct aan de oever van het meer.',
    kategorien: [
      {
        titel: 'Avontuur & Beleving',
        eintraege: [
          {
            name: 'Eifel Adventures Berlingen',
            entfernung: 'ca. 12 km',
            badge: 'Avontuur',
            text: 'Ziplining, avontuursmingolf, voetbalbiljart en petanque op een ruim buitenterrein. Boomhutverblijven zijn te boeken. Ideaal voor groepen, gezinnen en teamervaringen.',
          },
          {
            name: 'Sommerrodelbahn Daun',
            entfernung: 'ca. 6 km',
            badge: 'Familie',
            text: '800 meter lange baan in het Wild- & Avonturenpark Daun. Eenpersoons- en tweepersoonsbob, u kiest zelf het tempo. Geopend in het seizoen april tot oktober – snel plezier voor alle leeftijden.',
          },
          {
            name: 'Wild- & Erlebnispark Daun',
            entfernung: 'ca. 6 km',
            badge: 'Familie',
            text: 'Autoroute door het park, berberapen-canyon, roofvogel-vliegshows, avontuurspeelplaats en kinderboerderij. Lama\'s, moefflons, wilde jakken en wilde zwijnen op een groot terrein. De zomerrodelbaan ligt er direct naast.',
          },
        ],
      },
      {
        titel: 'Natuur & Geologie',
        eintraege: [
          {
            name: 'Dreimühlen Wasserfall bei Üxheim-Ahütte',
            entfernung: 'ca. 18 km',
            badge: 'Natuurmonument',
            text: "De enige 'groeiende' waterval van Duitsland. Ontstaan door kalkafzettingen en aantoonbaar groeiend sinds 1932. Gratis toegankelijk, mooie wandeling langs de Ahbach. Een stil, indrukwekkend natuurmonument.",
          },
          {
            name: 'Wallender Born / Brubbel Wallenborn',
            entfernung: 'ca. 15 km',
            badge: 'Natuurverschijnsel',
            text: 'De enige periodiek opspuitende koudwatergeiser van Duitsland. Hij spuit onregelmatig om de paar uur en is gratis toegankelijk. Korte wandeling vanaf de parkeerplaats – een natuurverschijnsel dat nergens anders bestaat.',
          },
          {
            name: 'Buchenlochhöhle Gerolstein',
            entfernung: 'ca. 18 km',
            badge: 'Grot',
            text: 'IJstijdgrot met vondsten uit de Oude Steentijd, onderdeel van de Gerolsteiner Dolomiten. Het hele jaar door rondleidingen mogelijk. Een indrukwekkend geologisch getuigenis van de Eifelgeschiedenis.',
          },
          {
            name: 'Strohner Lavabombe',
            entfernung: 'ca. 12 km',
            badge: 'Geologie',
            text: "Gigantische lavakei uit het vulkanisme van de Eifel – symbool van het vulkaandorp Strohn. Gratis en geschikt voor een kort bezoek. Indrukwekkende herinnering aan het geologische verleden van de regio.",
          },
          {
            name: 'Observatorium Hoher List Schalkenmehren',
            entfernung: 'ca. 5 km',
            badge: 'Astronomie',
            text: 'Voormalig astronomisch observatorium van de Universiteit van Bonn op 551 m hoogte. Een van de donkerste luchten van Duitsland – ideaal voor sterren kijken. Het koepellandschap is ook overdag de moeite waard.',
          },
          {
            name: 'Gerolsteiner Dolomiten',
            entfernung: 'ca. 20 km',
            badge: 'Rotsen',
            text: 'Indrukwekkende kalksteenrotsen midden in de Eifel met goed bewegwijzerde wandelroutes en uitzichtpunten. Honden zijn toegestaan op de hoofdpaden. Korte rondes mogelijk vanuit het centrum van Gerolstein.',
          },
        ],
      },
      {
        titel: 'Cultuur & Musea',
        eintraege: [
          {
            name: 'Eifel-Vulkanmuseum Daun',
            entfernung: 'ca. 6 km',
            badge: 'Museum',
            text: 'Interactief museum over het ontstaan van het vulkaanlandschap, onderdeel van het Natuur- en Geopark Vulkaneifel. Kindvriendelijk en geschikt voor het hele gezin – ideaal voor regenachtige dagen en nieuwsgierige bezoekers.',
          },
          {
            name: 'Adler- & Wolfspark Kasselburg Pelm',
            entfernung: 'ca. 20 km',
            badge: 'Dierenbeleving',
            text: 'Roofvogelshows en wolvenvoeding op 20 ha rond een historisch kasteel uit de 12e eeuw. Dagelijkse vliegdemonstraties in het seizoen. Europese wolven in ruime verblijven – een hoogtepunt voor alle leeftijden.',
          },
          {
            name: 'Maarmuseum Manderscheid',
            entfernung: 'ca. 18 km',
            badge: 'Museum',
            text: 'Museum over het ontstaan van de maren – goed te combineren met het Manderscheider Burgenstieg. Vulkaangeologie toegankelijk uitgelegd voor alle generaties.',
          },
          {
            name: 'Heimwebermuseum Schalkenmehren',
            entfernung: 'ca. 5 km',
            badge: 'Streekgeschiedenis',
            text: 'Inkijk in het traditionele handwerk van de regio en de cultuurgeschiedenis van de Eifel. Kleine entreeprijs, rustig gelegen – een authentiek stukje regionale geschiedenis.',
          },
          {
            name: 'Manderscheid Burgruinen',
            entfernung: 'ca. 20 km',
            badge: 'Kasteel',
            text: 'Twee kasteelruïnes hoog boven het Lieserdal – gratis toegankelijk, uitzicht gegarandeerd. Gecombineerd met het Manderscheider Burgenstieg (6,6 km) een mooie halve daguitstap.',
          },
          {
            name: 'Kinopalast Vulkaneifel Daun',
            entfernung: 'ca. 6 km',
            badge: 'Amusement',
            text: 'Moderne bioscoop in Daun met actuele films. Ideaal voor regenachtige dagen, avondprogramma of gewoon een ontspannen bioscoopavond.',
          },
        ],
      },
      {
        titel: 'Wellness & Zwemmen',
        eintraege: [
          {
            name: 'Laurentiusbad Daun',
            entfernung: 'ca. 6 km',
            badge: 'Zwembad',
            text: 'Overdekt zwembad met een watertemperatuur van 28°C, banen voor zwemmers en niet-zwemmers. Drempelvrij toegankelijk, het hele jaar open. Ideaal voor regenachtige dagen, ontspanning of sportief zwemmen.',
          },
          {
            name: 'Kurpark Daun',
            entfernung: 'ca. 6 km',
            badge: 'Wandeling',
            text: 'Ruime groene zone in het centrum van Daun met rustige wandelpaden, fonteinen en bankjes. Waterspeelplaats voor kinderen aanwezig. Gratis toegankelijk, het hele jaar te gebruiken.',
          },
        ],
      },
      {
        titel: 'Fietsen & Mountainbike',
        eintraege: [
          {
            name: 'Maare-Mosel-Radweg',
            entfernung: 'Start Daun ca. 6 km',
            badge: 'Fietsroute',
            text: '51 km op een voormalig spoortraject van Daun naar Traben-Trarbach aan de Moezel. Vlak, ideaal voor gezinnen en e-bikes. Een van de mooiste fietsroutes van de Eifel.',
          },
          {
            name: 'Mountainbike El Dorado Vulkaneifel',
            entfernung: 'Region',
            badge: 'MTB',
            text: 'Meer dan 750 km aan routes op alle niveaus, 13 ha technisch parcours. Begeleide tours te boeken. De Vulkaneifel is een van de beste MTB-regio\'s van West-Duitsland.',
          },
        ],
      },
      {
        titel: 'Winter & Wintersport',
        eintraege: [
          {
            name: 'Mäuseberg Ski-Hang Daun',
            entfernung: 'ca. 6 km',
            badge: 'Wintersport',
            text: 'Klein skigebied bij Daun, ideaal voor beginners en gezinnen. Alleen open bij voldoende sneeuwval – in besneeuwde winters een leuk kort uitstapje vlak bij de deur.',
          },
        ],
      },
      {
        titel: 'Grotten & Ondergronds',
        eintraege: [
          {
            name: 'Buchenlochhöhle Gerolstein',
            entfernung: 'ca. 18 km',
            badge: 'Grot · Gratis',
            text: 'Karstgrot in de Gerolsteiner Dolomiten, bewoond door mensen uit de Steentijd zo\'n 30.000 jaar geleden. Vrij toegankelijk, onderdeel van het rotspad. Zaklamp aanbevolen – smalle maar indrukwekkende ingang.',
          },
          {
            name: 'Birresborner Eishöhlen',
            entfernung: 'ca. 30 km',
            badge: 'Grot · Rondleiding',
            text: 'Vier lavagrotten in het vulkaanpark Birresborn, ontstaan door afkoelende lavastromen zo\'n 200.000 jaar geleden. Binnen het hele jaar temperaturen rond 0°C – vandaar de naam. Rondleidingen te boeken, beschermende kleding wordt verstrekt.',
          },
          {
            name: 'Mühlsteinhöhlen Mayen',
            entfernung: 'ca. 45 km',
            badge: 'Grot · Museum',
            text: 'Ondergronds labyrint van middeleeuwse molenstenen-groeven in de lavakelders onder Mayen. Rondleidingen tonen hoe basaltlava al sinds de Romeinse tijd werd gewonnen. Uniek cultuurmonument in situ.',
          },
        ],
      },
      {
        titel: 'Watervallen & Bronnen',
        eintraege: [
          {
            name: 'Dreimühlen Wasserfall bei Üxheim-Ahütte',
            entfernung: 'ca. 18 km',
            badge: 'Natuurmonument · Gratis',
            text: "De enige 'groeiende' waterval van Duitsland. Ontstaan door kalkafzettingen (kalktuf) en aantoonbaar groeiend sinds 1932. Gratis toegankelijk, mooie wandeling langs de Ahbach. Een stil, indrukwekkend natuurmonument.",
          },
          {
            name: 'Wallender Born / Brubbel Wallenborn',
            entfernung: 'ca. 15 km',
            badge: 'Natuurverschijnsel · Gratis',
            text: 'De enige periodiek opspuitende koudwatergeiser van Duitsland. Hij spuit onregelmatig om de paar uur en is gratis toegankelijk. Korte wandeling vanaf de parkeerplaats – een natuurverschijnsel dat nergens anders bestaat.',
          },
          {
            name: 'Helenenquelle im Kurpark Gerolstein',
            entfernung: 'ca. 18 km',
            badge: 'Bron · Gratis',
            text: 'Natuurlijke mineraalwaterbron direct in het Gerolsteiner kurpark, gratis toegankelijk. Het koolzuurrijke water kan direct uit de bronsteen worden geproefd – een kleine maar bijzondere ervaring.',
          },
        ],
      },
      {
        titel: 'Gerolstein – Belevingen & Bezienswaardigheden',
        eintraege: [
          {
            name: 'Gerolsteiner Brunnen Erlebniswelt',
            entfernung: 'ca. 18 km',
            badge: 'Nieuw 2026 · Gratis',
            text: "Nieuwe interactieve belevingswereld bij de grootste mineraalwaterbron van Duitsland. Rondleidingen door de bottellijn met gratis proeverij. Aanmelding vereist (besucherzentrum@gerolsteiner.com). Rondleidingen ma–do: 09:30 en 11:30 uur.",
          },
          {
            name: 'Gerolsteiner Dolomiten & Felsenpfad',
            entfernung: 'ca. 18 km',
            badge: 'Wandeling · ca. 8 km',
            text: 'Indrukwekkend rotsmassief direct boven de stad Gerolstein. Het rotspad (ca. 8 km rondje) loopt over de Munterley met spectaculair uitzicht op het Kylldal, de Löwenburg-ruïne en de Buchenlochhöhle.',
          },
          {
            name: 'Naturkundemuseum Gerolstein',
            entfernung: 'ca. 18 km',
            badge: 'Museum',
            text: 'Museum over de natuurgeschiedenis van de Vulkaneifel – geologie, fossielen en fauna. Toegankelijk voor alle leeftijden. Ideaal voor regenachtige dagen en natuurliefhebbers.',
          },
          {
            name: 'Wassermühle Birgel',
            entfernung: 'ca. 20 km',
            badge: 'Museum · Boerderijwinkel',
            text: "Het grootste molen-ervaringscentrum van Europa ligt in Birgel. Vier werkende molens: mosterd-, graan-, olie- en zaagmolen. Rondleidingen te boeken, boerderijwinkel met streekproducten. Een belevenis voor alle leeftijden.",
          },
        ],
      },
      {
        titel: 'Daguitstapjes in de Regio',
        eintraege: [
          {
            name: 'Nürburgring',
            entfernung: 'ca. 55 km',
            badge: 'Motorsport',
            text: 'De legendarische Nordschleife – toeristische rondritten, belevingswereld ring°werk en motorsportevenementen. Een onvergetelijk uitstapje voor motorrijders en autoliefhebbers.',
          },
          {
            name: 'Cochem an der Mosel',
            entfernung: 'ca. 45 km',
            badge: 'Moezel',
            text: 'Reichsburg, middeleeuwse binnenstad en wijncultuur direct aan de Moezel. Een van de mooiste en bekendste plekken aan de Midden-Moezel.',
          },
          {
            name: 'Trier',
            entfernung: 'ca. 70 km',
            badge: 'UNESCO',
            text: 'De oudste stad van Duitsland met UNESCO Werelderfgoed: Porta Nigra, Keizerlijke Thermen en Karl-Marx-Haus. Ideaal voor een volledige culturele dag.',
          },
        ],
      },
    ],
  },
  fr: {
    breadcrumb: { guide: 'Guide de Voyage', page: 'Excursions' },
    heading: 'Attractions aux Alentours',
    subtitle: 'Loisirs, nature, culture et aventure autour de Kirchweiler – de 5 km à 70 km de distance.',
    ctaPrimary: 'Planifier & Réserver des Vacances',
    ctaSecondary: 'Activités par Mauvais Temps',
    ulmenerMaarHeading: 'Ulmener Maar',
    ulmenerMaarText: "L'Ulmener Maar se trouve à 10 km au nord de Kirchweiler et est le plus jeune cratère volcanique connu d'Allemagne – formé il y a environ 11 000 ans. Le lac profond et circulaire est niché dans la forêt, entouré d'un sentier de randonnée circulaire. La ville d'Ulmen avec ses ruines de château se trouve directement au bord du lac.",
    kategorien: [
      {
        titel: 'Aventure & Sensations',
        eintraege: [
          {
            name: 'Eifel Adventures Berlingen',
            entfernung: 'ca. 12 km',
            badge: 'Aventure',
            text: 'Tyrolienne, mini-golf aventure, football-billard et pétanque sur un vaste site en plein air. Nuitées en cabane dans les arbres réservables. Idéal pour les groupes, les familles et les expériences de team building.',
          },
          {
            name: 'Sommerrodelbahn Daun',
            entfernung: 'ca. 6 km',
            badge: 'Famille',
            text: 'Piste de 800 mètres au Wild & Erlebnispark Daun. Bob simple ou double, vous choisissez votre vitesse. Ouvert en saison d\'avril à octobre – un plaisir rapide pour tous les âges.',
          },
          {
            name: 'Wild- & Erlebnispark Daun',
            entfernung: 'ca. 6 km',
            badge: 'Famille',
            text: 'Promenade en voiture dans le parc, canyon des macaques de Barbarie, spectacles de rapaces, aire de jeux aventure et zoo pour enfants. Lamas, mouflons, yaks sauvages et sangliers sur un vaste terrain. La luge d\'été se trouve juste à côté.',
          },
        ],
      },
      {
        titel: 'Nature & Géologie',
        eintraege: [
          {
            name: 'Dreimühlen Wasserfall bei Üxheim-Ahütte',
            entfernung: 'ca. 18 km',
            badge: 'Monument Naturel',
            text: "La seule cascade 'croissante' d'Allemagne. Formée par des dépôts calcaires et dont la croissance est attestée depuis 1932. Accès gratuit, belle promenade le long de l'Ahbach. Un monument naturel calme et impressionnant.",
          },
          {
            name: 'Wallender Born / Brubbel Wallenborn',
            entfernung: 'ca. 15 km',
            badge: 'Phénomène Naturel',
            text: 'Le seul geyser d\'eau froide à jaillissement périodique d\'Allemagne. Il jaillit irrégulièrement toutes les quelques heures et est accessible gratuitement. Courte promenade depuis le parking – un phénomène naturel unique au monde.',
          },
          {
            name: 'Buchenlochhöhle Gerolstein',
            entfernung: 'ca. 18 km',
            badge: 'Grotte',
            text: 'Grotte de l\'ère glaciaire avec des vestiges du Paléolithique, partie des Dolomites de Gerolstein. Visites guidées disponibles toute l\'année. Un témoignage géologique impressionnant de l\'histoire de l\'Eifel.',
          },
          {
            name: 'Strohner Lavabombe',
            entfernung: 'ca. 12 km',
            badge: 'Géologie',
            text: 'Gigantesque bloc de lave issu du volcanisme de l\'Eifel – emblème du village volcanique de Strohn. Accès gratuit, visite rapide possible. Rappel impressionnant du passé géologique de la région.',
          },
          {
            name: 'Observatorium Hoher List Schalkenmehren',
            entfernung: 'ca. 5 km',
            badge: 'Astronomie',
            text: 'Ancien observatoire astronomique de l\'Université de Bonn à 551 m d\'altitude. L\'un des ciels les plus sombres d\'Allemagne – idéal pour l\'observation des étoiles. Le paysage de coupoles vaut également le détour en journée.',
          },
          {
            name: 'Gerolsteiner Dolomiten',
            entfernung: 'ca. 20 km',
            badge: 'Formation Rocheuse',
            text: 'Impressionnantes formations rocheuses calcaires au cœur de l\'Eifel avec des sentiers balisés et des points de vue. Les chiens sont admis sur les chemins principaux. Boucles courtes possibles depuis le centre-ville de Gerolstein.',
          },
        ],
      },
      {
        titel: 'Culture & Musées',
        eintraege: [
          {
            name: 'Eifel-Vulkanmuseum Daun',
            entfernung: 'ca. 6 km',
            badge: 'Musée',
            text: 'Musée interactif sur la formation du paysage volcanique, faisant partie du Geopark Nature Vulkan Eifel. Adapté aux enfants et aux familles – idéal pour les jours de pluie et les visiteurs curieux.',
          },
          {
            name: 'Adler- & Wolfspark Kasselburg Pelm',
            entfernung: 'ca. 20 km',
            badge: 'Expérience Animalière',
            text: 'Spectacles de rapaces et nourrissage des loups sur 20 ha autour d\'un château historique du XIIe siècle. Démonstrations de vol quotidiennes en saison. Loups européens dans de vastes enclos – un moment fort pour tous les âges.',
          },
          {
            name: 'Maarmuseum Manderscheid',
            entfernung: 'ca. 18 km',
            badge: 'Musée',
            text: 'Musée sur la formation des maare – idéal en combinaison avec le sentier des châteaux de Manderscheid. La géologie volcanique expliquée de façon accessible pour toutes les générations.',
          },
          {
            name: 'Heimwebermuseum Schalkenmehren',
            entfernung: 'ca. 5 km',
            badge: 'Histoire Locale',
            text: 'Aperçu de l\'artisanat traditionnel de la région et de l\'histoire culturelle de l\'Eifel. Entrée modique, cadre paisible – un authentique morceau d\'histoire régionale.',
          },
          {
            name: 'Manderscheid Burgruinen',
            entfernung: 'ca. 20 km',
            badge: 'Château',
            text: 'Deux ruines de châteaux dominant la vallée de la Lieser – accès gratuit, vue de rêve garantie. Combiné avec le sentier des châteaux de Manderscheid (6,6 km), une belle demi-journée d\'excursion.',
          },
          {
            name: 'Kinopalast Vulkaneifel Daun',
            entfernung: 'ca. 6 km',
            badge: 'Divertissement',
            text: 'Cinéma moderne à Daun proposant les films actuels. Idéal pour les jours de pluie, les programmes du soir ou simplement une soirée cinéma relaxante.',
          },
        ],
      },
      {
        titel: 'Bien-être & Baignade',
        eintraege: [
          {
            name: 'Laurentiusbad Daun',
            entfernung: 'ca. 6 km',
            badge: 'Piscine Couverte',
            text: 'Piscine couverte avec une température de l\'eau de 28°C, lignes pour nageurs et non-nageurs. Accessible aux personnes à mobilité réduite, ouverte toute l\'année. Idéal pour les jours de pluie, la détente ou la natation sportive.',
          },
          {
            name: 'Kurpark Daun',
            entfernung: 'ca. 6 km',
            badge: 'Promenade',
            text: 'Vaste espace vert au centre de Daun avec des chemins de promenade tranquilles, des fontaines et des bancs. Aire de jeux aquatique pour les enfants. Accès gratuit, utilisable toute l\'année.',
          },
        ],
      },
      {
        titel: 'Vélo & VTT',
        eintraege: [
          {
            name: 'Maare-Mosel-Radweg',
            entfernung: 'Start Daun ca. 6 km',
            badge: 'Piste Cyclable',
            text: '51 km sur une ancienne voie ferrée de Daun à Traben-Trarbach sur la Moselle. Plat, idéal pour les familles et les vélos électriques. L\'une des plus belles pistes cyclables de l\'Eifel.',
          },
          {
            name: 'Mountainbike El Dorado Vulkaneifel',
            entfernung: 'Region',
            badge: 'VTT',
            text: 'Plus de 750 km de sentiers à tous niveaux, 13 ha de parcours technique. Sorties guidées réservables. La Vulkan Eifel est l\'une des meilleures régions VTT de l\'ouest de l\'Allemagne.',
          },
        ],
      },
      {
        titel: 'Hiver & Sports d\'Hiver',
        eintraege: [
          {
            name: 'Mäuseberg Ski-Hang Daun',
            entfernung: 'ca. 6 km',
            badge: 'Sports d\'Hiver',
            text: 'Petit domaine skiable près de Daun, idéal pour les débutants et les familles. Ouvert uniquement en cas d\'enneigement suffisant – lors des hivers enneigés, une belle petite excursion à deux pas.',
          },
        ],
      },
      {
        titel: 'Grottes & Souterrain',
        eintraege: [
          {
            name: 'Buchenlochhöhle Gerolstein',
            entfernung: 'ca. 18 km',
            badge: 'Grotte · Gratuit',
            text: 'Grotte karstique dans les Dolomites de Gerolstein, habitée par des hommes préhistoriques il y a environ 30 000 ans. Accès libre, partie du sentier rocheux. Lampe de poche recommandée – entrée étroite mais impressionnante.',
          },
          {
            name: 'Birresborner Eishöhlen',
            entfernung: 'ca. 30 km',
            badge: 'Grotte · Guidée',
            text: 'Quatre grottes de lave dans le parc volcanique de Birresborn, formées par des coulées de lave refroidies il y a environ 200 000 ans. Températures autour de 0°C à l\'intérieur toute l\'année – d\'où le nom. Visites guidées réservables, vêtements de protection fournis.',
          },
          {
            name: 'Mühlsteinhöhlen Mayen',
            entfernung: 'ca. 45 km',
            badge: 'Grotte · Musée',
            text: 'Labyrinthe souterrain d\'anciennes carrières de meules médiévales dans la cave de lave sous Mayen. Les visites guidées montrent comment la lave basaltique est extraite depuis l\'époque romaine. Monument culturel unique in situ.',
          },
        ],
      },
      {
        titel: 'Cascades & Sources',
        eintraege: [
          {
            name: 'Dreimühlen Wasserfall bei Üxheim-Ahütte',
            entfernung: 'ca. 18 km',
            badge: 'Monument Naturel · Gratuit',
            text: "La seule cascade 'croissante' d'Allemagne. Formée par des dépôts calcaires (tuf calcaire) et dont la croissance est attestée depuis 1932. Accès gratuit, belle promenade le long de l'Ahbach. Un monument naturel calme et impressionnant.",
          },
          {
            name: 'Wallender Born / Brubbel Wallenborn',
            entfernung: 'ca. 15 km',
            badge: 'Phénomène Naturel · Gratuit',
            text: 'Le seul geyser d\'eau froide à jaillissement périodique d\'Allemagne. Il jaillit irrégulièrement toutes les quelques heures et est accessible gratuitement. Courte promenade depuis le parking – un phénomène naturel unique au monde.',
          },
          {
            name: 'Helenenquelle im Kurpark Gerolstein',
            entfernung: 'ca. 18 km',
            badge: 'Source · Gratuit',
            text: 'Source d\'eau minérale naturelle directement dans le kurpark de Gerolstein, accès gratuit. L\'eau gazeuse peut être goûtée directement depuis la pierre-source – une petite expérience unique.',
          },
        ],
      },
      {
        titel: 'Gerolstein – Expériences & Visites',
        eintraege: [
          {
            name: 'Gerolsteiner Brunnen Erlebniswelt',
            entfernung: 'ca. 18 km',
            badge: 'Nouveau 2026 · Gratuit',
            text: 'Nouveau monde d\'expériences interactif à la plus grande source minérale d\'Allemagne. Visites de la chaîne d\'embouteillage avec dégustation gratuite. Inscription requise (besucherzentrum@gerolsteiner.com). Visites lun–jeu : 9h30 et 11h30.',
          },
          {
            name: 'Gerolsteiner Dolomiten & Felsenpfad',
            entfernung: 'ca. 18 km',
            badge: 'Randonnée · env. 8 km',
            text: 'Impressionnant massif rocheux dominant la ville de Gerolstein. Le sentier rocheux (env. 8 km en boucle) passe par la Munterley avec une vue spectaculaire sur la vallée de la Kyll, la ruine de la Löwenburg et la grotte Buchenlochhöhle.',
          },
          {
            name: 'Naturkundemuseum Gerolstein',
            entfernung: 'ca. 18 km',
            badge: 'Musée',
            text: 'Musée sur l\'histoire naturelle de la Vulkan Eifel – géologie, fossiles et faune. Accessible à tous les âges. Idéal pour les jours de pluie et les visiteurs amateurs de nature.',
          },
          {
            name: 'Wassermühle Birgel',
            entfernung: 'ca. 20 km',
            badge: 'Musée · Épicerie',
            text: 'Le plus grand centre d\'expériences de moulins d\'Europe se trouve à Birgel. Quatre moulins en activité : moutarde, grain, huile et scierie. Visites réservables, épicerie avec produits régionaux. Une expérience pour tous les âges.',
          },
        ],
      },
      {
        titel: 'Excursions à la Journée',
        eintraege: [
          {
            name: 'Nürburgring',
            entfernung: 'ca. 55 km',
            badge: 'Motorsport',
            text: 'La légendaire Nordschleife – tours touristiques, monde d\'expériences ring°werk et événements de motorsport. Une excursion inoubliable pour les motards et les passionnés d\'automobile.',
          },
          {
            name: 'Cochem an der Mosel',
            entfernung: 'ca. 45 km',
            badge: 'Moselle',
            text: 'Château Reichsburg, vieille ville médiévale et culture viticole au bord de la Moselle. L\'un des plus beaux et des plus célèbres sites de la Moselle moyenne.',
          },
          {
            name: 'Trier',
            entfernung: 'ca. 70 km',
            badge: 'UNESCO',
            text: 'La plus ancienne ville d\'Allemagne avec son patrimoine mondial UNESCO : Porta Nigra, Thermes Impériaux et Maison Karl Marx. Idéal pour une journée culturelle complète.',
          },
        ],
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
    'de': 'Ausflugsziele Vulkaneifel – Wildpark, Höhlen & Nürburgring',
    'en': 'Attractions in the Vulkan Eifel – Wildlife Park, Caves & Nürburgring',
    'nl': 'Bezienswaardigheden Vulkaan Eifel – Wildpark, Grotten & Nürburgring',
    'fr': 'Attractions de l\'Eifel Volcanique – Parc Animalier, Grottes & Nürburgring',
  }
  const descs = {
    'de': 'Ausflugsziele in der Vulkaneifel: Wildpark Daun, Gerolsteiner Felsenmeer, Nürburgring und mehr.',
    'en': 'Attractions in the Vulkan Eifel: Daun Wildlife Park, Gerolstein rock formations, Nürburgring and more.',
    'nl': 'Bezienswaardigheden Vulkaan Eifel: Wildpark Daun, Gerolsteiner Felsenmeer, Nürburgring en meer.',
    'fr': 'Attractions de l\'Eifel volcanique: Parc animalier Daun, Gerolstein, Nürburgring et plus.',
  }
  const l = locale as keyof typeof titles
  return generateSeoMetadata('/guide/ausflugsziele', locale, titles[l] || titles.de, descs[l] || descs.de)
}

export default async function AusflugszielePage() {
  const locale = await getLocale()
  const tr = translations[locale as keyof typeof translations] ?? translations.de

  return (
    <>
      {/* Hero */}
      <section style={{ background: '#1C3A22', color: 'white', padding: '4rem 1.5rem' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <nav style={{ fontSize: '0.78rem', color: '#666', marginBottom: '2rem' }}>
            <Link href="/guide" style={{ color: '#888', textDecoration: 'none' }}>{tr.breadcrumb.guide}</Link>
            {' › '}
            <span>{tr.breadcrumb.page}</span>
          </nav>
          <h1 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 'normal', marginBottom: '1rem', lineHeight: 1.2 }}>
            {tr.heading}
          </h1>
          <p style={{ color: '#AAA', fontSize: '1.05rem', lineHeight: 1.7, maxWidth: '560px' }}>
            {tr.subtitle}
          </p>
        </div>
      </section>

      {/* Kategorien */}
      <div style={{ maxWidth: '960px', margin: '0 auto', padding: '4rem 1.5rem' }}>
        {tr.kategorien.map((kat) => (
          <section key={kat.titel} style={{ marginBottom: '4rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2rem' }}>
              <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '1.4rem', fontWeight: 'normal', color: '#1A1A1A', whiteSpace: 'nowrap' }}>
                {kat.titel}
              </h2>
              <div style={{ flex: 1, height: '1px', background: '#E5E5E5' }} />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {kat.eintraege.map((e) => (
                <div key={e.name} style={{ background: 'white', border: '1px solid #E5E5E5', padding: '1.75rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem', gap: '1rem' }}>
                    <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '1rem', fontWeight: 'normal', color: '#1A1A1A', lineHeight: 1.3 }}>
                      {e.name}
                    </h3>
                    <span style={{ fontSize: '0.72rem', color: '#999', whiteSpace: 'nowrap', flexShrink: 0 }}>
                      {e.entfernung}
                    </span>
                  </div>
                  <p style={{ color: '#555', lineHeight: 1.7, fontSize: '0.88rem', marginBottom: '1rem' }}>
                    {e.text}
                  </p>
                  <span style={{ fontSize: '0.68rem', letterSpacing: '0.08em', textTransform: 'uppercase', border: '1px solid #2D5A35', color: '#2D5A35', padding: '0.2rem 0.6rem' }}>
                    {e.badge}
                  </span>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* Bildergalerie */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '3rem' }}>
          <div>
            <RegionImage
              src="/images/region/wildpark-daun.jpg"
              alt="Wild- & Erlebnispark Daun – Tiere und Natur"
              credit="Wild- & Erlebnispark Daun"
              height={220}
            />
          </div>
          <div>
            <RegionImage
              src="/images/region/adler-wolfspark-kasselburg.jpg"
              alt="Adler- & Wolfspark Kasselburg Pelm – Greifvögel"
              credit="Adler- & Wolfspark Kasselburg"
              height={220}
            />
          </div>
        </div>

        {/* Ulmener Maar */}
        <section style={{ marginBottom: '3rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '1.5rem' }}>
            <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '1.4rem', fontWeight: 'normal', color: '#1A1A1A', whiteSpace: 'nowrap' }}>
              {tr.ulmenerMaarHeading}
            </h2>
            <div style={{ flex: 1, height: '1px', background: '#E5E5E5' }} />
          </div>
          <p style={{ color: '#555', lineHeight: 1.7, fontSize: '0.92rem', marginBottom: '1.5rem', maxWidth: '680px' }}>
            {tr.ulmenerMaarText}
          </p>
          <RegionImage
            src="/images/region/ulmener-maar.jpg"
            alt="Ulmener Maar – jüngster Vulkankrater Deutschlands"
            credit="Eifel Tourismus GmbH, T. Roth"
            height={280}
          />
        </section>

        <div style={{ borderTop: '1px solid #E5E5E5', paddingTop: '2.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/buchung" className="btn-primary">{tr.ctaPrimary}</Link>
          <Link href="/guide/schlechtwetter" className="btn-secondary">{tr.ctaSecondary}</Link>
        </div>
      </div>
    </>
  )
}
