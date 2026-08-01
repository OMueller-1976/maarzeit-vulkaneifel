'use client'
import { usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'

const locales = [
  { code: 'de', label: 'DE', flag: '🇩🇪' },
  { code: 'en', label: 'EN', flag: '🇬🇧' },
  { code: 'nl', label: 'NL', flag: '🇳🇱' },
  { code: 'fr', label: 'FR', flag: '🇫🇷' },
]

export default function LocaleSwitcher({ currentLocale }: { currentLocale: string }) {
  const pathname = usePathname()
  const router = useRouter()
  const [open, setOpen] = useState(false)

  const switchLocale = (locale: string) => {
    setOpen(false)
    // Aktuellen Pfad ohne Locale-Präfix ermitteln
    const segments = pathname.split('/')
    const hasLocale = ['en', 'nl', 'fr'].includes(segments[1])
    const pathWithoutLocale = hasLocale
      ? '/' + segments.slice(2).join('/')
      : pathname

    const newPath = locale === 'de'
      ? pathWithoutLocale || '/'
      : `/${locale}${pathWithoutLocale}`

    router.push(newPath)
  }

  const current = locales.find(l => l.code === currentLocale) || locales[0]

  return (
    <div style={{ position: 'relative' }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          background: 'none',
          border: '1px solid rgba(0,0,0,0.2)',
          borderRadius: '4px',
          color: 'inherit',
          padding: '0.3rem 0.6rem',
          cursor: 'pointer',
          fontSize: '0.8rem',
          letterSpacing: '0.05em',
          display: 'flex',
          alignItems: 'center',
          gap: '0.3rem',
          minHeight: 32,
        }}
      >
        {current.flag} {current.label} ▾
      </button>

      {open && (
        <div style={{
          position: 'absolute',
          top: '110%',
          right: 0,
          background: '#1A1A1A',
          border: '1px solid rgba(255,255,255,0.15)',
          borderRadius: '4px',
          overflow: 'hidden',
          zIndex: 1000,
          minWidth: 100,
          boxShadow: '0 4px 16px rgba(0,0,0,0.3)',
        }}>
          {locales.map(locale => (
            <button
              key={locale.code}
              onClick={() => switchLocale(locale.code)}
              style={{
                display: 'block',
                width: '100%',
                textAlign: 'left',
                background: locale.code === currentLocale ? 'rgba(255,255,255,0.1)' : 'none',
                border: 'none',
                color: 'white',
                padding: '0.5rem 0.75rem',
                cursor: 'pointer',
                fontSize: '0.85rem',
                letterSpacing: '0.03em',
              }}
            >
              {locale.flag} {locale.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
