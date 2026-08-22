import type { MetadataRoute } from "next";
import { locales } from "@/i18n/config";
import { projectSlugs } from "@/lib/projects";

const site = "https://yammi.me";

function withLocales(path: string) {
  const languages = Object.fromEntries(
    locales.map((locale) => [locale, `${site}/${locale}${path}`])
  );
  return { languages: { ...languages, "x-default": `${site}/en${path}` } };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ["", "/works", "/about", "/impressum"];
  const projectPaths = projectSlugs.map((slug) => `/works/${slug}`);
  const paths = [...staticPaths, ...projectPaths];

  return locales.flatMap((locale) =>
    paths.map((path) => ({
      url: `${site}/${locale}${path}`,
      lastModified: new Date(),
      alternates: withLocales(path),
    }))
  );
}
