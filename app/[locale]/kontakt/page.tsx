import type { Metadata } from "next";
import { getLocale } from 'next-intl/server'

const translations = {
  de: {
    meta: { title: 'Kontakt – MaarZeit Vulkaneifel', description: 'Kontaktieren Sie uns für Fragen zur Ferienwohnung in der Vulkaneifel.' },
    hero: { title: 'Kontakt', subtitle: 'Wir freuen uns auf Ihre Nachricht' },
    cta: 'Zur Buchung',
  },
  en: {
    meta: { title: 'Contact – MaarZeit Vulkan Eifel', description: 'Contact us for questions about the holiday apartment in the Vulkan Eifel.' },
    hero: { title: 'Contact', subtitle: 'We look forward to hearing from you' },
    cta: 'Book Now',
  },
  nl: {
    meta: { title: 'Contact – MaarZeit Vulkaan Eifel', description: 'Neem contact op voor vragen over het vakantieappartement in de Vulkaan Eifel.' },
    hero: { title: 'Contact', subtitle: 'We horen graag van u' },
    cta: 'Nu Boeken',
  },
  fr: {
    meta: { title: 'Contact – MaarZeit Eifel Volcanique', description: "Contactez-nous pour des questions sur l'appartement de vacances dans l'Eifel volcanique." },
    hero: { title: 'Contact', subtitle: 'Nous sommes ravis de vous entendre' },
    cta: 'Réserver',
  },
}


export function generateStaticParams() {
  return [
    { locale: 'de' },
    { locale: 'en' },
    { locale: 'nl' },
    { locale: 'fr' },
  ]
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const tr = translations[locale as keyof typeof translations] ?? translations.de
  return {
    title: tr.meta.title,
    description: tr.meta.description,
  }
}

export default async function KontaktPage() {
  const locale = await getLocale()
  const tr = translations[locale as keyof typeof translations] ?? translations.de

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="section-title">{tr.hero.title}</h1>
      <p className="text-stone-600 text-lg mb-10 max-w-xl leading-relaxed">
        Sie haben Fragen zur Ferienwohnung, möchten eine Buchungsanfrage stellen
        oder einfach mehr über die Region erfahren? Schreiben Sie uns!
      </p>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Kontaktformular (mailto-basiert) */}
        <div className="card">
          <h2 className="text-xl font-bold text-green-900 mb-5">Nachricht senden</h2>
          <form
            action="mailto:kontakt@ferienwohnung-in-der-vulkaneifel.de"
            method="GET"
            encType="text/plain"
            className="space-y-4"
          >
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full border border-stone-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-green-600"
                placeholder="Ihr Name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1">
                E-Mail
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full border border-stone-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-green-600"
                placeholder="ihre@email.de"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1">
                Wunschzeitraum (optional)
              </label>
              <input
                type="text"
                name="zeitraum"
                className="w-full border border-stone-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-green-600"
                placeholder="z. B. 10.08. – 17.08.2026"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1">
                Nachricht
              </label>
              <textarea
                name="body"
                rows={5}
                required
                className="w-full border border-stone-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-green-600 resize-none"
                placeholder="Ihre Fragen oder Buchungsanfrage..."
              />
            </div>
            <button type="submit" className="btn-primary w-full text-center">
              Nachricht senden
            </button>
            <p className="text-xs text-stone-400">
              Das Formular öffnet Ihr E-Mail-Programm mit vorausgefüllter Nachricht.
            </p>
          </form>
        </div>

        {/* Kontaktinfos */}
        <div className="space-y-6">
          <div className="card">
            <h2 className="text-xl font-bold text-green-900 mb-4">Direkt erreichen</h2>
            <ul className="space-y-4 text-sm text-stone-700">
              <li className="flex items-start gap-3">
                <span className="text-2xl">📧</span>
                <div>
                  <p className="font-medium">E-Mail</p>
                  <a href="mailto:kontakt@ferienwohnung-in-der-vulkaneifel.de" className="text-green-700 hover:underline">
                    kontakt@ferienwohnung-in-der-vulkaneifel.de
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">📍</span>
                <div>
                  <p className="font-medium">Adresse</p>
                  <p className="text-stone-600">
                    Markus Müller<br />
                    Am Bruchborn 6<br />
                    54570 Kirchweiler, Kreis Daun
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">⏰</span>
                <div>
                  <p className="font-medium">Antwortzeit</p>
                  <p className="text-stone-600">In der Regel innerhalb von 24 Stunden</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="card bg-green-50 border border-green-200">
            <h3 className="font-bold text-green-900 mb-2">Check-in / Check-out</h3>
            <ul className="text-sm text-stone-700 space-y-1">
              <li>🕓 Check-in: ab 15:00 Uhr</li>
              <li>🕙 Check-out: bis 10:00 Uhr</li>
              <li>📦 Früherer/späterer Check-in nach Absprache</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
