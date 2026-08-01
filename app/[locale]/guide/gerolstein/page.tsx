import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Gerolstein – Ausflug in die Brunnenstadt der Vulkaneifel',
  description: 'Gerolstein: Gerolsteiner Brunnen Erlebniswelt, Dolomiten, Felsenpfad, Kurpark, Höhlen und Kyll. Alle Tipps für einen Ausflug nach Gerolstein ab Kirchweiler (15 km).',
  alternates: { canonical: 'https://www.ferienwohnung-in-der-vulkaneifel.de/guide/gerolstein' },
}

const highlights = [
  {
    name: 'Gerolsteiner Brunnen Erlebniswelt',
    badge: 'Neu 2026 · Kostenlos',
    text: 'Deutschlands größter Mineralbrunnen hat 2026 eine neue interaktive Erlebniswelt eröffnet. Führungen durch die Abfüllanlagen mit Gratisverkostung. Voranmeldung erforderlich: besucherzentrum@gerolsteiner.com oder Tel. +49 6591 14238.',
    hinweis: 'Führungen Mo–Do: 09:30 und 11:30 Uhr · Keine Hunde · Voranmeldung nötig · Eintritt kostenlos',
  },
  {
    name: 'Gerolsteiner Dolomiten & Felsenpfad',
    badge: 'Wanderung · ca. 8 km',
    text: 'Beeindruckendes Felsenmassiv über der Stadt Gerolstein. Der Felsenpfad führt als Rundweg über die Munterley (spektakulärer Blick ins Kylltal), die Löwenburg-Ruine und die Buchenlochhöhle. Einer der eindrucksvollsten Tagesausflüge der Vulkaneifel.',
    hinweis: 'Rundweg ca. 8 km · Startpunkt Kurpark Gerolstein · Hunde erlaubt',
  },
  {
    name: 'Kurpark Gerolstein & Helenenquelle',
    badge: 'Kostenlos',
    text: 'Weitläufiger Kurpark am Ufer der Kyll mit Wasserspielplatz, Liegewiesen und Kletterboot. Die Helenenquelle im Park bietet kostenlose Mineralwasserverkostung direkt an der Quelle. Startpunkt für Keltenpfad und Felsenpfad.',
    hinweis: 'Wasserspielplatz kostenlos · Eintritt frei · Helenenquelle ganzjährig',
  },
  {
    name: 'Buchenlochhöhle',
    badge: 'Kostenlos · Taschenlampe',
    text: 'Karsthöhle im Naturschutzgebiet, von Steinzeitmenschen vor rund 30.000 Jahren bewohnt. Frei zugänglich, Teil des Felsenpfads. Zugang über schmale Holzstiege – Taschenlampe empfehlenswert. Klein, aber eindrucksvoll.',
    hinweis: 'Kostenlos · Ganzjährig · Taschenlampe mitbringen · Enger Zugang',
  },
  {
    name: 'Löwenburg-Ruine',
    badge: 'Kostenlos',
    text: 'Mittelalterliche Burgruine auf einem Felsrücken über Gerolstein, ganzjährig frei zugänglich. Vom Felsenpfad aus direkt erreichbar. Guter Blick über das Kylltal und die Vulkaneifellandschaft.',
    hinweis: 'Kostenlos · Ganzjährig frei zugänglich · Teil des Felsenpfads',
  },
  {
    name: 'Naturkundemuseum Gerolstein',
    badge: 'Museum',
    text: 'Museum zur Naturgeschichte der Vulkaneifel – Geologie, Fossilien und Fauna der Region. Verständlich aufbereitet für alle Altersgruppen. Ideal für Regentage und naturinteressierte Besucher.',
    hinweis: 'Öffnungszeiten vorab prüfen · Kleiner Eintritt',
  },
  {
    name: 'Kyll – Spazierweg & Kurpark',
    badge: 'Spaziergang',
    text: 'Die Kyll fließt direkt durch Gerolstein. Spazierwege entlang des Ufers, Trittsteine und kleine Brücken laden zum Verweilen ein. Im Sommer lassen sich die Füße im klaren Fluss kühlen. Der Kyll-Radweg verläuft ebenfalls am Ufer.',
    hinweis: 'Hunde erlaubt · Kostenlos · Kyll-Radweg beginnt hier',
  },
  {
    name: 'Wassermühle Birgel',
    badge: 'Museum · Hofladen',
    text: 'Das größte Mühlen-Erlebniszentrum Europas liegt in Birgel, ca. 20 km von Kirchweiler. Vier Mühlen in Betrieb: Senf-, Getreide-, Öl- und Sägemühle. Führungen buchbar, Hofladen mit regionalen Produkten.',
    hinweis: 'ca. 20 km von Kirchweiler · Führungen buchbar · Hofladen',
  },
]

const schema = {
  "@context": "https://schema.org",
  "@type": "TouristAttraction",
  "name": "Gerolstein – Brunnenstadt der Vulkaneifel",
  "description": "Gerolstein mit Gerolsteiner Brunnen Erlebniswelt, Dolomiten, Felsenpfad, Kurpark und Buchenlochhöhle. 15 km ab Kirchweiler.",
  "url": "https://gerolstein.de",
  "touristType": ["Natur", "Geologie", "Wandern"],
  "geo": { "@type": "GeoCoordinates", "latitude": 50.2205, "longitude": 6.6536 }
}


export function generateStaticParams() {
  return [
    { locale: 'de' },
    { locale: 'en' },
    { locale: 'nl' },
    { locale: 'fr' },
  ]
}

export default function GerolsteinPage() {
  return (
    <>
      <Script id="schema-tourist" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      {/* Hero */}
      <section style={{ background: '#1C3A22', color: 'white', padding: '4rem 1.5rem' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <nav style={{ fontSize: '0.78rem', color: '#666', marginBottom: '2rem' }}>
            <Link href="/guide" style={{ color: '#888', textDecoration: 'none' }}>Reiseführer</Link>
            {' › '}
            <span>Gerolstein</span>
          </nav>
          <p style={{ fontSize: '0.78rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#666', marginBottom: '1rem' }}>
            ca. 18 km ab Kirchweiler · ca. 20 Minuten
          </p>
          <h1 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 'normal', marginBottom: '1rem', lineHeight: 1.2 }}>
            Gerolstein
          </h1>
          <p style={{ color: '#AAA', fontSize: '1.05rem', lineHeight: 1.7, maxWidth: '560px' }}>
            Die Brunnenstadt der Vulkaneifel – mit Dolomiten, Felsenpfad, Höhlen,
            Kurpark und der neuen Gerolsteiner Erlebniswelt.
          </p>
        </div>
      </section>

      {/* Einleitung */}
      <section style={{ maxWidth: '760px', margin: '0 auto', padding: '4rem 1.5rem 2rem' }}>
        <p style={{ color: '#444', lineHeight: 1.9, fontSize: '1rem', marginBottom: '1.2rem' }}>
          Gerolstein liegt knapp 15 km von Kirchweiler entfernt und ist in etwa 18 Minuten erreichbar. Die Stadt ist bekannt als Heimat des gleichnamigen Mineralwassers, bietet aber weit mehr: ein beeindruckendes Felsenmassiv direkt über der Innenstadt, eine Karsthöhle aus der Steinzeit, einen weitläufigen Kurpark am Ufer der Kyll und seit 2026 eine neue Erlebniswelt rund um Deutschlands größten Mineralbrunnen.
        </p>
        <p style={{ color: '#444', lineHeight: 1.9, fontSize: '1rem' }}>
          Gerolstein eignet sich ideal für einen Halbtagsausflug – wer den Felsenpfad wandert und anschließend den Kurpark besucht, hat einen vollständigen, schönen Tag. Mit Besuch der Erlebniswelt (Voranmeldung nötig) auch als ganztägiger Ausflug empfehlenswert.
        </p>
      </section>

      {/* Highlights */}
      <div style={{ maxWidth: '960px', margin: '0 auto', padding: '2rem 1.5rem 4rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {highlights.map((h, i) => (
            <div key={h.name} style={{ borderTop: '1px solid #E5E5E5', padding: '2rem 0', display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '3rem' }}>
              <div>
                <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '1.05rem', fontWeight: 'normal', color: '#1A1A1A', lineHeight: 1.4, marginBottom: '0.6rem' }}>
                  {h.name}
                </h2>
                <span style={{ fontSize: '0.68rem', letterSpacing: '0.08em', textTransform: 'uppercase', border: '1px solid #2D5A35', color: '#2D5A35', padding: '0.2rem 0.6rem' }}>
                  {h.badge}
                </span>
              </div>
              <div style={{ alignSelf: 'center' }}>
                <p style={{ color: '#444', lineHeight: 1.8, fontSize: '0.92rem', marginBottom: '0.75rem' }}>
                  {h.text}
                </p>
                <p style={{ fontSize: '0.78rem', color: '#888', borderTop: '1px solid #F0F0F0', paddingTop: '0.6rem' }}>
                  {h.hinweis}
                </p>
              </div>
            </div>
          ))}
          <div style={{ borderTop: '1px solid #E5E5E5' }} />
        </div>

        {/* Gastronomie */}
        <div style={{ background: 'white', border: '1px solid #E5E5E5', padding: '2rem', margin: '3rem 0' }}>
          <p style={{ fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#888', marginBottom: '0.75rem' }}>
            Gastronomietipp
          </p>
          <p style={{ color: '#444', lineHeight: 1.8, fontSize: '0.92rem' }}>
            In Gerolstein und Umgebung ist die <strong>Eifeler Krautroulade</strong> ein regionales Klassikgericht. Lokale Gasthäuser bieten traditionelle Eifeler Küche – nach einer langen Wanderung auf dem Felsenpfad ist eine herzhafte Mahlzeit mehr als verdient. Die <strong>Vulkanstubb</strong> und weitere inhabergeführte Restaurants in der Innenstadt sind eine gute Wahl.
          </p>
        </div>

        {/* Anreise */}
        <div style={{ background: 'white', border: '1px solid #E5E5E5', padding: '2rem', marginBottom: '3rem' }}>
          <p style={{ fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#888', marginBottom: '0.75rem' }}>
            Anreise ab Kirchweiler
          </p>
          <p style={{ color: '#444', lineHeight: 1.8, fontSize: '0.92rem' }}>
            <strong>Entfernung:</strong> ca. 18 km · <strong>Fahrzeit:</strong> ca. 20 Minuten über B410 und B421<br />
            <strong>Parken:</strong> Parkplatz am Kurpark (kostenlos), Innenstadt Tiefgarage<br />
            <strong>Bahn:</strong> Gerolstein ist Bahnhof der Eifelstrecke Köln–Trier
          </p>
        </div>

        <div style={{ borderTop: '1px solid #E5E5E5', paddingTop: '2.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/guide/ausflugsziele" className="btn-primary">Alle Ausflugsziele</Link>
          <Link href="/buchung" className="btn-secondary">Ferienwohnung buchen</Link>
        </div>
      </div>
    </>
  )
}
