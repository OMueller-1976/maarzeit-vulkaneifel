import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Familienurlaub Vulkaneifel – Auszeit mit Kind',
  description: 'Familienurlaub in der Vulkaneifel: Wildpark Daun, Dauner Maare, Wandern mit Kindern, Vulkanmuseum und Adler- & Wolfspark Kasselburg. Hund willkommen.',
  alternates: { canonical: 'https://ferienwohnung-in-der-vulkaneifel.de/specials/auszeit-mit-kind' },
}

const ziele = [
  {
    name: 'Wild- & Erlebnispark Daun',
    entfernung: 'ca. 6 km',
    badge: 'Tier & Natur',
    text: 'Autowanderroute durch den Park, Berberaffenschlucht, Greifvogel-Flugshows, Abenteuerspielplatz und Streichelzoo. Lamas, Mufflons, Wildyaks und Wildschweine auf großem Gelände. Für Kinder ein ganzer Nachmittag.',
  },
  {
    name: 'Sommerrodelbahn Daun',
    entfernung: 'ca. 6 km',
    badge: 'Spaß & Abenteuer',
    text: '800 Meter Abfahrt direkt am Wild- & Erlebnispark. Einer- und Zweierbob, Tempo selbst wählbar. Saison April bis Oktober – schnell, günstig und für Kinder ab etwa 4 Jahren geeignet.',
  },
  {
    name: 'Eifel Adventures Berlingen',
    entfernung: 'ca. 12 km',
    badge: 'Abenteuer',
    text: 'Ziplining, Adventure-Minigolf, Fußball-Billard und Boccia auf einem Outdoor-Gelände. Ideal für ältere Kinder und Jugendliche. Baumhaus-Übernachtungen möglich – auch für besondere Familienerlebnisse.',
  },
  {
    name: 'Adler- & Wolfspark Kasselburg Pelm',
    entfernung: 'ca. 20 km',
    badge: 'Tiererlebnis',
    text: 'Greifvogelshows und Wolfsfütterung auf 20 ha rund um eine historische Burg. Täglich Flugvorführungen in der Saison. Europäische Wölfe in weitläufigem Gehege – für Kinder ein Erlebnis, das lange nachwirkt.',
  },
  {
    name: 'Dauner Maare',
    entfernung: 'ca. 6 km',
    badge: 'Natur & Baden',
    text: 'Die drei Dauner Maare bieten ruhige Naturerlebnisse für Familien. Am Schalkenmehrener Maar gibt es im Sommer eine flache Badestelle. Der Rundweg ist auch mit kleineren Kindern gut begehbar.',
  },
  {
    name: 'Laurentiusbad Daun',
    entfernung: 'ca. 6 km',
    badge: 'Hallenbad',
    text: 'Hallenbad mit 28 °C Wassertemperatur, Schwimmer- und Nichtschwimmerbereich. Ganzjährig geöffnet – ideal für Regentage oder wenn die Maare zu kalt sind.',
  },
  {
    name: 'Dreimühlen Wasserfall',
    entfernung: 'ca. 18 km',
    badge: 'Naturdenkmal',
    text: 'Der einzige „wachsende" Wasserfall Deutschlands bei Üxheim-Ahütte. Kostenlos zugänglich, kurzer Spazierweg am Bach. Für Kinder ein spannender Ort – mit einfacher Erklärung wird daraus eine kleine Wissensstunde.',
  },
  {
    name: 'Kurpark Daun mit Wasserspielplatz',
    entfernung: 'ca. 6 km',
    badge: 'Spielen',
    text: 'Weitläufige Grünanlage im Zentrum Dauns mit Wasserspielplatz für Kinder. Kostenlos, ganzjährig nutzbar. Gut kombinierbar mit einem Stadtbummel und Eis in der Dauner Innenstadt.',
  },
  {
    name: 'Eifel-Vulkanmuseum Daun',
    entfernung: 'ca. 6 km',
    badge: 'Museum',
    text: 'Interaktives Museum zur Entstehung der Vulkanlandschaft – verständlich aufbereitet auch für Kinder. Ideal für Regentage. Wer danach weiß, wie ein Maar entsteht, sieht die Umgebung mit anderen Augen.',
  },
  {
    name: 'Wandern: HeimatSpuren Daun',
    entfernung: 'ab Daun ca. 6 km',
    badge: 'Wandern',
    text: 'Zertifizierte Rundwanderwege mit Informationsstationen zu Natur und Geologie. 4 bis 14 km Länge, verschiedene Schwierigkeitsgrade. Familiengeeignete Routen mit Rastplätzen und abwechslungsreicher Landschaft.',
  },
]

export default function AuszeitMitKindPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: '#1C3A22', color: 'white', padding: '4rem 1.5rem' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <nav style={{ fontSize: '0.78rem', color: '#666', marginBottom: '2rem' }}>
            <Link href="/specials" style={{ color: '#888', textDecoration: 'none' }}>Specials</Link>
            {' › '}
            <span>Auszeit mit Kind</span>
          </nav>
          <h1 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 'normal', marginBottom: '1rem', lineHeight: 1.2 }}>
            Auszeit mit Kind
          </h1>
          <p style={{ color: '#AAA', fontSize: '1.05rem', lineHeight: 1.7, maxWidth: '560px' }}>
            Familienurlaub in der Vulkaneifel – Ziplining, Wildpark, Maare,
            Wasserspielplatz und Naturerlebnisse direkt vor der Tür.
          </p>
        </div>
      </section>

      {/* Einleitung */}
      <section style={{ maxWidth: '760px', margin: '0 auto', padding: '4rem 1.5rem 2rem' }}>
        <p style={{ color: '#444', lineHeight: 1.9, fontSize: '1rem' }}>
          Die Vulkaneifel bietet Familien mit Kindern ein breites Spektrum an Erlebnissen –
          von Wildtierparks und Sommerrodelbahn über Naturschwimmen an den Maaren bis hin
          zu abenteuerlichem Ziplining bei Berlingen. Rund um Kirchweiler und Daun gibt es
          Ausflugsziele für jedes Alter, jedes Budget und jedes Wetter.
        </p>
      </section>

      {/* Ziele */}
      <div style={{ maxWidth: '960px', margin: '0 auto', padding: '2rem 1.5rem 4rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '3rem' }}>
          {ziele.map((z) => (
            <div key={z.name} style={{ background: 'white', border: '1px solid #E5E5E5', padding: '1.75rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem', gap: '1rem' }}>
                <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '1rem', fontWeight: 'normal', color: '#1A1A1A', lineHeight: 1.3 }}>
                  {z.name}
                </h3>
                <span style={{ fontSize: '0.72rem', color: '#999', whiteSpace: 'nowrap', flexShrink: 0 }}>
                  {z.entfernung}
                </span>
              </div>
              <p style={{ color: '#555', lineHeight: 1.7, fontSize: '0.88rem', marginBottom: '1rem' }}>
                {z.text}
              </p>
              <span style={{ fontSize: '0.68rem', letterSpacing: '0.08em', textTransform: 'uppercase', border: '1px solid #2D5A35', color: '#2D5A35', padding: '0.2rem 0.6rem' }}>
                {z.badge}
              </span>
            </div>
          ))}
        </div>

        <div style={{ borderTop: '1px solid #E5E5E5', paddingTop: '2.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/buchung" className="btn-primary">Jetzt buchen</Link>
          <Link href="/specials" className="btn-secondary">Alle Specials</Link>
        </div>
      </div>
    </>
  )
}
