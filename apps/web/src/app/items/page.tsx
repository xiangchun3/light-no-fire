import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { gameItems, getRarityColor } from "@/lib/data";
import { Sword } from "lucide-react";

export const metadata = {
  title: "Items Database",
  description: "Browse all items in Light No Fire including weapons, materials, and consumables.",
  alternates: { canonical: "/items/" },
};

export default function ItemsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="border-b border-border">
          <div className="container mx-auto px-4 py-16">
            <div className="flex items-center gap-3 mb-4">
              <Sword className="h-8 w-8 text-primary" />
              <h1 className="text-3xl md:text-4xl font-bold">Items Database</h1>
            </div>
            <p className="text-muted-foreground max-w-2xl">
              Weapons, materials, consumables, and more. Filter by type and rarity.
            </p>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {gameItems.map((item) => (
              <Card key={item.slug} className="hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base">
                      <Link href={`/items/${item.slug}`} className="hover:text-primary transition-colors">
                        {item.name}
                      </Link>
                    </CardTitle>
                    <span className={`text-xs font-medium ${getRarityColor(item.rarity)}`}>
                      {item.rarity}
                    </span>
                  </div>
                  <CardDescription>{item.type}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
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
