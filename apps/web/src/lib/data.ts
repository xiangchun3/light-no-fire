export interface WikiItem {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  content: string;
}

export interface GameItem {
  slug: string;
  name: string;
  type: string;
  rarity: "Common" | "Uncommon" | "Rare" | "Epic" | "Legendary";
  description: string;
  stats?: Record<string, string | number>;
  usedIn?: string[];
  obtainedFrom?: string[];
}

export interface Creature {
  slug: string;
  name: string;
  type: "Passive" | "Aggressive" | "Boss" | "Mount";
  biome: string;
  description: string;
  drops?: string[];
  health?: number;
}

export interface Resource {
  slug: string;
  name: string;
  rarity: "Common" | "Uncommon" | "Rare" | "Epic" | "Legendary";
  biome: string;
  description: string;
  uses: string[];
}

export const gameItems: GameItem[] = [
  {
    slug: "fire-sword",
    name: "Fire Sword",
    type: "Weapon",
    rarity: "Rare",
    description: "A blade imbued with ember energy. Deals fire damage over time.",
    stats: { damage: 45, speed: 1.2, fireDamage: 12 },
    usedIn: ["Inferno Blade"],
    obtainedFrom: ["Volcanic Forge", "Dragon Drop"],
  },
  {
    slug: "iron-ore",
    name: "Iron Ore",
    type: "Material",
    rarity: "Common",
    description: "Raw iron used in basic crafting and forging.",
    usedIn: ["Iron Ingot", "Steel Bar", "Iron Sword"],
    obtainedFrom: ["Mountain Nodes", "Cave Deposits"],
  },
  {
    slug: "crystal-shard",
    name: "Crystal Shard",
    type: "Material",
    rarity: "Uncommon",
    description: "A glowing shard with latent magical properties.",
    usedIn: ["Mana Potion", "Crystal Staff", "Arcane Lens"],
    obtainedFrom: ["Crystal Caves", "Mage Drops"],
  },
  {
    slug: "dragon-scale",
    name: "Dragon Scale",
    type: "Material",
    rarity: "Epic",
    description: "A heat-resistant scale dropped by elder dragons.",
    stats: { armor: 30, fireResist: 50 },
    usedIn: ["Dragon Armor", "Fireproof Cloak"],
    obtainedFrom: ["Elder Dragon"],
  },
  {
    slug: "healing-potion",
    name: "Healing Potion",
    type: "Consumable",
    rarity: "Common",
    description: "Restores 100 HP over 5 seconds.",
    usedIn: ["Greater Healing Potion"],
    obtainedFrom: ["Alchemy Table", "Merchant"],
  },
  {
    slug: "arcane-staff",
    name: "Arcane Staff",
    type: "Weapon",
    rarity: "Epic",
    description: "Channels raw mana into devastating spells.",
    stats: { magicDamage: 80, manaRegen: 15 },
    usedIn: ["Staff of Ages"],
    obtainedFrom: ["Arcane Forge", "World Boss"],
  },
];

export const creatures: Creature[] = [
  {
    slug: "ancient-dragon",
    name: "Ancient Dragon",
    type: "Boss",
    biome: "Volcanic Fields",
    description: "A colossal dragon said to have shaped the world with its flames.",
    drops: ["Dragon Scale", "Dragon Heart", "Ember Gem"],
    health: 50000,
  },
  {
    slug: "forest-wolf",
    name: "Forest Wolf",
    type: "Aggressive",
    biome: "Woodlands",
    description: "Pack hunters that roam the deep forests.",
    drops: ["Wolf Pelt", "Raw Meat"],
    health: 320,
  },
  {
    slug: "highland-stag",
    name: "Highland Stag",
    type: "Passive",
    biome: "Highlands",
    description: "Majestic herbivores often hunted for their antlers.",
    drops: ["Stag Antler", "Raw Meat", "Leather"],
    health: 180,
  },
  {
    slug: "leviathan",
    name: "Leviathan",
    type: "Boss",
    biome: "Deep Ocean",
    description: "A sea serpent of mythic proportions.",
    drops: ["Leviathan Tooth", "Abyssal Pearl"],
    health: 75000,
  },
  {
    slug: "ember-whelp",
    name: "Ember Whelp",
    type: "Mount",
    biome: "Volcanic Fields",
    description: "A small dragon that can be tamed as a flying mount.",
    drops: ["Whelp Claw"],
    health: 800,
  },
  {
    slug: "cave-bear",
    name: "Cave Bear",
    type: "Aggressive",
    biome: "Caves",
    description: "Massive bears that hibernate in dark caverns.",
    drops: ["Bear Pelt", "Bear Claw"],
    health: 1200,
  },
];

export const resources: Resource[] = [
  {
    slug: "iron",
    name: "Iron",
    rarity: "Common",
    biome: "Mountain",
    description: "Basic metal for weapons and tools.",
    uses: ["Weapon Crafting", "Armor", "Building"],
  },
  {
    slug: "crystal",
    name: "Crystal",
    rarity: "Uncommon",
    biome: "Cave",
    description: "Magic-infused crystals used in enchanting.",
    uses: ["Enchanting", "Staff Crafting", "Potions"],
  },
  {
    slug: "obsidian",
    name: "Obsidian",
    rarity: "Rare",
    biome: "Volcanic Fields",
    description: "Volcanic glass with sharp edges.",
    uses: ["Blade Crafting", "Arrowheads", "Decorations"],
  },
  {
    slug: "moonflower",
    name: "Moonflower",
    rarity: "Rare",
    biome: "Forest (Night)",
    description: "A luminescent flower that blooms under moonlight.",
    uses: ["Invisibility Potion", "Mana Regen", "Dyes"],
  },
  {
    slug: "abyssal-ore",
    name: "Abyssal Ore",
    rarity: "Legendary",
    biome: "Deep Ocean",
    description: "Metal forged in the depths of the ocean.",
    uses: ["Legendary Weapons", "Deep Diver Armor"],
  },
  {
    slug: "timber",
    name: "Timber",
    rarity: "Common",
    biome: "Forest",
    description: "Sturdy wood for construction and crafting.",
    uses: ["Building", "Bow Crafting", "Furniture"],
  },
];

export function searchAll(query: string) {
  const q = query.toLowerCase();
  return {
    items: gameItems.filter(
      (i) =>
        i.name.toLowerCase().includes(q) ||
        i.description.toLowerCase().includes(q) ||
        i.type.toLowerCase().includes(q)
    ),
    creatures: creatures.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.description.toLowerCase().includes(q) ||
        c.biome.toLowerCase().includes(q)
    ),
    resources: resources.filter(
      (r) =>
        r.name.toLowerCase().includes(q) ||
        r.description.toLowerCase().includes(q) ||
        r.biome.toLowerCase().includes(q)
    ),
  };
}

export function getRarityColor(rarity: string) {
  switch (rarity) {
    case "Common":
      return "text-zinc-400";
    case "Uncommon":
      return "text-green-400";
    case "Rare":
      return "text-blue-400";
    case "Epic":
      return "text-purple-400";
    case "Legendary":
      return "text-amber-400";
    default:
      return "text-muted-foreground";
  }
}
