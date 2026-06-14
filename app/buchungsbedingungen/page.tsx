import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Buchungsbedingungen",
  description: "Allgemeine Buchungsbedingungen für die Ferienwohnung MaarZeit Vulkaneifel.",
};

export default function BuchungsbedingungenPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="section-title">Buchungsbedingungen</h1>

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
            <li>Anzahlung: 30 % des Gesamtpreises bei Buchungsbestätigung</li>
            <li>Restzahlung: 4 Wochen vor Anreise</li>
            <li>Kaution: 200 € – wird nach Abreise und Zustandsprüfung zurückgezahlt</li>
            <li>Zahlungsart: Überweisung auf das angegebene Konto</li>
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
            <li>Abreise: bis 10:00 Uhr</li>
            <li>Abweichungen nur nach vorheriger Absprache möglich</li>
            <li>Mindestaufenthalt: 2 Nächte</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-green-900 mb-2">§ 5 Pflichten des Mieters</h2>
          <p>
            Die Unterkunft ist pfleglich zu behandeln. Schäden sind unverzüglich zu melden.
            Rauchen ist in der Wohnung nicht gestattet. Haustiere nur nach vorheriger Absprache
            (1 Hund bis 25 kg inklusive). Die maximale Personenzahl von 4 Personen darf nicht
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
      </div>
    </div>
  );
}
