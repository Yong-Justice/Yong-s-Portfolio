import type { Locale } from "./site-config";

export const capabilities: Record<Locale, { index: string; name: string; description: string; evidence: string }[]> = {
  en: [
    { index: "01", name: "Interfaces", description: "Responsive UI, React, Next.js, accessibility, forms, and component systems.", evidence: "NexaCase · German exam platform" },
    { index: "02", name: "Information", description: "Document classification, metadata, search, validation, reporting, and archiving.", evidence: "Arkiva · Administrative records" },
    { index: "03", name: "Operations", description: "Customer support, workflow analysis, incident follow-up, KYC, and deadlines.", evidence: "Transfer operations · Census" },
    { index: "04", name: "Delivery", description: "Git/GitHub, testing, documentation, Vercel deployment, and iterative improvement.", evidence: "All selected systems" },
  ],
  fr: [
    { index: "01", name: "Interfaces", description: "UI responsive, React, Next.js, accessibilité, formulaires et systèmes de composants.", evidence: "NexaCase · Plateforme d’examens" },
    { index: "02", name: "Information", description: "Classement, métadonnées, recherche, validation, reporting et archivage.", evidence: "Arkiva · Archives administratives" },
    { index: "03", name: "Opérations", description: "Support client, analyse de workflow, suivi d’incidents, KYC et délais.", evidence: "Opérations de transfert · Recensement" },
    { index: "04", name: "Livraison", description: "Git/GitHub, tests, documentation, déploiement Vercel et amélioration itérative.", evidence: "Tous les systèmes sélectionnés" },
  ],
};
