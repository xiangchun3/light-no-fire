import { MetadataRoute } from "next";
import { gameItems, creatures, resources } from "@/lib/data";

export const dynamic = "force-static";

const baseUrl = "https://lightnofirewiki.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "/",
    "/wiki",
    "/blog",
    "/map",
    "/tools",
    "/items",
    "/creatures",
    "/resources",
    "/search",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "/" ? 1.0 : 0.8,
  }));

  const wikiSlugs = ["dragons", "biomes", "crafting", "mounts", "boats", "multiplayer", "races", "resources", "creatures", "building", "skills", "combat"];
  const wikiRoutes = wikiSlugs.map((slug) => ({
    url: `${baseUrl}/wiki/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const blogSlugs = ["everything-we-know", "light-no-fire-vs-no-mans-sky", "light-no-fire-map-size", "light-no-fire-release-date", "top-5-dragons"];
  const blogRoutes = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const itemRoutes = gameItems.map((item) => ({
    url: `${baseUrl}/items/${item.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  const creatureRoutes = creatures.map((c) => ({
    url: `${baseUrl}/creatures/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  const resourceRoutes = resources.map((r) => ({
    url: `${baseUrl}/resources/${r.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  return [
    ...staticRoutes,
    ...wikiRoutes,
    ...blogRoutes,
    ...itemRoutes,
    ...creatureRoutes,
    ...resourceRoutes,
  ];
}
