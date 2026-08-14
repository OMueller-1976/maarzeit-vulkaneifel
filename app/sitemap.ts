import type { MetadataRoute } from "next";

const BASE_URL = 'https://www.ferienwohnung-in-der-vulkaneifel.de'
const locales = ['de', 'en', 'nl', 'fr']

const pages = [
  { path: '', priority: 1.0 },
  { path: '/ferienwohnung', priority: 0.9 },
  { path: '/buchung', priority: 0.9 },
  { path: '/guide', priority: 0.8 },
  { path: '/guide/eifel-entdecken', priority: 0.8 },
  { path: '/guide/dauner-maare', priority: 0.7 },
  { path: '/guide/wandern', priority: 0.7 },
  { path: '/guide/radfahren', priority: 0.7 },
  { path: '/guide/ausflugsziele', priority: 0.7 },
  { path: '/guide/schlechtwetter', priority: 0.7 },
  { path: '/guide/gerolstein', priority: 0.7 },
  { path: '/specials', priority: 0.7 },
  { path: '/specials/nuerburgring', priority: 0.6 },
  { path: '/specials/cochem', priority: 0.6 },
  { path: '/specials/koblenz', priority: 0.6 },
  { path: '/specials/luxemburg', priority: 0.6 },
  { path: '/specials/koeln', priority: 0.6 },
  { path: '/specials/auszeit-mit-kind', priority: 0.6 },
  { path: '/specials/events', priority: 0.7 },
  { path: '/specials/laacher-see', priority: 0.6 },
  { path: '/hund', priority: 0.8 },
  { path: '/motorrad', priority: 0.7 },
  { path: '/anreise', priority: 0.6 },
  { path: '/kontakt', priority: 0.5 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = []

  for (const page of pages) {
    for (const locale of locales) {
      const url = locale === 'de'
        ? `${BASE_URL}${page.path}`
        : `${BASE_URL}/${locale}${page.path}`

      entries.push({
        url,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: page.priority,
      })
    }
  }

  return entries
}
