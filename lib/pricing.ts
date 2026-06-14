export interface PriceBreakdown {
  nights: number
  perNight: number
  subtotal: number
  cleaningFee: number
  total: number
  deposit: number
  remainder: number
}

export function calculatePrice(nights: number): PriceBreakdown {
  let perNight: number
  if (nights >= 7)      perNight = 75
  else if (nights >= 4) perNight = 85
  else if (nights >= 2) perNight = 95
  else                  perNight = 125
  const subtotal    = perNight * nights
  const cleaningFee = 20
  const total       = subtotal + cleaningFee
  const deposit     = Math.ceil(total * 0.3)
  const remainder   = total - deposit
  return { nights, perNight, subtotal, cleaningFee, total, deposit, remainder }
}

export const PRICE_TIERS = [
  { range: '1 Nacht',      price: 125, note: 'Spontanurlaub' },
  { range: '2–3 Nächte',   price: 95,  note: 'Kurzurlaub & Wochenende', featured: true },
  { range: '4–7 Nächte',   price: 85,  note: 'Verlängertes Wochenende' },
  { range: 'Ab 7 Nächten', price: 75,  note: 'Urlaubswoche' },
]
