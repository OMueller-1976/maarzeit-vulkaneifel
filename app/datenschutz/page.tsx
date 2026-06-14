import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: "Datenschutzerklärung der Website MaarZeit Vulkaneifel.",
};

export default function DatenschutzPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="section-title">Datenschutzerklärung</h1>

      <div className="space-y-8 text-stone-700 text-sm leading-relaxed">
        <section>
          <h2 className="text-lg font-bold text-green-900 mb-2">1. Datenschutz auf einen Blick</h2>
          <p>
            Diese Website erhebt keine personenbezogenen Daten automatisch. Es werden keine
            Tracking-Tools, Cookies von Drittanbietern oder Analyse-Dienste eingesetzt.
            Kontaktanfragen erfolgen per E-Mail und werden ausschließlich zur Bearbeitung
            Ihrer Anfrage verwendet.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-green-900 mb-2">2. Verantwortlicher</h2>
          <p>
            Verantwortlich für die Datenverarbeitung auf dieser Website ist der Inhaber
            der Ferienwohnung MaarZeit Vulkaneifel (Kontaktdaten siehe Impressum).
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-green-900 mb-2">3. Erhobene Daten</h2>
          <p>
            Wenn Sie uns per E-Mail kontaktieren, werden Ihre übermittelten Daten
            (Name, E-Mail-Adresse, Nachrichteninhalt) ausschließlich zur Bearbeitung
            Ihrer Anfrage gespeichert und verwendet. Eine Weitergabe an Dritte findet
            nicht statt.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-green-900 mb-2">4. Hosting</h2>
          <p>
            Diese Website wird über Vercel Inc. (440 N Barranca Ave #4133, Covina, CA 91723, USA)
            gehostet. Dabei werden technisch notwendige Server-Logs (IP-Adresse, Zeitstempel,
            aufgerufene Seite) gemäß den Datenschutzbestimmungen von Vercel verarbeitet.
            Weitere Informationen: vercel.com/legal/privacy-policy.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-green-900 mb-2">5. Ihre Rechte</h2>
          <p>
            Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung
            der Verarbeitung Ihrer personenbezogenen Daten sowie das Recht auf
            Datenübertragbarkeit. Wenden Sie sich dazu per E-Mail an uns (siehe Impressum).
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-green-900 mb-2">6. Beschwerderecht</h2>
          <p>
            Sie haben das Recht, sich bei der zuständigen Datenschutzbehörde zu beschweren.
            Zuständige Aufsichtsbehörde in Rheinland-Pfalz:
            Der Landesbeauftragte für den Datenschutz und die Informationsfreiheit Rheinland-Pfalz,
            Hintere Bleiche 34, 55116 Mainz.
          </p>
        </section>
      </div>
    </div>
  );
}
