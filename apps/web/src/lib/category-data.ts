import { wikiArticles } from "./wiki-data";
import { blogPosts } from "./blog-data";
import { gameItems, creatures, resources } from "./data";

export interface CategoryDef {
  slug: string;
  title: string;
  description: string;
  keywords: string[];
  wikiSlugs: string[];
  blogSlugs: string[];
  itemTypes?: string[];
  creatureTypes?: string[];
  resourceRarities?: string[];
}

export const categories: CategoryDef[] = [
  {
    slug: "biomes",
    title: "Biomes & Ecosystems",
    description:
      "Explore every biome in Light No Fire from lush forests to volcanic wastelands. Learn about resources, creatures, and survival strategies for each environment.",
    keywords: [
      "light no fire biomes",
      "light no fire ecosystems",
      "light no fire environments",
      "light no fire biome guide",
      "light no fire forest",
      "light no fire desert",
      "light no fire snow",
    ],
    wikiSlugs: [
      "forest-biome",
      "mountain-biome",
      "ocean-biome",
      "desert-biome",
      "snow-biome",
      "swamp-biome",
      "volcano-biome",
      "river-biome",
      "cave-biome",
      "island-biome",
      "biomes",
    ],
    blogSlugs: ["light-no-fire-best-biomes"],
  },
  {
    slug: "creatures",
    title: "Creatures & Bestiary",
    description:
      "Complete bestiary of Light No Fire creatures. Discover dragons, bosses, mounts, and wildlife across all biomes with drops and behavior info.",
    keywords: [
      "light no fire creatures",
      "light no fire bestiary",
      "light no fire monsters",
      "light no fire wildlife",
      "light no fire enemies",
      "light no fire bosses",
    ],
    wikiSlugs: [
      "dragons",
      "flying-creatures",
      "ocean-creatures",
      "giants",
      "wildlife",
      "mount-creatures",
      "bosses",
      "enemies",
      "passive-creatures",
      "rare-creatures",
      "creatures",
    ],
    blogSlugs: [
      "top-5-dragons",
      "light-no-fire-best-mounts",
    ],
    creatureTypes: ["Passive", "Aggressive", "Boss", "Mount"],
  },
  {
    slug: "dragons",
    title: "Dragons",
    description:
      "Everything about Light No Fire dragons: taming, flying, combat, types, and equipment. The ultimate dragon rider resource.",
    keywords: [
      "light no fire dragons",
      "light no fire dragon guide",
      "light no fire dragon taming",
      "light no fire dragon flying",
      "light no fire dragon types",
      "light no fire dragon combat",
    ],
    wikiSlugs: [
      "dragons",
      "light-no-fire-mounts",
      "flying-creatures",
      "mount-creatures",
      "rare-creatures",
    ],
    blogSlugs: [
      "top-5-dragons",
      "light-no-fire-dragon-guide",
      "light-no-fire-dragon-flying",
    ],
  },
  {
    slug: "building-crafting",
    title: "Building & Crafting",
    description:
      "Master Light No Fire building and crafting systems. From starter shelters to legendary gear, learn recipes, materials, and optimization strategies.",
    keywords: [
      "light no fire building",
      "light no fire crafting",
      "light no fire base building",
      "light no fire recipes",
      "light no fire construction",
      "light no fire gear",
    ],
    wikiSlugs: [
      "base-building",
      "house-building",
      "crafting-system",
      "weapons",
      "armor",
      "resources",
      "boats",
      "tools",
      "vehicles",
      "storage",
      "building",
      "crafting",
      "light-no-fire-building",
      "light-no-fire-crafting",
    ],
    blogSlugs: [
      "light-no-fire-building-system",
      "light-no-fire-crafting-deep-dive",
      "light-no-fire-crafting-guide",
      "light-no-fire-building-ideas",
    ],
    itemTypes: ["Weapon", "Armor", "Tool", "Material", "Consumable", "Vehicle"],
  },
  {
    slug: "exploration",
    title: "Exploration & Travel",
    description:
      "Navigate the planet-scale world of Light No Fire. Discover travel routes, hidden locations, coordinates, maps, and world events.",
    keywords: [
      "light no fire exploration",
      "light no fire travel",
      "light no fire map",
      "light no fire hidden locations",
      "light no fire coordinates",
      "light no fire world events",
    ],
    wikiSlugs: [
      "ocean-exploration",
      "mountains",
      "dungeons",
      "world-generation",
      "coordinates",
      "travel",
      "map-system",
      "fast-travel",
      "hidden-locations",
      "world-events",
      "light-no-fire-world",
      "light-no-fire-map-size",
    ],
    blogSlugs: [
      "light-no-fire-ocean-travel",
      "light-no-fire-map-predictions",
      "light-no-fire-hidden-locations",
      "how-big-is-light-no-fire-map",
    ],
  },
  {
    slug: "multiplayer",
    title: "Multiplayer & Co-op",
    description:
      "Play Light No Fire with friends. Learn about cooperative features, group sizes, shared bases, cross-play, and multiplayer tips.",
    keywords: [
      "light no fire multiplayer",
      "light no fire co op",
      "light no fire online",
      "light no fire cross play",
      "light no fire friends",
      "light no fire cooperative",
    ],
    wikiSlugs: [
      "light-no-fire-multiplayer",
      "multiplayer",
    ],
    blogSlugs: [
      "is-light-no-fire-multiplayer",
      "light-no-fire-co-op-guide",
    ],
  },
  {
    slug: "guides",
    title: "Guides & Tips",
    description:
      "Essential guides and tips for Light No Fire players. Beginner strategies, advanced techniques, dragon care, and survival advice.",
    keywords: [
      "light no fire guide",
      "light no fire tips",
      "light no fire beginner guide",
      "light no fire how to",
      "light no fire starter guide",
      "light no fire tips and tricks",
    ],
    wikiSlugs: [
      "light-no-fire-gameplay",
      "light-no-fire-survival",
      "light-no-fire-building",
      "light-no-fire-crafting",
      "light-no-fire-mounts",
    ],
    blogSlugs: [
      "light-no-fire-beginner-tips",
      "light-no-fire-beginner-guide",
      "light-no-fire-tips-and-tricks",
      "light-no-fire-dragon-guide",
      "light-no-fire-crafting-guide",
      "light-no-fire-building-ideas",
      "light-no-fire-ocean-travel",
      "light-no-fire-best-biomes",
      "light-no-fire-best-mounts",
      "light-no-fire-hidden-locations",
      "light-no-fire-survival-mechanics",
      "light-no-fire-building-system",
      "light-no-fire-platforms-guide",
    ],
  },
  {
    slug: "news",
    title: "News & Updates",
    description:
      "Latest news about Light No Fire including release date updates, platform announcements, trailers, and developer interviews.",
    keywords: [
      "light no fire news",
      "light no fire updates",
      "light no fire release date",
      "light no fire 2026",
      "light no fire trailer",
      "light no fire announcement",
    ],
    wikiSlugs: [
      "light-no-fire-release-date",
      "light-no-fire-gameplay",
    ],
    blogSlugs: [
      "everything-we-know",
      "light-no-fire-release-date",
      "light-no-fire-release-date-explained",
      "light-no-fire-2026-expectations",
      "light-no-fire-platforms-guide",
    ],
  },
  {
    slug: "analysis",
    title: "Analysis & Deep Dives",
    description:
      "In-depth analysis of Light No Fire mechanics, trailers, world design, and comparisons. For players who want to understand the game beyond surface level.",
    keywords: [
      "light no fire analysis",
      "light no fire deep dive",
      "light no fire mechanics",
      "light no fire vs no mans sky",
      "light no fire trailer analysis",
      "light no fire gameplay analysis",
    ],
    wikiSlugs: [
      "light-no-fire-gameplay",
      "light-no-fire-world",
      "world-generation",
      "light-no-fire-map-size",
    ],
    blogSlugs: [
      "light-no-fire-vs-no-mans-sky",
      "light-no-fire-gameplay-analysis",
      "light-no-fire-procedural-world",
      "light-no-fire-trailer-analysis",
      "will-light-no-fire-be-good",
      "is-light-no-fire-too-ambitious",
      "light-no-fire-could-be-the-next-big-survival-game",
      "best-features-in-light-no-fire",
      "light-no-fire-map-predictions",
      "light-no-fire-open-world-explained",
    ],
  },
  {
    slug: "community",
    title: "Community & Discussions",
    description:
      "Community discussions, Reddit opinions, player expectations, and hype analysis around Light No Fire.",
    keywords: [
      "light no fire community",
      "light no fire reddit",
      "light no fire opinions",
      "light no fire player thoughts",
      "light no fire expectations",
      "light no fire hype",
    ],
    wikiSlugs: [
      "light-no-fire-multiplayer",
      "light-no-fire-world",
    ],
    blogSlugs: [
      "what-reddit-thinks-about-light-no-fire",
      "why-players-are-excited-for-light-no-fire",
      "biggest-concerns-about-light-no-fire",
      "what-players-want-in-light-no-fire",
      "light-no-fire-community-expectations",
      "light-no-fire-hype-explained",
    ],
  },
];

export function getCategoryBySlug(slug: string): CategoryDef | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getCategorySlugs(): string[] {
  return categories.map((c) => c.slug);
}

export function getCategoryWikiArticles(slug: string) {
  const cat = getCategoryBySlug(slug);
  if (!cat) return [];
  return wikiArticles.filter((a) => cat.wikiSlugs.includes(a.slug));
}

export function getCategoryBlogPosts(slug: string) {
  const cat = getCategoryBySlug(slug);
  if (!cat) return [];
  return blogPosts.filter((p) => cat.blogSlugs.includes(p.slug));
}

export function getCategoryItems(slug: string) {
  const cat = getCategoryBySlug(slug);
  if (!cat || !cat.itemTypes) return [];
  return gameItems.filter((i) => cat.itemTypes!.includes(i.type));
}

export function getCategoryCreatures(slug: string) {
  const cat = getCategoryBySlug(slug);
  if (!cat || !cat.creatureTypes) return [];
  return creatures.filter((c) => cat.creatureTypes!.includes(c.type));
}

export function getCategoryResources(slug: string) {
  const cat = getCategoryBySlug(slug);
  if (!cat || !cat.resourceRarities) return [];
  return resources.filter((r) => cat.resourceRarities!.includes(r.rarity));
}
