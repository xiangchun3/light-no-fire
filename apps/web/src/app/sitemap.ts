import { MetadataRoute } from "next";
import { gameItems, creatures, resources } from "@/lib/data";
import { getWikiSlugs } from "@/lib/wiki-data";
import { getBlogSlugs } from "@/lib/blog-data";
import { getFAQSlugs } from "@/lib/faq-data";
import { getCategorySlugs } from "@/lib/category-data";

export const dynamic = "force-static";

const baseUrl = "https://lightnofirewiki.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "/",
    "/wiki",
    "/blog",
    "/faq",
    "/category",
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

  const wikiRoutes = getWikiSlugs().map((slug) => ({
    url: `${baseUrl}/wiki/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const blogRoutes = getBlogSlugs().map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const faqRoutes = getFAQSlugs().map((slug) => ({
    url: `${baseUrl}/faq/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  const categoryRoutes = getCategorySlugs().map((slug) => ({
    url: `${baseUrl}/category/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.75,
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
    ...faqRoutes,
    ...categoryRoutes,
    ...itemRoutes,
    ...creatureRoutes,
    ...resourceRoutes,
  ];
}
