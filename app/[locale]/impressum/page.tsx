import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum der Website MaarZeit Vulkaneifel.",
};


export function generateStaticParams() {
  return [
    { locale: 'de' },
    { locale: 'en' },
    { locale: 'nl' },
    { locale: 'fr' },
  ]
}

export default function ImpressumPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="section-title">Impressum</h1>

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
