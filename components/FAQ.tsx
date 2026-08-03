'use client'
import { useState } from 'react'
import { useTranslations } from 'next-intl'

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)
  const t = useTranslations('faq')
  const questions = t.raw('questions') as Array<{ q: string; a: string }>

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
          {t('heading')}
        </h2>
        <p style={{ color: '#666', fontSize: '0.95rem', marginBottom: '2.5rem' }}>
          {t('subtitle')}
        </p>

        {/* Schema.org FAQ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": questions.map(item => ({
                "@type": "Question",
                "name": item.q,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": item.a
                }
              }))
            })
          }}
        />

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {questions.map((item, i) => (
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
                  {item.q}
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
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
