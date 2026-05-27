import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Flame, Map, BookOpen, Wrench, ArrowRight, Newspaper, MapPin, Sparkles } from "lucide-react";
import { blogPosts } from "@/lib/blog-data";
import { wikiArticles } from "@/lib/wiki-data";
import { newsItems } from "@/lib/news-data";
import { mapMarkers } from "@/lib/map-data";

const features = [
  {
    title: "Wiki Database",
    description: "Detailed pages on dragons, biomes, crafting, and every mechanic we know about.",
    icon: BookOpen,
    href: "/wiki/",
  },
  {
    title: "Interactive Map",
    description: "Explore the world with markers for resources, creatures, and dungeons.",
    icon: Map,
    href: "/map/",
  },
  {
    title: "Player Tools",
    description: "Crafting calculators, build planners, and resource trackers.",
    icon: Wrench,
    href: "/tools/",
  },
];

const latestPosts = blogPosts.slice(0, 3);
const latestNews = newsItems.slice(0, 3);
const popularMapMarkers = mapMarkers.slice(0, 4);
const playerDiscoveries = mapMarkers.filter((m) => m.type === "player");

const popularWiki = wikiArticles
  .filter((a) => ["light-no-fire-gameplay", "light-no-fire-world", "light-no-fire-crafting", "dragons"].includes(a.slug))
  .map((a) => ({ title: a.title, slug: a.slug, excerpt: a.excerpt }));

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border">
          <div className="container mx-auto px-4 py-24 md:py-32 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6">
              <Flame className="h-4 w-4" />
              Fan-made community hub
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Light No Fire
              <span className="block text-primary mt-2">Wiki & Map</span>
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

        {/* Features */}
        <section className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((f) => (
              <Card key={f.title} className="hover:border-primary/50 transition-colors">
                <CardHeader>
                  <f.icon className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>{f.title}</CardTitle>
                  <CardDescription>{f.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link
                    href={f.href}
                    className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                  >
                    Get Started <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Latest Posts */}
        <section className="border-y border-border bg-secondary/20">
          <div className="container mx-auto px-4 py-20">
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-2xl md:text-3xl font-bold">Latest Articles</h2>
              <Link href="/blog/" className="text-sm font-medium text-primary hover:underline">
                View all
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {latestPosts.map((post) => (
                <Card key={post.slug}>
                  <CardHeader>
                    <div className="text-xs font-medium text-primary mb-2">{post.category}</div>
                    <CardTitle className="text-lg">
                      <Link href={`/blog/${post.slug}/`} className="hover:text-primary transition-colors">
                        {post.title}
                      </Link>
                    </CardTitle>
                    <CardDescription>{post.date}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Latest News */}
        <section className="container mx-auto px-4 py-20">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-2">
              <Newspaper className="h-6 w-6 text-primary" />
              Latest News
            </h2>
            <Link href="/news/" className="text-sm font-medium text-primary hover:underline">
              View all
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {latestNews.map((news) => (
              <Card key={news.slug} className="hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="text-xs font-medium text-primary mb-2">{news.source}</div>
                  <CardTitle className="text-lg">
                    <Link href={`/news/${news.slug}/`} className="hover:text-primary transition-colors">
                      {news.title}
                    </Link>
                  </CardTitle>
                  <CardDescription>{news.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{news.excerpt}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Popular Map Locations */}
        <section className="border-y border-border bg-secondary/20">
          <div className="container mx-auto px-4 py-20">
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-2">
                <MapPin className="h-6 w-6 text-primary" />
                Popular Map Locations
              </h2>
              <Link href="/map/" className="text-sm font-medium text-primary hover:underline">
                Open Map
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {popularMapMarkers.map((marker) => (
                <Card key={marker.id} className="hover:border-primary/50 transition-colors">
                  <CardHeader>
                    <div className="text-xs font-medium text-primary mb-2 uppercase tracking-wider">{marker.type}</div>
                    <CardTitle className="text-base">{marker.title}</CardTitle>
                    <CardDescription>{marker.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Latest Discoveries */}
        {playerDiscoveries.length > 0 && (
          <section className="container mx-auto px-4 py-20">
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-2">
                <Sparkles className="h-6 w-6 text-primary" />
                Latest Discoveries
              </h2>
              <Link href="/map/" className="text-sm font-medium text-primary hover:underline">
                Explore Map
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {playerDiscoveries.map((marker) => (
                <Card key={marker.id} className="hover:border-primary/50 transition-colors">
                  <CardHeader>
                    <div className="text-xs font-medium text-primary mb-2 uppercase tracking-wider">Player Discovery</div>
                    <CardTitle className="text-base">{marker.title}</CardTitle>
                    <CardDescription>{marker.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* Popular Wiki */}
        <section className="border-t border-border bg-secondary/20">
          <div className="container mx-auto px-4 py-20">
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-2xl md:text-3xl font-bold">Popular Wiki</h2>
              <Link href="/wiki/" className="text-sm font-medium text-primary hover:underline">
                Browse all
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {popularWiki.map((item) => (
                <Card key={item.slug} className="hover:border-primary/50 transition-colors">
                  <CardHeader>
                    <CardTitle className="text-base">
                      <Link href={`/wiki/${item.slug}/`} className="hover:text-primary transition-colors">
                        {item.title}
                      </Link>
                    </CardTitle>
                    <CardDescription>{item.excerpt}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
