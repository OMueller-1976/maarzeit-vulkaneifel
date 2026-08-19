import { supabase } from '@/lib/supabase'
import { notFound } from 'next/navigation'

export const dynamic = 'force-dynamic'
export const metadata = { robots: 'noindex' }

export default async function AdminPage({
  searchParams,
}: {
  searchParams: Promise<{ key?: string }>
}) {
  const { key } = await searchParams
  const ADMIN_KEY = process.env.ADMIN_KEY || 'maarzeit2025'
  if (key !== ADMIN_KEY) return notFound()

  const { data: bookings } = await supabase
    .from('bookings')
    .select('*')
    .order('checkin', { ascending: true })

  const today = new Date().toISOString().split('T')[0]
  const { data: upcomingWithGuests } = await supabase
    .from('bookings')
    .select(`
      id, guest_name, checkin, checkout,
      guest_registrations (submitted_at, last_name, first_name)
    `)
    .in('status', ['deposit_paid', 'fully_paid'])
    .gte('checkin', today)
    .order('checkin', { ascending: true })

  const statusColor: Record<string, string> = {
    pending:      '#999',
    deposit_paid: '#2D5A35',
    fully_paid:   '#1A1A1A',
    cancelled:    '#C00',
  }

  return (
    <section className="section">
      <div className="container">
        <h1 style={{ fontFamily: 'Georgia, serif', fontSize: '1.8rem', fontWeight: 'normal', marginBottom: '0.5rem' }}>
          Buchungsübersicht
        </h1>
        <p style={{ color: '#999', fontSize: '0.85rem', marginBottom: '2rem' }}>
          {bookings?.length || 0} Buchungen ·{' '}
          <a href="/api/calendar.ics" style={{ color: '#1A1A1A' }}>iCal exportieren</a>
        </p>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #1A1A1A' }}>
                {['Check-in','Check-out','Nächte','Gast','E-Mail','Pers.','Hund','Gesamt','Anzahlung','Rest','Status'].map(h => (
                  <th key={h} style={{ padding: '0.75rem 0.75rem', textAlign: 'left', fontSize: '0.7rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#999', whiteSpace: 'nowrap' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {(bookings || []).map((b) => (
                <tr key={b.id} style={{ borderBottom: '1px solid #E5E5E5' }}>
                  <td style={{ padding: '0.75rem', fontWeight: 500, whiteSpace: 'nowrap' }}>{b.checkin}</td>
                  <td style={{ padding: '0.75rem', whiteSpace: 'nowrap' }}>{b.checkout}</td>
                  <td style={{ padding: '0.75rem' }}>{b.nights}</td>
                  <td style={{ padding: '0.75rem' }}>{b.guest_name}</td>
                  <td style={{ padding: '0.75rem', color: '#666' }}>{b.guest_email}</td>
                  <td style={{ padding: '0.75rem' }}>{b.guests}</td>
                  <td style={{ padding: '0.75rem' }}>{b.dog}</td>
                  <td style={{ padding: '0.75rem', fontWeight: 500 }}>{b.total} €</td>
                  <td style={{ padding: '0.75rem', color: '#2D5A35' }}>{b.deposit} €</td>
                  <td style={{ padding: '0.75rem', color: '#888' }}>{b.remainder} €</td>
                  <td style={{ padding: '0.75rem' }}>
                    <span style={{ color: statusColor[b.status] || '#999', fontWeight: 600 }}>{b.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Gästemeldungen */}
        <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '1.4rem', fontWeight: 'normal',
          marginTop: '3rem', marginBottom: '0.5rem' }}>
          Gästemeldungen
        </h2>
        <p style={{ color: '#999', fontSize: '0.85rem', marginBottom: '1.5rem' }}>
          Bevorstehende bestätigte Buchungen (ab heute)
        </p>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #1A1A1A' }}>
                {['Check-in', 'Check-out', 'Gast', 'Meldedaten', 'Eingereicht am', 'Aktion'].map(h => (
                  <th key={h} style={{ padding: '0.75rem', textAlign: 'left', fontSize: '0.7rem',
                    letterSpacing: '0.08em', textTransform: 'uppercase', color: '#999',
                    whiteSpace: 'nowrap' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {(upcomingWithGuests || []).map((b) => {
                const reg = Array.isArray(b.guest_registrations)
                  ? b.guest_registrations[0]
                  : b.guest_registrations
                const hasData = !!reg?.submitted_at
                return (
                  <tr key={b.id} style={{ borderBottom: '1px solid #E5E5E5' }}>
                    <td style={{ padding: '0.75rem', fontWeight: 500, whiteSpace: 'nowrap' }}>{b.checkin}</td>
                    <td style={{ padding: '0.75rem', whiteSpace: 'nowrap' }}>{b.checkout}</td>
                    <td style={{ padding: '0.75rem' }}>{b.guest_name}</td>
                    <td style={{ padding: '0.75rem' }}>
                      {hasData
                        ? <span style={{ color: '#2D5A35', fontWeight: 600 }}>✅ {reg.last_name}, {reg.first_name}</span>
                        : <span style={{ color: '#C08000', fontWeight: 600 }}>⚠️ Noch nicht ausgefüllt</span>
                      }
                    </td>
                    <td style={{ padding: '0.75rem', color: '#666', whiteSpace: 'nowrap' }}>
                      {hasData ? new Date(reg.submitted_at).toLocaleDateString('de-DE') : '–'}
                    </td>
                    <td style={{ padding: '0.75rem' }}>
                      <a
                        href={`/buchung/gaeste?booking_id=${b.id}`}
                        style={{ color: '#2D5A35', fontSize: '0.8rem', textDecoration: 'none' }}
                      >
                        {hasData ? 'Ansehen' : 'Link senden'}
                      </a>
                    </td>
                  </tr>
                )
              })}
              {(!upcomingWithGuests || upcomingWithGuests.length === 0) && (
                <tr>
                  <td colSpan={6} style={{ padding: '1.5rem 0.75rem', color: '#999' }}>
                    Keine bevorstehenden bestätigten Buchungen.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
