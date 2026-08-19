import { generateSeoMetadata } from '@/lib/seo'
import { getLocale } from 'next-intl/server'
import Link from 'next/link'
import type { Metadata } from 'next'

const translations = {
  de: {
    meta: {
      title: 'Gästekarte & Vorteile – MaarZeit Vulkaneifel',
      description: 'Ihre digitale Gästekarte: Coupons, ÖPNV-Ticket im VRT-Gebiet, Vergünstigungen in der Vulkaneifel. Alle Infos für Ihren Aufenthalt.',
    },
    hero: 'Ihre Gästekarte',
    sub: 'Kostenlose Vorteile für alle MaarZeit-Gäste während Ihres Aufenthalts in der Vulkaneifel.',
  },
  en: {
    meta: {
      title: 'Guest Card & Benefits – MaarZeit Vulkan Eifel',
      description: 'Your digital guest card: coupons, public transport in the VRT area, discounts in the Vulkan Eifel.',
    },
    hero: 'Your Guest Card',
    sub: 'Free benefits for all MaarZeit guests during your stay in the Vulkan Eifel.',
  },
  nl: {
    meta: {
      title: 'Gastenkaart & Voordelen – MaarZeit Vulkaan Eifel',
      description: 'Uw digitale gastenkaart: kortingsbonnen, openbaar vervoer in het VRT-gebied, kortingen in de Vulkaan Eifel.',
    },
    hero: 'Uw Gastenkaart',
    sub: 'Gratis voordelen voor alle MaarZeit-gasten tijdens uw verblijf in de Vulkaan Eifel.',
  },
  fr: {
    meta: {
      title: "Carte d'Hôte & Avantages – MaarZeit Eifel Volcanique",
      description: "Votre carte d'hôte numérique: coupons, transports en commun dans la zone VRT, réductions dans l'Eifel volcanique.",
    },
    hero: "Votre Carte d'Hôte",
    sub: "Avantages gratuits pour tous les hôtes de MaarZeit pendant votre séjour dans l'Eifel volcanique.",
  },
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const tr = translations[locale as keyof typeof translations] ?? translations.de
  return generateSeoMetadata('/gaestekarte', locale, tr.meta.title, tr.meta.description)
}

export function generateStaticParams() {
  return [{ locale: 'de' }, { locale: 'en' }, { locale: 'nl' }, { locale: 'fr' }]
}

const steps = [
  {
    nr: '1',
    title: 'Couponheft öffnen',
    text: 'Öffnen Sie das digitale Couponheft auf Ihrem Smartphone über den Button unten oder den QR-Code im gedruckten Heft.',
  },
  {
    nr: '2',
    title: 'Gutschein vorzeigen & Gästekarte bereithalten',
    text: 'Zeigen Sie den gewünschten Gutschein beim Anbieter vor. Die Gästekarte muss ebenfalls vorgezeigt werden – Coupons sind nur in Verbindung mit einer gültigen Gästekarte einlösbar.',
  },
  {
    nr: '3',
    title: 'Gutschein erst im Beisein des Anbieters einlösen',
    text: 'Aktivieren Sie den Gutschein über "Gutschein einlösen" erst direkt beim Anbieter vor Ort – nicht vorab.',
  },
]

const vrtCards = [
  { title: 'Gültig für', text: 'Alle Busse, RufBusse, RE und RB im gesamten VRT-Gebiet' },
  { title: 'Gültigkeitsdauer', text: 'Gesamter Aufenthalt inkl. An- und Abreisetag' },
  { title: 'Personalisiert', text: 'Gästekarte im ÖPNV vorzeigen. Bei Aufforderung: Lichtbildausweis bereithalten' },
  { title: 'Keine Akzeptanz?', text: 'Ticket lösen und Rückerstattung beim VRT beantragen (Kontaktformular VRT)' },
]

export default async function GaestekartePage() {
  const locale = await getLocale()
  const tr = translations[locale as keyof typeof translations] ?? translations.de

  return (
    <main>
      {/* Hero */}
      <section style={{
        background: 'linear-gradient(135deg, #1C3A22 0%, #2D5A35 100%)',
        padding: '4rem 2rem 3rem',
        color: 'white',
        textAlign: 'center',
      }}>
        <h1 style={{ fontFamily: 'Georgia,serif', fontSize: 'clamp(1.8rem,3vw,2.5rem)',
          fontWeight: 'normal', marginBottom: '0.75rem' }}>
          {tr.hero}
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.85)', maxWidth: 580,
          margin: '0 auto', lineHeight: 1.6 }}>
          {tr.sub}
        </p>
      </section>

      <div style={{ maxWidth: 820, margin: '0 auto', padding: '3rem 2rem' }}>

        {/* ABSCHNITT 1: Digitales Couponheft */}
        <section style={{ marginBottom: '3rem' }}>
          <span style={{ width: 40, height: 1, background: '#1A1A1A',
            display: 'block', marginBottom: '1.5rem' }} />
          <h2 style={{ fontFamily: 'Georgia,serif', fontSize: '1.5rem',
            fontWeight: 'normal', color: '#1A1A1A', marginBottom: '1rem' }}>
            Digitales Couponheft
          </h2>
          <p style={{ color: '#555', lineHeight: 1.8, marginBottom: '1.5rem' }}>
            Als Gast bei MaarZeit erhalten Sie eine Gästekarte der Verbandsgemeinde Daun.
            Diese berechtigt zur Nutzung zahlreicher Vergünstigungen in der Vulkaneifel –
            über das digitale Couponheft der GesundLand Vulkaneifel GmbH.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem',
            marginBottom: '2rem' }}>
            {steps.map(step => (
              <div key={step.nr} style={{
                display: 'flex', gap: '1.25rem', alignItems: 'flex-start',
                background: '#F9F8F6', borderRadius: '8px', padding: '1.25rem',
                border: '1px solid #E5E5E5',
              }}>
                <div style={{
                  background: '#1C3A22', color: 'white', borderRadius: '50%',
                  width: 36, height: 36, display: 'flex', alignItems: 'center',
                  justifyContent: 'center', fontFamily: 'Georgia,serif',
                  fontSize: '1rem', flexShrink: 0,
                }}>
                  {step.nr}
                </div>
                <div>
                  <strong style={{ display: 'block', color: '#1A1A1A',
                    marginBottom: '0.3rem' }}>{step.title}</strong>
                  <p style={{ color: '#555', fontSize: '0.9rem',
                    lineHeight: 1.7, margin: 0 }}>{step.text}</p>
                </div>
              </div>
            ))}
          </div>

          <a
            href="https://app.picka.blue/?pick=https://vulkan-eifel.pickablue.de/api/data/scan/5"
            target="_blank" rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              background: '#2D5A35', color: 'white',
              padding: '0.9rem 2rem', borderRadius: '6px',
              textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem',
            }}>
            Digitales Couponheft öffnen →
          </a>

          <div style={{
            marginTop: '1.5rem', background: '#FFF9E6',
            border: '1px solid #F0D060', borderRadius: '6px',
            padding: '1rem 1.25rem', fontSize: '0.85rem',
            color: '#665500', lineHeight: 1.65,
          }}>
            <strong>Tipp:</strong> Im digitalen Couponheft werden regelmäßig neue Angebote
            ergänzt. Damit Sie immer die aktuellen Coupons sehen, aktualisieren Sie
            gelegentlich den Cache bzw. die Kacheln in der App.
          </div>
        </section>

        {/* ABSCHNITT 2: Gedrucktes Couponheft */}
        <section style={{ marginBottom: '3rem' }}>
          <span style={{ width: 40, height: 1, background: '#E5E5E5',
            display: 'block', marginBottom: '1.5rem' }} />
          <h2 style={{ fontFamily: 'Georgia,serif', fontSize: '1.5rem',
            fontWeight: 'normal', color: '#1A1A1A', marginBottom: '1rem' }}>
            Gedrucktes Couponheft
          </h2>
          <p style={{ color: '#555', lineHeight: 1.8 }}>
            Ergänzend zum digitalen Heft gibt es eine gedruckte Übersicht aller Angebote.
            Die Gutscheine müssen <strong>nicht</strong> herausgetrennt oder abgegeben werden –
            das Heft enthält lediglich einen QR-Code, über den Sie direkt zum digitalen
            Couponheft gelangen. Sie erhalten das gedruckte Heft bei Ihrer Anreise.
          </p>
        </section>

        {/* ABSCHNITT 3: ÖPNV / VRT-GästeTicket */}
        <section style={{ marginBottom: '3rem' }}>
          <span style={{ width: 40, height: 1, background: '#E5E5E5',
            display: 'block', marginBottom: '1.5rem' }} />
          <h2 style={{ fontFamily: 'Georgia,serif', fontSize: '1.5rem',
            fontWeight: 'normal', color: '#1A1A1A', marginBottom: '1rem' }}>
            Kostenloser ÖPNV – VRT-GästeTicket
          </h2>
          <p style={{ color: '#555', lineHeight: 1.8, marginBottom: '1rem' }}>
            Ihr VRT-GästeTicket gilt für die gesamte Dauer Ihres Aufenthalts
            <strong> inklusive An- und Abreisetag</strong> – kostenlos in allen
            Bussen, RufBussen und Nahverkehrszügen (RE, RB) im gesamten VRT-Gebiet
            (Verkehrsverbund Region Trier).
          </p>

          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1rem', marginBottom: '1.5rem',
          }}>
            {vrtCards.map(item => (
              <div key={item.title} style={{
                border: '1px solid #E5E5E5', borderRadius: '8px',
                padding: '1.25rem', background: 'white',
              }}>
                <strong style={{ display: 'block', color: '#1C3A22',
                  fontSize: '0.85rem', letterSpacing: '0.03em',
                  marginBottom: '0.4rem' }}>{item.title}</strong>
                <p style={{ color: '#555', fontSize: '0.875rem',
                  lineHeight: 1.65, margin: 0 }}>{item.text}</p>
              </div>
            ))}
          </div>

          <div style={{
            background: '#F9F8F6', border: '1px solid #E5E5E5',
            borderLeft: '3px solid #2D5A35', borderRadius: '4px',
            padding: '1rem 1.25rem', fontSize: '0.85rem',
            color: '#555', lineHeight: 1.65,
          }}>
            <strong style={{ color: '#1A1A1A' }}>Gästekarte nicht akzeptiert?</strong>
            <br />
            Sollte Ihre Gästekarte im Bus einmal nicht akzeptiert werden, lösen Sie
            bitte ein normales Ticket. Sie haben Anspruch auf vollständige Rückerstattung
            über das{' '}
            <a href="https://www.vrt-info.de/kontakt/kontaktformular"
              target="_blank" rel="noopener noreferrer"
              style={{ color: '#2D5A35' }}>
              Kontaktformular des VRT
            </a>.
          </div>
        </section>

        {/* ABSCHNITT 4: Kontakt GesundLand */}
        <section style={{ marginBottom: '2rem' }}>
          <span style={{ width: 40, height: 1, background: '#E5E5E5',
            display: 'block', marginBottom: '1.5rem' }} />
          <h2 style={{ fontFamily: 'Georgia,serif', fontSize: '1.5rem',
            fontWeight: 'normal', color: '#1A1A1A', marginBottom: '1rem' }}>
            Fragen zur Gästekarte?
          </h2>
          <p style={{ color: '#555', lineHeight: 1.8 }}>
            Bei Fragen zu Ihrer Gästekarte, zu Coupons oder zum VRT-GästeTicket
            wenden Sie sich direkt an:
          </p>
          <div style={{
            background: '#F9F8F6', borderRadius: '8px',
            padding: '1.25rem', border: '1px solid #E5E5E5', marginTop: '1rem',
          }}>
            <strong style={{ display: 'block', marginBottom: '0.25rem',
              color: '#1A1A1A' }}>GesundLand Vulkaneifel GmbH</strong>
            <p style={{ color: '#555', fontSize: '0.9rem', lineHeight: 1.7, margin: 0 }}>
              Leopoldstraße 9a · 54550 Daun<br />
              Tel: +49 (0)6592 95 13 70<br />
              <a href="mailto:info@gesundland-vulkaneifel.de" style={{ color: '#2D5A35' }}>
                info@gesundland-vulkaneifel.de
              </a><br />
              <a href="https://www.gesundland-vulkaneifel.de"
                target="_blank" rel="noopener noreferrer"
                style={{ color: '#2D5A35' }}>
                www.gesundland-vulkaneifel.de
              </a>
            </p>
          </div>
        </section>

        {/* CTA */}
        <div style={{ textAlign: 'center', paddingTop: '1rem' }}>
          <Link href="/buchung" style={{
            display: 'inline-block', background: '#1C3A22', color: 'white',
            padding: '0.9rem 2rem', borderRadius: '6px',
            textDecoration: 'none', fontWeight: 600,
          }}>
            Jetzt Verfügbarkeit prüfen
          </Link>
        </div>
      </div>
    </main>
  )
}
