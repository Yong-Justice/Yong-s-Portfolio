import type { Locale } from "./site-config";

export const profileCopy: Record<Locale, { intro: string; summary: string; principles: { title: string; text: string }[] }> = {
  en: {
    intro: "I’m a software engineering graduate who is most engaged when technology has to make real work clearer: organising records, guiding a user through a process, resolving an operational problem, or turning scattered data into something useful.",
    summary: "Bilingual software engineering graduate specialised in data analysis, combining frontend development with practical experience in digital records, customer operations, data quality, and first-line IT support.",
    principles: [
      { title: "Understand", text: "Clarify the real workflow and user need before designing the screen." }, { title: "Simplify", text: "Prefer clear information architecture and maintainable components." }, { title: "Protect", text: "Treat confidentiality, permissions, and traceability as product requirements." }, { title: "Deliver", text: "Test across devices, document decisions, and improve from feedback." },
    ],
  },
  fr: {
    intro: "Je suis diplômé en génie logiciel et particulièrement engagé lorsque la technologie doit rendre le travail réel plus clair : organiser des dossiers, guider un utilisateur, résoudre un problème opérationnel ou transformer des données dispersées en information utile.",
    summary: "Diplômé bilingue spécialisé en analyse de données, je combine développement frontend et expérience pratique en gestion documentaire, opérations clients, qualité des données et support informatique de premier niveau.",
    principles: [
      { title: "Comprendre", text: "Clarifier le workflow réel et le besoin avant de concevoir l’écran." }, { title: "Simplifier", text: "Privilégier une architecture claire et des composants maintenables." }, { title: "Protéger", text: "Traiter confidentialité, permissions et traçabilité comme exigences produit." }, { title: "Livrer", text: "Tester, documenter les décisions et améliorer grâce aux retours." },
    ],
  },
};
