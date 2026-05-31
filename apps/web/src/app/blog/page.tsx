import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { blogPosts } from "@/lib/blog-data";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Light No Fire News, Guides & Deep Dives",
  description:
    "Read the latest Light No Fire blog posts: gameplay analysis, feature breakdowns, community news, and pre-release coverage.",
  keywords: [
    "Light No Fire blog",
    "Light No Fire news",
    "Light No Fire updates",
    "Light No Fire analysis",
    "Light No Fire features",
  ],
  alternates: { canonical: "/blog/" },
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

        <section className="container mx-auto px-4 py-12 max-w-4xl">
          <div className="divide-y divide-border border-b border-border">
            {blogPosts.map((post) => (
              <article key={post.slug} className="py-6 group">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-medium text-primary">{post.category}</span>
                  <span className="text-xs text-muted-foreground">{post.date}</span>
                </div>
                <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{post.excerpt}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
