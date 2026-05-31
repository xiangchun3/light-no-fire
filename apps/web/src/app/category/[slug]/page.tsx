import { notFound } from "next/navigation";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import {
  getCategoryBySlug,
  getCategorySlugs,
  getCategoryWikiArticles,
  getCategoryBlogPosts,
  getCategoryItems,
  getCategoryCreatures,
} from "@/lib/category-data";
import { getRarityColor } from "@/lib/data";
import { ArrowRight } from "lucide-react";

export function generateStaticParams() {
  return getCategorySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cat = getCategoryBySlug(slug);
  return {
    title: cat ? cat.title : "Category",
    description: cat
      ? cat.description
      : "Browse categories for Light No Fire content.",
    keywords: cat?.keywords,
    alternates: { canonical: `/category/${slug}/` },
  };
}

const creatureTypeColor = (type: string) => {
  if (type === "Boss") return "text-amber-500";
  if (type === "Aggressive") return "text-red-500";
  return "text-green-500";
};

export default async function CategoryDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cat = getCategoryBySlug(slug);
  if (!cat) return notFound();

  const wikiArticles = getCategoryWikiArticles(slug);
  const blogPosts = getCategoryBlogPosts(slug);
  const items = getCategoryItems(slug);
  const creatures = getCategoryCreatures(slug);

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="border-b border-border">
          <div className="container mx-auto px-4 py-16">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{cat.title}</h1>
            <p className="text-muted-foreground max-w-2xl">{cat.description}</p>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12 max-w-4xl space-y-14">
          {wikiArticles.length > 0 && (
            <div>
              <h2 className="text-xl font-semibold mb-5 pb-2 border-b border-border">Wiki Guides</h2>
              <div className="divide-y divide-border">
                {wikiArticles.map((article) => (
                  <article key={article.slug} className="py-4 group flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base font-semibold group-hover:text-primary transition-colors">
                        <Link href={`/wiki/${article.slug}`}>{article.title}</Link>
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{article.excerpt}</p>
                    </div>
                    <Link
                      href={`/wiki/${article.slug}`}
                      className="shrink-0 inline-flex items-center text-sm font-medium text-primary hover:underline mt-0.5"
                    >
                      Read <ArrowRight className="ml-1 h-3.5 w-3.5" />
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          )}

          {blogPosts.length > 0 && (
            <div>
              <h2 className="text-xl font-semibold mb-5 pb-2 border-b border-border">Blog Articles</h2>
              <div className="divide-y divide-border">
                {blogPosts.map((post) => (
                  <article key={post.slug} className="py-4 group">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-medium text-primary">{post.category}</span>
                      <span className="text-xs text-muted-foreground">{post.date}</span>
                    </div>
                    <h3 className="text-base font-semibold group-hover:text-primary transition-colors">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{post.excerpt}</p>
                  </article>
                ))}
              </div>
            </div>
          )}

          {items.length > 0 && (
            <div>
              <h2 className="text-xl font-semibold mb-5 pb-2 border-b border-border">Items</h2>
              <div className="divide-y divide-border">
                {items.map((item) => (
                  <article key={item.slug} className="py-4 group flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-6">
                    <div className="sm:w-32 shrink-0">
                      <span className={`text-xs font-semibold uppercase tracking-wider ${getRarityColor(item.rarity)}`}>
                        {item.rarity}
                      </span>
                      <p className="text-xs text-muted-foreground mt-1">{item.type}</p>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base font-semibold group-hover:text-primary transition-colors">
                        <Link href={`/items/${item.slug}`}>{item.name}</Link>
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{item.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}

          {creatures.length > 0 && (
            <div>
              <h2 className="text-xl font-semibold mb-5 pb-2 border-b border-border">Creatures</h2>
              <div className="divide-y divide-border">
                {creatures.map((c) => (
                  <article key={c.slug} className="py-4 group flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-6">
                    <div className="sm:w-32 shrink-0">
                      <span className={`text-xs font-semibold uppercase tracking-wider ${creatureTypeColor(c.type)}`}>
                        {c.type}
                      </span>
                      <p className="text-xs text-muted-foreground mt-1">{c.biome}</p>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base font-semibold group-hover:text-primary transition-colors">
                        <Link href={`/creatures/${c.slug}`}>{c.name}</Link>
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{c.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
