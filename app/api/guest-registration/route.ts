import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const {
      booking_id, salutation, last_name, first_name,
      street, house_number, postal_code, city,
      country, nationality, date_of_birth, passport_number,
      companions,
    } = body

    if (!booking_id || !last_name || !first_name) {
      return NextResponse.json({ error: 'Pflichtfelder fehlen' }, { status: 400 })
    }

    const { data: booking } = await supabase
      .from('bookings')
      .select('id, status')
      .eq('id', booking_id)
      .single()

    if (!booking || !['deposit_paid', 'fully_paid'].includes(booking.status)) {
      return NextResponse.json({ error: 'Buchung nicht gefunden oder nicht bezahlt' }, { status: 404 })
    }

    const { data: existing } = await supabase
      .from('guest_registrations')
      .select('id')
      .eq('booking_id', booking_id)
      .single()

    const payload = {
      salutation,
      last_name,
      first_name,
      street,
      house_number,
      postal_code,
      city,
      country,
      nationality,
      date_of_birth,
      passport_number,
      companions: companions || [],
      submitted_at: new Date().toISOString(),
    }

    if (existing) {
      await supabase
        .from('guest_registrations')
        .update(payload)
        .eq('booking_id', booking_id)
    } else {
      await supabase
        .from('guest_registrations')
        .insert({ booking_id, ...payload })
    }

    return NextResponse.json({ success: true })
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unbekannter Fehler'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}

export async function GET(req: NextRequest) {
  const booking_id = new URL(req.url).searchParams.get('booking_id')
  if (!booking_id) {
    return NextResponse.json({ error: 'booking_id fehlt' }, { status: 400 })
  }

  const { data } = await supabase
    .from('guest_registrations')
    .select('*')
    .eq('booking_id', booking_id)
    .single()

  return NextResponse.json({ data: data ?? null })
}
