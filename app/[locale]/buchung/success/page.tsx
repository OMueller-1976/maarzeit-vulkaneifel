import type { Metadata } from 'next'
import Link from 'next/link'
import { getLocale } from 'next-intl/server'

const translations = {
  de: {
    heading: 'Vielen Dank für Ihre Buchung!',
    subText: 'Ihre Anzahlung (30 %) ist bei uns eingegangen. Sie erhalten in Kürze eine Bestätigungs-E-Mail mit allen Details zu Ihrem Aufenthalt.',
    checkInTitle: 'Ihre Check-in-Informationen',
    address: 'Am Bruchborn 6, 54570 Kirchweiler',
    checkIn: 'Check-in ab 15:00 Uhr',
    checkOut: 'Check-out bis 11:00 Uhr',
    payment: 'Restzahlung (70 %) bitte bei Anreise in bar oder per Überweisung',
    btnHome: 'Zur Startseite',
    btnGuide: 'Vulkaneifel entdecken',
  },
  en: {
    heading: 'Thank You for Your Booking!',
    subText: 'Your deposit (30%) has been received. You will shortly receive a confirmation email with all the details of your stay.',
    checkInTitle: 'Your Check-in Information',
    address: 'Am Bruchborn 6, 54570 Kirchweiler',
    checkIn: 'Check-in from 3:00 PM',
    checkOut: 'Check-out by 11:00 AM',
    payment: 'Remaining balance (70%) please pay on arrival in cash or by bank transfer',
    btnHome: 'Back to Homepage',
    btnGuide: 'Discover the Vulkan Eifel',
  },
  nl: {
    heading: 'Bedankt voor uw boeking!',
    subText: 'Uw aanbetaling (30%) is ontvangen. U ontvangt binnenkort een bevestigingsmail met alle details van uw verblijf.',
    checkInTitle: 'Uw Check-in-informatie',
    address: 'Am Bruchborn 6, 54570 Kirchweiler',
    checkIn: 'Check-in vanaf 15:00 uur',
    checkOut: 'Check-out voor 11:00 uur',
    payment: 'Restbetaling (70%) graag bij aankomst contant of per overboeking',
    btnHome: 'Naar de startpagina',
    btnGuide: 'Ontdek de Vulkaan Eifel',
  },
  fr: {
    heading: 'Merci pour votre réservation !',
    subText: 'Votre acompte (30 %) a bien été reçu. Vous recevrez prochainement un e-mail de confirmation avec tous les détails de votre séjour.',
    checkInTitle: 'Vos informations de check-in',
    address: 'Am Bruchborn 6, 54570 Kirchweiler',
    checkIn: 'Check-in à partir de 15h00',
    checkOut: 'Check-out avant 11h00',
    payment: 'Solde (70 %) à régler à l\'arrivée en espèces ou par virement',
    btnHome: 'Retour à l\'accueil',
    btnGuide: 'Découvrir l\'Eifel volcanique',
  },
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const titles: Record<string, string> = {
    de: 'Buchung bestätigt – MaarZeit Vulkaneifel',
    en: 'Booking Confirmed – MaarZeit Vulkan Eifel',
    nl: 'Boeking Bevestigd – MaarZeit Vulkaan Eifel',
    fr: 'Réservation Confirmée – MaarZeit Eifel Volcanique',
  }
  return {
    title: { absolute: titles[locale] ?? titles.de },
    robots: 'noindex',
  }
}

export function generateStaticParams() {
  return [
    { locale: 'de' },
    { locale: 'en' },
    { locale: 'nl' },
    { locale: 'fr' },
  ]
}

export default async function SuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ booking_id?: string }>
}) {
  const locale = await getLocale()
  const tr = translations[locale as keyof typeof translations] ?? translations.de
  const { booking_id } = await searchParams

  return (
    <div className="max-w-2xl mx-auto px-4 py-20 text-center">
      <div className="text-6xl mb-6">🎉</div>
      <h1 className="text-3xl font-bold text-green-900 mb-4">
        {tr.heading}
      </h1>
      <p className="text-stone-600 mb-6 leading-relaxed">
        {tr.subText}
      </p>

      {booking_id && (
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 mb-8 text-left">
          <h2 className="font-bold text-amber-900 mb-2">Meldepflicht – jetzt bequem vorab erledigen</h2>
          <p className="text-sm text-amber-800 leading-relaxed mb-4">
            Gemäß Bundesmeldegesetz benötigen wir Ihre Meldedaten vor Anreise.
            Füllen Sie das Formular jetzt aus – es dauert nur 2 Minuten.
          </p>
          <Link
            href={`/buchung/gaeste?booking_id=${booking_id}`}
            className="inline-block bg-amber-700 text-white px-5 py-3 rounded font-semibold text-sm hover:bg-amber-800 transition-colors"
          >
            Meldedaten jetzt hinterlegen
          </Link>
        </div>
      )}

      <div className="bg-green-50 rounded-lg p-6 text-left mb-8">
        <h2 className="font-bold text-green-900 mb-3">{tr.checkInTitle}</h2>
        <ul className="text-stone-700 space-y-2 text-sm">
          <li className="flex gap-2">
            <span className="text-green-700 font-bold">📍</span>
            {tr.address}
          </li>
          <li className="flex gap-2">
            <span className="text-green-700 font-bold">🕒</span>
            {tr.checkIn}
          </li>
          <li className="flex gap-2">
            <span className="text-green-700 font-bold">🕙</span>
            {tr.checkOut}
          </li>
          <li className="flex gap-2">
            <span className="text-green-700 font-bold">💶</span>
            {tr.payment}
          </li>
        </ul>
      </div>

      <div className="flex flex-wrap gap-4 justify-center">
        <Link href="/" className="btn-primary">
          {tr.btnHome}
        </Link>
        <Link
          href="/guide"
          className="border border-green-800 text-green-800 px-6 py-3 rounded hover:bg-green-800 hover:text-white transition-colors"
        >
          {tr.btnGuide}
        </Link>
      </div>
    </div>
  )
}
