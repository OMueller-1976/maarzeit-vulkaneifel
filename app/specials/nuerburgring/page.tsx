import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: 'Nürburgring Ausflug ab Kirchweiler – nur 55 km',
  description: 'Nürburgring liegt 55 km von unserer Ferienwohnung. Nordschleife, Erlebniswelt ring°werk, Touristenfahrten und Motorsport-Events in der Eifel.',
  alternates: { canonical: 'https://ferienwohnung-in-der-vulkaneifel.de/specials/nuerburgring' },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "TouristAttraction",
  "name": "Nürburgring",
  "description": "Legendäre Motorsportanlage in der Eifel mit Nordschleife, Touristenfahrten und Erlebniswelt ring°werk. 55 km ab Kirchweiler.",
  "url": "https://nuerburgring.de",
  "touristType": "Motorsport",
  "geo": { "@type": "GeoCoordinates", "latitude": 50.3356, "longitude": 6.9475 }
}

export default function NuerburgringPage() {
  return (
    <>
      <Script id="schema-tourist" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <div className="max-w-3xl mx-auto px-4 py-16">
      <nav className="text-sm text-stone-500 mb-6">
        <Link href="/specials" className="hover:text-green-800">Specials</Link>
        {" › "}
        <span>Nürburgring</span>
      </nav>

      <h1 className="section-title">Nürburgring</h1>
      <p className="text-stone-500 text-sm mb-8">ca. 55 km · ca. 50 Minuten ab Kirchweiler</p>

      <div className="prose-like space-y-8 text-stone-700 leading-relaxed">

        <p className="text-lg text-stone-600">
          Der Nürburgring gehört zu den bekanntesten Motorsportanlagen der Welt und liegt
          nur rund 55 Kilometer von unserer Ferienwohnung in Kirchweiler entfernt. Eine
          knappe Stunde Fahrt durch die kurvenreiche Eifellandschaft – und schon stehen Sie
          vor dem legendären Streckengelände in der Hocheifel. Für Motorsportfans, Familien
          und Neugierige gleichermaßen lohnt sich dieser Ausflug.
        </p>

        <section>
          <h2 className="text-2xl font-bold text-green-900 mb-3">Die Nordschleife – die Grüne Hölle</h2>
          <p>
            Die Nordschleife des Nürburgrings gilt als eine der anspruchsvollsten Rennstrecken
            der Welt. Auf 20,8 Kilometern schlängelt sie sich durch die hügelige Eifellandschaft,
            überwindet mehr als 300 Meter Höhenunterschied und zählt über 70 Kurven. Niki Lauda
            nannte sie einmal die „Grüne Hölle" – und dieser Beiname ist bis heute geblieben.
          </p>
          <p className="mt-3">
            Gebaut zwischen 1925 und 1927, war die Nordschleife bis 1976 fester Bestandteil
            der Formel-1-Weltmeisterschaft. Noch heute ist sie als technische Referenzstrecke
            weltweit einzigartig. Automobilhersteller aus aller Welt testen hier ihre Neuheiten
            unter realen Bedingungen – weshalb man auf der Strecke immer wieder getarnte
            Prototypen zu Gesicht bekommt.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-green-900 mb-3">Touristenfahrten auf der Nordschleife</h2>
          <p>
            An Tagen ohne Rennbetrieb ist die Nordschleife für die Öffentlichkeit freigegeben –
            sogenannte „Touristenfahrten" ermöglichen es jedem mit einem zugelassenen Fahrzeug,
            selbst auf der legendären Strecke zu fahren. Das Einfahrticket kostet je nach Saison
            und Tageszeit zwischen 30 und 35 Euro pro Runde und wird direkt am Einlass erworben.
          </p>
          <p className="mt-3">
            Wer mit dem Motorrad kommt, erlebt die Nordschleife noch einmal ganz anders: die
            engen Kurvenfolgen, der Wechsel von Schatten und Sonnenlicht, der Asphalt, der sich
            durch Wälder und Wiesen zieht – ein Erlebnis, das man nicht vergisst. Achten Sie
            unbedingt auf die Öffnungszeiten der Strecke, die sich je nach Saison und Rennkalender
            stark unterscheiden. Aktuelle Infos gibt es auf der offiziellen Website:
          </p>
          <p className="mt-3">
            <a
              href="https://nuerburgring.de/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-700 hover:underline font-medium"
            >
              nuerburgring.de
            </a>
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-green-900 mb-3">ring°werk – die Erlebniswelt</h2>
          <p>
            Auch wer keine Runde auf der Strecke drehen möchte, findet am Nürburgring eine
            Menge zu erleben. Das ring°werk ist die Erlebniswelt direkt am Hauptgelände und
            richtet sich an Besucher jedes Alters. Hier erwartet Sie eine interaktive Ausstellung
            zur Geschichte des Nürburgrings, Rennsport-Exponate, historische Rennfahrzeuge und
            moderne Fahrsimulator-Stationen, an denen Sie selbst virtuell die Nordschleife bezwingen
            können.
          </p>
          <p className="mt-3">
            Die Ausstellung ist besonders für Kinder und Jugendliche geeignet, die den Motorsport
            hautnah erleben möchten, ohne auf die Strecke zu müssen. Auch bei schlechtem Wetter
            ein lohnender Ausflugspunkt.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-green-900 mb-3">Rennsport-Events am Nürburgring</h2>
          <p>
            Wer während seines Urlaubs in der Vulkaneifel ein Rennen live erleben möchte, sollte
            den Rennkalender des Nürburgrings im Blick behalten. Das Jahreshighlight ist zweifellos
            das 24-Stunden-Rennen Nürburgring, das traditionell im Mai oder Juni stattfindet und
            Zehntausende Fans aus aller Welt anzieht. Das Gelände verwandelt sich dabei in ein
            riesiges Motorsport-Camping-Festival.
          </p>
          <p className="mt-3">
            Darüber hinaus finden regelmäßig Läufe der ADAC Motorsport-Serien, DTM-Rennen,
            Motorrad-Events und Gleichmäßigkeitsfahrten statt. An Eventwochenenden ist die
            gesamte Region lebhafter als sonst – Hotels und Ferienwohnungen in der Eifel sind
            dann besonders gefragt. Ein Frühzeitiges Buchen lohnt sich.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-green-900 mb-3">Tipps für Ihren Besuch</h2>
          <p>
            Wochentage sind in der Regel deutlich ruhiger als Wochenenden – sowohl auf der
            Strecke bei Touristenfahrten als auch im Bereich der Erlebniswelt. Wer früh anreist,
            vermeidet Wartezeiten an der Einfahrtskasse und erlebt die Strecke in ruhigerem Umfeld.
          </p>
          <p className="mt-3">
            Am Nürburgring gibt es mehrere Gastronomie-Angebote, von einfachen Imbissständen
            bis zu gepflegten Restaurants mit Streckenblick. Wer lieber etwas Rustikaleres sucht,
            findet in Adenau, dem nächstgelegenen Städtchen, gemütliche Gaststätten mit regionaler
            Eifelküche.
          </p>
          <p className="mt-3">
            Bitte beachten Sie: Bei Touristenfahrten sind bestimmte Fahrzeugtypen ausgeschlossen
            (z. B. Cabrios mit offenem Verdeck, Fahrzeuge über einem gewissen Gewicht). Die aktuellen
            Regeln entnehmen Sie bitte der offiziellen Website des Nürburgrings.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-green-900 mb-3">Anreise ab Kirchweiler</h2>
          <p>
            Ab unserer Ferienwohnung in Kirchweiler fahren Sie zunächst Richtung Daun, dann
            über die B257 durch die Hocheifel. Über Kelberg und Adenau erreichen Sie den
            Nürburgring nach ca. 55 Kilometern und rund 50 Fahrminuten. Die Strecke führt
            durch wunderschöne Eifellandschaft – für Motorradfahrer ohnehin ein Genuss.
            Wer die Autobahn bevorzugt, kann auch über Mayen/Koblenz (A48) anfahren und
            bei Adenau wieder auf die Landstraße wechseln.
          </p>
        </section>

      </div>

      <div className="mt-12 pt-8 border-t border-stone-200">
        <p className="text-stone-600 mb-4">
          Planen Sie einen Urlaub in der Vulkaneifel mit Ausflug zum Nürburgring?
          Unsere Ferienwohnung in Kirchweiler ist Ihre ideale Basis – nur 55 km entfernt.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link href="/buchung" className="btn-primary">Jetzt buchen</Link>
          <Link href="/specials" className="btn-secondary">Alle Specials</Link>
        </div>
      </div>
    </div>
    </>
  );
}
