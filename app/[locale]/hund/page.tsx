import type { Metadata } from 'next'
import Link from 'next/link'
import { getLocale } from 'next-intl/server'
import { generateSeoMetadata } from '@/lib/seo';

const translations = {
  de: {
    meta: {
      title: 'Urlaub mit Hund in der Vulkaneifel – Wanderwege, Seen & Ausflüge',
      description: 'Hundefreundliche Ausflüge in der Vulkaneifel: Freilinger See mit Hundestrand, Wanderwege, Dauner Maare, Lieserpfad.',
    },
    hero: { title: 'Urlaub mit Hund', subtitle: 'in der Vulkaneifel' },
    heroSubtext: 'Die schönsten Wanderwege, Badeseen und Ausflugsziele für Sie und Ihren Vierbeiner – rund um Kirchweiler und Daun.',
    intro: 'Die Vulkaneifel ist ein Paradies für Hunde und ihre Besitzer. Weitläufige Wälder, ruhige Wanderwege und hundefreundliche Ausflugsziele machen die Region zum idealen Reiseziel.',
    introSectionTitle: 'Warum die Vulkaneifel ideal für Hundeurlaub ist',
    introPara2: 'Hunde können hier frei durchatmen: Die Wanderwege sind gut beschildert, wenig frequentiert und führen durch abwechslungsreiche Landschaft – von vulkanischen Maar-Ufern über dichte Buchenwälder bis hin zu offenen Wiesen und dem Liesertal. Naturnahe Wasserstellen gibt es entlang vieler Routen.',
    introPara3: 'Auf dieser Seite finden Sie die besten Ausflugsziele, Badeseen und Wanderrouten für Hunde in der Vulkaneifel – mit konkreten Angaben zu Entfernungen, Leinenpflicht und Besonderheiten.',
    sections: { lakes: 'Badeseen mit Hund', trails: 'Wanderwege mit Hund', tips: 'Praktische Tipps' },
    cta: 'Verfügbarkeit prüfen',
    ctaNote: 'Hunde sind in unserer Ferienwohnung herzlich willkommen.',
    seoTitle: 'Ferienwohnung mit Hund in der Vulkaneifel',
    seoPara1: 'Wer Urlaub mit Hund in der Vulkaneifel plant, findet rund um Daun und Kirchweiler eine der hundfreundlichsten Regionen Deutschlands. Die Kombination aus ruhiger Lage, ausgedehnten Waldgebieten und einer überschaubaren Tourismusdichte macht die Gegend besonders attraktiv für Hundebesitzer, die abseits von überfüllten Feriengebieten Urlaub machen möchten.',
    seoPara2: 'Der Hundestrand am Freilinger See bei Blankenheim (ca. 25 km) ist einer der wenigen ausgewiesenen Hundestrand-Bereiche in der Region. Für tägliche Spaziergänge bieten die Waldwege rund um Kirchweiler eine ideale Basis – direkt vor der Haustür, ohne Anfahrt. Der Lieserpfad mit seinen 74 Kilometern entlang der Lieser ist für mehrtägige Wanderungen mit Hund geeignet.',
    seoPara3: 'Hundefreundliche Unterkunft Daun und Umgebung – das Angebot wächst. Wer eine ruhige, naturnahe Basis für seinen Hundeurlaub in der Eifel sucht, findet in Kirchweiler einen idealen Ausgangspunkt für alle genannten Ausflugsziele.',
    seen: [
      {
        name: 'Freilinger See bei Blankenheim',
        entfernung: 'ca. 25 km von Kirchweiler',
        text: 'Der Freilinger See bei Blankenheim hat einen ausgewiesenen Hundebereich, an dem Hunde frei ins Wasser dürfen. Der Parkplatz ist fußläufig erreichbar. Ideal an Wochentagen und in den frühen Morgenstunden – dann ist der See noch ruhig und die Wege sind für Vierbeiner am angenehmsten. An Wochenenden im Sommer kann es voller werden.',
        hinweis: 'Hundebereich ausgewiesen · Leine auf dem Weg zum See empfohlen',
      },
      {
        name: 'Maare der Vulkaneifel',
        entfernung: 'Dauner Maare ab Kirchweiler ca. 15 km (19 Min. per Auto)',
        text: 'Die Dauner Maare – Gemündener, Schalkenmehrener und Weinfelder Maar – sind mit Hund begehbar. Am Ufer gilt Leinenpflicht, da es sich um Naturschutzgebiete handelt. Das Badeverbot in den Maaren gilt für Hunde wie für Menschen gleichermaßen. Die Rundwanderwege rund um die Maare eignen sich hervorragend für ruhige Spaziergänge.',
        hinweis: 'Leinenpflicht am Ufer · Betreten der Naturschutzzone verboten',
      },
    ],
    wege: [
      {
        name: 'Rundwanderung Dauner Maare',
        laenge: 'ca. 8 km',
        schwierigkeit: 'leicht',
        text: 'Die Maare-Rundwanderung führt an allen drei Dauner Maaren vorbei. Schattige Waldabschnitte wechseln sich mit offenen Wiesenwegen ab. Hunde sollten am Maar-Ufer an der Leine geführt werden. Wasser unterwegs an den Maaren vorhanden.',
      },
      {
        name: 'Lieserpfad – Etappe Daun',
        laenge: '74 km gesamt, Etappen à 15–20 km',
        schwierigkeit: 'mittel',
        text: 'Der Lieserpfad führt 74 km entlang der Lieser von Daun bis Wittlich. Für Hundebesitzer besonders attraktiv: Der Fluss bietet unterwegs natürliche Wasserstellen. Hunde sollten an der Leine geführt werden. Die Etappen zwischen Daun und Manderscheid sind landschaftlich reizvoll und wenig frequentiert.',
      },
      {
        name: 'Waldwege rund um Kirchweiler',
        laenge: 'variabel, 3–10 km',
        schwierigkeit: 'leicht',
        text: 'Direkt ab Kirchweiler führen Feldwege und Waldpfade in die umliegende Eifellandschaft. Wenig Verkehr, breite Forstwege und ruhige Wiesen – ideal für tägliche Spaziergänge ohne Autofahrt. Die Region ist dünn besiedelt und die Wege sind auch außerhalb der Saison gut begehbar.',
      },
      {
        name: 'Manderscheid – Liesertal',
        laenge: 'Burgenstieg ca. 6,6 km',
        schwierigkeit: 'leicht bis mittel',
        text: 'Der Manderscheider Burgenstieg führt durch das Liesertal an beiden Burgruinen vorbei. Der Weg entlang der Lieser ist hundefreundlich, ruhig und bietet natürliche Wasserquellen. Leine auf dem gesamten Weg empfohlen. Anfahrt ab Kirchweiler ca. 15 km.',
      },
      {
        name: 'Gerolstein – Gerolsteiner Dolomiten',
        laenge: 'ca. 5–8 km',
        schwierigkeit: 'leicht',
        text: 'Das Felsenmassiv rund um Gerolstein bietet kurze, beeindruckende Spazierwege. Hunde sind auf den Hauptwegen erlaubt. Die Kasselburg ist für Hunde weniger geeignet – der Felsenpfad dort ist steil und schmal. Anfahrt ab Kirchweiler ca. 15 km.',
      },
      {
        name: 'HeimatSpuren Daun',
        laenge: 'Kleiner Dauner 8,5 km, Großer Dauner ca. 14 km',
        schwierigkeit: 'leicht bis mittel',
        text: 'Die zertifizierten HeimatSpuren-Rundwanderwege rund um Daun sind gut beschildert und bieten verschiedene Längen. Der MaareGlück-Weg führt an den Maaren entlang. Der Struthrundweg durch das Liesertal ist besonders ruhig und für Hunde gut geeignet.',
      },
    ],
    tipps: [
      {
        titel: 'Leinenpflicht in Naturschutzgebieten',
        text: 'In Rheinland-Pfalz gilt in ausgewiesenen Naturschutzgebieten Leinenpflicht für Hunde. Die Maare der Vulkaneifel sind Naturschutzgebiete – Hunde bitte immer angeleint führen. Außerhalb von Schutzgebieten gelten die Regelungen der jeweiligen Gemeinde.',
      },
      {
        titel: 'Zeckenschutz',
        text: 'Die Eifel ist kein FSME-Risikogebiet, Zecken sind aber von März bis November aktiv. Geeigneter Zeckenschutz für Hund und Mensch ist empfehlenswert. Nach jedem Waldspaziergang Hund und sich selbst absuchen.',
      },
      {
        titel: 'Wasser und Pausen',
        text: 'Auf längeren Wanderungen genügend Wasser für den Hund mitnehmen. An der Lieser und in Waldbächen gibt es natürliche Trinkstellen – trotzdem eigenes Wasser nicht vergessen, besonders im Sommer.',
      },
      {
        titel: 'Beste Reisezeit',
        text: 'Frühling (April/Mai) und Herbst (September/Oktober) sind ideal für Hundewanderungen in der Vulkaneifel: angenehme Temperaturen, trockene Wege, wenig Touristen. Im Sommer früh morgens starten.',
      },
      {
        titel: 'Tierarzt in der Region',
        text: 'In Daun (ca. 6 km) gibt es tierärztliche Versorgung. Für Notfälle außerhalb der Öffnungszeiten die nächste tierärztliche Notaufnahme vorab recherchieren.',
      },
      {
        titel: 'Hundefreundliche Gastronomie',
        text: 'Viele Restaurants und Cafés in der Vulkaneifel sind hundefreundlich. Im Zweifel vorab anrufen. Terrassen und Biergärten nehmen Hunde in der Regel gerne auf.',
      },
    ],
  },
  en: {
    meta: {
      title: 'Holiday with Dog in Vulkan Eifel – Trails, Lakes & Trips',
      description: 'Dog-friendly trips in the Vulkan Eifel: Freilinger See with dog beach, hiking trails, Daun Lakes, Lieser Path.',
    },
    hero: { title: 'Holiday with Your Dog', subtitle: 'in the Vulkan Eifel' },
    heroSubtext: 'The best hiking trails, swimming lakes and day trip destinations for you and your four-legged companion – around Kirchweiler and Daun.',
    intro: 'The Vulkan Eifel is a paradise for dogs and their owners. Vast forests, quiet hiking trails and dog-friendly attractions make the region an ideal destination.',
    introSectionTitle: 'Why the Vulkan Eifel is Ideal for a Dog Holiday',
    introPara2: 'Dogs can roam freely here: the hiking trails are well signposted, lightly trafficked and lead through varied landscapes – from volcanic lake shores through dense beech forests to open meadows and the Lieser valley. Natural water sources can be found along many routes.',
    introPara3: 'On this page you will find the best day trip destinations, swimming lakes and hiking routes for dogs in the Vulkan Eifel – with specific information about distances, leash requirements and special features.',
    sections: { lakes: 'Lakes for Dogs', trails: 'Hiking Trails with Dogs', tips: 'Practical Tips' },
    cta: 'Check Availability',
    ctaNote: 'Dogs are warmly welcome in our holiday apartment.',
    seoTitle: 'Holiday Apartment with Dog in the Vulkan Eifel',
    seoPara1: 'Those planning a dog holiday in the Vulkan Eifel will find one of the most dog-friendly regions in Germany around Daun and Kirchweiler. The combination of a quiet location, extensive woodland areas and manageable tourist density makes the area particularly attractive for dog owners who want a holiday away from overcrowded holiday destinations.',
    seoPara2: 'The dog beach at Freilinger See near Blankenheim (approx. 25 km) is one of the few designated dog beach areas in the region. For daily walks, the forest paths around Kirchweiler offer an ideal base – right on the doorstep, no driving needed. The Lieser Path with its 74 kilometres along the Lieser is suitable for multi-day hikes with dogs.',
    seoPara3: 'Dog-friendly accommodation in Daun and surroundings – the choice is growing. Those looking for a quiet, nature-close base for their dog holiday in the Eifel will find an ideal starting point for all the destinations mentioned in Kirchweiler.',
    seen: [
      {
        name: 'Freilinger See near Blankenheim',
        entfernung: 'approx. 25 km from Kirchweiler',
        text: 'Freilinger See near Blankenheim has a designated dog area where dogs are allowed to swim freely. The car park is within walking distance. Ideal on weekdays and in the early morning hours – the lake is still quiet then and the paths are most pleasant for four-legged friends. On summer weekends it can get busier.',
        hinweis: 'Designated dog area · Leash recommended on the way to the lake',
      },
      {
        name: 'Maare of the Vulkan Eifel',
        entfernung: 'Daun Lakes from Kirchweiler approx. 15 km (19 min by car)',
        text: 'The Daun Lakes – Gemündener, Schalkenmehrener and Weinfelder Maar – can be visited with dogs. Dogs must be kept on a leash on the banks as these are nature reserves. The swimming ban in the maars applies equally to dogs and humans. The circular hiking trails around the maars are excellent for quiet walks.',
        hinweis: 'Leash required on the banks · Entry to the nature reserve zone prohibited',
      },
    ],
    wege: [
      {
        name: 'Circular Walk Daun Lakes',
        laenge: 'approx. 8 km',
        schwierigkeit: 'easy',
        text: 'The Maare circular walk passes all three Daun Lakes. Shady woodland sections alternate with open meadow paths. Dogs should be kept on a leash at the lake shores. Water available along the way at the maars.',
      },
      {
        name: 'Lieser Path – Daun Stage',
        laenge: '74 km total, stages of 15–20 km',
        schwierigkeit: 'moderate',
        text: 'The Lieser Path runs 74 km along the Lieser from Daun to Wittlich. Particularly attractive for dog owners: the river provides natural water sources along the way. Dogs should be kept on a leash. The stages between Daun and Manderscheid are scenically beautiful and lightly frequented.',
      },
      {
        name: 'Forest Paths around Kirchweiler',
        laenge: 'variable, 3–10 km',
        schwierigkeit: 'easy',
        text: 'Directly from Kirchweiler, field paths and forest trails lead into the surrounding Eifel landscape. Little traffic, wide forestry roads and quiet meadows – ideal for daily walks without driving. The region is sparsely populated and the paths are accessible even outside the season.',
      },
      {
        name: 'Manderscheid – Lieser Valley',
        laenge: 'Burgenstieg approx. 6.6 km',
        schwierigkeit: 'easy to moderate',
        text: 'The Manderscheid Burgenstieg leads through the Lieser valley past both castle ruins. The path along the Lieser is dog-friendly, quiet and offers natural water sources. Leash recommended throughout. Drive from Kirchweiler approx. 15 km.',
      },
      {
        name: 'Gerolstein – Gerolsteiner Dolomites',
        laenge: 'approx. 5–8 km',
        schwierigkeit: 'easy',
        text: 'The rock formations around Gerolstein offer short, impressive walking paths. Dogs are allowed on the main paths. The Kasselburg is less suitable for dogs – the rock path there is steep and narrow. Drive from Kirchweiler approx. 15 km.',
      },
      {
        name: 'HeimatSpuren Daun',
        laenge: 'Kleiner Dauner 8.5 km, Großer Dauner approx. 14 km',
        schwierigkeit: 'easy to moderate',
        text: 'The certified HeimatSpuren circular hiking routes around Daun are well signposted and offer various lengths. The MaareGlück trail runs along the maars. The Struthrundweg through the Lieser valley is particularly quiet and well suited to dogs.',
      },
    ],
    tipps: [
      {
        titel: 'Leash Rules in Nature Reserves',
        text: 'In Rhineland-Palatinate, dogs must be kept on a leash in designated nature reserves. The maars of the Vulkan Eifel are nature reserves – please always keep dogs on a leash. Outside protected areas, the regulations of the respective municipality apply.',
      },
      {
        titel: 'Tick Protection',
        text: 'The Eifel is not a TBE risk area, but ticks are active from March to November. Suitable tick protection for dog and human is recommended. After every forest walk, check both your dog and yourself.',
      },
      {
        titel: 'Water and Rest Breaks',
        text: 'Bring enough water for your dog on longer hikes. Natural drinking spots can be found at the Lieser and in forest streams – but don\'t forget your own water, especially in summer.',
      },
      {
        titel: 'Best Time to Travel',
        text: 'Spring (April/May) and autumn (September/October) are ideal for dog hikes in the Vulkan Eifel: pleasant temperatures, dry paths, few tourists. In summer, start early in the morning.',
      },
      {
        titel: 'Vet in the Region',
        text: 'Veterinary care is available in Daun (approx. 6 km). Research the nearest emergency vet clinic in advance for out-of-hours emergencies.',
      },
      {
        titel: 'Dog-Friendly Dining',
        text: 'Many restaurants and cafés in the Vulkan Eifel are dog-friendly. When in doubt, call ahead. Terraces and beer gardens generally welcome dogs.',
      },
    ],
  },
  nl: {
    meta: {
      title: 'Vakantie met Hond in de Vulkaan Eifel – Wandelpaden & Meren',
      description: 'Hondenvriendellijke uitjes in de Vulkaan Eifel: Freilinger See met hondenstrand, wandelpaden, Dauner Maren.',
    },
    hero: { title: 'Vakantie met Hond', subtitle: 'in de Vulkaan Eifel' },
    heroSubtext: 'De mooiste wandelpaden, zwemmeren en uitstapjes voor u en uw viervoeter – rond Kirchweiler en Daun.',
    intro: 'De Vulkaan Eifel is een paradijs voor honden en hun baasjes. Uitgestrekte bossen, rustige wandelpaden en hondenvriendelijke attracties maken de regio tot een ideale bestemming.',
    introSectionTitle: 'Waarom de Vulkaan Eifel ideaal is voor een hondenvakantie',
    introPara2: 'Honden kunnen hier vrij ademhalen: de wandelpaden zijn goed bewegwijzerd, weinig bezocht en leiden door afwisselend landschap – van vulkanische maarooevers door dichte beukenbossen tot open weiden en het Liesertal. Langs veel routes zijn er natuurlijke waterplaatsen.',
    introPara3: 'Op deze pagina vindt u de beste uitstapbestemmingen, zwemmeren en wandelroutes voor honden in de Vulkaan Eifel – met concrete gegevens over afstanden, aanlijnplicht en bijzonderheden.',
    sections: { lakes: 'Meren voor Honden', trails: 'Wandelpaden met Honden', tips: 'Praktische Tips' },
    cta: 'Beschikbaarheid Controleren',
    ctaNote: 'Honden zijn van harte welkom in ons vakantieappartement.',
    seoTitle: 'Vakantieappartement met Hond in de Vulkaan Eifel',
    seoPara1: 'Wie een hondenvakantie in de Vulkaan Eifel plant, vindt rond Daun en Kirchweiler een van de hondvriendelijkste regio\'s van Duitsland. De combinatie van een rustige ligging, uitgestrekte bosgebieden en een beheersbare toerismesdichtheid maakt de streek bijzonder aantrekkelijk voor hondenbezitters die op vakantie willen buiten de drukke vakantiegebieden.',
    seoPara2: 'Het hondenstrand bij de Freilinger See bij Blankenheim (ca. 25 km) is een van de weinige aangewezen hondenstrandgebieden in de regio. Voor dagelijkse wandelingen bieden de boswegen rond Kirchweiler een ideale uitvalsbasis – direct voor de deur, zonder rijden. Het Lieserpfad met zijn 74 kilometer langs de Lieser is geschikt voor meerdaagse wandelingen met honden.',
    seoPara3: 'Hondvriendelijke accommodatie in Daun en omgeving – het aanbod groeit. Wie een rustige, natuurrijke basis zoekt voor zijn hondenvakantie in de Eifel, vindt in Kirchweiler een ideaal vertrekpunt voor alle genoemde bestemmingen.',
    seen: [
      {
        name: 'Freilinger See bij Blankenheim',
        entfernung: 'ca. 25 km van Kirchweiler',
        text: 'De Freilinger See bij Blankenheim heeft een aangewezen hondengebied waar honden vrij het water in mogen. Het parkeerterrein is op loopafstand. Ideaal op weekdagen en in de vroege ochtenduren – dan is het meer nog rustig en zijn de paden het aangenaamst voor viervoeters. In de zomer in het weekend kan het drukker worden.',
        hinweis: 'Aangewezen hondengebied · Lijn aanbevolen op weg naar het meer',
      },
      {
        name: 'Maren van de Vulkaan Eifel',
        entfernung: 'Dauner Maren vanuit Kirchweiler ca. 15 km (19 min. per auto)',
        text: 'De Dauner Maren – Gemündener, Schalkenmehrener en Weinfelder Maar – zijn met honden begaanbaar. Aan de oever geldt aanlijnplicht, omdat het natuurgebieden zijn. Het zwemverbod in de maren geldt voor honden evenals voor mensen. De rondelwandelpaden rond de maren zijn uitstekend geschikt voor rustige wandelingen.',
        hinweis: 'Aanlijnplicht aan de oever · Betreden van het natuurgebied verboden',
      },
    ],
    wege: [
      {
        name: 'Rondwandeling Dauner Maren',
        laenge: 'ca. 8 km',
        schwierigkeit: 'gemakkelijk',
        text: 'De Maren-rondwandeling passeert alle drie de Dauner Maren. Schaduwrijke bosgedeelten wisselen af met open weidepaden. Honden moeten aan de lijn blijven aan de maaroever. Onderweg is water beschikbaar bij de maren.',
      },
      {
        name: 'Lieserpfad – Etappe Daun',
        laenge: '74 km totaal, etappes van 15–20 km',
        schwierigkeit: 'gemiddeld',
        text: 'Het Lieserpfad loopt 74 km langs de Lieser van Daun tot Wittlich. Bijzonder aantrekkelijk voor hondenbezitters: de rivier biedt onderweg natuurlijke drinkplaatsen. Honden moeten aan de lijn. De etappes tussen Daun en Manderscheid zijn landschappelijk mooi en weinig bezocht.',
      },
      {
        name: 'Boswegen rond Kirchweiler',
        laenge: 'variabel, 3–10 km',
        schwierigkeit: 'gemakkelijk',
        text: 'Direct vanuit Kirchweiler leiden veldwegen en boswegen naar het omliggende Eifellandschap. Weinig verkeer, brede bospaden en rustige weiden – ideaal voor dagelijkse wandelingen zonder autorit. De regio is dun bevolkt en de paden zijn ook buiten het seizoen goed begaanbaar.',
      },
      {
        name: 'Manderscheid – Liesertal',
        laenge: 'Burgenstieg ca. 6,6 km',
        schwierigkeit: 'gemakkelijk tot gemiddeld',
        text: 'Het Manderscheider Burgenstieg leidt door het Liesertal langs beide burgruïnes. Het pad langs de Lieser is hondvriendelijk, rustig en biedt natuurlijke waterbronnen. Lijn aanbevolen over het gehele pad. Rijafstand vanuit Kirchweiler ca. 15 km.',
      },
      {
        name: 'Gerolstein – Gerolsteiner Dolomieten',
        laenge: 'ca. 5–8 km',
        schwierigkeit: 'gemakkelijk',
        text: 'Het rotsmassief rond Gerolstein biedt korte, indrukwekkende wandelpaden. Honden zijn toegestaan op de hoofdwegen. De Kasselburg is minder geschikt voor honden – het rotspad daar is steil en smal. Rijafstand vanuit Kirchweiler ca. 15 km.',
      },
      {
        name: 'HeimatSpuren Daun',
        laenge: 'Kleiner Dauner 8,5 km, Großer Dauner ca. 14 km',
        schwierigkeit: 'gemakkelijk tot gemiddeld',
        text: 'De gecertificeerde HeimatSpuren-rondwandelpaden rond Daun zijn goed bewegwijzerd en bieden verschillende lengtes. De MaareGlück-route loopt langs de maren. Het Struthrundweg door het Liesertal is bijzonder rustig en goed geschikt voor honden.',
      },
    ],
    tipps: [
      {
        titel: 'Aanlijnplicht in Natuurgebieden',
        text: 'In Rijnland-Palts geldt in aangewezen natuurgebieden aanlijnplicht voor honden. De maren van de Vulkaan Eifel zijn natuurgebieden – honden altijd aangelijnd houden. Buiten beschermde gebieden gelden de regels van de betreffende gemeente.',
      },
      {
        titel: 'Bescherming tegen Teken',
        text: 'De Eifel is geen FSME-risicogebied, maar teken zijn van maart tot november actief. Geschikte tekenbescherming voor hond en mens is aanbevolen. Controleer na elke boswandeling zowel uw hond als uzelf.',
      },
      {
        titel: 'Water en Pauzes',
        text: 'Neem op langere wandelingen voldoende water mee voor uw hond. Bij de Lieser en in bosbeken zijn er natuurlijke drinkplaatsen – maar vergeet uw eigen water niet, vooral in de zomer.',
      },
      {
        titel: 'Beste Reistijd',
        text: 'Lente (april/mei) en herfst (september/oktober) zijn ideaal voor hondenwandelingen in de Vulkaan Eifel: aangename temperaturen, droge paden, weinig toeristen. Start in de zomer vroeg in de ochtend.',
      },
      {
        titel: 'Dierenarts in de Regio',
        text: 'In Daun (ca. 6 km) is dierengeneeskundige zorg beschikbaar. Onderzoek van tevoren de dichtstbijzijnde spoedkliniek voor dieren buiten openingstijden.',
      },
      {
        titel: 'Hondvriendelijke Horeca',
        text: 'Veel restaurants en cafés in de Vulkaan Eifel zijn hondvriendelijk. Bij twijfel vooraf bellen. Terrassen en biergartens verwelkomen honden over het algemeen graag.',
      },
    ],
  },
  fr: {
    meta: {
      title: "Vacances avec Chien dans l'Eifel Volcanique – Sentiers & Lacs",
      description: "Sorties chien-friendly dans l'Eifel volcanique: Freilinger See avec plage pour chiens, sentiers de randonnée.",
    },
    hero: { title: 'Vacances avec Votre Chien', subtitle: "dans l'Eifel Volcanique" },
    heroSubtext: "Les plus beaux sentiers de randonnée, lacs de baignade et destinations d'excursion pour vous et votre compagnon à quatre pattes – autour de Kirchweiler et Daun.",
    intro: "L'Eifel volcanique est un paradis pour les chiens et leurs propriétaires. Vastes forêts, sentiers tranquilles et attractions chien-friendly font de la région une destination idéale.",
    introSectionTitle: "Pourquoi l'Eifel Volcanique est Idéale pour des Vacances avec Chien",
    introPara2: "Les chiens peuvent respirer librement ici : les sentiers de randonnée sont bien balisés, peu fréquentés et traversent des paysages variés – des rives volcaniques des maars à travers des forêts de hêtres denses jusqu'aux prairies ouvertes et la vallée de la Lieser. Des points d'eau naturels se trouvent le long de nombreux itinéraires.",
    introPara3: "Sur cette page vous trouverez les meilleures destinations d'excursion, lacs de baignade et itinéraires de randonnée pour chiens dans l'Eifel volcanique – avec des informations précises sur les distances, les obligations de laisse et les particularités.",
    sections: { lakes: 'Lacs pour Chiens', trails: 'Sentiers de Randonnée avec Chiens', tips: 'Conseils Pratiques' },
    cta: 'Vérifier la Disponibilité',
    ctaNote: 'Les chiens sont chaleureusement bienvenus dans notre appartement.',
    seoTitle: "Appartement de Vacances avec Chien dans l'Eifel Volcanique",
    seoPara1: "Ceux qui planifient des vacances avec chien dans l'Eifel volcanique trouveront autour de Daun et Kirchweiler l'une des régions les plus dog-friendly d'Allemagne. La combinaison d'un emplacement calme, de vastes zones forestières et d'une densité touristique gérable rend la région particulièrement attrayante pour les propriétaires de chiens qui souhaitent passer des vacances loin des destinations bondées.",
    seoPara2: "La plage pour chiens au Freilinger See près de Blankenheim (environ 25 km) est l'une des rares zones de plage pour chiens officielles de la région. Pour les promenades quotidiennes, les chemins forestiers autour de Kirchweiler offrent une base idéale – juste à la porte, sans conduire. Le Sentier de la Lieser avec ses 74 kilomètres le long de la Lieser convient aux randonnées de plusieurs jours avec des chiens.",
    seoPara3: "Hébergement chien-friendly à Daun et environs – l'offre s'élargit. Ceux qui cherchent une base calme et proche de la nature pour leurs vacances avec chien dans l'Eifel trouveront à Kirchweiler un point de départ idéal pour toutes les destinations mentionnées.",
    seen: [
      {
        name: 'Freilinger See près de Blankenheim',
        entfernung: 'environ 25 km de Kirchweiler',
        text: "Le Freilinger See près de Blankenheim dispose d'une zone chien désignée où les chiens sont autorisés à entrer librement dans l'eau. Le parking est accessible à pied. Idéal en semaine et tôt le matin – le lac est encore calme à ces moments-là et les chemins sont les plus agréables pour les animaux. Le week-end en été, cela peut devenir plus fréquenté.",
        hinweis: 'Zone chien désignée · Laisse recommandée sur le chemin du lac',
      },
      {
        name: "Maars de l'Eifel Volcanique",
        entfernung: 'Lacs de Daun depuis Kirchweiler environ 15 km (19 min en voiture)',
        text: "Les lacs de Daun – Gemündener, Schalkenmehrener et Weinfelder Maar – sont accessibles avec des chiens. La laisse est obligatoire sur les berges car ce sont des réserves naturelles. L'interdiction de baignade dans les maars s'applique également aux chiens et aux humains. Les circuits de randonnée autour des maars conviennent parfaitement aux promenades tranquilles.",
        hinweis: 'Laisse obligatoire sur les berges · Accès à la zone de réserve naturelle interdit',
      },
    ],
    wege: [
      {
        name: 'Randonnée Circulaire Lacs de Daun',
        laenge: 'environ 8 km',
        schwierigkeit: 'facile',
        text: "La randonnée circulaire des maars passe par les trois lacs de Daun. Des sections forestières ombragées alternent avec des chemins de prairie ouverts. Les chiens doivent être tenus en laisse sur les berges des maars. De l'eau est disponible le long du chemin aux maars.",
      },
      {
        name: 'Sentier de la Lieser – Étape Daun',
        laenge: '74 km au total, étapes de 15–20 km',
        schwierigkeit: 'modéré',
        text: "Le Sentier de la Lieser parcourt 74 km le long de la Lieser de Daun à Wittlich. Particulièrement attractif pour les propriétaires de chiens : la rivière offre des points d'eau naturels en chemin. Les chiens doivent être tenus en laisse. Les étapes entre Daun et Manderscheid sont paysagèrement belles et peu fréquentées.",
      },
      {
        name: 'Chemins Forestiers autour de Kirchweiler',
        laenge: 'variable, 3–10 km',
        schwierigkeit: 'facile',
        text: "Directement depuis Kirchweiler, des chemins agricoles et forestiers mènent dans le paysage de l'Eifel environnant. Peu de circulation, larges pistes forestières et prairies calmes – idéal pour des promenades quotidiennes sans voiture. La région est peu peuplée et les chemins sont praticables même hors saison.",
      },
      {
        name: 'Manderscheid – Vallée de la Lieser',
        laenge: 'Burgenstieg environ 6,6 km',
        schwierigkeit: 'facile à modéré',
        text: "Le Burgenstieg de Manderscheid traverse la vallée de la Lieser en passant par les deux ruines de châteaux. Le chemin le long de la Lieser est dog-friendly, calme et offre des sources d'eau naturelles. Laisse recommandée sur tout le chemin. Trajet depuis Kirchweiler environ 15 km.",
      },
      {
        name: 'Gerolstein – Dolomites de Gerolstein',
        laenge: 'environ 5–8 km',
        schwierigkeit: 'facile',
        text: "Le massif rocheux autour de Gerolstein offre de courtes promenades impressionnantes. Les chiens sont autorisés sur les chemins principaux. La Kasselburg est moins adaptée aux chiens – le chemin rocheux là-bas est raide et étroit. Trajet depuis Kirchweiler environ 15 km.",
      },
      {
        name: 'HeimatSpuren Daun',
        laenge: 'Kleiner Dauner 8,5 km, Großer Dauner environ 14 km',
        schwierigkeit: 'facile à modéré',
        text: "Les sentiers de randonnée circulaires certifiés HeimatSpuren autour de Daun sont bien balisés et offrent diverses longueurs. Le sentier MaareGlück longe les maars. Le Struthrundweg à travers la vallée de la Lieser est particulièrement calme et bien adapté aux chiens.",
      },
    ],
    tipps: [
      {
        titel: 'Obligation de Laisse dans les Réserves Naturelles',
        text: "En Rhénanie-Palatinat, les chiens doivent être tenus en laisse dans les réserves naturelles désignées. Les maars de l'Eifel volcanique sont des réserves naturelles – veuillez toujours garder les chiens en laisse. En dehors des zones protégées, les réglementations de la commune respective s'appliquent.",
      },
      {
        titel: 'Protection contre les Tiques',
        text: "L'Eifel n'est pas une zone à risque TBE, mais les tiques sont actives de mars à novembre. Une protection appropriée contre les tiques pour le chien et l'humain est recommandée. Après chaque promenade en forêt, vérifiez votre chien et vous-même.",
      },
      {
        titel: 'Eau et Pauses',
        text: "Emportez suffisamment d'eau pour votre chien lors de randonnées plus longues. Des points d'eau naturels se trouvent au bord de la Lieser et dans les ruisseaux forestiers – mais n'oubliez pas votre propre eau, surtout en été.",
      },
      {
        titel: 'Meilleure Période de Voyage',
        text: "Le printemps (avril/mai) et l'automne (septembre/octobre) sont idéaux pour les randonnées avec chien dans l'Eifel volcanique : températures agréables, chemins secs, peu de touristes. En été, partez tôt le matin.",
      },
      {
        titel: 'Vétérinaire dans la Région',
        text: "Des soins vétérinaires sont disponibles à Daun (environ 6 km). Renseignez-vous à l'avance sur la clinique vétérinaire d'urgence la plus proche pour les urgences en dehors des heures d'ouverture.",
      },
      {
        titel: 'Restauration Chien-Friendly',
        text: "De nombreux restaurants et cafés dans l'Eifel volcanique sont chien-friendly. En cas de doute, appelez à l'avance. Les terrasses et les jardins de bière accueillent généralement volontiers les chiens.",
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
    'de': 'Urlaub mit Hund in der Vulkaneifel – Wanderwege, Seen & Ausflüge',
    'en': 'Holiday with Dog in Vulkan Eifel – Trails, Lakes & Trips',
    'nl': 'Vakantie met Hond in de Vulkaan Eifel – Wandelpaden & Meren',
    'fr': 'Vacances avec Chien dans l\'Eifel Volcanique – Sentiers & Lacs',
  }
  const descs = {
    'de': 'Hundefreundliche Ausflüge in der Vulkaneifel: Freilinger See, Wanderwege, Dauner Maare.',
    'en': 'Dog-friendly trips in Vulkan Eifel: Freilinger See with dog beach, hiking trails, Daun Lakes.',
    'nl': 'Hondenvriendelijke uitjes in de Vulkaan Eifel: Freilinger See met hondenstrand, wandelpaden.',
    'fr': 'Sorties chien-friendly dans l\'Eifel: Freilinger See avec plage pour chiens, sentiers de randonnée.',
  }
  const l = locale as keyof typeof titles
  return generateSeoMetadata('/hund', locale, titles[l] || titles.de, descs[l] || descs.de)
}

export default async function HundPage() {
  const locale = await getLocale()
  const tr = translations[locale as keyof typeof translations] ?? translations.de

  return (
    <>
      {/* Hero */}
      <section style={{ background: '#1C3A22', color: 'white', padding: '5rem 1rem' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: '0.78rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#888', marginBottom: '1.5rem' }}>
            Vulkaneifel · Kirchweiler · Daun
          </p>
          <h1 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 'normal', marginBottom: '1.5rem', lineHeight: 1.2 }}>
            {tr.hero.title}<br />{tr.hero.subtitle}
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#AAA', lineHeight: 1.8, maxWidth: '560px', margin: '0 auto' }}>
            {tr.heroSubtext}
          </p>
        </div>
      </section>

      {/* Einleitung */}
      <section style={{ maxWidth: '760px', margin: '0 auto', padding: '5rem 1.5rem' }}>
        <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '1.6rem', fontWeight: 'normal', marginBottom: '1.5rem', color: '#1A1A1A' }}>
          {tr.introSectionTitle}
        </h2>
        <div style={{ color: '#444', lineHeight: 1.9, fontSize: '1rem' }}>
          <p style={{ marginBottom: '1.2rem' }}>
            {tr.intro}
          </p>
          <p style={{ marginBottom: '1.2rem' }}>
            {tr.introPara2}
          </p>
          <p>
            {tr.introPara3}
          </p>
        </div>
      </section>

      {/* Badeseen */}
      <section style={{ background: 'white', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '1.6rem', fontWeight: 'normal', marginBottom: '2.5rem', color: '#1A1A1A' }}>
            {tr.sections.lakes}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            {tr.seen.map((s) => (
              <div key={s.name} style={{ background: 'white', border: '1px solid #E5E5E5', padding: '2rem' }}>
                <p style={{ fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#888', marginBottom: '0.5rem' }}>
                  {s.entfernung}
                </p>
                <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '1.15rem', fontWeight: 'normal', marginBottom: '1rem', color: '#1A1A1A' }}>
                  {s.name}
                </h3>
                <p style={{ color: '#555', lineHeight: 1.8, fontSize: '0.92rem', marginBottom: '1rem' }}>
                  {s.text}
                </p>
                <p style={{ fontSize: '0.78rem', color: '#888', borderTop: '1px solid #E5E5E5', paddingTop: '0.75rem' }}>
                  {s.hinweis}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wanderwege */}
      <section style={{ maxWidth: '960px', margin: '0 auto', padding: '5rem 1.5rem' }}>
        <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '1.6rem', fontWeight: 'normal', marginBottom: '2.5rem', color: '#1A1A1A' }}>
          {tr.sections.trails}
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {tr.wege.map((w) => (
            <div key={w.name} style={{ borderTop: '1px solid #E5E5E5', padding: '2rem 0', display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '3rem' }}>
              <div>
                <p style={{ fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#888', marginBottom: '0.5rem' }}>
                  {w.laenge} · {w.schwierigkeit}
                </p>
                <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '1.05rem', fontWeight: 'normal', color: '#1A1A1A', lineHeight: 1.4 }}>
                  {w.name}
                </h3>
              </div>
              <p style={{ color: '#555', lineHeight: 1.8, fontSize: '0.92rem', alignSelf: 'center' }}>
                {w.text}
              </p>
            </div>
          ))}
          <div style={{ borderTop: '1px solid #E5E5E5' }} />
        </div>
      </section>

      {/* Praktische Tipps */}
      <section style={{ background: 'white', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '1.6rem', fontWeight: 'normal', marginBottom: '2.5rem', color: '#1A1A1A' }}>
            {tr.sections.tips}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1.5rem' }}>
            {tr.tipps.map((t) => (
              <div key={t.titel} style={{ background: 'white', border: '1px solid #E5E5E5', padding: '1.75rem' }}>
                <h3 style={{ fontSize: '0.88rem', fontWeight: 700, color: '#1A1A1A', marginBottom: '0.75rem', letterSpacing: '0.02em' }}>
                  {t.titel}
                </h3>
                <p style={{ color: '#666', lineHeight: 1.7, fontSize: '0.88rem' }}>
                  {t.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO-Textblock */}
      <section style={{ maxWidth: '760px', margin: '0 auto', padding: '5rem 1.5rem' }}>
        <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '1.6rem', fontWeight: 'normal', marginBottom: '1.5rem', color: '#1A1A1A' }}>
          {tr.seoTitle}
        </h2>
        <div style={{ color: '#444', lineHeight: 1.9, fontSize: '1rem' }}>
          <p style={{ marginBottom: '1.2rem' }}>
            {tr.seoPara1}
          </p>
          <p style={{ marginBottom: '1.2rem' }}>
            {tr.seoPara2}
          </p>
          <p>
            {tr.seoPara3}
          </p>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#1C3A22', color: 'white', padding: '5rem 1.5rem', textAlign: 'center' }}>
        <p style={{ fontSize: '0.78rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#666', marginBottom: '1.5rem' }}>
          Kirchweiler · Vulkaneifel
        </p>
        <p style={{ fontFamily: 'Georgia, serif', fontSize: '1.4rem', color: '#DDD', marginBottom: '2rem', fontWeight: 'normal' }}>
          {tr.ctaNote}
        </p>
        <Link
          href="/buchung"
          style={{ display: 'inline-block', background: 'white', color: '#1A1A1A', padding: '1rem 2.5rem', fontSize: '0.92rem', letterSpacing: '0.06em', textDecoration: 'none', textTransform: 'uppercase' }}
        >
          {tr.cta}
        </Link>
      </section>
    </>
  )
}
