'use client'
import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'

const COUNTRIES = [
  'Deutschland', 'Österreich', 'Schweiz', 'Niederlande',
  'Belgien', 'Frankreich', 'Luxemburg', 'Polen', 'Tschechien',
  'Dänemark', 'Schweden', 'Norwegen', 'Großbritannien',
  'USA', 'Sonstige',
]

const NATIONALITIES = [
  'deutsch', 'österreichisch', 'schweizerisch', 'niederländisch',
  'belgisch', 'französisch', 'luxemburgisch', 'polnisch',
  'tschechisch', 'dänisch', 'schwedisch', 'britisch',
  'amerikanisch', 'sonstige',
]

interface Companion {
  salutation: string
  last_name: string
  first_name: string
  nationality: string
  date_of_birth: string
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '0.8rem 1rem',
  border: '1.5px solid #D1D5DB',
  borderRadius: '6px',
  fontSize: '1rem',
  boxSizing: 'border-box',
}

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontSize: '0.78rem',
  color: '#444',
  fontWeight: 600,
  letterSpacing: '0.04em',
  textTransform: 'uppercase',
  marginBottom: '0.4rem',
}

function GuestRegistrationForm() {
  const searchParams = useSearchParams()
  const booking_id = searchParams.get('booking_id')

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [alreadyFilled, setAlreadyFilled] = useState(false)
  const [companions, setCompanions] = useState<Companion[]>([])

  const [form, setForm] = useState({
    salutation: '',
    last_name: '',
    first_name: '',
    street: '',
    house_number: '',
    postal_code: '',
    city: '',
    country: 'Deutschland',
    nationality: 'deutsch',
    date_of_birth: '',
    passport_number: '',
  })

  useEffect(() => {
    if (!booking_id) return
    fetch(`/api/guest-registration?booking_id=${booking_id}`)
      .then(r => r.json())
      .then(({ data }) => {
        if (data?.submitted_at) {
          setAlreadyFilled(true)
          setForm({
            salutation:      data.salutation      || '',
            last_name:       data.last_name        || '',
            first_name:      data.first_name       || '',
            street:          data.street           || '',
            house_number:    data.house_number     || '',
            postal_code:     data.postal_code      || '',
            city:            data.city             || '',
            country:         data.country          || 'Deutschland',
            nationality:     data.nationality      || 'deutsch',
            date_of_birth:   data.date_of_birth    || '',
            passport_number: data.passport_number  || '',
          })
          setCompanions(data.companions || [])
        }
      })
      .catch(() => {})
  }, [booking_id])

  const addCompanion = () => {
    if (companions.length >= 2) return
    setCompanions(prev => [
      ...prev,
      { salutation: '', last_name: '', first_name: '', nationality: 'deutsch', date_of_birth: '' },
    ])
  }

  const updateCompanion = (index: number, field: string, value: string) => {
    setCompanions(prev => prev.map((c, i) => i === index ? { ...c, [field]: value } : c))
  }

  const removeCompanion = (index: number) => {
    setCompanions(prev => prev.filter((_, i) => i !== index))
  }

  const handleSubmit = async () => {
    if (!form.last_name || !form.first_name) {
      alert('Bitte Name und Vorname ausfüllen.')
      return
    }
    setLoading(true)
    try {
      const res = await fetch('/api/guest-registration', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ booking_id, ...form, companions }),
      })
      if (res.ok) {
        setSubmitted(true)
      } else {
        const { error } = await res.json()
        alert(error || 'Fehler beim Speichern. Bitte versuchen Sie es erneut.')
      }
    } catch {
      alert('Netzwerkfehler. Bitte versuchen Sie es erneut.')
    }
    setLoading(false)
  }

  if (!booking_id) {
    return (
      <main style={{ padding: '4rem 2rem', textAlign: 'center' }}>
        <p style={{ color: '#666', marginBottom: '1rem' }}>Kein gültiger Buchungslink.</p>
        <Link href="/buchung" style={{ color: '#2D5A35' }}>Zur Buchung</Link>
      </main>
    )
  }

  if (submitted) {
    return (
      <main style={{ padding: '4rem 2rem', maxWidth: 600, margin: '0 auto', textAlign: 'center' }}>
        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
        <h1 style={{ fontFamily: 'Georgia,serif', fontSize: '1.8rem', fontWeight: 'normal',
          marginBottom: '1rem', color: '#1C3A22' }}>
          Vielen Dank!
        </h1>
        <p style={{ color: '#555', lineHeight: 1.7 }}>
          Ihre Meldedaten wurden erfolgreich übermittelt. Sie können sich
          nun ganz auf Ihren Aufenthalt in der Vulkaneifel freuen.
        </p>
        <Link href="/" style={{
          display: 'inline-block', marginTop: '2rem',
          color: '#2D5A35', textDecoration: 'none',
          border: '1px solid #2D5A35', padding: '0.75rem 1.5rem', borderRadius: '4px',
        }}>
          Zur Startseite
        </Link>
      </main>
    )
  }

  return (
    <main>
      <section style={{
        background: 'linear-gradient(135deg, #1C3A22 0%, #2D5A35 100%)',
        padding: '3rem 2rem',
        color: 'white',
        textAlign: 'center',
      }}>
        <h1 style={{ fontFamily: 'Georgia,serif', fontSize: 'clamp(1.5rem,3vw,2rem)',
          fontWeight: 'normal', marginBottom: '0.75rem' }}>
          Meldedaten für Ihren Aufenthalt
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.85)', maxWidth: 560, margin: '0 auto',
          lineHeight: 1.6, fontSize: '0.95rem' }}>
          Damit Sie sich ganz auf Ihren Urlaub konzentrieren können –
          hinterlegen Sie Ihre Meldedaten bequem vorab.
        </p>
      </section>

      <section style={{ maxWidth: 640, margin: '0 auto', padding: '2rem' }}>

        <div style={{
          background: '#F9F8F6',
          border: '1px solid #E5E5E5',
          borderLeft: '3px solid #2D5A35',
          borderRadius: '4px',
          padding: '1rem 1.25rem',
          marginBottom: '2rem',
          fontSize: '0.85rem',
          color: '#555',
          lineHeight: 1.65,
        }}>
          <strong style={{ color: '#1A1A1A', display: 'block', marginBottom: '0.4rem' }}>
            Hinweis zur Meldepflicht
          </strong>
          Gemäß §§ 29, 30 Bundesmeldegesetz (BMG) sind Beherbergungsbetriebe verpflichtet,
          für jeden Gast einen Meldeschein zu führen. Ausländische Staatsangehörige sind
          zusätzlich zur Unterschrift verpflichtet. Ihre Daten werden ausschließlich für
          die gesetzlich vorgeschriebene Meldung bei der Verbandsgemeinde Daun weitergegeben
          und nicht für Werbezwecke verwendet. Die Aufbewahrungsfrist beträgt 1 Jahr gemäß BMG.
        </div>

        {alreadyFilled && (
          <div style={{
            background: '#F0F7F0', border: '1px solid #A8C9AE',
            borderRadius: '4px', padding: '0.75rem 1rem',
            marginBottom: '1.5rem', fontSize: '0.85rem', color: '#2D5A35',
          }}>
            ✅ Sie haben Ihre Meldedaten bereits hinterlegt. Sie können die Angaben
            unten aktualisieren und erneut speichern.
          </div>
        )}

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

          <h2 style={{ fontFamily: 'Georgia,serif', fontSize: '1.2rem',
            fontWeight: 'normal', color: '#1A1A1A', margin: '0' }}>
            Hauptperson
          </h2>

          {/* Anrede */}
          <div>
            <label style={labelStyle}>Anrede</label>
            <select value={form.salutation}
              onChange={e => setForm(f => ({ ...f, salutation: e.target.value }))}
              style={{ ...inputStyle, appearance: 'none', background: 'white' }}>
              <option value="">Bitte wählen</option>
              <option value="Herr">Herr</option>
              <option value="Frau">Frau</option>
            </select>
          </div>

          {/* Name + Vorname */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div>
              <label style={labelStyle}>Nachname *</label>
              <input type="text" value={form.last_name} placeholder="Mustermann"
                onChange={e => setForm(f => ({ ...f, last_name: e.target.value }))}
                style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>Vorname *</label>
              <input type="text" value={form.first_name} placeholder="Max"
                onChange={e => setForm(f => ({ ...f, first_name: e.target.value }))}
                style={inputStyle} />
            </div>
          </div>

          {/* Straße + Hausnummer */}
          <div style={{ display: 'grid', gridTemplateColumns: '3fr 1fr', gap: '1rem' }}>
            <div>
              <label style={labelStyle}>Straße</label>
              <input type="text" value={form.street} placeholder="Musterstraße"
                onChange={e => setForm(f => ({ ...f, street: e.target.value }))}
                style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>Nr.</label>
              <input type="text" value={form.house_number} placeholder="12"
                onChange={e => setForm(f => ({ ...f, house_number: e.target.value }))}
                style={inputStyle} />
            </div>
          </div>

          {/* PLZ + Ort */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '1rem' }}>
            <div>
              <label style={labelStyle}>PLZ</label>
              <input type="text" value={form.postal_code} placeholder="12345"
                onChange={e => setForm(f => ({ ...f, postal_code: e.target.value }))}
                style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>Ort</label>
              <input type="text" value={form.city} placeholder="Musterstadt"
                onChange={e => setForm(f => ({ ...f, city: e.target.value }))}
                style={inputStyle} />
            </div>
          </div>

          {/* Land + Staatsangehörigkeit */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div>
              <label style={labelStyle}>Herkunftsland</label>
              <select value={form.country}
                onChange={e => setForm(f => ({ ...f, country: e.target.value }))}
                style={{ ...inputStyle, appearance: 'none', background: 'white' }}>
                {COUNTRIES.map(c => <option key={c}>{c}</option>)}
              </select>
            </div>
            <div>
              <label style={labelStyle}>Staatsangehörigkeit</label>
              <select value={form.nationality}
                onChange={e => setForm(f => ({ ...f, nationality: e.target.value }))}
                style={{ ...inputStyle, appearance: 'none', background: 'white' }}>
                {NATIONALITIES.map(n => <option key={n}>{n}</option>)}
              </select>
            </div>
          </div>

          {/* Geburtsdatum */}
          <div>
            <label style={labelStyle}>Geburtsdatum</label>
            <input type="date" value={form.date_of_birth}
              onChange={e => setForm(f => ({ ...f, date_of_birth: e.target.value }))}
              style={inputStyle} />
          </div>

          {/* Ausweisnummer (nur bei Nicht-Deutschen) */}
          {form.country !== 'Deutschland' && (
            <div>
              <label style={labelStyle}>
                Ausweisnummer{' '}
                <span style={{ color: '#999', fontWeight: 400, textTransform: 'none',
                  letterSpacing: 0 }}>
                  (Pflicht für ausländische Gäste)
                </span>
              </label>
              <input type="text" value={form.passport_number}
                placeholder="Reisepass- oder Ausweisnummer"
                onChange={e => setForm(f => ({ ...f, passport_number: e.target.value }))}
                style={inputStyle} />
            </div>
          )}

          {/* Begleitpersonen */}
          <div style={{ borderTop: '1px solid #E5E5E5', paddingTop: '1.5rem' }}>
            <h2 style={{ fontFamily: 'Georgia,serif', fontSize: '1.2rem',
              fontWeight: 'normal', color: '#1A1A1A', margin: '0 0 1rem' }}>
              Begleitpersonen
            </h2>

            {companions.map((comp, idx) => (
              <div key={idx} style={{
                background: '#F9F8F6', borderRadius: '6px',
                padding: '1rem', marginBottom: '1rem', border: '1px solid #E5E5E5',
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between',
                  alignItems: 'center', marginBottom: '0.75rem' }}>
                  <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#444' }}>
                    Begleitperson {idx + 1}
                  </span>
                  <button onClick={() => removeCompanion(idx)} style={{
                    background: 'none', border: 'none', cursor: 'pointer',
                    color: '#999', fontSize: '1.1rem', minHeight: 32,
                  }}>✕</button>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                  <input type="text" placeholder="Nachname" value={comp.last_name}
                    onChange={e => updateCompanion(idx, 'last_name', e.target.value)}
                    style={{ padding: '0.7rem 0.9rem', border: '1.5px solid #D1D5DB',
                      borderRadius: '6px', fontSize: '1rem' }} />
                  <input type="text" placeholder="Vorname" value={comp.first_name}
                    onChange={e => updateCompanion(idx, 'first_name', e.target.value)}
                    style={{ padding: '0.7rem 0.9rem', border: '1.5px solid #D1D5DB',
                      borderRadius: '6px', fontSize: '1rem' }} />
                  <input type="date" value={comp.date_of_birth}
                    onChange={e => updateCompanion(idx, 'date_of_birth', e.target.value)}
                    style={{ padding: '0.7rem 0.9rem', border: '1.5px solid #D1D5DB',
                      borderRadius: '6px', fontSize: '1rem' }} />
                  <select value={comp.nationality}
                    onChange={e => updateCompanion(idx, 'nationality', e.target.value)}
                    style={{ padding: '0.7rem 0.9rem', border: '1.5px solid #D1D5DB',
                      borderRadius: '6px', fontSize: '1rem', background: 'white',
                      appearance: 'none' }}>
                    {NATIONALITIES.map(n => <option key={n}>{n}</option>)}
                  </select>
                </div>
              </div>
            ))}

            {companions.length < 2 && (
              <button onClick={addCompanion} style={{
                background: 'none', border: '1px solid #D1D5DB',
                borderRadius: '6px', padding: '0.6rem 1.2rem',
                cursor: 'pointer', fontSize: '0.875rem', color: '#444', minHeight: 44,
              }}>
                + Begleitperson hinzufügen
              </button>
            )}
          </div>

          {/* Datenschutz */}
          <p style={{ fontSize: '0.78rem', color: '#999', lineHeight: 1.6,
            borderTop: '1px solid #E5E5E5', paddingTop: '1rem' }}>
            Mit dem Absenden bestätigen Sie die Richtigkeit Ihrer Angaben.
            Die Daten werden gemäß DSGVO und BMG verarbeitet und ausschließlich
            für die gesetzlich vorgeschriebene Meldung bei der Verbandsgemeinde
            Daun verwendet. Weitere Informationen finden Sie in unserer{' '}
            <a href="/datenschutz" style={{ color: '#2D5A35' }}>Datenschutzerklärung</a>.
          </p>

          <button onClick={handleSubmit} disabled={loading} style={{
            background: loading ? '#999' : '#1C3A22',
            color: 'white', border: 'none', borderRadius: '6px',
            padding: '1rem 2rem', fontSize: '1rem', fontWeight: 600,
            cursor: loading ? 'not-allowed' : 'pointer',
            minHeight: 52, width: '100%',
          }}>
            {loading ? 'Wird gespeichert…' : 'Meldedaten absenden'}
          </button>

          <p style={{ textAlign: 'center', fontSize: '0.8rem', color: '#aaa' }}>
            Sie können diese Seite auch später über den Link in Ihrer
            Buchungsbestätigung aufrufen.
          </p>
        </div>
      </section>
    </main>
  )
}

export default function GuestRegistrationPage() {
  return (
    <Suspense fallback={
      <div style={{ padding: '4rem 2rem', textAlign: 'center', color: '#999' }}>
        Wird geladen…
      </div>
    }>
      <GuestRegistrationForm />
    </Suspense>
  )
}
