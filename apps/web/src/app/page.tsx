import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Flame, ArrowRight, Newspaper, BookOpen, Map, Wrench, ExternalLink } from "lucide-react";
import { blogPosts } from "@/lib/blog-data";
import { wikiArticles } from "@/lib/wiki-data";
import { newsItems } from "@/lib/news-data";
import { buildFaqSchema, buildBreadcrumbSchema, siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Light No Fire Wiki & Map - Guides, Tools & Database (2026)",
  description:
    "The ultimate Light No Fire companion — wiki, interactive map, crafting calculators, resource database, creatures, items, and guides. Updated regularly.",
  keywords: [
    "Light No Fire",
    "Light No Fire Wiki",
    "Light No Fire Map",
    "Light No Fire Guide",
    "Light No Fire Tools",
    "Light No Fire crafting",
    "Light No Fire creatures",
    "Light No Fire resources",
  ],
  alternates: { canonical: "/" },
};

const latestPosts = blogPosts.slice(0, 3);
const latestNews = newsItems.slice(0, 5);

const popularWiki = wikiArticles
  .filter((a) => ["light-no-fire-gameplay", "light-no-fire-world", "light-no-fire-crafting", "dragons", "light-no-fire-release-date"].includes(a.slug))
  .map((a) => ({ title: a.title, slug: a.slug, excerpt: a.excerpt, category: a.category }));

const homeFaqSchema = buildFaqSchema([
  {
    question: "What is Light No Fire?",
    answer: "Light No Fire is an upcoming fantasy survival game from Hello Games, the studio behind No Man's Sky. It features a single planet-scale fantasy world with dragons, survival mechanics, and cooperative multiplayer.",
  },
  {
    question: "When is Light No Fire releasing?",
    answer: "Hello Games has not announced an official release date yet. Industry analysis suggests a 2026 or 2027 launch window based on hiring patterns and trailer maturity.",
  },
  {
    question: "Is Light No Fire multiplayer?",
    answer: "Yes, small group cooperative multiplayer has been confirmed by Hello Games.",
  },
  {
    question: "What platforms will Light No Fire be on?",
    answer: "PC is confirmed. PlayStation 5 and Xbox are expected based on Hello Games' history with No Man's Sky.",
  },
]);

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", item: siteConfig.domain },
]);

export default function HomePage() {
  return (
    <>
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border">
          <div className="container mx-auto px-4 py-20 md:py-24 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6">
              <Flame className="h-4 w-4" />
              Fan-made community hub
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Light No Fire
              <span className="block text-primary mt-2">Wiki &amp; Map</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Guides, maps, and tools for Hello Games&apos; upcoming fantasy survival game.
              No fluff — just what you need to survive your first dragon ride.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/wiki/">Explore Wiki</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/map/">Open Map</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Main content area: two columns on desktop */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 py-16 lg:py-20">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            {/* Left: Long-form content + News stream */}
            <div className="flex-1 min-w-0 lg:pl-4">
              {/* Long-form intro */}
              <section className="mb-16">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">What Is Light No Fire?</h2>
                <div className="prose-content max-w-none">
                  <p className="text-foreground/85 leading-[1.75] mb-4 text-base md:text-lg">
                    Light No Fire is an upcoming fantasy survival game from Hello Games, the studio behind No Man&apos;s Sky.
                    Unlike its sci-fi predecessor, this title drops players onto a single, planet-scale fantasy world filled with
                    dragons, ancient ruins, and biomes that range from sun-scorched deserts to frozen mountain peaks.
                  </p>
                  <p className="text-foreground/85 leading-[1.75] mb-4">
                    The game was revealed at The Game Awards 2023 and immediately captured attention with its promise of
                    dragon riding, procedural world generation focused on density rather than infinite emptiness, and
                    cooperative multiplayer for small groups. Sean Murray has described the design philosophy as
                    &quot;one planet, but dense&quot; — a direct response to the criticism that No Man&apos;s Sky&apos;s
                    quintillions of planets meant most players never saw anything remarkable.
                  </p>
                  <h3 className="text-xl font-semibold mt-8 mb-3 text-foreground">Core Gameplay Systems</h3>
                  <p className="text-foreground/85 leading-[1.75] mb-4">
                    Survival mechanics include hunger, thirst, and temperature, but Hello Games has indicated these
                    systems won&apos;t dominate the experience the way they do in hardcore survival titles. Expect to eat
                    once per in-game day rather than every five minutes. Weather matters: blizzards reduce visibility,
                    lightning strikes metal equipment, and desert heat drains water reserves rapidly.
                  </p>
                  <p className="text-foreground/85 leading-[1.75] mb-4">
                    Dragons serve as the primary long-distance travel method. They have stamina that drains during climbs,
                    elemental affinities that match or clash with biomes, and equipment slots for saddles and armor.
                    This isn&apos;t fast travel — it&apos;s a relationship you maintain. Boats handle ocean crossings,
                    and on-foot exploration covers vertical spaces like caves and cliff faces.
                  </p>
                  <h3 className="text-xl font-semibold mt-8 mb-3 text-foreground">Building &amp; Crafting</h3>
                  <p className="text-foreground/85 leading-[1.75] mb-4">
                    Base building uses terrain-integrated construction. Walls snap to cliff faces, trees, and rock
                    outcrops rather than flat grids. This encourages building that follows the landscape instead of
                    flattening it. Crafting progression unlocks through discovering new materials and building
                    specialized stations — the loop is explore, find resource, unlock recipe, craft better gear,
                    explore tougher biomes.
                  </p>
                  <h3 className="text-xl font-semibold mt-8 mb-3 text-foreground">Release Status</h3>
                  <p className="text-foreground/85 leading-[1.75] mb-4">
                    As of 2025, Hello Games has not announced a release date. PC and console development is confirmed
                    active. Industry analysis based on hiring patterns and trailer maturity suggests a 2026 or 2027
                    launch window. The studio has committed to showing working features rather than promising timelines —
                    a lesson learned from No Man&apos;s Sky&apos;s 2016 launch.
                  </p>
                </div>
              </section>

              {/* Latest News - Stream Layout */}
              <section className="mb-16">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-2">
                    <Newspaper className="h-6 w-6 text-primary" />
                    Latest News
                  </h2>
                  <Link href="/news/" className="text-sm font-medium text-primary hover:underline">
                    View all
                  </Link>
                </div>
                <div className="divide-y divide-border">
                  {latestNews.map((news) => (
                    <article key={news.slug} className="py-5 group">
                      <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
                        <span className="text-xs font-medium text-primary shrink-0">{news.source}</span>
                        <span className="text-xs text-muted-foreground hidden sm:block">·</span>
                        <span className="text-xs text-muted-foreground">{news.date}</span>
                      </div>
                      <h3 className="text-lg font-semibold mt-1 group-hover:text-primary transition-colors">
                        <Link href={`/news/${news.slug}/`}>{news.title}</Link>
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{news.excerpt}</p>
                    </article>
                  ))}
                </div>
              </section>

              {/* Latest Articles */}
              <section>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl md:text-3xl font-bold">Latest Articles</h2>
                  <Link href="/blog/" className="text-sm font-medium text-primary hover:underline">
                    View all
                  </Link>
                </div>
                <div className="space-y-6">
                  {latestPosts.map((post) => (
                    <article key={post.slug} className="group">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-medium text-primary">{post.category}</span>
                        <span className="text-xs text-muted-foreground">{post.date}</span>
                      </div>
                      <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                        <Link href={`/blog/${post.slug}/`}>{post.title}</Link>
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{post.excerpt}</p>
                    </article>
                  ))}
                </div>
              </section>
            </div>

            {/* Right Sidebar */}
            <aside className="lg:w-72 shrink-0 space-y-10">
              {/* Quick Links */}
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                  Quick Links
                </h3>
                <nav className="space-y-1">
                  {[
                    { href: "/wiki/", label: "Wiki Database", icon: BookOpen },
                    { href: "/map/", label: "Interactive Map", icon: Map },
                    { href: "/tools/", label: "Player Tools", icon: Wrench },
                    { href: "/guides/", label: "Guides", icon: ExternalLink },
                  ].map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-md text-sm text-foreground hover:bg-muted/60 transition-colors"
                    >
                      <link.icon className="h-4 w-4 text-primary shrink-0" />
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>

              {/* Popular Wiki */}
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                  Popular Wiki Pages
                </h3>
                <div className="space-y-3">
                  {popularWiki.map((item) => (
                    <div key={item.slug}>
                      <Link
                        href={`/wiki/${item.slug}/`}
                        className="text-sm font-medium hover:text-primary transition-colors line-clamp-2"
                      >
                        {item.title}
                      </Link>
                      <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2">{item.excerpt}</p>
                    </div>
                  ))}
                </div>
                <Link
                  href="/wiki/"
                  className="inline-flex items-center text-sm font-medium text-primary hover:underline mt-4"
                >
                  Browse all wiki <ArrowRight className="ml-1 h-3.5 w-3.5" />
                </Link>
              </div>

              {/* FAQ Teaser */}
              <div className="bg-muted/30 rounded-lg p-5">
                <h3 className="text-sm font-semibold mb-2">Common Questions</h3>
                <ul className="space-y-2">
                  {[
                    { q: "When is the release date?", a: "Not announced yet. 2026-2027 is likely." },
                    { q: "Is it multiplayer?", a: "Yes, small group co-op is confirmed." },
                    { q: "On which platforms?", a: "PC confirmed. PS5 & Xbox expected." },
                  ].map((faq) => (
                    <li key={faq.q}>
                      <span className="text-xs font-medium text-foreground">{faq.q}</span>
                      <p className="text-xs text-muted-foreground">{faq.a}</p>
                    </li>
                  ))}
                </ul>
                <Link href="/faq/" className="text-xs font-medium text-primary hover:underline mt-3 inline-block">
                  View all FAQs
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
