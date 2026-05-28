import { notFound } from "next/navigation";
import { ArticleLayout } from "@/components/article-layout";
import { getGuideBySlug, getGuideSlugs } from "@/lib/guides-data";

export function generateStaticParams() {
  return getGuideSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  return {
    title: guide ? guide.title : "Guides",
    description: guide ? guide.excerpt : "Light No Fire player guides and tutorials.",
    alternates: { canonical: `/guides/${slug}/` },
  };
}

export default async function GuideDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) return notFound();

  return (
    <ArticleLayout
      title={guide.title}
      category={guide.category}
      difficulty={guide.difficulty}
      content={guide.content}
      backLink={{ href: "/guides/", label: "Guides" }}
    />
  );
}
