import Link from 'next/link'
import { getLocale } from 'next-intl/server'
import { generateSeoMetadata } from '@/lib/seo'
import type { Metadata } from 'next'

const uiTranslations = {
  de: {
    title:      'Events & Veranstaltungen',
    subtitle:   'Die schönsten Highlights im Jahreskalender der Vulkaneifel – direkt vor Ihrer Haustür ab MaarZeit in Kirchweiler.',
    intro:      'Die Vulkaneifel bietet das ganze Jahr über ein abwechslungsreiches Veranstaltungsprogramm – von internationalen Motorsport-Events am Nürburgring über traditionsreiche Volksfeste bis hin zu Konzerten unter freiem Himmel. Viele Highlights sind direkt ab unserer Ferienwohnung in Kirchweiler bequem erreichbar.',
    disclaimer: 'Termine und Informationen ohne Gewähr. Bitte vor dem Besuch beim jeweiligen Veranstalter aktuelle Termine prüfen. Weitere Veranstaltungen: gesundland-vulkaneifel.de/events und tourismus.eifel.info',
    categories: [
      'Nürburgring – Motorsport & Festivals',
      'Vulkaneifel – Regionale Highlights',
      'Saisonale Highlights',
    ],
    moreInfo:   'Mehr Infos ↗',
    infoBoxTitle: 'Weitere aktuelle Veranstaltungen:',
    ctaTitle:   'Aufenthalt rund um ein Event planen?',
    ctaBtn:     'Verfügbarkeit prüfen',
    breadcrumb: 'Specials',
  },
  en: {
    title:      'Events & Festivals in the Vulkan Eifel',
    subtitle:   'The best annual highlights near MaarZeit in Kirchweiler.',
    intro:      'The Vulkan Eifel offers a diverse programme of events throughout the year – from international motorsport events at the Nürburgring to traditional folk festivals and open-air concerts. Many highlights are easily reachable from our holiday apartment in Kirchweiler.',
    disclaimer: 'Dates and information without guarantee. Please check current dates with the respective organiser before your visit. More events: gesundland-vulkaneifel.de/events and tourismus.eifel.info',
    categories: [
      'Nürburgring – Motorsport & Festivals',
      'Vulkan Eifel – Regional Highlights',
      'Seasonal Highlights',
    ],
    moreInfo:   'More Info ↗',
    infoBoxTitle: 'More upcoming events:',
    ctaTitle:   'Plan your stay around an event?',
    ctaBtn:     'Check Availability',
    breadcrumb: 'Specials',
  },
  nl: {
    title:      'Events & Festivals in de Vulkaan Eifel',
    subtitle:   'De beste jaarlijkse hoogtepunten nabij MaarZeit in Kirchweiler.',
    intro:      'De Vulkaan Eifel biedt het hele jaar door een gevarieerd evenementenprogramma – van internationale motorsportevenementen op de Nürburgring tot traditionele volksfesten en openluchtconcerten.',
    disclaimer: 'Data en informatie zonder garantie. Controleer actuele data bij de betreffende organisator voor uw bezoek.',
    categories: [
      'Nürburgring – Motorsport & Festivals',
      'Vulkaan Eifel – Regionale Hoogtepunten',
      'Seizoensgebonden Highlights',
    ],
    moreInfo:   'Meer Info ↗',
    infoBoxTitle: 'Meer evenementen:',
    ctaTitle:   'Verblijf rondom een evenement plannen?',
    ctaBtn:     'Beschikbaarheid controleren',
    breadcrumb: 'Specials',
  },
  fr: {
    title:      "Événements & Festivals dans l'Eifel Volcanique",
    subtitle:   'Les meilleurs temps forts annuels près de MaarZeit à Kirchweiler.',
    intro:      "L'Eifel volcanique offre un programme d'événements varié tout au long de l'année – des événements de sport automobile internationaux au Nürburgring aux fêtes populaires traditionnelles et concerts en plein air.",
    disclaimer: "Dates et informations sans garantie. Veuillez vérifier les dates actuelles auprès de l'organisateur avant votre visite.",
    categories: [
      'Nürburgring – Motorsport & Festivals',
      "Eifel Volcanique – Highlights Régionaux",
      'Highlights Saisonniers',
    ],
    moreInfo:   'Plus d\'infos ↗',
    infoBoxTitle: "Plus d'événements :",
    ctaTitle:   'Planifier votre séjour autour d\'un événement ?',
    ctaBtn:     'Vérifier la disponibilité',
    breadcrumb: 'Specials',
  },
}

const events = [
  // Kategorie 1: Nürburgring
  {
    cat: 0,
    badge: 'MOTORSPORT',
    name: 'ADAC RAVENOL 24h Nürburgring',
    termin: 'Mai (jährlich) · 2026: 14.–17. Mai',
    entfernung: 'ca. 55 km',
    beschreibung: 'Das legendärste 24-Stunden-Rennen Europas. Über 100 Fahrzeuge kämpfen durch die Grüne Hölle. Zehntausende Fans campieren entlang der Strecke. Eines der größten Motorsport-Spektakel weltweit.',
    link: 'https://nuerburgring.de',
  },
  {
    cat: 0,
    badge: 'FESTIVAL',
    name: 'Rock am Ring',
    termin: 'Anfang Juni (jährlich) · 2026: 5.–7. Juni',
    entfernung: 'ca. 55 km',
    beschreibung: 'Eines der größten Open-Air-Rockfestivals Deutschlands mit über 90.000 Besuchern. Headliner 2026: Linkin Park. Unvergessliche Atmosphäre in der Eifellandschaft.',
    link: 'https://www.rock-am-ring.com',
  },
  {
    cat: 0,
    badge: 'MOTORSPORT',
    name: 'Int. ADAC Truck-Grand-Prix',
    termin: 'Juli (jährlich) · 2026: 10.–12. Juli – 40. Jubiläum',
    entfernung: 'ca. 55 km',
    beschreibung: 'Motorsport, Musik-Festival, Industriemesse und Trucker-Camp in einem. Die Eifel wird zum Zentrum des Trucker-Lebens. 40. Jubiläum 2026.',
    link: 'https://www.adac.de/veranstaltungen/truck-grand-prix/',
  },
  {
    cat: 0,
    badge: 'OLDTIMER',
    name: 'Nürburgring Classic',
    termin: 'Juni (jährlich) · 2026: 12.–14. Juni',
    entfernung: 'ca. 55 km',
    beschreibung: 'Historische Fahrzeuge aus allen Epochen. Traumautos für Liebhaber klassischer Automobile.',
    link: 'https://nuerburgring.de',
  },
  {
    cat: 0,
    badge: 'OLDTIMER',
    name: 'BELMOT Oldtimer Grand Prix',
    termin: 'August (jährlich) · 2026: 7.–9. August',
    entfernung: 'ca. 55 km',
    beschreibung: 'Einer der renommiertesten Oldtimer-Rennsport-Events Europas.',
    link: 'https://nuerburgring.de',
  },
  {
    cat: 0,
    badge: 'SPORT',
    name: 'Rad am Ring',
    termin: 'Juli (jährlich) · 2026: 24.–26. Juli',
    entfernung: 'ca. 55 km',
    beschreibung: 'Tausende Radsportler auf der legendären Nordschleife. Auch außerhalb des Events für Jedermann befahrbar.',
    link: 'https://nuerburgring.de',
  },
  // Kategorie 2: Regionale Highlights
  {
    cat: 1,
    badge: 'RALLYE',
    name: 'Eifel Rallye Festival Daun',
    termin: 'Juli (jährlich) · 2026: 23.–25. Juli',
    entfernung: 'ca. 6 km – direkt vor der Haustür!',
    beschreibung: 'Das größte rollende Rallye-Museum Europas. Über 160 historische Rallyefahrzeuge aus 5 Jahrzehnten, legendäre Gruppe-B Fahrzeuge, ehemalige Weltmeister. Zehntausende Fans aus ganz Europa. Organisiert vom MSC Daun e.V. im ADAC.',
    link: 'https://eifel-rallye-festival.de',
  },
  {
    cat: 1,
    badge: 'VOLKSFEST',
    name: 'Dauner Laurentiuskirmes',
    termin: 'August (jährlich) · 2026: 8.–12. August',
    entfernung: 'ca. 6 km',
    beschreibung: 'Das größte Volksfest der Vulkaneifel. Fünf Tage lang verwandelt sich Daun in ein riesiges Festgelände mit zwei Festplätzen, großem Feuerwerk am Samstag, Lasershow und dem traditionellen Laurentiusmarkt am Mittwoch.',
    link: 'https://stadt-daun.de',
  },
  {
    cat: 1,
    badge: 'STADTFEST',
    name: 'Dauner Bällerennen & „Daun spielt"',
    termin: 'Juni (jährlich) · 2026: 21. Juni',
    entfernung: 'ca. 6 km',
    beschreibung: 'Verkaufsoffener Sonntag mit dem einzigartigen Dauner Bällerennen durch die gesamte Innenstadt – ein buntes Spektakel für die ganze Familie.',
    link: 'https://www.gvvdaun.de',
  },
  {
    cat: 1,
    badge: 'KONZERT',
    name: 'Klassik auf dem Vulkan',
    termin: 'Juni/Juli (jährlich) · Open-Air-Konzerte',
    entfernung: 'ca. 6–8 km',
    beschreibung: 'Konzerte auf einer Freiluftbühne am Gemündener Maar oder Burgberg Daun. 2026 u.a. Cat Ballou, Max Mutzke, Bigband der Bundeswehr. Einmalige Kulisse zwischen Maar und Vulkaneifel.',
    link: 'https://www.gesundland-vulkaneifel.de',
  },
  // Kategorie 3: Saisonale Highlights
  {
    cat: 2,
    badge: 'WEIHNACHT',
    name: 'Weihnachtsmärkte Eifel',
    termin: 'November–Dezember (jährlich)',
    entfernung: '6–25 km',
    beschreibung: 'Stimmungsvolle Weihnachtsmärkte in historischer Fachwerkkulisse. Daun, Gerolstein, Manderscheid und weitere Orte der Region.',
    link: 'https://tourismus.eifel.info',
  },
  {
    cat: 2,
    badge: 'MITTELALTER',
    name: 'Burg Satzvey – Märkte & Events',
    termin: 'Ganzjährig verschiedene Events',
    entfernung: 'ca. 45 km',
    beschreibung: 'Historische Burg mit mittelalterlichen Märkten, Hexennacht (30. April) und Ostermarkt. Einzigartige Kulisse.',
    link: 'https://www.burg-satzvey.de',
  },
]

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const titles = {
    de: 'Events & Veranstaltungen Vulkaneifel – Highlights im Jahreskalender',
    en: 'Events & Festivals in the Vulkan Eifel – Annual Highlights',
    nl: 'Events & Festivals Vulkaan Eifel – Jaarlijkse Hoogtepunten',
    fr: 'Événements & Festivals Eifel Volcanique – Temps Forts Annuels',
  }
  const descs = {
    de: 'Die besten Veranstaltungen rund um die Vulkaneifel: Nürburgring Events, Eifel Rallye Festival, Laurentiuskirmes Daun, Konzerte und mehr – mit Terminen und Links.',
    en: 'The best events in the Vulkan Eifel region: Nürburgring events, Eifel Rallye Festival, folk festivals and concerts – with dates and links.',
    nl: 'De beste evenementen in de Vulkaan Eifel: Nürburgring events, Eifel Rallye Festival, volksfesten en concerten – met data en links.',
    fr: "Les meilleurs événements de l'Eifel volcanique : Nürburgring, Eifel Rallye Festival, fêtes populaires et concerts – avec dates et liens.",
  }
  const l = locale as keyof typeof titles
  return generateSeoMetadata('/specials/events', locale, titles[l] || titles.de, descs[l] || descs.de)
}

export function generateStaticParams() {
  return [
    { locale: 'de' },
    { locale: 'en' },
    { locale: 'nl' },
    { locale: 'fr' },
  ]
}

const badgeStyle: React.CSSProperties = {
  border: '1px solid #2D5A35',
  color: '#2D5A35',
  fontSize: '0.65rem',
  padding: '0.15rem 0.45rem',
  borderRadius: '3px',
  fontWeight: 700,
  letterSpacing: '0.06em',
  whiteSpace: 'nowrap',
}

const distanceStyle: React.CSSProperties = {
  color: '#999',
  fontSize: '0.75rem',
  whiteSpace: 'nowrap',
}

const linkBtnStyle: React.CSSProperties = {
  display: 'inline-block',
  border: '1px solid #1A1A1A',
  padding: '0.3rem 0.8rem',
  borderRadius: '4px',
  fontSize: '0.78rem',
  color: '#1A1A1A',
  textDecoration: 'none',
}

export default async function EventsPage() {
  const locale = await getLocale()
  const ui = uiTranslations[locale as keyof typeof uiTranslations] ?? uiTranslations.de

  return (
    <div className="max-w-5xl mx-auto px-4 py-16">

      {/* Breadcrumb */}
      <p style={{ fontSize: '0.78rem', color: '#999', marginBottom: '1rem' }}>
        <a href="/specials" style={{ color: '#999', textDecoration: 'none' }}>{ui.breadcrumb}</a>
        {' → '}
        {ui.title}
      </p>

      {/* Hero */}
      <div style={{
        background: 'linear-gradient(135deg, #1C3A22 0%, #2D5A35 100%)',
        borderRadius: '10px',
        padding: '2.5rem 2rem',
        marginBottom: '2.5rem',
        color: 'white',
      }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '0.75rem', fontFamily: 'Georgia, serif' }}>
          {ui.title}
        </h1>
        <p style={{ color: '#c8e6c9', maxWidth: '600px', lineHeight: 1.6, fontSize: '1.05rem' }}>
          {ui.subtitle}
        </p>
      </div>

      {/* Einleitung */}
      <p className="text-stone-600 leading-relaxed mb-2 max-w-3xl">
        {ui.intro}
      </p>
      <p style={{ fontSize: '0.72rem', color: '#aaa', marginBottom: '3rem', maxWidth: '600px', lineHeight: 1.5 }}>
        {ui.disclaimer}
      </p>

      {/* Kategorien */}
      {[0, 1, 2].map((catIndex) => {
        const catEvents = events.filter(e => e.cat === catIndex)
        return (
          <section key={catIndex} style={{ marginBottom: '3rem' }}>
            <h2 style={{
              fontSize: '1.1rem',
              fontWeight: 700,
              color: '#1C3A22',
              borderBottom: '2px solid #2D5A35',
              paddingBottom: '0.5rem',
              marginBottom: '1.25rem',
            }}>
              {ui.categories[catIndex]}
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {catEvents.map((ev) => (
                <div key={ev.name} className="card border border-stone-100 hover:border-stone-300 transition-colors flex flex-col">
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '0.75rem', marginBottom: '0.4rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                      <span style={badgeStyle}>{ev.badge}</span>
                      <h3 className="font-bold text-green-900" style={{ fontSize: '0.95rem' }}>{ev.name}</h3>
                    </div>
                    <span style={distanceStyle}>{ev.entfernung}</span>
                  </div>
                  <p style={{ fontSize: '0.75rem', color: '#888', marginBottom: '0.5rem' }}>{ev.termin}</p>
                  <p className="text-stone-600 text-sm leading-relaxed" style={{ flex: 1, marginBottom: '0.75rem' }}>
                    {ev.beschreibung}
                  </p>
                  <a href={ev.link} target="_blank" rel="noopener noreferrer" style={linkBtnStyle}>
                    {ui.moreInfo}
                  </a>
                </div>
              ))}
            </div>
          </section>
        )
      })}

      {/* Info-Box */}
      <div style={{
        background: '#F9F8F6',
        border: '1px solid #E5E5E5',
        borderRadius: '6px',
        padding: '1rem 1.25rem',
        marginBottom: '3rem',
        fontSize: '0.83rem',
        color: '#666',
      }}>
        <strong>{ui.infoBoxTitle}</strong>
        <ul style={{ marginTop: '0.5rem', lineHeight: 2 }}>
          <li><a href="https://www.gesundland-vulkaneifel.de/events" target="_blank" rel="noopener noreferrer" style={{ color: '#2D5A35' }}>gesundland-vulkaneifel.de/events</a></li>
          <li><a href="https://tourismus.eifel.info" target="_blank" rel="noopener noreferrer" style={{ color: '#2D5A35' }}>tourismus.eifel.info</a></li>
          <li><a href="https://nuerburgring.de/events" target="_blank" rel="noopener noreferrer" style={{ color: '#2D5A35' }}>nuerburgring.de/events</a></li>
        </ul>
      </div>

      {/* CTA */}
      <div style={{ borderTop: '1px solid #E5E5E5', paddingTop: '2rem', textAlign: 'center' }}>
        <p className="text-stone-600 mb-4">{ui.ctaTitle}</p>
        <Link href="/buchung" className="btn-primary">{ui.ctaBtn}</Link>
      </div>
    </div>
  )
}
