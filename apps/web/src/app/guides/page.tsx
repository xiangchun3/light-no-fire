import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { guides } from "@/lib/guides-data";
import { ArrowRight } from "lucide-react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Light No Fire Guides - Beginner to Advanced Tutorials",
  description:
    "Step-by-step Light No Fire guides and tutorials. Survival basics, combat tips, crafting strategies, and advanced gameplay techniques.",
  keywords: [
    "Light No Fire guides",
    "Light No Fire tutorial",
    "Light No Fire tips",
    "Light No Fire beginner guide",
    "Light No Fire survival",
    "Light No Fire combat",
  ],
  alternates: { canonical: "/guides/" },
};

const difficultyColor: Record<string, string> = {
  Beginner: "text-green-500",
  Intermediate: "text-blue-500",
  Advanced: "text-purple-500",
};

export default function GuidesPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="border-b border-border">
          <div className="container mx-auto px-4 py-16">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Player Guides</h1>
            <p className="text-muted-foreground max-w-2xl">
              Step-by-step guides and tutorials to master Light No Fire. From survival basics to advanced combat.
            </p>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12 max-w-4xl">
          <div className="divide-y divide-border border-b border-border">
            {guides.map((guide) => (
              <article key={guide.slug} className="py-6 group">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-medium text-primary">{guide.category}</span>
                  <span className="text-xs text-muted-foreground">·</span>
                  <span className={`text-xs font-semibold ${difficultyColor[guide.difficulty] ?? "text-muted-foreground"}`}>
                    {guide.difficulty}
                  </span>
                </div>
                <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                  <Link href={`/guides/${guide.slug}/`}>{guide.title}</Link>
                </h3>
                <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{guide.excerpt}</p>
                <Link
                  href={`/guides/${guide.slug}/`}
                  className="inline-flex items-center text-sm font-medium text-primary hover:underline mt-3"
                >
                  Read Guide <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
