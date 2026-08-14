import type { Metadata } from "next";
import Link from "next/link";
import { getLocale } from 'next-intl/server'
import { generateSeoMetadata } from '@/lib/seo';
import RegionImage from '@/lib/regionImage';

const translations = {
  de: {
    meta: {
      title: 'Laacher See – Vulkankrater-See mit Kloster Maria Laach',
      description: 'Der Laacher See bei Andernach: Benediktinerkloster Maria Laach, Rundwanderweg und Fähre. Ca. 65 km von der Ferienwohnung MaarZeit Vulkaneifel.',
    },
    breadcrumb: { specials: 'Specials', page: 'Laacher See' },
    heroTitle: 'Laacher See',
    heroSubtitle: 'Vulkankrater-See & Kloster Maria Laach',
    intro: 'Der Laacher See liegt ca. 65 km nordöstlich von Kirchweiler in der Eifel und ist einer der eindrucksvollsten Seen Deutschlands. Er entstand durch einen gewaltigen Vulkanausbruch vor etwa 12.900 Jahren – und ist damit geologisch gesehen ein naher Verwandter der Dauner Maare.',
    klosterTitle: 'Kloster Maria Laach',
    klosterText: 'Das Benediktinerkloster Maria Laach am Westufer des Sees zählt zu den bedeutendsten romanischen Kirchenbauten Deutschlands. Die Abteikirche aus dem 11. Jahrhundert ist täglich für Besucher geöffnet. Im klostereigenen Hotel und Restaurant kann man Mittagessen oder übernachten – ein Ausflug für alle Sinne.',
    seeTitle: 'Am See & Rundwanderweg',
    seeText: 'Ein gut ausgeschilderter Rundwanderweg von ca. 12 km führt einmal um den gesamten See. Alternativ fährt eine kleine Fähre von April bis Oktober von Ufer zu Ufer. Am See gibt es Restaurants, einen Bootsverleih und ruhige Uferwege für einen entspannten Spaziergang.',
    tipTitle: 'Reisetipp',
    tipText: 'Kombi-Ausflug: Laacher See am Vormittag + Andernach (Geysir, Altstadt, Rheinufer) am Nachmittag. Von Kirchweiler über die B257/A48 in ca. 60 Minuten erreichbar.',
    ctaBack: '← Zurück zu den Specials',
    ctaBook: 'Jetzt buchen',
    distance: 'ca. 65 km von MaarZeit',
    imgAlt: 'Laacher See mit Kloster Maria Laach – Vulkaneifel',
  },
  en: {
    meta: {
      title: 'Laacher See – Volcanic Crater Lake with Maria Laach Abbey',
      description: 'Laacher See near Andernach: Benedictine monastery Maria Laach, circular hiking trail and ferry. Approx. 65 km from the MaarZeit Vulkan Eifel holiday apartment.',
    },
    breadcrumb: { specials: 'Specials', page: 'Laacher See' },
    heroTitle: 'Laacher See',
    heroSubtitle: 'Volcanic Crater Lake & Maria Laach Abbey',
    intro: 'The Laacher See lies approximately 65 km northeast of Kirchweiler in the Eifel and is one of Germany\'s most impressive lakes. It was formed by a massive volcanic eruption around 12,900 years ago – making it geologically a close relative of the Daun Maare.',
    klosterTitle: 'Maria Laach Abbey',
    klosterText: 'The Benedictine abbey of Maria Laach on the western shore of the lake is one of the most important Romanesque church buildings in Germany. The abbey church from the 11th century is open to visitors daily. The monastery-run hotel and restaurant offer lunch and accommodation – an excursion for all the senses.',
    seeTitle: 'At the Lake & Circular Trail',
    seeText: 'A well-signposted circular hiking trail of approx. 12 km leads around the entire lake. Alternatively, a small ferry runs from April to October from shore to shore. At the lake there are restaurants, a boat hire and quiet lakeside paths for a relaxed stroll.',
    tipTitle: 'Travel Tip',
    tipText: 'Combo trip: Laacher See in the morning + Andernach (geyser, old town, Rhine waterfront) in the afternoon. Reachable from Kirchweiler via the B257/A48 in approximately 60 minutes.',
    ctaBack: '← Back to Specials',
    ctaBook: 'Book Now',
    distance: 'approx. 65 km from MaarZeit',
    imgAlt: 'Laacher See with Maria Laach Abbey – Vulkan Eifel',
  },
  nl: {
    meta: {
      title: 'Laacher See – Vulkaankrater-meer met Klooster Maria Laach',
      description: 'Laacher See bij Andernach: Benedictijns klooster Maria Laach, rondetrekpad en veerboot. Ca. 65 km van het vakantieappartement MaarZeit Vulkaan Eifel.',
    },
    breadcrumb: { specials: 'Specials', page: 'Laacher See' },
    heroTitle: 'Laacher See',
    heroSubtitle: 'Vulkaankrater-meer & Klooster Maria Laach',
    intro: 'Het Laacher See ligt ca. 65 km ten noordoosten van Kirchweiler in de Eifel en is een van de indrukwekkendste meren van Duitsland. Het ontstond door een geweldige vulkaanuitbarsting ca. 12.900 jaar geleden – en is geologisch gezien een naaste verwant van de Dauner Maren.',
    klosterTitle: 'Klooster Maria Laach',
    klosterText: 'Het Benedictijnse klooster Maria Laach aan de westoever van het meer is een van de belangrijkste romaanse kerkgebouwen van Duitsland. De abdijkerk uit de 11e eeuw is dagelijks toegankelijk voor bezoekers. In het kloosterhotel en -restaurant kunt u lunchen of overnachten – een uitstap voor alle zintuigen.',
    seeTitle: 'Aan het Meer & Rondetrekpad',
    seeText: 'Een goed bewegwijzerd rondetrekpad van ca. 12 km leidt rondom het hele meer. Alternatief rijdt een kleine veerboot van april tot oktober van oever naar oever. Aan het meer zijn er restaurants, een bootsverhuur en rustige oeverpaden voor een ontspannen wandeling.',
    tipTitle: 'Reistip',
    tipText: "Combinatieroute: Laacher See 's ochtends + Andernach (geiser, oude stad, Rijnoever) 's middags. Vanuit Kirchweiler via de B257/A48 in ca. 60 minuten bereikbaar.",
    ctaBack: '← Terug naar Specials',
    ctaBook: 'Nu Boeken',
    distance: 'ca. 65 km van MaarZeit',
    imgAlt: 'Laacher See met Klooster Maria Laach – Vulkaan Eifel',
  },
  fr: {
    meta: {
      title: 'Laacher See – Lac de Cratère Volcanique avec Abbaye Maria Laach',
      description: "Laacher See près d'Andernach : abbaye bénédictine Maria Laach, sentier circulaire et ferry. Environ 65 km de l'appartement de vacances MaarZeit Eifel Volcanique.",
    },
    breadcrumb: { specials: 'Specials', page: 'Laacher See' },
    heroTitle: 'Laacher See',
    heroSubtitle: 'Lac de Cratère Volcanique & Abbaye Maria Laach',
    intro: "Le Laacher See se trouve à environ 65 km au nord-est de Kirchweiler dans l'Eifel et est l'un des lacs les plus impressionnants d'Allemagne. Il s'est formé lors d'une gigantesque éruption volcanique il y a environ 12 900 ans – ce qui en fait, d'un point de vue géologique, un proche cousin des Dauner Maare.",
    klosterTitle: 'Abbaye Maria Laach',
    klosterText: "L'abbaye bénédictine Maria Laach sur la rive ouest du lac est l'un des édifices romans les plus importants d'Allemagne. L'église abbatiale du XIe siècle est ouverte aux visiteurs tous les jours. L'hôtel et le restaurant du monastère proposent déjeuner et hébergement – une excursion pour tous les sens.",
    seeTitle: 'Au Bord du Lac & Sentier Circulaire',
    seeText: "Un sentier de randonnée circulaire bien balisé d'environ 12 km fait le tour du lac. Alternativement, un petit ferry circule d'avril à octobre d'une rive à l'autre. Au bord du lac, il y a des restaurants, une location de bateaux et des chemins tranquilles le long des rives pour une promenade détendue.",
    tipTitle: 'Conseil de Voyage',
    tipText: "Excursion combinée : Laacher See le matin + Andernach (geyser, vieille ville, bords du Rhin) l'après-midi. Accessible depuis Kirchweiler via la B257/A48 en environ 60 minutes.",
    ctaBack: '← Retour aux Specials',
    ctaBook: 'Réserver',
    distance: 'environ 65 km de MaarZeit',
    imgAlt: 'Laacher See avec l\'Abbaye Maria Laach – Eifel Volcanique',
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
  const tr = translations[locale as keyof typeof translations] ?? translations.de
  return generateSeoMetadata('/specials/laacher-see', locale, tr.meta.title, tr.meta.description)
}

export default async function LaacherSeePage() {
  const locale = await getLocale()
  const tr = translations[locale as keyof typeof translations] ?? translations.de

  return (
    <>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #1C3A22 0%, #2D5A35 100%)', color: 'white', padding: '4rem 1.5rem' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <nav style={{ fontSize: '0.78rem', color: '#888', marginBottom: '2rem' }}>
            <Link href="/specials" style={{ color: '#aaa', textDecoration: 'none' }}>{tr.breadcrumb.specials}</Link>
            {' › '}
            <span>{tr.breadcrumb.page}</span>
          </nav>
          <p style={{ fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#86EFAC', marginBottom: '0.75rem' }}>
            {tr.distance}
          </p>
          <h1 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 'normal', marginBottom: '0.5rem', lineHeight: 1.2 }}>
            {tr.heroTitle}
          </h1>
          <p style={{ color: '#BBB', fontSize: '1.1rem' }}>{tr.heroSubtitle}</p>
        </div>
      </section>

      {/* Content */}
      <div style={{ maxWidth: '760px', margin: '0 auto', padding: '3rem 1.5rem' }}>
        <p style={{ color: '#555', lineHeight: 1.8, fontSize: '1.05rem', marginBottom: '2.5rem' }}>
          {tr.intro}
        </p>

        <RegionImage
          src="/images/region/laacher-see.jpg"
          alt={tr.imgAlt}
          credit="Eifel Tourismus GmbH"
          height={360}
          className="mb-10"
        />

        {/* Kloster */}
        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '1.5rem', fontWeight: 'normal', color: '#1A1A1A', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '1px solid #E5E5E5' }}>
            {tr.klosterTitle}
          </h2>
          <p style={{ color: '#555', lineHeight: 1.8, fontSize: '0.95rem' }}>
            {tr.klosterText}
          </p>
        </section>

        {/* Am See */}
        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '1.5rem', fontWeight: 'normal', color: '#1A1A1A', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '1px solid #E5E5E5' }}>
            {tr.seeTitle}
          </h2>
          <p style={{ color: '#555', lineHeight: 1.8, fontSize: '0.95rem' }}>
            {tr.seeText}
          </p>
        </section>

        {/* Tipp */}
        <div style={{ background: '#F6FAF6', borderLeft: '3px solid #2D5A35', padding: '1.25rem 1.5rem', marginBottom: '3rem' }}>
          <p style={{ fontWeight: 600, color: '#2D5A35', marginBottom: '0.4rem', fontSize: '0.9rem' }}>
            💡 {tr.tipTitle}
          </p>
          <p style={{ color: '#555', fontSize: '0.9rem', lineHeight: 1.7, margin: 0 }}>
            {tr.tipText}
          </p>
        </div>

        {/* CTA */}
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
          <Link href="/specials" style={{ color: '#666', fontSize: '0.9rem', textDecoration: 'none' }}>
            {tr.ctaBack}
          </Link>
          <Link href="/buchung" className="btn-primary">
            {tr.ctaBook}
          </Link>
        </div>
      </div>
    </>
  )
}
