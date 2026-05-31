import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { creatures } from "@/lib/data";
import { Bug } from "lucide-react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Light No Fire Creatures Database - Bestiary, Drops & Locations",
  description:
    "Complete Light No Fire bestiary. All creatures, monsters, mounts, and bosses with biome locations, drops, health stats, and behavior info.",
  keywords: [
    "Light No Fire creatures",
    "Light No Fire bestiary",
    "Light No Fire monsters",
    "Light No Fire dragons",
    "Light No Fire mounts",
    "Light No Fire bosses",
    "Light No Fire drops",
  ],
  alternates: { canonical: "/creatures/" },
};

const typeStyle = (type: string) => {
  if (type === "Boss") return "text-amber-500";
  if (type === "Aggressive") return "text-red-500";
  return "text-green-500";
};

export default function CreaturesPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="border-b border-border">
          <div className="container mx-auto px-4 py-16">
            <div className="flex items-center gap-3 mb-4">
              <Bug className="h-8 w-8 text-primary" />
              <h1 className="text-3xl md:text-4xl font-bold">Creatures Database</h1>
            </div>
            <p className="text-muted-foreground max-w-2xl">
              Complete bestiary with biomes, drops, and behavior info.
            </p>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12 max-w-5xl">
          <div className="divide-y divide-border border-b border-border">
            {creatures.map((c) => (
              <article key={c.slug} className="py-5 group flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-6">
                <div className="sm:w-40 shrink-0">
                  <span className={`text-xs font-semibold uppercase tracking-wider ${typeStyle(c.type)}`}>
                    {c.type}
                  </span>
                  <p className="text-xs text-muted-foreground mt-1">{c.biome}</p>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-semibold group-hover:text-primary transition-colors">
                    <Link href={`/creatures/${c.slug}`}>{c.name}</Link>
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{c.description}</p>
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
