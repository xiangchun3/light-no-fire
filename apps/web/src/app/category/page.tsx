import Link from "next/link";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { categories } from "@/lib/category-data";
import { Layers } from "lucide-react";

export const metadata = {
  title: "Categories",
  description: "Browse Light No Fire content by category: biomes, creatures, dragons, building, exploration, and more.",
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

        <section className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <Card key={cat.slug} className="hover:border-primary/50 transition-colors">
                <CardHeader>
                  <CardTitle className="text-lg">
                    <Link href={`/category/${cat.slug}`} className="hover:text-primary transition-colors">
                      {cat.title}
                    </Link>
                  </CardTitle>
                  <CardDescription>{cat.description}</CardDescription>
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
