import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import { calculatePrice } from '@/lib/pricing'
import { supabase } from '@/lib/supabase'
import { subDays, addDays, format, parseISO } from 'date-fns'

export const dynamic = 'force-dynamic'

export async function POST(req: NextRequest) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2026-05-27.dahlia',
  })
  const body = await req.json()
  const { checkin, checkout, nights, guests, dog, motorcycle, name, email, phone, message, guests_count } = body

  if (!checkin || !checkout || !nights || !name || !email)
    return NextResponse.json({ error: 'Pflichtfelder fehlen' }, { status: 400 })

  // Double-Booking-Check
  const { data: conflicts } = await supabase
    .from('bookings')
    .select('id')
    .not('status', 'eq', 'cancelled')
    .or(`and(checkin.lte.${checkout},checkout.gte.${checkin})`)

  if (conflicts && conflicts.length > 0)
    return NextResponse.json(
      { error: 'Diese Daten sind leider nicht mehr verfügbar.' },
      { status: 409 }
    )

  const price        = calculatePrice(Number(nights))
  const guestsCount  = parseInt(guests_count) || 1
  const KURTAXE      = 2.00
  const kurtaxeTotal = guestsCount * price.nights * KURTAXE
  const nettoGesamt  = (price.subtotal + price.cleaningFee) / 1.07
  const ustBetrag    = nettoGesamt * 0.07
  const checkinDate  = parseISO(checkin)
  const checkoutDate = parseISO(checkout)

  const { data: booking, error: dbError } = await supabase
    .from('bookings')
    .insert({
      checkin, checkout,
      nights:          price.nights,
      guests,
      dog:             dog || 'nein',
      motorcycle:      motorcycle || 'nein',
      guest_name:      name,
      guest_email:     email,
      guest_phone:     phone || null,
      message:         message || null,
      price_per_night:              price.perNight,
      subtotal:                     price.subtotal,
      cleaning_fee:                 price.cleaningFee,
      total:                        price.subtotal + price.cleaningFee + kurtaxeTotal,
      deposit:                      price.deposit,
      remainder:                    price.remainder,
      kurtaxe_per_person_per_night: KURTAXE,
      kurtaxe_total:                kurtaxeTotal,
      ust_satz:                     7.00,
      ust_betrag:                   Math.round(ustBetrag * 100) / 100,
      netto_betrag:                 Math.round(nettoGesamt * 100) / 100,
      guests_count:                 guestsCount,
      status:                       'pending',
      blocked_from:    format(subDays(checkinDate, 1),  'yyyy-MM-dd'),
      blocked_until:   format(addDays(checkoutDate, 1), 'yyyy-MM-dd'),
    })
    .select()
    .single()

  if (dbError || !booking)
    return NextResponse.json({ error: 'Datenbankfehler' }, { status: 500 })

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card', 'sepa_debit', 'paypal'],
    mode:           'payment',
    customer_email: email,
    locale:         'de',
    line_items: [
      {
        price_data: {
          currency: 'eur',
          product_data: {
            name: `MaarZeit Vulkaneifel – ${nights} Nacht${Number(nights) > 1 ? 'nächte' : ''}`,
            description: `Check-in: ${checkin} · Check-out: ${checkout} · ${guests} Person(en) · Endreinigung inklusive · Restzahlung ${price.remainder} € bei Anreise`,
          },
          unit_amount: price.deposit * 100,
        },
        quantity: 1,
      },
      {
        price_data: {
          currency: 'eur',
          product_data: {
            name: 'Kurtaxe (Gästebeitrag)',
            description: `${guestsCount} Person(en) × ${price.nights} Nächte × 2,00 €`,
          },
          unit_amount: Math.round(kurtaxeTotal * 100),
        },
        quantity: 1,
      },
    ],
    metadata: {
      booking_id:    booking.id,
      checkin,       checkout,
      nights:        String(nights),
      guests,
      dog:           dog || 'nein',
      name,          email,
      total_eur:     String(price.subtotal + price.cleaningFee + kurtaxeTotal),
      deposit_eur:   String(price.deposit),
      remainder_eur: String(price.remainder),
    },
    success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/buchung/success?booking_id=${booking.id}`,
    cancel_url:  `${process.env.NEXT_PUBLIC_BASE_URL}/buchung?cancelled=true`,
  })

  return NextResponse.json({ url: session.url })
}
