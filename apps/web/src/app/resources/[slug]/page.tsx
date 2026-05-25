import { notFound } from "next/navigation";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { resources, getRarityColor } from "@/lib/data";

export function generateStaticParams() {
  return resources.map((r) => ({ slug: r.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return { title: "Resource" };
}

export default async function ResourceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const resource = resources.find((r) => r.slug === slug);
  if (!resource) return notFound();

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-12 max-w-3xl">
          <div className="mb-2 text-sm text-muted-foreground">{resource.biome}</div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{resource.name}</h1>
          <div className={`text-sm font-medium mb-8 ${getRarityColor(resource.rarity)}`}>{resource.rarity}</div>

          <p className="text-muted-foreground leading-relaxed mb-8">{resource.description}</p>

          {resource.uses.length > 0 && (
            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-3">Uses</h2>
              <div className="flex flex-wrap gap-2">
                {resource.uses.map((u) => (
                  <span key={u} className="px-3 py-1 rounded-full bg-secondary text-sm">{u}</span>
                ))}
              </div>
            </div>
          )}

          <div className="mt-10">
            <Link href="/resources" className="text-sm text-primary hover:underline">
              ← Back to Resources
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
