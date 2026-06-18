import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import { createClient } from '@supabase/supabase-js'

export const dynamic = 'force-dynamic'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2026-05-27.dahlia',
})
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export async function POST(req: NextRequest) {
  try {
    const { booking_id, secret } = await req.json()

    // Einfacher Schutz – nur n8n darf das aufrufen
    if (secret !== process.env.N8N_API_KEY) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { data: booking, error } = await supabase
      .from('bookings')
      .select('*')
      .eq('id', booking_id)
      .single()

    if (error || !booking) {
      return NextResponse.json({ error: 'Booking not found' }, { status: 404 })
    }

    // Falls bereits ein Link existiert, diesen wiederverwenden
    if (booking.remainder_payment_link) {
      return NextResponse.json({ url: booking.remainder_payment_link })
    }

    const remainderCents = Math.round(booking.remainder * 100)

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card', 'sepa_debit', 'paypal'],
      line_items: [{
        price_data: {
          currency: 'eur',
          product_data: {
            name: `MaarZeit Vulkaneifel – Restzahlung`,
            description: `Check-in: ${booking.checkin} · Check-out: ${booking.checkout}`,
          },
          unit_amount: remainderCents,
        },
        quantity: 1,
      }],
      customer_email: booking.guest_email,
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/buchung/success?remainder=true`,
      cancel_url:  `${process.env.NEXT_PUBLIC_BASE_URL}/buchung`,
      metadata: {
        booking_id: booking.id,
        type: 'remainder_payment',
      },
    })

    await supabase
      .from('bookings')
      .update({ remainder_payment_link: session.url })
      .eq('id', booking_id)

    return NextResponse.json({ url: session.url })
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unknown error'
    console.error('Remainder link error:', message)
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
