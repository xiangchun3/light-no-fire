import { notFound } from "next/navigation";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { gameItems, getRarityColor } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function generateStaticParams() {
  return gameItems.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = gameItems.find((i) => i.slug === slug);
  return {
    title: item ? item.name : "Item",
    description: item ? item.description : "Browse Light No Fire items.",
    alternates: { canonical: `/items/${slug}/` },
  };
}

export default async function ItemDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = gameItems.find((i) => i.slug === slug);
  if (!item) return notFound();

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-12 max-w-3xl">
          <div className="mb-2 text-sm text-muted-foreground">{item.type}</div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{item.name}</h1>
          <div className={`text-sm font-medium mb-8 ${getRarityColor(item.rarity)}`}>{item.rarity}</div>

          <p className="text-muted-foreground leading-relaxed mb-8">{item.description}</p>

          {item.stats && (
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-base">Stats</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {Object.entries(item.stats).map(([key, value]) => (
                  <div key={key}>
                    <div className="text-xs text-muted-foreground capitalize">{key}</div>
                    <div className="text-lg font-semibold">{value}</div>
                  </div>
                ))}
              </CardContent>
            </Card>
          )}

          {item.usedIn && item.usedIn.length > 0 && (
            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-3">Used In</h2>
              <div className="flex flex-wrap gap-2">
                {item.usedIn.map((u) => (
                  <span key={u} className="px-3 py-1 rounded-full bg-secondary text-sm">{u}</span>
                ))}
              </div>
            </div>
          )}

          {item.obtainedFrom && item.obtainedFrom.length > 0 && (
            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-3">Obtained From</h2>
              <div className="flex flex-wrap gap-2">
                {item.obtainedFrom.map((o) => (
                  <span key={o} className="px-3 py-1 rounded-full bg-secondary text-sm">{o}</span>
                ))}
              </div>
            </div>
          )}

          <div className="mt-10">
            <Link href="/items" className="text-sm text-primary hover:underline">
              ← Back to Items
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
