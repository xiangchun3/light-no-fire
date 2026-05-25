import Link from "next/link";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const posts = [
  {
    slug: "everything-we-know",
    title: "Everything We Know About Light No Fire",
    date: "2025-05-20",
    category: "News",
    excerpt: "A complete roundup of all confirmed features, trailers, and developer interviews.",
  },
  {
    slug: "light-no-fire-vs-no-mans-sky",
    title: "Light No Fire vs No Man's Sky",
    date: "2025-05-18",
    category: "Comparison",
    excerpt: "How does Hello Games' next project compare to their previous masterpiece?",
  },
  {
    slug: "light-no-fire-map-size",
    title: "How Big Is Light No Fire Map?",
    date: "2025-05-15",
    category: "Guide",
    excerpt: "Analyzing the scale of the procedural world and what it means for exploration.",
  },
  {
    slug: "light-no-fire-release-date",
    title: "Light No Fire Release Date & Speculation",
    date: "2025-05-10",
    category: "News",
    excerpt: "When can we expect to play? Breaking down the timeline and rumors.",
  },
  {
    slug: "top-5-dragons",
    title: "Top 5 Dragons We Want to See",
    date: "2025-05-05",
    category: "List",
    excerpt: "Community wishlist for the most epic dragon designs.",
  },
];

export const metadata = {
  title: "Blog",
  description: "Latest news, guides, and comparisons for Light No Fire.",
};

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="border-b border-border">
          <div className="container mx-auto px-4 py-16">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Blog</h1>
            <p className="text-muted-foreground max-w-2xl">
              Latest news, guides, and deep dives into Light No Fire.
            </p>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Card key={post.slug} className="hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="text-xs font-medium text-primary mb-2">{post.category}</div>
                  <CardTitle className="text-lg">
                    <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                      {post.title}
                    </Link>
                  </CardTitle>
                  <CardDescription>{post.date}</CardDescription>
                  <p className="text-sm text-muted-foreground mt-2">{post.excerpt}</p>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
