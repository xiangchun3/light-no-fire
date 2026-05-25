import { notFound } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const wikiData: Record<string, { title: string; content: string }> = {
  dragons: {
    title: "Dragons",
    content: `
Dragons are the core companions in Light No Fire. Players can tame, ride, and battle alongside these majestic creatures.

## Taming

Dragons require specific bait and a calm approach. Each dragon species has unique preferences.

## Abilities

- Fire Breath
- Aerial Dash
- Roar (crowd control)

## Types

| Type | Region | Rarity |
|------|--------|--------|
| Ember Whelp | Volcanic Fields | Common |
| Storm Drake | Highlands | Rare |
| Ancient Dragon | Unknown | Legendary |
    `,
  },
  biomes: {
    title: "Biomes",
    content: `
Light No Fire features a vast procedural world with diverse biomes.

## Forest

Dense woodlands with abundant herbs and timber.

## Mountain

Rich in ore and home to griffons.

## Ocean

Vast seas with underwater ruins and leviathans.

## Desert

Scorching dunes hiding ancient tombs.
    `,
  },
  crafting: {
    title: "Crafting",
    content: `
The crafting system allows players to create weapons, armor, potions, and building materials.

## Stations

- Campfire
- Forge
- Alchemy Table
- Carpenter's Bench

## Materials

Gather resources from the world or refine raw ore at a forge.
    `,
  },
  mounts: {
    title: "Mounts",
    content: "Mounts allow fast traversal across the world. From horses to dragons, each mount has unique speed and stamina stats.",
  },
  boats: {
    title: "Boats",
    content: "Boats enable ocean exploration. Upgrade hulls, sails, and cargo capacity to venture further.",
  },
  multiplayer: {
    title: "Multiplayer",
    content: "Join friends in co-op exploration or form guilds to conquer dungeons together.",
  },
  races: {
    title: "Races",
    content: "Choose from multiple races, each with unique starting stats and racial abilities.",
  },
  resources: {
    title: "Resources",
    content: "Resources are scattered across biomes. Iron, crystal, and rare herbs are essential for progression.",
  },
  creatures: {
    title: "Creatures",
    content: "The world is filled with wildlife. Some are passive, others aggressive. Study their patterns to survive.",
  },
  building: {
    title: "Building",
    content: "Construct bases anywhere in the world. Use modular pieces to design fortresses, farms, or harbors.",
  },
  skills: {
    title: "Skills",
    content: "Level up skills through usage. Specialize in combat, crafting, or exploration paths.",
  },
  combat: {
    title: "Combat",
    content: "Master melee, ranged, and magic combat. Dodge, parry, and chain abilities for devastating combos.",
  },
};

export function generateStaticParams() {
  return Object.keys(wikiData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = wikiData[slug];
  return {
    title: article ? article.title : "Wiki",
    description: article
      ? article.content.trim().slice(0, 160).replace(/\s+/g, " ")
      : "Browse the Light No Fire wiki for guides on dragons, biomes, crafting, and more.",
  };
}

export default async function WikiDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = wikiData[slug];
  if (!article) return notFound();

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <article className="container mx-auto px-4 py-12 max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">{article.title}</h1>
          <div className="prose prose-invert max-w-none">
            {article.content.split("\n").map((line, i) => {
              if (line.startsWith("## ")) {
                return <h2 key={i} className="text-xl font-semibold mt-8 mb-3">{line.replace("## ", "")}</h2>;
              }
              if (line.startsWith("- ")) {
                return <li key={i} className="ml-5 text-muted-foreground">{line.replace("- ", "")}</li>;
              }
              if (line.startsWith("| ") && line.endsWith(" |")) {
                return null; // skip markdown tables for now
              }
              if (line.trim() === "") return <div key={i} className="h-2" />;
              return <p key={i} className="text-muted-foreground leading-relaxed">{line}</p>;
            })}
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
