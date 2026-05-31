import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Calculator, MapPin, ClipboardList, ArrowRight, Sword, Compass } from "lucide-react";
import { buildFaqSchema, buildBreadcrumbSchema, siteConfig } from "@/lib/seo";

const tools = [
  {
    title: "Crafting Calculator",
    description: "Calculate materials needed for any recipe. Select a recipe and quantity to see total resources required.",
    href: "/tools/crafting/",
    icon: Calculator,
    keywords: "crafting calculator, recipe calculator, materials",
  },
  {
    title: "Coordinate Converter",
    description: "Convert between in-game coordinates and real-world map coordinates for precise navigation.",
    href: "/tools/coordinates/",
    icon: MapPin,
    keywords: "coordinate converter, map coords, navigation",
  },
  {
    title: "Resource Tracker",
    description: "Track your resource collection progress with local browser storage. Set targets and monitor completion.",
    href: "/tools/tracker/",
    icon: ClipboardList,
    keywords: "resource tracker, collection progress, farming tracker",
  },
  {
    title: "Items Database",
    description: "Browse all weapons, armor, tools, consumables, and materials with stats and crafting info.",
    href: "/items/",
    icon: Sword,
    keywords: "items, weapons, armor, database",
  },
  {
    title: "Interactive Map",
    description: "Explore the world with our interactive map. Find biomes, resources, and creature spawn locations.",
    href: "/map/",
    icon: Compass,
    keywords: "interactive map, world map, locations",
  },
];

export const metadata: Metadata = {
  title: "Player Tools - Crafting Calculator, Coordinate Converter & Resource Tracker",
  description:
    "Free Light No Fire player tools: crafting calculator, coordinate converter, and resource tracker. Plan your crafting runs and track collection progress.",
  keywords: [
    "Light No Fire tools",
    "Light No Fire calculator",
    "Light No Fire crafting calculator",
    "Light No Fire coordinate converter",
    "Light No Fire resource tracker",
  ],
  alternates: { canonical: "/tools/" },
};

const toolsFaqSchema = buildFaqSchema([
  {
    question: "Are the Light No Fire tools free to use?",
    answer: "Yes, all tools on this site are completely free. No account or login is required.",
  },
  {
    question: "How does the Crafting Calculator work?",
    answer: "Select any recipe from the dropdown, enter the quantity you want to craft, and the calculator shows the total materials required.",
  },
  {
    question: "Is my Resource Tracker data saved?",
    answer: "Yes, your tracked resources are saved locally in your browser using localStorage. They persist between visits on the same device.",
  },
]);

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", item: siteConfig.domain },
  { name: "Tools", item: `${siteConfig.domain}/tools/` },
]);

export default function ToolsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(toolsFaqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navbar />
      <main className="flex-1">
        <section className="border-b border-border">
          <div className="container mx-auto px-4 py-16">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Player Tools</h1>
            <p className="text-muted-foreground max-w-2xl">
              Useful calculators and trackers to optimize your Light No Fire gameplay.
            </p>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12 max-w-3xl">
          <div className="space-y-4">
            {tools.map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="flex items-start gap-5 p-5 rounded-lg border border-border/40 bg-card hover:border-primary/40 transition-colors group"
              >
                <div className="mt-0.5 shrink-0 w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
                  <tool.icon className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="text-base font-semibold group-hover:text-primary transition-colors">
                      {tool.title}
                    </h3>
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">{tool.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
