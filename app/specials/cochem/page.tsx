import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Ausflug Cochem an der Mosel – 45 km ab Kirchweiler',
  description: 'Cochem an der Mosel: Reichsburg, Altstadt, Weinkultur und Moselpromenade. Nur 45 km von der Ferienwohnung in der Vulkaneifel entfernt.',
  alternates: { canonical: 'https://ferienwohnung-in-der-vulkaneifel.de/specials/cochem' },
};

export default function CochemPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <nav className="text-sm text-stone-500 mb-6">
        <Link href="/specials" className="hover:text-green-800">Specials</Link>
        {" › "}
        <span>Cochem</span>
      </nav>

      <h1 className="section-title">Cochem an der Mosel</h1>
      <p className="text-stone-500 text-sm mb-8">ca. 45 km · ca. 45 Minuten ab Kirchweiler</p>

      <div className="space-y-8 text-stone-700 leading-relaxed">

        <p className="text-lg text-stone-600">
          Cochem gilt als eine der schönsten Kleinstädte Deutschlands – und das zu Recht.
          Die Reichsburg hoch über dem Moseltal, die verwinkelten Altstadtgassen, der Duft
          von Moselwein und die Promenade entlang des Flusses: Cochem ist ein Tagesausflug,
          der bleibt. Von unserer Ferienwohnung in Kirchweiler sind es nur rund 45 Kilometer
          – eine knappe dreiviertel Stunde durch die Eifellandschaft hinunter ins Moseltal.
        </p>

        <section>
          <h2 className="text-2xl font-bold text-green-900 mb-3">Reichsburg Cochem</h2>
          <p>
            Wahrzeichen der Stadt und weithin sichtbar thront die Reichsburg Cochem auf einem
            Felsen über dem Moseltal. Die heutige Gestalt der Burg geht auf einen Wiederaufbau
            im 19. Jahrhundert zurück, nachdem die ursprüngliche Anlage im Pfälzischen Erbfolgekrieg
            im Jahr 1689 zerstört worden war. Der Wiederaufbau erfolgte im neugotischen Stil
            und verleiht der Burg ihr romantisches Erscheinungsbild.
          </p>
          <p className="mt-3">
            Geführte Touren durch die Innenräume der Burg werden täglich angeboten und geben
            Einblick in die mittelalterliche Geschichte der Region. Besonders sehenswert sind
            der Rittersaal, die historischen Wohnräume und der Ausblick von der Burgterrasse
            über das Moseltal. Der Aufstieg zur Burg dauert zu Fuß etwa 15 Minuten und führt
            durch den historischen Burgweg.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-green-900 mb-3">Die Altstadt von Cochem</h2>
          <p>
            Unterhalb der Burg erstreckt sich Cochems charmante Altstadt mit ihren engen
            Gassen, Fachwerkhäusern und dem lebhaften Marktplatz. Hier reihen sich
            Weinlokale, Cafés und Boutiquen aneinander – ideal für einen gemütlichen
            Stadtbummel ohne Eile. Besonders der Bereich rund um den Marktplatz und
            die Balduinstraße lohnt sich für einen ausgedehnten Spaziergang.
          </p>
          <p className="mt-3">
            Cochem hat trotz des Tourismus seinen Charakter behalten: Die Altstadt ist nicht
            überlaufen kitschig, sondern lebt von echter Mosel-Gastlichkeit und einem natürlichen
            Selbstverständnis als Weinort.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-green-900 mb-3">Moselpromenade & Schifffahrten</h2>
          <p>
            Die Promenade entlang der Mosel lädt zu ausgedehnten Spaziergängen ein – mit Blick
            auf die sanften Weinberghänge, die sich zu beiden Seiten des Flusses erstrecken.
            Im Sommer herrscht buntes Treiben auf dem Wasser: Ausflugsdampfer, Hausboote und
            Kanus beleben die Mosel.
          </p>
          <p className="mt-3">
            Von Cochem aus starten regelmäßig Schifffahrten auf der Mosel, die je nach Anbieter
            einstündige Panoramafahrten bis hin zu mehrstündigen Touren mit Zwischenstopps
            anbieten. Eine Bootsfahrt bietet einen ganz anderen Blickwinkel auf die Weinberge
            und Burgen entlang des Flusses.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-green-900 mb-3">Weinkultur an der Mosel</h2>
          <p>
            Die Mosel ist eine der renommiertesten Weinregionen Deutschlands. Der Riesling,
            der auf den steilen Schieferhängen gedeiht, gilt als einer der komplexesten
            Weißweine weltweit. In Cochem und Umgebung gibt es zahlreiche Weingüter, die
            Verkostungen und Kellerführungen anbieten – ein Erlebnis, das weit über das
            bloße Trinken hinausgeht.
          </p>
          <p className="mt-3">
            Vinotheken in der Altstadt ermöglichen einen strukturierten Einstieg in die
            Moselwein-Welt, ohne gleich ein ganzes Weingut besuchen zu müssen. Probieren
            Sie sich durch verschiedene Rieslinge der Umgebung – trocken, halbtrockened
            und fruchtig – und lassen Sie sich beraten. Die Winzer an der Mosel nehmen
            sich gerne Zeit für ihre Gäste.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-green-900 mb-3">Essen & Trinken in Cochem</h2>
          <p>
            Cochems gastronomische Szene ist geprägt von der Moselküche: Fischgerichte,
            Wild aus den Eifelwäldern, regionaler Sauerbraten und natürlich Riesling als
            Begleiter. Entlang der Promenade und in der Altstadt gibt es eine gute Auswahl
            an Restaurants, die regionale Küche mit Moselblick verbinden.
          </p>
          <p className="mt-3">
            Besonders empfehlenswert ist ein Mittagessen in einer der traditionellen Weinstuben –
            unkompliziert, ehrlich und mit guten Hausweinen. Am Nachmittag lässt es sich in
            einem der Cafés am Marktplatz mit Kaffee und Kuchen gut aushalten, bevor es
            zurück ins Eifeltal geht.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-green-900 mb-3">Seilbahn auf den Pinnerberg</h2>
          <p>
            Eine Besonderheit in Cochem ist die Sesselbahn, die auf den Pinnerberg führt –
            einen der Weinberghügel oberhalb der Stadt. Oben angekommen eröffnet sich ein
            weiter Panoramablick über Cochem, die Moselschleife und die umliegenden Weinberge.
            Auf dem Pinnerberg befindet sich außerdem die Pinnerkreuzkapelle sowie ein
            Aussichtspunkt mit Biergarten.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-green-900 mb-3">Anreise ab Kirchweiler</h2>
          <p>
            Von Kirchweiler fahren Sie Richtung Ulmen, dann über Kaisersesch ins Moseltal.
            Die Route führt durch wunderschöne Eifellandschaft und bietet bereits unterwegs
            schöne Ausblicke. Kurz vor Cochem schlängelt sich die Straße ins Moseltal –
            ein malerischer Anfahrtsweg. Parken Sie am besten in einem der Parkhäuser
            am Stadtrand, von wo aus Sie die Altstadt bequem zu Fuß erreichen.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-green-900 mb-3">Kombinationstipps</h2>
          <p>
            Wer einen Tagesausflug verlängern möchte, kann Cochem wunderbar mit weiteren
            Moselorten kombinieren. Das malerische Beilstein mit seiner Burgruine liegt
            nur wenige Kilometer flussaufwärts und ist deutlich ruhiger als Cochem.
            Weiter südlich lockt die Moselschleife bei Bremm – eine der steilsten Stellen
            des Flusses, ideal für einen kurzen Aussichtsstopp. Auch Traben-Trarbach mit
            seiner Jugendstilarchitektur und den großen Weinhandelshäusern ist einen
            Abstecher wert.
          </p>
        </section>

      </div>

      <div className="mt-12 pt-8 border-t border-stone-200">
        <p className="text-stone-600 mb-4">
          Planen Sie Ihren Urlaub in der Vulkaneifel mit Tagesausflug nach Cochem?
          Unsere Ferienwohnung in Kirchweiler liegt nur 45 km entfernt.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link href="/buchung" className="btn-primary">Jetzt buchen</Link>
          <Link href="/specials" className="btn-secondary">Alle Specials</Link>
        </div>
      </div>
    </div>
  );
}
