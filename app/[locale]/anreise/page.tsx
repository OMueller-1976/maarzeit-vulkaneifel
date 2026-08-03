import type { Metadata } from "next";
import Link from "next/link";
import { getLocale } from 'next-intl/server'

import MapWrapper from "@/components/MapWrapper";
import { generateSeoMetadata } from '@/lib/seo';

const translations = {
  de: {
    meta: {
      title: 'Anreise zur Ferienwohnung in Kirchweiler – Karte & Entfernungen',
      description: 'Anreise zur MaarZeit Ferienwohnung in Kirchweiler. Karte, Routenplanung und Entfernungen.',
    },
    hero: { title: 'Anreise & Entfernungen', subtitle: 'Am Bruchborn 6 · 54570 Kirchweiler' },
    mapTitle: 'Lage auf der Karte',
    btnGoogle: 'Route mit Google Maps planen',
    btnApple: 'Route mit Apple Maps planen',
    distancesTitle: 'Entfernungen ab Kirchweiler',
    distancesNote: 'Alle Angaben sind Richtwerte per PKW ohne Stau.',
    cols: { dest: 'Ziel', dist: 'Entfernung', time: 'Fahrzeit' },
    howTitle: 'So erreichen Sie uns',
    car: { title: 'Per PKW' },
    train: { title: 'Per Bahn' },
    plane: { title: 'Per Flugzeug' },
    moto: { title: 'Per Motorrad' },
    addressTitle: 'Adresse & GPS',
    cta: 'Jetzt Verfügbarkeit prüfen',
    colHinweis: 'Hinweis',
    country: 'Deutschland',
    gpsCoord: 'GPS: 50.1747° N, 6.8397° O',
    what3words: 'What3Words: (folgt)',
    navLabel: 'Für das Navigationsgerät',
    navHint: 'Exakt so ins Navigationsgerät eingeben.',
    openMaps: 'In Google Maps öffnen',
    ctaHeading: 'Bereit für Ihre Auszeit in der Vulkaneifel?',
    entfernungen: [
      { ziel: 'Daun (Kreisstadt)', km: '6 km', zeit: 'ca. 8 Min.', hinweis: 'Einkauf, Supermarkt, Arzt' },
      { ziel: 'Gerolstein', km: '15 km', zeit: 'ca. 18 Min.', hinweis: 'Altstadt, Felsmassiv, Ausflugsziel' },
      { ziel: 'Manderscheid', km: '18 km', zeit: 'ca. 20 Min.', hinweis: 'Burgruinen, Liesertal, Wandern' },
      { ziel: 'Bitburg', km: '40 km', zeit: 'ca. 35 Min.', hinweis: 'Bitburger Brauerei, Römerstadt' },
      { ziel: 'Cochem', km: '45 km', zeit: 'ca. 45 Min.', hinweis: 'Reichsburg, Moselwein, Altstadt' },
      { ziel: 'Bernkastel-Kues', km: '50 km', zeit: 'ca. 50 Min.', hinweis: 'Mosel, Weinkultur, Mittelaltermarkt' },
      { ziel: 'Nürburgring', km: '55 km', zeit: 'ca. 50 Min.', hinweis: 'Motorsport, Nordschleife, Erlebniswelt' },
      { ziel: 'Grenze Luxemburg (Weiswampach)', km: '60 km', zeit: 'ca. 50 Min.', hinweis: 'Tanken, Shopping, Grenzgebiet' },
      { ziel: 'Trier', km: '75 km', zeit: 'ca. 55 Min.', hinweis: 'Porta Nigra, UNESCO-Welterbe, Römerstadt' },
      { ziel: 'Koblenz', km: '85 km', zeit: 'ca. 65 Min.', hinweis: 'Deutsches Eck, Festung Ehrenbreitstein' },
      { ziel: 'Luxemburg Stadt', km: '95 km', zeit: 'ca. 75 Min.', hinweis: 'UNESCO-Altstadt, Kultur, Shopping' },
      { ziel: 'Bonn', km: '110 km', zeit: 'ca. 80 Min.', hinweis: 'Beethoven-Stadt, Museen, Rhein' },
      { ziel: 'Lüttich / Liège (Belgien)', km: '120 km', zeit: 'ca. 90 Min.', hinweis: 'Belgien, Durchreise Richtung Küste' },
      { ziel: 'Flughafen Köln/Bonn (CGN)', km: '135 km', zeit: 'ca. 95 Min.', hinweis: 'Flughafen, Ferienflüge' },
      { ziel: 'Köln', km: '130 km', zeit: 'ca. 95 Min.', hinweis: 'Dom, Rheinufer, Museen, Stadtleben' },
      { ziel: 'Maastricht (Niederlande)', km: '160 km', zeit: 'ca. 110 Min.', hinweis: 'Niederlande, Kulturstadt' },
      { ziel: 'Flughafen Düsseldorf (DUS)', km: '185 km', zeit: 'ca. 130 Min.', hinweis: 'Internationaler Flughafen' },
      { ziel: 'Flughafen Frankfurt (FRA)', km: '190 km', zeit: 'ca. 130 Min.', hinweis: 'Internationaler Flughafen' },
    ],
    verkehrsmittel: [
      { titel: 'Per PKW', inhalt: ['Die Ferienwohnung liegt direkt an der B421 zwischen Daun und Gerolstein.', 'Ab Köln: A1 → A61 → Ausfahrt Mayen → B262 → Daun → Kirchweiler (ca. 1 Std. 45 Min.)', 'Ab Frankfurt: A3 → A61 → Ausfahrt Mayen → B262 → Daun → Kirchweiler (ca. 2 Std. 30 Min.)', 'Ab Düsseldorf: A46 → A61 → Ausfahrt Mayen → B262 → Daun → Kirchweiler (ca. 1 Std. 45 Min.)', 'Ab Luxemburg Stadt: A6 → B50 → Bitburg → Prüm → Daun → Kirchweiler (ca. 1 Std. 15 Min.)', 'Parkplatz: Ein eigener PKW-Stellplatz steht direkt an der Ferienwohnung zur Verfügung.'] },
      { titel: 'Per Bahn', inhalt: ['Nächster Bahnhof: Gerolstein (ca. 15 km). Verbindungen über Köln und Trier.', 'Ab Bahnhof Gerolstein: Abholung nach Absprache möglich oder Taxi/Mietwagen vor Ort.', 'Alternativ: Bahnhof Daun (ca. 6 km) – regionaler Halt mit Busanbindung.', 'Tipp: DB Sparpreis-Tickets frühzeitig buchen für günstige Verbindungen.'] },
      { titel: 'Per Flugzeug', inhalt: ['Nächste Flughäfen:', 'Köln/Bonn (CGN): ca. 135 km / ca. 1 Std. 35 Min. – empfohlen für Ferienflüge', 'Frankfurt (FRA): ca. 190 km / ca. 2 Std. 10 Min. – größter internationaler Flughafen', 'Düsseldorf (DUS): ca. 185 km / ca. 2 Std. 10 Min.', 'Luxemburg (LUX): ca. 110 km / ca. 1 Std. 20 Min. – ideal für Gäste aus Benelux', 'Mietwagen ab Flughafen empfohlen – die Vulkaneifel ist mit dem PKW am besten zu erkunden.'] },
      { titel: 'Per Motorrad', inhalt: ['Die Vulkaneifel gilt als eine der schönsten Motorradregionen Deutschlands.', 'Klassische Einfahr-Routen:', 'Ab Norden: Über Ahrtal → Adenau → Vulkaneifel', 'Ab Süden: Moseltal → Cochem → Vulkaneifel', 'Ab Westen: Eifelqueerweg → Daun → Kirchweiler', 'Eigener Parkplatz direkt an der Unterkunft. Motorrad sicher abstellbar.'] },
    ],
  },
  en: {
    meta: {
      title: 'Getting to the Holiday Apartment in Kirchweiler – Map & Distances',
      description: 'Directions to MaarZeit holiday apartment in Kirchweiler. Map, route planning and distances.',
    },
    hero: { title: 'Getting Here', subtitle: 'Am Bruchborn 6 · 54570 Kirchweiler' },
    mapTitle: 'Location on the Map',
    btnGoogle: 'Plan Route with Google Maps',
    btnApple: 'Plan Route with Apple Maps',
    distancesTitle: 'Distances from Kirchweiler',
    distancesNote: 'All figures are approximate by car without traffic.',
    cols: { dest: 'Destination', dist: 'Distance', time: 'Travel Time' },
    howTitle: 'How to Reach Us',
    car: { title: 'By Car' },
    train: { title: 'By Train' },
    plane: { title: 'By Plane' },
    moto: { title: 'By Motorcycle' },
    addressTitle: 'Address & GPS',
    cta: 'Check Availability Now',
    colHinweis: 'Notes',
    country: 'Germany',
    gpsCoord: 'GPS: 50.1747° N, 6.8397° E',
    what3words: 'What3Words: (coming soon)',
    navLabel: 'For your sat-nav',
    navHint: 'Enter exactly as shown into your navigation device.',
    openMaps: 'Open in Google Maps',
    ctaHeading: 'Ready for Your Getaway in the Vulkan Eifel?',
    entfernungen: [
      { ziel: 'Daun (district town)', km: '6 km', zeit: 'approx. 8 min', hinweis: 'Shopping, supermarket, doctor' },
      { ziel: 'Gerolstein', km: '15 km', zeit: 'approx. 18 min', hinweis: 'Old town, rock massif, day trip' },
      { ziel: 'Manderscheid', km: '18 km', zeit: 'approx. 20 min', hinweis: 'Castle ruins, Lieser valley, hiking' },
      { ziel: 'Bitburg', km: '40 km', zeit: 'approx. 35 min', hinweis: 'Bitburger Brewery, Roman town' },
      { ziel: 'Cochem', km: '45 km', zeit: 'approx. 45 min', hinweis: 'Reichsburg castle, Moselle wine, old town' },
      { ziel: 'Bernkastel-Kues', km: '50 km', zeit: 'approx. 50 min', hinweis: 'Moselle, wine culture, medieval market' },
      { ziel: 'Nürburgring', km: '55 km', zeit: 'approx. 50 min', hinweis: 'Motorsport, Nordschleife, experience world' },
      { ziel: 'Luxembourg border (Weiswampach)', km: '60 km', zeit: 'approx. 50 min', hinweis: 'Fuel, shopping, border area' },
      { ziel: 'Trier', km: '75 km', zeit: 'approx. 55 min', hinweis: 'Porta Nigra, UNESCO heritage, Roman city' },
      { ziel: 'Koblenz', km: '85 km', zeit: 'approx. 65 min', hinweis: 'Deutsches Eck, Ehrenbreitstein fortress' },
      { ziel: 'Luxembourg City', km: '95 km', zeit: 'approx. 75 min', hinweis: 'UNESCO old town, culture, shopping' },
      { ziel: 'Bonn', km: '110 km', zeit: 'approx. 80 min', hinweis: 'Beethoven city, museums, Rhine' },
      { ziel: 'Liège (Belgium)', km: '120 km', zeit: 'approx. 90 min', hinweis: 'Belgium, transit towards coast' },
      { ziel: 'Cologne/Bonn Airport (CGN)', km: '135 km', zeit: 'approx. 95 min', hinweis: 'Airport, charter flights' },
      { ziel: 'Cologne', km: '130 km', zeit: 'approx. 95 min', hinweis: 'Cathedral, Rhine, museums, city life' },
      { ziel: 'Maastricht (Netherlands)', km: '160 km', zeit: 'approx. 110 min', hinweis: 'Netherlands, cultural city' },
      { ziel: 'Düsseldorf Airport (DUS)', km: '185 km', zeit: 'approx. 130 min', hinweis: 'International airport' },
      { ziel: 'Frankfurt Airport (FRA)', km: '190 km', zeit: 'approx. 130 min', hinweis: 'International airport' },
    ],
    verkehrsmittel: [
      { titel: 'By Car', inhalt: ['The apartment is located directly on the B421 between Daun and Gerolstein.', 'From Cologne: A1 → A61 → exit Mayen → B262 → Daun → Kirchweiler (approx. 1h 45min)', 'From Frankfurt: A3 → A61 → exit Mayen → B262 → Daun → Kirchweiler (approx. 2h 30min)', 'From Düsseldorf: A46 → A61 → exit Mayen → B262 → Daun → Kirchweiler (approx. 1h 45min)', 'From Luxembourg City: A6 → B50 → Bitburg → Prüm → Daun → Kirchweiler (approx. 1h 15min)', 'Parking: A private parking space is available directly at the apartment.'] },
      { titel: 'By Train', inhalt: ['Nearest station: Gerolstein (approx. 15 km). Connections via Cologne and Trier.', 'From Gerolstein station: Pick-up by arrangement, or taxi/hire car on site.', 'Alternative: Daun station (approx. 6 km) – regional stop with bus connections.', 'Tip: Book DB saver tickets early for cheap connections.'] },
      { titel: 'By Plane', inhalt: ['Nearest airports:', 'Cologne/Bonn (CGN): approx. 135 km / approx. 1h 35min – recommended for charter flights', 'Frankfurt (FRA): approx. 190 km / approx. 2h 10min – largest international airport', 'Düsseldorf (DUS): approx. 185 km / approx. 2h 10min', 'Luxembourg (LUX): approx. 110 km / approx. 1h 20min – ideal for Benelux guests', 'Car hire from the airport recommended – the Vulkan Eifel is best explored by car.'] },
      { titel: 'By Motorcycle', inhalt: ['The Vulkan Eifel is considered one of Germany\'s finest motorcycle regions.', 'Classic approach routes:', 'From the north: Via Ahr valley → Adenau → Vulkan Eifel', 'From the south: Moselle valley → Cochem → Vulkan Eifel', 'From the west: Eifelqueerweg → Daun → Kirchweiler', 'Private parking space directly at the property. Motorcycle can be parked securely.'] },
    ],
  },
  nl: {
    meta: {
      title: 'Aanrijden naar het Vakantieappartement in Kirchweiler – Kaart & Afstanden',
      description: 'Routebeschrijving naar MaarZeit vakantieappartement in Kirchweiler. Kaart en afstanden.',
    },
    hero: { title: 'Aanrijden', subtitle: 'Am Bruchborn 6 · 54570 Kirchweiler' },
    mapTitle: 'Locatie op de Kaart',
    btnGoogle: 'Route Plannen met Google Maps',
    btnApple: 'Route Plannen met Apple Maps',
    distancesTitle: 'Afstanden vanuit Kirchweiler',
    distancesNote: 'Alle gegevens zijn richtwaarden per auto zonder file.',
    cols: { dest: 'Bestemming', dist: 'Afstand', time: 'Reistijd' },
    howTitle: 'Hoe U Ons Bereikt',
    car: { title: 'Per Auto' },
    train: { title: 'Per Trein' },
    plane: { title: 'Per Vliegtuig' },
    moto: { title: 'Per Motor' },
    addressTitle: 'Adres & GPS',
    cta: 'Controleer Nu Beschikbaarheid',
    colHinweis: 'Opmerking',
    country: 'Duitsland',
    gpsCoord: 'GPS: 50.1747° N, 6.8397° O',
    what3words: 'What3Words: (volgt)',
    navLabel: 'Voor uw navigatie',
    navHint: 'Voer dit exact in uw navigatieapparaat in.',
    openMaps: 'Openen in Google Maps',
    ctaHeading: 'Klaar voor uw vakantie in de Vulkaan Eifel?',
    entfernungen: [
      { ziel: 'Daun (districtstad)', km: '6 km', zeit: 'ca. 8 min.', hinweis: 'Winkelen, supermarkt, dokter' },
      { ziel: 'Gerolstein', km: '15 km', zeit: 'ca. 18 min.', hinweis: 'Oude stad, rotsformaties, uitstapje' },
      { ziel: 'Manderscheid', km: '18 km', zeit: 'ca. 20 min.', hinweis: 'Burchtruïnes, Lieserdal, wandelen' },
      { ziel: 'Bitburg', km: '40 km', zeit: 'ca. 35 min.', hinweis: 'Bitburger Brouwerij, Romeinse stad' },
      { ziel: 'Cochem', km: '45 km', zeit: 'ca. 45 min.', hinweis: 'Reichsburg, Moezelwijn, oude stad' },
      { ziel: 'Bernkastel-Kues', km: '50 km', zeit: 'ca. 50 min.', hinweis: 'Moezel, wijncultuur, middeleeuwse markt' },
      { ziel: 'Nürburgring', km: '55 km', zeit: 'ca. 50 min.', hinweis: 'Motorsport, Nordschleife, belevingswereld' },
      { ziel: 'Grens Luxemburg (Weiswampach)', km: '60 km', zeit: 'ca. 50 min.', hinweis: 'Tanken, winkelen, grensgebied' },
      { ziel: 'Trier', km: '75 km', zeit: 'ca. 55 min.', hinweis: 'Porta Nigra, UNESCO-erfgoed, Romeinse stad' },
      { ziel: 'Koblenz', km: '85 km', zeit: 'ca. 65 min.', hinweis: 'Deutsches Eck, vesting Ehrenbreitstein' },
      { ziel: 'Luxemburg Stad', km: '95 km', zeit: 'ca. 75 min.', hinweis: 'UNESCO-binnenstad, cultuur, winkelen' },
      { ziel: 'Bonn', km: '110 km', zeit: 'ca. 80 min.', hinweis: 'Beethoven-stad, musea, Rijn' },
      { ziel: 'Luik / Liège (België)', km: '120 km', zeit: 'ca. 90 min.', hinweis: 'België, doorreis richting kust' },
      { ziel: 'Luchthaven Keulen/Bonn (CGN)', km: '135 km', zeit: 'ca. 95 min.', hinweis: 'Luchthaven, vakantievluchten' },
      { ziel: 'Keulen', km: '130 km', zeit: 'ca. 95 min.', hinweis: 'Dom, Rijnoever, musea, stadsleven' },
      { ziel: 'Maastricht (Nederland)', km: '160 km', zeit: 'ca. 110 min.', hinweis: 'Nederland, cultuurstad' },
      { ziel: 'Luchthaven Düsseldorf (DUS)', km: '185 km', zeit: 'ca. 130 min.', hinweis: 'Internationale luchthaven' },
      { ziel: 'Luchthaven Frankfurt (FRA)', km: '190 km', zeit: 'ca. 130 min.', hinweis: 'Internationale luchthaven' },
    ],
    verkehrsmittel: [
      { titel: 'Per Auto', inhalt: ['Het appartement ligt direct aan de B421 tussen Daun en Gerolstein.', 'Vanuit Keulen: A1 → A61 → afrit Mayen → B262 → Daun → Kirchweiler (ca. 1 uur 45 min.)', 'Vanuit Frankfurt: A3 → A61 → afrit Mayen → B262 → Daun → Kirchweiler (ca. 2 uur 30 min.)', 'Vanuit Düsseldorf: A46 → A61 → afrit Mayen → B262 → Daun → Kirchweiler (ca. 1 uur 45 min.)', 'Vanuit Luxemburg Stad: A6 → B50 → Bitburg → Prüm → Daun → Kirchweiler (ca. 1 uur 15 min.)', 'Parkeerplaats: Er is een eigen parkeerplaats direct bij het appartement beschikbaar.'] },
      { titel: 'Per Trein', inhalt: ['Dichtstbijzijnde station: Gerolstein (ca. 15 km). Verbindingen via Keulen en Trier.', 'Vanaf station Gerolstein: ophalen mogelijk in overleg, of taxi/huurauto ter plaatse.', 'Alternatief: Station Daun (ca. 6 km) – regionale halte met busverbinding.', 'Tip: Boek DB-voordeelaanbiedingen vroeg voor goedkope verbindingen.'] },
      { titel: 'Per Vliegtuig', inhalt: ['Dichtstbijzijnde luchthavens:', 'Keulen/Bonn (CGN): ca. 135 km / ca. 1 uur 35 min. – aanbevolen voor vakantievluchten', 'Frankfurt (FRA): ca. 190 km / ca. 2 uur 10 min. – grootste internationale luchthaven', 'Düsseldorf (DUS): ca. 185 km / ca. 2 uur 10 min.', 'Luxemburg (LUX): ca. 110 km / ca. 1 uur 20 min. – ideaal voor gasten uit de Benelux', 'Huurauto vanaf de luchthaven aanbevolen – de Vulkaan Eifel verkent u het best per auto.'] },
      { titel: 'Per Motor', inhalt: ['De Vulkaan Eifel geldt als een van de mooiste motorgebieden van Duitsland.', 'Klassieke aanrijdroutes:', 'Vanuit het noorden: Via het Ahrdal → Adenau → Vulkaan Eifel', 'Vanuit het zuiden: Moezeldal → Cochem → Vulkaan Eifel', 'Vanuit het westen: Eifelqueerweg → Daun → Kirchweiler', 'Eigen parkeerplaats direct bij de accommodatie. Motor veilig te stallen.'] },
    ],
  },
  fr: {
    meta: {
      title: "Accès à l'Appartement de Vacances à Kirchweiler – Carte & Distances",
      description: "Itinéraire vers l'appartement MaarZeit à Kirchweiler. Carte et distances.",
    },
    hero: { title: 'Comment Nous Rejoindre', subtitle: 'Am Bruchborn 6 · 54570 Kirchweiler' },
    mapTitle: 'Localisation sur la Carte',
    btnGoogle: "Planifier l'Itinéraire avec Google Maps",
    btnApple: "Planifier l'Itinéraire avec Apple Maps",
    distancesTitle: 'Distances depuis Kirchweiler',
    distancesNote: 'Toutes les données sont indicatives par voiture sans trafic.',
    cols: { dest: 'Destination', dist: 'Distance', time: 'Temps de Trajet' },
    howTitle: 'Comment Nous Rejoindre',
    car: { title: 'En Voiture' },
    train: { title: 'En Train' },
    plane: { title: 'En Avion' },
    moto: { title: 'En Moto' },
    addressTitle: 'Adresse & GPS',
    cta: 'Vérifier la Disponibilité',
    colHinweis: 'Remarque',
    country: 'Allemagne',
    gpsCoord: 'GPS: 50.1747° N, 6.8397° E',
    what3words: 'What3Words: (à venir)',
    navLabel: 'Pour votre GPS',
    navHint: 'Saisissez exactement ainsi dans votre appareil de navigation.',
    openMaps: 'Ouvrir dans Google Maps',
    ctaHeading: "Prêt pour votre séjour dans l'Eifel Volcanique ?",
    entfernungen: [
      { ziel: 'Daun (chef-lieu)', km: '6 km', zeit: 'env. 8 min', hinweis: 'Courses, supermarché, médecin' },
      { ziel: 'Gerolstein', km: '15 km', zeit: 'env. 18 min', hinweis: 'Vieille ville, massif rocheux, excursion' },
      { ziel: 'Manderscheid', km: '18 km', zeit: 'env. 20 min', hinweis: 'Ruines de château, vallée de la Lieser, randonnée' },
      { ziel: 'Bitburg', km: '40 km', zeit: 'env. 35 min', hinweis: 'Brasserie Bitburger, ville romaine' },
      { ziel: 'Cochem', km: '45 km', zeit: 'env. 45 min', hinweis: 'Château Reichsburg, vin de la Moselle, vieille ville' },
      { ziel: 'Bernkastel-Kues', km: '50 km', zeit: 'env. 50 min', hinweis: 'Moselle, culture viticole, marché médiéval' },
      { ziel: 'Nürburgring', km: '55 km', zeit: 'env. 50 min', hinweis: 'Motorsport, Nordschleife, parc d\'attractions' },
      { ziel: 'Frontière Luxembourg (Weiswampach)', km: '60 km', zeit: 'env. 50 min', hinweis: 'Carburant, shopping, zone frontalière' },
      { ziel: 'Trèves (Trier)', km: '75 km', zeit: 'env. 55 min', hinweis: 'Porta Nigra, patrimoine UNESCO, ville romaine' },
      { ziel: 'Coblence (Koblenz)', km: '85 km', zeit: 'env. 65 min', hinweis: 'Deutsches Eck, forteresse Ehrenbreitstein' },
      { ziel: 'Luxembourg Ville', km: '95 km', zeit: 'env. 75 min', hinweis: 'Vieille ville UNESCO, culture, shopping' },
      { ziel: 'Bonn', km: '110 km', zeit: 'env. 80 min', hinweis: 'Ville de Beethoven, musées, Rhin' },
      { ziel: 'Liège (Belgique)', km: '120 km', zeit: 'env. 90 min', hinweis: 'Belgique, transit vers la côte' },
      { ziel: 'Aéroport Cologne/Bonn (CGN)', km: '135 km', zeit: 'env. 95 min', hinweis: 'Aéroport, vols charter' },
      { ziel: 'Cologne', km: '130 km', zeit: 'env. 95 min', hinweis: 'Cathédrale, bord du Rhin, musées, vie urbaine' },
      { ziel: 'Maastricht (Pays-Bas)', km: '160 km', zeit: 'env. 110 min', hinweis: 'Pays-Bas, ville culturelle' },
      { ziel: 'Aéroport Düsseldorf (DUS)', km: '185 km', zeit: 'env. 130 min', hinweis: 'Aéroport international' },
      { ziel: 'Aéroport Frankfurt (FRA)', km: '190 km', zeit: 'env. 130 min', hinweis: 'Aéroport international' },
    ],
    verkehrsmittel: [
      { titel: 'En Voiture', inhalt: ["L'appartement est situé directement sur la B421 entre Daun et Gerolstein.", 'Depuis Cologne: A1 → A61 → sortie Mayen → B262 → Daun → Kirchweiler (env. 1h45)', 'Depuis Francfort: A3 → A61 → sortie Mayen → B262 → Daun → Kirchweiler (env. 2h30)', 'Depuis Düsseldorf: A46 → A61 → sortie Mayen → B262 → Daun → Kirchweiler (env. 1h45)', 'Depuis Luxembourg Ville: A6 → B50 → Bitburg → Prüm → Daun → Kirchweiler (env. 1h15)', "Parking: Une place de parking privée est disponible directement devant l'appartement."] },
      { titel: 'En Train', inhalt: ['Gare la plus proche: Gerolstein (env. 15 km). Liaisons via Cologne et Trèves.', 'Depuis la gare de Gerolstein: transfert possible sur demande, ou taxi/voiture de location sur place.', 'Alternative: Gare de Daun (env. 6 km) – arrêt régional avec liaisons par bus.', 'Conseil: Réservez les billets Sparpreis DB à l\'avance pour les meilleures offres.'] },
      { titel: 'En Avion', inhalt: ['Aéroports les plus proches:', 'Cologne/Bonn (CGN): env. 135 km / env. 1h35 – recommandé pour les vols charter', 'Francfort (FRA): env. 190 km / env. 2h10 – plus grand aéroport international', 'Düsseldorf (DUS): env. 185 km / env. 2h10', 'Luxembourg (LUX): env. 110 km / env. 1h20 – idéal pour les visiteurs du Benelux', "Location de voiture depuis l'aéroport recommandée – l'Eifel volcanique se découvre mieux en voiture."] },
      { titel: 'En Moto', inhalt: ["L'Eifel volcanique est considérée comme l'une des plus belles régions moto d'Allemagne.", 'Itinéraires classiques:', 'Du nord: Via la vallée de l\'Ahr → Adenau → Eifel volcanique', 'Du sud: Vallée de la Moselle → Cochem → Eifel volcanique', 'De l\'ouest: Eifelqueerweg → Daun → Kirchweiler', 'Place de parking privée directement à l\'hébergement. Moto pouvant être garée en sécurité.'] },
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
    'de': 'Anreise zur Ferienwohnung in Kirchweiler – Karte & Entfernungen',
    'en': 'Getting to the Holiday Apartment in Kirchweiler – Map & Distances',
    'nl': 'Aanrijden naar het Vakantieappartement in Kirchweiler – Kaart & Afstanden',
    'fr': 'Accès à l\'Appartement de Vacances à Kirchweiler – Carte & Distances',
  }
  const descs = {
    'de': 'Anreise zur MaarZeit Ferienwohnung in Kirchweiler. Karte, Routenplanung und Entfernungen.',
    'en': 'Directions to MaarZeit holiday apartment in Kirchweiler. Map, route planning and distances.',
    'nl': 'Routebeschrijving naar MaarZeit in Kirchweiler. Kaart en afstanden.',
    'fr': 'Itinéraire vers l\'appartement MaarZeit à Kirchweiler. Carte et distances.',
  }
  const l = locale as keyof typeof titles
  return generateSeoMetadata('/anreise', locale, titles[l] || titles.de, descs[l] || descs.de)
}

export default async function AnreisePage() {
  const locale = await getLocale()
  const tr = translations[locale as keyof typeof translations] ?? translations.de

  return (
    <>
      {/* Hero */}
      <section className="bg-stone-900 text-white py-14 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-3" style={{ fontFamily: "Georgia, serif" }}>
          {tr.hero.title}
        </h1>
        <p className="text-stone-400 text-base mt-2">
          {tr.hero.subtitle} · Kreis Daun · Rheinland-Pfalz
        </p>
      </section>

      {/* Karte */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-green-900 mb-6" style={{ fontFamily: "Georgia, serif" }}>
          {tr.mapTitle}
        </h2>
        <div className="rounded-lg overflow-hidden border border-stone-200 shadow-sm">
          <MapWrapper />
        </div>
        <div className="flex flex-wrap gap-3 mt-4">
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=Am+Bruchborn+6,+54570+Kirchweiler"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-stone-700 text-stone-700 px-5 py-2.5 rounded text-sm hover:bg-stone-700 hover:text-white transition-colors"
          >
            {tr.btnGoogle}
          </a>
          <a
            href="https://maps.apple.com/?daddr=Am+Bruchborn+6,+54570+Kirchweiler"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-stone-700 text-stone-700 px-5 py-2.5 rounded text-sm hover:bg-stone-700 hover:text-white transition-colors"
          >
            {tr.btnApple}
          </a>
        </div>
      </section>

      {/* Entfernungstabelle */}
      <section className="max-w-5xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold text-green-900 mb-2" style={{ fontFamily: "Georgia, serif" }}>
          {tr.distancesTitle}
        </h2>
        <p className="text-stone-500 text-sm mb-6">
          {tr.distancesNote}
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr>
                <th
                  className="text-left pb-2 border-b border-stone-300"
                  style={{ fontSize: "0.72rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#999", fontWeight: 500 }}
                >
                  {tr.cols.dest}
                </th>
                <th
                  className="text-left pb-2 border-b border-stone-300"
                  style={{ fontSize: "0.72rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#999", fontWeight: 500 }}
                >
                  {tr.cols.dist}
                </th>
                <th
                  className="text-left pb-2 border-b border-stone-300"
                  style={{ fontSize: "0.72rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#999", fontWeight: 500 }}
                >
                  {tr.cols.time}
                </th>
                <th
                  className="text-left pb-2 border-b border-stone-300 hidden md:table-cell"
                  style={{ fontSize: "0.72rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#999", fontWeight: 500 }}
                >
                  {tr.colHinweis}
                </th>
              </tr>
            </thead>
            <tbody>
              {tr.entfernungen.map((row) => (
                <tr key={row.ziel} className="border-b border-stone-100">
                  <td className="py-2.5 pr-4" style={{ fontWeight: 500 }}>
                    {row.ziel}
                  </td>
                  <td className="py-2.5 pr-4 text-stone-600">{row.km}</td>
                  <td className="py-2.5 pr-4 text-stone-600">{row.zeit}</td>
                  <td
                    className="py-2.5 hidden md:table-cell"
                    style={{ color: "#888", fontSize: "0.85rem" }}
                  >
                    {row.hinweis}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Verkehrsmittel */}
      <section className="max-w-5xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold text-green-900 mb-8" style={{ fontFamily: "Georgia, serif" }}>
          {tr.howTitle}
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {tr.verkehrsmittel.map((vm) => (
            <div key={vm.titel} className="border-t border-stone-200 pt-6">
              <h3 className="font-bold text-stone-900 text-base mb-3">{vm.titel}</h3>
              <ul className="space-y-1.5 text-sm text-stone-600 leading-relaxed">
                {vm.inhalt.map((zeile, i) => (
                  <li key={i}>{zeile}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Adresse & GPS */}
      <section className="max-w-5xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold text-green-900 mb-6" style={{ fontFamily: "Georgia, serif" }}>
          {tr.addressTitle}
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="text-sm text-stone-700 leading-loose">
            <p className="font-semibold text-stone-900">Markus Müller</p>
            <p>Am Bruchborn 6</p>
            <p>54570 Kirchweiler</p>
            <p>Kreis Daun, Rheinland-Pfalz</p>
            <p>{tr.country}</p>
            <p className="mt-4 text-stone-500">{tr.gpsCoord}</p>
            <p className="text-stone-400 text-xs mt-1">{tr.what3words}</p>
          </div>
          <div>
            <p className="text-xs text-stone-500 uppercase tracking-widest mb-2">
              {tr.navLabel}
            </p>
            <div className="bg-stone-100 rounded px-4 py-3 font-mono text-sm text-stone-800 select-all border border-stone-200">
              Am Bruchborn 6, 54570 Kirchweiler
            </div>
            <p className="text-xs text-stone-400 mt-2">
              {tr.navHint}
            </p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Am+Bruchborn+6,+54570+Kirchweiler"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-4 inline-block text-sm"
            >
              {tr.openMaps}
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-16 px-4 text-center text-white mt-8"
        style={{ backgroundColor: "#1A1A1A" }}
      >
        <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "Georgia, serif" }}>
          {tr.ctaHeading}
        </h2>
        <Link
          href="/buchung"
          className="inline-block bg-white text-stone-900 font-semibold px-8 py-3 rounded hover:bg-stone-100 transition-colors"
        >
          {tr.cta}
        </Link>
      </section>
    </>
  );
}
