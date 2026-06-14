"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { href: "/ferienwohnung", label: "Ferienwohnung" },
  { href: "/buchung", label: "Buchung" },
  {
    href: "/guide",
    label: "Reiseführer",
    children: [
      { href: "/guide/dauner-maare", label: "Dauner Maare" },
      { href: "/guide/wandern", label: "Wandern" },
      { href: "/guide/radfahren", label: "Radfahren" },
      { href: "/guide/ausflugsziele", label: "Ausflugsziele" },
      { href: "/guide/schlechtwetter", label: "Schlechtwetter" },
    ],
  },
  { href: "/specials", label: "Specials" },
  { href: "/hund", label: "Mit Hund" },
  { href: "/motorrad", label: "Motorrad" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [guideOpen, setGuideOpen] = useState(false);

  return (
    <header className="bg-white border-b border-stone-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex flex-col leading-tight">
          <span className="text-xl font-bold text-green-900">MaarZeit</span>
          <span className="text-xs text-stone-500 tracking-widest uppercase">Vulkaneifel</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {navItems.map((item) =>
            item.children ? (
              <div key={item.href} className="relative group">
                <button className="nav-link flex items-center gap-1">
                  {item.label}
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute top-full left-0 mt-1 bg-white border border-stone-200 rounded shadow-lg min-w-[180px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block px-4 py-2 text-sm text-stone-700 hover:bg-green-50 hover:text-green-800"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link key={item.href} href={item.href} className="nav-link">
                {item.label}
              </Link>
            )
          )}
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
          {navItems.map((item) =>
            item.children ? (
              <div key={item.href}>
                <button
                  onClick={() => setGuideOpen(!guideOpen)}
                  className="w-full text-left py-2 text-stone-700 font-medium flex justify-between items-center"
                >
                  {item.label}
                  <svg className={`w-4 h-4 transition-transform ${guideOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {guideOpen && (
                  <div className="pl-4">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block py-1.5 text-stone-600 hover:text-green-800"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="block py-2 text-stone-700 hover:text-green-800"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            )
          )}
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
