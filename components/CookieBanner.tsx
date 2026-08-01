'use client'
import { useState, useEffect } from 'react'
import { useTranslations } from 'next-intl'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  const t = useTranslations('cookie')

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) setVisible(true)
  }, [])

  const accept = () => {
    localStorage.setItem('cookie-consent', 'all')
    setVisible(false)
    window.dispatchEvent(new Event('cookie-consent-updated'))
  }

  const acceptNecessary = () => {
    localStorage.setItem('cookie-consent', 'necessary')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 9999,
      background: '#1A1A1A',
      color: '#ffffff',
      padding: '1.5rem 2rem',
      boxShadow: '0 -4px 24px rgba(0,0,0,0.2)',
    }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <div style={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          gap: '2rem',
          flexWrap: 'wrap',
        }}>
          <div style={{ flex: 1, minWidth: 280 }}>
            <p style={{ margin: '0 0 0.5rem', fontSize: '0.95rem', lineHeight: 1.6, color: '#ffffff' }}>
              {t('text')}{' '}
              <a href="/datenschutz" style={{ color: '#A8C9AE', textDecoration: 'underline' }}>
                Datenschutzerklärung
              </a>.
            </p>
            <button
              onClick={() => setShowDetails(!showDetails)}
              style={{
                background: 'none',
                border: 'none',
                color: '#A8C9AE',
                cursor: 'pointer',
                fontSize: '0.85rem',
                padding: 0,
                textDecoration: 'underline',
              }}
            >
              {showDetails ? t('hideDetails') : t('details')}
            </button>
          </div>

          <div style={{
            display: 'flex',
            gap: '0.75rem',
            alignItems: 'center',
            flexWrap: 'wrap',
            flexShrink: 0,
          }}>
            <button
              onClick={acceptNecessary}
              style={{
                background: 'transparent',
                border: '1px solid rgba(255,255,255,0.3)',
                color: '#ffffff',
                padding: '0.6rem 1.25rem',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '0.875rem',
                minHeight: 44,
                whiteSpace: 'nowrap',
              }}
            >
              {t('necessary')}
            </button>
            <button
              onClick={accept}
              style={{
                background: '#2D5A35',
                border: '1px solid #2D5A35',
                color: '#ffffff',
                padding: '0.6rem 1.5rem',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '0.875rem',
                fontWeight: 600,
                minHeight: 44,
                whiteSpace: 'nowrap',
              }}
            >
              {t('acceptAll')}
            </button>
          </div>
        </div>

        {showDetails && (
          <div style={{
            marginTop: '1.25rem',
            paddingTop: '1.25rem',
            borderTop: '1px solid rgba(255,255,255,0.15)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1rem',
            fontSize: '0.85rem',
            color: 'rgba(255,255,255,0.75)',
          }}>
            <div>
              <strong style={{ color: '#ffffff', display: 'block', marginBottom: 4 }}>
                ✓ Notwendige Cookies
              </strong>
              Session-Verwaltung, Buchungsprozess (Stripe). Immer aktiv.
            </div>
            <div>
              <strong style={{ color: '#ffffff', display: 'block', marginBottom: 4 }}>
                Google Analytics (GA4)
              </strong>
              Analyse des Nutzerverhaltens, anonymisiert. Nur bei Zustimmung.
            </div>
            <div>
              <strong style={{ color: '#ffffff', display: 'block', marginBottom: 4 }}>
                Google Tag Manager
              </strong>
              Steuerung von Tracking-Tags. Nur bei Zustimmung aktiv.
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
