'use client'
import { useState } from 'react'

const faqs = [
  {
    frage: 'Wo liegt die Ferienwohnung MaarZeit genau?',
    antwort: 'Die Ferienwohnung liegt in Kirchweiler, Am Bruchborn 6, im Kreis Daun in der Vulkaneifel (Rheinland-Pfalz). Von Kirchweiler sind die Dauner Maare in ca. 6 Minuten erreichbar, die Kreisstadt Daun liegt nur 6 km entfernt.'
  },
  {
    frage: 'Wie groß ist die Ferienwohnung und für wie viele Personen ist sie geeignet?',
    antwort: 'Die Ferienwohnung ist 35 qm groß und für bis zu 3 Personen geeignet. Sie verfügt über ein Doppelbett und ein Schlafsofa (als Klappsofa für eine dritte Person nutzbar). Neubau 2023.'
  },
  {
    frage: 'Sind Hunde in der Ferienwohnung erlaubt?',
    antwort: 'Ja, Hunde sind herzlich willkommen. Die Vulkaneifel bietet zahlreiche hundefreundliche Wanderwege, Wälder und Ausflugsziele – darunter der Freilinger See mit ausgewiesenem Hundestrand (ca. 45 km).'
  },
  {
    frage: 'Was kostet die Ferienwohnung pro Nacht?',
    antwort: 'Die Preise staffeln sich nach Aufenthaltsdauer: 1 Nacht 125 €, 2–3 Nächte 95 € pro Nacht, 4–7 Nächte 85 € pro Nacht, ab 7 Nächten 75 € pro Nacht. Dazu kommt eine Endreinigungspauschale von 20 € pro Buchung. Direkte Buchung ohne Plattformgebühren.'
  },
  {
    frage: 'Wie weit sind die Dauner Maare von der Ferienwohnung entfernt?',
    antwort: 'Die Dauner Maare – Gemündener Maar, Schalkenmehrener Maar und Weinfelder Maar – sind nur ca. 5–8 km von der Ferienwohnung entfernt und in wenigen Minuten per Auto erreichbar. Ein echter Vorteil unserer Lage in Kirchweiler.'
  },
  {
    frage: 'Gibt es einen eigenen Parkplatz?',
    antwort: 'Ja, ein eigener Stellplatz direkt an der Unterkunft ist kostenfrei inklusive. Ideal für Motorradfahrer, die ihre Maschine sicher abstellen möchten, und für Gäste mit viel Gepäck.'
  },
  {
    frage: 'Ist die Ferienwohnung für Motorradfahrer geeignet?',
    antwort: 'Absolut. Die Vulkaneifel zählt zu den schönsten Motorradregionen Deutschlands. Eigener Parkplatz, kurvige Eifelstraßen direkt vor der Tür, Nürburgring ca. 55 km entfernt und Mosel ca. 45 km – perfekte Ausgangslage für Tagestouren.'
  },
  {
    frage: 'Wie funktioniert die Buchung?',
    antwort: 'Reisezeitraum im Kalender wählen, Daten eingeben und 30 % Anzahlung sicher via Stripe bezahlen (Kreditkarte, SEPA oder Apple/Google Pay). Die Restzahlung (70 %) ist bei Anreise fällig. Buchung direkt beim Gastgeber – ohne Plattformgebühren.'
  },
  {
    frage: 'Was sind die besten Ausflugsziele in der Vulkaneifel?',
    antwort: 'Die Highlights rund um Kirchweiler: Dauner Maare (6 km), Wild- & Erlebnispark Daun (6 km), Eifel-Vulkanmuseum (6 km), Adler- & Wolfspark Kasselburg (20 km), Gerolsteiner Brunnen Erlebniswelt (18 km), Dreimühlen Wasserfall (18 km), Manderscheider Burgen (18 km) und der Nürburgring (55 km).'
  },
  {
    frage: 'Welche Wanderwege gibt es in der Nähe?',
    antwort: 'Direkt ab Kirchweiler zugänglich: Rundwanderung Dauner Maare, Lieserpfad (51 km Fernwanderweg), Eifelsteig, Manderscheider Burgenstieg und diverse HeimatSpuren-Rundwege. Für alle Fitnesslevel geeignet.'
  },
  {
    frage: 'Hat die Ferienwohnung eine Küche?',
    antwort: 'Ja, die Ferienwohnung verfügt über eine vollständige Küchenzeile mit Spülmaschine, Kühlschrank und Kochmöglichkeit – ideal für Selbstversorger und längere Aufenthalte. Dazu Terrasse mit Gartenmöbeln und Feuerschale im Garten.'
  },
  {
    frage: 'Wann ist Check-in und Check-out?',
    antwort: 'Check-in ist ab 15:00 Uhr, Check-out bis 11:00 Uhr. Bei besonderen Wünschen sprechen Sie uns gerne an – wir versuchen flexibel zu sein.'
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section style={{ padding: '5rem 2rem', background: 'white' }}>
      <div style={{ maxWidth: 860, margin: '0 auto' }}>
        <span style={{ width: 40, height: 1, background: '#1A1A1A', display: 'block', marginBottom: '2rem' }} />
        <h2 style={{
          fontFamily: 'Georgia, serif',
          fontSize: 'clamp(1.4rem, 2.5vw, 2rem)',
          fontWeight: 'normal',
          marginBottom: '0.5rem',
          color: '#1A1A1A'
        }}>
          Häufige Fragen
        </h2>
        <p style={{ color: '#666', fontSize: '0.95rem', marginBottom: '2.5rem' }}>
          Alles Wichtige zur Ferienwohnung in der Vulkaneifel auf einen Blick.
        </p>

        {/* Schema.org FAQ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": faqs.map(f => ({
                "@type": "Question",
                "name": f.frage,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": f.antwort
                }
              }))
            })
          }}
        />

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {faqs.map((faq, i) => (
            <div
              key={i}
              style={{
                borderBottom: '1px solid #E5E5E5',
              }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: '100%',
                  textAlign: 'left',
                  background: 'none',
                  border: 'none',
                  padding: '1.25rem 0',
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '1rem',
                  minHeight: 44,
                }}
              >
                <span style={{
                  fontFamily: 'Georgia, serif',
                  fontSize: '1rem',
                  color: '#1A1A1A',
                  fontWeight: open === i ? 600 : 400,
                  lineHeight: 1.4,
                }}>
                  {faq.frage}
                </span>
                <span style={{
                  fontSize: '1.25rem',
                  color: '#1A1A1A',
                  flexShrink: 0,
                  fontWeight: 300,
                  transition: 'transform 0.2s',
                  transform: open === i ? 'rotate(45deg)' : 'rotate(0deg)',
                  display: 'inline-block',
                  lineHeight: 1,
                }}>
                  +
                </span>
              </button>

              {open === i && (
                <div style={{
                  paddingBottom: '1.25rem',
                  color: '#555',
                  fontSize: '0.95rem',
                  lineHeight: 1.75,
                  maxWidth: 720,
                }}>
                  {faq.antwort}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
