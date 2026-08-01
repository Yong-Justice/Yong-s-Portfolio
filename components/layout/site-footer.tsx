import Link from "next/link";
import { siteConfig, type Locale } from "@/src/content/site-config";

export function SiteFooter({ locale }: { locale: Locale }) {
  return <footer className="site-footer"><div><span className="wordmark"><span>YJ</span><i />SYSTEMS</span><p>{locale === "en" ? "Frontend development · Digital systems · Data operations" : "Développement frontend · Systèmes numériques · Opérations data"}</p></div><div className="footer-links"><a href={`mailto:${siteConfig.email}`}>Email</a><a href={siteConfig.linkedin} target="_blank" rel="noreferrer">LinkedIn</a><Link href={`/${locale}/cv`}>CV</Link></div><p className="copyright">© {new Date().getFullYear()} Yong Justice Numfor</p></footer>;
}
