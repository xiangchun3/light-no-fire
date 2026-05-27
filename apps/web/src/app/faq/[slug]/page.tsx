import { notFound } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ContentRenderer } from "@/components/content-renderer";
import { getFAQBySlug, getFAQSlugs } from "@/lib/faq-data";

export function generateStaticParams() {
  return getFAQSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getFAQBySlug(slug);
  return {
    title: page ? page.title : "FAQ",
    description: page
      ? `Frequently asked questions about ${page.question}`
      : "Browse FAQs for Light No Fire.",
    keywords: page?.keywords,
    alternates: { canonical: `/faq/${slug}/` },
  };
}

export default async function FAQDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getFAQBySlug(slug);
  if (!page) return notFound();

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <article className="container mx-auto px-4 py-12 max-w-3xl">
          <div className="text-xs font-medium text-primary mb-2">FAQ</div>
          <h1 className="text-3xl md:text-4xl font-bold mb-6">{page.title}</h1>
          <ContentRenderer content={page.content} />
        </article>
      </main>
      <Footer />
    </>
  );
}
