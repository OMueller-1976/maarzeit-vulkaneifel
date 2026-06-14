import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Ausflug Luxemburg – UNESCO-Altstadt, 95 km',
  description: 'Luxemburg Stadt: UNESCO-Altstadt, Casemates, Grund-Viertel und Shopping. Nur 95 km von der Ferienwohnung in der Vulkaneifel entfernt.',
  alternates: { canonical: 'https://www.ferienwohnung-in-der-vulkaneifel.de/specials/luxemburg' },
};

export default function LuxemburgPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <nav className="text-sm text-stone-500 mb-6">
        <Link href="/specials" className="hover:text-green-800">Specials</Link>
        {" › "}
        <span>Luxemburg</span>
      </nav>

      <h1 className="section-title">Luxemburg</h1>
      <p className="text-stone-500 text-sm mb-8">ca. 95 km · ca. 1 Stunde ab Kirchweiler</p>

      <div className="space-y-8 text-stone-700 leading-relaxed">

        <p className="text-lg text-stone-600">
          Luxemburg ist eines der kleinsten Länder Europas – und gleichzeitig eine der
          überraschendsten Städte. Die Hauptstadt vereint mittelalterliche Festungsarchitektur
          mit einer kosmopolitischen, europäischen Atmosphäre: EU-Institutionen, internationale
          Finanzwelt, eine lebhafte Kulturszene und eine UNESCO-geschützte Altstadt auf hohen
          Felsen. Von Kirchweiler sind es rund 95 Kilometer – ein lohnender Tagesausflug
          über die Grenze.
        </p>

        <section>
          <h2 className="text-2xl font-bold text-green-900 mb-3">UNESCO-Welterbe Altstadt</h2>
          <p>
            Die Altstadt von Luxemburg steht seit 1994 auf der UNESCO-Welterbeliste –
            ausgezeichnet für ihre einzigartigen Befestigungsanlagen, die sich über Jahrhunderte
            als strategisch bedeutsame Festung entwickelt haben. Die Felsplateaus, auf denen
            die Stadt erbaut ist, verleihen Luxemburg eine unverwechselbare Topografie, die
            sich von anderen europäischen Hauptstädten grundlegend unterscheidet.
          </p>
          <p className="mt-3">
            Zu Fuß lässt sich die Altstadt in einem halben Tag gut erkunden. Die Wege führen
            entlang von Bockfelsen und Stadtmauern, über Treppen und durch Tunnel, von Plateau
            zu Plateau – ein ständiger Wechsel von Perspektiven und Stadtebenen, der immer
            wieder überrascht.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-green-900 mb-3">Casemates du Bock</h2>
          <p>
            Eines der beeindruckendsten Zeugnisse der Festungsgeschichte Luxemburgs sind die
            Casemates du Bock – ein unterirdisches Netz aus Gängen, Kammern und Stollen,
            das tief in den Fels gegraben wurde. Mit über 17 Kilometern Gesamtlänge dienten
            die Casemates über Jahrhunderte als Schutzanlage und konnten Zehntausende von
            Soldaten beherbergen.
          </p>
          <p className="mt-3">
            Heute ist ein Teil der Anlage für Besucher geöffnet und ermöglicht einen
            faszinierenden Gang durch die Geschichte Luxemburgs – mit Ausblicken aus
            Schießscharten direkt auf das Alzettetal tief unten. Die Casemates sind
            eines der meistbesuchten Sehenswürdigkeiten des Landes und sollten auf keinem
            Luxemburg-Besuch fehlen.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-green-900 mb-3">Das Viertel Grund</h2>
          <p>
            Tief unten im Alzettetal liegt das Viertel Grund – das historische Unterstadt-Viertel
            Luxemburgs, das man über steile Treppen oder einen Lift von der Oberstadt erreicht.
            Hier plätschert die Alzette durch einen kleinen Ort, der eher einem mittelalterlichen
            Dorf gleicht als einem Stadtviertel einer Hauptstadt.
          </p>
          <p className="mt-3">
            Der Grund ist bekannt für seine gemütlichen Restaurants und Kneipen, die besonders
            abends viel Publikum anziehen. Für Tagesausflügler bietet sich hier ein entspanntes
            Mittagessen in ruhiger Atmosphäre an. Der Spaziergang entlang der Alzette und die
            Blicke auf die Felsformationen der Oberstadt von unten sind ein besonderes Erlebnis.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-green-900 mb-3">Place d'Armes & Altstadt</h2>
          <p>
            Das Herz der Luxemburger Altstadt ist der Place d'Armes – ein lebhafter Platz mit
            Cafés, Restaurants und Straßenmusikern, auf dem sich Einheimische und Touristen
            gleichermaßen treffen. Von hier aus ist der Großherzogliche Palast nur wenige
            Schritte entfernt – der offizielle Amtssitz des luxemburgischen Großherzogs,
            der im Sommer für Besichtigungen geöffnet ist.
          </p>
          <p className="mt-3">
            Die Gassen rund um den Place d'Armes und die Rue de la Reine bieten angenehmes
            Stadtbummel-Terrain mit Boutiquen, Concept Stores und kleinen Galerien.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-green-900 mb-3">Museen in Luxemburg</h2>
          <p>
            Für Kunstinteressierte ist das MUDAM – Musée d'Art Moderne Grand-Duc Jean –
            ein Highlight: Das spektakuläre Gebäude von I.M. Pei beherbergt eine bedeutende
            Sammlung zeitgenössischer Kunst in wechselnden Ausstellungen. Gleich daneben
            liegt das Philharmonie-Gebäude von Christian de Portzamparc, das auch architektonisch
            einen Blick wert ist.
          </p>
          <p className="mt-3">
            Das Nationalmuseum für Geschichte und Kunst (MNHA) zeigt die Geschichte Luxemburgs
            von der Antike bis zur Moderne – kompakt und gut aufbereitet für Besucher, die
            sich einen schnellen Überblick verschaffen möchten.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-green-900 mb-3">Shopping in Luxemburg</h2>
          <p>
            Luxemburg ist ein beliebtes Einkaufsziel – nicht zuletzt wegen der im europäischen
            Vergleich moderaten Mehrwertsteuer. Besonders Tabak, Alkohol, Elektronik und
            Parfüm sind günstiger als in Deutschland. Die Haupteinkaufsstraßen befinden sich
            in der Oberstadt, rund um die Grand-Rue und den Centre Commercial Royal-Hamilius.
          </p>
          <p className="mt-3">
            Wer lieber in entspannter Atmosphäre stöbert, findet in der Oberstadt und rund
            um den Limpertsberg-Bereich kleinere Boutiquen mit lokalen Designern und
            Spezialitätenhändlern.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-green-900 mb-3">Mehrsprachigkeit & Besonderheiten</h2>
          <p>
            Luxemburg ist offiziell dreisprachig: Lëtzebuergesch, Französisch und Deutsch
            sind gleichberechtigte Amtssprachen. Im Alltag begegnet man allen drei Sprachen –
            in Geschäften, Restaurants und auf Straßenschildern. Für deutschsprachige Besucher
            ist die Verständigung daher problemlos: Deutsch wird überall verstanden und
            gesprochen.
          </p>
          <p className="mt-3">
            Diese kulturelle Vielschichtigkeit macht einen Teil des Reizes aus: Luxemburg
            fühlt sich gleichzeitig vertraut und fremd an – und das mitten in Europa,
            nur eine Stunde von der Eifel entfernt.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-green-900 mb-3">Essen & Trinken</h2>
          <p>
            Die Luxemburger Küche verbindet Einflüsse aus Deutschland, Frankreich und Belgien.
            Das Nationalgericht Judd mat Gaardebounen – geräucherter Schweinenacken mit breiten
            Bohnen – ist in vielen traditionellen Restaurants auf der Karte. Dazu trinkt man
            gerne Moselle Luxembourgeoise, einen trockenen Weißwein aus dem Luxemburger Moseltal.
          </p>
          <p className="mt-3">
            Im Viertel Grund und rund um den Place d'Armes findet sich für jeden Geschmack
            das Passende – von schnellen Mittagsgerichten bis zu gepflegten Restaurants
            mit internationalem Flair. Café-Kultur wird in Luxemburg großgeschrieben:
            Ein längerer Kaffee-Stopp gehört zum Ausflug dazu.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-green-900 mb-3">Praktische Tipps</h2>
          <p>
            Der öffentliche Nahverkehr in Luxemburg ist seit 2020 vollständig kostenlos –
            Busse und Züge können ohne Ticket genutzt werden. Wer mit dem Auto anreist,
            parkt am besten in einem der Parkhäuser am Stadtrand und nutzt von dort den
            kostenlosen Bus in die Innenstadt. Das P+R-System ist gut ausgeschildert.
          </p>
          <p className="mt-3">
            Viele Museen und Sehenswürdigkeiten in Luxemburg haben montags geschlossen –
            planen Sie Ihren Ausflug idealerweise von Dienstag bis Sonntag.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-green-900 mb-3">Anreise ab Kirchweiler</h2>
          <p>
            Von Kirchweiler fahren Sie Richtung Bitburg, dann über die A60 nach Luxemburg.
            Die Route führt durch die Südeifel und den Naturpark Südeifel – landschaftlich
            schön, teils kurvige Strecken. An der Grenze entfallen die üblichen Zollkontrollen,
            da Luxemburg Schengen-Mitglied ist. Gesamtdistanz: rund 95 Kilometer,
            Fahrtzeit ca. 1 Stunde.
          </p>
        </section>

      </div>

      <div className="mt-12 pt-8 border-t border-stone-200">
        <p className="text-stone-600 mb-4">
          Luxemburg als Tagesausflug aus der Eifel – unsere Ferienwohnung in Kirchweiler
          liegt nur ca. 95 km entfernt.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link href="/buchung" className="btn-primary">Jetzt buchen</Link>
          <Link href="/specials" className="btn-secondary">Alle Specials</Link>
        </div>
      </div>
    </div>
  );
}
