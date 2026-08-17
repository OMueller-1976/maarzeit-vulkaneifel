const BASE = 'https://www.ferienwohnung-in-der-vulkaneifel.de'

export function generateSeoMetadata(
  path: string,
  locale: string,
  title: string,
  description: string
) {
  const canonical = locale === 'de'
    ? `${BASE}${path}`
    : `${BASE}/${locale}${path}`

  return {
    title: { absolute: title },
    description,
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: 'MaarZeit Vulkaneifel',
      locale: locale === 'de' ? 'de_DE' :
              locale === 'nl' ? 'nl_NL' :
              locale === 'fr' ? 'fr_FR' : 'en_GB',
      type: 'website' as const,
    },
    alternates: {
      canonical,
      languages: {
        'de': `${BASE}${path}`,
        'en': `${BASE}/en${path}`,
        'nl': `${BASE}/nl${path}`,
        'fr': `${BASE}/fr${path}`,
        'x-default': `${BASE}${path}`,
      }
    }
  }
}
