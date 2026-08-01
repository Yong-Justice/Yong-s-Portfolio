"use client";

import { Menu, Moon, Sun, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navigation } from "@/src/content/navigation";
import type { Locale } from "@/src/content/site-config";

export function SiteHeader({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);
  useEffect(() => setDark(document.documentElement.dataset.theme === "dark"), []);
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [open]);
  const otherLocale = locale === "en" ? "fr" : "en";
  const translatedPath = pathname.replace(/^\/(en|fr)/, `/${otherLocale}`);
  const toggleTheme = () => { const next = !dark; setDark(next); document.documentElement.dataset.theme = next ? "dark" : "light"; localStorage.setItem("theme", next ? "dark" : "light"); };
  return (
    <header className="site-header">
      <a className="skip-link" href="#main">Skip to content</a>
      <div className="header-inner">
        <Link className="wordmark" href={`/${locale}`} aria-label="Yong Justice Numfor home"><span>YJ</span><i />SYSTEMS</Link>
        <nav className="desktop-nav" aria-label="Primary navigation">{navigation[locale].map((item) => { const href=`/${locale}${item.href}`; const active=pathname===href; return <Link data-active={active} key={href} href={href}>{item.label}</Link>; })}</nav>
        <div className="header-actions">
          <Link className="locale-link" href={translatedPath} hrefLang={otherLocale}>{otherLocale.toUpperCase()}</Link>
          <button className="icon-button" onClick={toggleTheme} aria-label={dark ? "Use light theme" : "Use dark theme"}>{dark ? <Sun size={17} /> : <Moon size={17} />}</button>
          <button className="icon-button menu-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close menu" : "Open menu"}>{open ? <X /> : <Menu />}</button>
        </div>
      </div>
      {open && <div id="mobile-menu" className="mobile-sheet" role="dialog" aria-modal="true" aria-label="Navigation"><span className="index">NAV / {locale.toUpperCase()}</span><nav>{navigation[locale].map((item, i) => <Link key={item.href} href={`/${locale}${item.href}`}><span>0{i + 1}</span>{item.label}</Link>)}</nav><p>{locale === "en" ? "Clear systems for real work." : "Des systèmes clairs pour le travail réel."}</p></div>}
    </header>
  );
}
