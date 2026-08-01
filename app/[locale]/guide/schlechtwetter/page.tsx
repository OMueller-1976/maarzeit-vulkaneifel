import type { Metadata } from 'next'
import Link from 'next/link'
import { getLocale } from 'next-intl/server'
import { generateSeoMetadata } from '@/lib/seo';

const metaTitles: Record<string, string> = {
  de: 'Schlechtwetter-Tipps Vulkaneifel – Was tun bei Regen?',
  en: 'Rainy Day Activities in the Vulkan Eifel – Indoor Tips near Daun',
  nl: 'Slechtweer Activiteiten Vulkaan Eifel – Tips bij Regen rond Daun',
  fr: "Activités par Mauvais Temps dans l'Eifel – Idées Intérieures près de Daun",
}

const metaDescriptions: Record<string, string> = {
  de: 'Was tun bei Regen in der Vulkaneifel? Vulkanmuseum Daun, Thermalbäder, Moselausflug und gemütliche Einkehr. Tipps für Regentage in der Eifel.',
  en: 'What to do on rainy days in the Vulkan Eifel? Volcano museum Daun, indoor pools, Moselle trip and cosy restaurants. Tips for wet days in the Eifel.',
  nl: 'Wat te doen bij regen in de Vulkaan Eifel? Vulkaanmuseum Daun, zwembaden, Moezeluitstap en gezellige restaurants. Tips voor regenachtige dagen.',
  fr: "Que faire par temps de pluie dans l'Eifel volcanique? Musée des volcans Daun, piscines intérieures, excursion sur la Moselle. Conseils pour les jours de pluie.",
}

const tipps = [
  {
    name: 'Kinopalast Vulkaneifel Daun',
    entfernung: 'ca. 6 km',
    badge: 'Unterhaltung',
    text: 'Modernes Kino in Daun mit aktuellen Filmen in angenehmer Atmosphäre. Der klassische Regentag-Plan – funktioniert immer.',
  },
  {
    name: 'Laurentiusbad Daun',
    entfernung: 'ca. 6 km',
    badge: 'Hallenbad',
    text: 'Hallenbad mit 28 °C Wassertemperatur, Schwimmer- und Nichtschwimmerbereich. Barrierefrei, ganzjährig geöffnet. Entspannung und Bewegung, egal wie das Wetter draußen ist.',
  },
  {
    name: 'Eifel-Vulkanmuseum Daun',
    entfernung: 'ca. 6 km',
    badge: 'Museum',
    text: 'Interaktives Museum zur Entstehung der Vulkanlandschaft. Verständliche Aufbereitung für alle Altersgruppen, familienfreundlich. Pflichtprogramm für alle, die die Eifel wirklich verstehen möchten.',
  },
  {
    name: 'Buchenlochhöhle Gerolstein',
    entfernung: 'ca. 18 km',
    badge: 'Höhle',
    text: 'Eiszeithöhle mit Fundstücken aus der Altsteinzeit, Teil der Gerolsteiner Dolomiten. Geführte Touren ganzjährig – innen trocken, besonders stimmungsvoll bei Regen draußen.',
  },
  {
    name: 'Maarmuseum Manderscheid',
    entfernung: 'ca. 18 km',
    badge: 'Museum',
    text: 'Museum über die Entstehung der Maare – gut kombinierbar mit einem Besuch der Manderscheider Burgruinen. Regen stört hier nicht, da der Besuch größtenteils drinnen stattfindet.',
  },
  {
    name: 'Heimwebermuseum Schalkenmehren',
    entfernung: 'ca. 5 km',
    badge: 'Heimatgeschichte',
    text: 'Einblick in das traditionelle Handwerk und die Kulturgeschichte der Eifel. Klein, ruhig und authentisch – ein guter Halt für ein bis zwei Stunden.',
  },
  {
    name: 'Einkaufen in Daun',
    entfernung: 'ca. 6 km',
    badge: 'Einkauf',
    text: 'Die Dauner Innenstadt hat eine überschaubare, angenehme Einkaufszone mit inhabergeführten Geschäften. Wochenmarkt mit regionalen Produkten – Termine vorab prüfen.',
  },
  {
    name: 'Moselausflug nach Cochem',
    entfernung: 'ca. 45 km',
    badge: 'Tagesausflug',
    text: 'Reichsburg, Altstadt und gemütliche Weinstuben direkt an der Mosel. Bei Regen hat Cochem seinen ganz eigenen Charme – verwinkelte Gassen und warme Gasträume laden zum Verweilen ein.',
  },
  {
    name: 'Schloss Bürresheim',
    entfernung: 'ca. 25 km',
    badge: 'Schloss',
    text: 'Das besterhaltene Schloss der Eifel – nie zerstört, mit originalem Inventar aus mehreren Jahrhunderten. Geführte Touren täglich, innen vollständig zu besichtigen.',
  },
  {
    name: 'Gerolsteiner Brunnen Erlebniswelt',
    entfernung: 'ca. 18 km',
    badge: 'Neu 2026 · Kostenlos',
    text: 'Neue interaktive Erlebniswelt bei Deutschlands größtem Mineralbrunnen. Führungen durch die Abfüllanlagen mit Gratisverkostung. Voranmeldung erforderlich (besucherzentrum@gerolsteiner.com, Tel. +49 6591 14238). Führungen Mo–Do: 09:30 und 11:30 Uhr. Innen, warm, kostenlos.',
  },
  {
    name: 'Birresborner Eishöhlen',
    entfernung: 'ca. 30 km',
    badge: 'Höhle · Geführt',
    text: 'Vier Lavahöhlen im Vulkanpark Birresborn – im Inneren ganzjährig um 0 °C, daher der Name. Geführte Touren buchbar, Schutzkleidung wird gestellt. Ein außergewöhnliches Erlebnis, das wetterfest ist.',
  },
  {
    name: 'Naturkundemuseum Gerolstein',
    entfernung: 'ca. 18 km',
    badge: 'Museum',
    text: 'Museum zur Naturgeschichte der Vulkaneifel – Geologie, Fossilien und Fauna der Region. Gut kombinierbar mit dem Felsenpfad oder der Erlebniswelt. Öffnungszeiten vorab prüfen.',
  },
  {
    name: 'Wassermühle Birgel',
    entfernung: 'ca. 20 km',
    badge: 'Museum · Hofladen',
    text: 'Das größte Mühlen-Erlebniszentrum Europas: vier Mühlen in Betrieb (Senf, Getreide, Öl, Säge). Führungen buchbar, Hofladen mit regionalen Produkten. Schön auch bei schlechtem Wetter.',
  },
]


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
    'de': 'Schlechtwetter Vulkaneifel – Ausflüge bei Regen rund um Daun',
    'en': 'Rainy Day Activities in the Vulkan Eifel – Indoor Tips near Daun',
    'nl': 'Slechtweer Activiteiten Vulkaan Eifel – Tips bij Regen rond Daun',
    'fr': 'Activités par Mauvais Temps dans l\'Eifel – Idées près de Daun',
  }
  const descs = {
    'de': 'Was tun bei schlechtem Wetter in der Vulkaneifel? Museen, Thermen und Indoor-Tipps rund um Daun.',
    'en': 'What to do in bad weather in the Vulkan Eifel? Museums, spas and indoor tips around Daun.',
    'nl': 'Wat te doen bij slecht weer in de Vulkaan Eifel? Musea, thermen en binnentips rond Daun.',
    'fr': 'Que faire par mauvais temps dans l\'Eifel? Musées, thermes et activités intérieures près de Daun.',
  }
  const l = locale as keyof typeof titles
  return generateSeoMetadata('/guide/schlechtwetter', locale, titles[l] || titles.de, descs[l] || descs.de)
}

export default async function SchlechtwetterPage() {
  const locale = await getLocale()

  return (
    <>
      {/* Hero */}
      <section style={{ background: '#1C3A22', color: 'white', padding: '4rem 1.5rem' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <nav style={{ fontSize: '0.78rem', color: '#666', marginBottom: '2rem' }}>
            <Link href="/guide" style={{ color: '#888', textDecoration: 'none' }}>Reiseführer</Link>
            {' › '}
            <span>Schlechtwetter</span>
          </nav>
          <h1 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 'normal', marginBottom: '1rem', lineHeight: 1.2 }}>
            Regentag? Kein Problem.
          </h1>
          <p style={{ color: '#AAA', fontSize: '1.05rem', lineHeight: 1.7, maxWidth: '560px' }}>
            Die Vulkaneifel hat auch bei Regen einiges zu bieten –
            von Höhlen und Museen bis Hallenbad und Kino.
          </p>
        </div>
      </section>

      {/* Tipps */}
      <div style={{ maxWidth: '960px', margin: '0 auto', padding: '4rem 1.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '3rem' }}>
          {tipps.map((t) => (
            <div key={t.name} style={{ background: 'white', border: '1px solid #E5E5E5', padding: '1.75rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem', gap: '1rem' }}>
                <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '1rem', fontWeight: 'normal', color: '#1A1A1A', lineHeight: 1.3 }}>
                  {t.name}
                </h3>
                <span style={{ fontSize: '0.72rem', color: '#999', whiteSpace: 'nowrap', flexShrink: 0 }}>
                  {t.entfernung}
                </span>
              </div>
              <p style={{ color: '#555', lineHeight: 1.7, fontSize: '0.88rem', marginBottom: '1rem' }}>
                {t.text}
              </p>
              <span style={{ fontSize: '0.68rem', letterSpacing: '0.08em', textTransform: 'uppercase', border: '1px solid #2D5A35', color: '#2D5A35', padding: '0.2rem 0.6rem' }}>
                {t.badge}
              </span>
            </div>
          ))}
        </div>

        {/* Geheimtipp */}
        <div style={{ background: 'white', border: '1px solid #E5E5E5', padding: '2rem', marginBottom: '3rem' }}>
          <p style={{ fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#888', marginBottom: '0.75rem' }}>
            Geheimtipp
          </p>
          <p style={{ fontFamily: 'Georgia, serif', fontSize: '1.05rem', color: '#1A1A1A', lineHeight: 1.7, fontStyle: 'italic' }}>
            „Fahren Sie an einem Regentag nach Cochem. Die Mosel-Altstadt im Nieselregen,
            eine warme Weinstube, der Blick auf die Reichsburg – das ist Eifel-Urlaub
            in seiner besten Form."
          </p>
        </div>

        <div style={{ borderTop: '1px solid #E5E5E5', paddingTop: '2.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/guide/ausflugsziele" className="btn-primary">Alle Ausflugsziele</Link>
          <Link href="/buchung" className="btn-secondary">Urlaub buchen</Link>
        </div>
      </div>
    </>
  )
}
