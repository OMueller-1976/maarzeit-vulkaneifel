import type { Metadata } from "next";
import { getLocale } from 'next-intl/server';
import { generateSeoMetadata } from '@/lib/seo';

const pageTitles: Record<string, string> = {
  de: 'Impressum',
  en: 'Legal Notice',
  nl: 'Colofon',
  fr: 'Mentions légales',
}

const legalNotes: Record<string, string> = {
  en: 'This legal notice is provided in German as required by German law (§ 5 TMG). The German version below is legally binding.',
  nl: 'Deze wettelijke kennisgeving is in het Duits opgesteld zoals vereist door de Duitse wetgeving (§ 5 TMG). De onderstaande Duitse versie is juridisch bindend.',
  fr: 'Cette mention légale est fournie en allemand conformément à la loi allemande (§ 5 TMG). La version allemande ci-dessous est juridiquement contraignante.',
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const titles = {
    de: 'Impressum – MaarZeit Vulkaneifel',
    en: 'Legal Notice – MaarZeit Vulkan Eifel',
    nl: 'Impressum – MaarZeit Vulkaan Eifel',
    fr: 'Mentions Légales – MaarZeit Eifel Volcanique',
  }
  const l = locale as keyof typeof titles
  return generateSeoMetadata('/impressum', locale, titles[l] || titles.de, 'Impressum der Website MaarZeit Vulkaneifel.')
}

export function generateStaticParams() {
  return [
    { locale: 'de' },
    { locale: 'en' },
    { locale: 'nl' },
    { locale: 'fr' },
  ]
}

export default async function ImpressumPage() {
  const locale = await getLocale()

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="section-title">{pageTitles[locale] ?? pageTitles.de}</h1>

      {locale !== 'de' && (
        <p style={{ background: '#F9F8F6', border: '1px solid #E5E5E5', borderRadius: '4px', padding: '0.75rem 1rem', fontSize: '0.875rem', color: '#666', marginBottom: '2rem' }}>
          {legalNotes[locale]}
        </p>
      )}

      <div className="prose prose-stone max-w-none space-y-6 text-stone-700">
        <section>
          <h2 className="text-lg font-bold text-green-900 mb-2">Angaben gemäß § 5 TMG</h2>
          <p>
            Markus Müller<br />
            Am Bruchborn 6<br />
            54570 Kirchweiler<br />
            Kreis Daun, Rheinland-Pfalz, Deutschland
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-green-900 mb-2">Kontakt</h2>
          <p>
            E-Mail:{" "}
            <a
              href="mailto:kontakt@ferienwohnung-in-der-vulkaneifel.de"
              className="text-green-700 hover:underline"
            >
              kontakt@ferienwohnung-in-der-vulkaneifel.de
            </a>
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-green-900 mb-2">Verantwortlich für den Inhalt</h2>
          <p>
            gemäß § 18 Abs. 2 MStV: Markus Müller, Am Bruchborn 6, 54570 Kirchweiler
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-green-900 mb-2">Steuerliche Angaben</h2>
          <p>
            Umsatzsteuer-Identifikationsnummer: [beim Finanzamt Wittlich beantragen]<br />
            Zuständiges Finanzamt: Finanzamt Wittlich<br />
            Steuernummer: 43/222/06079
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-green-900 mb-2">Streitschlichtung</h2>
          <p>
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
            https://ec.europa.eu/consumers/odr. Wir sind nicht bereit oder verpflichtet, an
            Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-green-900 mb-2">Haftung für Inhalte</h2>
          <p>
            Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit,
            Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
            Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten
            nach den allgemeinen Gesetzen verantwortlich.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-green-900 mb-2">Haftung für Links</h2>
          <p>
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen
            Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
            Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
            Seiten verantwortlich.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-green-900 mb-2">Bildnachweis</h2>
          <p>
            Fotografien auf dieser Website stammen aus folgenden Quellen:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
            <li>Weinfelder Maar: © Eifel Tourismus GmbH, D. Ketz</li>
            <li>Wandern in der Vulkaneifel: © Eifel Tourismus GmbH, D. Ketz</li>
            <li>Lauschtour Grüne Hölle: © Eifel Tourismus GmbH</li>
            <li>Wild- & Erlebnispark Daun: © Wild- & Erlebnispark Daun</li>
            <li>Adler- & Wolfspark Kasselburg: © Adler- & Wolfspark Kasselburg</li>
            <li>Ulmener Maar: © Eifel Tourismus GmbH, T. Roth</li>
            <li>Laacher See: © Eifel Tourismus GmbH</li>
            <li>Eigene Aufnahmen: © Markus Müller / MaarZeit Vulkaneifel</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-green-900 mb-2">Hinweis zu KI-generierten Inhalten</h2>
          <p>
            Teile der auf dieser Website veröffentlichten Inhalte – insbesondere
            Reiseführer-Artikel, Ausflugstipps und Ratgeber – wurden mit
            Unterstützung von KI-Systemen (Künstliche Intelligenz) erstellt
            oder überarbeitet. Trotz sorgfältiger Prüfung können diese Inhalte
            Ungenauigkeiten, veraltete Informationen oder Fehler enthalten.
            Angaben zu Öffnungszeiten, Preisen, Entfernungen und
            Veranstaltungen sind ohne Gewähr. Wir empfehlen, wichtige
            Informationen vor Ihrem Besuch direkt beim jeweiligen Anbieter
            zu verifizieren.
          </p>
        </section>
      </div>
    </div>
  );
}
