CREATE TABLE IF NOT EXISTS bookings (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  checkin DATE NOT NULL,
  checkout DATE NOT NULL,
  nights INTEGER NOT NULL,
  guests TEXT NOT NULL DEFAULT '1',
  dog TEXT NOT NULL DEFAULT 'nein',
  motorcycle TEXT NOT NULL DEFAULT 'nein',
  guest_name TEXT NOT NULL,
  guest_email TEXT NOT NULL,
  guest_phone TEXT,
  message TEXT,
  price_per_night INTEGER NOT NULL,
  subtotal INTEGER NOT NULL,
  cleaning_fee INTEGER NOT NULL DEFAULT 20,
  total INTEGER NOT NULL,
  deposit INTEGER NOT NULL,
  remainder INTEGER NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending',
  stripe_session_id TEXT,
  stripe_payment_intent TEXT,
  blocked_from DATE,
  blocked_until DATE,
  notes TEXT
);

CREATE INDEX idx_bookings_dates ON bookings(checkin, checkout, status);

ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;
