import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import { supabase } from '@/lib/supabase'

export const dynamic = 'force-dynamic'

export async function POST(req: NextRequest) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2026-05-27.dahlia',
  })
  const body      = await req.text()
  const signature = req.headers.get('stripe-signature')!

  let event: Stripe.Event
  try {
    event = stripe.webhooks.constructEvent(body, signature, process.env.STRIPE_WEBHOOK_SECRET!)
  } catch (err) {
    return NextResponse.json({ error: 'Webhook signature verification failed' }, { status: 400 })
  }

  if (event.type === 'checkout.session.completed') {
    const session    = event.data.object as Stripe.Checkout.Session
    const bookingId  = session.metadata?.booking_id

    if (bookingId) {
      const { data: booking } = await supabase
        .from('bookings')
        .update({
          status:                 'deposit_paid',
          stripe_session_id:      session.id,
          stripe_payment_intent:  String(session.payment_intent ?? ''),
        })
        .eq('id', bookingId)
        .select()
        .single()

      if (booking && process.env.N8N_BOOKING_WEBHOOK_URL) {
        await fetch(process.env.N8N_BOOKING_WEBHOOK_URL, {
          method:  'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            booking_id:    bookingId,
            checkin:       session.metadata?.checkin,
            checkout:      session.metadata?.checkout,
            nights:        session.metadata?.nights,
            guests:        session.metadata?.guests,
            dog:           session.metadata?.dog,
            guest_name:    session.metadata?.name,
            guest_email:   session.metadata?.email,
            total_eur:     session.metadata?.total_eur,
            deposit_eur:   session.metadata?.deposit_eur,
            remainder_eur: session.metadata?.remainder_eur,
            ical_url:      `${process.env.NEXT_PUBLIC_BASE_URL}/api/calendar.ics`,
          }),
        }).catch(() => {/* n8n errors must not break the webhook response */})
      }
    }
  }

  if (event.type === 'checkout.session.expired') {
    const session   = event.data.object as Stripe.Checkout.Session
    const bookingId = session.metadata?.booking_id

    if (bookingId) {
      await supabase
        .from('bookings')
        .update({ status: 'cancelled' })
        .eq('id', bookingId)
        .eq('status', 'pending')
    }
  }

  return NextResponse.json({ received: true })
}
