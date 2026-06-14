"use client";

import { useState } from "react";
import { DayPicker, DateRange } from "react-day-picker";
import { format, differenceInCalendarDays } from "date-fns";
import { de } from "date-fns/locale";
import "react-day-picker/dist/style.css";

// Statische Beispiel-Belegtzeiten
const bookedRanges: DateRange[] = [
  { from: new Date(2026, 6, 1), to: new Date(2026, 6, 7) },
  { from: new Date(2026, 6, 20), to: new Date(2026, 6, 27) },
  { from: new Date(2026, 7, 10), to: new Date(2026, 7, 17) },
];

function isBooked(date: Date): boolean {
  return bookedRanges.some((range) => {
    if (!range.from || !range.to) return false;
    return date >= range.from && date <= range.to;
  });
}

function calcPrice(n: number) {
  const per = n >= 7 ? 75 : n >= 4 ? 85 : 95;
  return { per, total: per * n };
}

export default function BookingCalendar() {
  const [range, setRange] = useState<DateRange | undefined>();

  const nights =
    range?.from && range?.to
      ? differenceInCalendarDays(range.to, range.from)
      : 0;

  const { per, total } = calcPrice(nights);

  return (
    <div className="flex flex-col lg:flex-row gap-8 items-start">
      <div className="bg-white rounded-lg shadow-md p-4">
        <DayPicker
          mode="range"
          selected={range}
          onSelect={setRange}
          locale={de}
          disabled={[{ before: new Date() }, isBooked]}
          modifiers={{ booked: isBooked }}
          modifiersClassNames={{
            booked: "line-through text-red-400 opacity-50",
          }}
          numberOfMonths={2}
          showOutsideDays
        />
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 min-w-[260px]">
        <h3 className="text-lg font-bold text-green-900 mb-4">Ihre Auswahl</h3>
        {range?.from ? (
          <>
            <div className="text-sm space-y-2 text-stone-700">
              <div className="flex justify-between">
                <span>Anreise:</span>
                <span className="font-medium">{format(range.from, "dd.MM.yyyy", { locale: de })}</span>
              </div>
              {range.to && (
                <>
                  <div className="flex justify-between">
                    <span>Abreise:</span>
                    <span className="font-medium">{format(range.to, "dd.MM.yyyy", { locale: de })}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Nächte:</span>
                    <span className="font-medium">{nights}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Preis / Nacht:</span>
                    <span className="font-medium">{per} €</span>
                  </div>
                  <div className="border-t border-stone-200 mt-2 pt-2 flex justify-between text-base font-bold text-green-900">
                    <span>Gesamt:</span>
                    <span>{total} €</span>
                  </div>
                  <p className="text-xs text-stone-400 mt-1">
                    inkl. Nebenkosten · Mindestaufenthalt 2 Nächte
                  </p>
                </>
              )}
            </div>
            {nights >= 2 && (
              <a
                href={`mailto:kontakt@ferienwohnung-in-der-vulkaneifel.de?subject=Buchungsanfrage ${format(range.from, "dd.MM.yyyy")} – ${range.to ? format(range.to, "dd.MM.yyyy") : ""}&body=Guten Tag,%0A%0Aich möchte die Ferienwohnung MaarZeit für folgende Zeit anfragen:%0A%0AAnreise: ${format(range.from, "dd.MM.yyyy")}%0AAbreise: ${range.to ? format(range.to, "dd.MM.yyyy") : ""}%0A%0AAnzahl Personen:%0AMit Hund: ja / nein%0A%0AMit freundlichen Grüßen`}
                className="btn-primary w-full text-center mt-4 block"
              >
                Anfrage senden
              </a>
            )}
            {nights === 1 && (
              <p className="text-xs text-amber-700 mt-3 bg-amber-50 p-2 rounded">
                Mindestaufenthalt: 2 Nächte
              </p>
            )}
          </>
        ) : (
          <p className="text-sm text-stone-500">
            Wählen Sie Anreise- und Abreisedatum im Kalender aus.
          </p>
        )}

        <div className="mt-6 pt-4 border-t border-stone-100 text-xs text-stone-500 space-y-1">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-300 inline-block" />
            <span>Bereits belegt</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-green-700 inline-block" />
            <span>Ausgewählter Zeitraum</span>
          </div>
        </div>
      </div>
    </div>
  );
}
