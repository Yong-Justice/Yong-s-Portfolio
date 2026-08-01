import type { MetadataRoute } from "next";
import { projects } from "@/src/content/projects";
import { siteConfig } from "@/src/content/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", "/work", "/profile", "/cv", "/contact"];
  return ["en", "fr"].flatMap((locale) => [
    ...paths.map((path) => ({ url: `${siteConfig.siteUrl}/${locale}${path}`, lastModified: new Date() })),
    ...projects.filter((p) => p.hasCaseStudy).map((p) => ({ url: `${siteConfig.siteUrl}/${locale}/work/${p.slug}`, lastModified: new Date() })),
  ]);
}
