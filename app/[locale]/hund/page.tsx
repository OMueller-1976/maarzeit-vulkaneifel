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
    intro: 'Die Vulkaneifel ist ein Paradies für Hunde und ihre Besitzer. Weitläufige Wälder, ruhige Wanderwege und hundefreundliche Ausflugsziele machen die Region zum idealen Reiseziel.',
    sections: { lakes: 'Badeseen mit Hund', trails: 'Wanderwege mit Hund', tips: 'Praktische Tipps' },
    cta: 'Verfügbarkeit prüfen',
    ctaNote: 'Hunde sind in unserer Ferienwohnung herzlich willkommen.',
  },
  en: {
    meta: {
      title: 'Holiday with Dog in Vulkan Eifel – Trails, Lakes & Trips',
      description: 'Dog-friendly trips in the Vulkan Eifel: Freilinger See with dog beach, hiking trails, Daun Lakes, Lieser Path.',
    },
    hero: { title: 'Holiday with Your Dog', subtitle: 'in the Vulkan Eifel' },
    intro: 'The Vulkan Eifel is a paradise for dogs and their owners. Vast forests, quiet hiking trails and dog-friendly attractions make the region an ideal destination.',
    sections: { lakes: 'Lakes for Dogs', trails: 'Hiking Trails with Dogs', tips: 'Practical Tips' },
    cta: 'Check Availability',
    ctaNote: 'Dogs are warmly welcome in our holiday apartment.',
  },
  nl: {
    meta: {
      title: 'Vakantie met Hond in de Vulkaan Eifel – Wandelpaden & Meren',
      description: 'Hondenvriendellijke uitjes in de Vulkaan Eifel: Freilinger See met hondenstrand, wandelpaden, Dauner Maren.',
    },
    hero: { title: 'Vakantie met Hond', subtitle: 'in de Vulkaan Eifel' },
    intro: 'De Vulkaan Eifel is een paradijs voor honden en hun baasjes. Uitgestrekte bossen, rustige wandelpaden en hondenvriendelijke attracties maken de regio tot een ideale bestemming.',
    sections: { lakes: 'Meren voor Honden', trails: 'Wandelpaden met Honden', tips: 'Praktische Tips' },
    cta: 'Beschikbaarheid Controleren',
    ctaNote: 'Honden zijn van harte welkom in ons vakantieappartement.',
  },
  fr: {
    meta: {
      title: "Vacances avec Chien dans l'Eifel Volcanique – Sentiers & Lacs",
      description: "Sorties chien-friendly dans l'Eifel volcanique: Freilinger See avec plage pour chiens, sentiers de randonnée.",
    },
    hero: { title: 'Vacances avec Votre Chien', subtitle: "dans l'Eifel Volcanique" },
    intro: "L'Eifel volcanique est un paradis pour les chiens et leurs propriétaires. Vastes forêts, sentiers tranquilles et attractions chien-friendly font de la région une destination idéale.",
    sections: { lakes: 'Lacs pour Chiens', trails: 'Sentiers de Randonnée avec Chiens', tips: 'Conseils Pratiques' },
    cta: 'Vérifier la Disponibilité',
    ctaNote: 'Les chiens sont chaleureusement bienvenus dans notre appartement.',
  },
}

const seen = [
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
]

const wege = [
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
]

const tipps = [
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
            Die schönsten Wanderwege, Badeseen und Ausflugsziele
            für Sie und Ihren Vierbeiner – rund um Kirchweiler und Daun.
          </p>
        </div>
      </section>

      {/* Einleitung */}
      <section style={{ maxWidth: '760px', margin: '0 auto', padding: '5rem 1.5rem' }}>
        <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '1.6rem', fontWeight: 'normal', marginBottom: '1.5rem', color: '#1A1A1A' }}>
          Warum die Vulkaneifel ideal für Hundeurlaub ist
        </h2>
        <div style={{ color: '#444', lineHeight: 1.9, fontSize: '1rem' }}>
          <p style={{ marginBottom: '1.2rem' }}>
            {tr.intro}
          </p>
          <p style={{ marginBottom: '1.2rem' }}>
            Hunde können hier frei durchatmen: Die Wanderwege sind gut beschildert, wenig frequentiert und führen durch abwechslungsreiche Landschaft – von vulkanischen Maar-Ufern über dichte Buchenwälder bis hin zu offenen Wiesen und dem Liesertal. Naturnahe Wasserstellen gibt es entlang vieler Routen.
          </p>
          <p>
            Auf dieser Seite finden Sie die besten Ausflugsziele, Badeseen und Wanderrouten für Hunde in der Vulkaneifel – mit konkreten Angaben zu Entfernungen, Leinenpflicht und Besonderheiten.
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
            {seen.map((s) => (
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
          {wege.map((w, i) => (
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
            {tipps.map((t) => (
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
          Ferienwohnung mit Hund in der Vulkaneifel
        </h2>
        <div style={{ color: '#444', lineHeight: 1.9, fontSize: '1rem' }}>
          <p style={{ marginBottom: '1.2rem' }}>
            Wer Urlaub mit Hund in der Vulkaneifel plant, findet rund um Daun und Kirchweiler eine der hundfreundlichsten Regionen Deutschlands. Die Kombination aus ruhiger Lage, ausgedehnten Waldgebieten und einer überschaubaren Tourismusdichte macht die Gegend besonders attraktiv für Hundebesitzer, die abseits von überfüllten Feriengebieten Urlaub machen möchten.
          </p>
          <p style={{ marginBottom: '1.2rem' }}>
            Der Hundestrand am Freilinger See bei Blankenheim (ca. 25 km) ist einer der wenigen ausgewiesenen Hundestrand-Bereiche in der Region. Für tägliche Spaziergänge bieten die Waldwege rund um Kirchweiler eine ideale Basis – direkt vor der Haustür, ohne Anfahrt. Der Lieserpfad mit seinen 74 Kilometern entlang der Lieser ist für mehrtägige Wanderungen mit Hund geeignet.
          </p>
          <p>
            Hundefreundliche Unterkunft Daun und Umgebung – das Angebot wächst. Wer eine ruhige, naturnahe Basis für seinen Hundeurlaub in der Eifel sucht, findet in Kirchweiler einen idealen Ausgangspunkt für alle genannten Ausflugsziele.
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
