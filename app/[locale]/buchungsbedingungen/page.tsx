import type { Metadata } from "next";
import { getLocale } from 'next-intl/server';

const metaTitles: Record<string, string> = {
  de: 'Buchungsbedingungen – MaarZeit Vulkaneifel',
  en: 'Booking Terms & Conditions – MaarZeit Vulkan Eifel',
  nl: 'Boekingsvoorwaarden – MaarZeit Vulkaan Eifel',
  fr: 'Conditions de réservation – MaarZeit Eifel Volcanique',
}

const pageTitles: Record<string, string> = {
  de: 'Buchungsbedingungen',
  en: 'Booking Terms & Conditions',
  nl: 'Boekingsvoorwaarden',
  fr: 'Conditions de réservation',
}

const legalNotes: Record<string, string> = {
  en: 'These booking terms and conditions are provided in German as required by German law. The German version below is legally binding.',
  nl: 'Deze boekingsvoorwaarden zijn in het Duits opgesteld zoals vereist door de Duitse wetgeving. De onderstaande Duitse versie is juridisch bindend.',
  fr: 'Ces conditions de réservation sont fournies en allemand conformément à la loi allemande. La version allemande ci-dessous est juridiquement contraignante.',
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  return {
    title: metaTitles[locale] ?? metaTitles.de,
    description: 'Allgemeine Buchungsbedingungen für die Ferienwohnung MaarZeit Vulkaneifel.',
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

export default async function BuchungsbedingungenPage() {
  const locale = await getLocale()

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="section-title">{pageTitles[locale] ?? pageTitles.de}</h1>

      {locale !== 'de' && (
        <p style={{ background: '#F9F8F6', border: '1px solid #E5E5E5', borderRadius: '4px', padding: '0.75rem 1rem', fontSize: '0.875rem', color: '#666', marginBottom: '2rem' }}>
          {legalNotes[locale]}
        </p>
      )}

      <div className="space-y-8 text-stone-700 text-sm leading-relaxed">
        <section>
          <h2 className="text-lg font-bold text-green-900 mb-2">§ 1 Buchungsabschluss</h2>
          <p>
            Der Mietvertrag kommt durch die schriftliche Bestätigung des Vermieters zustande.
            Mit der Anzahlung akzeptiert der Mieter diese Buchungsbedingungen. Die Buchung
            ist personengebunden und nicht übertragbar.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-green-900 mb-2">§ 2 Zahlungsbedingungen</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Anzahlung: 30 % des Gesamtpreises bei Buchungsbestätigung (online via Stripe)</li>
            <li>Restzahlung: vor Ort bei Anreise, auch per Karte möglich</li>
            <li>Kaution: 100 € – wird nach Abreise und Zustandsprüfung zurückgezahlt</li>
            <li>Zahlungsart: Anzahlung online (Kreditkarte, SEPA), Restzahlung vor Ort (Bar oder Karte)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-green-900 mb-2">§ 2a Preisübersicht</h2>
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-stone-200">
                <th className="text-left py-2 font-semibold text-stone-700">Aufenthalt</th>
                <th className="text-left py-2 font-semibold text-stone-700">Preis pro Nacht</th>
                <th className="text-left py-2 font-semibold text-stone-700 hidden sm:table-cell">Hinweis</th>
              </tr>
            </thead>
            <tbody>
              {[
                { dauer: "1 Nacht", preis: "125 €", hinweis: "Spontanurlaub" },
                { dauer: "2–3 Nächte", preis: "95 €", hinweis: "Kurzurlaub & Wochenende" },
                { dauer: "4–7 Nächte", preis: "85 €", hinweis: "Verlängertes Wochenende" },
                { dauer: "Ab 7 Nächten", preis: "75 €", hinweis: "Urlaubswoche" },
              ].map((r) => (
                <tr key={r.dauer} className="border-b border-stone-100">
                  <td className="py-2 text-stone-700">{r.dauer}</td>
                  <td className="py-2 font-medium text-stone-900">{r.preis}</td>
                  <td className="py-2 text-stone-500 hidden sm:table-cell">{r.hinweis}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <ul className="list-disc pl-5 space-y-1 mt-3">
            <li>Endreinigung: 20 € pauschal pro Buchung</li>
            <li>Kaution: 100 € (Rückzahlung nach Abreise und Zustandsprüfung)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-green-900 mb-2">§ 3 Stornierungsbedingungen</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Bis 8 Wochen vor Anreise: kostenfreie Stornierung</li>
            <li>4–8 Wochen vor Anreise: 30 % des Gesamtpreises</li>
            <li>2–4 Wochen vor Anreise: 60 % des Gesamtpreises</li>
            <li>Weniger als 2 Wochen: 90 % des Gesamtpreises</li>
            <li>Wir empfehlen den Abschluss einer Reiserücktrittsversicherung.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-green-900 mb-2">§ 4 An- und Abreise</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Anreise: ab 15:00 Uhr</li>
            <li>Abreise: bis 11:00 Uhr</li>
            <li>Abweichungen nur nach vorheriger Absprache möglich</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-green-900 mb-2">§ 5 Pflichten des Mieters</h2>
          <p>
            Die Unterkunft ist pfleglich zu behandeln. Schäden sind unverzüglich zu melden.
            Rauchen ist in der Wohnung nicht gestattet. Haustiere nur nach vorheriger Absprache
            (1 Hund bis 25 kg inklusive). Die maximale Personenzahl von 3 Personen darf nicht
            überschritten werden. Lärmbelästigung der Nachbarn ist zu unterlassen (Nachtruhe ab 22 Uhr).
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-green-900 mb-2">§ 6 Haftung</h2>
          <p>
            Der Vermieter haftet nicht für Schäden, die durch höhere Gewalt, technische
            Störungen oder Naturereignisse entstehen. Die Haftung des Mieters für Schäden
            an der Unterkunft ist unbeschränkt; diese werden von der Kaution einbehalten
            oder separat in Rechnung gestellt.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-green-900 mb-2">§ 7 Gerichtsstand</h2>
          <p>
            Es gilt deutsches Recht. Gerichtsstand ist, soweit gesetzlich zulässig, der
            Sitz des Vermieters in Rheinland-Pfalz.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-green-900 mb-2">Hinweis zu KI-generierten Inhalten</h2>
          <p>
            Die Reisetipps, Ausflugsbeschreibungen und Informationsartikel
            auf dieser Website wurden teilweise mit Hilfe von
            KI-Systemen erstellt. Sie dienen der allgemeinen Orientierung
            und ersetzen keine offizielle Auskunft. Angaben zu
            Entfernungen, Öffnungszeiten und Preisen können abweichen.
          </p>
        </section>
      </div>
    </div>
  );
}
