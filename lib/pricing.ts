const UST_SATZ = 0.07 // 7% auf Übernachtung + Reinigung
const KURTAXE_PRO_PERSON_PRO_NACHT = 2.00 // fiktiv, anpassen wenn VG-Satz bekannt

export interface PriceBreakdown {
  nights: number
  perNight: number
  subtotal: number
  cleaningFee: number
  total: number
  deposit: number
  remainder: number
  kurtaxeTotal: number
  nettoGesamt: number
  ustBetrag: number
  bruttoGesamt: number
  gesamtMitKurtaxe: number
}

export function calculatePrice(nights: number, persons: number = 1): PriceBreakdown {
  let perNight: number
  if (nights >= 7)      perNight = 75
  else if (nights >= 4) perNight = 85
  else if (nights >= 2) perNight = 95
  else                  perNight = 125
  const subtotal     = perNight * nights
  const cleaningFee  = 20
  const bruttoGesamt = subtotal + cleaningFee
  const total        = bruttoGesamt
  const deposit      = Math.ceil(total * 0.3)
  const remainder    = total - deposit
  const kurtaxeTotal     = persons * nights * KURTAXE_PRO_PERSON_PRO_NACHT
  const nettoGesamt      = bruttoGesamt / (1 + UST_SATZ)
  const ustBetrag        = nettoGesamt * UST_SATZ
  const gesamtMitKurtaxe = bruttoGesamt + kurtaxeTotal
  return { nights, perNight, subtotal, cleaningFee, total, deposit, remainder,
           kurtaxeTotal, nettoGesamt, ustBetrag, bruttoGesamt, gesamtMitKurtaxe }
}

export const PRICE_TIERS = [
  { range: '1 Nacht',      price: 125, note: 'Spontanurlaub' },
  { range: '2–3 Nächte',   price: 95,  note: 'Kurzurlaub & Wochenende', featured: true },
  { range: '4–7 Nächte',   price: 85,  note: 'Verlängertes Wochenende' },
  { range: 'Ab 7 Nächten', price: 75,  note: 'Urlaubswoche' },
]
