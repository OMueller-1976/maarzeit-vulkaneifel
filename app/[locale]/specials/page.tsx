import type { Metadata } from "next";
import Link from "next/link";
import { getLocale } from 'next-intl/server'
import { generateSeoMetadata } from '@/lib/seo';

const metaTitles: Record<string, string> = {
  de: 'Specials – Nürburgring, Cochem, Koblenz, Luxemburg & Köln',
  en: 'Specials – Nürburgring, Cochem, Koblenz, Luxembourg & Cologne',
  nl: 'Specials – Nürburgring, Cochem, Koblenz, Luxemburg & Keulen',
  fr: 'Specials – Nürburgring, Cochem, Coblence, Luxembourg & Cologne',
}

const metaDescriptions: Record<string, string> = {
  de: 'Ausflugsziele ab Kirchweiler: Nürburgring 55 km, Cochem 45 km, Koblenz 85 km, Luxemburg 95 km, Köln 130 km. Mit Entfernungen und Insider-Tipps.',
  en: 'Day trips from Kirchweiler: Nürburgring 55 km, Cochem 45 km, Koblenz 85 km, Luxembourg 95 km, Cologne 130 km. With distances and insider tips.',
  nl: 'Daguitstapjes vanuit Kirchweiler: Nürburgring 55 km, Cochem 45 km, Koblenz 85 km, Luxemburg 95 km, Keulen 130 km. Met afstanden en insidertips.',
  fr: 'Excursions depuis Kirchweiler: Nürburgring 55 km, Cochem 45 km, Coblence 85 km, Luxembourg 95 km, Cologne 130 km. Avec distances et conseils.',
}

const translations = {
  de: {
    heading: 'Specials',
    subtitle: 'Die Ferienwohnung MaarZeit liegt zentral in der Vulkaneifel – ideal als Ausgangspunkt für Ausflüge in alle Richtungen. Ob Motorsport, Weinkultur, Metropolen oder Familienurlaub: Hier finden Sie unsere persönlichen Empfehlungen.',
    learnMore: 'Mehr erfahren →',
    ctaText: 'Sie möchten eines dieser Ziele mit einem Aufenthalt in der Vulkaneifel verbinden?',
    ctaBtn: 'Jetzt Ferienwohnung buchen',
    specials: [
      {
        href: '/specials/nuerburgring',
        title: 'Nürburgring',
        entfernung: 'ca. 55 km',
        beschreibung: 'Motorsport, Nordschleife und die Erlebniswelt ring°werk – der Nürburgring ist eines der bekanntesten Ausflugsziele Deutschlands. Touristenfahrten auf der legendären Nordschleife sind möglich.',
      },
      {
        href: '/specials/auszeit-mit-kind',
        title: 'Auszeit mit Kind',
        entfernung: 'regional',
        beschreibung: 'Die Vulkaneifel ist ein ideales Familienziel: Wildpark, Maare, Wanderwege und ein Garten mit Feuerschale. Naturerlebnisse ohne lange Anfahrten – direkt vor der Haustür.',
      },
      {
        href: '/specials/cochem',
        title: 'Cochem an der Mosel',
        entfernung: 'ca. 45 km',
        beschreibung: 'Die Reichsburg hoch über der Mosel, eine malerische Altstadt und erstklassige Weinkultur machen Cochem zum schönsten Tagesausflug entlang der Mosel.',
      },
      {
        href: '/specials/koblenz',
        title: 'Koblenz',
        entfernung: 'ca. 85 km',
        beschreibung: 'Dort, wo Rhein und Mosel zusammenfließen: Das Deutsche Eck, die Festung Ehrenbreitstein und eine lebendige Altstadt machen Koblenz zu einem lohnenswerten Ausflugsziel.',
      },
      {
        href: '/specials/luxemburg',
        title: 'Luxemburg',
        entfernung: 'ca. 95 km',
        beschreibung: 'Die kleine Hauptstadt mit großem Charme: UNESCO-Altstadt, unterirdische Casemates, das Viertel Grund und internationales Flair – Luxemburg überrascht auf Tagesausflug.',
      },
      {
        href: '/specials/koeln',
        title: 'Köln',
        entfernung: 'ca. 130 km',
        beschreibung: 'Der Kölner Dom, Brauhauskultur, Rheinufer und erstklassige Museen – Köln ist die nächste Metropole und ein großartiges Ziel für einen ausgedehnten Tagesausflug.',
      },
      {
        href: '/specials/events',
        title: 'Events & Veranstaltungen',
        entfernung: '6–55 km',
        beschreibung: 'Nürburgring 24h, Rock am Ring, Eifel Rallye Festival, Laurentiuskirmes Daun, Konzerte und mehr – die schönsten Veranstaltungshighlights der Vulkaneifel im Jahreskalender.',
      },
      {
        href: '/specials/laacher-see',
        title: 'Laacher See',
        entfernung: 'ca. 65 km',
        beschreibung: 'Vulkankrater-See bei Andernach mit Benediktinerkloster Maria Laach – einer der eindrucksvollsten Seen Deutschlands. Rundwanderweg, Fähre und Klostergastronomie.',
      },
    ],
  },
  en: {
    heading: 'Specials',
    subtitle: 'The MaarZeit holiday apartment is centrally located in the Vulkan Eifel – ideal as a starting point for trips in all directions. Whether motorsport, wine culture, city breaks or family holidays: here you will find our personal recommendations.',
    learnMore: 'Find out more →',
    ctaText: 'Would you like to combine one of these destinations with a stay in the Vulkan Eifel?',
    ctaBtn: 'Book the Holiday Apartment Now',
    specials: [
      {
        href: '/specials/nuerburgring',
        title: 'Nürburgring',
        entfernung: 'approx. 55 km',
        beschreibung: 'Motorsport, the Nordschleife and the ring°werk experience world – the Nürburgring is one of Germany\'s most famous attractions. Tourist laps on the legendary Nordschleife are possible.',
      },
      {
        href: '/specials/auszeit-mit-kind',
        title: 'Break with Kids',
        entfernung: 'regional',
        beschreibung: 'The Vulkan Eifel is an ideal family destination: wildlife park, maars, hiking trails and a garden with fire bowl. Nature experiences without long drives – right on the doorstep.',
      },
      {
        href: '/specials/cochem',
        title: 'Cochem on the Moselle',
        entfernung: 'approx. 45 km',
        beschreibung: 'The Reichsburg high above the Moselle, a picturesque old town and first-class wine culture make Cochem the most beautiful day trip along the Moselle.',
      },
      {
        href: '/specials/koblenz',
        title: 'Koblenz',
        entfernung: 'approx. 85 km',
        beschreibung: 'Where the Rhine and Moselle meet: the German Corner, Ehrenbreitstein Fortress and a vibrant old town make Koblenz a worthwhile destination.',
      },
      {
        href: '/specials/luxemburg',
        title: 'Luxembourg',
        entfernung: 'approx. 95 km',
        beschreibung: 'The small capital with great charm: UNESCO old town, underground casemates, the Grund district and an international atmosphere – Luxembourg surprises on a day trip.',
      },
      {
        href: '/specials/koeln',
        title: 'Cologne',
        entfernung: 'approx. 130 km',
        beschreibung: 'Cologne Cathedral, brewery culture, the Rhine waterfront and world-class museums – Cologne is the nearest metropolis and a great destination for an extended day trip.',
      },
      {
        href: '/specials/events',
        title: 'Events & Festivals',
        entfernung: '6–55 km',
        beschreibung: 'Nürburgring 24h, Rock am Ring, Eifel Rallye Festival, Daun folk festival, concerts and more – the best annual event highlights of the Vulkan Eifel.',
      },
      {
        href: '/specials/laacher-see',
        title: 'Laacher See',
        entfernung: 'approx. 65 km',
        beschreibung: 'Volcanic crater lake near Andernach with the Benedictine monastery Maria Laach – one of Germany\'s most impressive lakes. Circular hiking trail, ferry and monastery restaurant.',
      },
    ],
  },
  nl: {
    heading: 'Specials',
    subtitle: 'Het vakantieappartement MaarZeit ligt centraal in de Vulkaan Eifel – ideaal als vertrekpunt voor uitstapjes in alle richtingen. Of het nu motorsport, wijncultuur, stadsbezoeken of gezinsvakantie is: hier vindt u onze persoonlijke aanbevelingen.',
    learnMore: 'Meer ontdekken →',
    ctaText: 'Wilt u een van deze bestemmingen combineren met een verblijf in de Vulkaan Eifel?',
    ctaBtn: 'Boek Nu het Vakantieappartement',
    specials: [
      {
        href: '/specials/nuerburgring',
        title: 'Nürburgring',
        entfernung: 'ca. 55 km',
        beschreibung: 'Motorsport, de Nordschleife en de belevingswereld ring°werk – de Nürburgring is een van de bekendste attracties van Duitsland. Toeristische ritten op de legendarische Nordschleife zijn mogelijk.',
      },
      {
        href: '/specials/auszeit-mit-kind',
        title: 'Uitje met Kinderen',
        entfernung: 'regionaal',
        beschreibung: 'De Vulkaan Eifel is een ideale gezinsbestemming: wildpark, maren, wandelpaden en een tuin met vuurschaal. Natuurervaringen zonder lange ritten – direct voor de deur.',
      },
      {
        href: '/specials/cochem',
        title: 'Cochem aan de Moezel',
        entfernung: 'ca. 45 km',
        beschreibung: 'De Reichsburg hoog boven de Moezel, een schilderachtige oude stad en eersteklas wijncultuur maken Cochem tot de mooiste daguitstap langs de Moezel.',
      },
      {
        href: '/specials/koblenz',
        title: 'Koblenz',
        entfernung: 'ca. 85 km',
        beschreibung: 'Daar waar Rijn en Moezel samenkomen: het Duits Hoek, de Vesting Ehrenbreitstein en een levendige oude stad maken Koblenz een lohnende bestemming.',
      },
      {
        href: '/specials/luxemburg',
        title: 'Luxemburg',
        entfernung: 'ca. 95 km',
        beschreibung: 'De kleine hoofdstad met grote charme: UNESCO oude stad, ondergrondse casemates, het Grundkwartier en internationaal flair – Luxemburg verrast op een daguitstap.',
      },
      {
        href: '/specials/koeln',
        title: 'Keulen',
        entfernung: 'ca. 130 km',
        beschreibung: 'De Kölner Dom, brouwerijcultuur, Rijnoever en eersteklas musea – Keulen is de dichtstbijzijnde metropool en een geweldige bestemming voor een uitgebreid daguitstap.',
      },
      {
        href: '/specials/events',
        title: 'Events & Festivals',
        entfernung: '6–55 km',
        beschreibung: 'Nürburgring 24h, Rock am Ring, Eifel Rallye Festival, Laurentiuskirmes Daun, concerten en meer – de beste jaarlijkse evenementenhoogtepunten van de Vulkaan Eifel.',
      },
      {
        href: '/specials/laacher-see',
        title: 'Laacher See',
        entfernung: 'ca. 65 km',
        beschreibung: 'Vulkaankrater-meer bij Andernach met het Benedictijnse klooster Maria Laach – een van de mooiste meren van Duitsland. Rondetrekpad, veerboot en kloosterrestaurant.',
      },
    ],
  },
  fr: {
    heading: 'Specials',
    subtitle: "L'appartement de vacances MaarZeit est idéalement situé dans l'Eifel volcanique – idéal comme point de départ pour des excursions dans toutes les directions. Que ce soit le sport automobile, la culture viticole, les séjours en ville ou les vacances en famille : voici nos recommandations personnelles.",
    learnMore: 'En savoir plus →',
    ctaText: "Souhaitez-vous combiner l'une de ces destinations avec un séjour dans l'Eifel volcanique ?",
    ctaBtn: "Réserver l'Appartement Maintenant",
    specials: [
      {
        href: '/specials/nuerburgring',
        title: 'Nürburgring',
        entfernung: 'environ 55 km',
        beschreibung: "Sport automobile, la Nordschleife et le monde ring°werk – le Nürburgring est l'une des attractions les plus célèbres d'Allemagne. Des tours touristiques sur la légendaire Nordschleife sont possibles.",
      },
      {
        href: '/specials/auszeit-mit-kind',
        title: 'Pause avec Enfants',
        entfernung: 'régional',
        beschreibung: "L'Eifel volcanique est une destination idéale pour les familles : parc animalier, maars, sentiers de randonnée et un jardin avec brasero. Des expériences naturelles sans longs trajets – juste devant la porte.",
      },
      {
        href: '/specials/cochem',
        title: 'Cochem sur la Moselle',
        entfernung: 'environ 45 km',
        beschreibung: "Le château Reichsburg haut au-dessus de la Moselle, une vieille ville pittoresque et une excellente culture viticole font de Cochem la plus belle excursion d'une journée le long de la Moselle.",
      },
      {
        href: '/specials/koblenz',
        title: 'Coblence',
        entfernung: 'environ 85 km',
        beschreibung: "Là où le Rhin et la Moselle se rejoignent : le Coin Allemand, la Forteresse Ehrenbreitstein et une vieille ville animée font de Coblence une destination qui vaut le détour.",
      },
      {
        href: '/specials/luxemburg',
        title: 'Luxembourg',
        entfernung: 'environ 95 km',
        beschreibung: "La petite capitale au grand charme : vieille ville UNESCO, casemates souterraines, le quartier Grund et une atmosphère internationale – Luxembourg surprend lors d'une excursion.",
      },
      {
        href: '/specials/koeln',
        title: 'Cologne',
        entfernung: 'environ 130 km',
        beschreibung: "La cathédrale de Cologne, la culture brassicole, les bords du Rhin et des musées de classe mondiale – Cologne est la métropole la plus proche et une excellente destination pour une grande excursion d'une journée.",
      },
      {
        href: '/specials/events',
        title: 'Événements & Festivals',
        entfernung: '6–55 km',
        beschreibung: "Nürburgring 24h, Rock am Ring, Eifel Rallye Festival, Laurentiuskirmes Daun, concerts et plus – les meilleurs temps forts annuels de l'Eifel volcanique.",
      },
      {
        href: '/specials/laacher-see',
        title: 'Laacher See',
        entfernung: 'environ 65 km',
        beschreibung: "Lac de cratère volcanique près d'Andernach avec le monastère bénédictin Maria Laach – l'un des lacs les plus impressionnants d'Allemagne. Sentier circulaire, ferry et restaurant du monastère.",
      },
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
    'de': 'Specials – Nürburgring, Cochem, Koblenz, Luxemburg & Köln',
    'en': 'Specials – Nürburgring, Cochem, Koblenz, Luxembourg & Cologne',
    'nl': 'Specials – Nürburgring, Cochem, Koblenz, Luxemburg & Keulen',
    'fr': 'Specials – Nürburgring, Cochem, Coblence, Luxembourg & Cologne',
  }
  const descs = {
    'de': 'Tagesausflüge von der Vulkaneifel: Nürburgring, Mosel, Koblenz, Luxemburg und Köln.',
    'en': 'Day trips from the Vulkan Eifel: Nürburgring, Moselle, Koblenz, Luxembourg and Cologne.',
    'nl': 'Daguitstapjes vanuit de Vulkaan Eifel: Nürburgring, Moezel, Koblenz, Luxemburg en Keulen.',
    'fr': 'Excursions d\'une journée depuis l\'Eifel: Nürburgring, Moselle, Coblence, Luxembourg et Cologne.',
  }
  const l = locale as keyof typeof titles
  return generateSeoMetadata('/specials', locale, titles[l] || titles.de, descs[l] || descs.de)
}

export default async function SpecialsPage() {
  const locale = await getLocale()
  const tr = translations[locale as keyof typeof translations] ?? translations.de

  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="section-title">{tr.heading}</h1>
      <p className="text-stone-600 text-lg mb-12 max-w-2xl leading-relaxed">
        {tr.subtitle}
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tr.specials.map((s) => (
          <Link
            key={s.href}
            href={s.href}
            className="card border border-stone-200 hover:border-stone-400 hover:shadow-md transition-all group flex flex-col"
          >
            <div className="flex items-baseline justify-between mb-3">
              <h2 className="font-bold text-green-900 text-xl group-hover:text-green-700 transition-colors">
                {s.title}
              </h2>
              <span className="text-xs text-stone-400 shrink-0 ml-2">{s.entfernung}</span>
            </div>
            <p className="text-stone-600 text-sm leading-relaxed flex-1">{s.beschreibung}</p>
            <span className="mt-4 text-sm text-green-700 font-medium group-hover:underline">
              {tr.learnMore}
            </span>
          </Link>
        ))}
      </div>

      <div className="mt-16 border-t border-stone-200 pt-10 text-center">
        <p className="text-stone-600 mb-4">
          {tr.ctaText}
        </p>
        <Link href="/buchung" className="btn-primary">
          {tr.ctaBtn}
        </Link>
      </div>
    </div>
  );
}
