import Link from "next/link";
import { getTranslations } from 'next-intl/server';

export default async function Footer() {
  const t = await getTranslations('footer')

  return (
    <footer className="bg-green-900 text-stone-200 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-white font-bold text-lg mb-3">MaarZeit Vulkaneifel</h3>
          <p className="text-sm text-stone-300 leading-relaxed">
            Ihre Ferienwohnung an den Dauner Maaren – mitten im Herzen der Vulkaneifel.
            Natur, Ruhe und Erholung für Wanderer, Radfahrer und Motorradbegeisterte.
          </p>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-3">Navigation</h3>
          <ul className="space-y-1 text-sm">
            {[
              ["/ferienwohnung", "Ferienwohnung"],
              ["/buchung", "Buchung & Preise"],
              ["/hund", "Mit Hund"],
              ["/motorrad", "Motorrad"],
              ["/guide", "Reiseführer"],
              ["/kontakt", "Kontakt"],
            ].map(([href, label]) => (
              <li key={href}>
                <Link href={href} className="hover:text-white transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-3">Rechtliches</h3>
          <ul className="space-y-1 text-sm">
            {[
              ["/impressum", t('imprint')],
              ["/datenschutz", t('privacy')],
              ["/buchungsbedingungen", t('terms')],
            ].map(([href, label]) => (
              <li key={href}>
                <Link href={href} className="hover:text-white transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4 text-sm text-stone-300">
            <p>Markus Müller</p>
            <p>Am Bruchborn 6, 54570 Kirchweiler</p>
            <p>Kreis Daun, Rheinland-Pfalz</p>
            <a
              href="mailto:kontakt@ferienwohnung-in-der-vulkaneifel.de"
              className="hover:text-white transition-colors mt-1 inline-block"
            >
              kontakt@ferienwohnung-in-der-vulkaneifel.de
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-green-800 text-center py-4 text-xs text-stone-400">
        © {new Date().getFullYear()} MaarZeit Vulkaneifel. Alle Rechte vorbehalten.
        <p style={{ fontSize: '0.75rem', color: '#999', marginTop: '0.5rem' }}>
          {t('aiNotice')}
        </p>
      </div>
    </footer>
  );
}
