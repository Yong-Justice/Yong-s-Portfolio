import type { Locale } from "./site-config";

export type Experience = { period: string; role: string; organisation: string; location: string; points: string[] };

export const experience: Record<Locale, Experience[]> = {
  en: [
    { period: "May — Jun 2026", role: "Census Enumerator", organisation: "RGPH/RGAE — National Operations", location: "Bafoussam & West Region", points: ["Collected structured household data digitally, verified completeness and consistency, reported anomalies, and protected confidential information.", "Managed a demanding field workload independently, completing up to 17 household interviews in one day while maintaining quality and deadlines."] },
    { period: "Aug 2022 — Feb 2024", role: "Customer Service & Transfer Operations Agent", organisation: "One Transfer / TransferGratis", location: "Yaoundé & remote", points: ["Managed digital client records covering account setup, KYC checks, transfers, supporting documents, incidents, and escalations.", "Corrected data-entry issues, maintained traceability, and supported users bilingually through resolution."] },
    { period: "Oct 2021 — Jul 2022", role: "Administrative Secretary", organisation: "Private Organisation", location: "Yaoundé", points: ["Created, classified, updated, and retrieved records, correspondence, registers, and tracking sheets.", "Controlled information accuracy and shared documents only with authorised recipients."] },
    { period: "Sep 2019 — Jun 2021", role: "Primary School Teacher", organisation: "GBPS Bamenjou", location: "Bamenjou", points: ["Planned lessons, managed groups, created learning materials, maintained records, and made complex information accessible."] },
  ],
  fr: [
    { period: "mai — juin 2026", role: "Agent recenseur", organisation: "RGPH/RGAE — Opérations nationales", location: "Bafoussam & Région de l’Ouest", points: ["Collecte numérique structurée de données ménages, contrôle de cohérence, signalement d’anomalies et protection des informations confidentielles.", "Gestion autonome d’une charge exigeante, jusqu’à 17 entretiens ménages en une journée, avec qualité et respect des délais."] },
    { period: "août 2022 — févr. 2024", role: "Agent service client & opérations de transfert", organisation: "One Transfer / TransferGratis", location: "Yaoundé & à distance", points: ["Gestion de dossiers clients : comptes, contrôles KYC, transferts, pièces justificatives, incidents et escalades.", "Correction des erreurs, maintien de la traçabilité et assistance bilingue jusqu’à résolution."] },
    { period: "oct. 2021 — juil. 2022", role: "Secrétaire administratif", organisation: "Organisation privée", location: "Yaoundé", points: ["Création, classement, mise à jour et recherche de dossiers, correspondances, registres et tableaux de suivi.", "Contrôle de l’exactitude et diffusion aux seuls destinataires habilités."] },
    { period: "sept. 2019 — juin 2021", role: "Enseignant du primaire", organisation: "GBPS Bamenjou", location: "Bamenjou", points: ["Planification des cours, gestion de groupes, création de supports, tenue de dossiers et explication accessible d’informations complexes."] },
  ],
};
