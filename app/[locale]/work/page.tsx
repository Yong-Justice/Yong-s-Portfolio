import type { Metadata } from "next";
import { ProjectIndex } from "@/components/work/project-index";
import { isLocale } from "@/src/content/site-config";

export const metadata: Metadata = {
  title: "Digital systems and selected work",
  description: "Case studies showing how Yong Justice Numfor approaches digital systems, web applications, operational workflows, information, and user support.",
};

export default async function Work({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : "en";
  return <main id="main" className="page-shell page-top">
    <p className="eyebrow">WORK / SYSTEM RECORDS</p>
    <h1>{locale === "en" ? "Digital systems, explained in context." : "Des systèmes numériques, expliqués en contexte."}</h1>
    <p className="page-intro">{locale === "en" ? "Each study connects an operational problem with its users, workflow, managed information, technical solution, interface, support considerations, and practical business value." : "Chaque étude relie un problème opérationnel à ses utilisateurs, son workflow, les informations gérées, la solution technique, l’interface, l’accompagnement et la valeur pratique pour l’activité."}</p>
    <ProjectIndex locale={locale} />
  </main>;
}
