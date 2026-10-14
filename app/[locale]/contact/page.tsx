import type { Metadata } from "next";
import { ArrowUpRight, Mail, MapPin, MessageCircle } from "lucide-react";
import { ContactWhatsAppForm } from "@/components/sections/contact-whatsapp-form";
import { isLocale, siteConfig } from "@/src/content/site-config";

export const metadata: Metadata = {
  title: "Contact — IT & Digital Solutions",
  description: "Contact Yong Justice Numfor about IT support, web applications, customer support, operations, digitalisation, motion design, or data opportunities.",
};

export default async function Contact({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : "en";
  const fr = locale === "fr";

  return (
    <main id="main" className="page-shell page-top contact-page">
      <p className="eyebrow">{fr ? "CONTACT / SOLUTIONS NUMÉRIQUES" : "CONTACT / DIGITAL SOLUTIONS"}</p>
      <h1>{fr ? "Résolvons un problème utile ensemble." : "Let’s solve something useful together."}</h1>
      <p className="page-intro">{fr ? "Disponible pour des opportunités en support IT, solutions numériques, applications web, motion design, assistance client, opérations, digitalisation et données." : "Available for IT support, digital solutions, web applications, motion design, customer support, operations, digitalisation, and data-focused opportunities."}</p>

      <div className="contact-grid">
        <a href={`mailto:${siteConfig.email}`}>
          <span><Mail /></span><small>Email</small><strong>{siteConfig.email}</strong><ArrowUpRight />
        </a>
        <a href={siteConfig.whatsapp} target="_blank" rel="noreferrer">
          <span><MessageCircle /></span><small>WhatsApp</small><strong>{siteConfig.phone}</strong><ArrowUpRight />
        </a>
        <a href={siteConfig.linkedin} target="_blank" rel="noreferrer">
          <span>in</span><small>LinkedIn</small><strong>yongjusticenumfor</strong><ArrowUpRight />
        </a>
        <div>
          <span><MapPin /></span><small>{fr ? "Localisation & mobilité" : "Location & mobility"}</small>
          <strong>{siteConfig.location}<br />{fr ? "À distance · Sur site · Mobilité" : "Remote · On-site · Relocation"}</strong>
        </div>
      </div>

      <aside className="contact-note">
        <span className="index">{fr ? "DOMAINES / 01" : "AREAS / 01"}</span>
        <p>{fr ? "Support IT, applications web, solutions numériques, motion design, assistance opérationnelle, digitalisation, gestion documentaire, données et reporting." : "IT support, web applications, digital solutions, motion design, operations assistance, digitalisation, document management, data, and reporting."}</p>
      </aside>

      <ContactWhatsAppForm locale={locale} />
    </main>
  );
}
