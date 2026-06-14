import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ausflug nach Köln ab Kirchweiler – Dom, Museen & Rheinufer | MaarZeit Vulkaneifel",
  description:
    "Köln liegt ca. 130 km von der Ferienwohnung in der Vulkaneifel entfernt. Kölner Dom, Museen, Rheinufer, Altstadt und Stadtleben – Köln als Tagesausflug aus der Eifel.",
  keywords: [
    "Köln Ausflug Eifel",
    "Kölner Dom Tagesausflug",
    "Köln Ferienwohnung Eifel",
    "Köln Vulkaneifel",
    "Köln Tagesausflug Kirchweiler",
    "Köln Museen Ausflug",
  ],
};

export default function KoelnPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <nav className="text-sm text-stone-500 mb-6">
        <Link href="/specials" className="hover:text-green-800">Specials</Link>
        {" › "}
        <span>Köln</span>
      </nav>

      <h1 className="section-title">Köln</h1>
      <p className="text-stone-500 text-sm mb-8">ca. 130 km · ca. 1,5 Stunden ab Kirchweiler</p>

      <div className="space-y-8 text-stone-700 leading-relaxed">

        <p className="text-lg text-stone-600">
          Köln ist die nächste Großstadt – und eine, die mehr zu bieten hat, als der erste
          Blick vermuten lässt. Natürlich ist der Dom das unbestrittene Wahrzeichen, doch
          daneben wartet eine lebendige Brauhauskultur, ein dichtes Museumsangebot, ein
          breites Rheinufer und pulsierende Stadtteile, die zum Entdecken einladen.
          Von Kirchweiler aus sind es rund 130 Kilometer – eineinhalb Stunden auf der
          Autobahn, und schon liegt die Metropole vor Ihnen.
        </p>

        <section>
          <h2 className="text-2xl font-bold text-green-900 mb-3">Kölner Dom</h2>
          <p>
            Der Kölner Dom ist eines der bekanntesten Bauwerke Deutschlands und UNESCO-Welterbe.
            Über 600 Jahre dauerte seine Bauzeit – von 1248 bis zur Vollendung im Jahr 1880.
            Mit seinen 157 Metern Höhe dominiert er das Stadtbild und ist von fast überall
            in Köln sichtbar. Der Innenraum beeindruckt durch seine Größe, die gotischen
            Glasfenster und die mittelalterlichen Kunstschätze.
          </p>
          <p className="mt-3">
            Besonders lohnenswert ist die Besteigung der Domtürme: Über rund 533 Stufen
            gelangt man auf eine Aussichtsplattform, die einen weiten Blick über Köln und
            das Rheintal bietet. Die Schatzkammer des Doms beherbergt einen der bedeutendsten
            kirchlichen Kunstschätze Deutschlands, darunter den Dreikönigsschrein.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-green-900 mb-3">Altstadt & Rheinufer</h2>
          <p>
            Unmittelbar neben dem Dom erstreckt sich Kölns Altstadt mit ihren Brauhauskellern,
            Kneipen und kleinen Gassen. Die Kölner Altstadt ist kein museales Stück Stadt,
            sondern lebt: Hier treffen sich die Einheimischen zum Kölsch-Trinken, und das
            zu praktisch jeder Tageszeit. Besonders die Straßen rund um den Heumarkt
            und den Alter Markt sind lebendig und authentisch.
          </p>
          <p className="mt-3">
            Das Rheinufer bietet Platz für ausgedehnte Spaziergänge mit Blick auf den
            Strom, die Schiffe und die gegenüberliegende Seite mit Deutz und der
            Hohenzollernbrücke. An warmen Tagen verwandelt sich die Rheinpromenade in
            einen öffentlichen Treffpunkt.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-green-900 mb-3">Museen</h2>
          <p>
            Köln ist eine der museumsreichsten Städte Deutschlands. Das Museum Ludwig am
            Dom zeigt eine der bedeutendsten Sammlungen moderner und zeitgenössischer Kunst
            weltweit – Picasso, Pop Art, amerikanische Abstraktion und deutsche Gegenwartskunst
            unter einem Dach. Direkt daneben liegt das Wallraf-Richartz-Museum mit alter
            Meister-Malerei vom Mittelalter bis zum 19. Jahrhundert.
          </p>
          <p className="mt-3">
            Das Römisch-Germanische Museum, das sich momentan in einem Ausweichquartier
            befindet, während das Stammhaus saniert wird, beherbergt außergewöhnliche Funde
            aus der römischen Vergangenheit Kölns – darunter das berühmte Dionysos-Mosaik
            und den Poblicius-Grabmal. Köln war als „Colonia Claudia Ara Agrippinensium"
            eine der bedeutendsten Städte des Römischen Reiches nördlich der Alpen.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-green-900 mb-3">Hohenzollernbrücke</h2>
          <p>
            Die Hohenzollernbrücke verbindet Kölns Innenstadt mit dem rechtsrheinischen
            Stadtteil Deutz und ist die meistbefahrene Eisenbahnbrücke Deutschlands. Für
            Fußgänger und Radfahrer gibt es einen eigenen Weg, von dem aus man einen
            der schönsten Blicke auf den Dom genießt.
          </p>
          <p className="mt-3">
            Bekannt sind die Tausenden von Liebesschlössern, die an den Geländern der
            Brücke befestigt wurden – ein Phänomen, das mittlerweile in vielen Städten
            Nachahmung gefunden hat, in Köln aber seinen Ursprung hat. Die Brücke ist
            ein beliebtes Fotomotiv, besonders in der Abenddämmerung mit beleuchtetem Dom.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-green-900 mb-3">Kölsch & Brauhauskultur</h2>
          <p>
            Kölsch ist mehr als ein Bier – es ist ein Lebensgefühl. Das obergärige,
            helle Bier wird ausschließlich in Köln gebraut und nach dem Kölsch-Konvent
            von 1986 nur in der Region als „Kölsch" bezeichnet. Serviert wird es in
            schmalen 0,2-Liter-Gläsern, den sogenannten Stangen, die der Köbes –
            der Brauhauskelner – so lange nachfüllt, bis man einen Bierdeckel auf das
            Glas legt.
          </p>
          <p className="mt-3">
            Die traditionsreichsten Brauhäuser in der Altstadt – Früh am Dom, Gaffel am Dom
            und das etwas abseits gelegene Päffgen in der Friesenstraße – bieten neben dem
            Bier auch deftige Kölsche Küche: Himmel un Äd, Halver Hahn (Roggenbrötchen
            mit Käse) und Reibekuchen mit Apfelmus.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-green-900 mb-3">Shopping</h2>
          <p>
            Wer in Köln einkaufen möchte, hat die Qual der Wahl: Die Schildergasse und
            Hohe Straße sind zwei der meistfrequentierten Einkaufsstraßen Deutschlands
            mit allen bekannten Ketten. Wer lieber in individuellen Läden stöbert, ist
            im Belgischen Viertel oder in Ehrenfeld besser aufgehoben – dort gibt es
            Vintage, lokale Designer, Buchläden und Konzeptläden in einer kreativen
            Atmosphäre abseits des Massentourismus.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-green-900 mb-3">Belgisches Viertel & Ehrenfeld</h2>
          <p>
            Das Belgische Viertel westlich des Stadtzentrums ist Kölns kreativstes Quartier:
            Galerien, Cafés, Restaurants mit internationaler Küche, Vinylplattenläden und
            Streetart prägen das Bild. Besonders an Wochenenden ist die Aachener Straße und
            die Brüsseler Straße belebt. Wer Köln jenseits von Dom und Altstadt kennenlernen
            möchte, ist hier richtig.
          </p>
          <p className="mt-3">
            Ehrenfeld, ein ehemaliges Arbeiterviertel, hat sich in den letzten Jahren zu
            einem kulturellen Hotspot entwickelt: Clubs, Kunsträume, vegane Restaurants
            und kreative Unternehmen haben sich angesiedelt. Für Tagesausflügler bietet
            Ehrenfeld einen interessanten Einblick in das zeitgenössische Köln.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-green-900 mb-3">Für Familien</h2>
          <p>
            Wer mit Kindern nach Köln fährt, hat ebenfalls einige Optionen. Das
            Schokoladenmuseum am Rheinufer ist eines der meistbesuchten Museen Deutschlands
            und zeigt auf unterhaltsame Weise die Geschichte der Schokolade – mit einem
            Schokoladenbrunnen als Highlight. Der Kölner Zoo liegt nicht weit vom Stadtwald
            entfernt und ist gut erreichbar.
          </p>
          <p className="mt-3">
            Wer noch weiter fahren möchte: In Brühl, gut 20 Kilometer südlich von Köln,
            liegt Phantasialand – einer der bekanntesten Freizeitparks Deutschlands.
            Kombiniert mit einem Kölnbesuch am Vor- oder Nachmittag ein voller Familientag.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-green-900 mb-3">Anreise ab Kirchweiler</h2>
          <p>
            Von Kirchweiler fahren Sie Richtung Daun, dann über die A1 (Richtung Trier/Köln)
            oder alternativ über die A61 (Koblenz) nach Köln. Die Strecke beträgt rund
            130 Kilometer und ist in normaler Verkehrslage in ca. eineinhalb Stunden zu
            bewältigen. Auf der A1 sollte man möglichst früh starten – die Autobahn ist
            besonders nachmittags Richtung Köln stark frequentiert.
          </p>
          <p className="mt-3">
            Empfehlenswert ist die Nutzung des Park &amp; Ride-Systems: Parken Sie an einem der
            Endbahnhöfe der Kölner U-Bahn (z. B. in Frechen oder Hürth) und fahren Sie mit
            der S-Bahn oder U-Bahn in die Innenstadt. Das spart Parkgebühren und Nerven
            bei der Suche nach einem Stellplatz.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-green-900 mb-3">Tipps für den Tagesausflug</h2>
          <p>
            Starten Sie früh – der Kölner Dom ist morgens noch ruhig, die Touristenströme
            setzen gegen Mittag ein. Ein Frühstück in einem Café nahe dem Dom und dann ein
            Besuch des Doms und der Schatzkammer ergibt einen guten Start in den Tag.
            Nachmittags lohnt sich ein Spaziergang durch die Altstadt oder ins Belgische Viertel,
            bevor man am frühen Abend die Rückreise antritt.
          </p>
          <p className="mt-3">
            Köln ist gut mit einem Tagesthema zu planen: Museumsliebhaber verbringen den Tag
            im Museum Ludwig und Wallraf-Richartz; Kölsch-Fans erkunden Brauhäuser und
            Altstadt; Familien kombinieren Dom mit Schokoladenmuseum; Shopper konzentrieren
            sich auf Innenstadt und Belgisches Viertel.
          </p>
        </section>

      </div>

      <div className="mt-12 pt-8 border-t border-stone-200">
        <p className="text-stone-600 mb-4">
          Köln als Tagesausflug aus der Vulkaneifel – unsere Ferienwohnung in Kirchweiler
          liegt ca. 130 km entfernt. Eine anderthalb Stunden Fahrt, und die Metropole wartet.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link href="/buchung" className="btn-primary">Jetzt buchen</Link>
          <Link href="/specials" className="btn-secondary">Alle Specials</Link>
        </div>
      </div>
    </div>
  );
}
