export interface NewsItem {
  slug: string;
  title: string;
  date: string;
  source: string;
  excerpt: string;
  content: string;
}

export const newsItems: NewsItem[] = [
  {
    slug: "light-no-fire-gamescom-2025",
    title: "Light No Fire Rumored for Gamescom 2025",
    date: "2025-05-15",
    source: "Community",
    excerpt: "Insiders say Hello Games booked a booth. Nothing confirmed, but the timing lines up.",
    content: `Multiple industry sources claim Hello Games has reserved floor space at Gamescom 2025. The studio hasn't posted anything official yet, but community detectives found the studio name on an exhibitor list that leaked last week.

If true, this would be the first major public showing since the 2023 reveal. Fans are hoping for gameplay footage rather than another cinematic trailer. The subreddit r/LightNoFire has a megathread tracking every rumor — currently at 12,000 comments.`
  },
  {
    slug: "dragon-riding-mechanics-leak",
    title: "Leaked Footage Shows Dragon Stamina Bar",
    date: "2025-05-10",
    source: "Reddit",
    excerpt: "A 45-second clip shows flight limits, dive bombing, and what looks like dragon customization.",
    content: `Someone posted a short clip to r/LightNoFire over the weekend. It shows a player riding a red-scaled dragon across a mountain range. The UI includes a stamina bar labeled "Dragon Endurance" that drains during climbs and refills on glides.

The clip also shows a quick inventory pop-up with slots for "Saddle," "Rein," and "Armor." If legit, dragons have gear slots just like players. Moderators haven't verified the source, but the HUD elements match the reveal trailer's font and color scheme.`
  },
  {
    slug: "hello-games-hiring-spike",
    title: "Hello Games Is Hiring Again — Heavily",
    date: "2025-05-05",
    source: "Industry",
    excerpt: "Twenty new listings popped up in April. Multiplayer engineers and QA leads top the list.",
    content: `Hello Games posted 20 new job openings in April, up from their usual 3–4 per quarter. The bulk are engineering roles: multiplayer networking, server infrastructure, and QA leads. There's also a posting for a "Live Ops Coordinator," which usually means post-launch content planning.

Hiring spikes like this typically happen 12–18 months before release. If that pattern holds, late 2026 looks more realistic than 2027. The studio currently has ~35 employees; these listings could push them past 50.`
  },
  {
    slug: "procedural-world-size-update",
    title: "Sean Murray: 'One Planet, But Dense'",
    date: "2025-04-28",
    source: "Interview",
    excerpt: "Murray talked world design on a podcast. The takeaway: they're done with empty space.",
    content: `Sean Murray showed up on the Game Maker's Notebook podcast and spent twenty minutes explaining the shift from No Man's Sky's infinite planets to Light No Fire's single world.

His main point: "We generated quintillions of planets and players saw maybe a thousand. Most of those were empty. This time we're generating one planet and making sure every square kilometer has a reason to exist."

He mentioned hand-placed points of interest mixed into the procedural generation. Think Skyrim's dungeon density, but on a planet scale. No release date hints, unfortunately.`
  },
  {
    slug: "community-wishlist-results",
    title: "Fans Ranked Their Most-Wanted Features",
    date: "2025-04-20",
    source: "Community",
    excerpt: "50,000 votes later: guilds, housing, and fishing topped the list. PvP ranked dead last.",
    content: `A fan-run survey pulled 50,000 responses from Discord and Reddit. The top five requests:

1. Guild systems (78% want)
2. Player housing with persistent storage (71%)
3. Fishing mechanics (64%)
4. Seasonal world events (61%)
5. Dragon breeding (58%)

PvP ranked last at 12%. The community clearly wants cooperative, not competitive, multiplayer. Someone posted the full results as an infographic; it got 4,000 upvotes in six hours.`
  },
  {
    slug: "xbox-store-page-spotted",
    title: "Xbox Store Page Briefly Went Live",
    date: "2025-04-12",
    source: "Community",
    excerpt: "A store listing appeared for about two hours before vanishing. Screenshots included.",
    content: `For roughly two hours on April 10, an Xbox Store page for Light No Fire was accessible via direct link. It had no release date, but it did include four new screenshots showing a swamp biome, a player-built cliffside base, and what looks like a dragon customization menu.

The page went 404 shortly after being posted to Twitter. Microsoft hasn't commented. Hello Games' social media manager tweeted "Oops" with a shrug emoji an hour later — which might mean nothing, or might mean everything.`
  },
  {
    slug: "mod-support-hint",
    title: "Mod Support 'Being Considered'",
    date: "2025-04-05",
    source: "Interview",
    excerpt: "Murray didn't confirm mods, but he didn't shut the door either.",
    content: `In a Q&A after a GDC panel, someone asked about mod support. Murray's response: "We learned a lot from No Man's Sky's mod community. We're not announcing anything, but we're definitely not ignoring them."

That's far from a confirmation, but it's the most positive mod-related statement from the studio so far. No Man's Sky has unofficial mod support on PC through Nexus Mods; official tools would be a major step up.`
  },
  {
    slug: "biome-diversity-leak",
    title: "Datamine Suggests 12 Distinct Biomes",
    date: "2025-03-28",
    source: "Reddit",
    excerpt: "Files from a press build reference biomes nobody has seen yet.",
    content: `A user claiming access to a press preview build posted a file list showing biome references beyond what's been shown in trailers. Known biomes: forest, mountain, ocean, desert, snow, swamp, volcano. New references: crystal caverns, fungal groves, ash wastes, tidal flats, and something labeled "sky_islands."

The source is unverified, but the naming convention matches internal No Man's Sky files that leaked years ago. If real, the biome count is double what trailers have shown.`
  },
  {
    slug: "soundtrack-composer-reveal",
    title: "65daysofstatic Returning for Soundtrack",
    date: "2025-03-20",
    source: "Industry",
    excerpt: "The band behind No Man's Sky's iconic score is back.",
    content: `65daysofstatic, the post-rock band that scored No Man's Sky, confirmed on their Patreon that they're working with Hello Games again. The post mentions "a more organic, folk-influenced direction this time" — which fits the fantasy setting.

No release timeline for the soundtrack, but fans are already speculating about vinyl pressings. The No Man's Sky soundtrack sold out three pressings; expect similar demand here.`
  },
  {
    slug: "beta-testing-registration",
    title: "No Beta Planned, Says Community Manager",
    date: "2025-03-15",
    source: "Official",
    excerpt: "A Discord reply shut down beta rumors fast.",
    content: `Hello Games community manager "Wiklif" replied to a beta question in the official Discord: "No plans for open or closed beta at this time. When we're ready for people to play, you'll know."

This aligns with the studio's history — No Man's Sky had no public beta either. Some fans are disappointed; others appreciate the no-hype approach after the 2016 launch backlash.`
  },
];

export function getNewsSlugs(): string[] {
  return newsItems.map((n) => n.slug);
}

export function getNewsBySlug(slug: string): NewsItem | undefined {
  return newsItems.find((n) => n.slug === slug);
}
