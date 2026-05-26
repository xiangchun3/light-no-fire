import { notFound } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ContentRenderer } from "@/components/content-renderer";
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
  };
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) return notFound();

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <article className="container mx-auto px-4 py-12 max-w-3xl">
          <div className="text-xs font-medium text-primary mb-2">{post.category}</div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{post.title}</h1>
          <p className="text-sm text-muted-foreground mb-8">{post.date}</p>
          <ContentRenderer content={post.content} />
        </article>
      </main>
      <Footer />
    </>
  );
}
