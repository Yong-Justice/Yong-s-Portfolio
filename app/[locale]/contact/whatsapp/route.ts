import { NextResponse } from "next/server";
import { isLocale, siteConfig } from "@/src/content/site-config";

const reasons = {
  en: ["IT support", "Web applications", "Motion design", "Customer service and operations", "Other"],
  fr: ["Support informatique", "Applications web", "Motion design", "Service client et opérations", "Autre"],
};

export async function POST(request: Request, { params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale = isLocale(rawLocale) ? rawLocale : "en";
  const data = await request.formData();
  const name = String(data.get("name") ?? "").trim().slice(0, 120);
  const email = String(data.get("email") ?? "").trim().slice(0, 254);
  const reason = String(data.get("reason") ?? "").trim();
  const message = String(data.get("message") ?? "").trim().slice(0, 4000);

  if (!name || !reasons[locale].includes(reason) || !message || (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))) {
    return new NextResponse(locale === "fr" ? "Vérifiez les champs du formulaire et réessayez." : "Please check the form fields and try again.", { status: 400 });
  }

  const text = locale === "fr"
    ? `Bonjour Yong, je vous contacte au sujet de : ${reason}.\n\nNom : ${name}\nE-mail : ${email || "Non renseigné"}\n\nMessage :\n${message}`
    : `Hello Yong, I’m contacting you about: ${reason}.\n\nName: ${name}\nEmail: ${email || "Not provided"}\n\nMessage:\n${message}`;
  const whatsappUrl = new URL(siteConfig.whatsapp);
  whatsappUrl.searchParams.set("text", text);

  return NextResponse.redirect(whatsappUrl, 303);
}
