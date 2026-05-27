import { notFound } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
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
    <>
      <Navbar />
      <main className="flex-1">
        <article className="container mx-auto px-4 py-12 max-w-3xl">
          <div className="text-xs font-medium text-primary mb-2">{news.source}</div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{news.title}</h1>
          <div className="text-sm text-muted-foreground mb-8">{news.date}</div>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">{news.excerpt}</p>
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <p className="text-muted-foreground leading-relaxed">{news.content}</p>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
