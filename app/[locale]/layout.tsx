import { notFound } from 'next/navigation'

const locales = ['de', 'en', 'nl', 'fr']
const BASE_URL = 'https://www.ferienwohnung-in-der-vulkaneifel.de'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  return {
    alternates: {
      languages: {
        'de': `${BASE_URL}`,
        'en': `${BASE_URL}/en`,
        'nl': `${BASE_URL}/nl`,
        'fr': `${BASE_URL}/fr`,
        'x-default': `${BASE_URL}`,
      }
    }
  }
}

export function generateStaticParams() {
  return locales.map(locale => ({ locale }))
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!locales.includes(locale)) notFound()
  return <>{children}</>
}
