import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { CapabilityMap } from "@/components/sections/capability-map";
import { SignalHeading } from "@/components/ui/signal-heading";
import { ProjectIndex } from "@/components/work/project-index";
import { copy } from "@/src/content/copy";
import { experience } from "@/src/content/experience";
import { isLocale, siteConfig } from "@/src/content/site-config";

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params; const locale = isLocale(raw) ? raw : "en"; const t=copy[locale];
  const jsonLd={ "@context":"https://schema.org", "@type":"Person", name:siteConfig.name, jobTitle:siteConfig.title, address:{"@type":"PostalAddress",addressLocality:"Bafoussam",addressCountry:"CM"}, sameAs:[siteConfig.linkedin] };
  return <main id="main"><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(jsonLd)}} />
    <section className="hero page-shell"><div className="hero-copy"><Reveal><p className="eyebrow">{t.eyebrow}</p><h1>{t.hero}</h1></Reveal><Reveal delay={.12}><p className="hero-intro">{t.heroText}</p><div className="hero-actions"><Link className="button primary" href={`/${locale}/work`}>{t.explore}<ArrowRight size={17}/></Link><Link className="button secondary" href={`/${locale}/cv`}>{t.record}</Link></div></Reveal><Reveal delay={.2}><p className="availability"><i />{t.availability}</p></Reveal></div><Reveal className="portrait-wrap" delay={.08}><div className="portrait-index">PORTRAIT / 01</div><Image priority src="/images/justice-portrait.jpg" alt="Portrait of Yong Justice Numfor" fill sizes="(max-width: 768px) 100vw, 40vw" /></Reveal><div className="hero-meta"><span>Bafoussam, Cameroon</span><span>English + French</span><span>Remote + relocation open</span></div><a className="scroll-cue" href="#selected"><ArrowDown size={16}/>SCROLL / EXPLORE</a></section>
    <section id="selected" className="section page-shell"><Reveal><SignalHeading index="01" eyebrow="WORK / INDEX" title={t.selected}/><p className="section-lead">{t.selectedText}</p></Reveal><Reveal><ProjectIndex locale={locale} limit={4}/></Reveal></section>
    <section className="section page-shell"><Reveal><SignalHeading index="02" eyebrow="CAPABILITY / EVIDENCE" title={t.capabilities}/></Reveal><Reveal><CapabilityMap locale={locale}/></Reveal></section>
    <section className="section page-shell"><Reveal><SignalHeading index="03" eyebrow="EXPERIENCE / EXTRACT" title={t.experience}/></Reveal><div className="timeline">{experience[locale].slice(0,3).map((item) => <Reveal key={item.role} className="timeline-item"><span>{item.period}</span><div><h3>{item.role}</h3><p>{item.organisation}</p><small>{item.location}</small></div></Reveal>)}</div><Link className="text-link" href={`/${locale}/profile`}>{t.viewProfile}<ArrowRight size={16}/></Link></section>
    <section className="closing page-shell"><span className="index">04 / CONTACT</span><Reveal><h2>{t.closing}</h2><p>{t.closingText}</p><div className="hero-actions"><Link className="button primary" href={`/${locale}/contact`}>{t.discuss}</Link><a className="button secondary" href={siteConfig.cv[locale]} download>{t.download}</a></div></Reveal></section>
  </main>;
}
