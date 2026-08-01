import type { Metadata } from "next";
import BookingCalendar from "@/components/BookingCalendar";
import { getLocale } from 'next-intl/server';

const metaTitles: Record<string, string> = {
  de: 'Ferienwohnung Vulkaneifel buchen – Preise & Verfügbarkeit',
  en: 'Book Holiday Apartment Vulkan Eifel – Prices & Availability',
  nl: 'Vakantiewoning Vulkaan Eifel Boeken – Prijzen & Beschikbaarheid',
  fr: "Réserver l'Appartement Eifel Volcanique – Prix & Disponibilité",
}

const metaDescriptions: Record<string, string> = {
  de: 'Ferienwohnung in der Vulkaneifel direkt buchen. Ab 75 € pro Nacht, Endreinigung 20 €. Verfügbarkeit prüfen und sicher via Stripe bezahlen.',
  en: 'Book the holiday apartment in the Vulkan Eifel directly. From €75 per night, final cleaning €20. Check availability and pay securely via Stripe.',
  nl: 'Boek de vakantiewoning in de Vulkaan Eifel direct. Vanaf €75 per nacht, eindschoonmaak €20. Controleer beschikbaarheid en betaal veilig via Stripe.',
  fr: "Réservez l'appartement de vacances dans l'Eifel volcanique. À partir de 75 €/nuit, nettoyage final 20 €. Vérifiez la disponibilité et payez en toute sécurité via Stripe.",
}

const translations = {
  de: {
    title: 'Buchung & Verfügbarkeit',
    subtitle: 'Prüfen Sie die Verfügbarkeit direkt im Kalender und buchen Sie Ihren Wunschzeitraum online – sofort und ohne Wartezeit.',
    pricesTitle: 'Preise',
    cols: ['Aufenthaltsdauer', 'Kategorie', 'Preis / Nacht', 'Beispiel'],
    rows: [
      { dauer: '1 Nacht',      note: 'Spontanurlaub',            preis: '125 €', beispiel: '125 € + 20 €' },
      { dauer: '2–3 Nächte',   note: 'Kurzurlaub & Wochenende',  preis: '95 €',  beispiel: '190 € + 20 €' },
      { dauer: '4–7 Nächte',   note: 'Verlängertes Wochenende',  preis: '85 €',  beispiel: '425 € + 20 €' },
      { dauer: 'Ab 7 Nächten', note: 'Urlaubswoche',             preis: '75 €',  beispiel: '525 € + 20 €' },
    ],
    pricesNote: 'Alle Preise inkl. Strom, Heizung und WLAN. Endreinigung 20 € pauschal pro Buchung. Mindestaufenthalt 1 Nacht. Kurtaxe nach Gemeindesatz ggf. separat.',
    stepsTitle: 'So funktioniert die Buchung',
    steps: [
      { step: '1', title: 'Termin wählen',      text: 'Wählen Sie Ihren Wunschzeitraum direkt im Online-Kalender aus.' },
      { step: '2', title: 'Sofortbestätigung',  text: 'Die Verfügbarkeit wird live geprüft – keine Wartezeit auf eine Antwort.' },
      { step: '3', title: 'Anzahlung',          text: 'Mit 30 % Anzahlung über Stripe wird der Termin für Sie reserviert.' },
      { step: '4', title: 'Schlüsselübergabe',  text: 'Restzahlung (70 %) bei Anreise vor Ort möglich – auch per Karte. Dann heißen wir Sie herzlich willkommen!' },
    ],
  },
  en: {
    title: 'Booking & Availability',
    subtitle: 'Check availability directly in the calendar and book your desired dates online – instantly and without waiting.',
    pricesTitle: 'Prices',
    cols: ['Length of Stay', 'Category', 'Price / Night', 'Example'],
    rows: [
      { dauer: '1 Night',       note: 'Spontaneous trip',          preis: '€125', beispiel: '€125 + €20' },
      { dauer: '2–3 Nights',    note: 'Short break & weekend',     preis: '€95',  beispiel: '€190 + €20' },
      { dauer: '4–7 Nights',    note: 'Extended weekend',          preis: '€85',  beispiel: '€425 + €20' },
      { dauer: 'From 7 Nights', note: 'Holiday week',              preis: '€75',  beispiel: '€525 + €20' },
    ],
    pricesNote: 'All prices include electricity, heating and Wi-Fi. Final cleaning €20 flat per booking. Minimum stay 1 night. Tourist tax may apply separately.',
    stepsTitle: 'How Booking Works',
    steps: [
      { step: '1', title: 'Choose dates',          text: 'Select your desired period directly in the online calendar.' },
      { step: '2', title: 'Instant confirmation',  text: 'Availability is checked live – no waiting for a reply.' },
      { step: '3', title: 'Deposit',               text: 'A 30% deposit via Stripe reserves the dates for you.' },
      { step: '4', title: 'Key handover',          text: 'Remaining balance (70%) can be paid on arrival – card accepted too. We look forward to welcoming you!' },
    ],
  },
  nl: {
    title: 'Boeken & Beschikbaarheid',
    subtitle: 'Controleer de beschikbaarheid direct in de kalender en boek uw gewenste periode online – direct en zonder wachten.',
    pricesTitle: 'Prijzen',
    cols: ['Verblijfsduur', 'Categorie', 'Prijs / Nacht', 'Voorbeeld'],
    rows: [
      { dauer: '1 Nacht',         note: 'Spontaan uitje',           preis: '€125', beispiel: '€125 + €20' },
      { dauer: '2–3 Nachten',     note: 'Kort verblijf & weekend',  preis: '€95',  beispiel: '€190 + €20' },
      { dauer: '4–7 Nachten',     note: 'Lang weekend',             preis: '€85',  beispiel: '€425 + €20' },
      { dauer: 'Vanaf 7 Nachten', note: 'Vakantieweek',             preis: '€75',  beispiel: '€525 + €20' },
    ],
    pricesNote: 'Alle prijzen inclusief stroom, verwarming en wifi. Eindschoonmaak €20 per boeking. Minimaal verblijf 1 nacht. Toeristenbelasting eventueel apart.',
    stepsTitle: 'Zo werkt het boeken',
    steps: [
      { step: '1', title: 'Kies uw datum',        text: 'Selecteer uw gewenste periode direct in de online kalender.' },
      { step: '2', title: 'Directe bevestiging',  text: 'Beschikbaarheid wordt live gecontroleerd – geen wachttijd op een antwoord.' },
      { step: '3', title: 'Aanbetaling',          text: 'Met 30% aanbetaling via Stripe wordt de periode voor u gereserveerd.' },
      { step: '4', title: 'Sleuteloverdracht',    text: 'Restbetaling (70%) mogelijk bij aankomst ter plaatse – ook met kaart. Wij heten u van harte welkom!' },
    ],
  },
  fr: {
    title: 'Réservation & Disponibilité',
    subtitle: 'Vérifiez la disponibilité directement dans le calendrier et réservez votre période en ligne – immédiatement et sans attente.',
    pricesTitle: 'Tarifs',
    cols: ['Durée du séjour', 'Catégorie', 'Prix / nuit', 'Exemple'],
    rows: [
      { dauer: '1 nuit',         note: 'Séjour spontané',           preis: '125 €', beispiel: '125 € + 20 €' },
      { dauer: '2–3 nuits',      note: 'Court séjour & week-end',   preis: '95 €',  beispiel: '190 € + 20 €' },
      { dauer: '4–7 nuits',      note: 'Week-end prolongé',         preis: '85 €',  beispiel: '425 € + 20 €' },
      { dauer: 'À partir de 7 nuits', note: 'Semaine de vacances',  preis: '75 €',  beispiel: '525 € + 20 €' },
    ],
    pricesNote: 'Tous les prix incluent électricité, chauffage et Wi-Fi. Nettoyage final 20 € forfaitaire par réservation. Séjour minimum 1 nuit. Taxe de séjour éventuellement en supplément.',
    stepsTitle: 'Comment fonctionne la réservation',
    steps: [
      { step: '1', title: 'Choisir les dates',         text: 'Sélectionnez votre période souhaitée directement dans le calendrier en ligne.' },
      { step: '2', title: 'Confirmation instantanée',  text: 'La disponibilité est vérifiée en direct – pas d\'attente pour une réponse.' },
      { step: '3', title: 'Acompte',                   text: 'Un acompte de 30 % via Stripe réserve les dates pour vous.' },
      { step: '4', title: 'Remise des clés',           text: 'Le solde (70 %) peut être payé sur place à l\'arrivée – carte acceptée. Nous vous souhaitons la bienvenue !' },
    ],
  },
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  return {
    title: metaTitles[locale] ?? metaTitles.de,
    description: metaDescriptions[locale] ?? metaDescriptions.de,
    alternates: { canonical: 'https://www.ferienwohnung-in-der-vulkaneifel.de/buchung' },
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

export default async function BuchungPage() {
  const locale = await getLocale()
  const tr = translations[locale as keyof typeof translations] ?? translations.de

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="section-title">{tr.title}</h1>
      <p className="text-stone-600 mb-10 max-w-2xl leading-relaxed">
        {tr.subtitle}
      </p>

      <BookingCalendar />

      {/* Preistabelle */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-green-900 mb-6">{tr.pricesTitle}</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-green-900 text-white">
                <th className="text-left px-4 py-3">{tr.cols[0]}</th>
                <th className="text-left px-4 py-3">{tr.cols[1]}</th>
                <th className="text-left px-4 py-3">{tr.cols[2]}</th>
                <th className="text-right px-4 py-3">{tr.cols[3]}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200">
              {tr.rows.map((row) => (
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
          {tr.pricesNote}
        </p>
      </div>

      {/* Buchungsablauf */}
      <div className="mt-14">
        <h2 className="text-2xl font-bold text-green-900 mb-6">{tr.stepsTitle}</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {tr.steps.map((s) => (
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
