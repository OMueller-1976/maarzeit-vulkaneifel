import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export const dynamic = 'force-dynamic'

export async function GET() {
  const { data, error } = await supabase
    .from('bookings')
    .select('checkin, checkout, blocked_from, blocked_until, status')
    .not('status', 'eq', 'cancelled')
    .order('checkin', { ascending: true })

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })

  const blockedRanges = (data || []).map((b) => ({
    from: b.blocked_from || b.checkin,
    to:   b.blocked_until || b.checkout,
  }))

  return NextResponse.json({ blockedRanges })
}
