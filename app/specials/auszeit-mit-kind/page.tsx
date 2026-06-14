import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Familienurlaub in der Vulkaneifel – Auszeit mit Kind | MaarZeit Kirchweiler",
  description:
    "Familienurlaub in der Vulkaneifel: Wild- & Erlebnispark Daun, Dauner Maare, Natur, Wandern mit Kindern und kinderfreundliche Ausflüge ab unserer Ferienwohnung in Kirchweiler.",
  keywords: [
    "Familienurlaub Vulkaneifel",
    "Urlaub mit Kind Eifel",
    "Ferienwohnung Kinder Eifel",
    "kinderfreundliche Unterkunft Vulkaneifel",
    "Ausflüge mit Kindern Eifel",
    "Wildpark Daun Kinder",
  ],
};

export default function AuszeitMitKindPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <nav className="text-sm text-stone-500 mb-6">
        <Link href="/specials" className="hover:text-green-800">Specials</Link>
        {" › "}
        <span>Auszeit mit Kind</span>
      </nav>

      <h1 className="section-title">Auszeit mit Kind</h1>
      <p className="text-stone-500 text-sm mb-8">Familienurlaub in der Vulkaneifel – regional</p>

      <div className="space-y-8 text-stone-700 leading-relaxed">

        <p className="text-lg text-stone-600">
          Die Vulkaneifel ist ein ideales Reiseziel für Familien, die echte Natur, Ruhe und
          unvergessliche Erlebnisse suchen – ohne stundenlange Anreise zu Freizeitparks oder
          überfüllten Touristenzentren. Rund um unsere Ferienwohnung in Kirchweiler finden
          Kinder jeden Alters spannende Ausflugsziele, sichere Bademöglichkeiten und Wege,
          die zum Entdecken einladen. Entschleunigung ist hier kein Konzept, sondern
          gelebter Alltag.
        </p>

        <section>
          <h2 className="text-2xl font-bold text-green-900 mb-3">Die Ferienwohnung für Familien</h2>
          <p>
            Unsere Ferienwohnung eignet sich auch für Familien mit einem Kind bestens:
            Das Sofa lässt sich als Klappsofa für eine dritte Person nutzen, sodass auch
            Familien zu dritt komfortabel schlafen können. Die Wohnung verfügt über einen
            separaten Eingang, was besonders bei unterschiedlichen Schlafrhythmen von Eltern
            und Kindern praktisch ist.
          </p>
          <p className="mt-3">
            Die sonnige Terrasse mit Gartenmöbeln bietet Platz zum Frühstücken und Spielen
            im Freien. Der Garten mit Feuerschale wird zum abendlichen Treffpunkt – für
            gemeinsame Momente unter freiem Himmel, die Kinder noch lange in Erinnerung
            behalten. Die ruhige Lage in Kirchweiler, umgeben von Feldern und Wäldern,
            sorgt für eine entspannte Atmosphäre, in der Kinder sich frei bewegen können.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-green-900 mb-3">Wild- & Erlebnispark Daun</h2>
          <p>
            Nur rund 5 Kilometer von der Ferienwohnung entfernt liegt der Wild- &amp; Erlebnispark
            Daun – ein ideales Ausflugsziel für Familien mit Kindern. Auf großzügigem
            Geländebereich leben heimische Wildtiere wie Damwild, Wildschweine, Mufflons
            und verschiedene Vogelarten in naturnahen Gehegen. Der Park bietet ausreichend
            Laufraum für aktive Kinder und lädt zum Entdecken ein.
          </p>
          <p className="mt-3">
            Neben dem Tierbereich gibt es Spielbereiche und einen Erlebnisbereich, der
            speziell auf jüngere Besucher ausgerichtet ist. Der Eintritt ist erschwinglich,
            die Öffnungszeiten variieren je nach Saison – ein kurzer Blick auf die aktuelle
            Website des Parks vor dem Besuch ist empfehlenswert.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-green-900 mb-3">Dauner Maare mit Kindern</h2>
          <p>
            Die Dauner Maare sind nicht nur für Erwachsene ein beeindruckendes Naturschauspiel –
            auch Kinder sind von den ruhigen, klaren Vulkanseen fasziniert. Am Schalkenmehrener
            Maar gibt es im Sommer eine Badestelle mit flachem Ufer, die sich ideal für Familien
            mit kleineren Kindern eignet. Das Wasser erwärmt sich in der Saison angenehm, die
            Umgebung ist gepflegt und überschaubar.
          </p>
          <p className="mt-3">
            Der Rundweg um den Schalkenmehrener Maar ist kurz und gut begehbar – auch mit
            Kinderwagen auf weiten Strecken möglich. Kinder können am Ufer Enten beobachten,
            Steine ins Wasser werfen und die besondere Stille erleben, die nur Naturgewässer
            fernab von Freibädern bieten.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-green-900 mb-3">Wandern mit Kindern</h2>
          <p>
            Die Vulkaneifel bietet eine Reihe von Wanderwegen, die auch für Familien mit
            Kindern geeignet sind. Besonders empfehlenswert sind die sogenannten
            HeimatSpuren-Rundwege, die speziell für Familien ausgeschildert sind und
            interessante Informationsstationen zu Natur und Geologie der Region bieten.
          </p>
          <p className="mt-3">
            Die meisten familiengeeigneten Routen liegen zwischen 4 und 8 Kilometern Länge
            und halten sich im Hinblick auf Höhenmeter in überschaubarem Rahmen. Empfehlenswert
            ist der Maar-Rundweg, der alle drei Dauner Maare verbindet und durch abwechslungsreiche
            Landschaft führt – mit regelmäßigen Rastmöglichkeiten und kleinen Highlights für
            Kinder unterwegs.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-green-900 mb-3">Eifel-Vulkanmuseum Daun</h2>
          <p>
            Für wissbegierige Kinder, die verstehen möchten, wie Maare entstehen und warum die
            Eifel eine Vulkanlandschaft ist, lohnt sich ein Besuch im Eifel-Vulkanmuseum in Daun.
            Die Ausstellung erklärt anschaulich die geologische Geschichte der Region – mit
            Exponaten, interaktiven Stationen und verständlichen Erklärungen, die auch jüngere
            Besucher begeistern.
          </p>
          <p className="mt-3">
            Das Museum ist besonders an Regentagen ein empfehlenswertes Programm und bietet
            einen guten Einstieg für alle, die die Naturphänomene der Eifel besser verstehen
            möchten. Der Eintritt ist moderat, die Parkplatzsituation in Daun ist entspannt.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-green-900 mb-3">Adler- und Wolfspark Kasselburg</h2>
          <p>
            Etwa 22 Kilometer von Kirchweiler entfernt liegt die Kasselburg bei Pelm – eine
            mittelalterliche Burgruine mit einem der spektakulärsten Greifvogel- und Wolfsparks
            der Eifel. Täglich finden hier Greifvogelshows statt, bei denen Adler, Falken und
            Eulen in unmittelbarer Nähe der Zuschauer fliegen.
          </p>
          <p className="mt-3">
            Besonders beeindruckend ist der Wolfsbereich: Europäische Wölfe leben hier in einem
            weitläufigen, naturnahen Gehege, das einen seltenen Einblick in das Leben dieser
            faszinierenden Tiere bietet. Für Kinder ein Highlight, das lange im Gedächtnis bleibt.
            Ein Besuch dauert erfahrungsgemäß zwei bis drei Stunden.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-green-900 mb-3">Abende am Feuer – gemeinsame Momente</h2>
          <p>
            Ein besonderes Erlebnis für Familien ist der gemeinsame Abend am Feuer. Der Garten
            der Ferienwohnung verfügt über eine Feuerschale, die nach vorheriger Absprache genutzt
            werden kann. Marshmallows rösten, Geschichten erzählen, Sterne beobachten – in der
            lichtarmen Eifellandschaft ist der Blick in den Nachthimmel besonders beeindruckend.
          </p>
          <p className="mt-3">
            Diese schlichten, gemeinsamen Momente abseits von Bildschirmen und Ablenkungen sind
            oft das, was Kinder und Eltern gleichermaßen als das Schönste einer Reise in Erinnerung
            behalten.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-green-900 mb-3">Praktische Tipps für Familien</h2>
          <p>
            Einkaufsmöglichkeiten für die tägliche Versorgung finden Sie in Daun (5 km), wo
            Supermärkte, Bäcker, Metzger und eine Apotheke vorhanden sind. Kinderfreundliche
            Restaurants gibt es in Daun und den umliegenden Orten – regionale Küche mit Kinderkarte
            ist in der Eifel Standard.
          </p>
          <p className="mt-3">
            Bitte beachten Sie, dass unsere Ferienwohnung für maximal 3 Personen ausgelegt ist –
            ideal also für ein Elternpaar mit einem Kind. Ein Kinderbett oder Kinderreisebett kann
            bei Bedarf vorab abgestimmt werden. Sprechen Sie uns bei der Buchungsanfrage einfach
            darauf an.
          </p>
        </section>

      </div>

      <div className="mt-12 pt-8 border-t border-stone-200">
        <p className="text-stone-600 mb-4">
          Planen Sie einen Familienurlaub in der Vulkaneifel? Das Sofa ist als Schlafplatz
          für eine dritte Person nutzbar – ideal für Familien zu dritt.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link href="/buchung" className="btn-primary">Jetzt buchen</Link>
          <Link href="/specials" className="btn-secondary">Alle Specials</Link>
        </div>
      </div>
    </div>
  );
}
