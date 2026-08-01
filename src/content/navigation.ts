import type { Locale } from "./site-config";

export const navigation: Record<Locale, { href: string; label: string }[]> = {
  en: [
    { href: "", label: "Home" }, { href: "/work", label: "Work" }, { href: "/profile", label: "Profile" }, { href: "/cv", label: "CV" }, { href: "/contact", label: "Contact" },
  ],
  fr: [
    { href: "", label: "Accueil" }, { href: "/work", label: "Projets" }, { href: "/profile", label: "Profil" }, { href: "/cv", label: "CV" }, { href: "/contact", label: "Contact" },
  ],
};
