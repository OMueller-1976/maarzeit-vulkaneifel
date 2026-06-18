import type { Metadata } from "next";
import Link from "next/link";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: 'Ferienwohnung Vulkaneifel bei Daun – Hund, Motorrad & Wandern',
  description: 'Moderne 35 qm Ferienwohnung in der Vulkaneifel. Separater Eingang, Parkplatz, Terrasse, Hund willkommen. Direkt buchen ab 75 € pro Nacht.',
  alternates: { canonical: 'https://www.ferienwohnung-in-der-vulkaneifel.de' },
};

const highlights = [
  {
    icon: "🌋",
    title: "Vulkanische Landschaft",
    text: "Einmalige Maare und Vulkankegel direkt vor der Haustür – ein Naturwunder der Eifel.",
  },
  {
    icon: "🥾",
    title: "Wanderparadies",
    text: "Traumhafte Wanderwege wie der Eifelsteig führen durch Wälder, Maare und stille Täler.",
  },
  {
    icon: "🏍️",
    title: "Motorradregion",
    text: "Kurvenreiche Strecken durch die Eifellandschaft machen die Region zum Biker-Paradies.",
  },
  {
    icon: "🐕",
    title: "Hunde willkommen",
    text: "Ihr Vierbeiner ist bei uns herzlich willkommen – mit eingezäuntem Garten und Auslaufwiese.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-green-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600')] bg-cover bg-center" />
        <div className="relative max-w-5xl mx-auto px-4 py-28 text-center">
          <p className="text-green-300 uppercase tracking-widest text-sm mb-4 font-medium">
            Ferienwohnung · Vulkaneifel · Dauner Maare
          </p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            MaarZeit<br />
            <span className="text-green-300">Vulkaneifel</span>
          </h1>
          <p className="text-lg md:text-xl text-stone-200 max-w-2xl mx-auto mb-10 leading-relaxed">
            Ihre Ferienwohnung direkt an den Dauner Maaren – für Natur, Stille und unvergessliche
            Erlebnisse in einer der schönsten Landschaften Deutschlands.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/buchung" className="btn-primary text-lg px-8 py-4">
              Verfügbarkeit prüfen
            </Link>
            <Link
              href="/ferienwohnung"
              className="border border-white text-white px-8 py-4 rounded hover:bg-white hover:text-green-900 transition-colors text-lg"
            >
              Die Wohnung ansehen
            </Link>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="section-title text-center">Warum MaarZeit?</h2>
        <p className="text-center text-stone-600 mb-12 max-w-2xl mx-auto">
          Die Vulkaneifel ist eine der naturreichsten Regionen Deutschlands – und MaarZeit
          liegt mittendrin.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((h) => (
            <div key={h.title} className="card text-center hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">{h.icon}</div>
              <h3 className="font-bold text-green-900 text-lg mb-2">{h.title}</h3>
              <p className="text-stone-600 text-sm leading-relaxed">{h.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Wohnung Preview */}
      <section className="bg-green-50 py-20">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-title">Die Ferienwohnung</h2>
            <p className="text-stone-600 mb-4 leading-relaxed">
              Ruhig gelegen in der Vulkaneifel bietet unsere Ferienwohnung auf 35 qm
              alles, was Sie für einen erholsamen Urlaub brauchen: modernes Wohnambiente
              (Neubau 2023), voll ausgestattete Küche, gemütliches Schlafzimmer und eine
              sonnige Terrasse mit Gartenmöbeln.
            </p>
            <ul className="text-stone-700 space-y-2 mb-6 text-sm">
              {[
                "35 qm für bis zu 3 Personen",
                "Küchenzeile mit Spülmaschine",
                "Terrasse & Garten mit Feuerschale",
                "Eigener Parkplatz",
                "WLAN & TV (Sky & Amazon Prime)",
                "Hunde willkommen",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="text-green-700 font-bold">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/ferienwohnung" className="btn-primary">
              Alle Details
            </Link>
          </div>
          <div style={{ borderRadius: '10px', overflow: 'hidden', height: '320px' }}>
            <img
              src="/garten-feuerschale.jpeg"
              alt="Garten mit Feuerschale der Ferienwohnung MaarZeit Vulkaneifel"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
        </div>
      </section>

      {/* Preise Teaser */}
      <section className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h2 className="section-title">Preise & Verfügbarkeit</h2>
        <p className="text-stone-600 mb-8">
          Ab <strong className="text-green-800 text-2xl">75 €</strong> pro Nacht –
          zzgl. 20 € Endreinigung pro Buchung.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
          {[
            { label: "Spontanurlaub",            detail: "1 Nacht",       price: "125 €", featured: false },
            { label: "Kurzurlaub & Wochenende",  detail: "2–3 Nächte",    price: "95 €",  featured: true  },
            { label: "Verlängertes Wochenende",  detail: "4–7 Nächte",    price: "85 €",  featured: false },
            { label: "Urlaubswoche",             detail: "Ab 7 Nächten",  price: "75 €",  featured: false },
          ].map((p) => (
            <div
              key={p.label}
              className={`card border ${p.featured ? "border-2 border-green-900" : "border-green-100"}`}
            >
              <p className={`text-xs uppercase tracking-widest mb-2 ${p.featured ? "" : "text-stone-400"}`}
                style={{ color: p.featured ? '#1A1A1A' : undefined }}>
                {p.detail}
              </p>
              <p className={`font-bold text-2xl mb-1 ${p.featured ? "" : "text-green-800"}`}
                style={{ color: p.featured ? '#1A1A1A' : undefined }}>
                {p.price}
              </p>
              <p className={`text-xs ${p.featured ? "" : "text-stone-500"}`}
                style={{ color: p.featured ? '#666' : undefined }}>
                {p.label}
              </p>
            </div>
          ))}
        </div>
        <p className="text-center mb-8" style={{ color: "#888", fontSize: "0.78rem" }}>
          Endreinigung 20 € pauschal pro Buchung · Mindestaufenthalt 1 Nacht
        </p>
        <Link href="/buchung" className="btn-primary text-lg px-8 py-4">
          Jetzt Termin prüfen & buchen
        </Link>
      </section>

      <FAQ />

      {/* Guide Teaser */}
      <section className="bg-stone-100 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="section-title text-center">Reiseführer Vulkaneifel</h2>
          <p className="text-center text-stone-600 mb-10 max-w-2xl mx-auto">
            Entdecken Sie die besten Tipps für Wanderungen, Radtouren, Ausflugsziele und mehr –
            zusammengestellt von Einheimischen für unsere Gäste.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { href: "/guide/dauner-maare", icon: "🌊", label: "Dauner Maare" },
              { href: "/guide/wandern", icon: "🥾", label: "Wandern" },
              { href: "/guide/radfahren", icon: "🚴", label: "Radfahren" },
              { href: "/guide/ausflugsziele", icon: "🗺️", label: "Ausflugsziele" },
              { href: "/guide/schlechtwetter", icon: "🌧️", label: "Schlechtwetter" },
            ].map((g) => (
              <Link
                key={g.href}
                href={g.href}
                className="card text-center hover:shadow-lg transition-shadow hover:border-green-200 border border-transparent"
              >
                <div className="text-4xl mb-2">{g.icon}</div>
                <p className="font-medium text-green-900 text-sm">{g.label}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
