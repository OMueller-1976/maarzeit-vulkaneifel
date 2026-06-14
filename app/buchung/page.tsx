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
                <th className="text-left px-4 py-3">Aufenthaltsdauer</th>
                <th className="text-left px-4 py-3">Kategorie</th>
                <th className="text-left px-4 py-3">Preis / Nacht</th>
                <th className="text-right px-4 py-3">Beispiel</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200">
              {[
                { dauer: "1 Nacht",       note: "Spontanurlaub",             preis: "125 €", beispiel: "125 € + 20 €" },
                { dauer: "2–3 Nächte",    note: "Kurzurlaub & Wochenende",   preis: "95 €",  beispiel: "190 € + 20 €" },
                { dauer: "4–7 Nächte",    note: "Verlängertes Wochenende",   preis: "85 €",  beispiel: "425 € + 20 €" },
                { dauer: "Ab 7 Nächten",  note: "Urlaubswoche",              preis: "75 €",  beispiel: "525 € + 20 €" },
              ].map((row) => (
                <tr key={row.dauer} className="hover:bg-stone-50">
                  <td className="px-4 py-3 font-medium">{row.dauer}</td>
                  <td className="px-4 py-3 text-stone-500">{row.note}</td>
                  <td className="px-4 py-3 font-bold text-green-800">{row.preis}</td>
                  <td className="px-4 py-3 text-right text-stone-500 text-xs">{row.beispiel}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-stone-500 mt-3">
          Alle Preise inkl. Strom, Heizung und WLAN. Endreinigung 20 € pauschal pro Buchung.
          Mindestaufenthalt 1 Nacht. Kurtaxe nach Gemeindesatz ggf. separat.
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
