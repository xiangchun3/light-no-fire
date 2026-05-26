import { notFound } from "next/navigation";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
  };
}

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

        <section className="container mx-auto px-4 py-12 space-y-16">
          {wikiArticles.length > 0 && (
            <div>
              <h2 className="text-xl font-semibold mb-6">Wiki Guides</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {wikiArticles.map((article) => (
                  <Card key={article.slug} className="hover:border-primary/50 transition-colors">
                    <CardHeader>
                      <CardTitle className="text-base">
                        <Link href={`/wiki/${article.slug}`} className="hover:text-primary transition-colors">
                          {article.title}
                        </Link>
                      </CardTitle>
                      <CardDescription>{article.excerpt}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Link
                        href={`/wiki/${article.slug}`}
                        className="inline-flex items-center text-xs font-medium text-primary hover:underline"
                      >
                        Read more <ArrowRight className="ml-1 h-3 w-3" />
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {blogPosts.length > 0 && (
            <div>
              <h2 className="text-xl font-semibold mb-6">Blog Articles</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {blogPosts.map((post) => (
                  <Card key={post.slug} className="hover:border-primary/50 transition-colors">
                    <CardHeader>
                      <div className="text-xs font-medium text-primary mb-2">{post.category}</div>
                      <CardTitle className="text-base">
                        <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                          {post.title}
                        </Link>
                      </CardTitle>
                      <CardDescription>{post.date}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{post.excerpt}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {items.length > 0 && (
            <div>
              <h2 className="text-xl font-semibold mb-6">Items</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {items.map((item) => (
                  <Card key={item.slug} className="hover:border-primary/50 transition-colors">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-base">
                          <Link href={`/items/${item.slug}`} className="hover:text-primary transition-colors">
                            {item.name}
                          </Link>
                        </CardTitle>
                        <span className={`text-xs font-medium ${getRarityColor(item.rarity)}`}>{item.rarity}</span>
                      </div>
                      <CardDescription>{item.type}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {creatures.length > 0 && (
            <div>
              <h2 className="text-xl font-semibold mb-6">Creatures</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {creatures.map((c) => (
                  <Card key={c.slug} className="hover:border-primary/50 transition-colors">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-base">
                          <Link href={`/creatures/${c.slug}`} className="hover:text-primary transition-colors">
                            {c.name}
                          </Link>
                        </CardTitle>
                        <span
                          className={`text-xs font-medium ${
                            c.type === "Boss"
                              ? "text-amber-400"
                              : c.type === "Aggressive"
                                ? "text-red-400"
                                : "text-green-400"
                          }`}
                        >
                          {c.type}
                        </span>
                      </div>
                      <CardDescription>{c.biome}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{c.description}</p>
                    </CardContent>
                  </Card>
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
