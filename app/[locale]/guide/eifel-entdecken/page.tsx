import type { Metadata } from 'next'
import Link from 'next/link'
import { getLocale } from 'next-intl/server'
import { generateSeoMetadata } from '@/lib/seo'

type Category = {
  id: string
  title: string
  items: { name: string; dist: string; desc: string; link: string; tags: string[] }[]
}

type LocaleData = {
  meta: { title: string; description: string }
  hero: string
  sub: string
  breadcrumb: string
  sourceNote: string
  btn: string
  moreErfahren: string
  relatedLinks: { href: string; label: string }[]
  categories: Category[]
}

const translations: Record<string, LocaleData> = {
  de: {
    meta: {
      title: 'Eifel entdecken \u2013 Aktivit\u00e4ten, Ausfl\u00fcge & Erlebnisse rund um Kirchweiler',
      description: 'Alles was die Eifel zu bieten hat: Kanufahren auf der Rur, Nationalpark, Burgen, Monschau, Wandern, Rursee und mehr \u2013 ab MaarZeit in Kirchweiler.',
    },
    hero: 'Entdecke die Eifel',
    sub: 'Von Vulkanmaaren bis Nationalpark \u2013 die sch\u00f6nsten Aktivit\u00e4ten und Ausflugsziele rund um Kirchweiler.',
    breadcrumb: 'Reisef\u00fchrer',
    sourceNote: 'Alle Entfernungen ab Kirchweiler per PKW. Angaben ohne Gew\u00e4hr \u2013 bitte aktuelle Informationen beim jeweiligen Anbieter erfragen.',
    btn: 'Verf\u00fcgbarkeit pr\u00fcfen',
    moreErfahren: 'Mehr erfahren \u2192',
    categories: [
      {
        id: 'wasser',
        title: 'Wasser & Paddeln',
        items: [
          {
            name: 'Kanufahrt auf der Rur',
            dist: 'ca. 60 km',
            desc: 'Die Rur zwischen Heimbach und Zerkall ist das beliebteste Kanugew\u00e4sser Westdeutschlands. 14 km intakte Flusslandschaft mit kleinen Stromschnellen, Halbschatten unter \u00fcberh\u00e4ngenden \u00c4sten. Kanuschule in Heimbach bietet gef\u00fchrte Touren an. Erlaubt 15. Juli \u2013 28. Februar.',
            link: 'https://www.nationalpark-eifel.de',
            tags: ['AKTIV', 'NATUR', 'FAMILIEN'],
          },
          {
            name: 'Rursee & Obersee',
            dist: 'ca. 65 km',
            desc: 'Deutschlands zweitgr\u00f6\u00dfte Talsperre mitten im Nationalpark Eifel. Schiffsrundfahrten ab Rurberg, Tretbootverleih, Angelpl\u00e4tze und wundersch\u00f6ne Uferpromenaden. Obersee zwischen Einruhr und Rurberg mit Panoramablick vom Wolfsh\u00fcgel.',
            link: 'https://www.rureifel-tourismus.de',
            tags: ['SEE', 'FAMILIE', 'AUSFLUG'],
          },
          {
            name: 'Urftsee & Urfttalsperre',
            dist: 'ca. 70 km',
            desc: 'Glasklares Wasser f\u00fcr entspanntes Paddeln. Das historische Jugendstil-Wasserkraftwerk Heimbach (1905) \u2013 damals gr\u00f6\u00dfstes Wasserkraftwerk der Welt \u2013 ist direkt am See besichtigbar.',
            link: 'https://www.nationalpark-eifel.de',
            tags: ['WASSER', 'HISTORY'],
          },
        ],
      },
      {
        id: 'natur',
        title: 'Nationalpark & Natur',
        items: [
          {
            name: 'Nationalpark Eifel',
            dist: 'ca. 60\u201380 km',
            desc: 'Einer von nur 16 Nationalparks in Deutschland. Buchenwälder, Moore, B\u00e4che und Talsperren auf 110 km\u00b2. Eingangsportale in Simmerath-Rurberg, Heimbach, Monschau und Nideggen. Wildnis-Trail: 4-Tages-Wanderung durch den gesamten Park. Wolfspopulation seit 2014.',
            link: 'https://www.nationalpark-eifel.de',
            tags: ['NATUR', 'WANDERN', 'WILDNIS'],
          },
          {
            name: 'Wandern bei Einruhr & Rursee',
            dist: 'ca. 65 km',
            desc: 'Traumhafte Rundwege hoch \u00fcber dem Rursee. Eifel-Blick \u201eWolfsh\u00fcgel\u201c bei Einruhr: fantastische Fernsicht \u00fcber den Kermeter-Kernbereich des Nationalparks. Stille Waldpfade, kaum Touristen, echte Natur.',
            link: 'https://www.rureifel-tourismus.de',
            tags: ['WANDERN', 'AUSSICHT'],
          },
          {
            name: 'Narzissenwiese Oleftal',
            dist: 'ca. 80 km',
            desc: 'Eines der sch\u00f6nsten Naturschauspiele Deutschlands: Tausende wilder Narzissen bl\u00fchen im Fr\u00fchjahr (April/Mai) im Oleftal. Gef\u00fchrte Wanderungen und kostenlose Naturerlebnisse.',
            link: 'https://www.eifel.info',
            tags: ['FR\u00dcHLING', 'NATUR', 'WANDERN'],
          },
        ],
      },
      {
        id: 'burgen',
        title: 'Burgen & Geschichte',
        items: [
          {
            name: 'Burg Nideggen',
            dist: 'ca. 65 km',
            desc: 'Das Wahrzeichen Nideggens thront hoch \u00fcber dem Rurtal. Im 12. Jahrhundert errichtet, beherbergt sie heute ein Burgenmuseum. Eintritt zur Anlage kostenlos \u2013 nur das Museum ist kostenpflichtig. Anschlie\u00dfend Bummel durch die historische Altstadt mit urigen Gassen.',
            link: 'https://www.burg-nideggen.de',
            tags: ['BURG', 'HISTORY', 'KOSTENLOS'],
          },
          {
            name: 'Monschau \u2013 Fachwerkstadt',
            dist: 'ca. 90 km',
            desc: 'Die sch\u00f6nste Fachwerkstadt der Eifel. Historische Altstadt direkt an der Rur, Rotes Haus (18. Jh.), Burganlage mit Panoramablick. Ber\u00fchmt f\u00fcr Senf und Glasmanufaktur. Im Winter einer der stimmungsvollsten Weihnachtsm\u00e4rkte der Region.',
            link: 'https://www.monschau.de',
            tags: ['ALTSTADT', 'FACHWERK', 'KULTUR'],
          },
          {
            name: 'Bad M\u00fcnstereifel \u2013 Mittelalterstadt',
            dist: 'ca. 70 km',
            desc: 'Eine der besterhaltenen mittelalterlichen Stadtmauern Deutschlands umgibt die Altstadt. Sehenswert: Stiftskirche, Rathaus, historische Gassen. Beliebtes Ausflugsziel f\u00fcr die ganze Familie.',
            link: 'https://www.bad-muenstereifel.de',
            tags: ['MITTELALTER', 'ALTSTADT'],
          },
          {
            name: 'Burg Eltz',
            dist: 'ca. 80 km',
            desc: 'Eines der beeindruckendsten Burgenensembles Deutschlands \u2013 nie zerst\u00f6rt, seit 800 Jahren im Familienbesitz. Im Elzbachtal versteckt gelegen, umgeben von W\u00e4ldern. Das Motiv auf dem 500-DM-Schein.',
            link: 'https://www.burg-eltz.de',
            tags: ['BURG', 'UNESCO', 'MOSEL'],
          },
        ],
      },
      {
        id: 'aktiv',
        title: 'Aktiv & Abenteuer',
        items: [
          {
            name: 'Klettersteig Manderscheid',
            dist: 'ca. 18 km',
            desc: 'Der Manderscheider Burgenklettersteig wurde zur \u201eInnovation des Jahres 2023\u201c gew\u00e4hlt. Gesicherter Klettersteig zwischen den Manderscheider Burgen. F\u00fcr Einsteiger und Fortgeschrittene geeignet. Helm und Klettersteigset empfohlen.',
            link: 'https://www.gesundland-vulkaneifel.de',
            tags: ['ABENTEUER', 'KLETTERN', 'AKTIV'],
          },
          {
            name: 'Mountainbike Vulkaneifel',
            dist: 'ab 0 km',
            desc: '\u00dcber 750 km markierte MTB-Strecken, 13 ha Technik-Parcours. El Dorado f\u00fcr Mountainbiker mit Trails f\u00fcr alle Schwierigkeitsgrade. Guided Tours buchbar. E-Bike-Verleih in Daun.',
            link: 'https://www.eifel.info',
            tags: ['BIKE', 'AKTIV', 'SPORT'],
          },
          {
            name: 'Maare-Mosel-Radweg',
            dist: 'Start 6 km',
            desc: '51 km steigungsfreier Radweg auf ehemaliger Bahntrasse von Daun bis Traben-Trarbach an der Mosel. Ideal f\u00fcr Familien, Genussradler und E-Bikes. Traumhafter Streckenabschnitt durch W\u00e4lder und T\u00e4ler.',
            link: 'https://www.eifel.info/radfahren',
            tags: ['RADFAHREN', 'FAMILIE', 'E-BIKE'],
          },
          {
            name: 'Lauschtouren Eifel',
            dist: 'verschiedene',
            desc: 'Wandern mit Audioguide \u2013 Geschichten, Sagen und Wissenswertes \u00fcber die Eifel werden unterwegs erz\u00e4hlt. Verschiedene Routen in der Vulkaneifel, u.a. \u201eGr\u00fcne H\u00f6lle\u201c. Kostenlose App.',
            link: 'https://www.eifel.info',
            tags: ['WANDERN', 'AUDIO', 'KULTUR'],
          },
        ],
      },
      {
        id: 'kultur',
        title: 'Kultur & Genuss',
        items: [
          {
            name: 'Bitburger Brauerei Besichtigung',
            dist: 'ca. 45 km',
            desc: 'Eine der bekanntesten Brauereien Deutschlands \u00f6ffnet ihre Tore f\u00fcr F\u00fchrungen mit Verkostung. Bitburg \u2013 die R\u00f6merstadt der Eifel \u2013 hat auch eine sehenswerte historische Altstadt.',
            link: 'https://www.bitburger-braugruppe.de',
            tags: ['GENUSS', 'BIER', 'F\u00dcHRUNG'],
          },
          {
            name: 'Monreal \u2013 Romantisches Dorf',
            dist: 'ca. 45 km',
            desc: 'Oft als \u201eromantischstes Dorf Deutschlands\u201c bezeichnet. Zwei Burgturme, Fachwerkhäuser, die Elz. Winzig, aber zauberhaft \u2013 perfekt f\u00fcr einen Spaziergang und Kaffee.',
            link: 'https://www.eifel.info',
            tags: ['ROMANTIK', 'DORF', 'FOTO'],
          },
          {
            name: 'Gerolsteiner Brunnen Erlebniswelt',
            dist: 'ca. 18 km',
            desc: 'Interaktive Erlebniswelt beim bekanntesten deutschen Mineralwasserproduzenten. F\u00fchrungen Mo\u2013Do, Voranmeldung erforderlich, kostenlos.',
            link: 'https://www.gerolsteiner.de',
            tags: ['F\u00dcHRUNG', 'KOSTENLOS', 'FAMILIE'],
          },
        ],
      },
    ],
    relatedLinks: [
      { href: '/guide/dauner-maare', label: 'Dauner Maare' },
      { href: '/guide/ausflugsziele', label: 'Ausflugsziele' },
      { href: '/guide/wandern', label: 'Wandern' },
      { href: '/guide/gerolstein', label: 'Gerolstein' },
      { href: '/specials/laacher-see', label: 'Laacher See' },
    ],
  },
  en: {
    meta: {
      title: 'Discover the Eifel \u2013 Activities, Day Trips & Experiences near Kirchweiler',
      description: 'Everything the Eifel has to offer: canoeing on the Rur, national park, castles, Monschau, hiking, Lake Rur and more \u2013 from MaarZeit in Kirchweiler.',
    },
    hero: 'Discover the Eifel',
    sub: 'From volcanic lakes to national park \u2013 the best activities and day trips around Kirchweiler.',
    breadcrumb: 'Travel Guide',
    sourceNote: 'All distances from Kirchweiler by car. Information provided without guarantee \u2013 please check current details with the respective provider.',
    btn: 'Check Availability',
    moreErfahren: 'Find out more \u2192',
    relatedLinks: [
      { href: '/guide/dauner-maare', label: 'Daun Lakes' },
      { href: '/guide/ausflugsziele', label: 'Excursions' },
      { href: '/guide/wandern', label: 'Hiking' },
      { href: '/guide/gerolstein', label: 'Gerolstein' },
      { href: '/specials/laacher-see', label: 'Laacher See' },
    ],
    categories: [],
  },
  nl: {
    meta: {
      title: 'De Eifel Ontdekken \u2013 Activiteiten, Uitstapjes & Ervaringen rond Kirchweiler',
      description: 'Alles wat de Eifel te bieden heeft: kano\u00ebren op de Rur, nationaal park, kastelen, Monschau, wandelen, Rursee en meer \u2013 vanuit MaarZeit in Kirchweiler.',
    },
    hero: 'Ontdek de Eifel',
    sub: 'Van vulkanische meren tot nationaal park \u2013 de mooiste activiteiten en uitstapjes rond Kirchweiler.',
    breadcrumb: 'Reisgids',
    sourceNote: 'Alle afstanden vanuit Kirchweiler per auto. Informatie zonder garantie \u2013 controleer actuele gegevens bij de betreffende aanbieder.',
    btn: 'Beschikbaarheid Controleren',
    moreErfahren: 'Meer ontdekken \u2192',
    relatedLinks: [
      { href: '/guide/dauner-maare', label: 'Dauner Maren' },
      { href: '/guide/ausflugsziele', label: 'Uitstapjes' },
      { href: '/guide/wandern', label: 'Wandelen' },
      { href: '/guide/gerolstein', label: 'Gerolstein' },
      { href: '/specials/laacher-see', label: 'Laacher See' },
    ],
    categories: [],
  },
  fr: {
    meta: {
      title: "D\u00e9couvrir l\u2019Eifel \u2013 Activit\u00e9s, Excursions & Exp\u00e9riences pr\u00e8s de Kirchweiler",
      description: "Tout ce que l\u2019Eifel a \u00e0 offrir\u00a0: cano\u00eb sur la Rur, parc national, ch\u00e2teaux, Monschau, randonn\u00e9e, lac Rur et plus \u2013 depuis MaarZeit \u00e0 Kirchweiler.",
    },
    hero: "D\u00e9couvrir l\u2019Eifel",
    sub: 'Des lacs volcaniques au parc national \u2013 les meilleures activit\u00e9s et excursions autour de Kirchweiler.',
    breadcrumb: 'Guide de Voyage',
    sourceNote: "Toutes les distances depuis Kirchweiler en voiture. Informations fournies sans garantie \u2013 veuillez v\u00e9rifier les informations actuelles aupr\u00e8s du prestataire concern\u00e9.",
    btn: "V\u00e9rifier la Disponibilit\u00e9",
    moreErfahren: 'En savoir plus \u2192',
    relatedLinks: [
      { href: '/guide/dauner-maare', label: 'Dauner Maare' },
      { href: '/guide/ausflugsziele', label: 'Excursions' },
      { href: '/guide/wandern', label: 'Randonn\u00e9e' },
      { href: '/guide/gerolstein', label: 'Gerolstein' },
      { href: '/specials/laacher-see', label: 'Laacher See' },
    ],
    categories: [],
  },
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
  const tr = translations[locale as keyof typeof translations] ?? translations.de
  return generateSeoMetadata('/guide/eifel-entdecken', locale, tr.meta.title, tr.meta.description)
}

export default async function EifelEntdeckenPage() {
  const locale = await getLocale()
  const tr = translations[locale as keyof typeof translations] ?? translations.de
  const categories = translations.de.categories

  return (
    <main>
      {/* Hero */}
      <section style={{
        background: 'linear-gradient(135deg, #1C3A22 0%, #2D5A35 100%)',
        padding: '5rem 2rem 3rem',
        color: 'white',
      }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <nav style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)', marginBottom: '1.5rem' }}>
            <Link href="/guide" style={{ color: 'inherit', textDecoration: 'none' }}>{tr.breadcrumb}</Link>
            {' \u203a '} {tr.hero}
          </nav>
          <h1 style={{
            fontFamily: 'Georgia, serif',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 'normal',
            marginBottom: '1rem',
          }}>
            {tr.hero}
          </h1>
          <p style={{
            fontSize: '1.1rem',
            color: 'rgba(255,255,255,0.85)',
            maxWidth: 620,
            lineHeight: 1.6,
            margin: 0,
          }}>
            {tr.sub}
          </p>
        </div>
      </section>

      {/* Kategorien */}
      {categories.map((cat) => (
        <section key={cat.id} style={{ maxWidth: 860, margin: '0 auto', padding: '4rem 2rem 0' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2rem' }}>
            <h2 style={{
              fontFamily: 'Georgia, serif',
              fontSize: '1.5rem',
              fontWeight: 'normal',
              color: '#1A1A1A',
              whiteSpace: 'nowrap',
              margin: 0,
            }}>
              {cat.title}
            </h2>
            <div style={{ flex: 1, height: '1px', background: '#E5E5E5' }} />
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.5rem',
          }}>
            {cat.items.map((item) => (
              <div key={item.name} style={{
                border: '1px solid #E5E5E5',
                borderRadius: '8px',
                padding: '1.5rem',
                background: 'white',
                display: 'flex',
                flexDirection: 'column',
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '0.75rem',
                  gap: '0.75rem',
                }}>
                  <h3 style={{
                    fontFamily: 'Georgia, serif',
                    fontSize: '1.05rem',
                    fontWeight: 'normal',
                    color: '#1A1A1A',
                    margin: 0,
                    lineHeight: 1.3,
                  }}>
                    {item.name}
                  </h3>
                  <span style={{ fontSize: '0.75rem', color: '#999', flexShrink: 0 }}>
                    {item.dist}
                  </span>
                </div>

                <p style={{
                  color: '#555',
                  fontSize: '0.875rem',
                  lineHeight: 1.7,
                  margin: '0 0 1rem',
                  flex: 1,
                }}>
                  {item.desc}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1rem' }}>
                  {item.tags.map((tag) => (
                    <span key={tag} style={{
                      fontSize: '0.7rem',
                      color: '#2D5A35',
                      border: '1px solid #2D5A35',
                      padding: '0.2rem 0.5rem',
                      borderRadius: '3px',
                      letterSpacing: '0.04em',
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>

                <a href={item.link} target="_blank" rel="noopener noreferrer" style={{
                  fontSize: '0.8rem',
                  color: '#1A1A1A',
                  textDecoration: 'none',
                  borderBottom: '1px solid #1A1A1A',
                  alignSelf: 'flex-start',
                }}>
                  {tr.moreErfahren}
                </a>
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* Quellenhinweis */}
      <div style={{ maxWidth: 860, margin: '3rem auto 0', padding: '0 2rem' }}>
        <p style={{ fontSize: '0.78rem', color: '#aaa', lineHeight: 1.6 }}>
          {tr.sourceNote}
        </p>
      </div>

      {/* Links zu anderen Guide-Seiten */}
      <section style={{ maxWidth: 860, margin: '2rem auto', padding: '0 2rem 2rem' }}>
        <div style={{ height: '1px', background: '#E5E5E5', marginBottom: '1.5rem' }} />
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          {tr.relatedLinks.map((l) => (
            <Link key={l.href} href={l.href} style={{
              fontSize: '0.85rem',
              color: '#2D5A35',
              border: '1px solid #2D5A35',
              padding: '0.5rem 1rem',
              borderRadius: '4px',
              textDecoration: 'none',
            }}>
              {l.label}
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{
        background: '#1A1A1A',
        color: 'white',
        padding: '4rem 2rem',
        textAlign: 'center',
        marginTop: '2rem',
      }}>
        <p style={{ color: '#aaa', marginBottom: '1.5rem', fontSize: '1rem' }}>
          {locale === 'de' && 'Alle Highlights der Eifel \u2013 direkt vor der Haust\u00fcr der MaarZeit.'}
          {locale === 'en' && 'All the highlights of the Eifel \u2013 right on the doorstep of MaarZeit.'}
          {locale === 'nl' && 'Alle hoogtepunten van de Eifel \u2013 direct voor de deur van MaarZeit.'}
          {locale === 'fr' && "Tous les points forts de l\u2019Eifel \u2013 juste devant la porte de MaarZeit."}
        </p>
        <Link href="/buchung" style={{
          display: 'inline-block',
          background: '#2D5A35',
          color: 'white',
          padding: '1rem 2.5rem',
          borderRadius: '4px',
          textDecoration: 'none',
          fontWeight: 600,
        }}>
          {tr.btn}
        </Link>
      </section>
    </main>
  )
}
