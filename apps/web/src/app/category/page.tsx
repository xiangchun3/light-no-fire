import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { categories } from "@/lib/category-data";
import { Layers, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Categories",
  description: "Browse Light No Fire content by category: biomes, creatures, dragons, building, exploration, and more.",
  alternates: { canonical: "/category/" },
};

export default function CategoriesPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="border-b border-border">
          <div className="container mx-auto px-4 py-16">
            <div className="flex items-center gap-3 mb-4">
              <Layers className="h-8 w-8 text-primary" />
              <h1 className="text-3xl md:text-4xl font-bold">Categories</h1>
            </div>
            <p className="text-muted-foreground max-w-2xl">
              Explore Light No Fire content organized by topic. Find guides, analysis, and database entries for every aspect of the game.
            </p>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12 max-w-4xl">
          <div className="divide-y divide-border border-b border-border">
            {categories.map((cat) => (
              <article key={cat.slug} className="py-5 group flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                    <Link href={`/category/${cat.slug}`}>{cat.title}</Link>
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{cat.description}</p>
                </div>
                <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-1" />
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
