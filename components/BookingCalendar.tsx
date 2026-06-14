'use client'
import { useState, useEffect, useCallback } from 'react'
import { DayPicker, DateRange } from 'react-day-picker'
import { de } from 'date-fns/locale'
import { differenceInDays, format, addDays, isBefore, isAfter, isSameDay, parseISO } from 'date-fns'
import { calculatePrice } from '@/lib/pricing'
import 'react-day-picker/dist/style.css'

interface BlockedRange { from: string; to: string }

export default function BookingCalendar() {
  const [range,         setRange]         = useState<DateRange | undefined>()
  const [blockedRanges, setBlockedRanges] = useState<BlockedRange[]>([])
  const [calLoading,    setCalLoading]    = useState(true)
  const [submitting,    setSubmitting]    = useState(false)
  const [error,         setError]         = useState('')
  const [form, setForm] = useState({
    name: '', email: '', phone: '',
    personen: '2', hund: 'nein', motorrad: 'nein', nachricht: '',
  })

  useEffect(() => {
    fetch('/api/availability')
      .then(r => r.json())
      .then(d => { setBlockedRanges(d.blockedRanges || []); setCalLoading(false) })
      .catch(() => setCalLoading(false))
  }, [])

  const isBlocked = useCallback((date: Date): boolean =>
    blockedRanges.some(r => {
      const from = parseISO(r.from)
      const to   = parseISO(r.to)
      return (isAfter(date, from) || isSameDay(date, from)) &&
             (isBefore(date, to)  || isSameDay(date, to))
    }), [blockedRanges])

  const nights  = range?.from && range?.to ? differenceInDays(range.to, range.from) : 0
  const pricing = nights >= 1 ? calculatePrice(nights) : null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!range?.from || !range?.to || nights < 1) {
      setError('Bitte wählen Sie zuerst Ihren Reisezeitraum.')
      return
    }
    setError('')
    setSubmitting(true)
    try {
      const res = await fetch('/api/checkout', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          checkin:    format(range.from, 'yyyy-MM-dd'),
          checkout:   format(range.to,   'yyyy-MM-dd'),
          nights,
          guests:     form.personen,
          dog:        form.hund,
          motorcycle: form.motorrad,
          name:       form.name,
          email:      form.email,
          phone:      form.phone,
          message:    form.nachricht,
        }),
      })
      const data = await res.json()
      if (!res.ok) { setError(data.error || 'Fehler aufgetreten.'); setSubmitting(false); return }
      window.location.href = data.url
    } catch {
      setError('Verbindungsfehler. Bitte versuchen Sie es erneut.')
      setSubmitting(false)
    }
  }

  const labelStyle = { fontSize: '0.82rem', color: '#444', letterSpacing: '0.04em', textTransform: 'uppercase' as const, display: 'block', marginBottom: '0.5rem', fontWeight: 600 }

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' }} className="booking-grid">

      {/* Kalender */}
      <div>
        <p style={{ ...labelStyle, marginBottom: '1.5rem' }}>Reisezeitraum wählen</p>
        {calLoading ? (
          <p style={{ color: '#999', fontSize: '0.9rem' }}>Kalender wird geladen…</p>
        ) : (
          <DayPicker
            mode="range" selected={range} onSelect={setRange} locale={de}
            fromDate={addDays(new Date(), 1)}
            disabled={(date) => isBlocked(date) || isBefore(date, new Date())}
            modifiersStyles={{
              selected:     { backgroundColor: '#1A1A1A', color: 'white' },
              range_middle: { backgroundColor: '#F0F0F0', color: '#1A1A1A' },
              disabled:     { opacity: 0.3, textDecoration: 'line-through' },
            }}
            numberOfMonths={2}
          />
        )}
        <p style={{ fontSize: '0.72rem', color: '#BBB', marginTop: '0.75rem' }}>
          Durchgestrichene Tage sind belegt oder als Reinigungspuffer gesperrt.
        </p>

        {pricing && (
          <div style={{ marginTop: '2rem', borderTop: '1px solid #E5E5E5', paddingTop: '2rem' }}>
            {[
              [`${nights} Nacht${nights > 1 ? 'nächte' : ''} × ${pricing.perNight} €`, `${pricing.subtotal} €`],
              ['Endreinigung (pauschal)', '20 €'],
            ].map(([label, val]) => (
              <div key={label} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.88rem', color: '#666', marginBottom: '0.5rem' }}>
                <span>{label}</span><span>{val}</span>
              </div>
            ))}
            <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid #E5E5E5', paddingTop: '0.6rem', marginTop: '0.5rem', fontFamily: 'Georgia, serif', fontSize: '1.1rem' }}>
              <span>Gesamtpreis</span><span>{pricing.total} €</span>
            </div>
            <div style={{ background: '#F9F8F6', padding: '1rem', marginTop: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.88rem', marginBottom: '0.35rem' }}>
                <span>30 % Anzahlung (jetzt via Stripe)</span>
                <strong>{pricing.deposit} €</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.88rem', color: '#888' }}>
                <span>70 % Restzahlung (bei Anreise)</span>
                <span>{pricing.remainder} €</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Formular */}
      <div>
        <p style={{ ...labelStyle, marginBottom: '1.5rem' }}>Ihre Daten</p>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            <div>
              <label style={labelStyle}>Name *</label>
              <input className="form-input" type="text" required value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Ihr Name" />
            </div>
            <div>
              <label style={labelStyle}>Personen</label>
              <select className="form-input" value={form.personen}
                onChange={e => setForm({ ...form, personen: e.target.value })}>
                <option value="1">1 Person</option>
                <option value="2">2 Personen</option>
                <option value="3">3 Personen</option>
              </select>
            </div>
          </div>
          <div>
            <label style={labelStyle}>E-Mail *</label>
            <input className="form-input" type="email" required value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })} placeholder="ihre@email.de" />
          </div>
          <div>
            <label style={labelStyle}>Telefon</label>
            <input className="form-input" type="tel" value={form.phone}
              onChange={e => setForm({ ...form, phone: e.target.value })} placeholder="Optional" />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            <div>
              <label style={labelStyle}>Hund</label>
              <select className="form-input" value={form.hund}
                onChange={e => setForm({ ...form, hund: e.target.value })}>
                <option value="nein">Kein Hund</option>
                <option value="1">1 Hund</option>
                <option value="2">2 Hunde</option>
              </select>
            </div>
            <div>
              <label style={labelStyle}>Motorrad</label>
              <select className="form-input" value={form.motorrad}
                onChange={e => setForm({ ...form, motorrad: e.target.value })}>
                <option value="nein">Kein Motorrad</option>
                <option value="ja">Ja</option>
              </select>
            </div>
          </div>
          <div>
            <label style={labelStyle}>Nachricht</label>
            <textarea className="form-input" rows={3} value={form.nachricht}
              onChange={e => setForm({ ...form, nachricht: e.target.value })}
              placeholder="Fragen oder Wünsche…" style={{ resize: 'vertical' }} />
          </div>
          <div style={{ fontSize: '0.75rem', color: '#999', display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
            <input type="checkbox" required id="dsgvo" style={{ marginTop: '0.15rem', flexShrink: 0 }} />
            <label htmlFor="dsgvo">
              Ich stimme der Verarbeitung meiner Daten zu (<a href="/datenschutz" style={{ color: '#1A1A1A' }}>Datenschutz</a>).
              Die Buchung wird durch Zahlung der 30 % Anzahlung verbindlich.
            </label>
          </div>
          {error && (
            <p style={{ color: '#DC2626', fontSize: '0.9rem', border: '1.5px solid #FCA5A5', borderRadius: '6px', padding: '0.85rem 1rem', background: '#FEF2F2' }}>
              {error}
            </p>
          )}
          <button type="submit" className="btn-primary"
            style={{ alignSelf: 'flex-start', opacity: submitting ? 0.6 : 1 }}
            disabled={submitting}>
            {submitting ? 'Weiterleitung zu Stripe…' : `Jetzt ${pricing ? pricing.deposit + ' €' : ''} Anzahlung bezahlen →`}
          </button>
          <p style={{ fontSize: '0.72rem', color: '#BBB' }}>
            Sichere Zahlung via Stripe · Kreditkarte & SEPA ·
            Restzahlung {pricing ? pricing.remainder + ' €' : ''} bei Anreise
          </p>
        </form>
      </div>

      <style jsx>{`
        @media (max-width: 760px) {
          .booking-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </div>
  )
}
