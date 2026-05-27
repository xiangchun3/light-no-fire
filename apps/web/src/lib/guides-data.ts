export interface Guide {
  slug: string;
  title: string;
  category: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  excerpt: string;
  content: string;
}

export const guides: Guide[] = [
  {
    slug: "beginner-survival-tips",
    title: "Beginner Survival Tips",
    category: "Survival",
    difficulty: "Beginner",
    excerpt: "What actually matters in your first few hours — no fluff.",
    content: `First time loading into Light No Fire? Here's what actually keeps you alive.

Timber and stone are your best friends for the first hour. Don't bother hunting rare ore yet — you can't use it without a forge anyway. Build a shelter before the sun drops. Night cycles hit harder than you'd expect, and wandering mobs don't forgive new players.

Hunger ticks down faster when sprinting. Walk when you can. Save food for emergencies, not convenience. Berries are everywhere in forest starts; grab them whenever you see bushes.

Water isn't just a stat bar. Some biomes dehydrate you in minutes. Always carry a waterskin once you unlock it at the crafting bench.`
  },
  {
    slug: "dragon-taming-guide",
    title: "Dragon Taming Guide",
    category: "Mounts",
    difficulty: "Intermediate",
    excerpt: "How to get your first dragon without getting roasted.",
    content: `Dragons aren't pets — they're wild beasts you negotiate with. Here's the real process.

Whelp nests show up in volcanic biomes, usually near lava flows or sulfur vents. Approach slow. Sprinting toward a nest triggers the mother's aggro from half a biome away.

Bring raw meat, not cooked. Whelps reject charred food. Drop the meat about ten paces out and back up. The whelp comes to you. If it hisses, you're too close.

Bonding takes three in-game days. Feed twice daily. Skip a day and the trust meter drops. Once bonded, the wleep follows you through fast travel and respawns at your base if it goes down in combat.`
  },
  {
    slug: "resource-farming-routes",
    title: "Best Resource Farming Routes",
    category: "Crafting",
    difficulty: "Intermediate",
    excerpt: "Loop routes that actually save time.",
    content: `Random wandering burns daylight and stamina. These loops work.

**Mountain Ridge Loop** — Start at the northern cliff face. Iron and coal nodes line the ridge in clusters of three. Hit them, drop down to the cave mouth for crystal, then fast-travel back to the ridge camp. Full cycle: ~8 minutes.

**Swamp Herb Run** — Nightshade and marshroot only spawn near stagnant water. The east marsh has six guaranteed spawns in a zigzag pattern. Watch for leeches; they slow you and drain health over time.

**Ocean Shallows Circuit** — Pearl beds respawn every 24 in-game hours. Stick to reefs; deep water triggers leviathan patrols. Bring a small boat, not a raft. Rafts capsize in storm weather.`
  },
  {
    slug: "base-building-basics",
    title: "Base Building Basics",
    category: "Building",
    difficulty: "Beginner",
    excerpt: "Build smart, not big.",
    content: `Light No Fire doesn't use flat grids. Walls snap to cliff faces, trees, and rock outcrops. Use the terrain, don't fight it.

Start with a crafting bench and bedroll. The bedroll sets your respawn. Without it, death dumps you at the last shrine you visited — sometimes miles away.

Walls conform to angles automatically. A base built into a hillside costs fewer materials because the terrain acts as a natural back wall. Builders who flatten everything waste stone and look worse.

Defensive spacing matters. Creature spawns ignore player structures unless you build directly on their patrol paths. Leave a ten-pace buffer around your perimeter or expect midnight raids.`
  },
  {
    slug: "ocean-exploration-guide",
    title: "Ocean Exploration Guide",
    category: "Exploration",
    difficulty: "Advanced",
    excerpt: "What the surface players miss entirely.",
    content: `Oceans aren't empty. They're just dangerous enough that most players stay in the shallows.

Boats are mandatory. Swimming drains stamina fast, and deep water has current that pulls you off course. The Explorer Boat is the minimum viable vessel; anything smaller capsizes in moderate swells.

Leviathans patrol set routes. Watch the water surface — ripples that move against the wind mean something big is underneath. If you see a dark shape pass under your hull, stop rowing. Noise attracts them.

Sunken temples contain legendary-tier loot, but they also have trapped airlocks. Bring a crowbar and plenty of light. Most underwater deaths happen because players forget torches don't work below ten meters.`
  },
  {
    slug: "combat-mechanics-deep-dive",
    title: "Combat Mechanics Deep Dive",
    category: "Combat",
    difficulty: "Advanced",
    excerpt: "Stamina, frames, and the numbers the tutorial skips.",
    content: `Combat looks simple until you hit your first boss. Then the hidden systems matter.

Every weapon has a stamina cost per swing. Light attacks cost 8–12 stamina. Heavy attacks cost 20–30. Your max stamina at start is 100. Do the math — four heavies and you're walking, not dodging.

Dodge invincibility frames start on frame 4 and last 8 frames at 60fps. That means you need to dodge *before* the attack lands, not as it hits. Late dodges still move you, but you take full damage.

Dragon aerial attacks consume dragon stamina, not yours. When the dragon's bar hits zero, you both drop. Monitor the bar below your health. Ground-pound attacks drain it fastest.`
  },
  {
    slug: "cooking-and-food-buffs",
    title: "Cooking and Food Buffs",
    category: "Survival",
    difficulty: "Beginner",
    excerpt: "Stop eating raw meat. Here's why.",
    content: `Raw meat stops hunger but gives no bonuses. Cooked meals stack buffs that last 15 real-time minutes.

**Roasted Meat** — +10% health regen. Basic, but reliable.
**Herb Stew** — +20 stamina, +cold resist. Essential for mountain biomes.
**Spiced Fish** — +15% swim speed. Makes ocean trips faster and safer.
**Dragon Pepper Steak** — +25% fire resist. Basically required for volcanic areas.

Recipes unlock when you combine ingredients at a cooking station for the first time. Experiment. Some combinations fail — burnt stew gives you food poisoning (nausea debuff for 5 minutes).`
  },
  {
    slug: "inventory-management",
    title: "Inventory Management",
    category: "General",
    difficulty: "Beginner",
    excerpt: "Your bag is smaller than you think.",
    content: `Starting inventory: 24 slots. Sounds like plenty until you carry four weapon sets, two armor swaps, food, potions, building materials, and random loot.

Rule one: drop ore at your base before heading out. Ore stacks to 99, but each type takes a slot. Mining trips should end at a storage chest, not your backpack.

Rule two: keep one emergency stack of food and one health potion on your person at all times. Everything else is expendable.

Rule three: upgrade your backpack at the tailor. First upgrade costs 50 leather and 20 iron. Second upgrade needs dragon scales. Prioritize this over cosmetic gear.`
  },
  {
    slug: "weather-survival",
    title: "Weather Survival",
    category: "Survival",
    difficulty: "Intermediate",
    excerpt: "Storms kill more players than mobs.",
    content: `Biome weather isn't cosmetic. Here's what actually happens.

**Thunderstorms** — Lightning strikes tall structures and metal armor. Unequip steel during storms or carry a wooden shield overhead. Sounds dumb, works.
**Blizzards** — Cold drains stamina and slows attack speed. Without cold resist gear or a fire source, you lose 2% max health per minute.
**Heat Waves** — Found in desert and volcanic biomes. Dehydration triples. Waterskins drain in seconds. Find shade or underground.
**Fog** — Reduces visibility to roughly 20 paces. Perfect for sneaking past patrols. Terrible for cliff navigation.`
  },
  {
    slug: "fast-travel-unlocked",
    title: "How Fast Travel Actually Works",
    category: "Exploration",
    difficulty: "Beginner",
    excerpt: "It's not free, and not everywhere.",
    content: `Fast travel exists, but it has rules the game doesn't explain well.

You unlock waypoints by discovering shrines. Each shrine becomes a travel node. You cannot fast travel to camps, bases, or random locations — only shrines.

Cost scales with distance. Short hops are free. Crossing the entire map costs 50 gold or one Waystone Shard. Shards are rare early game; save them for emergencies.

Group fast travel is possible. If you're in a party, the leader can pull everyone to a shrine for a single cost. Solo players pay per jump.

There is no fast travel while mounted. Dismount first. There is also no fast travel during combat or while carrying a downed teammate.`
  },
];

export function getGuideSlugs(): string[] {
  return guides.map((g) => g.slug);
}

export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}
