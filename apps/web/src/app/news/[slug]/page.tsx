import { notFound } from "next/navigation";
import { ArticleLayout } from "@/components/article-layout";
import { getNewsBySlug, getNewsSlugs } from "@/lib/news-data";

export function generateStaticParams() {
  return getNewsSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const news = getNewsBySlug(slug);
  return {
    title: news ? news.title : "News",
    description: news ? news.excerpt : "Latest Light No Fire news and updates.",
    alternates: { canonical: `/news/${slug}/` },
  };
}

export default async function NewsDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const news = getNewsBySlug(slug);
  if (!news) return notFound();

  return (
    <ArticleLayout
      title={news.title}
      source={news.source}
      date={news.date}
      content={news.content}
      backLink={{ href: "/news/", label: "News" }}
    />
  );
}
