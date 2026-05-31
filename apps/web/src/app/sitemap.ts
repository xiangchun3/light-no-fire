import { MetadataRoute } from "next";
import { gameItems, creatures, resources } from "@/lib/data";
import { getWikiSlugs } from "@/lib/wiki-data";
import { getBlogSlugs } from "@/lib/blog-data";
import { getFAQSlugs } from "@/lib/faq-data";
import { getCategorySlugs } from "@/lib/category-data";
import { getNewsSlugs } from "@/lib/news-data";
import { getGuideSlugs } from "@/lib/guides-data";

export const dynamic = "force-static";

const baseUrl = "https://lightnofirewiki.com";

const routeConfig: Record<
  string,
  { changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]; priority: number }
> = {
  "/": { changeFrequency: "daily", priority: 1.0 },
  "/wiki/": { changeFrequency: "weekly", priority: 0.9 },
  "/blog/": { changeFrequency: "weekly", priority: 0.8 },
  "/news/": { changeFrequency: "daily", priority: 0.9 },
  "/guides/": { changeFrequency: "weekly", priority: 0.85 },
  "/faq/": { changeFrequency: "weekly", priority: 0.8 },
  "/map/": { changeFrequency: "weekly", priority: 0.9 },
  "/tools/": { changeFrequency: "weekly", priority: 0.9 },
  "/tools/crafting/": { changeFrequency: "weekly", priority: 0.85 },
  "/tools/coordinates/": { changeFrequency: "weekly", priority: 0.8 },
  "/tools/tracker/": { changeFrequency: "weekly", priority: 0.8 },
  "/items/": { changeFrequency: "weekly", priority: 0.85 },
  "/creatures/": { changeFrequency: "weekly", priority: 0.85 },
  "/resources/": { changeFrequency: "weekly", priority: 0.85 },
  "/category/": { changeFrequency: "weekly", priority: 0.75 },
  "/search/": { changeFrequency: "weekly", priority: 0.7 },
  "/about/": { changeFrequency: "monthly", priority: 0.6 },
  "/contact/": { changeFrequency: "monthly", priority: 0.5 },
  "/privacy-policy/": { changeFrequency: "yearly", priority: 0.4 },
  "/terms/": { changeFrequency: "yearly", priority: 0.4 },
  "/cookies/": { changeFrequency: "yearly", priority: 0.4 },
};

const staticRoutes = Object.keys(routeConfig).map((route) => ({
  url: `${baseUrl}${route}`,
  lastModified: new Date(),
  changeFrequency: routeConfig[route].changeFrequency,
  priority: routeConfig[route].priority,
}));

export default function sitemap(): MetadataRoute.Sitemap {
  const wikiRoutes = getWikiSlugs().map((slug) => ({
    url: `${baseUrl}/wiki/${slug}/`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const blogRoutes = getBlogSlugs().map((slug) => ({
    url: `${baseUrl}/blog/${slug}/`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const faqRoutes = getFAQSlugs().map((slug) => ({
    url: `${baseUrl}/faq/${slug}/`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  const categoryRoutes = getCategorySlugs().map((slug) => ({
    url: `${baseUrl}/category/${slug}/`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.75,
  }));

  const itemRoutes = gameItems.map((item) => ({
    url: `${baseUrl}/items/${item.slug}/`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  const creatureRoutes = creatures.map((c) => ({
    url: `${baseUrl}/creatures/${c.slug}/`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  const resourceRoutes = resources.map((r) => ({
    url: `${baseUrl}/resources/${r.slug}/`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  const newsRoutes = getNewsSlugs().map((slug) => ({
    url: `${baseUrl}/news/${slug}/`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.65,
  }));

  const guideRoutes = getGuideSlugs().map((slug) => ({
    url: `${baseUrl}/guides/${slug}/`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.65,
  }));

  return [
    ...staticRoutes,
    ...wikiRoutes,
    ...blogRoutes,
    ...newsRoutes,
    ...guideRoutes,
    ...faqRoutes,
    ...categoryRoutes,
    ...itemRoutes,
    ...creatureRoutes,
    ...resourceRoutes,
  ];
}
