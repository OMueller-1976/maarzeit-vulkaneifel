import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Schlechtwetter-Tipps Vulkaneifel",
  description:
    "Was tun bei Regen in der Vulkaneifel? Museen, Thermalbäder, gemütliche Cafés und Indoor-Aktivitäten für Regentage.",
};

export default function SchlechtwetterPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <nav className="text-sm text-stone-500 mb-6">
        <Link href="/guide" className="hover:text-green-800">Reiseführer</Link>
        {" › "}
        <span>Schlechtwetter</span>
      </nav>

      <h1 className="section-title">Schlechtwetter? Kein Problem!</h1>
      <p className="text-stone-600 text-lg mb-10 max-w-2xl leading-relaxed">
        Regen in der Eifel gehört manchmal dazu – aber er muss die Stimmung nicht
        verderben. Hier sind unsere besten Tipps für gemütliche und erlebnisreiche
        Regentage in der Region.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {[
          {
            icon: "🏛️",
            title: "Vulkaneifel-Museum Daun",
            text: "Das faszinierende Museum zeigt die Entstehung der Vulkanlandschaft, Fossilien und historische Funde. Pflichtprogramm für Neugierige – und trocken!",
            entfernung: "5 km",
          },
          {
            icon: "♨️",
            title: "Strohner Märchen-Badesee",
            text: "Der Freizeitsee Strohn hat auch bei bewölktem Himmel seinen Charme. Das angrenzende Freizeitbad ist ganzjährig geöffnet.",
            entfernung: "8 km",
          },
          {
            icon: "🏰",
            title: "Schloss Bürresheim",
            text: "Das besterhaltene Schloss der Eifel – nie zerstört, mit originalem Inventar aus Jahrhunderten. Geführte Touren täglich.",
            entfernung: "25 km",
          },
          {
            icon: "🍺",
            title: "Brauerei-Führung Gerolstein",
            text: "Die Gerolsteiner Brunnenbetriebe und lokale Brauereien bieten Führungen an – mit Verkostung am Ende.",
            entfernung: "15 km",
          },
          {
            icon: "📚",
            title: "Gemütlich in der Wohnung",
            text: "Büchersammlung, Brettspiele und ein Kamin in der Wohnung warten auf Sie. Manchmal ist ein Regentag der beste Erholungstag.",
            entfernung: "0 km",
          },
          {
            icon: "🎨",
            title: "Töpferei-Workshop Daun",
            text: "In der lokalen Töpferei können Sie an kreativen Workshops teilnehmen – ein schönes Erlebnis auch für Kinder.",
            entfernung: "5 km",
          },
        ].map((item) => (
          <div key={item.title} className="card border border-stone-100 hover:border-green-200 transition-colors">
            <div className="flex items-start gap-3">
              <div className="text-3xl">{item.icon}</div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-bold text-green-900">{item.title}</h3>
                  {item.entfernung !== "0 km" && (
                    <span className="text-xs text-stone-400">{item.entfernung}</span>
                  )}
                </div>
                <p className="text-stone-600 text-sm leading-relaxed">{item.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="card bg-green-50 border border-green-200 mb-10">
        <h3 className="font-bold text-green-900 mb-3">Unser Geheimtipp für Regentage</h3>
        <p className="text-stone-700 leading-relaxed">
          Fahren Sie nach <strong>Cochem an der Mosel</strong> (40 km): Reichsburg, verwinkelte
          Altstadt und gemütliche Weinlokale – Regen stört hier kaum, denn es gibt immer
          eine trockene Ecke mit Blick auf das Moseltal.
        </p>
      </div>

      <div className="flex flex-wrap gap-4">
        <Link href="/guide/ausflugsziele" className="btn-primary">Alle Ausflugsziele</Link>
        <Link href="/buchung" className="btn-secondary">Urlaub buchen</Link>
      </div>
    </div>
  );
}
