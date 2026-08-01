import type { Locale } from "./site-config";

export const profileCopy: Record<Locale, { intro: string; summary: string; principles: { title: string; text: string }[] }> = {
  en: {
    intro: "I work where technology, people, and operations meet: building useful web applications, helping users resolve technical or service problems, organising information, and improving the processes that support everyday work.",
    summary: "Yong Justice Numfor is an IT and Digital Solutions Specialist with experience across web application development, technical support, customer service, data organisation, digitalisation, and operational processes. He builds responsive digital tools, helps users resolve technical and service-related problems, and transforms practical business needs into clear and usable solutions. His customer-facing background brings a strong understanding of communication, follow-up, accuracy, user needs, and service quality.",
    principles: [
      { title: "Understand", text: "Clarify the real workflow and user need before designing the screen." }, { title: "Simplify", text: "Prefer clear information architecture and maintainable components." }, { title: "Protect", text: "Treat confidentiality, permissions, and traceability as product requirements." }, { title: "Deliver", text: "Test across devices, document decisions, and improve from feedback." },
    ],
  },
  fr: {
    intro: "Je travaille à la rencontre de la technologie, des utilisateurs et des opérations : création d’applications web utiles, assistance technique, organisation de l’information et amélioration des processus quotidiens.",
    summary: "Yong Justice Numfor est spécialiste IT et solutions numériques, avec une expérience en développement d’applications web, support technique, service client, organisation des données, digitalisation et processus opérationnels. Il conçoit des outils responsives, aide les utilisateurs à résoudre des problèmes techniques et de service, et transforme les besoins métier en solutions claires et utilisables. Son expérience client lui apporte une compréhension concrète de la communication, du suivi, de la précision et de la qualité de service.",
    principles: [
      { title: "Comprendre", text: "Clarifier le workflow réel et le besoin avant de concevoir l’écran." }, { title: "Simplifier", text: "Privilégier une architecture claire et des composants maintenables." }, { title: "Protéger", text: "Traiter confidentialité, permissions et traçabilité comme exigences produit." }, { title: "Livrer", text: "Tester, documenter les décisions et améliorer grâce aux retours." },
    ],
  },
};
