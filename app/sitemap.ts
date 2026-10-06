import type { MetadataRoute } from "next";

const SITE_URL = "https://cliveux.co.za";

// Bump lastModified when a page's content meaningfully changes.
const routes: { path: string; lastModified: string; changeFrequency: "monthly" | "yearly"; priority: number }[] = [
  { path: "", lastModified: "2026-10-06", changeFrequency: "monthly", priority: 1 },
  { path: "/pricing", lastModified: "2026-10-06", changeFrequency: "monthly", priority: 0.8 },
  { path: "/privacy", lastModified: "2026-10-06", changeFrequency: "yearly", priority: 0.3 },
  { path: "/terms", lastModified: "2026-10-06", changeFrequency: "yearly", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified: new Date(route.lastModified),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
