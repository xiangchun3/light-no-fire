import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { resources, getRarityColor } from "@/lib/data";
import { Gem } from "lucide-react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Light No Fire Resources Database - Locations, Rarity & Uses",
  description:
    "Find all gathering resources in Light No Fire. Ores, plants, gems, and materials with biome locations, rarity tiers, and crafting uses.",
  keywords: [
    "Light No Fire resources",
    "Light No Fire materials",
    "Light No Fire ores",
    "Light No Fire gathering",
    "Light No Fire crafting materials",
    "Light No Fire farming",
  ],
  alternates: { canonical: "/resources/" },
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

        <section className="container mx-auto px-4 py-12 max-w-5xl">
          <div className="divide-y divide-border border-b border-border">
            {resources.map((r) => (
              <article key={r.slug} className="py-5 group flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-6">
                <div className="sm:w-40 shrink-0">
                  <span className={`text-xs font-semibold uppercase tracking-wider ${getRarityColor(r.rarity)}`}>
                    {r.rarity}
                  </span>
                  <p className="text-xs text-muted-foreground mt-1">{r.biome}</p>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-semibold group-hover:text-primary transition-colors">
                    <Link href={`/resources/${r.slug}`}>{r.name}</Link>
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{r.description}</p>
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
