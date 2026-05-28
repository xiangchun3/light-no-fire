import { notFound } from "next/navigation";
import { ArticleLayout } from "@/components/article-layout";
import { getWikiBySlug, getWikiSlugs } from "@/lib/wiki-data";

export function generateStaticParams() {
  return getWikiSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getWikiBySlug(slug);
  return {
    title: article ? article.title : "Wiki",
    description: article
      ? article.excerpt
      : "Browse the Light No Fire wiki for guides on dragons, biomes, crafting, and more.",
    keywords: article?.keywords,
    alternates: { canonical: `/wiki/${slug}/` },
  };
}

export default async function WikiDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getWikiBySlug(slug);
  if (!article) return notFound();

  return (
    <ArticleLayout
      title={article.title}
      category={article.category}
      content={article.content}
      showWikiSidebar={true}
      backLink={{ href: "/wiki/", label: "Wiki" }}
    />
  );
}
