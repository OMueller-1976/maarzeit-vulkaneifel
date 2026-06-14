import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum der Website MaarZeit Vulkaneifel.",
};

export default function ImpressumPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="section-title">Impressum</h1>

      <div className="prose prose-stone max-w-none space-y-6 text-stone-700">
        <section>
          <h2 className="text-lg font-bold text-green-900 mb-2">Angaben gemäß § 5 TMG</h2>
          <p>
            [Name des Inhabers]<br />
            [Straße und Hausnummer]<br />
            [PLZ] Daun<br />
            Rheinland-Pfalz, Deutschland
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-green-900 mb-2">Kontakt</h2>
          <p>
            E-Mail: <a href="mailto:info@maarzeit-vulkaneifel.de" className="text-green-700 hover:underline">
              info@maarzeit-vulkaneifel.de
            </a>
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-green-900 mb-2">Verantwortlich für den Inhalt</h2>
          <p>gemäß § 18 Abs. 2 MStV: [Name des Inhabers], [Adresse wie oben]</p>
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
      </div>
    </div>
  );
}
