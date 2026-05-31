import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { gameItems, getRarityColor } from "@/lib/data";
import { Sword } from "lucide-react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Light No Fire Items Database - Weapons, Armor, Materials & Tools",
  description:
    "Browse the complete Light No Fire items database. Weapons, armor, tools, consumables, and materials with stats, rarity, and crafting info.",
  keywords: [
    "Light No Fire items",
    "Light No Fire weapons",
    "Light No Fire armor",
    "Light No Fire materials",
    "Light No Fire tools",
    "Light No Fire consumables",
    "Light No Fire database",
  ],
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

        <section className="container mx-auto px-4 py-12 max-w-5xl">
          <div className="divide-y divide-border border-b border-border">
            {gameItems.map((item) => (
              <article key={item.slug} className="py-5 group flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-6">
                <div className="sm:w-40 shrink-0">
                  <span className={`text-xs font-semibold uppercase tracking-wider ${getRarityColor(item.rarity)}`}>
                    {item.rarity}
                  </span>
                  <p className="text-xs text-muted-foreground mt-1">{item.type}</p>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-semibold group-hover:text-primary transition-colors">
                    <Link href={`/items/${item.slug}`}>{item.name}</Link>
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
