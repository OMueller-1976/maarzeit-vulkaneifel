import type { Metadata } from "next";
import Link from "next/link";
import { getLocale } from 'next-intl/server'
import { generateSeoMetadata } from '@/lib/seo';

const metaTitles: Record<string, string> = {
  de: 'Tagesausflug nach Luxemburg – UNESCO-Altstadt, 95 km',
  en: 'Day Trip to Luxembourg – UNESCO Old Town, 95 km',
  nl: 'Daguitstap naar Luxemburg – UNESCO Oude Stad, 95 km',
  fr: 'Excursion au Luxembourg – Vieille Ville UNESCO, 95 km',
}

const metaDescriptions: Record<string, string> = {
  de: 'Luxemburg Stadt: UNESCO-Altstadt, Casemates, Grund-Viertel und Shopping. Nur 95 km von der Ferienwohnung in der Vulkaneifel entfernt.',
  en: 'Luxembourg City: UNESCO old town, Casemates, Grund district and shopping. Only 95 km from the holiday apartment in the Vulkan Eifel.',
  nl: 'Luxemburg Stad: UNESCO oude stad, Casemates, Grundwijk en shopping. Slechts 95 km van het vakantieappartement in de Vulkaan Eifel.',
  fr: "Luxembourg-Ville: vieille ville UNESCO, Casemates, quartier Grund et shopping. A seulement 95 km de l'appartement dans l'Eifel volcanique.",
}

const translations = {
  de: {
    breadcrumb: 'Specials',
    pageTitle: 'Luxemburg',
    distance: 'ca. 95 km · ca. 1 Stunde ab Kirchweiler',
    intro: 'Luxemburg ist eines der kleinsten Länder Europas und gleichzeitig eine der überraschendsten Städte. Die Hauptstadt vereint mittelalterliche Festungsarchitektur mit einer kosmopolitischen, europäischen Atmosphäre: EU-Institutionen, internationale Finanzwelt, eine lebhafte Kulturszene und eine UNESCO-geschützte Altstadt auf hohen Felsen. Von Kirchweiler sind es rund 95 Kilometer.',
    sections: [
      { title: 'UNESCO-Welterbe Altstadt', paras: ['Die Altstadt von Luxemburg steht seit 1994 auf der UNESCO-Welterbeliste, ausgezeichnet für ihre einzigartigen Befestigungsanlagen, die sich über Jahrhunderte als strategisch bedeutsame Festung entwickelt haben. Die Felsplateaus verleihen Luxemburg eine unverwechselbare Topografie.', 'Zu Fuß lässt sich die Altstadt in einem halben Tag gut erkunden. Die Wege führen entlang von Bockfelsen und Stadtmauern, über Treppen und durch Tunnel, von Plateau zu Plateau.'] },
      { title: 'Casemates du Bock', paras: ['Die Casemates du Bock sind ein unterirdisches Netz aus Gängen, Kammern und Stollen, das tief in den Fels gegraben wurde. Mit über 17 Kilometern Gesamtlänge dienten die Casemates über Jahrhunderte als Schutzanlage und konnten Zehntausende von Soldaten beherbergen.', 'Heute ist ein Teil der Anlage für Besucher geöffnet und ermöglicht einen faszinierenden Gang durch die Geschichte Luxemburgs. Die Casemates sollten auf keinem Luxemburg-Besuch fehlen.'] },
      { title: 'Das Viertel Grund', paras: ['Tief unten im Alzettetal liegt das Viertel Grund, das historische Unterstadt-Viertel Luxemburgs, das man über steile Treppen oder einen Lift von der Oberstadt erreicht. Hier plätschert die Alzette durch einen kleinen Ort, der eher einem mittelalterlichen Dorf gleicht als einem Stadtviertel einer Hauptstadt.', 'Der Grund ist bekannt für seine gemütlichen Restaurants und Kneipen, die besonders abends viel Publikum anziehen. Der Spaziergang entlang der Alzette und die Blicke auf die Felsformationen der Oberstadt von unten sind ein besonderes Erlebnis.'] },
      { title: "Place d'Armes & Altstadt", paras: ["Das Herz der Luxemburger Altstadt ist der Place d'Armes, ein lebhafter Platz mit Cafés, Restaurants und Straßenmusikern, auf dem sich Einheimische und Touristen gleichermaßen treffen. Von hier aus ist der Großherzogliche Palast nur wenige Schritte entfernt.", "Die Gassen rund um den Place d'Armes und die Rue de la Reine bieten angenehmes Stadtbummel-Terrain mit Boutiquen, Concept Stores und kleinen Galerien."] },
      { title: 'Museen in Luxemburg', paras: ["Für Kunstinteressierte ist das MUDAM das Highlight: Das spektakuläre Gebäude von I.M. Pei beherbergt eine bedeutende Sammlung zeitgenössischer Kunst in wechselnden Ausstellungen. Gleich daneben liegt das Philharmonie-Gebäude.", 'Das Nationalmuseum für Geschichte und Kunst (MNHA) zeigt die Geschichte Luxemburgs von der Antike bis zur Moderne.'] },
      { title: 'Shopping in Luxemburg', paras: ['Luxemburg ist ein beliebtes Einkaufsziel, nicht zuletzt wegen der im europäischen Vergleich moderaten Mehrwertsteuer. Besonders Tabak, Alkohol, Elektronik und Parfum sind günstiger als in Deutschland. Die Haupteinkaufsstraßen befinden sich in der Oberstadt.', 'Wer lieber in entspannter Atmosphäre stöbert, findet kleinere Boutiquen mit lokalen Designern und Spezialitätenhändlern.'] },
      { title: 'Mehrsprachigkeit & Besonderheiten', paras: ['Luxemburg ist offiziell dreisprachig: Lëtzebuergesch, Französisch und Deutsch sind gleichberechtigte Amtssprachen. Im Alltag begegnet man allen drei Sprachen. Für deutschsprachige Besucher ist die Verständigung problemlos.', 'Diese kulturelle Vielschichtigkeit macht einen Teil des Reizes aus: Luxemburg fühlt sich gleichzeitig vertraut und fremd an – und das mitten in Europa.'] },
      { title: 'Essen & Trinken', paras: ['Die Luxemburger Küche verbindet Einflüsse aus Deutschland, Frankreich und Belgien. Das Nationalgericht Judd mat Gaardebounen ist in vielen traditionellen Restaurants auf der Karte. Dazu trinkt man gerne Moselle Luxembourgeoise.', "Im Viertel Grund und rund um den Place d'Armes findet sich für jeden Geschmack das Passende."] },
      { title: 'Praktische Tipps', paras: ['Der öffentliche Nahverkehr in Luxemburg ist seit 2020 vollständig kostenlos. Wer mit dem Auto anreist, parkt am besten in einem der Parkhäuser am Stadtrand und nutzt den kostenlosen Bus in die Innenstadt.', 'Viele Museen und Sehenswürdigkeiten in Luxemburg haben montags geschlossen. Planen Sie Ihren Ausflug idealerweise von Dienstag bis Sonntag.'] },
      { title: 'Anreise ab Kirchweiler', paras: ['Von Kirchweiler fahren Sie Richtung Bitburg, dann über die A60 nach Luxemburg. Die Route führt durch die Südeifel. An der Grenze entfallen die üblichen Zollkontrollen, da Luxemburg Schengen-Mitglied ist. Gesamtdistanz: rund 95 Kilometer, Fahrtzeit ca. 1 Stunde.'] },
    ],
    ctaText: 'Luxemburg als Tagesausflug aus der Eifel – unsere Ferienwohnung in Kirchweiler liegt nur ca. 95 km entfernt.',
    ctaBtn: 'Jetzt buchen',
    ctaBack: 'Alle Specials',
  },
  en: {
    breadcrumb: 'Specials',
    pageTitle: 'Luxembourg',
    distance: 'approx. 95 km · approx. 1 hour from Kirchweiler',
    intro: "Luxembourg is one of the smallest countries in Europe and simultaneously one of the most surprising cities. The capital combines medieval fortress architecture with a cosmopolitan, European atmosphere: EU institutions, international finance, a vibrant cultural scene and a UNESCO-protected old town on high rocks. From Kirchweiler it's about 95 kilometres.",
    sections: [
      { title: 'UNESCO World Heritage Old Town', paras: ["Luxembourg's old town has been on the UNESCO World Heritage List since 1994, recognised for its unique fortifications that developed over centuries as a strategically important fortress. The rocky plateaus give Luxembourg an unmistakeable topography.", 'The old town can be well explored on foot in half a day. The paths lead along the Bock rock formations and city walls, over steps and through tunnels, from plateau to plateau.'] },
      { title: 'Casemates du Bock', paras: ['The Casemates du Bock are an underground network of corridors, chambers and tunnels dug deep into the rock. With over 17 kilometres of total length, the casemates served over centuries as a protective facility and could shelter tens of thousands of soldiers.', "Today part of the complex is open to visitors and enables a fascinating walk through Luxembourg's history. The casemates should not be missed on any Luxembourg visit."] },
      { title: 'The Grund District', paras: ["Deep down in the Alzette valley lies the Grund district, Luxembourg's historic lower town neighbourhood, reached from the upper town by steep steps or a lift. Here the Alzette flows through a small settlement that resembles a medieval village.", 'The Grund is known for its cosy restaurants and pubs that attract large audiences especially in the evenings. The walk along the Alzette and the views of the upper town from below are a special experience.'] },
      { title: "Place d'Armes & Old Town", paras: ["The heart of Luxembourg's old town is the Place d'Armes, a lively square with cafes, restaurants and street musicians where locals and tourists alike gather. From here the Grand Ducal Palace is just a few steps away.", "The alleys around the Place d'Armes and Rue de la Reine offer pleasant strolling territory with boutiques, concept stores and small galleries."] },
      { title: 'Museums in Luxembourg', paras: ["For art enthusiasts, the MUDAM is a highlight: the spectacular building by I.M. Pei houses a significant collection of contemporary art in changing exhibitions. Right next to it is the Philharmonie building.", 'The National Museum of History and Art (MNHA) shows the history of Luxembourg from antiquity to modernity.'] },
      { title: 'Shopping in Luxembourg', paras: ["Luxembourg is a popular shopping destination, not least because of its relatively moderate VAT rate by European standards. Tobacco, alcohol, electronics and perfume in particular are cheaper than in Germany. The main shopping streets are in the upper town.", 'Those who prefer browsing in a relaxed atmosphere will find smaller boutiques with local designers and specialty retailers.'] },
      { title: 'Multilingualism & Special Features', paras: ['Luxembourg is officially trilingual: Luxembourgish, French and German are equal official languages. In everyday life you encounter all three languages. For German-speaking visitors communication is therefore effortless.', 'This cultural layering is part of the appeal: Luxembourg feels simultaneously familiar and foreign, right in the heart of Europe.'] },
      { title: 'Eating & Drinking', paras: ["Luxembourg's cuisine combines influences from Germany, France and Belgium. The national dish Judd mat Gaardebounen is on the menu in many traditional restaurants. It's often accompanied by Moselle Luxembourgeoise.", "In the Grund district and around the Place d'Armes, there's something for every taste."] },
      { title: 'Practical Tips', paras: ['Public transport in Luxembourg has been completely free since 2020. Those who arrive by car should best park in one of the car parks on the outskirts and use the free bus into the city centre.', 'Many museums and attractions in Luxembourg are closed on Mondays. Ideally plan your trip from Tuesday to Sunday.'] },
      { title: 'Getting Here from Kirchweiler', paras: ['From Kirchweiler drive towards Bitburg, then take the A60 to Luxembourg. The route passes through the Southern Eifel. At the border there are no usual customs checks as Luxembourg is a Schengen member. Total distance: around 95 kilometres, journey time approx. 1 hour.'] },
    ],
    ctaText: 'Luxembourg as a day trip from the Eifel – our holiday apartment in Kirchweiler is only approx. 95 km away.',
    ctaBtn: 'Book Now',
    ctaBack: 'All Specials',
  },
  nl: {
    breadcrumb: 'Specials',
    pageTitle: 'Luxemburg',
    distance: 'ca. 95 km · ca. 1 uur van Kirchweiler',
    intro: "Luxemburg is een van de kleinste landen van Europa en tegelijkertijd een van de meest verrassende steden. De hoofdstad combineert middeleeuwse vestingsarchitectuur met een kosmopolitische, Europese sfeer: EU-instellingen, internationale financiele wereld, een levendige culturele scene en een UNESCO-beschermde oude stad op hoge rotsen. Vanuit Kirchweiler is het zo'n 95 kilometer.",
    sections: [
      { title: 'UNESCO Werelderfgoed Oude Stad', paras: ['De oude stad van Luxemburg staat sinds 1994 op de UNESCO Werelderfgoedlijst, erkend voor zijn unieke vestingwerken. De rotsplateaus geven Luxemburg een onverwisselbare topografie.', 'De oude stad is te voet in een halve dag goed te verkennen. De paden lopen langs de Bockrotsen en stadsmuren, over trappen en door tunnels.'] },
      { title: 'Casemates du Bock', paras: ['De Casemates du Bock zijn een ondergronds netwerk van gangen, kamers en tunnels diep in de rots gegraven. Met meer dan 17 kilometer totale lengte dienden de casemates eeuwenlang als beschermingsfaciliteit.', 'Vandaag is een deel van het complex open voor bezoekers en maakt een fascinerende tocht door de geschiedenis van Luxemburg mogelijk.'] },
      { title: 'Het Grundkwartier', paras: ["Diep in het Alzettedal ligt het Grundkwartier, de historische benedenstad van Luxemburg, bereikbaar via steile trappen of een lift. Hier kabbelt de Alzette door een klein dorpje dat meer op een middeleeuws dorp lijkt.", 'De Grund staat bekend om zijn gezellige restaurants en kroegen die vooral s avonds veel publiek trekken. De wandeling langs de Alzette is een bijzondere ervaring.'] },
      { title: "Place d'Armes & Oude Stad", paras: ["Het hart van de Luxemburgse oude stad is de Place d'Armes, een levendig plein met cafes en restaurants waar zowel inwoners als toeristen samenkomen. Vanaf hier is het Groothertogelijk Paleis slechts een paar stappen verwijderd.", "De steegjes rond de Place d'Armes bieden prettig flaneerterrein met boetieks en kleine galerien."] },
      { title: 'Musea in Luxemburg', paras: ["Voor kunstliefhebbers is het MUDAM een hoogtepunt: het spectaculaire gebouw van I.M. Pei herbergt een belangrijke collectie hedendaagse kunst. Direct ernaast staat het Philharmoniegebouw.", 'Het Nationaal Museum voor Geschiedenis en Kunst (MNHA) toont de geschiedenis van Luxemburg van de oudheid tot de moderne tijd.'] },
      { title: 'Winkelen in Luxemburg', paras: ["Luxemburg is een populaire winkelbestemming, niet in het minst vanwege het gematigde btw-tarief. Tabak, alcohol, elektronica en parfum zijn goedkoper dan in Duitsland. De winkelstraten bevinden zich in de bovenstad.", 'Wie liever in een ontspannen sfeer snuffelt, vindt kleinere boetieks met lokale ontwerpers.'] },
      { title: 'Meertaligheid & Bijzonderheden', paras: ['Luxemburg is officieel drietalig: Luxemburgs, Frans en Duits zijn gelijkwaardige officiele talen. Voor Duitstalige bezoekers is communicatie dan ook probleemloos.', 'Deze culturele gelaagdheid maakt deel uit van de aantrekkingskracht: Luxemburg voelt tegelijkertijd vertrouwd en vreemd aan.'] },
      { title: 'Eten & Drinken', paras: ["De Luxemburgse keuken combineert invloeden uit Duitsland, Frankrijk en Belgie. Het nationale gerecht Judd mat Gaardebounen staat in veel traditionele restaurants op de kaart.", "In het Grundkwartier en rondom de Place d'Armes is er voor elk smaak iets te vinden."] },
      { title: 'Praktische Tips', paras: ['Het openbaar vervoer in Luxemburg is sinds 2020 volledig gratis. Wie met de auto aankomt, parkeert het beste aan de rand van de stad en gebruikt de gratis bus naar het stadscentrum.', 'Veel musea zijn op maandag gesloten. Plan uw uitstap idealiter van dinsdag tot zondag.'] },
      { title: 'Reizen vanuit Kirchweiler', paras: ["Vanuit Kirchweiler rijdt u richting Bitburg, dan via de A60 naar Luxemburg. De route voert door de Zuid-Eifel. Totale afstand: zo'n 95 kilometer, reistijd ca. 1 uur."] },
    ],
    ctaText: 'Luxemburg als daguitstap uit de Eifel – ons vakantieappartement in Kirchweiler ligt op slechts ca. 95 km.',
    ctaBtn: 'Nu boeken',
    ctaBack: 'Alle Specials',
  },
  fr: {
    breadcrumb: 'Specials',
    pageTitle: 'Luxembourg',
    distance: 'environ 95 km · environ 1 heure de Kirchweiler',
    intro: "Le Luxembourg est l'un des plus petits pays d'Europe et simultanement l'une des villes les plus surprenantes. La capitale combine architecture fortifiee medievale avec une atmosphere cosmopolite et europeenne: EU, finance internationale, scene culturelle et vieille ville protegee par l'UNESCO. Depuis Kirchweiler, il y a environ 95 kilometres.",
    sections: [
      { title: "Vieille Ville Patrimoine de l'UNESCO", paras: ["La vieille ville de Luxembourg est inscrite sur la liste du patrimoine mondial de l'UNESCO depuis 1994. Les plateaux rocheux sur lesquels la ville est construite donnent a Luxembourg une topographie inimitable.", "La vieille ville peut se visiter a pied en une demi-journee. Les chemins longent les rochers du Bock et les remparts, passent par des escaliers et des tunnels."] },
      { title: 'Casemates du Bock', paras: ["Les Casemates du Bock sont un reseau souterrain de couloirs, chambres et galeries creuses profondement dans le rocher. Avec plus de 17 kilometres de longueur totale, elles ont servi comme installation de protection.", "Aujourd'hui, une partie du complexe est ouverte aux visiteurs. Les casemates sont l'une des attractions les plus visitees du pays."] },
      { title: 'Le Quartier Grund', paras: ["Tout au fond de la vallee de l'Alzette se trouve le quartier Grund, le quartier historique de la ville basse, accessible par de raides escaliers ou un ascenseur.", "Le Grund est connu pour ses restaurants et pubs confortables. La promenade le long de l'Alzette est une experience particuliere."] },
      { title: "Place d'Armes & Vieille Ville", paras: ["Le coeur de la vieille ville est la Place d'Armes, une place animee avec cafes et restaurants ou se retrouvent locaux et touristes. De la, le Palais Grand-Ducal n'est qu'a quelques pas.", "Les ruelles autour de la Place d'Armes offrent un terrain de flanerie agreable avec boutiques et petites galeries."] },
      { title: 'Musees a Luxembourg', paras: ["Pour les amateurs d'art, le MUDAM est un point fort: le spectaculaire batiment d'I.M. Pei abrite une importante collection d'art contemporain. Juste a cote se trouve la Philharmonie.", "Le Musee National d'Histoire et d'Art (MNHA) presente l'histoire du Luxembourg de facon compacte."] },
      { title: 'Shopping a Luxembourg', paras: ["Le Luxembourg est une destination shopping populaire avec un taux de TVA modere. Le tabac, l'alcool, l'electronique et les parfums sont moins chers qu'en Allemagne.", 'Ceux qui preferent fouiner dans une atmosphere detenue trouveront de petites boutiques avec des createurs locaux.'] },
      { title: 'Multilinguisme & Particularites', paras: ["Le Luxembourg est officiellement trilingue: le luxembourgeois, le francais et l'allemand. Pour les visiteurs germanophones, la communication est sans probleme.", "Cette superposition culturelle fait partie de l'attrait: le Luxembourg se sent a la fois familier et etranger."] },
      { title: 'Manger & Boire', paras: ["La cuisine luxembourgeoise combine des influences d'Allemagne, de France et de Belgique. Le plat national Judd mat Gaardebounen figure sur la carte de nombreux restaurants.", "Dans le quartier Grund et autour de la Place d'Armes, on trouve quelque chose pour tous les gouts."] },
      { title: 'Conseils Pratiques', paras: ["Les transports publics au Luxembourg sont entierement gratuits depuis 2020. Garez-vous en peripherie et utilisez le bus gratuit vers le centre-ville.", "De nombreux musees ferment le lundi. Planifiez votre excursion du mardi au dimanche."] },
      { title: 'Itineraire depuis Kirchweiler', paras: ["Depuis Kirchweiler, prenez la direction de Bitburg, puis l'A60 vers Luxembourg. A la frontiere, il n'y a pas de controles douaniers. Distance totale: environ 95 kilometres."] },
    ],
    ctaText: "Luxembourg comme excursion d'une journee depuis l'Eifel – notre appartement a Kirchweiler n'est qu'a environ 95 km.",
    ctaBtn: 'Reserver Maintenant',
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
    'de': 'Ausflug Luxemburg – UNESCO-Altstadt, 95 km',
    'en': 'Day Trip to Luxembourg – UNESCO Old Town, 95 km',
    'nl': 'Daguitstap naar Luxemburg – UNESCO Oude Stad, 95 km',
    'fr': 'Excursion au Luxembourg – Vieille Ville UNESCO, 95 km',
  }
  const descs = {
    'de': 'Luxemburg Tagesausflug: UNESCO-Altstadt, Bock-Kasematten und europäische Hauptstadt – 95 km.',
    'en': 'Luxembourg day trip: UNESCO old town, Bock Casemates and European capital – 95 km away.',
    'nl': 'Luxemburg daguitstap: UNESCO Oude Stad, Bock Casemates en Europese hoofdstad – 95 km.',
    'fr': 'Excursion Luxembourg: Vieille ville UNESCO, Casemates du Bock et capitale europeenne – a 95 km.',
  }
  const l = locale as keyof typeof titles
  return generateSeoMetadata('/specials/luxemburg', locale, titles[l] || titles.de, descs[l] || descs.de)
}

export default async function LuxemburgPage() {
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
