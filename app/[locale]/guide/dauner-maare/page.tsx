import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Dauner Maare – Gemündener, Schalkenmehrener & Weinfelder Maar',
  description: 'Die Dauner Maare: Baden, Wandern und Natur in der Vulkaneifel. Gemündener, Schalkenmehrener und Weinfelder Maar – ca. 15 km entfernt (19 Min. per Auto) von unserer Ferienwohnung.',
  alternates: { canonical: 'https://www.ferienwohnung-in-der-vulkaneifel.de/guide/dauner-maare' },
};


export function generateStaticParams() {
  return [
    { locale: 'de' },
    { locale: 'en' },
    { locale: 'nl' },
    { locale: 'fr' },
  ]
}

export default function DaunerMaarePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <nav className="text-sm text-stone-500 mb-6">
        <Link href="/guide" className="hover:text-green-800">Reiseführer</Link>
        {" › "}
        <span>Dauner Maare</span>
      </nav>

      <h1 className="section-title">Dauner Maare</h1>
      <p className="text-stone-600 text-lg mb-10 max-w-2xl leading-relaxed">
        Die drei Dauner Maare – Schalkenmehrener Maar, Gemündener Maar und Weinfelder Maar –
        sind das Herzstück der Vulkaneifel und gehören zu den schönsten Naturdenkmälern
        Deutschlands. Sie entstanden vor etwa 20.000 bis 30.000 Jahren durch gewaltige
        Vulkanausbrüche.
      </p>

      {/* Die drei Maare */}
      <h2 className="text-2xl font-bold text-green-900 mb-6">Die drei Maare im Überblick</h2>
      <div className="space-y-6 mb-14">
        {[
          {
            name: "Schalkenmehrener Maar",
            tiefe: "22 m",
            umfang: "ca. 3 km",
            info: "Das größte und bekannteste der drei Maare. Im Sommer Badesee, im Winter bei Frost Eislaufparadies. Direkt an MaarZeit gelegen – in 10 Minuten zu Fuß erreichbar.",
            besonderheit: "Bademöglichkeit (Strand), Paddelboote, Strandbistro",
          },
          {
            name: "Gemündener Maar",
            tiefe: "38 m",
            umfang: "ca. 2,5 km",
            info: "Das tiefste und wildeste der Dauner Maare. Naturschutzgebiet, kein Baden erlaubt. Dafür herrliche Vogelbeoachtung und stille Wanderwege.",
            besonderheit: "Naturschutzgebiet, Vogelbeobachtung, Angelparadies",
          },
          {
            name: "Weinfelder Maar",
            tiefe: "51 m",
            umfang: "ca. 2 km",
            info: "Das tiefste Maar mit der mystischsten Atmosphäre – auch 'Totenmaar' genannt. Am Rand steht die mittelalterliche Kapelle St. Thomas, ein einzigartiges Bild.",
            besonderheit: "Kapelle St. Thomas, tiefste Stelle aller Eifelmaare",
          },
        ].map((maar) => (
          <div key={maar.name} className="card border border-green-100">
            <h3 className="text-xl font-bold text-green-900 mb-2">{maar.name}</h3>
            <div className="flex gap-4 text-sm text-stone-500 mb-3">
              <span>Tiefe: <strong className="text-stone-700">{maar.tiefe}</strong></span>
              <span>Umfang: <strong className="text-stone-700">{maar.umfang}</strong></span>
            </div>
            <p className="text-stone-600 mb-3 leading-relaxed">{maar.info}</p>
            <p className="text-sm text-green-700 font-medium">✦ {maar.besonderheit}</p>
          </div>
        ))}
      </div>

      {/* Praktisches */}
      <h2 className="text-2xl font-bold text-green-900 mb-4">Praktische Infos</h2>
      <div className="grid md:grid-cols-2 gap-6 mb-10">
        <div className="card">
          <h3 className="font-bold text-green-800 mb-3">Anfahrt & Parken</h3>
          <ul className="text-sm text-stone-700 space-y-1.5">
            <li>🅿️ Parkplatz am Schalkenmehrener Maar (kostenpflichtig, Sommer)</li>
            <li>🅿️ Großer Wanderparkplatz Gemündener Maar (kostenlos)</li>
            <li>🚶 Von MaarZeit zum Schalkenmehrener Maar: 10 Min. zu Fuß</li>
            <li>🚴 Mit dem Fahrrad alle drei Maare in einer Runde (ca. 12 km)</li>
          </ul>
        </div>
        <div className="card">
          <h3 className="font-bold text-green-800 mb-3">Beste Reisezeit</h3>
          <ul className="text-sm text-stone-700 space-y-1.5">
            <li>🌸 Frühling: Ruhige Wanderwege, blühende Ufer</li>
            <li>☀️ Sommer: Baden am Schalkenmehrener Maar</li>
            <li>🍂 Herbst: Spektakuläres Morgennebel-Panorama</li>
            <li>❄️ Winter: Eislaufen bei Frost, stimmungsvolle Stille</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-wrap gap-4">
        <Link href="/guide/wandern" className="btn-primary">Wanderwege rund um die Maare</Link>
        <Link href="/buchung" className="btn-secondary">Jetzt buchen</Link>
      </div>
    </div>
  );
}
