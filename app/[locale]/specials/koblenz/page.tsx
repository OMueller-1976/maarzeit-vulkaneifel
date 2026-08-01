import type { Metadata } from "next";
import Link from "next/link";
import { getLocale } from 'next-intl/server'

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
  return {
    title: metaTitles[locale] ?? metaTitles.de,
    description: metaDescriptions[locale] ?? metaDescriptions.de,
    alternates: { canonical: 'https://www.ferienwohnung-in-der-vulkaneifel.de/specials/koblenz' },
  }
}

export default async function KoblenzPage() {
  const locale = await getLocale()

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <nav className="text-sm text-stone-500 mb-6">
        <Link href="/specials" className="hover:text-green-800">Specials</Link>
        {" › "}
        <span>Koblenz</span>
      </nav>

      <h1 className="section-title">Koblenz</h1>
      <p className="text-stone-500 text-sm mb-8">ca. 85 km · ca. 1 Stunde ab Kirchweiler</p>

      <div className="space-y-8 text-stone-700 leading-relaxed">

        <p className="text-lg text-stone-600">
          Koblenz ist eine der ältesten Städte Deutschlands – gegründet von den Römern
          an der Stelle, wo sich Rhein und Mosel vereinen. Dieses einmalige geografische
          Zusammentreffen zweier großer Flüsse macht die Stadt zu einem unverwechselbaren
          Reiseziel. Von Kirchweiler aus sind es rund 85 Kilometer und etwa eine Stunde
          Fahrzeit – gut investierte Zeit für einen abwechslungsreichen Tagesausflug.
        </p>

        <section>
          <h2 className="text-2xl font-bold text-green-900 mb-3">Deutsches Eck</h2>
          <p>
            Das Wahrzeichen von Koblenz ist das Deutsche Eck – die Landzunge, an der Mosel
            und Rhein zusammenfließen. Hier thront das monumentale Reiterstandbild Kaiser
            Wilhelms I. auf einem hohen Sockel und bietet einen weiten Blick über beide Flüsse.
            Der Platz ist frei zugänglich und lädt zum Verweilen ein.
          </p>
          <p className="mt-3">
            Vom Deutschen Eck aus überblickt man auch die gegenüberliegende Festung
            Ehrenbreitstein – im Sommer verbunden durch die Seilbahn, die einen spektakulären
            Weg hinüber bietet. Das Deutsche Eck ist zugleich Ausgangspunkt für Spaziergänge
            entlang beider Flussläufe.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-green-900 mb-3">Festung Ehrenbreitstein</h2>
          <p>
            Hoch über dem Deutschen Eck thront die Festung Ehrenbreitstein auf einem Felsen
            mit über 100 Metern Höhe über dem Rhein. Sie gilt als eine der größten erhaltenen
            Festungsanlagen Deutschlands und beherbergt heute das Landesmuseum Koblenz sowie
            weitere Ausstellungen. Die Anlage selbst ist schon ein beeindruckendes Baudenkmal,
            das die strategische Bedeutung dieses Ortes über Jahrhunderte hinweg bezeugt.
          </p>
          <p className="mt-3">
            Das Panorama von der Festungsmauer auf Koblenz, den Rhein und die umliegenden
            Hügel ist bemerkenswert. Auf dem Festungsgelände finden regelmäßig Veranstaltungen
            und Sonderausstellungen statt – ein Blick auf das aktuelle Programm lohnt sich
            vor dem Besuch.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-green-900 mb-3">Seilbahn Koblenz</h2>
          <p>
            Die Koblenzer Seilbahn verbindet das Rheinufer nahe dem Deutschen Eck mit der
            Festung Ehrenbreitstein und bietet dabei einen einzigartigen Blick aus der Luft
            über den Rhein. Die Überfahrt dauert wenige Minuten und ist selbst ein Erlebnis –
            besonders eindrucksvoll ist die Perspektive auf das Zusammenfließen von Rhein und
            Mosel von oben. Die Seilbahn verkehrt saisonal; Öffnungszeiten und Preise sind
            der aktuellen Website zu entnehmen.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-green-900 mb-3">Altstadt Koblenz</h2>
          <p>
            Koblenzer Altstadt ist kompakt, angenehm zu Fuß zu erkunden und reich an
            historischer Substanz. Der Münzplatz, der Jesuiten-Platz mit seiner barocken
            Kirche und der Florinsmarkt sind die zentralen Plätze, an denen sich das
            Stadtleben abspielt. Cafés, Restaurants und kleine Geschäfte reihen sich
            entlang der Fußgängerzonen und Gassen aneinander.
          </p>
          <p className="mt-3">
            Besonders sehenswert ist die Liebfrauenkirche am Florinsmarkt – eine der
            schönsten romanischen Kirchen am Mittelrhein. Daneben lohnt sich ein Blick
            auf das Kurfürstliche Schloss, das direkt am Rhein liegt und heute als
            Kulturveranstaltungsort genutzt wird.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-green-900 mb-3">Rhein & Mosel erleben</h2>
          <p>
            Koblenz ist ein hervorragender Ausgangspunkt für Schifffahrten auf Rhein und Mosel.
            Von hier starten Ausflugsboote in beide Richtungen: rheinaufwärts in Richtung
            Boppard und Loreley, moselseitig nach Cochem und Bernkastel-Kues. Wer nur einen
            kurzen Blick auf beide Flüsse vom Wasser aus werfen möchte, findet auch kürzere
            Rundfahrten. Die Rheinanlagen – die breite Uferpromenade auf der Koblenzer Seite –
            sind ideal für ausgedehnte Spaziergänge.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-green-900 mb-3">Kulturmeile</h2>
          <p>
            Koblenz verfügt über eine bemerkenswerte Museumsdichte. Das Ludwig Museum im
            Kurfürstlichen Schloss zeigt internationale Kunst nach 1945. Das Mittelrhein-Museum
            beherbergt eine bedeutende Sammlung zur Kunst- und Kulturgeschichte der
            Mittelrheinregion. Wer sich für römische Geschichte interessiert, findet im
            Stadtbereich archäologische Spuren sowie Ausstellungen zur Römerzeit.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-green-900 mb-3">Essen & Trinken</h2>
          <p>
            Die Koblenzer Gastronomie ist vielfältig: In der Altstadt finden sich klassische
            Weinstuben und Brauhäuser, an der Rheinpromenade moderne Restaurants mit Flussblick.
            Wer regional essen möchte, greift zu Sauerbraten, Döppekooche (einem regionaltypischen
            Kartoffelauflauf) oder zu Fisch aus dem Rhein. Koblenz liegt im Schnittpunkt zweier
            Weinregionen – sowohl Mittelrhein-Weine als auch Moselrieslinge stehen auf den
            Weinkarten.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-green-900 mb-3">Anreise ab Kirchweiler</h2>
          <p>
            Von Kirchweiler fahren Sie über die A48 in Richtung Mayen, dann weiter auf der
            A61 Richtung Koblenz. Die Strecke beträgt rund 85 Kilometer und ist bei normaler
            Verkehrslage in etwa einer Stunde zu bewältigen. Parken in der Koblenzer Innenstadt
            ist in mehreren Parkhäusern möglich – das Parkhaus am Deutschen Eck oder am
            Rheinufer bieten günstige Standorte für Besucher.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-green-900 mb-3">Kombinationstipps</h2>
          <p>
            Wer den Ausflug ausweiten möchte, kann Koblenz gut mit einem Stopp in Boppard
            verbinden – einer charmanten Kleinstadt am Rhein mit der schönsten Rheinschleife
            Deutschlands. Von Boppard gibt es außerdem einen Sessellift auf das Hochplateau
            mit herrlichem Panoramablick. Alternativ bietet sich die Fahrt entlang der
            Moselstrecke zurück Richtung Cochem an – so entsteht aus dem Tagesausflug
            eine kleine Rundreise durch zwei Flusstäler.
          </p>
        </section>

      </div>

      <div className="mt-12 pt-8 border-t border-stone-200">
        <p className="text-stone-600 mb-4">
          Koblenz als Tagesausflug ab der Vulkaneifel: Unsere Ferienwohnung in Kirchweiler
          liegt nur ca. 85 km entfernt.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link href="/buchung" className="btn-primary">Jetzt buchen</Link>
          <Link href="/specials" className="btn-secondary">Alle Specials</Link>
        </div>
      </div>
    </div>
  );
}
