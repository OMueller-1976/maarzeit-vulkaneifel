import type { Metadata } from "next";
import Link from "next/link";
import { getLocale } from 'next-intl/server'

const translations = {
  de: {
    meta: { title: 'Vulkaneifel Guide – Maare, Wandern, Ausflüge & Tipps', description: 'Reiseführer für die Vulkaneifel: Dauner Maare, Wanderwege, Radfahren, Ausflugsziele.' },
    hero: { title: 'Reiseführer Vulkaneifel', subtitle: 'Entdecken Sie die schönsten Seiten der Region' },
  },
  en: {
    meta: { title: 'Vulkan Eifel Travel Guide – Lakes, Hiking, Trips & Tips', description: 'Travel guide for the Vulkan Eifel: Daun Lakes, hiking trails, cycling, attractions.' },
    hero: { title: 'Vulkan Eifel Travel Guide', subtitle: 'Discover the Most Beautiful Sides of the Region' },
  },
  nl: {
    meta: { title: 'Vulkaan Eifel Reisgids – Maren, Wandelen, Uitstapjes & Tips', description: 'Reisgids voor de Vulkaan Eifel: Dauner Maren, wandelpaden, fietsen, bezienswaardigheden.' },
    hero: { title: 'Vulkaan Eifel Reisgids', subtitle: 'Ontdek de Mooiste Kanten van de Regio' },
  },
  fr: {
    meta: { title: "Guide de la Vulkaneifel – Lacs, Randonnée, Sorties & Conseils", description: "Guide de voyage pour l'Eifel volcanique: Lacs de Daun, sentiers, vélo, attractions." },
    hero: { title: "Guide de l'Eifel Volcanique", subtitle: 'Découvrez les Plus Beaux Aspects de la Région' },
  },
}

const guides = [
  {
    href: "/guide/dauner-maare",
    icon: "🌊",
    title: "Dauner Maare",
    text: "Die drei Dauner Maare gehören zu den beeindruckendsten Naturdenkmälern Deutschlands. Alles über Entstehung, Zugänge und Sehenswürdigkeiten.",
  },
  {
    href: "/guide/wandern",
    icon: "🥾",
    title: "Wandern",
    text: "Vom Eifelsteig bis zu lokalen Rundwegen – die schönsten Wanderrouten für jedes Fitnesslevel, mit Längen und Startpunkten.",
  },
  {
    href: "/guide/radfahren",
    icon: "🚴",
    title: "Radfahren",
    text: "Traumhafte Radwege durch Wälder und Täler der Eifel. Fahrradverleih, E-Bike-Stationen und die beliebtesten Routen.",
  },
  {
    href: "/guide/ausflugsziele",
    icon: "🗺️",
    title: "Ausflugsziele",
    text: "Burgen, Thermalbäder, Museen und Naturparks in der Umgebung – Empfehlungen für Tagesausflüge mit und ohne Kinder.",
  },
  {
    href: "/guide/schlechtwetter",
    icon: "🌧️",
    title: "Schlechtwetter-Tipps",
    text: "Auch wenn es regnet, muss die gute Stimmung nicht leiden. Unsere besten Alternativen für regnerische Tage in der Eifel.",
  },
  {
    href: "/guide/gerolstein",
    icon: "🏔️",
    title: "Gerolstein",
    text: "Brunnen-Erlebniswelt · Dolomiten · Kurpark · Höhlen – die Brunnenstadt der Vulkaneifel in 20 Minuten erreichbar.",
  },
];


export function generateStaticParams() {
  return [
    { locale: 'de' },
    { locale: 'en' },
    { locale: 'nl' },
    { locale: 'fr' },
  ]
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const tr = translations[locale as keyof typeof translations] ?? translations.de
  return {
    title: tr.meta.title,
    description: tr.meta.description,
    alternates: { canonical: 'https://www.ferienwohnung-in-der-vulkaneifel.de/guide' },
  }
}

export default async function GuidePage() {
  const locale = await getLocale()
  const tr = translations[locale as keyof typeof translations] ?? translations.de

  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="section-title">{tr.hero.title}</h1>
      <p className="text-stone-600 text-lg mb-12 max-w-2xl leading-relaxed">
        Als Gastgeber in der Vulkaneifel kennen wir die Region wie unsere Westentasche.
        Hier teilen wir unsere liebsten Tipps, Routen und Geheimtipps – für den perfekten
        Urlaub an den Dauner Maaren.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {guides.map((g) => (
          <Link
            key={g.href}
            href={g.href}
            className="card hover:shadow-lg transition-shadow border border-stone-100 hover:border-green-200 group"
          >
            <div className="text-5xl mb-4">{g.icon}</div>
            <h2 className="font-bold text-green-900 text-xl mb-2 group-hover:text-green-700 transition-colors">
              {g.title}
            </h2>
            <p className="text-stone-600 text-sm leading-relaxed">{g.text}</p>
            <span className="mt-4 inline-block text-green-700 text-sm font-medium group-hover:underline">
              Mehr erfahren →
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
