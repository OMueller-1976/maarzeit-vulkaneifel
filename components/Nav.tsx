"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import LocaleSwitcher from "./LocaleSwitcher";

function localePath(path: string, locale: string): string {
  if (locale === 'de') return path
  return `/${locale}${path}`
}

const navItems = [
  { path: "/ferienwohnung", labelKey: "ferienwohnung" },
  { path: "/buchung",       labelKey: "buchung"       },
  { path: "/guide",         labelKey: "reisefuehrer"  },
  { path: "/specials",      labelKey: "specials"      },
  { path: "/anreise",       labelKey: "anreise"       },
  { path: "/hund",          labelKey: "mitHund"       },
  { path: "/motorrad",      labelKey: "motorrad"      },
  { path: "/kontakt",       labelKey: "kontakt"       },
] as const;

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const t = useTranslations("nav");
  const currentLocale = (['en', 'nl', 'fr'] as const).find(l =>
    pathname.startsWith('/' + l)
  ) ?? 'de';

  const logoHref = currentLocale === 'de' ? '/' : `/${currentLocale}`

  return (
    <header className="bg-white border-b border-stone-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href={logoHref} className="flex flex-col leading-tight">
          <span className="text-xl font-bold text-green-900">MaarZeit</span>
          <span className="text-xs text-stone-500 tracking-widest uppercase">Vulkaneifel</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {navItems.map((item) => (
            <Link key={item.path} href={localePath(item.path, currentLocale)} className="nav-link">
              {t(item.labelKey)}
            </Link>
          ))}
          <LocaleSwitcher currentLocale={currentLocale} />
          <Link href={localePath('/buchung', currentLocale)} className="btn-primary text-sm py-2 px-4">
            {t('jetztBuchen')}
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
              key={item.path}
              href={localePath(item.path, currentLocale)}
              className="block py-2 text-stone-700 hover:text-green-800"
              onClick={() => setMobileOpen(false)}
            >
              {t(item.labelKey)}
            </Link>
          ))}
          <div className="mt-3 flex items-center gap-3">
            <LocaleSwitcher currentLocale={currentLocale} />
            <Link
              href={localePath('/buchung', currentLocale)}
              className="btn-primary flex-1 block text-center"
              onClick={() => setMobileOpen(false)}
            >
              {t('jetztBuchen')}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
