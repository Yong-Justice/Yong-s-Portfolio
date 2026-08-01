export const siteConfig = {
  name: "Yong Justice Animbom Numfor",
  professionalName: "Yong Justice Numfor",
  title: "Frontend Developer & Digital Solutions Builder",
  email: "yongjusticeanimbomnumfor@gmail.com",
  phone: "+237 659 154 737",
  whatsapp: "https://wa.me/237659154737",
  linkedin: "https://www.linkedin.com/in/yongjusticenumfor",
  github: null as string | null, // TODO_GITHUB_PROFILE_URL
  location: "Bafoussam, Cameroon",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://example.com",
  cv: {
    en: "/documents/Yong_Justice_Numfor_Portfolio_CV_EN_2026.pdf",
    fr: "/documents/Yong_Justice_Numfor_Portfolio_CV_FR_2026.pdf",
  },
} as const;

export type Locale = "en" | "fr";
export const locales: Locale[] = ["en", "fr"];
export const isLocale = (value: string): value is Locale => locales.includes(value as Locale);
