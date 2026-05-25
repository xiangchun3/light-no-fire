import { notFound } from "next/navigation";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { creatures } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function generateStaticParams() {
  return creatures.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return { title: "Creature" };
}

export default async function CreatureDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const creature = creatures.find((c) => c.slug === slug);
  if (!creature) return notFound();

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-12 max-w-3xl">
          <div className="mb-2 text-sm text-muted-foreground">{creature.biome}</div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{creature.name}</h1>
          <div className={`text-sm font-medium mb-8 ${creature.type === "Boss" ? "text-amber-400" : creature.type === "Aggressive" ? "text-red-400" : "text-green-400"}`}>
            {creature.type}
          </div>

          <p className="text-muted-foreground leading-relaxed mb-8">{creature.description}</p>

          {creature.health && (
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-base">Stats</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-lg font-semibold">{creature.health.toLocaleString()} HP</div>
              </CardContent>
            </Card>
          )}

          {creature.drops && creature.drops.length > 0 && (
            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-3">Drops</h2>
              <div className="flex flex-wrap gap-2">
                {creature.drops.map((d) => (
                  <span key={d} className="px-3 py-1 rounded-full bg-secondary text-sm">{d}</span>
                ))}
              </div>
            </div>
          )}

          <div className="mt-10">
            <Link href="/creatures" className="text-sm text-primary hover:underline">
              ← Back to Creatures
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
