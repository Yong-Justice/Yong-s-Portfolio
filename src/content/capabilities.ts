import type { Locale } from "./site-config";

export const capabilities: Record<Locale, { index: string; name: string; description: string; evidence: string }[]> = {
  en: [
    { index: "01", name: "Technology & development", description: "Web applications, responsive interfaces, React, Next.js, JavaScript, TypeScript, HTML, CSS, Tailwind, Supabase integration, testing, GitHub, and Vercel.", evidence: "NexaCase · Arkiva · German exam platform" },
    { index: "02", name: "IT & technical support", description: "User assistance, issue diagnosis, software and account support, installation guidance, incident follow-up, troubleshooting, and clear technical communication.", evidence: "First-line IT knowledge · User guidance" },
    { index: "03", name: "Customer service", description: "Customer requests, ticket handling, complaints and issue resolution, follow-up, onboarding, bilingual assistance, and service-focused problem-solving.", evidence: "One Transfer / TransferGratis" },
    { index: "04", name: "Operations & digitalisation", description: "Workflow organisation, document management, digital archiving, classification, deadlines, administrative support, process improvement, accuracy, and confidentiality.", evidence: "Arkiva · Administrative records · Transfer operations" },
    { index: "05", name: "Data & reporting", description: "Excel, Python, Jupyter Notebook, data entry and cleaning, reporting, dashboard concepts, information organisation, and structured field data collection.", evidence: "Software engineering · Data analysis · Census" },
  ],
  fr: [
    { index: "01", name: "Technologie & développement", description: "Applications web, interfaces responsives, React, Next.js, JavaScript, TypeScript, HTML, CSS, Tailwind, intégration Supabase, tests, GitHub et Vercel.", evidence: "NexaCase · Arkiva · Plateforme d’examens" },
    { index: "02", name: "IT & support technique", description: "Assistance utilisateur, diagnostic, support logiciel et comptes, aide à l’installation, suivi d’incidents, dépannage et communication technique claire.", evidence: "Connaissances IT de premier niveau · Accompagnement" },
    { index: "03", name: "Service client", description: "Demandes clients, tickets, résolution des réclamations, suivi, onboarding, assistance bilingue et résolution orientée service.", evidence: "One Transfer / TransferGratis" },
    { index: "04", name: "Opérations & digitalisation", description: "Organisation des workflows, gestion documentaire, archivage numérique, classement, délais, support administratif, amélioration des processus, exactitude et confidentialité.", evidence: "Arkiva · Archives administratives · Opérations de transfert" },
    { index: "05", name: "Données & reporting", description: "Excel, Python, Jupyter Notebook, saisie et nettoyage, reporting, concepts de tableau de bord, organisation et collecte structurée sur le terrain.", evidence: "Génie logiciel · Analyse de données · Recensement" },
  ],
};
