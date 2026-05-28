import { notFound } from "next/navigation";
import { ArticleLayout } from "@/components/article-layout";
import { getBlogBySlug, getBlogSlugs } from "@/lib/blog-data";

export function generateStaticParams() {
  return getBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  return {
    title: post ? post.title : "Blog",
    description: post
      ? post.excerpt
      : "Latest news, guides, and comparisons for Light No Fire.",
    keywords: post?.keywords,
    alternates: { canonical: `/blog/${slug}/` },
  };
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) return notFound();

  return (
    <ArticleLayout
      title={post.title}
      category={post.category}
      date={post.date}
      content={post.content}
      backLink={{ href: "/blog/", label: "Blog" }}
    />
  );
}
