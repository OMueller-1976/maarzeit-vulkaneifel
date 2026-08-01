'use client'
import Script from 'next/script'
import { useEffect, useState } from 'react'

export default function Analytics() {
  const [consent, setConsent] = useState(false)

  useEffect(() => {
    const check = () => {
      const c = localStorage.getItem('cookie-consent')
      setConsent(c === 'all')
    }
    check()
    window.addEventListener('storage', check)
    window.addEventListener('cookie-consent-updated', check)
    return () => {
      window.removeEventListener('storage', check)
      window.removeEventListener('cookie-consent-updated', check)
    }
  }, [])

  if (!consent) return null

  return (
    <>
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MS9529LN');`,
        }}
      />
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-H24P94BWQD"
        strategy="afterInteractive"
      />
      <Script
        id="ga4-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-H24P94BWQD');`,
        }}
      />
    </>
  )
}
