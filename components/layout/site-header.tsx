"use client";

import { Menu, Moon, Sun, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import type { Locale } from "@/src/content/site-config";

const anchors = {
  en: [{ id: "home", label: "Home" }, { id: "about", label: "About" }, { id: "skills", label: "Skills" }, { id: "experience", label: "Experience" }, { id: "work", label: "Work" }, { id: "contact", label: "Contact" }],
  fr: [{ id: "home", label: "Accueil" }, { id: "about", label: "Profil" }, { id: "skills", label: "Compétences" }, { id: "experience", label: "Expérience" }, { id: "work", label: "Projets" }, { id: "contact", label: "Contact" }],
};

export function SiteHeader({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [active, setActive] = useState("home");
  useEffect(() => setDark(document.documentElement.dataset.theme === "dark"), []);
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    if (pathname !== `/${locale}`) return;
    const sections = anchors[locale].map((item) => document.getElementById(item.id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) setActive(entry.target.id); }), { rootMargin: "-25% 0px -65%" });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [locale, pathname]);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [open]);
  const otherLocale = locale === "en" ? "fr" : "en";
  const translatedPath = pathname.replace(/^\/(en|fr)/, `/${otherLocale}`);
  const toggleTheme = () => { const next = !dark; setDark(next); document.documentElement.dataset.theme = next ? "dark" : "light"; localStorage.setItem("theme", next ? "dark" : "light"); };
  return (
    <header className="site-header">
      <a className="skip-link" href="#main">Skip to content</a>
      <div className="header-inner">
        <Link className="wordmark editorial-wordmark" href={`/${locale}#home`} aria-label="Yong Justice Numfor home"><span>YJ</span><i />PORTFOLIO</Link>
        <nav className="desktop-nav editorial-nav" aria-label="Primary navigation">{anchors[locale].map((item) => <Link data-active={active === item.id} key={item.id} href={`/${locale}#${item.id}`}>{item.label}</Link>)}</nav>
        <div className="header-actions">
          <Link className="locale-link" href={translatedPath} hrefLang={otherLocale}>{otherLocale.toUpperCase()}</Link>
          <button className="icon-button" onClick={toggleTheme} aria-label={dark ? "Use light theme" : "Use dark theme"}>{dark ? <Sun size={17} /> : <Moon size={17} />}</button>
          <button className="icon-button menu-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close menu" : "Open menu"}>{open ? <X /> : <Menu />}</button>
        </div>
      </div>
      {open && <div id="mobile-menu" className="mobile-sheet editorial-menu" role="dialog" aria-modal="true" aria-label="Navigation"><span className="index">NAV / {locale.toUpperCase()}</span><nav>{anchors[locale].map((item, i) => <Link key={item.id} href={`/${locale}#${item.id}`}><span>0{i + 1}</span>{item.label}</Link>)}</nav><p>{locale === "en" ? "Useful systems, clearly explained." : "Des systèmes utiles, clairement expliqués."}</p></div>}
    </header>
  );
}
