import { ArrowUpRight, MessageCircle } from "lucide-react";
import { siteConfig, type Locale } from "@/src/content/site-config";

export function ContactWhatsAppForm({ locale }: { locale: Locale }) {
  const fr = locale === "fr";

  return (
    <section className="contact-form-section" aria-labelledby="contact-form-title">
      <div className="contact-form-heading">
        <span className="index">{fr ? "MESSAGE / WHATSAPP" : "MESSAGE / WHATSAPP"}</span>
        <h2 id="contact-form-title">{fr ? "Envoyer un message" : "Send a message"}</h2>
        <p>{fr ? "Remplissez ce formulaire : WhatsApp s’ouvrira avec votre message prérempli. Vous pourrez le relire et l’envoyer depuis WhatsApp." : "Complete this form to open WhatsApp with your message prefilled. You can review it and send it from WhatsApp."}</p>
      </div>
      <form className="contact-whatsapp-form" action={`/${locale}/contact/whatsapp`} method="post" target="_blank">
        <label>
          <span>{fr ? "Nom complet" : "Full name"}</span>
          <input autoComplete="name" name="name" required />
        </label>
        <label>
          <span>{fr ? "E-mail" : "Email"} <small>{fr ? "(facultatif)" : "(optional)"}</small></span>
          <input autoComplete="email" type="email" name="email" />
        </label>
        <label>
          <span>{fr ? "Motif du contact" : "Reason for contact"}</span>
          <select name="reason" defaultValue="" required>
            <option value="" disabled>{fr ? "Choisissez un motif" : "Choose a reason"}</option>
            <option value={fr ? "Support informatique" : "IT support"}>{fr ? "Support informatique" : "IT support"}</option>
            <option value={fr ? "Applications web" : "Web applications"}>{fr ? "Applications web" : "Web applications"}</option>
            <option value="Motion design">Motion design</option>
            <option value={fr ? "Service client et opérations" : "Customer service and operations"}>{fr ? "Service client et opérations" : "Customer service and operations"}</option>
            <option value={fr ? "Autre" : "Other"}>{fr ? "Autre" : "Other"}</option>
          </select>
        </label>
        <label className="contact-message-field">
          <span>{fr ? "Votre message" : "Your message"}</span>
          <textarea name="message" rows={5} required />
        </label>
        <div className="contact-form-actions">
          <button type="submit"><MessageCircle size={18} />{fr ? "Continuer dans WhatsApp" : "Continue in WhatsApp"}<ArrowUpRight size={16} /></button>
          <a href={siteConfig.whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={17} />{fr ? "Contact direct sur WhatsApp" : "Direct WhatsApp contact"}</a>
        </div>
        <p className="contact-form-note">{fr ? "WhatsApp s’ouvrira avec le message prérempli. Il ne sera envoyé qu’après votre confirmation dans WhatsApp." : "WhatsApp will open with the message filled in. It is sent only after you confirm in WhatsApp."}</p>
      </form>
    </section>
  );
}
