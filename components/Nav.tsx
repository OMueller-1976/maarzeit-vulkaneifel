"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { href: "/ferienwohnung", label: "Ferienwohnung" },
  { href: "/buchung", label: "Buchung" },
  { href: "/guide", label: "Reiseführer" },
  { href: "/specials", label: "Specials" },
  { href: "/anreise", label: "Anreise" },
  { href: "/hund", label: "Mit Hund" },
  { href: "/motorrad", label: "Motorrad" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-white border-b border-stone-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex flex-col leading-tight">
          <span className="text-xl font-bold text-green-900">MaarZeit</span>
          <span className="text-xs text-stone-500 tracking-widest uppercase">Vulkaneifel</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="nav-link">
              {item.label}
            </Link>
          ))}
          <Link href="/buchung" className="btn-primary text-sm py-2 px-4">
            Jetzt buchen
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menü öffnen"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-stone-200 px-4 pb-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block py-2 text-stone-700 hover:text-green-800"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/buchung"
            className="btn-primary block text-center mt-3"
            onClick={() => setMobileOpen(false)}
          >
            Jetzt buchen
          </Link>
        </div>
      )}
    </header>
  );
}
