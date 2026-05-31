import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ArrowRight } from "lucide-react";
import { wikiArticles } from "@/lib/wiki-data";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wiki Database - Guides & References for Light No Fire",
  description:
    "Complete Light No Fire wiki with guides on gameplay, crafting, dragons, biomes, multiplayer, and more. Community-driven reference database.",
  keywords: [
    "Light No Fire wiki",
    "Light No Fire gameplay",
    "Light No Fire dragons",
    "Light No Fire biomes",
    "Light No Fire crafting",
    "Light No Fire multiplayer",
    "Light No Fire guide",
  ],
  alternates: { canonical: "/wiki/" },
};

export default function WikiPage() {
  const categories = [...new Set(wikiArticles.map((a) => a.category))];

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="border-b border-border">
          <div className="container mx-auto px-4 py-16">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Wiki</h1>
            <p className="text-muted-foreground max-w-2xl">
              Guides and references for everything in Light No Fire.
            </p>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12 max-w-4xl space-y-14">
          {categories.map((cat) => (
            <div key={cat}>
              <h2 className="text-xl font-semibold mb-5 pb-2 border-b border-border">{cat}</h2>
              <div className="divide-y divide-border">
                {wikiArticles
                  .filter((a) => a.category === cat)
                  .map((item) => (
                    <article key={item.slug} className="py-4 group flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base font-semibold group-hover:text-primary transition-colors">
                          <Link href={`/wiki/${item.slug}`}>{item.title}</Link>
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{item.excerpt}</p>
                      </div>
                      <Link
                        href={`/wiki/${item.slug}`}
                        className="shrink-0 inline-flex items-center text-sm font-medium text-primary hover:underline mt-0.5"
                      >
                        Read <ArrowRight className="ml-1 h-3.5 w-3.5" />
                      </Link>
                    </article>
                  ))}
              </div>
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
