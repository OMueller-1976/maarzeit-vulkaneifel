import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'
import { format } from 'date-fns'

export const dynamic = 'force-dynamic'

export async function GET() {
  const { data, error } = await supabase
    .from('bookings')
    .select('*')
    .not('status', 'eq', 'cancelled')
    .order('checkin', { ascending: true })

  if (error) return new NextResponse('Error', { status: 500 })

  const stamp  = format(new Date(), "yyyyMMdd'T'HHmmss'Z'")
  const events = (data || []).map((b) => [
    'BEGIN:VEVENT',
    `DTSTART;VALUE=DATE:${(b.blocked_from || b.checkin).replace(/-/g, '')}`,
    `DTEND;VALUE=DATE:${(b.blocked_until || b.checkout).replace(/-/g, '')}`,
    `SUMMARY:Buchung – ${b.guest_name}`,
    `UID:maarzeit-${b.id}@ferienwohnung-in-der-vulkaneifel.de`,
    `DTSTAMP:${stamp}`,
    'END:VEVENT',
  ].join('\r\n')).join('\r\n')

  const ics = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//MaarZeit Vulkaneifel//DE',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    events,
    'END:VCALENDAR',
  ].join('\r\n')

  return new NextResponse(ics, {
    headers: {
      'Content-Type':        'text/calendar; charset=utf-8',
      'Content-Disposition': 'inline; filename="maarzeit.ics"',
      'Cache-Control':       'no-cache',
    },
  })
}
