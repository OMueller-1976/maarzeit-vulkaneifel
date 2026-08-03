import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { getLocale } from 'next-intl/server'
import { generateSeoMetadata } from '@/lib/seo';

const metaTitles: Record<string, string> = {
  de: 'Tagesausflug nach Cochem an der Mosel – 45 km von Kirchweiler',
  en: 'Day Trip to Cochem on the Moselle – 45 km from Kirchweiler',
  nl: 'Daguitstap naar Cochem aan de Moezel – 45 km van Kirchweiler',
  fr: 'Excursion à Cochem sur la Moselle – 45 km de Kirchweiler',
}

const metaDescriptions: Record<string, string> = {
  de: 'Cochem an der Mosel: Reichsburg, Altstadt, Weinkultur und Moselpromenade. Nur 45 km von der Ferienwohnung in der Vulkaneifel entfernt.',
  en: 'Cochem on the Moselle: Reichsburg, old town, wine culture and Moselle promenade. Only 45 km from the holiday apartment in the Vulkan Eifel.',
  nl: 'Cochem aan de Moezel: Reichsburg, oude stad, wijncultuur en Moezelprommenade. Slechts 45 km van het vakantieappartement in de Vulkaan Eifel.',
  fr: 'Cochem sur la Moselle: Reichsburg, vieille ville, culture viticole et promenade de la Moselle. À seulement 45 km de l\'appartement dans l\'Eifel volcanique.',
}

const schema = {
  "@context": "https://schema.org",
  "@type": "TouristAttraction",
  "name": "Cochem an der Mosel",
  "description": "Malerische Moselstadt mit Reichsburg, mittelalterlicher Altstadt, Weinkultur und Moselpromenade. 45 km ab Kirchweiler.",
  "url": "https://cochem.de",
  "touristType": ["Kultur", "Wein", "Geschichte"],
  "geo": { "@type": "GeoCoordinates", "latitude": 50.1474, "longitude": 7.1677 }
}

const translations = {
  de: {
    breadcrumb: 'Specials',
    pageTitle: 'Cochem an der Mosel',
    distance: 'ca. 45 km · ca. 45 Minuten ab Kirchweiler',
    intro: 'Cochem gilt als eine der schönsten Kleinstädte Deutschlands – und das zu Recht. Die Reichsburg hoch über dem Moseltal, die verwinkelten Altstadtgassen, der Duft von Moselwein und die Promenade entlang des Flusses: Cochem ist ein Tagesausflug, der bleibt. Von unserer Ferienwohnung in Kirchweiler sind es nur rund 45 Kilometer – eine knappe dreiviertel Stunde durch die Eifellandschaft hinunter ins Moseltal.',
    sections: [
      {
        title: 'Reichsburg Cochem',
        paras: [
          'Wahrzeichen der Stadt und weithin sichtbar thront die Reichsburg Cochem auf einem Felsen über dem Moseltal. Die heutige Gestalt der Burg geht auf einen Wiederaufbau im 19. Jahrhundert zurück, nachdem die ursprüngliche Anlage im Pfälzischen Erbfolgekrieg im Jahr 1689 zerstört worden war. Der Wiederaufbau erfolgte im neugotischen Stil und verleiht der Burg ihr romantisches Erscheinungsbild.',
          'Geführte Touren durch die Innenräume der Burg werden täglich angeboten und geben Einblick in die mittelalterliche Geschichte der Region. Besonders sehenswert sind der Rittersaal, die historischen Wohnräume und der Ausblick von der Burgterrasse über das Moseltal. Der Aufstieg zur Burg dauert zu Fuß etwa 15 Minuten und führt durch den historischen Burgweg.',
        ],
      },
      {
        title: 'Die Altstadt von Cochem',
        paras: [
          'Unterhalb der Burg erstreckt sich Cochems charmante Altstadt mit ihren engen Gassen, Fachwerkhäusern und dem lebhaften Marktplatz. Hier reihen sich Weinlokale, Cafés und Boutiquen aneinander – ideal für einen gemütlichen Stadtbummel ohne Eile. Besonders der Bereich rund um den Marktplatz und die Balduinstraße lohnt sich für einen ausgedehnten Spaziergang.',
          'Cochem hat trotz des Tourismus seinen Charakter behalten: Die Altstadt ist nicht überlaufen kitschig, sondern lebt von echter Mosel-Gastlichkeit und einem natürlichen Selbstverständnis als Weinort.',
        ],
      },
      {
        title: 'Moselpromenade & Schifffahrten',
        paras: [
          'Die Promenade entlang der Mosel lädt zu ausgedehnten Spaziergängen ein – mit Blick auf die sanften Weinberghänge, die sich zu beiden Seiten des Flusses erstrecken. Im Sommer herrscht buntes Treiben auf dem Wasser: Ausflugsdampfer, Hausboote und Kanus beleben die Mosel.',
          'Von Cochem aus starten regelmäßig Schifffahrten auf der Mosel, die je nach Anbieter einstündige Panoramafahrten bis hin zu mehrstündigen Touren mit Zwischenstopps anbieten. Eine Bootsfahrt bietet einen ganz anderen Blickwinkel auf die Weinberge und Burgen entlang des Flusses.',
        ],
      },
      {
        title: 'Weinkultur an der Mosel',
        paras: [
          'Die Mosel ist eine der renommiertesten Weinregionen Deutschlands. Der Riesling, der auf den steilen Schieferhängen gedeiht, gilt als einer der komplexesten Weißweine weltweit. In Cochem und Umgebung gibt es zahlreiche Weingüter, die Verkostungen und Kellerführungen anbieten – ein Erlebnis, das weit über das bloße Trinken hinausgeht.',
          'Vinotheken in der Altstadt ermöglichen einen strukturierten Einstieg in die Moselwein-Welt, ohne gleich ein ganzes Weingut besuchen zu müssen. Probieren Sie sich durch verschiedene Rieslinge der Umgebung – trocken, halbtrocken und fruchtig – und lassen Sie sich beraten. Die Winzer an der Mosel nehmen sich gerne Zeit für ihre Gäste.',
        ],
      },
      {
        title: 'Essen & Trinken in Cochem',
        paras: [
          'Cochems gastronomische Szene ist geprägt von der Moselküche: Fischgerichte, Wild aus den Eifelwäldern, regionaler Sauerbraten und natürlich Riesling als Begleiter. Entlang der Promenade und in der Altstadt gibt es eine gute Auswahl an Restaurants, die regionale Küche mit Moselblick verbinden.',
          'Besonders empfehlenswert ist ein Mittagessen in einer der traditionellen Weinstuben – unkompliziert, ehrlich und mit guten Hausweinen. Am Nachmittag lässt es sich in einem der Cafés am Marktplatz mit Kaffee und Kuchen gut aushalten, bevor es zurück ins Eifeltal geht.',
        ],
      },
      {
        title: 'Seilbahn auf den Pinnerberg',
        paras: [
          'Eine Besonderheit in Cochem ist die Sesselbahn, die auf den Pinnerberg führt – einen der Weinberghügel oberhalb der Stadt. Oben angekommen eröffnet sich ein weiter Panoramablick über Cochem, die Moselschleife und die umliegenden Weinberge. Auf dem Pinnerberg befindet sich außerdem die Pinnerkreuzkapelle sowie ein Aussichtspunkt mit Biergarten.',
        ],
      },
      {
        title: 'Anreise ab Kirchweiler',
        paras: [
          'Von Kirchweiler fahren Sie Richtung Ulmen, dann über Kaisersesch ins Moseltal. Die Route führt durch wunderschöne Eifellandschaft und bietet bereits unterwegs schöne Ausblicke. Kurz vor Cochem schlängelt sich die Straße ins Moseltal – ein malerischer Anfahrtsweg. Parken Sie am besten in einem der Parkhäuser am Stadtrand, von wo aus Sie die Altstadt bequem zu Fuß erreichen.',
        ],
      },
      {
        title: 'Kombinationstipps',
        paras: [
          'Wer einen Tagesausflug verlängern möchte, kann Cochem wunderbar mit weiteren Moselorten kombinieren. Das malerische Beilstein mit seiner Burgruine liegt nur wenige Kilometer flussaufwärts und ist deutlich ruhiger als Cochem. Weiter südlich lockt die Moselschleife bei Bremm – eine der steilsten Stellen des Flusses, ideal für einen kurzen Aussichtsstopp. Auch Traben-Trarbach mit seiner Jugendstilarchitektur und den großen Weinhandelshäusern ist einen Abstecher wert.',
        ],
      },
    ],
    ctaText: 'Planen Sie Ihren Urlaub in der Vulkaneifel mit Tagesausflug nach Cochem? Unsere Ferienwohnung in Kirchweiler liegt nur 45 km entfernt.',
    ctaBtn: 'Jetzt buchen',
    ctaBack: 'Alle Specials',
  },
  en: {
    breadcrumb: 'Specials',
    pageTitle: 'Cochem on the Moselle',
    distance: 'approx. 45 km · approx. 45 minutes from Kirchweiler',
    intro: 'Cochem is considered one of the most beautiful small towns in Germany – and rightly so. The Reichsburg high above the Moselle valley, the winding old town alleys, the scent of Moselle wine and the promenade along the river: Cochem is a day trip that stays with you. From our holiday apartment in Kirchweiler it\'s only about 45 kilometres – just under three quarters of an hour through the Eifel landscape down into the Moselle valley.',
    sections: [
      {
        title: 'Reichsburg Cochem',
        paras: [
          'The landmark of the town, visible from far away, the Reichsburg Cochem sits on a rock above the Moselle valley. The castle\'s current appearance dates back to a reconstruction in the 19th century, after the original complex was destroyed in the War of the Palatine Succession in 1689. The reconstruction was carried out in the neo-Gothic style, giving the castle its romantic appearance.',
          'Guided tours through the interior of the castle are offered daily and provide an insight into the medieval history of the region. Particularly worth seeing are the knights\' hall, the historic living quarters and the view from the castle terrace over the Moselle valley. The walk up to the castle takes about 15 minutes and leads through the historic castle path.',
        ],
      },
      {
        title: 'The Old Town of Cochem',
        paras: [
          'Below the castle stretches Cochem\'s charming old town with its narrow alleys, half-timbered houses and lively market square. Wine bars, cafés and boutiques line up here – ideal for a leisurely stroll without rush. Particularly the area around the market square and Balduinstraße is worth an extended walk.',
          'Despite tourism, Cochem has retained its character: the old town is not overtly kitsch but lives from genuine Moselle hospitality and a natural self-understanding as a wine town.',
        ],
      },
      {
        title: 'Moselle Promenade & Boat Trips',
        paras: [
          'The promenade along the Moselle invites extended walks – with views of the gentle vineyard slopes stretching on both sides of the river. In summer there is colourful activity on the water: pleasure steamers, houseboats and canoes enliven the Moselle.',
          'From Cochem, regular boat trips on the Moselle depart, offering one-hour panoramic rides to multi-hour tours with intermediate stops depending on the operator. A boat trip offers a completely different perspective on the vineyards and castles along the river.',
        ],
      },
      {
        title: 'Wine Culture on the Moselle',
        paras: [
          'The Moselle is one of Germany\'s most prestigious wine regions. The Riesling that thrives on the steep slate slopes is considered one of the most complex white wines in the world. In Cochem and the surrounding area there are numerous wineries offering tastings and cellar tours – an experience that goes far beyond mere drinking.',
          'Wine shops in the old town allow a structured introduction to the world of Moselle wines without having to visit a whole winery. Sample various Rieslings from the surrounding area – dry, off-dry and fruity – and let yourself be advised. The winemakers on the Moselle are happy to take time for their guests.',
        ],
      },
      {
        title: 'Eating & Drinking in Cochem',
        paras: [
          'Cochem\'s gastronomic scene is shaped by Moselle cuisine: fish dishes, game from the Eifel forests, regional Sauerbraten and of course Riesling as an accompaniment. Along the promenade and in the old town there is a good selection of restaurants combining regional cuisine with Moselle views.',
          'Particularly recommended is lunch in one of the traditional wine taverns – straightforward, honest and with good house wines. In the afternoon you can relax in one of the cafés on the market square with coffee and cake before heading back to the Eifel valley.',
        ],
      },
      {
        title: 'Chair Lift to Pinnerberg',
        paras: [
          'A special feature of Cochem is the chair lift that leads to the Pinnerberg – one of the vineyard hills above the town. At the top, a wide panoramic view opens up over Cochem, the Moselle bend and the surrounding vineyards. The Pinnerberg also has the Pinnerkreuzkapelle chapel and a viewpoint with beer garden.',
        ],
      },
      {
        title: 'Getting Here from Kirchweiler',
        paras: [
          'From Kirchweiler, drive towards Ulmen, then via Kaisersesch into the Moselle valley. The route passes through beautiful Eifel landscape and already offers lovely views along the way. Shortly before Cochem the road winds down into the Moselle valley – a picturesque approach. Best to park in one of the car parks on the outskirts of town, from where you can easily reach the old town on foot.',
        ],
      },
      {
        title: 'Combination Tips',
        paras: [
          'Those who want to extend a day trip can wonderfully combine Cochem with other Moselle towns. The picturesque Beilstein with its castle ruins is only a few kilometres upstream and is significantly quieter than Cochem. Further south, the Moselle bend at Bremm beckons – one of the steepest stretches of the river, ideal for a short viewing stop. Traben-Trarbach with its Art Nouveau architecture and large wine trading houses is also worth a detour.',
        ],
      },
    ],
    ctaText: 'Planning your holiday in the Vulkan Eifel with a day trip to Cochem? Our holiday apartment in Kirchweiler is only 45 km away.',
    ctaBtn: 'Book Now',
    ctaBack: 'All Specials',
  },
  nl: {
    breadcrumb: 'Specials',
    pageTitle: 'Cochem aan de Moezel',
    distance: 'ca. 45 km · ca. 45 minuten van Kirchweiler',
    intro: 'Cochem geldt als een van de mooiste kleine steden van Duitsland – en terecht. De Reichsburg hoog boven het Moezeldal, de kronkelende steegjes van de oude stad, de geur van Moezelwijn en de promenade langs de rivier: Cochem is een daguitstap die bijblijft. Vanuit ons vakantieappartement in Kirchweiler is het slechts zo\'n 45 kilometer – nog geen driekwartier door het Eifellandschap het Moezeldal in.',
    sections: [
      {
        title: 'Reichsburg Cochem',
        paras: [
          'Het landmark van de stad, van verre zichtbaar, troont de Reichsburg Cochem op een rots boven het Moezeldal. De huidige verschijningsvorm van het kasteel dateert uit een reconstructie in de 19e eeuw, nadat het oorspronkelijke complex in 1689 tijdens de Paltsische Successieoorlog was vernietigd. De reconstructie vond plaats in neogotische stijl, wat het kasteel zijn romantische uitstraling geeft.',
          'Dagelijks worden rondleidingen door het interieur van het kasteel aangeboden, die inzicht geven in de middeleeuwse geschiedenis van de regio. Bijzonder bezienswaardig zijn de ridderzaal, de historische woonvertrekken en het uitzicht vanaf het kasteelterras over het Moezeldal. De wandeling naar het kasteel duurt ongeveer 15 minuten en leidt door de historische burchtweg.',
        ],
      },
      {
        title: 'De Oude Stad van Cochem',
        paras: [
          'Onder het kasteel strekt zich Cochems charmante oude stad uit met zijn smalle steegjes, vakwerkhuizen en het levendige marktplein. Hier zijn wijnlokalen, cafés en boetieks naast elkaar te vinden – ideaal voor een gezellige stadswandeling zonder haast. Vooral het gebied rond het marktplein en de Balduinstraße is de moeite waard voor een uitgebreide wandeling.',
          'Ondanks het toerisme heeft Cochem zijn karakter behouden: de oude stad is niet overdreven kitscherig, maar leeft van echte Moezelgastvrijheid en een natuurlijk zelfbegrip als wijnplaats.',
        ],
      },
      {
        title: 'Moezelprommenade & Boottochten',
        paras: [
          'De promenade langs de Moezel nodigt uit tot uitgebreide wandelingen – met uitzicht op de zachte wijnberghelling die zich aan beide zijden van de rivier uitstrekt. In de zomer is er kleurrijke bedrijvigheid op het water: plezierbootjes, woonboten en kano\'s brengen de Moezel tot leven.',
          'Vanuit Cochem vertrekken regelmatig boottochten op de Moezel, die afhankelijk van de aanbieder éénurige panoramaritjes tot meerdere uren durende tochten met tussenstops aanbieden. Een boottocht biedt een heel ander perspectief op de wijngaarden en kastelen langs de rivier.',
        ],
      },
      {
        title: 'Wijncultuur aan de Moezel',
        paras: [
          'De Moezel is een van de meest prestigieuze wijnregio\'s van Duitsland. De Riesling die gedijt op de steile leisteenhellingen, geldt als een van de meest complexe witte wijnen ter wereld. In Cochem en omgeving zijn er talrijke wijnhuizen die proeverijen en kelderrondleidingen aanbieden – een ervaring die veel verder gaat dan alleen drinken.',
          'Wijnwinkels in de oude stad bieden een gestructureerde kennismaking met de wereld van de Moezelwijnen, zonder meteen een heel wijnhuis te moeten bezoeken. Proef verschillende Rieslings uit de omgeving – droog, halfdroog en fruitig – en laat u adviseren. De wijnmakers aan de Moezel nemen graag de tijd voor hun gasten.',
        ],
      },
      {
        title: 'Eten & Drinken in Cochem',
        paras: [
          'Cochems gastronomische scene wordt gekenmerkt door de Moezelkeuken: visgerechten, wild uit de Eifelse bossen, regionale Sauerbraten en natuurlijk Riesling als begeleider. Langs de promenade en in de oude stad is er een goede keuze aan restaurants die regionale keuken combineren met uitzicht op de Moezel.',
          'Bijzonder aanbevolen is een lunch in een van de traditionele wijnlokalen – ongecompliceerd, eerlijk en met goede huiswijnen. \'s Middags kunt u uitrusten in een van de cafés op het marktplein met koffie en gebak, voordat u terugkeert naar het Eifeltal.',
        ],
      },
      {
        title: 'Stoeltjeslift naar de Pinnerberg',
        paras: [
          'Een bijzonderheid in Cochem is de stoeltjeslift die naar de Pinnerberg leidt – een van de wijnbergsheuvels boven de stad. Boven aangekomen opent zich een wijds panorama over Cochem, de Moezelmeander en de omliggende wijngaarden. Op de Pinnerberg bevindt zich ook de Pinnerkreuzkapelle en een uitkijkpunt met biergarten.',
        ],
      },
      {
        title: 'Reizen vanuit Kirchweiler',
        paras: [
          'Vanuit Kirchweiler rijdt u richting Ulmen, dan via Kaisersesch het Moezeldal in. De route voert door prachtig Eifellandschap en biedt onderweg al mooie uitzichten. Vlak voor Cochem slingert de weg het Moezeldal in – een schilderachtige aanrijweg. Parkeer bij voorkeur in een van de parkeergarages aan de rand van de stad, vanwaar u de oude stad comfortabel te voet kunt bereiken.',
        ],
      },
      {
        title: 'Combinatietips',
        paras: [
          'Wie een daguitstap wil uitbreiden, kan Cochem prachtig combineren met andere Moezeldorpen. Het schilderachtige Beilstein met zijn burgruïne ligt slechts enkele kilometers stroomopwaarts en is aanzienlijk rustiger dan Cochem. Verder zuidelijk lonkt de Moezelbocht bij Bremm – een van de steilste plekken van de rivier, ideaal voor een korte kijkstop. Ook Traben-Trarbach met zijn Jugendstilarchitectuur en grote wijnhandelhuizen is een bezoek waard.',
        ],
      },
    ],
    ctaText: 'Plant u uw vakantie in de Vulkaan Eifel met een daguitstap naar Cochem? Ons vakantieappartement in Kirchweiler ligt op slechts 45 km.',
    ctaBtn: 'Nu boeken',
    ctaBack: 'Alle Specials',
  },
  fr: {
    breadcrumb: 'Specials',
    pageTitle: 'Cochem sur la Moselle',
    distance: 'environ 45 km · environ 45 minutes de Kirchweiler',
    intro: "Cochem est considérée comme l'une des plus belles petites villes d'Allemagne – et à juste titre. Le château Reichsburg haut au-dessus de la vallée de la Moselle, les ruelles sinueuses de la vieille ville, le parfum du vin de Moselle et la promenade le long du fleuve : Cochem est une excursion d'une journée qui reste dans les mémoires. Depuis notre appartement de vacances à Kirchweiler, il n'y a qu'environ 45 kilomètres – à peine trois quarts d'heure à travers le paysage de l'Eifel jusqu'à la vallée de la Moselle.",
    sections: [
      {
        title: 'Le Château Reichsburg Cochem',
        paras: [
          "Le symbole de la ville, visible de loin, le Reichsburg Cochem trône sur un rocher au-dessus de la vallée de la Moselle. L'aspect actuel du château remonte à une reconstruction au XIXe siècle, après que le complexe original eut été détruit lors de la Guerre de Succession du Palatinat en 1689. La reconstruction fut réalisée dans le style néo-gothique, donnant au château son apparence romantique.",
          "Des visites guidées à travers l'intérieur du château sont proposées quotidiennement et donnent un aperçu de l'histoire médiévale de la région. Particulièrement à voir : la salle des chevaliers, les appartements historiques et la vue depuis la terrasse du château sur la vallée de la Moselle. La montée au château dure environ 15 minutes à pied et passe par le chemin historique du château.",
        ],
      },
      {
        title: 'La Vieille Ville de Cochem',
        paras: [
          "Sous le château s'étend la charmante vieille ville de Cochem avec ses ruelles étroites, ses maisons à colombages et sa place du marché animée. Caves à vin, cafés et boutiques se succèdent ici – idéal pour une promenade détendue sans précipitation. La zone autour de la place du marché et de la Balduinstraße mérite particulièrement une longue promenade.",
          "Malgré le tourisme, Cochem a conservé son caractère : la vieille ville n'est pas excessivement kitch mais vit d'une véritable hospitalité mosellane et d'une conscience naturelle en tant que ville viticole.",
        ],
      },
      {
        title: 'Promenade de la Moselle & Croisières',
        paras: [
          "La promenade le long de la Moselle invite à de longues promenades – avec vue sur les douces pentes des vignobles qui s'étendent des deux côtés du fleuve. En été, il y a une activité colorée sur l'eau : bateaux d'excursion, péniches et canoës animent la Moselle.",
          "Depuis Cochem, des croisières régulières sur la Moselle partent régulièrement, proposant selon l'opérateur des panoramas d'une heure à des circuits de plusieurs heures avec des arrêts intermédiaires. Une croisière offre un point de vue tout à fait différent sur les vignobles et les châteaux le long du fleuve.",
        ],
      },
      {
        title: 'Culture Viticole sur la Moselle',
        paras: [
          "La Moselle est l'une des régions viticoles les plus prestigieuses d'Allemagne. Le Riesling qui prospère sur les pentes escarpées en ardoise est considéré comme l'un des vins blancs les plus complexes au monde. À Cochem et dans les environs, de nombreux domaines viticoles proposent des dégustations et des visites de caves – une expérience qui va bien au-delà du simple fait de boire.",
          "Les vinotèques dans la vieille ville permettent une introduction structurée au monde des vins de la Moselle sans avoir à visiter tout un domaine. Goûtez différents Rieslings des environs – secs, demi-secs et fruités – et laissez-vous conseiller. Les vignerons de la Moselle prennent volontiers le temps pour leurs hôtes.",
        ],
      },
      {
        title: 'Manger & Boire à Cochem',
        paras: [
          "La scène gastronomique de Cochem est marquée par la cuisine mosellane : plats de poisson, gibier des forêts de l'Eifel, Sauerbraten régional et bien sûr Riesling comme accompagnement. Le long de la promenade et dans la vieille ville, il y a un bon choix de restaurants combinant cuisine régionale avec vue sur la Moselle.",
          "Particulièrement recommandé : un déjeuner dans l'une des caves à vin traditionnelles – sans prétention, honnête et avec de bons vins maison. L'après-midi, on peut se détendre dans l'un des cafés sur la place du marché avec un café et des gâteaux avant de rentrer dans la vallée de l'Eifel.",
        ],
      },
      {
        title: 'Télécabine vers le Pinnerberg',
        paras: [
          "Une particularité de Cochem est le télésiège qui mène au Pinnerberg – l'une des collines de vignobles au-dessus de la ville. Une fois en haut, un large panorama s'ouvre sur Cochem, le méandre de la Moselle et les vignobles environnants. Le Pinnerberg abrite également la chapelle Pinnerkreuz et un point de vue avec jardin à bière.",
        ],
      },
      {
        title: 'Itinéraire depuis Kirchweiler',
        paras: [
          "Depuis Kirchweiler, prenez la direction d'Ulmen, puis via Kaisersesch dans la vallée de la Moselle. L'itinéraire traverse un magnifique paysage de l'Eifel et offre déjà de belles vues en chemin. Juste avant Cochem, la route serpente dans la vallée de la Moselle – une approche pittoresque. Il vaut mieux se garer dans l'un des parkings en périphérie de la ville, d'où vous pouvez atteindre confortablement la vieille ville à pied.",
        ],
      },
      {
        title: 'Conseils de Combinaison',
        paras: [
          "Ceux qui souhaitent prolonger une excursion d'une journée peuvent merveilleusement combiner Cochem avec d'autres villes mosellanes. Le pittoresque Beilstein avec ses ruines de château se trouve à seulement quelques kilomètres en amont et est nettement plus calme que Cochem. Plus au sud, le méandre de la Moselle à Bremm est tentant – l'un des endroits les plus escarpés du fleuve, idéal pour un bref arrêt panoramique. Traben-Trarbach avec son architecture Art Nouveau et ses grandes maisons de négoce de vin mérite également un détour.",
        ],
      },
    ],
    ctaText: "Planifiez vos vacances dans l'Eifel volcanique avec une excursion d'une journée à Cochem ? Notre appartement de vacances à Kirchweiler n'est qu'à 45 km.",
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
    'de': 'Ausflug Cochem an der Mosel – 45 km ab Kirchweiler',
    'en': 'Day Trip to Cochem on the Moselle – 45 km from Kirchweiler',
    'nl': 'Daguitstap naar Cochem aan de Moezel – 45 km van Kirchweiler',
    'fr': 'Excursion à Cochem sur la Moselle – 45 km de Kirchweiler',
  }
  const descs = {
    'de': 'Cochem an der Mosel: Reichsburg, Weinstuben und pittoreske Altstadt – nur 45 km entfernt.',
    'en': 'Cochem on the Moselle: Reichsburg castle, wine taverns and picturesque old town – only 45 km away.',
    'nl': 'Cochem aan de Moezel: Reichsburg, wijnkelders en pittoreske oude stad – slechts 45 km weg.',
    'fr': 'Cochem sur la Moselle: château Reichsburg, caves à vin et vieille ville pittoresque – à 45 km.',
  }
  const l = locale as keyof typeof titles
  return generateSeoMetadata('/specials/cochem', locale, titles[l] || titles.de, descs[l] || descs.de)
}

export default async function CochemPage() {
  const locale = await getLocale()
  const tr = translations[locale as keyof typeof translations] ?? translations.de

  return (
    <>
      <Script id="schema-tourist" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <div className="max-w-3xl mx-auto px-4 py-16">
      <nav className="text-sm text-stone-500 mb-6">
        <Link href="/specials" className="hover:text-green-800">{tr.breadcrumb}</Link>
        {" › "}
        <span>Cochem</span>
      </nav>

      <h1 className="section-title">{tr.pageTitle}</h1>
      <p className="text-stone-500 text-sm mb-8">{tr.distance}</p>

      <div className="space-y-8 text-stone-700 leading-relaxed">

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
