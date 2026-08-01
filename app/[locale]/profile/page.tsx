import type { Metadata } from "next";
import { CapabilityMap } from "@/components/sections/capability-map";
import { SignalHeading } from "@/components/ui/signal-heading";
import { education } from "@/src/content/education";
import { experience } from "@/src/content/experience";
import { profileCopy } from "@/src/content/profile";
import { isLocale } from "@/src/content/site-config";

export const metadata: Metadata = { title: "IT & Digital Solutions Profile", description: "Technology, web applications, IT support, customer service, operations, digitalisation, and data capabilities of Yong Justice Numfor." };

export default async function Profile({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params; const locale = isLocale(raw) ? raw : "en"; const t = profileCopy[locale]; const fr = locale === "fr";
  return <main id="main" className="page-shell page-top"><p className="eyebrow">PROFILE / IT & DIGITAL SOLUTIONS</p><h1>{fr ? "Une technologie au service des personnes et des opérations." : "Technology that supports people and operations."}</h1><p className="profile-intro">{t.intro}</p><section className="profile-summary"><span className="index">01 / SUMMARY</span><p>{t.summary}</p><dl><div><dt>Location</dt><dd>Bafoussam, Cameroon</dd></div><div><dt>Languages</dt><dd>{fr ? "Français · Anglais · Japonais élémentaire" : "English · French · Elementary Japanese"}</dd></div><div><dt>Mobility</dt><dd>{fr ? "À distance · Sur site · Mobilité" : "Remote · On-site · Relocation"}</dd></div></dl></section><section className="section"><SignalHeading index="02" title={fr ? "Compétences reliées aux preuves." : "Capabilities connected to evidence."}/><CapabilityMap locale={locale}/></section><section className="section"><SignalHeading index="03" title={fr ? "Expérience professionnelle" : "Professional experience"}/><div className="experience-full">{experience[locale].map(e=><article key={e.role}><span>{e.period}</span><div><h3>{e.role}</h3><p>{e.organisation} · {e.location}</p><ul>{e.points.map(point=><li key={point}>{point}</li>)}</ul></div></article>)}</div></section><section className="section"><SignalHeading index="04" title={fr ? "Études & certifications" : "Education & credentials"}/><div className="education-grid">{education[locale].map(e=><article key={e.title}><h3>{e.title}</h3><p>{e.school}</p><small>{e.note}</small></article>)}</div></section><section className="section"><SignalHeading index="05" title={fr ? "Principes de travail" : "Working principles"}/><div className="principles">{t.principles.map((p,i)=><article key={p.title}><span>0{i+1}</span><h3>{p.title}</h3><p>{p.text}</p></article>)}</div></section></main>;
}
