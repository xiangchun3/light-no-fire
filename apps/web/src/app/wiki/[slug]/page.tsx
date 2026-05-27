import { notFound } from "next/navigation";
import Link from "next/link";
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
    alternates: { canonical: `/wiki/${slug}/` },
  };
}

interface TocItem {
  text: string;
  id: string;
  level: number;
}

function extractToc(content: string): TocItem[] {
  const lines = content.split("\n");
  const toc: TocItem[] = [];
  for (const line of lines) {
    if (line.startsWith("## ") || line.startsWith("### ")) {
      const level = line.startsWith("### ") ? 3 : 2;
      const text = line.replace(/^#+\s/, "").trim();
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
      toc.push({ text, id, level });
    }
  }
  return toc;
}

export default async function WikiDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getWikiBySlug(slug);
  if (!article) return notFound();

  const toc = extractToc(article.content);

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* TOC Sidebar */}
            {toc.length > 0 && (
              <aside className="lg:w-64 shrink-0">
                <div className="sticky top-24 border border-border rounded-lg p-4 bg-card/50">
                  <h2 className="text-sm font-semibold mb-3 text-foreground">Table of Contents</h2>
                  <ul className="space-y-2">
                    {toc.map((item) => (
                      <li key={item.id} className={item.level === 3 ? "ml-3" : ""}>
                        <Link
                          href={`#${item.id}`}
                          className="text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          {item.text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </aside>
            )}

            {/* Article */}
            <article className="flex-1 max-w-3xl">
              <div className="text-xs font-medium text-primary mb-2">{article.category}</div>
              <h1 className="text-3xl md:text-4xl font-bold mb-6">{article.title}</h1>
              <ContentRenderer content={article.content} />
            </article>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
