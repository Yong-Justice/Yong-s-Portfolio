"use client";

import { ArrowUpRight, LockKeyhole } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { projects } from "@/src/content/projects";
import type { Locale } from "@/src/content/site-config";

const labels = { en: { open: "Open case study", pending: "Record pending", private: "Private" }, fr: { open: "Ouvrir l’étude", pending: "Fiche en attente", private: "Privé" } };
export function ProjectIndex({ locale, limit }: { locale: Locale; limit?: number }) {
  const items = projects.slice(0, limit); const [active, setActive] = useState(0);
  return <div className="project-index"><div className="project-rows">{items.map((project, i) => { const href=`/${locale}/work/${project.slug}`; return <article className="project-row" data-active={active===i} key={project.slug} onMouseEnter={() => setActive(i)}><button onClick={() => setActive(i)} aria-expanded={active===i}><span className="project-number">{project.index}</span><span><strong>{project.name}</strong><small>{project.category[locale]}</small></span><span className="project-status">{project.status === "client-private" && <LockKeyhole size={13} />}{project.status.replace("-", " ")}</span></button>{active===i && <div className="project-mobile-preview"><p>{project.summary[locale]}</p>{project.hasCaseStudy ? <Link href={href}>{labels[locale].open}<ArrowUpRight size={16} /></Link> : <span>{labels[locale].pending}</span>}</div>}</article>; })}</div><aside className="project-preview" aria-live="polite"><span className="index">{items[active].index} / RECORD</span><h3>{items[active].name}</h3><p>{items[active].summary[locale]}</p><dl><div><dt>Role</dt><dd>{items[active].role[locale]}</dd></div><div><dt>Year</dt><dd>{items[active].year}</dd></div><div><dt>Stack</dt><dd>{items[active].stack.slice(0,3).join(" · ") || "TODO"}</dd></div></dl>{items[active].hasCaseStudy ? <Link className="text-link" href={`/${locale}/work/${items[active].slug}`}>{labels[locale].open}<ArrowUpRight size={16} /></Link> : <span className="unavailable">{labels[locale].pending}</span>}</aside></div>;
}
