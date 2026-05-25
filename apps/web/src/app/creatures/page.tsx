import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { creatures } from "@/lib/data";
import { Bug } from "lucide-react";

export const metadata = {
  title: "Creatures Database",
  description: "Bestiary of all creatures in Light No Fire including drops and locations.",
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

        <section className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {creatures.map((c) => (
              <Card key={c.slug} className="hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base">
                      <Link href={`/creatures/${c.slug}`} className="hover:text-primary transition-colors">
                        {c.name}
                      </Link>
                    </CardTitle>
                    <span className={`text-xs font-medium ${c.type === "Boss" ? "text-amber-400" : c.type === "Aggressive" ? "text-red-400" : "text-green-400"}`}>
                      {c.type}
                    </span>
                  </div>
                  <CardDescription>{c.biome}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{c.description}</p>
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
