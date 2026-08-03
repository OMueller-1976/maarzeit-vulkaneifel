import type { Metadata } from "next";
import Link from "next/link";
import { getLocale } from 'next-intl/server'
import { generateSeoMetadata } from '@/lib/seo';

const metaTitles: Record<string, string> = {
  de: 'Tagesausflug nach Köln – Dom, Rhein & Museen, 130 km',
  en: 'Day Trip to Cologne – Cathedral, Rhine & Museums, 130 km',
  nl: 'Daguitstap naar Keulen – Dom, Rijn & Musea, 130 km',
  fr: 'Excursion à Cologne – Cathédrale, Rhin & Musées, 130 km',
}

const metaDescriptions: Record<string, string> = {
  de: 'Köln: Kölner Dom, Altstadt, Rheinufer, Museen und Brauhauskultur. 130 km von der Ferienwohnung in der Vulkaneifel – lohnender Tagesausflug.',
  en: 'Cologne: Cologne Cathedral, old town, Rhine waterfront, museums and brewery culture. 130 km from the holiday apartment in the Vulkan Eifel.',
  nl: 'Keulen: Keulse Dom, oude stad, Rijnoever, musea en brouwerijcultuur. 130 km van het vakantieappartement in de Vulkaan Eifel.',
  fr: 'Cologne: Cathédrale de Cologne, vieille ville, bords du Rhin, musées et culture brassicole. 130 km de l\'appartement dans l\'Eifel volcanique.',
}

const translations = {
  de: {
    breadcrumb: 'Specials',
    pageTitle: 'Köln',
    distance: 'ca. 130 km · ca. 1,5 Stunden ab Kirchweiler',
    intro: 'Köln ist die nächste Großstadt – und eine, die mehr zu bieten hat, als der erste Blick vermuten lässt. Natürlich ist der Dom das unbestrittene Wahrzeichen, doch daneben wartet eine lebendige Brauhauskultur, ein dichtes Museumsangebot, ein breites Rheinufer und pulsierende Stadtteile, die zum Entdecken einladen. Von Kirchweiler aus sind es rund 130 Kilometer – eineinhalb Stunden auf der Autobahn, und schon liegt die Metropole vor Ihnen.',
    sections: [
      { title: 'Kölner Dom', paras: ['Der Kölner Dom ist eines der bekanntesten Bauwerke Deutschlands und UNESCO-Welterbe. Über 600 Jahre dauerte seine Bauzeit – von 1248 bis zur Vollendung im Jahr 1880. Mit seinen 157 Metern Höhe dominiert er das Stadtbild und ist von fast überall in Köln sichtbar. Der Innenraum beeindruckt durch seine Größe, die gotischen Glasfenster und die mittelalterlichen Kunstschätze.', 'Besonders lohnenswert ist die Besteigung der Domtürme: Über rund 533 Stufen gelangt man auf eine Aussichtsplattform, die einen weiten Blick über Köln und das Rheintal bietet. Die Schatzkammer des Doms beherbergt einen der bedeutendsten kirchlichen Kunstschätze Deutschlands, darunter den Dreikönigsschrein.'] },
      { title: 'Altstadt & Rheinufer', paras: ['Unmittelbar neben dem Dom erstreckt sich Kölns Altstadt mit ihren Brauhauskellern, Kneipen und kleinen Gassen. Die Kölner Altstadt ist kein museales Stück Stadt, sondern lebt: Hier treffen sich die Einheimischen zum Kölsch-Trinken, und das zu praktisch jeder Tageszeit. Besonders die Straßen rund um den Heumarkt und den Alter Markt sind lebendig und authentisch.', 'Das Rheinufer bietet Platz für ausgedehnte Spaziergänge mit Blick auf den Strom, die Schiffe und die gegenüberliegende Seite mit Deutz und der Hohenzollernbrücke. An warmen Tagen verwandelt sich die Rheinpromenade in einen öffentlichen Treffpunkt.'] },
      { title: 'Museen', paras: ['Köln ist eine der museumsreichsten Städte Deutschlands. Das Museum Ludwig am Dom zeigt eine der bedeutendsten Sammlungen moderner und zeitgenössischer Kunst weltweit – Picasso, Pop Art, amerikanische Abstraktion und deutsche Gegenwartskunst unter einem Dach. Direkt daneben liegt das Wallraf-Richartz-Museum mit alter Meister-Malerei vom Mittelalter bis zum 19. Jahrhundert.', 'Das Römisch-Germanische Museum, das sich momentan in einem Ausweichquartier befindet, während das Stammhaus saniert wird, beherbergt außergewöhnliche Funde aus der römischen Vergangenheit Kölns – darunter das berühmte Dionysos-Mosaik und den Poblicius-Grabmal. Köln war als „Colonia Claudia Ara Agrippinensium" eine der bedeutendsten Städte des Römischen Reiches nördlich der Alpen.'] },
      { title: 'Hohenzollernbrücke', paras: ['Die Hohenzollernbrücke verbindet Kölns Innenstadt mit dem rechtsrheinischen Stadtteil Deutz und ist die meistbefahrene Eisenbahnbrücke Deutschlands. Für Fußgänger und Radfahrer gibt es einen eigenen Weg, von dem aus man einen der schönsten Blicke auf den Dom genießt.', 'Bekannt sind die Tausenden von Liebesschlössern, die an den Geländern der Brücke befestigt wurden – ein Phänomen, das mittlerweile in vielen Städten Nachahmung gefunden hat, in Köln aber seinen Ursprung hat. Die Brücke ist ein beliebtes Fotomotiv, besonders in der Abenddämmerung mit beleuchtetem Dom.'] },
      { title: 'Kölsch & Brauhauskultur', paras: ['Kölsch ist mehr als ein Bier – es ist ein Lebensgefühl. Das obergärige, helle Bier wird ausschließlich in Köln gebraut und nach dem Kölsch-Konvent von 1986 nur in der Region als „Kölsch" bezeichnet. Serviert wird es in schmalen 0,2-Liter-Gläsern, den sogenannten Stangen, die der Köbes – der Brauhauskelner – so lange nachfüllt, bis man einen Bierdeckel auf das Glas legt.', 'Die traditionsreichsten Brauhäuser in der Altstadt – Früh am Dom, Gaffel am Dom und das etwas abseits gelegene Päffgen in der Friesenstraße – bieten neben dem Bier auch deftige Kölsche Küche: Himmel un Äd, Halver Hahn (Roggenbrötchen mit Käse) und Reibekuchen mit Apfelmus.'] },
      { title: 'Shopping', paras: ['Wer in Köln einkaufen möchte, hat die Qual der Wahl: Die Schildergasse und Hohe Straße sind zwei der meistfrequentierten Einkaufsstraßen Deutschlands mit allen bekannten Ketten. Wer lieber in individuellen Läden stöbert, ist im Belgischen Viertel oder in Ehrenfeld besser aufgehoben – dort gibt es Vintage, lokale Designer, Buchläden und Konzeptläden in einer kreativen Atmosphäre abseits des Massentourismus.'] },
      { title: 'Belgisches Viertel & Ehrenfeld', paras: ['Das Belgische Viertel westlich des Stadtzentrums ist Kölns kreativstes Quartier: Galerien, Cafés, Restaurants mit internationaler Küche, Vinylplattenläden und Streetart prägen das Bild. Besonders an Wochenenden ist die Aachener Straße und die Brüsseler Straße belebt. Wer Köln jenseits von Dom und Altstadt kennenlernen möchte, ist hier richtig.', 'Ehrenfeld, ein ehemaliges Arbeiterviertel, hat sich in den letzten Jahren zu einem kulturellen Hotspot entwickelt: Clubs, Kunsträume, vegane Restaurants und kreative Unternehmen haben sich angesiedelt. Für Tagesausflügler bietet Ehrenfeld einen interessanten Einblick in das zeitgenössische Köln.'] },
      { title: 'Für Familien', paras: ['Wer mit Kindern nach Köln fährt, hat ebenfalls einige Optionen. Das Schokoladenmuseum am Rheinufer ist eines der meistbesuchten Museen Deutschlands und zeigt auf unterhaltsame Weise die Geschichte der Schokolade – mit einem Schokoladenbrunnen als Highlight. Der Kölner Zoo liegt nicht weit vom Stadtwald entfernt und ist gut erreichbar.', 'Wer noch weiter fahren möchte: In Brühl, gut 20 Kilometer südlich von Köln, liegt Phantasialand – einer der bekanntesten Freizeitparks Deutschlands. Kombiniert mit einem Kölnbesuch am Vor- oder Nachmittag ein voller Familientag.'] },
      { title: 'Anreise ab Kirchweiler', paras: ['Von Kirchweiler fahren Sie Richtung Daun, dann über die A1 (Richtung Trier/Köln) oder alternativ über die A61 (Koblenz) nach Köln. Die Strecke beträgt rund 130 Kilometer und ist in normaler Verkehrslage in ca. eineinhalb Stunden zu bewältigen. Auf der A1 sollte man möglichst früh starten – die Autobahn ist besonders nachmittags Richtung Köln stark frequentiert.', 'Empfehlenswert ist die Nutzung des Park & Ride-Systems: Parken Sie an einem der Endbahnhöfe der Kölner U-Bahn (z. B. in Frechen oder Hürth) und fahren Sie mit der S-Bahn oder U-Bahn in die Innenstadt. Das spart Parkgebühren und Nerven bei der Suche nach einem Stellplatz.'] },
      { title: 'Tipps für den Tagesausflug', paras: ['Starten Sie früh – der Kölner Dom ist morgens noch ruhig, die Touristenströme setzen gegen Mittag ein. Ein Frühstück in einem Café nahe dem Dom und dann ein Besuch des Doms und der Schatzkammer ergibt einen guten Start in den Tag. Nachmittags lohnt sich ein Spaziergang durch die Altstadt oder ins Belgische Viertel, bevor man am frühen Abend die Rückreise antritt.', 'Köln ist gut mit einem Tagesthema zu planen: Museumsliebhaber verbringen den Tag im Museum Ludwig und Wallraf-Richartz; Kölsch-Fans erkunden Brauhäuser und Altstadt; Familien kombinieren Dom mit Schokoladenmuseum; Shopper konzentrieren sich auf Innenstadt und Belgisches Viertel.'] },
    ],
    ctaText: 'Köln als Tagesausflug aus der Vulkaneifel – unsere Ferienwohnung in Kirchweiler liegt ca. 130 km entfernt. Eine anderthalb Stunden Fahrt, und die Metropole wartet.',
    ctaBtn: 'Jetzt buchen',
    ctaBack: 'Alle Specials',
  },
  en: {
    breadcrumb: 'Specials',
    pageTitle: 'Cologne',
    distance: 'approx. 130 km · approx. 1.5 hours from Kirchweiler',
    intro: 'Cologne is the nearest major city – and one that has more to offer than first meets the eye. Of course the cathedral is the undisputed landmark, but alongside it waits a vibrant brewery culture, a wealth of museums, a wide Rhine bank and pulsating neighbourhoods that invite exploration. From Kirchweiler it\'s about 130 kilometres – an hour and a half on the motorway, and the metropolis awaits.',
    sections: [
      { title: 'Cologne Cathedral', paras: ['Cologne Cathedral is one of Germany\'s most famous buildings and a UNESCO World Heritage Site. Its construction spanned over 600 years – from 1248 to its completion in 1880. At 157 metres high it dominates the cityscape and is visible from almost everywhere in Cologne. The interior impresses with its scale, the Gothic stained glass windows and the medieval artistic treasures.', 'Particularly worthwhile is climbing the cathedral towers: around 533 steps lead to a viewing platform with a wide view over Cologne and the Rhine valley. The Cathedral Treasury houses one of Germany\'s most significant ecclesiastical art collections, including the Shrine of the Three Kings.'] },
      { title: 'Old Town & Rhine Waterfront', paras: ['Immediately next to the cathedral stretches Cologne\'s old town with its brewery cellars, pubs and small alleys. Cologne\'s old town is not a museum piece of a city but lives: this is where locals meet to drink Kölsch, at practically any time of day. The streets around Heumarkt and Alter Markt are particularly lively and authentic.', 'The Rhine bank offers space for extended walks with views of the river, the ships and the opposite bank with Deutz and the Hohenzollern Bridge. On warm days the Rhine promenade transforms into a public meeting place.'] },
      { title: 'Museums', paras: ['Cologne is one of Germany\'s most museum-rich cities. The Museum Ludwig at the cathedral houses one of the world\'s most significant collections of modern and contemporary art – Picasso, Pop Art, American abstraction and German contemporary art under one roof. Right next to it is the Wallraf-Richartz Museum with old master paintings from the Middle Ages to the 19th century.', 'The Romano-Germanic Museum, currently in temporary premises while the main building is being renovated, houses exceptional finds from Cologne\'s Roman past – including the famous Dionysus mosaic and the Poblicius tomb monument. Cologne was as "Colonia Claudia Ara Agrippinensium" one of the most important cities of the Roman Empire north of the Alps.'] },
      { title: 'Hohenzollern Bridge', paras: ['The Hohenzollern Bridge connects Cologne\'s city centre with the right-bank district of Deutz and is Germany\'s busiest railway bridge. There is a dedicated path for pedestrians and cyclists, from which you enjoy one of the finest views of the cathedral.', 'The bridge is famous for the thousands of love locks attached to its railings – a phenomenon that has since been imitated in many cities but originated in Cologne. The bridge is a popular photo motif, especially at dusk with the illuminated cathedral.'] },
      { title: 'Kölsch & Brewery Culture', paras: ['Kölsch is more than a beer – it\'s a way of life. This top-fermented, pale beer is brewed exclusively in Cologne and, under the Kölsch Convention of 1986, only called "Kölsch" in the region. It is served in narrow 0.2-litre glasses called Stangen, which the Köbes – the brewery waiter – keeps refilling until you place a beer mat on the glass.', 'The most traditional brewhouses in the old town – Früh am Dom, Gaffel am Dom and the slightly off-the-beaten-track Päffgen on Friesenstraße – offer alongside the beer hearty Cologne cuisine: Himmel un Äd, Halver Hahn (rye bread roll with cheese) and Reibekuchen with apple sauce.'] },
      { title: 'Shopping', paras: ['Those who want to shop in Cologne are spoilt for choice: Schildergasse and Hohe Straße are two of Germany\'s most frequented shopping streets with all the well-known chains. Those who prefer browsing in individual shops are better served in the Belgian Quarter or Ehrenfeld – there you\'ll find vintage, local designers, bookshops and concept stores in a creative atmosphere away from mass tourism.'] },
      { title: 'Belgian Quarter & Ehrenfeld', paras: ['The Belgian Quarter west of the city centre is Cologne\'s most creative neighbourhood: galleries, cafés, restaurants with international cuisine, vinyl record shops and street art define the scene. Especially at weekends Aachener Straße and Brüsseler Straße are lively. Those who want to discover Cologne beyond the cathedral and old town are in the right place here.', 'Ehrenfeld, a former working-class neighbourhood, has developed in recent years into a cultural hotspot: clubs, art spaces, vegan restaurants and creative businesses have settled here. For day trippers, Ehrenfeld offers an interesting insight into contemporary Cologne.'] },
      { title: 'For Families', paras: ['Those who come to Cologne with children also have some options. The Chocolate Museum on the Rhine bank is one of Germany\'s most visited museums and entertainingly depicts the history of chocolate – with a chocolate fountain as the highlight. Cologne Zoo is not far from the city forest and is easily accessible.', 'For those who want to go further: in Brühl, about 20 kilometres south of Cologne, lies Phantasialand – one of Germany\'s most famous theme parks. Combined with a Cologne visit in the morning or afternoon, a full family day.'] },
      { title: 'Getting Here from Kirchweiler', paras: ['From Kirchweiler head towards Daun, then via the A1 (towards Trier/Cologne) or alternatively via the A61 (Koblenz) to Cologne. The route is about 130 kilometres and can be covered in approximately an hour and a half in normal traffic. On the A1 you should start as early as possible – the motorway is particularly busy in the afternoons towards Cologne.', 'It\'s recommended to use the Park & Ride system: park at one of the end stations of the Cologne underground (e.g. in Frechen or Hürth) and take the S-Bahn or underground into the city centre. This saves parking fees and the stress of finding a parking space.'] },
      { title: 'Day Trip Tips', paras: ['Start early – Cologne Cathedral is still quiet in the morning, tourist crowds arrive around midday. Breakfast at a café near the cathedral and then a visit to the cathedral and treasury makes for a good start to the day. In the afternoon a walk through the old town or to the Belgian Quarter is worthwhile, before setting off on the return journey in the early evening.', 'Cologne is well suited to planning with a daily theme: museum lovers spend the day at Museum Ludwig and Wallraf-Richartz; Kölsch fans explore brewhouses and the old town; families combine the cathedral with the Chocolate Museum; shoppers focus on the city centre and Belgian Quarter.'] },
    ],
    ctaText: 'Cologne as a day trip from the Vulkan Eifel – our holiday apartment in Kirchweiler is approx. 130 km away. An hour and a half\'s drive, and the metropolis awaits.',
    ctaBtn: 'Book Now',
    ctaBack: 'All Specials',
  },
  nl: {
    breadcrumb: 'Specials',
    pageTitle: 'Keulen',
    distance: 'ca. 130 km · ca. 1,5 uur van Kirchweiler',
    intro: 'Keulen is de dichtstbijzijnde grote stad – en een die meer te bieden heeft dan op het eerste gezicht lijkt. Uiteraard is de Dom het onbetwiste landmark, maar daarnaast wacht een levendige brouwerijcultuur, een rijke museumcollectie, een brede Rijnoever en bruisende stadsdelen die uitnodigen tot ontdekken. Vanuit Kirchweiler is het zo\'n 130 kilometer – anderhalf uur op de snelweg, en de metropool wacht.',
    sections: [
      { title: 'Keulse Dom', paras: ['De Keulse Dom is een van de bekendste gebouwen van Duitsland en UNESCO Werelderfgoed. De bouw duurde meer dan 600 jaar – van 1248 tot de voltooiing in 1880. Met zijn hoogte van 157 meter domineert het het stadssilhouet en is het van bijna overal in Keulen zichtbaar. Het interieur indrukwekkend door zijn omvang, de gotische gebrandschilderde ramen en de middeleeuwse kunstschatten.', 'Bijzonder lohnend is de beklimming van de Domtorens: via zo\'n 533 treden bereikt men een uitkijkplatform met een weids uitzicht over Keulen en het Rijntal. De Domschatkamer herbergt een van de belangrijkste kerkelijke kunstcollecties van Duitsland, waaronder de Driekoningenschrijn.'] },
      { title: 'Oude Stad & Rijnoever', paras: ['Direct naast de Dom strekt zich Keulens oude stad uit met zijn brouwerijkelders, kroegen en kleine steegjes. De Keulse oude stad is geen museumstuk van een stad, maar leeft: hier treffen de inwoners elkaar om Kölsch te drinken, op praktisch elk moment van de dag. Vooral de straten rond de Heumarkt en de Alter Markt zijn levendig en authentiek.', 'De Rijnoever biedt ruimte voor uitgebreide wandelingen met uitzicht op de rivier, de schepen en de overkant met Deutz en de Hohenzollernbrug. Op warme dagen verandert de Rijnpromenade in een publieke ontmoetingsplek.'] },
      { title: 'Musea', paras: ['Keulen is een van de museumsrijkste steden van Duitsland. Het Museum Ludwig bij de Dom toont een van de belangrijkste verzamelingen moderne en hedendaagse kunst ter wereld – Picasso, Pop Art, Amerikaanse abstractie en hedendaagse Duitse kunst onder één dak. Direct ernaast ligt het Wallraf-Richartz-Museum met oude meesterschilderkunst van de middeleeuwen tot de 19e eeuw.', 'Het Römisch-Germanisches Museum, dat momenteel in een uitwijklocatie is terwijl het hoofdgebouw gerenoveerd wordt, herbergt buitengewone vondsten uit Keulens Romeinse verleden – waaronder het beroemde Dionysosmozaïek en het Poblicius-grafmonument. Keulen was als "Colonia Claudia Ara Agrippinensium" een van de belangrijkste steden van het Romeinse Rijk ten noorden van de Alpen.'] },
      { title: 'Hohenzollernbrug', paras: ['De Hohenzollernbrug verbindt Keulens stadscentrum met de rechter Rijnoeverwijk Deutz en is de drukst bereden spoorbrug van Duitsland. Er is een eigen weg voor voetgangers en fietsers, van waaruit men een van de mooiste uitzichten op de Dom geniet.', 'Bekend zijn de duizenden liefdeshangsloten die aan de leuningen van de brug zijn bevestigd – een fenomeen dat inmiddels in veel steden navolging heeft gevonden, maar in Keulen zijn oorsprong heeft. De brug is een geliefd fotomotief, vooral in de schemering met de verlichte Dom.'] },
      { title: 'Kölsch & Brouwerijcultuur', paras: ['Kölsch is meer dan een bier – het is een levensgevoel. Dit bovengistende, lichte bier wordt uitsluitend in Keulen gebrouwen en overeenkomstig het Kölsch-convenant van 1986 alleen in de regio "Kölsch" genoemd. Het wordt geserveerd in smalle 0,2-literglazen, de zogenaamde Stangen, die de Köbes – de brouwerijkelner – blijft bijschenken totdat men een bierviltje op het glas legt.', 'De meest traditionele brouwerijen in de oude stad – Früh am Dom, Gaffel am Dom en het wat afgelegen Päffgen in de Friesenstraße – bieden naast het bier ook stevige Keulse keuken: Himmel un Äd, Halver Hahn (roggebroodje met kaas) en Reibekuchen met appelmoes.'] },
      { title: 'Winkelen', paras: ['Wie in Keulen wil winkelen, heeft de keuze: de Schildergasse en Hohe Straße zijn twee van de drukst bezochte winkelstraten van Duitsland met alle bekende ketens. Wie liever in individuele winkels snuffelt, is beter af in het Belgische Kwartier of in Ehrenfeld – daar zijn vintage, lokale ontwerpers, boekwinkels en conceptstores te vinden in een creatieve sfeer buiten het massamoerisme.'] },
      { title: 'Belgisch Kwartier & Ehrenfeld', paras: ['Het Belgische Kwartier ten westen van het stadscentrum is Keulens meest creatieve wijk: galeries, cafés, restaurants met internationale keuken, platenwinkels en streetart bepalen het beeld. Vooral in het weekend zijn de Aachener Straße en Brüsseler Straße levendig. Wie Keulen buiten Dom en oude stad wil leren kennen, is hier op de juiste plek.', 'Ehrenfeld, een voormalige arbeidersbuurt, heeft zich de afgelopen jaren ontwikkeld tot een culturele hotspot: clubs, kunstlocaties, veganrestaurants en creatieve bedrijven hebben er zich gevestigd. Voor dagbezoekers biedt Ehrenfeld een interessante blik op het hedendaagse Keulen.'] },
      { title: 'Voor Gezinnen', paras: ['Wie met kinderen naar Keulen gaat, heeft ook enkele opties. Het Chocolademuseum aan de Rijnoever is een van de meest bezochte musea van Duitsland en toont op onderhoudende wijze de geschiedenis van chocolade – met een chocoladefontein als hoogtepunt. De Keulse dierentuin ligt niet ver van het stadsbos en is goed bereikbaar.', 'Wie nog verder wil rijden: in Brühl, zo\'n 20 kilometer ten zuiden van Keulen, ligt Phantasialand – een van de bekendste pretparken van Duitsland. Gecombineerd met een Keulenbezoek \'s ochtends of \'s middags een volle familiedag.'] },
      { title: 'Reizen vanuit Kirchweiler', paras: ['Vanuit Kirchweiler rijdt u richting Daun, dan via de A1 (richting Trier/Keulen) of alternatief via de A61 (Koblenz) naar Keulen. De route bedraagt zo\'n 130 kilometer en is bij normaal verkeer in ca. anderhalf uur te bewältigen. Op de A1 moet men zo vroeg mogelijk vertrekken – de snelweg is \'s middags richting Keulen bijzonder druk.', 'Aanbevolen is het gebruik van het Park & Ride-systeem: parkeer bij een van de eindstations van de Keulse metro (bijv. in Frechen of Hürth) en rijd met de S-Bahn of metro het stadscentrum in. Dit bespaart parkeerkosten en stress bij het zoeken naar een parkeerplaats.'] },
      { title: 'Tips voor de Daguitstap', paras: ['Start vroeg – de Keulse Dom is \'s ochtends nog rustig, de touristenstromen beginnen rond het middaguur. Een ontbijt in een café bij de Dom en daarna een bezoek aan de Dom en de Schatkamer geeft een goed begin van de dag. \'s Middags loont een wandeling door de oude stad of naar het Belgische Kwartier, voordat men \'s vroeg in de avond de terugreis aanvangt.', 'Keulen is goed te plannen met een dagsthema: museumliefhebbers brengen de dag door in Museum Ludwig en Wallraf-Richartz; Kölsch-fans verkennen brouwerijen en oude stad; gezinnen combineren Dom met Chocolademuseum; shoppers concentreren zich op de binnenstad en het Belgische Kwartier.'] },
    ],
    ctaText: 'Keulen als daguitstap uit de Vulkaan Eifel – ons vakantieappartement in Kirchweiler ligt ca. 130 km. Anderhalf uur rijden, en de metropool wacht.',
    ctaBtn: 'Nu boeken',
    ctaBack: 'Alle Specials',
  },
  fr: {
    breadcrumb: 'Specials',
    pageTitle: 'Cologne',
    distance: 'environ 130 km · environ 1h30 de Kirchweiler',
    intro: "Cologne est la grande ville la plus proche – et une qui a plus à offrir qu'il n'y paraît au premier abord. La cathédrale est bien sûr le symbole incontesté, mais à côté attend une culture brassicole vivante, une offre muséale dense, de larges bords du Rhin et des quartiers animés qui invitent à la découverte. Depuis Kirchweiler, il y a environ 130 kilomètres – une heure et demie sur l'autoroute, et la métropole vous attend.",
    sections: [
      { title: 'La Cathédrale de Cologne', paras: ["La cathédrale de Cologne est l'un des bâtiments les plus connus d'Allemagne et un site du patrimoine mondial de l'UNESCO. Sa construction a duré plus de 600 ans – de 1248 à son achèvement en 1880. Avec ses 157 mètres de hauteur, elle domine le panorama urbain et est visible de presque partout à Cologne. L'intérieur impressionne par sa taille, les vitraux gothiques et les trésors artistiques médiévaux.", "Particulièrement intéressant : gravir les tours de la cathédrale. Environ 533 marches mènent à une plateforme d'observation offrant une vue panoramique sur Cologne et la vallée du Rhin. Le Trésor de la cathédrale abrite l'une des collections d'art ecclésiastique les plus importantes d'Allemagne, dont la Châsse des Rois Mages."] },
      { title: 'Vieille Ville & Bords du Rhin', paras: ["Juste à côté de la cathédrale s'étend la vieille ville de Cologne avec ses caves de brasserie, ses pubs et ses petites ruelles. La vieille ville de Cologne n'est pas un morceau de ville muséifié, elle vit : c'est ici que les habitants se retrouvent pour boire du Kölsch, et ce pratiquement à toute heure de la journée. Les rues autour du Heumarkt et du Alter Markt sont particulièrement animées et authentiques.", "Les bords du Rhin offrent de l'espace pour de longues promenades avec vue sur le fleuve, les bateaux et la rive opposée avec Deutz et le pont Hohenzollern. Par temps chaud, la promenade du Rhin se transforme en lieu de rencontre public."] },
      { title: 'Musées', paras: ["Cologne est l'une des villes les plus riches en musées d'Allemagne. Le Musée Ludwig à la cathédrale présente l'une des collections d'art moderne et contemporain les plus importantes au monde – Picasso, Pop Art, abstraction américaine et art contemporain allemand sous un même toit. Juste à côté se trouve le Musée Wallraf-Richartz avec la peinture des anciens maîtres du Moyen Âge au XIXe siècle.", "Le Musée Romano-Germanique, actuellement dans des locaux provisoires pendant que le bâtiment principal est rénové, abrite des trouvailles exceptionnelles du passé romain de Cologne – dont le célèbre mosaïque de Dionysos et le mausolée de Poblicius. Cologne était, en tant que \"Colonia Claudia Ara Agrippinensium\", l'une des villes les plus importantes de l'Empire romain au nord des Alpes."] },
      { title: 'Le Pont Hohenzollern', paras: ["Le pont Hohenzollern relie le centre-ville de Cologne au quartier de Deutz sur la rive droite du Rhin et est le pont ferroviaire le plus fréquenté d'Allemagne. Il y a une voie dédiée aux piétons et cyclistes, depuis laquelle on jouit de l'une des plus belles vues sur la cathédrale.", "Le pont est connu pour les milliers de cadenas d'amour fixés à ses rambardes – un phénomène qui a depuis trouvé des imitations dans de nombreuses villes, mais qui a son origine à Cologne. Le pont est un motif photographique populaire, surtout au crépuscule avec la cathédrale illuminée."] },
      { title: 'Kölsch & Culture Brassicole', paras: ["Le Kölsch est plus qu'une bière – c'est un art de vivre. Cette bière blonde à fermentation haute est brassée exclusivement à Cologne et, selon la Convention Kölsch de 1986, n'est appelée \"Kölsch\" que dans la région. Elle est servie dans des verres étroits de 0,2 litre appelés Stangen, que le Köbes – le serveur de brasserie – remplit sans cesse jusqu'à ce qu'on pose un sous-verre sur le verre.", "Les brasseries les plus traditionnelles de la vieille ville – Früh am Dom, Gaffel am Dom et le légèrement excentré Päffgen dans la Friesenstraße – proposent en plus de la bière une cuisine rhénane roborative : Himmel un Äd, Halver Hahn (petit pain de seigle au fromage) et Reibekuchen avec de la compote de pommes."] },
      { title: 'Shopping', paras: ["Ceux qui souhaitent faire du shopping à Cologne ont l'embarras du choix : la Schildergasse et la Hohe Straße sont deux des rues commerçantes les plus fréquentées d'Allemagne avec toutes les enseignes connues. Ceux qui préfèrent fouiner dans des boutiques individuelles sont mieux servis dans le Quartier Belge ou à Ehrenfeld – on y trouve vintage, créateurs locaux, librairies et concept stores dans une atmosphère créative loin du tourisme de masse."] },
      { title: 'Quartier Belge & Ehrenfeld', paras: ["Le Quartier Belge à l'ouest du centre-ville est le quartier le plus créatif de Cologne : galeries, cafés, restaurants avec cuisine internationale, disquaires et street art définissent le tableau. Surtout le week-end, l'Aachener Straße et la Brüsseler Straße sont animées. Ceux qui veulent découvrir Cologne au-delà de la cathédrale et de la vieille ville sont au bon endroit ici.", "Ehrenfeld, un ancien quartier ouvrier, s'est développé ces dernières années en hotspot culturel : clubs, espaces d'art, restaurants véganes et entreprises créatives s'y sont installés. Pour les visiteurs d'une journée, Ehrenfeld offre un aperçu intéressant de la Cologne contemporaine."] },
      { title: 'Pour les Familles', paras: ["Ceux qui viennent à Cologne avec des enfants ont également quelques options. Le Musée du Chocolat au bord du Rhin est l'un des musées les plus visités d'Allemagne et présente de façon divertissante l'histoire du chocolat – avec une fontaine de chocolat comme point culminant. Le Zoo de Cologne n'est pas loin du Stadtwald et est facilement accessible.", "Pour ceux qui veulent aller encore plus loin : à Brühl, à environ 20 kilomètres au sud de Cologne, se trouve Phantasialand – l'un des parcs d'attractions les plus connus d'Allemagne. Combiné avec une visite de Cologne le matin ou l'après-midi, une journée de famille complète."] },
      { title: 'Itinéraire depuis Kirchweiler', paras: ["Depuis Kirchweiler, prenez la direction de Daun, puis via l'A1 (direction Trèves/Cologne) ou alternativement via l'A61 (Coblence) vers Cologne. L'itinéraire fait environ 130 kilomètres et peut être parcouru en environ une heure et demie dans des conditions de circulation normales. Sur l'A1, il vaut mieux partir le plus tôt possible – l'autoroute est particulièrement chargée l'après-midi vers Cologne.", "Il est recommandé d'utiliser le système Park & Ride : garez-vous à l'un des terminus du métro de Cologne (p. ex. à Frechen ou Hürth) et prenez le S-Bahn ou le métro jusqu'au centre-ville. Cela économise les frais de stationnement et évite le stress de la recherche d'une place."] },
      { title: "Conseils pour l'Excursion", paras: ["Partez tôt – la cathédrale de Cologne est encore calme le matin, les flux touristiques commencent vers midi. Un petit-déjeuner dans un café près de la cathédrale puis une visite de la cathédrale et du trésor constitue un bon début de journée. L'après-midi, une promenade dans la vieille ville ou dans le Quartier Belge vaut la peine, avant de prendre la route du retour en début de soirée.", "Cologne se prête bien à une planification avec un thème journalier : les amateurs de musée passent la journée au Musée Ludwig et Wallraf-Richartz ; les fans de Kölsch explorent les brasseries et la vieille ville ; les familles combinent la cathédrale avec le Musée du Chocolat ; les shoppers se concentrent sur le centre-ville et le Quartier Belge."] },
    ],
    ctaText: "Cologne comme excursion d'une journée depuis l'Eifel volcanique – notre appartement de vacances à Kirchweiler est à environ 130 km. Une heure et demie de route, et la métropole vous attend.",
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
    'de': 'Ausflug Köln – Dom, Rheinufer & Museen, 130 km',
    'en': 'Day Trip to Cologne – Cathedral, Rhine & Museums, 130 km',
    'nl': 'Daguitstap naar Keulen – Dom, Rijn & Musea, 130 km',
    'fr': 'Excursion à Cologne – Cathédrale, Rhin & Musées, 130 km',
  }
  const descs = {
    'de': 'Köln Tagesausflug: Kölner Dom, Rheinufer, Museen und Innenstadt – 130 km ab Kirchweiler.',
    'en': 'Cologne day trip: Cologne Cathedral, Rhine waterfront, museums and city centre – 130 km from Kirchweiler.',
    'nl': 'Keulen daguitstap: Kölner Dom, Rijnoever, musea en stadscentrum – 130 km van Kirchweiler.',
    'fr': 'Excursion Cologne: Cathédrale de Cologne, bord du Rhin, musées et centre-ville – à 130 km.',
  }
  const l = locale as keyof typeof titles
  return generateSeoMetadata('/specials/koeln', locale, titles[l] || titles.de, descs[l] || descs.de)
}

export default async function KoelnPage() {
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
        <p className="text-lg text-stone-600">{tr.intro}</p>
        {tr.sections.map((section) => (
          <section key={section.title}>
            <h2 className="text-2xl font-bold text-green-900 mb-3">{section.title}</h2>
            {section.paras.map((para, i) => (
              <p key={i} className={i > 0 ? 'mt-3' : ''}>{para}</p>
            ))}
          </section>
        ))}
      </div>

      <div className="mt-12 pt-8 border-t border-stone-200">
        <p className="text-stone-600 mb-4">{tr.ctaText}</p>
        <div className="flex flex-wrap gap-4">
          <Link href="/buchung" className="btn-primary">{tr.ctaBtn}</Link>
          <Link href="/specials" className="btn-secondary">{tr.ctaBack}</Link>
        </div>
      </div>
    </div>
  );
}
