import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Ausflugsziele Vulkaneifel – Wildpark, Kino, Berlingen, Wasserfall & mehr',
  description: 'Alle Freizeitangebote im Umkreis von Kirchweiler: Eifel Adventures Berlingen, Sommerrodelbahn, Wildpark Daun, Dreimühlen Wasserfall, Kinopalast, Laurentiusbad und mehr.',
  alternates: { canonical: 'https://ferienwohnung-in-der-vulkaneifel.de/guide/ausflugsziele' },
}

const kategorien = [
  {
    titel: 'Erlebnis & Abenteuer',
    eintraege: [
      {
        name: 'Eifel Adventures Berlingen',
        entfernung: 'ca. 12 km',
        badge: 'Abenteuer',
        text: 'Ziplining, Adventure-Minigolf, Fußball-Billard und Boccia auf einem weitläufigen Outdoor-Gelände. Baumhaus-Übernachtungen sind buchbar. Ideal für Gruppen, Familien und Teamerlebnisse.',
      },
      {
        name: 'Sommerrodelbahn Daun',
        entfernung: 'ca. 6 km',
        badge: 'Familie',
        text: '800 Meter lange Abfahrt am Wild- & Erlebnispark Daun. Einer- und Zweierbob, das Tempo wählen Sie selbst. Geöffnet in der Saison April bis Oktober – ein schneller Spaß für alle Altersgruppen.',
      },
      {
        name: 'Wild- & Erlebnispark Daun',
        entfernung: 'ca. 6 km',
        badge: 'Familie',
        text: 'Autowanderroute durch den Park, Berberaffenschlucht, Greifvogel-Flugshows, Abenteuerspielplatz und Streichelzoo. Lamas, Mufflons, Wildyaks und Wildschweine leben hier auf großem Gelände. Die Sommerrodelbahn liegt direkt davor.',
      },
    ],
  },
  {
    titel: 'Natur & Geologie',
    eintraege: [
      {
        name: 'Dreimühlen Wasserfall bei Üxheim-Ahütte',
        entfernung: 'ca. 18 km',
        badge: 'Naturdenkmal',
        text: 'Der einzige „wachsende" Wasserfall Deutschlands. Er entsteht durch Kalkablagerungen und wächst seit 1932 nachweislich. Kostenlos zugänglich, schöner Spazierweg entlang des Ahbachs. Ein stilles, beeindruckendes Naturdenkmal.',
      },
      {
        name: 'Wallender Born / Brubbel Wallenborn',
        entfernung: 'ca. 15 km',
        badge: 'Naturphänomen',
        text: 'Der einzige periodisch sprudelnde Kaltwassergeysir Deutschlands. Er sprudelt unregelmäßig alle paar Stunden und ist kostenlos zugänglich. Kurzer Spaziergang vom Parkplatz – ein Naturphänomen, das es so nur einmal gibt.',
      },
      {
        name: 'Buchenlochhöhle Gerolstein',
        entfernung: 'ca. 18 km',
        badge: 'Höhle',
        text: 'Eiszeithöhle mit Fundstücken aus der Altsteinzeit, Teil der Gerolsteiner Dolomiten. Geführte Touren ganzjährig möglich. Ein eindrucksvolles geologisches Zeugnis der Eifelgeschichte.',
      },
      {
        name: 'Strohner Lavabombe',
        entfernung: 'ca. 12 km',
        badge: 'Geologie',
        text: 'Gigantischer Lavabrocken aus dem Vulkanismus der Eifel – Wahrzeichen des Vulkandorfes Strohn. Kostenlos und für eine kurze Besichtigung gut geeignet. Eindrucksvoller Hinweis auf die geologische Vergangenheit der Region.',
      },
      {
        name: 'Observatorium Hoher List Schalkenmehren',
        entfernung: 'ca. 5 km',
        badge: 'Astronomie',
        text: 'Ehemaliges astronomisches Observatorium der Universität Bonn auf 551 m Höhe. Einer der dunkelsten Himmel Deutschlands – ideal für Sternbeobachtung. Die Kuppellandschaft ist auch tagsüber sehenswert.',
      },
      {
        name: 'Gerolsteiner Dolomiten',
        entfernung: 'ca. 20 km',
        badge: 'Felsen',
        text: 'Beeindruckende Kalksteinfelsen mitten in der Eifel mit gut ausgeschilderten Wanderwegen und Aussichtspunkten. Hunde sind auf den Hauptwegen erlaubt. Kurze Runden ab dem Stadtzentrum Gerolstein möglich.',
      },
    ],
  },
  {
    titel: 'Kultur & Museum',
    eintraege: [
      {
        name: 'Eifel-Vulkanmuseum Daun',
        entfernung: 'ca. 6 km',
        badge: 'Museum',
        text: 'Interaktives Museum zur Entstehung der Vulkanlandschaft, Teil des Natur- und Geoparks Vulkaneifel. Kinder- und familienfreundlich aufbereitet – ideal für Regentage und wissbegierige Besucher.',
      },
      {
        name: 'Adler- & Wolfspark Kasselburg Pelm',
        entfernung: 'ca. 20 km',
        badge: 'Tiererlebnis',
        text: 'Greifvogelshows und Wolfsfütterung auf 20 ha rund um eine historische Burg aus dem 12. Jahrhundert. Täglich Flugvorführungen in der Saison. Europäische Wölfe in weitläufigem Gehege – ein Highlight für alle Altersgruppen.',
      },
      {
        name: 'Maarmuseum Manderscheid',
        entfernung: 'ca. 18 km',
        badge: 'Museum',
        text: 'Museum über die Entstehung der Maare – gut in Kombination mit dem Manderscheider Burgenstieg. Verständliche Aufbereitung der Vulkangeologie für alle Generationen.',
      },
      {
        name: 'Heimwebermuseum Schalkenmehren',
        entfernung: 'ca. 5 km',
        badge: 'Heimatgeschichte',
        text: 'Einblick in das traditionelle Handwerk der Region und die Kulturgeschichte der Eifel. Kleiner Eintritt, ruhig gelegen – ein authentisches Stück Regionalgeschichte.',
      },
      {
        name: 'Manderscheid Burgruinen',
        entfernung: 'ca. 20 km',
        badge: 'Burg',
        text: 'Zwei Burgruinen hoch über dem Liesertal – kostenlos zugänglich, Traumausblick garantiert. In Kombination mit dem Manderscheider Burgenstieg (6,6 km) ein schöner Halbtagesausflug.',
      },
      {
        name: 'Kinopalast Vulkaneifel Daun',
        entfernung: 'ca. 6 km',
        badge: 'Unterhaltung',
        text: 'Modernes Kino in Daun mit aktuellen Filmen. Ideal für Regentage, Abendprogramm oder wenn man einfach einen entspannten Kinoabend einplanen möchte.',
      },
    ],
  },
  {
    titel: 'Wellness & Baden',
    eintraege: [
      {
        name: 'Laurentiusbad Daun',
        entfernung: 'ca. 6 km',
        badge: 'Hallenbad',
        text: 'Hallenbad mit 28 °C Wassertemperatur, Schwimmer- und Nichtschwimmerbereich. Barrierefrei zugänglich, ganzjährig geöffnet. Ideal für Regentage, Erholung oder sportliches Schwimmen.',
      },
      {
        name: 'Kurpark Daun',
        entfernung: 'ca. 6 km',
        badge: 'Spaziergang',
        text: 'Weitläufige Grünanlage im Zentrum Dauns mit ruhigen Spazierwegen, Brunnen und Bänken. Wasserspielplatz für Kinder vorhanden. Kostenlos zugänglich, ganzjährig nutzbar.',
      },
    ],
  },
  {
    titel: 'Radfahren & Mountainbike',
    eintraege: [
      {
        name: 'Maare-Mosel-Radweg',
        entfernung: 'Start Daun ca. 6 km',
        badge: 'Radweg',
        text: '51 km auf ehemaliger Bahntrasse von Daun bis Traben-Trarbach an der Mosel. Steigungsfrei, daher ideal für Familien und E-Bikes. Eine der schönsten Radrouten der Eifel.',
      },
      {
        name: 'Mountainbike El Dorado Vulkaneifel',
        entfernung: 'Region',
        badge: 'MTB',
        text: 'Über 750 km Strecken in allen Schwierigkeitsgraden, 13 ha Technik-Parcours. Guided Tours buchbar. Die Vulkaneifel ist eine der besten MTB-Regionen Westdeutschlands.',
      },
    ],
  },
  {
    titel: 'Winter & Wintersport',
    eintraege: [
      {
        name: 'Mäuseberg Ski-Hang Daun',
        entfernung: 'ca. 6 km',
        badge: 'Wintersport',
        text: 'Kleines Skigebiet bei Daun, ideal für Einsteiger und Familien. Nur bei ausreichend Schneefall geöffnet – in schneereichen Wintern ein schöner Kurzausflug direkt vor der Tür.',
      },
    ],
  },
  {
    titel: 'Höhlen & Unterirdisches',
    eintraege: [
      {
        name: 'Buchenlochhöhle Gerolstein',
        entfernung: 'ca. 18 km',
        badge: 'Höhle · Kostenlos',
        text: 'Karsthöhle in den Gerolsteiner Dolomiten, von Steinzeitmenschen vor rund 30.000 Jahren bewohnt. Frei zugänglich, Teil des Felsenpfads. Taschenlampe empfehlenswert – enger, aber eindrucksvoller Eingang.',
      },
      {
        name: 'Birresborner Eishöhlen',
        entfernung: 'ca. 30 km',
        badge: 'Höhle · Geführt',
        text: 'Vier Lavahöhlen im Vulkanpark Birresborn, entstanden durch erkaltende Lavaströme vor ca. 200.000 Jahren. Im Inneren herrschen ganzjährig Temperaturen um 0 °C – daher der Name. Geführte Touren buchbar, Schutzkleidung wird gestellt.',
      },
      {
        name: 'Mühlsteinhöhlen Mayen',
        entfernung: 'ca. 45 km',
        badge: 'Höhle · Museum',
        text: 'Unterirdisches Labyrinth aus mittelalterlichen Mühlsteinbrüchen im Lavakeller unter Mayen. Geführte Touren zeigen, wie seit der Römerzeit Basaltlava abgebaut wurde. Einmaliges Kulturdenkmal in situ.',
      },
    ],
  },
  {
    titel: 'Wasserfälle & Quellen',
    eintraege: [
      {
        name: 'Dreimühlen Wasserfall bei Üxheim-Ahütte',
        entfernung: 'ca. 18 km',
        badge: 'Naturdenkmal · Kostenlos',
        text: 'Der einzige „wachsende" Wasserfall Deutschlands. Er entsteht durch Kalkablagerungen (Kalktuff) und wächst seit 1932 nachweislich. Kostenlos zugänglich, schöner Spazierweg entlang des Ahbachs. Ein stilles, beeindruckendes Naturdenkmal.',
      },
      {
        name: 'Wallender Born / Brubbel Wallenborn',
        entfernung: 'ca. 15 km',
        badge: 'Naturphänomen · Kostenlos',
        text: 'Der einzige periodisch sprudelnde Kaltwassergeysir Deutschlands. Er sprudelt unregelmäßig alle paar Stunden und ist kostenlos zugänglich. Kurzer Spaziergang vom Parkplatz – ein Naturphänomen, das es so nur einmal gibt.',
      },
      {
        name: 'Helenenquelle im Kurpark Gerolstein',
        entfernung: 'ca. 18 km',
        badge: 'Quelle · Kostenlos',
        text: 'Natürliche Mineralwasserquelle direkt im Gerolsteiner Kurpark, kostenlos zugänglich. Das kohlensäurereiche Wasser kann direkt aus dem Quellstein verkostet werden – ein kleines, aber besonderes Erlebnis.',
      },
    ],
  },
  {
    titel: 'Flüsse & Bäche',
    eintraege: [
      {
        name: 'Kyll – Fluss durch die Eifel',
        entfernung: 'ab Gerolstein ca. 18 km',
        badge: 'Natur · Radweg',
        text: 'Die Kyll fließt von der Schneifel durch die Vulkaneifel bis zur Mosel. In Gerolstein gibt es Spazierwege direkt am Ufer, im Sommer lassen sich die Füße kühlen. Der Kyll-Radweg verläuft auf teils ehemaligen Bahntrassen durch das Kylltal.',
      },
      {
        name: 'Lieser – Manderscheider Tal',
        entfernung: 'ca. 20 km',
        badge: 'Wandern',
        text: 'Die Lieser schlängelt sich durch das romantische Liesertal bei Manderscheid. Der Lieserpfad (66 km, Premiumweg) führt direkt am Ufer entlang, vorbei an den Burgruinen Manderscheid. Kurze Abschnitte ab Manderscheid gut begehbar.',
      },
      {
        name: 'Ahr – Rotweinwanderweg',
        entfernung: 'ca. 60 km',
        badge: 'Wein · Wandern',
        text: 'Die Ahr ist Deutschlands nördlichstes Weinanbaugebiet. Der Rotweinwanderweg führt durch enge, steile Weinberglagen über dem Fluss. Bad Neuenahr-Ahrweiler bietet Weinkultur, Thermal-Wellness und eine sehenswerte Altstadt.',
      },
    ],
  },
  {
    titel: 'Gerolstein – Erlebnisse & Besichtigungen',
    eintraege: [
      {
        name: 'Gerolsteiner Brunnen Erlebniswelt',
        entfernung: 'ca. 18 km',
        badge: 'Neu 2026 · Kostenlos',
        text: 'Neue interaktive Erlebniswelt bei Deutschlands größtem Mineralbrunnen. Führungen durch die Abfüllanlagen mit Gratisverkostung. Voranmeldung erforderlich (besucherzentrum@gerolsteiner.com). Führungen Mo–Do: 09:30 und 11:30 Uhr.',
      },
      {
        name: 'Gerolsteiner Dolomiten & Felsenpfad',
        entfernung: 'ca. 18 km',
        badge: 'Wanderung · ca. 8 km',
        text: 'Beeindruckendes Felsenmassiv direkt über der Stadt Gerolstein. Der Felsenpfad (ca. 8 km Rundweg) führt über die Munterley mit spektakulärem Blick ins Kylltal, die Löwenburg-Ruine und die Buchenlochhöhle.',
      },
      {
        name: 'Naturkundemuseum Gerolstein',
        entfernung: 'ca. 18 km',
        badge: 'Museum',
        text: 'Museum zur Naturgeschichte der Vulkaneifel – Geologie, Fossilien und Fauna der Region. Verständlich aufbereitet für alle Altersgruppen. Ideal für Regentage und naturinteressierte Besucher.',
      },
      {
        name: 'Wassermühle Birgel',
        entfernung: 'ca. 20 km',
        badge: 'Museum · Hofladen',
        text: 'Das größte Mühlen-Erlebniszentrum Europas liegt in Birgel. Vier Mühlen in Betrieb: Senf-, Getreide-, Öl- und Sägemühle. Führungen buchbar, Hofladen mit regionalen Produkten. Für alle Altersgruppen ein Erlebnis.',
      },
    ],
  },
  {
    titel: 'Tagesausflüge in der Region',
    eintraege: [
      {
        name: 'Nürburgring',
        entfernung: 'ca. 55 km',
        badge: 'Motorsport',
        text: 'Die legendäre Nordschleife – Touristenfahrten, Erlebniswelt ring°werk und Motorsport-Events. Ein unvergesslicher Ausflug für Motorradfahrer und Autofans.',
      },
      {
        name: 'Cochem an der Mosel',
        entfernung: 'ca. 45 km',
        badge: 'Mosel',
        text: 'Reichsburg, mittelalterliche Altstadt und Weinkultur direkt an der Mosel. Einer der schönsten und bekanntesten Orte an der Mittelmosel.',
      },
      {
        name: 'Trier',
        entfernung: 'ca. 70 km',
        badge: 'UNESCO',
        text: 'Deutschlands älteste Stadt mit UNESCO-Weltkulturerbe: Porta Nigra, Kaiserthermen und Karl-Marx-Haus. Ideal für einen ganzen Kulturtag.',
      },
    ],
  },
]

export default function AusflugszielePage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: '#1A1A1A', color: 'white', padding: '4rem 1.5rem' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <nav style={{ fontSize: '0.78rem', color: '#666', marginBottom: '2rem' }}>
            <Link href="/guide" style={{ color: '#888', textDecoration: 'none' }}>Reiseführer</Link>
            {' › '}
            <span>Ausflugsziele</span>
          </nav>
          <h1 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 'normal', marginBottom: '1rem', lineHeight: 1.2 }}>
            Ausflugsziele im Umkreis
          </h1>
          <p style={{ color: '#AAA', fontSize: '1.05rem', lineHeight: 1.7, maxWidth: '560px' }}>
            Freizeitangebote, Natur, Kultur und Erlebnis rund um Kirchweiler –
            von 5 km bis 70 km Entfernung.
          </p>
        </div>
      </section>

      {/* Kategorien */}
      <div style={{ maxWidth: '960px', margin: '0 auto', padding: '4rem 1.5rem' }}>
        {kategorien.map((kat) => (
          <section key={kat.titel} style={{ marginBottom: '4rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2rem' }}>
              <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '1.4rem', fontWeight: 'normal', color: '#1A1A1A', whiteSpace: 'nowrap' }}>
                {kat.titel}
              </h2>
              <div style={{ flex: 1, height: '1px', background: '#E5E5E5' }} />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {kat.eintraege.map((e) => (
                <div key={e.name} style={{ background: 'white', border: '1px solid #E5E5E5', padding: '1.75rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem', gap: '1rem' }}>
                    <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '1rem', fontWeight: 'normal', color: '#1A1A1A', lineHeight: 1.3 }}>
                      {e.name}
                    </h3>
                    <span style={{ fontSize: '0.72rem', color: '#999', whiteSpace: 'nowrap', flexShrink: 0 }}>
                      {e.entfernung}
                    </span>
                  </div>
                  <p style={{ color: '#555', lineHeight: 1.7, fontSize: '0.88rem', marginBottom: '1rem' }}>
                    {e.text}
                  </p>
                  <span style={{ fontSize: '0.68rem', letterSpacing: '0.08em', textTransform: 'uppercase', border: '1px solid #DDD', color: '#888', padding: '0.2rem 0.6rem' }}>
                    {e.badge}
                  </span>
                </div>
              ))}
            </div>
          </section>
        ))}

        <div style={{ borderTop: '1px solid #E5E5E5', paddingTop: '2.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/buchung" className="btn-primary">Urlaub planen & buchen</Link>
          <Link href="/guide/schlechtwetter" className="btn-secondary">Schlechtwetter-Tipps</Link>
        </div>
      </div>
    </>
  )
}
