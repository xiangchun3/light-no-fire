import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ArrowRight } from "lucide-react";
import { wikiArticles } from "@/lib/wiki-data";

export const metadata = {
  title: "Wiki",
  description: "Comprehensive guides and references for everything in Light No Fire.",
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
              Comprehensive guides and references for everything in Light No Fire.
            </p>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12 space-y-16">
          {categories.map((cat) => (
            <div key={cat}>
              <h2 className="text-xl font-semibold mb-6">{cat}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {wikiArticles
                  .filter((a) => a.category === cat)
                  .map((item) => (
                    <Card key={item.slug} className="hover:border-primary/50 transition-colors">
                      <CardHeader>
                        <CardTitle className="text-base">
                          <Link href={`/wiki/${item.slug}`} className="hover:text-primary transition-colors">
                            {item.title}
                          </Link>
                        </CardTitle>
                        <CardDescription>{item.excerpt}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Link
                          href={`/wiki/${item.slug}`}
                          className="inline-flex items-center text-xs font-medium text-primary hover:underline"
                        >
                          Read more <ArrowRight className="ml-1 h-3 w-3" />
                        </Link>
                      </CardContent>
                    </Card>
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
