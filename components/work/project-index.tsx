"use client";

import { ArrowUpRight, LockKeyhole } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { projects } from "@/src/content/projects";
import type { Locale } from "@/src/content/site-config";

const labels = {
  en: { open: "Open case study", role: "Role", year: "Year", stack: "Stack", record: "PROJECT RECORD" },
  fr: { open: "Ouvrir l’étude", role: "Rôle", year: "Année", stack: "Technologies", record: "FICHE PROJET" },
};

export function ProjectIndex({ locale, limit }: { locale: Locale; limit?: number }) {
  const items = projects.filter((project) => project.hasCaseStudy).slice(0, limit);
  const [active, setActive] = useState(0);
  const t = labels[locale];

  return (
    <div className="project-index">
      <div className="project-rows">
        {items.map((project, index) => {
          const href = `/${locale}/work/${project.slug}`;
          const status = project.status === "client-private"
            ? (locale === "fr" ? "Projet client" : "Client project")
            : (locale === "fr" ? "En développement" : "In development");

          return (
            <article className="project-row" data-active={active === index} key={project.slug}>
              <button onClick={() => setActive(index)} aria-expanded={active === index}>
                <span className="project-number">{project.index}</span>
                <span><strong>{project.name}</strong><small>{project.category[locale]}</small></span>
                <span className="project-status">{project.status === "client-private" && <LockKeyhole size={13} />}{status}</span>
              </button>
              {active === index && (
                <div className="project-mobile-preview">
                  <p>{project.summary[locale]}</p>
                  <Link href={href}>{t.open}<ArrowUpRight size={16} /></Link>
                </div>
              )}
            </article>
          );
        })}
      </div>
      <aside className="project-preview" aria-live="polite">
        <span className="index">{items[active].index} / {t.record}</span>
        <h3>{items[active].name}</h3>
        <p>{items[active].summary[locale]}</p>
        <dl>
          <div><dt>{t.role}</dt><dd>{items[active].role[locale]}</dd></div>
          <div><dt>{t.year}</dt><dd>{items[active].year}</dd></div>
          <div><dt>{t.stack}</dt><dd>{items[active].stack.slice(0, 3).join(" · ") || "—"}</dd></div>
        </dl>
        <Link className="text-link" href={`/${locale}/work/${items[active].slug}`}>{t.open}<ArrowUpRight size={16} /></Link>
      </aside>
    </div>
  );
}
