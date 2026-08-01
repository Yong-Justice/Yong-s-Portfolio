import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { isLocale, locales, siteConfig, type Locale } from "@/src/content/site-config";

export function generateStaticParams() { return locales.map((locale) => ({ locale })); }

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const description = "Web applications, IT support, customer operations, digitalisation, and practical digital solutions.";
  return {
    alternates: { canonical: `/${locale}`, languages: { en: "/en", fr: "/fr" } },
    openGraph: { title: `${siteConfig.professionalName} — ${siteConfig.title}`, description, type: "website", locale: locale === "fr" ? "fr_FR" : "en_GB" },
    twitter: { card: "summary_large_image", title: `${siteConfig.professionalName} — ${siteConfig.title}`, description },
  };
}

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  return <><SiteHeader locale={locale} />{children}<SiteFooter locale={locale} /></>;
}
