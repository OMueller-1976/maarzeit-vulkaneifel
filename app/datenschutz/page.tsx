import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: "Datenschutzerklärung der Website MaarZeit Vulkaneifel gemäß DSGVO.",
};

export default function DatenschutzPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="section-title">Datenschutzerklärung</h1>

      <div className="space-y-8 text-stone-700 text-sm leading-relaxed">

        <section>
          <h2 className="text-lg font-bold text-green-900 mb-3">1. Verantwortlicher</h2>
          <p>
            Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:
          </p>
          <p className="mt-2">
            <strong>Markus Müller</strong><br />
            Am Bruchborn 6<br />
            54570 Kirchweiler, Kreis Daun<br />
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
          <h2 className="text-lg font-bold text-green-900 mb-3">2. Hosting (Vercel)</h2>
          <p>
            Diese Website wird gehostet bei Vercel Inc., 440 N Barranca Ave #4133, Covina,
            CA 91723, USA. Wenn Sie unsere Website besuchen, verarbeitet Vercel technisch
            notwendige Serverlogdateien (IP-Adresse, aufgerufene URL, Datum und Uhrzeit des
            Zugriffs, Browsertyp und -version, Betriebssystem). Dies geschieht auf Grundlage
            von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einem sicheren und
            fehlerfreien Betrieb der Website). Die Datenschutzerklärung von Vercel finden Sie
            unter: vercel.com/legal/privacy-policy.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-green-900 mb-3">3. Google Tag Manager</h2>
          <p>
            Diese Website verwendet den Google Tag Manager (GTM) der Google LLC,
            1600 Amphitheatre Parkway, Mountain View, CA 94043, USA. Der Google Tag Manager
            ist ein Tool, das es ermöglicht, Marketing-Tags (Code-Snippets oder Tracking-Pixel)
            über eine Oberfläche zu verwalten und auf der Website einzubinden. Der GTM selbst
            setzt keine Cookies und verarbeitet keine personenbezogenen Daten. Er aktiviert
            lediglich andere Tags, die ihrerseits Daten erfassen können. Der GTM wird erst nach
            Ihrer Einwilligung via Cookie-Banner aktiviert. Rechtsgrundlage: Art. 6 Abs. 1 lit. a
            DSGVO (Einwilligung).
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-green-900 mb-3">4. Google Analytics 4 (GA4)</h2>
          <p>
            Diese Website nutzt Google Analytics 4 (GA4), einen Webanalysedienst der Google LLC,
            1600 Amphitheatre Parkway, Mountain View, CA 94043, USA (nachfolgend „Google").
          </p>
          <p className="mt-2">
            GA4 verwendet Cookies und ähnliche Technologien, um das Nutzerverhalten auf unserer
            Website zu analysieren (z. B. Seitenaufrufe, Verweildauer, Herkunft der Besucher).
            Die dadurch erzeugten Informationen werden in der Regel an einen Server von Google
            in den USA übertragen und dort gespeichert.
          </p>
          <p className="mt-2">
            <strong>Datenübermittlung in die USA:</strong> Google LLC ist in den USA ansässig.
            Die Übermittlung personenbezogener Daten in die USA erfolgt auf Grundlage von
            Standardvertragsklauseln gemäß Art. 46 Abs. 2 lit. c DSGVO, die von der EU-Kommission
            genehmigt wurden.
          </p>
          <p className="mt-2">
            <strong>Auftragsverarbeitung:</strong> Wir haben mit Google einen
            Auftragsverarbeitungsvertrag gemäß Art. 28 DSGVO abgeschlossen. Google verarbeitet
            Ihre Daten ausschließlich in unserem Auftrag und nach unseren Weisungen.
          </p>
          <p className="mt-2">
            <strong>Speicherdauer:</strong> Die Daten werden in GA4 für 14 Monate gespeichert
            und anschließend automatisch gelöscht.
          </p>
          <p className="mt-2">
            <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung). Die
            Einwilligung erfolgt über unseren Cookie-Banner beim ersten Besuch der Website. Sie
            können Ihre Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen (siehe
            Abschnitt 8).
          </p>
          <p className="mt-2">
            <strong>Opt-out:</strong> Sie können die Erfassung durch Google Analytics verhindern,
            indem Sie das Browser-Plugin unter folgendem Link herunterladen und installieren:{" "}
            <a
              href="https://tools.google.com/dlpage/gaoptout"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-700 hover:underline"
            >
              tools.google.com/dlpage/gaoptout
            </a>
            . Alternativ können Sie Ihre Einwilligung über unseren Cookie-Banner jederzeit
            widerrufen.
          </p>
          <p className="mt-2">
            Weitere Informationen zum Datenschutz bei Google finden Sie unter:{" "}
            <span className="text-stone-500">policies.google.com/privacy</span>
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-green-900 mb-3">5. Kontaktformular und E-Mail-Kontakt</h2>
          <p>
            Wenn Sie uns per E-Mail oder über das Kontaktformular kontaktieren, werden die von
            Ihnen angegebenen Daten (Name, E-Mail-Adresse, Nachrichteninhalt, gewünschter
            Buchungszeitraum) ausschließlich zur Bearbeitung Ihrer Anfrage verarbeitet und
            gespeichert. Eine Weitergabe dieser Daten an Dritte findet nicht statt.
          </p>
          <p className="mt-2">
            <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung)
            bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Beantwortung von
            Anfragen). Die Daten werden gelöscht, sobald die Anfrage abschließend bearbeitet ist
            und keine rechtlichen Aufbewahrungspflichten entgegenstehen.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-green-900 mb-3">6. Cookies</h2>
          <p>
            Unsere Website verwendet technisch notwendige Cookies, die für den Betrieb der Website
            erforderlich sind. Darüber hinaus setzen wir – nur nach Ihrer ausdrücklichen Einwilligung
            via Cookie-Banner – Analyse-Cookies (Google Analytics 4) ein. Sie können Ihre
            Einwilligung jederzeit widerrufen oder die Cookie-Einstellungen über den Banner
            anpassen.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-green-900 mb-3">7. Ihre Rechte als betroffene Person</h2>
          <p>Ihnen stehen nach der DSGVO folgende Rechte zu:</p>
          <ul className="mt-2 space-y-1 list-disc pl-5">
            <li><strong>Auskunft</strong> (Art. 15 DSGVO): Sie können Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten verlangen.</li>
            <li><strong>Berichtigung</strong> (Art. 16 DSGVO): Sie haben das Recht, unrichtige Daten berichtigen zu lassen.</li>
            <li><strong>Löschung</strong> (Art. 17 DSGVO): Sie können die Löschung Ihrer Daten verlangen, sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen.</li>
            <li><strong>Einschränkung der Verarbeitung</strong> (Art. 18 DSGVO): Sie können unter bestimmten Voraussetzungen die Einschränkung der Verarbeitung Ihrer Daten verlangen.</li>
            <li><strong>Datenübertragbarkeit</strong> (Art. 20 DSGVO): Sie können die Herausgabe Ihrer Daten in einem strukturierten, maschinenlesbaren Format verlangen.</li>
            <li><strong>Widerspruch</strong> (Art. 21 DSGVO): Sie können der Verarbeitung Ihrer Daten auf Basis von berechtigten Interessen widersprechen.</li>
          </ul>
          <p className="mt-3">
            Um Ihre Rechte geltend zu machen, wenden Sie sich per E-Mail an:{" "}
            <a
              href="mailto:kontakt@ferienwohnung-in-der-vulkaneifel.de"
              className="text-green-700 hover:underline"
            >
              kontakt@ferienwohnung-in-der-vulkaneifel.de
            </a>
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-green-900 mb-3">8. Widerruf Ihrer Einwilligung</h2>
          <p>
            Sofern die Verarbeitung Ihrer personenbezogenen Daten auf einer Einwilligung gemäß
            Art. 6 Abs. 1 lit. a DSGVO beruht (z. B. für Google Analytics 4), haben Sie das Recht,
            diese Einwilligung jederzeit mit Wirkung für die Zukunft zu widerrufen. Den Widerruf
            können Sie über unseren Cookie-Banner erklären (erneuter Aufruf über den Link
            „Cookie-Einstellungen" im Footer) oder uns per E-Mail kontaktieren. Die Rechtmäßigkeit
            der bis zum Widerruf erfolgten Verarbeitung bleibt unberührt.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-green-900 mb-3">9. Beschwerderecht bei der Aufsichtsbehörde</h2>
          <p>
            Sie haben das Recht, sich bei der zuständigen Datenschutz-Aufsichtsbehörde zu beschweren.
            Zuständige Behörde in Rheinland-Pfalz:
          </p>
          <p className="mt-2">
            Der Landesbeauftragte für den Datenschutz und die Informationsfreiheit Rheinland-Pfalz<br />
            Hintere Bleiche 34<br />
            55116 Mainz<br />
            Website: <span className="text-stone-500">datenschutz.rlp.de</span>
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-green-900 mb-3">10. Aktualität dieser Erklärung</h2>
          <p>
            Diese Datenschutzerklärung hat den Stand Juni 2026. Wir behalten uns vor, sie bei
            Änderungen der rechtlichen Grundlagen oder unserer Datenverarbeitungsprozesse
            anzupassen. Die jeweils aktuelle Fassung ist stets auf dieser Seite abrufbar.
          </p>
        </section>

      </div>
    </div>
  );
}
