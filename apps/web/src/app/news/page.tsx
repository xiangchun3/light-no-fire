import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { newsItems } from "@/lib/news-data";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Latest Light No Fire News - Updates, Rumors & Announcements",
  description:
    "Stay up to date with the latest Light No Fire news. Official announcements, community updates, leaks, and release date speculation in one place.",
  keywords: [
    "Light No Fire news",
    "Light No Fire updates",
    "Light No Fire release date",
    "Light No Fire rumors",
    "Light No Fire announcements",
    "Hello Games news",
  ],
  alternates: { canonical: "/news/" },
};

export default function NewsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="border-b border-border">
          <div className="container mx-auto px-4 py-16">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Latest News</h1>
            <p className="text-muted-foreground max-w-2xl">
              Stay up to date with the latest Light No Fire announcements, leaks, and community updates.
            </p>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12 max-w-4xl">
          <div className="divide-y divide-border border-b border-border">
            {newsItems.map((news) => (
              <article key={news.slug} className="py-5 group">
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
                  <span className="text-xs font-medium text-primary shrink-0">{news.source}</span>
                  <span className="text-xs text-muted-foreground hidden sm:block">·</span>
                  <span className="text-xs text-muted-foreground">{news.date}</span>
                </div>
                <h3 className="text-lg font-semibold mt-1 group-hover:text-primary transition-colors">
                  <Link href={`/news/${news.slug}/`}>{news.title}</Link>
                </h3>
                <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{news.excerpt}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
