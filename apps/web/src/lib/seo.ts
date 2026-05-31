import type { Metadata } from "next";

export interface SiteConfig {
  domain: string;
  siteName: string;
  defaultDescription: string;
}

export const siteConfig: SiteConfig = {
  domain: "https://lightnofirewiki.com",
  siteName: "Light No Fire Wiki & Map",
  defaultDescription:
    "The ultimate Light No Fire companion — wiki, interactive map, crafting calculators, resource database, and guides.",
};

/**
 * Build a standard page metadata object.
 */
export function buildMetadata({
  title,
  description,
  path,
  keywords,
  ogImage,
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  ogImage?: string;
}): Metadata {
  const fullTitle = `${title} - ${siteConfig.siteName}`;
  const canonical = `${siteConfig.domain}${path}`;
  const image = ogImage || `${siteConfig.domain}/og-default.jpg`;

  return {
    title: fullTitle,
    description,
    keywords,
    alternates: { canonical },
    openGraph: {
      title: fullTitle,
      description,
      url: canonical,
      siteName: siteConfig.siteName,
      type: "website",
      images: [{ url: image, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
  };
}

/* ── JSON-LD Schema Builders ── */

export interface FaqItem {
  question: string;
  answer: string;
}

export function buildFaqSchema(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };
}

export interface BreadcrumbItem {
  name: string;
  item: string;
}

export function buildBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.item,
    })),
  };
}

export interface ArticleSchemaInput {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
  dateModified?: string;
  authorName?: string;
  category?: string;
}

export function buildArticleSchema(input: ArticleSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.title,
    description: input.description,
    url: `${siteConfig.domain}${input.slug}`,
    datePublished: input.datePublished,
    dateModified: input.dateModified || input.datePublished,
    author: {
      "@type": "Organization",
      name: input.authorName || siteConfig.siteName,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.siteName,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.domain}/favicon.ico`,
      },
    },
    ...(input.category ? { articleSection: input.category } : {}),
  };
}

export function buildItemListSchema(
  name: string,
  items: { name: string; url: string; description?: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: item.url,
      ...(item.description ? { description: item.description } : {}),
    })),
  };
}
