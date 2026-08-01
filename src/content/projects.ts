import type { Locale } from "./site-config";

type LocalText = Record<Locale, string>;
export type Project = {
  slug: string; index: string; name: string; category: LocalText; status: "in-development" | "client-private" | "concept";
  year: string; role: LocalText; summary: LocalText; problem: LocalText; context: LocalText; constraints: Record<Locale, string[]>;
  responsibilities: Record<Locale, string[]>; features: Record<Locale, string[]>; stack: string[];
  decisions: Record<Locale, { title: string; description: string }[]>; outcomes: Record<Locale, string[]>; lessons: Record<Locale, string[]>;
  next: Record<Locale, string[]>; liveUrl?: string; repositoryUrl?: string; repositoryVisibility: "public" | "private" | "not-applicable";
  confidentiality?: LocalText; hasCaseStudy: boolean; todo?: string;
};

export const projects: Project[] = [
  {
    slug: "nexacase", index: "SYS—01", name: "NexaCase", status: "in-development", year: "2026", hasCaseStudy: true,
    category: { en: "Case management / workflow software", fr: "Gestion de dossiers / logiciel de workflow" },
    role: { en: "Product design & frontend development", fr: "Design produit & développement frontend" },
    summary: { en: "A responsive case-management workspace designed to help professional teams organise clients, cases, documents, tasks, and critical deadlines from one clear interface.", fr: "Un espace responsive de gestion de dossiers conçu pour aider les équipes à organiser clients, affaires, documents, tâches et échéances depuis une interface claire." },
    context: { en: "A fictional demonstration product for small professional teams whose daily work depends on linked people, cases, documents, tasks, and dates.", fr: "Un produit de démonstration fictif pour de petites équipes dont le travail quotidien dépend de personnes, dossiers, documents, tâches et dates liés." },
    problem: { en: "Operational context is easily fragmented across spreadsheets, folders, calendars, and messages. The system needs to make the current state and next action visible without exposing real client data.", fr: "Le contexte opérationnel se fragmente facilement entre tableurs, dossiers, calendriers et messages. Le système doit rendre visibles l’état actuel et la prochaine action sans exposer de données réelles." },
    constraints: { en: ["Fictional demonstration data only", "Dense records must remain usable on small screens", "Deadlines and ownership need clear visual priority"], fr: ["Données de démonstration fictives uniquement", "Les dossiers denses doivent rester utilisables sur mobile", "Les échéances et responsabilités exigent une priorité visuelle claire"] },
    responsibilities: { en: ["Model case and client information", "Design responsive workflow views", "Implement search, filters, tasks, and status patterns", "Document assumptions and privacy guardrails"], fr: ["Modéliser les informations de dossier et client", "Concevoir des vues de workflow responsives", "Implémenter recherche, filtres, tâches et statuts", "Documenter hypothèses et garde-fous de confidentialité"] },
    features: { en: ["Dashboard and workload indicators", "Client and case records", "Document organisation", "Deadlines, calendar, and priority tasks", "Search and filters"], fr: ["Tableau de bord et charge de travail", "Fiches clients et dossiers", "Organisation documentaire", "Échéances, calendrier et tâches prioritaires", "Recherche et filtres"] },
    stack: ["Next.js", "TypeScript", "React", "Tailwind CSS", "Vercel"],
    decisions: { en: [{ title: "Case-first navigation", description: "Keep the case as the stable context while people, documents, tasks, and dates change around it." }, { title: "Status before decoration", description: "Use restrained signals for risk, ownership, and deadlines so the interface remains calm under load." }], fr: [{ title: "Navigation centrée dossier", description: "Garder le dossier comme contexte stable autour des personnes, documents, tâches et dates." }, { title: "Le statut avant la décoration", description: "Employer des signaux sobres pour le risque, la responsabilité et les échéances." }] },
    outcomes: { en: ["A coherent portfolio MVP demonstrating the relationship between records, workload, and next actions.", "No performance metrics are claimed until the product is tested with representative users."], fr: ["Un MVP cohérent démontrant les liens entre dossiers, charge et prochaines actions.", "Aucune métrique n’est revendiquée avant des tests représentatifs."] },
    lessons: { en: ["Operational products need progressive disclosure more than visual novelty.", "A status label is only useful when it suggests what happens next."], fr: ["Les produits opérationnels ont davantage besoin de divulgation progressive que de nouveauté visuelle.", "Un statut n’est utile que s’il indique la suite."] },
    next: { en: ["Validate terminology with professional users", "Add realistic empty, error, and permission states", "Confirm public deployment and repository URLs"], fr: ["Valider la terminologie avec des utilisateurs professionnels", "Ajouter les états vides, erreurs et permissions", "Confirmer les URLs de déploiement et dépôt"] },
    repositoryVisibility: "public", todo: "TODO_NEXACASE_LIVE_AND_REPOSITORY_URLS",
  },
  {
    slug: "arkiva", index: "SYS—02", name: "Arkiva", status: "in-development", year: "2026", hasCaseStudy: true,
    category: { en: "Digital document management / GED", fr: "Gestion électronique des documents / GED" },
    role: { en: "Information architecture & frontend development", fr: "Architecture de l’information & développement frontend" },
    summary: { en: "A digital document-management and archiving interface that demonstrates how organisations can capture, classify, find, secure, and retrieve documents with less friction.", fr: "Une interface de gestion et d’archivage électronique montrant comment capturer, classer, retrouver et sécuriser les documents avec moins de friction." },
    context: { en: "A portfolio MVP representing the document lifecycle from intake through classification, controlled retrieval, and retention.", fr: "Un MVP représentant le cycle documentaire depuis l’acquisition jusqu’au classement, à la recherche contrôlée et à la conservation." },
    problem: { en: "Files lose operational value when naming, metadata, permissions, and retention are inconsistent. Retrieval must be fast without weakening governance.", fr: "Les fichiers perdent leur valeur lorsque nommage, métadonnées, permissions et conservation sont incohérents. La recherche doit rester rapide sans affaiblir la gouvernance." },
    constraints: { en: ["Represent OCR readiness without claiming an OCR engine", "Make metadata useful rather than burdensome", "Keep access and activity states legible"], fr: ["Représenter la préparation OCR sans prétendre fournir un moteur", "Rendre les métadonnées utiles et non lourdes", "Rendre lisibles accès et historique"] },
    responsibilities: { en: ["Define folder, document, and metadata relationships", "Design intake and retrieval workflows", "Represent permission, activity, and retention states", "Build responsive document views"], fr: ["Définir les relations dossiers, documents et métadonnées", "Concevoir acquisition et recherche", "Représenter permissions, activité et conservation", "Construire des vues documentaires responsives"] },
    features: { en: ["Document intake and preview", "Folder structure and naming conventions", "Metadata, tags, and advanced search", "Permissions and activity history", "Download controls and retention status"], fr: ["Acquisition et aperçu documentaire", "Arborescence et règles de nommage", "Métadonnées, tags et recherche avancée", "Permissions et historique", "Téléchargement et conservation"] },
    stack: ["Next.js", "TypeScript", "React", "Information architecture", "Vercel"],
    decisions: { en: [{ title: "Metadata in context", description: "Show the fields needed for the current task rather than presenting one overwhelming record form." }, { title: "Retrieval as a workflow", description: "Keep query, filters, preview, and access status together so users can judge a result before opening it." }], fr: [{ title: "Métadonnées en contexte", description: "Afficher les champs nécessaires à la tâche plutôt qu’un formulaire écrasant." }, { title: "Recherche comme workflow", description: "Regrouper requête, filtres, aperçu et accès pour juger un résultat avant ouverture." }] },
    outcomes: { en: ["A distinct information-governance concept, separated clearly from NexaCase’s case workflow.", "The MVP documents intended behaviour without inventing adoption results."], fr: ["Un concept de gouvernance distinct du workflow de dossiers de NexaCase.", "Le MVP documente le comportement attendu sans inventer de résultats d’adoption."] },
    lessons: { en: ["Good search begins during document intake.", "Permission and retention states must be visible before an action is attempted."], fr: ["Une bonne recherche commence dès l’acquisition.", "Permissions et conservation doivent être visibles avant l’action."] },
    next: { en: ["Prototype batch intake and validation", "Test metadata vocabulary", "Confirm public deployment and repository URLs"], fr: ["Prototyper l’acquisition par lots", "Tester le vocabulaire des métadonnées", "Confirmer les URLs publiques"] },
    repositoryVisibility: "public", todo: "TODO_ARKIVA_LIVE_AND_REPOSITORY_URLS",
  },
  {
    slug: "german-exam-platform", index: "SYS—03", name: "German Exam Preparation Platform", status: "client-private", year: "2026", hasCaseStudy: true,
    category: { en: "Educational technology", fr: "Technologie éducative" },
    role: { en: "Frontend contributor", fr: "Contributeur frontend" },
    summary: { en: "A responsive examination-preparation platform that supports structured German-language practice experiences across reading, listening, writing, and speaking.", fr: "Une plateforme responsive de préparation qui structure l’entraînement en allemand : lecture, écoute, écriture et expression orale." },
    context: { en: "Client work on a private product. This record describes only verified contribution areas and deliberately excludes proprietary content and administration details.", fr: "Travail client sur un produit privé. Cette fiche décrit uniquement les contributions vérifiées et exclut les contenus propriétaires et détails d’administration." },
    problem: { en: "Learning activities across four skills require different media and response patterns while still feeling like one coherent preparation journey.", fr: "Les activités couvrant quatre compétences exigent des médias et réponses différents tout en formant un parcours cohérent." },
    constraints: { en: ["Private repository and client confidentiality", "No screenshots or live link without permission", "Never expose user, payment, credential, or proprietary exam data"], fr: ["Dépôt privé et confidentialité client", "Aucune capture ni lien sans autorisation", "Ne jamais exposer données utilisateurs, paiements, identifiants ou contenu propriétaire"] },
    responsibilities: { en: ["Contribute to product flows and responsive interfaces", "Organise content presentation", "Test workflows across device sizes", "Support iterative usability improvements"], fr: ["Contribuer aux parcours et interfaces responsives", "Organiser la présentation des contenus", "Tester sur plusieurs formats", "Participer aux améliorations itératives"] },
    features: { en: ["Reading and listening practice", "Writing and speaking workflows", "Authentication and role-based application flows", "Multimedia content presentation"], fr: ["Pratique de lecture et écoute", "Parcours écriture et oral", "Authentification et workflows par rôle", "Présentation multimédia"] },
    stack: ["React", "JavaScript", "Supabase", "SQL", "Multimedia"],
    decisions: { en: [{ title: "Confidentiality by default", description: "Use a sanitized system diagram until the client explicitly approves public screenshots." }, { title: "Skill-specific interaction", description: "Keep each exam mode fit for its task while preserving shared navigation and feedback patterns." }], fr: [{ title: "Confidentialité par défaut", description: "Utiliser un schéma neutralisé jusqu’à autorisation explicite des captures." }, { title: "Interaction selon la compétence", description: "Adapter chaque mode d’examen tout en conservant navigation et retours partagés." }] },
    outcomes: { en: ["Contributed verified frontend, content-organisation, testing, and usability work.", "No ownership, commercial result, or client metric is claimed."], fr: ["Contribution vérifiée au frontend, à l’organisation des contenus, aux tests et à l’utilisabilité.", "Aucune propriété, résultat commercial ou métrique client n’est revendiqué."] },
    lessons: { en: ["Confidential work can still demonstrate process when boundaries are explicit.", "Multimedia learning flows need resilient loading and feedback states."], fr: ["Un travail confidentiel peut démontrer un processus si les limites sont explicites.", "Les parcours multimédias exigent des états de chargement et retour robustes."] },
    next: { en: ["Request written permission for portfolio presentation", "Prepare sanitized, approved images only if permission is granted"], fr: ["Demander une autorisation écrite", "Préparer uniquement des images neutralisées et approuvées"] },
    repositoryVisibility: "private", confidentiality: { en: "Private repository — client confidentiality", fr: "Dépôt privé — confidentialité client" }, todo: "TODO_PERMISSION_CLIENT_PROJECT",
  },
  {
    slug: "formalio", index: "SYS—04", name: "Formalio", status: "concept", year: "TODO", hasCaseStudy: false,
    category: { en: "Project record pending verification", fr: "Fiche projet en attente de vérification" },
    role: { en: "TODO — confirm role", fr: "TODO — confirmer le rôle" },
    summary: { en: "This project was named in the original portfolio brief, but no verified description, role, links, or outcomes were supplied. Its record remains intentionally incomplete.", fr: "Ce projet est nommé dans le brief, mais aucune description, rôle, lien ou résultat vérifié n’a été fourni. Sa fiche reste volontairement incomplète." },
    context: { en: "Pending verified source material.", fr: "En attente de contenu vérifié." }, problem: { en: "TODO", fr: "TODO" },
    constraints: { en: ["Do not publish unverified claims"], fr: ["Ne pas publier d’affirmations non vérifiées"] }, responsibilities: { en: [], fr: [] }, features: { en: [], fr: [] }, stack: [], decisions: { en: [], fr: [] }, outcomes: { en: [], fr: [] }, lessons: { en: [], fr: [] }, next: { en: ["Add verified brief, role, status, and links"], fr: ["Ajouter le brief, rôle, statut et liens vérifiés"] },
    repositoryVisibility: "not-applicable", todo: "TODO_FORMALIO_PROJECT_DETAILS",
  },
];

export const getProject = (slug: string) => projects.find((project) => project.slug === slug);
