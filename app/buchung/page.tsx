import type { Metadata } from "next";
import BookingCalendar from "@/components/BookingCalendar";

export const metadata: Metadata = {
  title: "Buchung & Verfügbarkeit",
  description:
    "Verfügbarkeit prüfen und Ferienwohnung MaarZeit Vulkaneifel buchen. Ab 95 € pro Nacht, Mindestaufenthalt 2 Nächte.",
};

export default function BuchungPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="section-title">Buchung & Verfügbarkeit</h1>
      <p className="text-stone-600 mb-10 max-w-2xl leading-relaxed">
        Prüfen Sie die Verfügbarkeit direkt im Kalender und senden Sie uns Ihre Anfrage.
        Wir bestätigen in der Regel innerhalb von 24 Stunden.
      </p>

      <BookingCalendar />

      {/* Preistabelle */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-green-900 mb-6">Preise</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-green-900 text-white">
                <th className="text-left px-4 py-3">Saison</th>
                <th className="text-left px-4 py-3">Zeitraum</th>
                <th className="text-right px-4 py-3">Preis / Nacht</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200">
              {[
                { saison: "Nebensaison", zeitraum: "Jan–März, Nov–Dez", preis: "75 €" },
                { saison: "Vorsaison", zeitraum: "Apr–Mai, Okt", preis: "85 €" },
                { saison: "Hauptsaison", zeitraum: "Jun–Sep", preis: "95 €" },
                { saison: "Feiertage & Silvester", zeitraum: "nach Anfrage", preis: "105 €" },
              ].map((row) => (
                <tr key={row.saison} className="hover:bg-stone-50">
                  <td className="px-4 py-3 font-medium">{row.saison}</td>
                  <td className="px-4 py-3 text-stone-600">{row.zeitraum}</td>
                  <td className="px-4 py-3 text-right font-bold text-green-800">{row.preis}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-stone-500 mt-3">
          Alle Preise inkl. Strom, Heizung, WLAN und Endreinigung. Mindestaufenthalt 2 Nächte.
          Kurtaxe (Daun) nach Gemeindesatz ggf. separat.
        </p>
      </div>

      {/* Buchungsablauf */}
      <div className="mt-14">
        <h2 className="text-2xl font-bold text-green-900 mb-6">So funktioniert die Buchung</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { step: "1", title: "Anfrage senden", text: "Wählen Sie Ihren Wunschzeitraum und senden Sie uns per Kalender oder E-Mail eine Anfrage." },
            { step: "2", title: "Bestätigung", text: "Wir bestätigen die Verfügbarkeit und senden Ihnen ein verbindliches Angebot." },
            { step: "3", title: "Anzahlung", text: "Mit 30 % Anzahlung wird der Termin für Sie reserviert." },
            { step: "4", title: "Schlüsselübergabe", text: "Restzahlung 4 Wochen vor Anreise – dann heißen wir Sie herzlich willkommen!" },
          ].map((s) => (
            <div key={s.step} className="text-center">
              <div className="w-12 h-12 rounded-full bg-green-800 text-white font-bold text-lg flex items-center justify-center mx-auto mb-3">
                {s.step}
              </div>
              <h3 className="font-bold text-green-900 mb-2">{s.title}</h3>
              <p className="text-stone-600 text-sm leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
