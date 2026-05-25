import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ArrowRight } from "lucide-react";

const wikiCategories = [
  {
    name: "Gameplay",
    items: [
      { title: "Dragons", slug: "dragons", desc: "Taming, abilities, and dragon types." },
      { title: "Mounts", slug: "mounts", desc: "All rideable creatures and how to unlock them." },
      { title: "Boats", slug: "boats", desc: "Navigation and boat customization." },
      { title: "Multiplayer", slug: "multiplayer", desc: "Co-op mechanics and guilds." },
    ],
  },
  {
    name: "World",
    items: [
      { title: "Biomes", slug: "biomes", desc: "Every biome and its unique resources." },
      { title: "Races", slug: "races", desc: "Playable races and their traits." },
      { title: "Resources", slug: "resources", desc: "Gathering nodes and respawn timers." },
      { title: "Creatures", slug: "creatures", desc: "Bestiary of all wildlife." },
    ],
  },
  {
    name: "Systems",
    items: [
      { title: "Crafting", slug: "crafting", desc: "Recipes, stations, and materials." },
      { title: "Building", slug: "building", desc: "Base building and structure types." },
      { title: "Skills", slug: "skills", desc: "Skill trees and progression." },
      { title: "Combat", slug: "combat", desc: "Weapons, magic, and tactics." },
    ],
  },
];

export const metadata = {
  title: "Wiki",
  description: "Browse the Light No Fire wiki for guides on dragons, biomes, crafting, and more.",
};

export default function WikiPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="border-b border-border">
          <div className="container mx-auto px-4 py-16">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Wiki</h1>
            <p className="text-muted-foreground max-w-2xl">
              Comprehensive guides and references for everything in Light No Fire.
            </p>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12 space-y-16">
          {wikiCategories.map((cat) => (
            <div key={cat.name}>
              <h2 className="text-xl font-semibold mb-6">{cat.name}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {cat.items.map((item) => (
                  <Card key={item.slug} className="hover:border-primary/50 transition-colors">
                    <CardHeader>
                      <CardTitle className="text-base">
                        <Link href={`/wiki/${item.slug}`} className="hover:text-primary transition-colors">
                          {item.title}
                        </Link>
                      </CardTitle>
                      <CardDescription>{item.desc}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Link
                        href={`/wiki/${item.slug}`}
                        className="inline-flex items-center text-xs font-medium text-primary hover:underline"
                      >
                        Read more <ArrowRight className="ml-1 h-3 w-3" />
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
