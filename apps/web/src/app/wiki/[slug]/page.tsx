import { notFound } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ContentRenderer } from "@/components/content-renderer";
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
  };
}

export default async function WikiDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getWikiBySlug(slug);
  if (!article) return notFound();

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <article className="container mx-auto px-4 py-12 max-w-3xl">
          <div className="text-xs font-medium text-primary mb-2">{article.category}</div>
          <h1 className="text-3xl md:text-4xl font-bold mb-6">{article.title}</h1>
          <ContentRenderer content={article.content} />
        </article>
      </main>
      <Footer />
    </>
  );
}
