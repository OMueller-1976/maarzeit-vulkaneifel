import type { Metadata } from "next";
import Link from "next/link";
import { getLocale } from 'next-intl/server'
import { generateSeoMetadata } from '@/lib/seo';

const translations = {
  de: {
    meta: { title: 'Vulkaneifel Guide – Maare, Wandern, Ausflüge & Tipps', description: 'Reiseführer für die Vulkaneifel: Dauner Maare, Wanderwege, Radfahren, Ausflugsziele.' },
    hero: { title: 'Reiseführer Vulkaneifel', subtitle: 'Entdecken Sie die schönsten Seiten der Region' },
    intro: 'Als Gastgeber in der Vulkaneifel kennen wir die Region wie unsere Westentasche. Hier teilen wir unsere liebsten Tipps, Routen und Geheimtipps – für den perfekten Urlaub an den Dauner Maaren.',
    learnMore: 'Mehr erfahren →',
    guides: [
      { href: '/guide/dauner-maare', icon: '🌊', title: 'Dauner Maare', text: 'Die drei Dauner Maare gehören zu den beeindruckendsten Naturdenkmälern Deutschlands. Alles über Entstehung, Zugänge und Sehenswürdigkeiten.' },
      { href: '/guide/wandern', icon: '🥾', title: 'Wandern', text: 'Vom Eifelsteig bis zu lokalen Rundwegen – die schönsten Wanderrouten für jedes Fitnesslevel, mit Längen und Startpunkten.' },
      { href: '/guide/radfahren', icon: '🚴', title: 'Radfahren', text: 'Traumhafte Radwege durch Wälder und Täler der Eifel. Fahrradverleih, E-Bike-Stationen und die beliebtesten Routen.' },
      { href: '/guide/ausflugsziele', icon: '🗺️', title: 'Ausflugsziele', text: 'Burgen, Thermalbäder, Museen und Naturparks in der Umgebung – Empfehlungen für Tagesausflüge mit und ohne Kinder.' },
      { href: '/guide/schlechtwetter', icon: '🌧️', title: 'Schlechtwetter-Tipps', text: 'Auch wenn es regnet, muss die gute Stimmung nicht leiden. Unsere besten Alternativen für regnerische Tage in der Eifel.' },
      { href: '/guide/gerolstein', icon: '🏔️', title: 'Gerolstein', text: 'Brunnen-Erlebniswelt · Dolomiten · Kurpark · Höhlen – die Brunnenstadt der Vulkaneifel in 20 Minuten erreichbar.' },
    ],
  },
  en: {
    meta: { title: 'Vulkan Eifel Travel Guide – Lakes, Hiking, Trips & Tips', description: 'Travel guide for the Vulkan Eifel: Daun Lakes, hiking trails, cycling, attractions.' },
    hero: { title: 'Vulkan Eifel Travel Guide', subtitle: 'Discover the Most Beautiful Sides of the Region' },
    intro: 'As hosts in the Vulkan Eifel, we know the region like the back of our hand. Here we share our favourite tips, routes and insider secrets – for the perfect holiday at the Daun Maare.',
    learnMore: 'Learn more →',
    guides: [
      { href: '/guide/dauner-maare', icon: '🌊', title: 'Daun Maare', text: 'The three Daun Maare are among Germany\'s most impressive natural monuments. Everything about their origin, access and attractions.' },
      { href: '/guide/wandern', icon: '🥾', title: 'Hiking', text: 'From the Eifelsteig to local circular routes – the finest hiking trails for every fitness level, with distances and starting points.' },
      { href: '/guide/radfahren', icon: '🚴', title: 'Cycling', text: 'Wonderful cycle paths through the Eifel\'s forests and valleys. Bike hire, e-bike stations and the most popular routes.' },
      { href: '/guide/ausflugsziele', icon: '🗺️', title: 'Excursions', text: 'Castles, thermal baths, museums and nature parks nearby – recommendations for day trips with and without children.' },
      { href: '/guide/schlechtwetter', icon: '🌧️', title: 'Rainy Day Tips', text: 'Even when it rains, the mood needn\'t suffer. Our best alternatives for wet days in the Eifel.' },
      { href: '/guide/gerolstein', icon: '🏔️', title: 'Gerolstein', text: 'Spring experience world · Dolomites · Spa park · Caves – the mineral water town of the Vulkan Eifel, 20 minutes away.' },
    ],
  },
  nl: {
    meta: { title: 'Vulkaan Eifel Reisgids – Maren, Wandelen, Uitstapjes & Tips', description: 'Reisgids voor de Vulkaan Eifel: Dauner Maren, wandelpaden, fietsen, bezienswaardigheden.' },
    hero: { title: 'Vulkaan Eifel Reisgids', subtitle: 'Ontdek de Mooiste Kanten van de Regio' },
    intro: 'Als gastheren in de Vulkaan Eifel kennen we de regio als onze broekzak. Hier delen we onze favoriete tips, routes en insidergeheimen – voor de perfecte vakantie bij de Dauner Maren.',
    learnMore: 'Meer lezen →',
    guides: [
      { href: '/guide/dauner-maare', icon: '🌊', title: 'Dauner Maren', text: 'De drie Dauner Maren behoren tot de meest indrukwekkende natuurmonumenten van Duitsland. Alles over hun ontstaan, toegang en bezienswaardigheden.' },
      { href: '/guide/wandern', icon: '🥾', title: 'Wandelen', text: 'Van de Eifelsteig tot lokale rondwandelingen – de mooiste wandelroutes voor elk fitnessniveau, met afstanden en vertrekpunten.' },
      { href: '/guide/radfahren', icon: '🚴', title: 'Fietsen', text: 'Prachtige fietspaden door de bossen en dalen van de Eifel. Fietsenverhuur, e-bikestations en de populairste routes.' },
      { href: '/guide/ausflugsziele', icon: '🗺️', title: 'Uitstapjes', text: 'Kastelen, thermen, musea en natuurparken in de omgeving – aanbevelingen voor daguitstapjes met en zonder kinderen.' },
      { href: '/guide/schlechtwetter', icon: '🌧️', title: 'Slechtweer Tips', text: 'Ook als het regent hoeft de stemming er niet onder te lijden. Onze beste alternatieven voor regenachtige dagen in de Eifel.' },
      { href: '/guide/gerolstein', icon: '🏔️', title: 'Gerolstein', text: 'Bronnenwereld · Dolomieten · Kurpark · Grotten – de bronstad van de Vulkaan Eifel, 20 minuten rijden.' },
    ],
  },
  fr: {
    meta: { title: "Guide de la Vulkaneifel – Lacs, Randonnée, Sorties & Conseils", description: "Guide de voyage pour l'Eifel volcanique: Lacs de Daun, sentiers, vélo, attractions." },
    hero: { title: "Guide de l'Eifel Volcanique", subtitle: 'Découvrez les Plus Beaux Aspects de la Région' },
    intro: "En tant qu'hôtes dans l'Eifel volcanique, nous connaissons la région comme notre poche. Nous partageons ici nos conseils, itinéraires et secrets d'initiés – pour des vacances parfaites aux Dauner Maare.",
    learnMore: 'En savoir plus →',
    guides: [
      { href: '/guide/dauner-maare', icon: '🌊', title: 'Dauner Maare', text: "Les trois Dauner Maare comptent parmi les monuments naturels les plus impressionnants d'Allemagne. Tout sur leur formation, accès et attractions." },
      { href: '/guide/wandern', icon: '🥾', title: 'Randonnée', text: "De l'Eifelsteig aux circuits locaux – les plus beaux sentiers pour tous les niveaux, avec distances et points de départ." },
      { href: '/guide/radfahren', icon: '🚴', title: 'Vélo', text: "De magnifiques pistes cyclables à travers les forêts et vallées de l'Eifel. Location de vélos, stations e-bike et itinéraires populaires." },
      { href: '/guide/ausflugsziele', icon: '🗺️', title: 'Excursions', text: "Châteaux, thermes, musées et parcs naturels à proximité – recommandations pour des excursions à la journée avec et sans enfants." },
      { href: '/guide/schlechtwetter', icon: '🌧️', title: 'Jours de Pluie', text: "Même quand il pleut, l'humeur n'a pas à en souffrir. Nos meilleures alternatives pour les jours pluvieux dans l'Eifel." },
      { href: '/guide/gerolstein', icon: '🏔️', title: 'Gerolstein', text: "Monde de la source · Dolomites · Parc thermal · Grottes – la ville des eaux de l'Eifel volcanique, à 20 minutes." },
    ],
  },
}

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
  const titles = {
    'de': 'Vulkaneifel Guide – Maare, Wandern, Ausflüge & Tipps',
    'en': 'Vulkan Eifel Travel Guide – Lakes, Hiking, Trips & Tips',
    'nl': 'Vulkaan Eifel Reisgids – Maren, Wandelen, Uitstapjes & Tips',
    'fr': 'Guide de l\'Eifel Volcanique – Lacs, Randonnée, Sorties & Conseils',
  }
  const descs = {
    'de': 'Reiseführer für die Vulkaneifel: Dauner Maare, Wanderwege, Radfahren, Ausflugsziele.',
    'en': 'Travel guide for the Vulkan Eifel: Daun Lakes, hiking trails, cycling, attractions.',
    'nl': 'Reisgids voor de Vulkaan Eifel: Dauner Maren, wandelpaden, fietsen, bezienswaardigheden.',
    'fr': 'Guide de voyage pour l\'Eifel volcanique: Lacs de Daun, sentiers, vélo, attractions.',
  }
  const l = locale as keyof typeof titles
  return generateSeoMetadata('/guide', locale, titles[l] || titles.de, descs[l] || descs.de)
}

export default async function GuidePage() {
  const locale = await getLocale()
  const tr = translations[locale as keyof typeof translations] ?? translations.de

  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="section-title">{tr.hero.title}</h1>
      <p className="text-stone-600 text-lg mb-12 max-w-2xl leading-relaxed">
        {tr.intro}
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tr.guides.map((g) => (
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
              {tr.learnMore}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
