import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Ferienwohnung mit Hund Eifel – Urlaub in der Vulkaneifel',
  description: 'Ferienwohnung mit Hund in der Vulkaneifel. Eigener Eingang, Parkplatz, Garten. Hundefreundliche Wanderwege und Freilinger See mit Hundestrand 45 km entfernt.',
  alternates: { canonical: 'https://ferienwohnung-in-der-vulkaneifel.de/hund' },
};

export default function HundPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="section-title">Urlaub mit Hund</h1>
      <p className="text-stone-600 text-lg mb-10 max-w-2xl leading-relaxed">
        Ihr Vierbeiner ist bei uns herzlich willkommen! Die Vulkaneifel bietet
        mit ihren Wäldern, Seen und weiten Landschaften ein Paradies für
        hundebegeisterte Familien – und MaarZeit macht das Zuhause dabei so
        bequem wie möglich.
      </p>

      <div className="grid md:grid-cols-2 gap-8 mb-14">
        <div className="card">
          <h2 className="text-xl font-bold text-green-900 mb-4">Was wir bieten</h2>
          <ul className="space-y-3 text-stone-700">
            {[
              "Eingezäunter Garten (ca. 200 m²)",
              "Hundekorb & Napf vorhanden",
              "Duschbrause im Außenbereich zum Abspülen",
              "Leinenpflicht-freie Wiese direkt am Haus",
              "Tipps zu hundefreundlichen Wanderwegen",
              "Infos zu tierärztlicher Versorgung in der Umgebung",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-green-600 mt-0.5">🐾</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="card">
          <h2 className="text-xl font-bold text-green-900 mb-4">Konditionen</h2>
          <ul className="space-y-3 text-stone-700 text-sm">
            {[
              "1 Hund inklusive – keine Aufpreis bis 25 kg",
              "2. Hund nach Absprache (+10 €/Nacht)",
              "Hunde bitte nicht auf Möbel",
              "Schäden durch Haustiere sind meldepflichtig",
              "Bitte Tiernachweis (Impfpass) mitbringen",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-green-600 mt-0.5">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-green-900 mb-6">Hunde-Highlights in der Vulkaneifel</h2>
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        {[
          {
            icon: "🌊",
            title: "Schwimmen an den Maaren",
            text: "Am Schalkenmehrener Maar und Gemündener Maar gibt es Abschnitte, wo Hunde ins Wasser dürfen – perfekt für heiße Sommertage.",
          },
          {
            icon: "🌲",
            title: "Waldwanderwege",
            text: "Auf vielen Forstwegen in der Vulkaneifel dürfen Hunde frei laufen. Besonders schön: der Rundweg um den Weinfelder Maar.",
          },
          {
            icon: "🏕️",
            title: "Hundefreundliche Cafés",
            text: "In Daun und Umgebung gibt es mehrere Cafés und Restaurants, die Hunde an der Leine willkommen heißen.",
          },
        ].map((h) => (
          <div key={h.title} className="card">
            <div className="text-4xl mb-3">{h.icon}</div>
            <h3 className="font-bold text-green-900 mb-2">{h.title}</h3>
            <p className="text-stone-600 text-sm leading-relaxed">{h.text}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-4">
        <Link href="/buchung" className="btn-primary">Jetzt buchen</Link>
        <Link href="/guide/wandern" className="btn-secondary">Wanderwege entdecken</Link>
      </div>
    </div>
  );
}
