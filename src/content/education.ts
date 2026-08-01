import type { Locale } from "./site-config";

export const education: Record<Locale, { title: string; school: string; note: string }[]> = {
  en: [
    { title: "Bachelor’s Degree in Software Engineering — Data Analysis", school: "ICT University", note: "Degree completed in 2026." },
    { title: "Professional Certificate in Data Analysis", school: "VisionConception Academy", note: "One-year applied programme covering data preparation, analysis, and reporting." },
    { title: "Microsoft Office Specialist — Level 3", school: "Professional certification", note: "Word, Excel, PowerPoint, and productivity tools." },
    { title: "GCE Advanced Level — Science", school: "GBHS Emana", note: "Chemistry, ICT, and Biology." },
  ],
  fr: [
    { title: "Licence / Bachelor en Génie logiciel — Analyse de données", school: "ICT University", note: "Diplôme obtenu en 2026." },
    { title: "Certificat professionnel en Analyse de données", school: "VisionConception Academy", note: "Programme appliqué d’un an en préparation, analyse et reporting des données." },
    { title: "Microsoft Office Specialist — Niveau 3", school: "Certification professionnelle", note: "Word, Excel, PowerPoint et outils de productivité." },
    { title: "GCE Advanced Level — Série scientifique", school: "GBHS Emana", note: "Chimie, ICT et Biologie." },
  ],
};
