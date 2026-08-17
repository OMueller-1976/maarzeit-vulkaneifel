import Link from "next/link";
import FAQ from "@/components/FAQ";
import { getTranslations } from 'next-intl/server';
import { generateSeoMetadata } from '@/lib/seo';

const titles: Record<string, string> = {
  de: 'MaarZeit Vulkaneifel – Ferienwohnung bei Daun | Hund & Motorrad',
  en: 'MaarZeit Vulkan Eifel – Holiday Apartment near Daun | Dogs & Motorbike',
  nl: 'MaarZeit Vulkaan Eifel – Vakantiewoning bij Daun | Hond & Motor',
  fr: 'MaarZeit Eifel Volcanique – Appartement de Vacances près de Daun',
}
const descriptions: Record<string, string> = {
  de: 'Moderne 35 qm Ferienwohnung in der Vulkaneifel bei Daun. Hund willkommen, Parkplatz, Terrasse. Ab 75 € pro Nacht.',
  en: 'Modern 35 sqm holiday apartment in the Vulkan Eifel near Daun. Dogs welcome, parking, terrace. From €75 per night.',
  nl: 'Modern vakantieappartement van 35 m² in de Vulkaan Eifel bij Daun. Honden welkom, parkeerplaats, terras. Vanaf €75 per nacht.',
  fr: "Appartement de vacances moderne de 35 m² dans l'Eifel volcanique près de Daun. Chiens bienvenus, parking, terrasse. À partir de 75 €.",
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  return generateSeoMetadata('/', locale, titles[locale] ?? titles.de, descriptions[locale] ?? descriptions.de)
}

export function generateStaticParams() {
  return [
    { locale: 'de' },
    { locale: 'en' },
    { locale: 'nl' },
    { locale: 'fr' },
  ]
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  await params
  const t = await getTranslations('home')

  const highlights = t.raw('highlights.items') as Array<{ icon: string; title: string; text: string }>
  const features = t.raw('apartment.features') as string[]
  const priceTiers = t.raw('prices.tiers') as Array<{ label: string; price: string; note: string }>
  const guideLinks = t.raw('guide.links') as Array<{ href: string; icon: string; label: string }>

  return (
    <>
      {/* Hero */}
      <section className="relative bg-green-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600')] bg-cover bg-center" />
        <div className="relative max-w-5xl mx-auto px-4 py-28 text-center">
          <p className="text-green-300 uppercase tracking-widest text-sm mb-4 font-medium">
            {t('hero.badge')}
          </p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            MaarZeit<br />
            <span className="text-green-300">Vulkaneifel</span>
          </h1>
          <p className="text-lg md:text-xl text-stone-200 max-w-2xl mx-auto mb-10 leading-relaxed">
            {t('hero.description')}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/buchung" className="btn-primary text-lg px-8 py-4">
              {t('hero.btnAvailability')}
            </Link>
            <Link
              href="/ferienwohnung"
              className="border border-white text-white px-8 py-4 rounded hover:bg-white hover:text-green-900 transition-colors text-lg"
            >
              {t('hero.btnApartment')}
            </Link>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="section-title text-center">{t('highlights.heading')}</h2>
        <p className="text-center text-stone-600 mb-12 max-w-2xl mx-auto">
          {t('highlights.subtitle')}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((h) => (
            <div key={h.title} className="card text-center hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">{h.icon}</div>
              <h3 className="font-bold text-green-900 text-lg mb-2">{h.title}</h3>
              <p className="text-stone-600 text-sm leading-relaxed">{h.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Wohnung Preview */}
      <section className="bg-green-50 py-20">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-title">{t('apartment.title')}</h2>
            <p className="text-stone-600 mb-4 leading-relaxed">
              {t('apartment.description')}
            </p>
            <ul className="text-stone-700 space-y-2 mb-6 text-sm">
              {features.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="text-green-700 font-bold">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/ferienwohnung" className="btn-primary">
              {t('apartment.btnDetails')}
            </Link>
          </div>
          <div style={{ borderRadius: '10px', overflow: 'hidden', height: '320px' }}>
            <img
              src="/images/region/garten-feuerschale.jpg"
              alt={t('apartment.imgAlt')}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
        </div>
      </section>

      {/* Preise Teaser */}
      <section className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h2 className="section-title">{t('prices.title')}</h2>
        <p className="text-stone-600 mb-8">
          {t('prices.subtitle')}
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
          {priceTiers.map((tier, i) => (
            <div
              key={tier.label}
              className={`card border ${i === 1 ? "border-2 border-green-900" : "border-green-100"}`}
            >
              <p className={`text-xs uppercase tracking-widest mb-2 ${i === 1 ? "" : "text-stone-400"}`}
                style={{ color: i === 1 ? '#1A1A1A' : undefined }}>
                {tier.label}
              </p>
              <p className={`font-bold text-2xl mb-1 ${i === 1 ? "" : "text-green-800"}`}
                style={{ color: i === 1 ? '#1A1A1A' : undefined }}>
                {tier.price}
              </p>
              <p className={`text-xs ${i === 1 ? "" : "text-stone-500"}`}
                style={{ color: i === 1 ? '#666' : undefined }}>
                {tier.note}
              </p>
            </div>
          ))}
        </div>
        <p className="text-center mb-8" style={{ color: "#888", fontSize: "0.78rem" }}>
          {t('prices.footnote')}
        </p>
        <Link href="/buchung" className="btn-primary text-lg px-8 py-4">
          {t('prices.btnBook')}
        </Link>
      </section>

      <FAQ />

      {/* Booking Steps */}
      <section className="max-w-4xl mx-auto px-4 py-20">
        <h2 className="section-title text-center">{t('booking.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-10">
          {([0, 1, 2, 3] as const).map((i) => (
            <div key={i} className="text-center">
              <div className="w-10 h-10 rounded-full bg-green-900 text-white flex items-center justify-center font-bold mx-auto mb-3">
                {i + 1}
              </div>
              <h3 className="font-bold text-green-900 mb-2">{t(`booking.steps.${i}.title`)}</h3>
              <p className="text-stone-600 text-sm leading-relaxed">{t(`booking.steps.${i}.text`)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Guide Teaser */}
      <section className="bg-stone-100 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="section-title text-center">{t('guide.heading')}</h2>
          <p className="text-center text-stone-600 mb-10 max-w-2xl mx-auto">
            {t('guide.subtitle')}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {guideLinks.map((g) => (
              <Link
                key={g.href}
                href={g.href}
                className="card text-center hover:shadow-lg transition-shadow hover:border-green-200 border border-transparent"
              >
                <div className="text-4xl mb-2">{g.icon}</div>
                <p className="font-medium text-green-900 text-sm">{g.label}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
