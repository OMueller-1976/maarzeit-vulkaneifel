import type { Metadata } from "next";
import Link from "next/link";
import { getLocale } from 'next-intl/server'
import { generateSeoMetadata } from '@/lib/seo';

const metaTitles: Record<string, string> = {
  de: 'Tagesausflug nach Koblenz – Deutsches Eck & Festung, 85 km',
  en: 'Day Trip to Koblenz – German Corner & Fortress, 85 km',
  nl: 'Daguitstap naar Koblenz – Duits Hoek & Vesting, 85 km',
  fr: 'Excursion à Coblence – Coin Allemand & Forteresse, 85 km',
}

const metaDescriptions: Record<string, string> = {
  de: 'Koblenz: Deutsches Eck, Festung Ehrenbreitstein, Seilbahn und Altstadt. 85 km von der Ferienwohnung in der Vulkaneifel – perfekter Tagesausflug.',
  en: 'Koblenz: German Corner, Ehrenbreitstein Fortress, cable car and old town. 85 km from the holiday apartment in the Vulkan Eifel – perfect day trip.',
  nl: 'Koblenz: Duits Hoek, Vesting Ehrenbreitstein, kabelbaan en oude stad. 85 km van het vakantieappartement in de Vulkaan Eifel – perfecte daguitstap.',
  fr: 'Coblence: Coin Allemand, Forteresse Ehrenbreitstein, téléphérique et vieille ville. 85 km de l\'appartement dans l\'Eifel – excursion idéale.',
}

const translations = {
  de: {
    breadcrumb: 'Specials',
    pageTitle: 'Koblenz',
    distance: 'ca. 85 km · ca. 1 Stunde ab Kirchweiler',
    intro: 'Koblenz ist eine der ältesten Städte Deutschlands – gegründet von den Römern an der Stelle, wo sich Rhein und Mosel vereinen. Dieses einmalige geografische Zusammentreffen zweier großer Flüsse macht die Stadt zu einem unverwechselbaren Reiseziel. Von Kirchweiler aus sind es rund 85 Kilometer und etwa eine Stunde Fahrzeit – gut investierte Zeit für einen abwechslungsreichen Tagesausflug.',
    sections: [
      {
        title: 'Deutsches Eck',
        paras: [
          'Das Wahrzeichen von Koblenz ist das Deutsche Eck – die Landzunge, an der Mosel und Rhein zusammenfließen. Hier thront das monumentale Reiterstandbild Kaiser Wilhelms I. auf einem hohen Sockel und bietet einen weiten Blick über beide Flüsse. Der Platz ist frei zugänglich und lädt zum Verweilen ein.',
          'Vom Deutschen Eck aus überblickt man auch die gegenüberliegende Festung Ehrenbreitstein – im Sommer verbunden durch die Seilbahn, die einen spektakulären Weg hinüber bietet. Das Deutsche Eck ist zugleich Ausgangspunkt für Spaziergänge entlang beider Flussläufe.',
        ],
      },
      {
        title: 'Festung Ehrenbreitstein',
        paras: [
          'Hoch über dem Deutschen Eck thront die Festung Ehrenbreitstein auf einem Felsen mit über 100 Metern Höhe über dem Rhein. Sie gilt als eine der größten erhaltenen Festungsanlagen Deutschlands und beherbergt heute das Landesmuseum Koblenz sowie weitere Ausstellungen. Die Anlage selbst ist schon ein beeindruckendes Baudenkmal, das die strategische Bedeutung dieses Ortes über Jahrhunderte hinweg bezeugt.',
          'Das Panorama von der Festungsmauer auf Koblenz, den Rhein und die umliegenden Hügel ist bemerkenswert. Auf dem Festungsgelände finden regelmäßig Veranstaltungen und Sonderausstellungen statt – ein Blick auf das aktuelle Programm lohnt sich vor dem Besuch.',
        ],
      },
      {
        title: 'Seilbahn Koblenz',
        paras: [
          'Die Koblenzer Seilbahn verbindet das Rheinufer nahe dem Deutschen Eck mit der Festung Ehrenbreitstein und bietet dabei einen einzigartigen Blick aus der Luft über den Rhein. Die Überfahrt dauert wenige Minuten und ist selbst ein Erlebnis – besonders eindrucksvoll ist die Perspektive auf das Zusammenfließen von Rhein und Mosel von oben. Die Seilbahn verkehrt saisonal; Öffnungszeiten und Preise sind der aktuellen Website zu entnehmen.',
        ],
      },
      {
        title: 'Altstadt Koblenz',
        paras: [
          'Koblenzer Altstadt ist kompakt, angenehm zu Fuß zu erkunden und reich an historischer Substanz. Der Münzplatz, der Jesuiten-Platz mit seiner barocken Kirche und der Florinsmarkt sind die zentralen Plätze, an denen sich das Stadtleben abspielt. Cafés, Restaurants und kleine Geschäfte reihen sich entlang der Fußgängerzonen und Gassen aneinander.',
          'Besonders sehenswert ist die Liebfrauenkirche am Florinsmarkt – eine der schönsten romanischen Kirchen am Mittelrhein. Daneben lohnt sich ein Blick auf das Kurfürstliche Schloss, das direkt am Rhein liegt und heute als Kulturveranstaltungsort genutzt wird.',
        ],
      },
      {
        title: 'Rhein & Mosel erleben',
        paras: [
          'Koblenz ist ein hervorragender Ausgangspunkt für Schifffahrten auf Rhein und Mosel. Von hier starten Ausflugsboote in beide Richtungen: rheinaufwärts in Richtung Boppard und Loreley, moselseitig nach Cochem und Bernkastel-Kues. Wer nur einen kurzen Blick auf beide Flüsse vom Wasser aus werfen möchte, findet auch kürzere Rundfahrten. Die Rheinanlagen – die breite Uferpromenade auf der Koblenzer Seite – sind ideal für ausgedehnte Spaziergänge.',
        ],
      },
      {
        title: 'Kulturmeile',
        paras: [
          'Koblenz verfügt über eine bemerkenswerte Museumsdichte. Das Ludwig Museum im Kurfürstlichen Schloss zeigt internationale Kunst nach 1945. Das Mittelrhein-Museum beherbergt eine bedeutende Sammlung zur Kunst- und Kulturgeschichte der Mittelrheinregion. Wer sich für römische Geschichte interessiert, findet im Stadtbereich archäologische Spuren sowie Ausstellungen zur Römerzeit.',
        ],
      },
      {
        title: 'Essen & Trinken',
        paras: [
          'Die Koblenzer Gastronomie ist vielfältig: In der Altstadt finden sich klassische Weinstuben und Brauhäuser, an der Rheinpromenade moderne Restaurants mit Flussblick. Wer regional essen möchte, greift zu Sauerbraten, Döppekooche (einem regionaltypischen Kartoffelauflauf) oder zu Fisch aus dem Rhein. Koblenz liegt im Schnittpunkt zweier Weinregionen – sowohl Mittelrhein-Weine als auch Moselrieslinge stehen auf den Weinkarten.',
        ],
      },
      {
        title: 'Anreise ab Kirchweiler',
        paras: [
          'Von Kirchweiler fahren Sie über die A48 in Richtung Mayen, dann weiter auf der A61 Richtung Koblenz. Die Strecke beträgt rund 85 Kilometer und ist bei normaler Verkehrslage in etwa einer Stunde zu bewältigen. Parken in der Koblenzer Innenstadt ist in mehreren Parkhäusern möglich – das Parkhaus am Deutschen Eck oder am Rheinufer bieten günstige Standorte für Besucher.',
        ],
      },
      {
        title: 'Kombinationstipps',
        paras: [
          'Wer den Ausflug ausweiten möchte, kann Koblenz gut mit einem Stopp in Boppard verbinden – einer charmanten Kleinstadt am Rhein mit der schönsten Rheinschleife Deutschlands. Von Boppard gibt es außerdem einen Sessellift auf das Hochplateau mit herrlichem Panoramablick. Alternativ bietet sich die Fahrt entlang der Moselstrecke zurück Richtung Cochem an – so entsteht aus dem Tagesausflug eine kleine Rundreise durch zwei Flusstäler.',
        ],
      },
    ],
    ctaText: 'Koblenz als Tagesausflug ab der Vulkaneifel: Unsere Ferienwohnung in Kirchweiler liegt nur ca. 85 km entfernt.',
    ctaBtn: 'Jetzt buchen',
    ctaBack: 'Alle Specials',
  },
  en: {
    breadcrumb: 'Specials',
    pageTitle: 'Koblenz',
    distance: 'approx. 85 km · approx. 1 hour from Kirchweiler',
    intro: 'Koblenz is one of Germany\'s oldest cities – founded by the Romans at the point where the Rhine and Moselle meet. This unique geographical confluence of two great rivers makes the city an unmistakeable destination. From Kirchweiler it\'s about 85 kilometres and approximately one hour\'s drive – time well spent for a varied day trip.',
    sections: [
      {
        title: 'German Corner',
        paras: [
          'The landmark of Koblenz is the German Corner – the spit of land where the Moselle and Rhine converge. Here the monumental equestrian statue of Emperor Wilhelm I stands on a high plinth and offers a wide view over both rivers. The area is freely accessible and invites you to linger.',
          'From the German Corner you can also overlook the Ehrenbreitstein Fortress on the opposite bank – connected in summer by the cable car, which offers a spectacular crossing. The German Corner is also the starting point for walks along both rivers.',
        ],
      },
      {
        title: 'Ehrenbreitstein Fortress',
        paras: [
          'High above the German Corner, Ehrenbreitstein Fortress sits on a rock more than 100 metres above the Rhine. It is considered one of the largest preserved fortress complexes in Germany and today houses the Rhineland-Palatinate State Museum as well as further exhibitions. The complex itself is already an impressive architectural monument that testifies to the strategic importance of this location over centuries.',
          'The panorama from the fortress walls over Koblenz, the Rhine and the surrounding hills is remarkable. Events and special exhibitions regularly take place on the fortress grounds – it\'s worth checking the current programme before your visit.',
        ],
      },
      {
        title: 'Koblenz Cable Car',
        paras: [
          'The Koblenz cable car connects the Rhine bank near the German Corner with Ehrenbreitstein Fortress, offering a unique aerial view over the Rhine. The crossing takes just a few minutes and is an experience in itself – particularly impressive is the perspective from above on the confluence of Rhine and Moselle. The cable car operates seasonally; opening times and prices can be found on the current website.',
        ],
      },
      {
        title: 'Koblenz Old Town',
        paras: [
          'Koblenz old town is compact, pleasant to explore on foot and rich in historic substance. Münzplatz, Jesuitenplatz with its baroque church and Florinsmarkt are the central squares where city life plays out. Cafés, restaurants and small shops line the pedestrian zones and alleys.',
          'Particularly worth seeing is the Liebfrauenkirche at Florinsmarkt – one of the most beautiful Romanesque churches on the Middle Rhine. Also worth a look is the Electoral Palace, which stands directly on the Rhine and is today used as a cultural event venue.',
        ],
      },
      {
        title: 'Rhine & Moselle Experience',
        paras: [
          'Koblenz is an excellent starting point for boat trips on the Rhine and Moselle. From here, excursion boats depart in both directions: up the Rhine towards Boppard and the Loreley, along the Moselle towards Cochem and Bernkastel-Kues. Those who just want a brief view of both rivers from the water will also find shorter cruises. The Rhine gardens – the wide waterfront promenade on the Koblenz side – are ideal for extended walks.',
        ],
      },
      {
        title: 'Cultural Mile',
        paras: [
          'Koblenz has a remarkable concentration of museums. The Ludwig Museum in the Electoral Palace shows international art since 1945. The Middle Rhine Museum houses a significant collection on the art and cultural history of the Middle Rhine region. Those interested in Roman history will find archaeological traces in the city area as well as exhibitions on the Roman period.',
        ],
      },
      {
        title: 'Eating & Drinking',
        paras: [
          'Koblenz\'s gastronomy is diverse: in the old town you\'ll find classic wine taverns and breweries, along the Rhine promenade modern restaurants with river views. Those who want to eat regionally try Sauerbraten, Döppekooche (a regional potato bake) or fish from the Rhine. Koblenz sits at the intersection of two wine regions – both Middle Rhine wines and Moselle Rieslings appear on the wine lists.',
        ],
      },
      {
        title: 'Getting Here from Kirchweiler',
        paras: [
          'From Kirchweiler, take the A48 towards Mayen, then continue on the A61 towards Koblenz. The route is about 85 kilometres and can be covered in approximately one hour in normal traffic. Parking in Koblenz city centre is available in several car parks – the car park at the German Corner or on the Rhine bank offer convenient locations for visitors.',
        ],
      },
      {
        title: 'Combination Tips',
        paras: [
          'Those who want to extend the trip can combine Koblenz well with a stop in Boppard – a charming small town on the Rhine with Germany\'s most beautiful Rhine bend. From Boppard there is also a chair lift to the high plateau with magnificent panoramic views. Alternatively, the drive along the Moselle route back towards Cochem turns the day trip into a small round trip through two river valleys.',
        ],
      },
    ],
    ctaText: 'Koblenz as a day trip from the Vulkan Eifel: our holiday apartment in Kirchweiler is only approx. 85 km away.',
    ctaBtn: 'Book Now',
    ctaBack: 'All Specials',
  },
  nl: {
    breadcrumb: 'Specials',
    pageTitle: 'Koblenz',
    distance: 'ca. 85 km · ca. 1 uur van Kirchweiler',
    intro: 'Koblenz is een van de oudste steden van Duitsland – gesticht door de Romeinen op de plek waar Rijn en Moezel samenkomen. Deze unieke geografische samenvloeiing van twee grote rivieren maakt de stad tot een onverwisselbare bestemming. Vanuit Kirchweiler is het zo\'n 85 kilometer en ongeveer een uur rijden – goed bestede tijd voor een afwisselende daguitstap.',
    sections: [
      {
        title: 'Duits Hoek',
        paras: [
          'Het landmark van Koblenz is het Duits Hoek – de landtong waar Moezel en Rijn samenkomen. Hier troont het monumentale ruiterstandbeeld van keizer Wilhelm I op een hoge sokkel en biedt een weids uitzicht over beide rivieren. Het plein is vrij toegankelijk en nodigt uit tot verblijven.',
          'Vanuit het Duits Hoek kun je ook de Vesting Ehrenbreitstein aan de overkant zien – in de zomer verbonden door de kabelbaan, die een spectaculaire oversteek biedt. Het Duits Hoek is ook het vertrekpunt voor wandelingen langs beide rivieroevers.',
        ],
      },
      {
        title: 'Vesting Ehrenbreitstein',
        paras: [
          'Hoog boven het Duits Hoek troont de Vesting Ehrenbreitstein op een rots van meer dan 100 meter boven de Rijn. Het geldt als een van de grootste bewaard gebleven vestingcomplexen van Duitsland en herbergt tegenwoordig het Staatsmuseum van Rijnland-Palts evenals verdere tentoonstellingen. Het complex zelf is al een indrukwekkend architectonisch monument dat de strategische betekenis van deze plek over eeuwen getuigt.',
          'Het panorama vanaf de vestingmuren over Koblenz, de Rijn en de omliggende heuvels is opmerkelijk. Op het vestingterrein vinden regelmatig evenementen en speciale tentoonstellingen plaats – het loont de moeite het actuele programma voor uw bezoek te bekijken.',
        ],
      },
      {
        title: 'Kabelbaan Koblenz',
        paras: [
          'De kabelbaan van Koblenz verbindt de Rijnover bij het Duits Hoek met de Vesting Ehrenbreitstein en biedt daarbij een uniek luchtblik over de Rijn. De oversteek duurt slechts een paar minuten en is zelf al een belevenis – bijzonder indrukwekkend is het perspectief van bovenaf op de samenvloeiing van Rijn en Moezel. De kabelbaan rijdt seizoensgebonden; openingstijden en prijzen zijn te vinden op de actuele website.',
        ],
      },
      {
        title: 'Oude Stad Koblenz',
        paras: [
          'De oude stad van Koblenz is compact, prettig te voet te verkennen en rijk aan historische substantie. De Münzplatz, de Jesuitenplatz met zijn barokke kerk en de Florinsmarkt zijn de centrale pleinen waar het stadsleven zich afspeelt. Cafés, restaurants en kleine winkels rijen zich langs de voetgangerzones en steegjes aaneen.',
          'Bijzonder bezienswaardig is de Liebfrauenkirche bij de Florinsmarkt – een van de mooiste romaanse kerken aan de Middenrijn. Ook de Keurvorstelijke Residentie is een bezoek waard, die direct aan de Rijn ligt en tegenwoordig als culturele evenementenlocatie wordt gebruikt.',
        ],
      },
      {
        title: 'Rijn & Moezel Beleven',
        paras: [
          'Koblenz is een uitstekend vertrekpunt voor boottochten op Rijn en Moezel. Vanuit hier vertrekken rondvaartboten in beide richtingen: stroomopwaarts langs de Rijn richting Boppard en de Loreley, langs de Moezel naar Cochem en Bernkastel-Kues. Wie slechts een korte blik op beide rivieren vanuit het water wil werpen, vindt ook kortere rondvaarten. De Rijnaanlagen – de brede oeverpromenade aan de Koblenzer kant – zijn ideaal voor uitgebreide wandelingen.',
        ],
      },
      {
        title: 'Culturele Mijl',
        paras: [
          'Koblenz beschikt over een opmerkelijke museumconcentratie. Het Ludwig Museum in de Keurvorstelijke Residentie toont internationale kunst na 1945. Het Mittelrhein-Museum herbergt een belangrijke collectie over kunst- en cultuurgeschiedenis van de Middenrijnregio. Wie geïnteresseerd is in de Romeinse geschiedenis, vindt in het stadsgebied archeologische sporen evenals tentoonstellingen over de Romeinse tijd.',
        ],
      },
      {
        title: 'Eten & Drinken',
        paras: [
          'De gastronomie van Koblenz is gevarieerd: in de oude stad zijn klassieke wijnlokalen en brouwerijen te vinden, langs de Rijnpromenade moderne restaurants met rivierperspectief. Wie regionaal wil eten, kiest voor Sauerbraten, Döppekooche (een regionale aardappelschotel) of vis uit de Rijn. Koblenz ligt op het snijpunt van twee wijnregio\'s – zowel Middenrijnwijnen als Moezelrieslings staan op de wijnkaarten.',
        ],
      },
      {
        title: 'Reizen vanuit Kirchweiler',
        paras: [
          'Vanuit Kirchweiler rijdt u via de A48 richting Mayen, dan verder op de A61 richting Koblenz. De route bedraagt zo\'n 85 kilometer en is bij normaal verkeer in ongeveer een uur te bewältigen. Parkeren in het Koblenzer stadscentrum is mogelijk in meerdere parkeergarages – de parkeergarage bij het Duits Hoek of aan de Rijnoever bieden gunstige locaties voor bezoekers.',
        ],
      },
      {
        title: 'Combinatietips',
        paras: [
          'Wie de uitstap wil uitbreiden, kan Koblenz goed combineren met een stop in Boppard – een charmant stadje aan de Rijn met de mooiste Rijnbocht van Duitsland. Vanuit Boppard is er ook een stoeltjeslift naar het hoogplateau met prachtig panoramisch uitzicht. Alternatief biedt de rit langs de Moezelroute terug richting Cochem zich aan – zo ontstaat uit de daguitstap een kleine rondreis door twee rivierdalen.',
        ],
      },
    ],
    ctaText: 'Koblenz als daguitstap vanuit de Vulkaan Eifel: ons vakantieappartement in Kirchweiler ligt op slechts ca. 85 km.',
    ctaBtn: 'Nu boeken',
    ctaBack: 'Alle Specials',
  },
  fr: {
    breadcrumb: 'Specials',
    pageTitle: 'Coblence',
    distance: 'environ 85 km · environ 1 heure de Kirchweiler',
    intro: "Coblence est l'une des plus anciennes villes d'Allemagne – fondée par les Romains à l'endroit où le Rhin et la Moselle se rejoignent. Cette confluence géographique unique de deux grands fleuves fait de la ville une destination incomparable. Depuis Kirchweiler, il y a environ 85 kilomètres et environ une heure de route – du temps bien investi pour une excursion variée d'une journée.",
    sections: [
      {
        title: 'Le Coin Allemand',
        paras: [
          "Le symbole de Coblence est le Coin Allemand – le promontoire de terre où la Moselle et le Rhin confluent. Ici trône la monumentale statue équestre de l'Empereur Guillaume Ier sur un haut socle et offre une vue panoramique sur les deux fleuves. La place est librement accessible et invite à s'y attarder.",
          "Depuis le Coin Allemand, on aperçoit également la Forteresse Ehrenbreitstein sur la rive opposée – reliée en été par le téléphérique, qui offre une traversée spectaculaire. Le Coin Allemand est également le point de départ de promenades le long des deux cours d'eau.",
        ],
      },
      {
        title: 'La Forteresse Ehrenbreitstein',
        paras: [
          "Haut au-dessus du Coin Allemand, la Forteresse Ehrenbreitstein est perchée sur un rocher à plus de 100 mètres au-dessus du Rhin. Elle est considérée comme l'un des plus grands complexes fortifiés préservés d'Allemagne et abrite aujourd'hui le Musée régional de Rhénanie-Palatinat ainsi que d'autres expositions. Le complexe lui-même est déjà un impressionnant monument architectural qui témoigne de l'importance stratégique de ce lieu au fil des siècles.",
          "La vue panoramique depuis les murs de la forteresse sur Coblence, le Rhin et les collines environnantes est remarquable. Des événements et des expositions spéciales ont lieu régulièrement sur le terrain de la forteresse – il vaut la peine de consulter le programme actuel avant votre visite.",
        ],
      },
      {
        title: 'Le Téléphérique de Coblence',
        paras: [
          "Le téléphérique de Coblence relie les bords du Rhin près du Coin Allemand à la Forteresse Ehrenbreitstein et offre une vue aérienne unique sur le Rhin. La traversée ne prend que quelques minutes et est en elle-même une expérience – particulièrement impressionnant est la perspective d'en haut sur la confluence du Rhin et de la Moselle. Le téléphérique fonctionne de façon saisonnière ; les horaires d'ouverture et les prix sont disponibles sur le site actuel.",
        ],
      },
      {
        title: 'La Vieille Ville de Coblence',
        paras: [
          "La vieille ville de Coblence est compacte, agréable à explorer à pied et riche en substance historique. La Münzplatz, la Jesuitenplatz avec son église baroque et la Florinsmarkt sont les places centrales où se déroule la vie de la ville. Cafés, restaurants et petites boutiques se succèdent le long des zones piétonnes et des ruelles.",
          "Particulièrement à voir : l'église Liebfrauenkirche à la Florinsmarkt – l'une des plus belles églises romanes du Rhin moyen. Il vaut également la peine de jeter un œil au Palais Electoral, qui se trouve directement sur le Rhin et est aujourd'hui utilisé comme lieu d'événements culturels.",
        ],
      },
      {
        title: 'Vivre le Rhin & la Moselle',
        paras: [
          "Coblence est un excellent point de départ pour des croisières sur le Rhin et la Moselle. D'ici, des bateaux d'excursion partent dans les deux directions : en remontant le Rhin vers Boppard et la Loreley, le long de la Moselle vers Cochem et Bernkastel-Kues. Ceux qui souhaitent simplement un bref aperçu des deux fleuves depuis l'eau trouveront également de plus courtes croisières. Les jardins du Rhin – la large promenade des berges côté Coblence – sont idéaux pour de longues promenades.",
        ],
      },
      {
        title: 'Avenue Culturelle',
        paras: [
          "Coblence dispose d'une concentration remarquable de musées. Le Musée Ludwig dans le Palais Electoral présente l'art international depuis 1945. Le Musée du Rhin moyen abrite une importante collection sur l'histoire de l'art et de la culture de la région du Rhin moyen. Ceux qui s'intéressent à l'histoire romaine trouveront dans la zone urbaine des traces archéologiques ainsi que des expositions sur l'époque romaine.",
        ],
      },
      {
        title: 'Manger & Boire',
        paras: [
          "La gastronomie de Coblence est diverse : dans la vieille ville on trouve des caves à vin et des brasseries classiques, le long de la promenade du Rhin des restaurants modernes avec vue sur le fleuve. Ceux qui veulent manger régionalement choisissent le Sauerbraten, le Döppekooche (un gratin de pommes de terre régional) ou du poisson du Rhin. Coblence se trouve au carrefour de deux régions viticoles – aussi bien les vins du Rhin moyen que les Rieslings de la Moselle figurent sur les cartes des vins.",
        ],
      },
      {
        title: 'Itinéraire depuis Kirchweiler',
        paras: [
          "Depuis Kirchweiler, prenez l'A48 en direction de Mayen, puis continuez sur l'A61 vers Coblence. L'itinéraire fait environ 85 kilomètres et peut être parcouru en environ une heure dans des conditions de circulation normales. Le stationnement dans le centre-ville de Coblence est possible dans plusieurs parkings – le parking au Coin Allemand ou au bord du Rhin offrent des emplacements pratiques pour les visiteurs.",
        ],
      },
      {
        title: 'Conseils de Combinaison',
        paras: [
          "Ceux qui souhaitent prolonger l'excursion peuvent bien combiner Coblence avec un arrêt à Boppard – une charmante petite ville sur le Rhin avec le plus beau méandre du Rhin d'Allemagne. Depuis Boppard, il y a également un télésiège vers le plateau supérieur avec une vue panoramique magnifique. Alternativement, la conduite le long de la route de la Moselle en retour vers Cochem transforme l'excursion d'une journée en un petit circuit à travers deux vallées fluviales.",
        ],
      },
    ],
    ctaText: "Coblence comme excursion d'une journée depuis l'Eifel volcanique : notre appartement de vacances à Kirchweiler est à seulement environ 85 km.",
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
    'de': 'Ausflug Koblenz – Deutsches Eck & Festung, 85 km',
    'en': 'Day Trip to Koblenz – German Corner & Fortress, 85 km',
    'nl': 'Daguitstap naar Koblenz – Duits Hoek & Vesting, 85 km',
    'fr': 'Excursion à Coblence – Coin Allemand & Forteresse, 85 km',
  }
  const descs = {
    'de': 'Koblenz Tagesausflug: Deutsches Eck, Festung Ehrenbreitstein und Rheinufer – 85 km ab Kirchweiler.',
    'en': 'Koblenz day trip: German Corner, Ehrenbreitstein Fortress and Rhine waterfront – 85 km from Kirchweiler.',
    'nl': 'Koblenz daguitstap: Duits Hoek, Vesting Ehrenbreitstein en Rijnoever – 85 km van Kirchweiler.',
    'fr': 'Excursion Coblence: Coin Allemand, Forteresse Ehrenbreitstein et bord du Rhin – à 85 km.',
  }
  const l = locale as keyof typeof titles
  return generateSeoMetadata('/specials/koblenz', locale, titles[l] || titles.de, descs[l] || descs.de)
}

export default async function KoblenzPage() {
  const locale = await getLocale()
  const tr = translations[locale as keyof typeof translations] ?? translations.de

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <nav className="text-sm text-stone-500 mb-6">
        <Link href="/specials" className="hover:text-green-800">{tr.breadcrumb}</Link>
        {" › "}
        <span>{tr.pageTitle}</span>
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
  );
}
