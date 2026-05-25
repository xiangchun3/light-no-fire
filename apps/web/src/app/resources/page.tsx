import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { resources, getRarityColor } from "@/lib/data";
import { Gem } from "lucide-react";

export const metadata = {
  title: "Resources Database",
  description: "Find all resources in Light No Fire with locations, rarity, and uses.",
};

export default function ResourcesPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="border-b border-border">
          <div className="container mx-auto px-4 py-16">
            <div className="flex items-center gap-3 mb-4">
              <Gem className="h-8 w-8 text-primary" />
              <h1 className="text-3xl md:text-4xl font-bold">Resources Database</h1>
            </div>
            <p className="text-muted-foreground max-w-2xl">
              Gathering nodes, materials, and their crafting uses across all biomes.
            </p>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {resources.map((r) => (
              <Card key={r.slug} className="hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base">
                      <Link href={`/resources/${r.slug}`} className="hover:text-primary transition-colors">
                        {r.name}
                      </Link>
                    </CardTitle>
                    <span className={`text-xs font-medium ${getRarityColor(r.rarity)}`}>
                      {r.rarity}
                    </span>
                  </div>
                  <CardDescription>{r.biome}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{r.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
