import Link from "next/link";
import { ArrowUpRight, LockKeyhole } from "lucide-react";
import { InterfaceIllustration } from "./interface-illustration";
import { CurvedArrow, FolderMark, IrregularStar, Sparkles, Tape } from "./motifs";
import type { Project } from "@/src/content/projects";
import type { Locale } from "@/src/content/site-config";

const illustration = { nexacase: "case", arkiva: "archive", "german-exam-platform": "exam" } as const;
export function ProjectSpread({ project, locale, order }: { project: Project; locale: Locale; order: number }) {
  const labels = locale === "fr" ? { problem: "Problème", role: "Rôle", study: "Voir l’étude", private: "Projet client — dépôt privé" } : { problem: "Problem", role: "Role", study: "View case study", private: "Client project — private repository" };
  return <section id={`project-${order}`} className={`editorial-project project-${order}`}><div className="editorial-inner project-layout"><div className="project-copy"><span className="scribble-label">project / 0{order}</span><h2>{project.name}</h2><p className="project-summary">{project.summary[locale]}</p>{project.confidentiality && <span className="privacy-note"><LockKeyhole size={14}/>{labels.private}</span>}<dl><div><dt>{labels.problem}</dt><dd>{project.problem[locale]}</dd></div><div><dt>{labels.role}</dt><dd>{project.role[locale]}</dd></div><div><dt>Stack</dt><dd>{project.stack.join(" · ")}</dd></div></dl><Link className="editorial-link" href={`/${locale}/work/${project.slug}`}>{labels.study}<ArrowUpRight/></Link></div><div className="project-collage"><Tape/><InterfaceIllustration type={illustration[project.slug as keyof typeof illustration]}/><div className="mobile-shot"><InterfaceIllustration type={illustration[project.slug as keyof typeof illustration]} compact/></div>{project.slug === "nexacase" && <FolderMark className="folder-doodle"/>}<IrregularStar className="project-star"/><Sparkles className="project-sparkles"/><CurvedArrow className="project-arrow"/><span className="annotation">{locale === "fr" ? "un système clair →" : "clear system →"}</span></div></div></section>;
}
