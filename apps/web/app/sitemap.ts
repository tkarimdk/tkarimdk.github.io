export const dynamic = "force-static";
import type { MetadataRoute } from "next";
import { site, navigation } from "./site";
import { projects, projectSlug } from "./projects";
export default function sitemap(): MetadataRoute.Sitemap {
  if (!site.domain) return [];
  const base = site.domain.replace(/\/$/, "");
  return [
    ...navigation.map(([href]) => href),
    ...projects.map((p) => `/projects/${projectSlug(p)}`),
  ].map((path) => ({
    url: `${base}${path}`,
    changeFrequency: "monthly" as const,
  }));
}
