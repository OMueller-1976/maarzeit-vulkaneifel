import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title:  'Buchung bestätigt – MaarZeit Vulkaneifel',
  robots: 'noindex',
}


export function generateStaticParams() {
  return [
    { locale: 'de' },
    { locale: 'en' },
    { locale: 'nl' },
    { locale: 'fr' },
  ]
}

export default function SuccessPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-20 text-center">
      <div className="text-6xl mb-6">🎉</div>
      <h1 className="text-3xl font-bold text-green-900 mb-4">
        Vielen Dank für Ihre Buchung!
      </h1>
      <p className="text-stone-600 mb-6 leading-relaxed">
        Ihre Anzahlung (30 %) ist bei uns eingegangen. Sie erhalten in Kürze eine
        Bestätigungs-E-Mail mit allen Details zu Ihrem Aufenthalt.
      </p>

      <div className="bg-green-50 rounded-lg p-6 text-left mb-8">
        <h2 className="font-bold text-green-900 mb-3">Ihre Check-in-Informationen</h2>
        <ul className="text-stone-700 space-y-2 text-sm">
          <li className="flex gap-2">
            <span className="text-green-700 font-bold">📍</span>
            Am Bruchborn 6, 54570 Kirchweiler
          </li>
          <li className="flex gap-2">
            <span className="text-green-700 font-bold">🕒</span>
            Check-in ab 15:00 Uhr
          </li>
          <li className="flex gap-2">
            <span className="text-green-700 font-bold">🕙</span>
            Check-out bis 11:00 Uhr
          </li>
          <li className="flex gap-2">
            <span className="text-green-700 font-bold">💶</span>
            Restzahlung (70 %) bitte bei Anreise in bar oder per Überweisung
          </li>
        </ul>
      </div>

      <div className="flex flex-wrap gap-4 justify-center">
        <Link href="/" className="btn-primary">
          Zur Startseite
        </Link>
        <Link
          href="/guide"
          className="border border-green-800 text-green-800 px-6 py-3 rounded hover:bg-green-800 hover:text-white transition-colors"
        >
          Vulkaneifel entdecken
        </Link>
      </div>
    </div>
  )
}
