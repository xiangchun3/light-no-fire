import { notFound } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const blogPosts: Record<string, { title: string; date: string; category: string; content: string }> = {
  "everything-we-know": {
    title: "Everything We Know About Light No Fire",
    date: "2025-05-20",
    category: "News",
    content: `
Light No Fire is the upcoming open-world adventure from Hello Games. Set in a procedural fantasy planet, the game promises infinite exploration on a single, massive world.

## Key Features

- Procedural world on a single planet
- Dragon taming and riding
- Multiplayer co-op
- Deep crafting and building systems
- Sailing and ocean exploration

## Release Window

No official release date has been announced. Based on trailers and interviews, a 2026 window seems likely.
    `,
  },
  "light-no-fire-vs-no-mans-sky": {
    title: "Light No Fire vs No Man's Sky",
    date: "2025-05-18",
    category: "Comparison",
    content: `
Hello Games is moving from infinite planets to a single, deeply detailed world. Here is how the two projects compare.

## Scale

No Man's Sky offers quintillions of planets. Light No Fire focuses on one massive, handcrafted-feeling planet.

## Gameplay

No Man's Sky is sci-fi survival. Light No Fire is fantasy adventure with dragons, magic, and sailing.

## Multiplayer

Both support co-op, but Light No Fire emphasizes guilds and shared world events.
    `,
  },
  "light-no-fire-map-size": {
    title: "How Big Is Light No Fire Map?",
    date: "2025-05-15",
    category: "Guide",
    content: `
The map in Light No Fire is described as planet-scale. Unlike traditional open worlds, it uses procedural generation to create a seamless, seemingly endless landscape.

## Procedural Scale

The world is generated in real-time as you explore. Mountains, rivers, and oceans stretch to the horizon without loading screens.

## Comparison

Early estimates suggest the traversable surface could dwarf games like Zelda: Tears of the Kingdom or Elden Ring.
    `,
  },
  "light-no-fire-release-date": {
    title: "Light No Fire Release Date & Speculation",
    date: "2025-05-10",
    category: "News",
    content: `
Fans are eagerly awaiting a release date for Light No Fire. Here is what we know so far.

## Official Statements

Hello Games has confirmed active development but has not committed to a release window.

## Speculation

Given the scope and polish shown in trailers, a 2026 launch on PC and consoles is widely expected.
    `,
  },
  "top-5-dragons": {
    title: "Top 5 Dragons We Want to See",
    date: "2025-05-05",
    category: "List",
    content: `
Dragons are the heart of Light No Fire. Here are the top 5 dragon types the community is hoping for.

## 1. Storm Drake

A lightning-infused dragon that thrives in highland thunderstorms.

## 2. Leviathan Wyrm

An ocean-dwelling serpent that can dive beneath the waves.

## 3. Ember Whelp

A small but fierce firestarter, perfect for early game companionship.

## 4. Frost ancient

A massive ice dragon guarding the northern peaks.

## 5. Shadow Wing

A stealthy, nocturnal predator with camouflage abilities.
    `,
  },
};

export function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts[slug];
  return {
    title: post ? post.title : "Blog",
    description: post
      ? post.content.trim().slice(0, 160).replace(/\s+/g, " ")
      : "Latest news, guides, and comparisons for Light No Fire.",
  };
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts[slug];
  if (!post) return notFound();

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <article className="container mx-auto px-4 py-12 max-w-3xl">
          <div className="text-xs font-medium text-primary mb-2">{post.category}</div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{post.title}</h1>
          <p className="text-sm text-muted-foreground mb-8">{post.date}</p>
          <div className="prose prose-invert max-w-none">
            {post.content.split("\n").map((line, i) => {
              if (line.startsWith("## ")) {
                return <h2 key={i} className="text-xl font-semibold mt-8 mb-3">{line.replace("## ", "")}</h2>;
              }
              if (line.startsWith("- ")) {
                return <li key={i} className="ml-5 text-muted-foreground">{line.replace("- ", "")}</li>;
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
