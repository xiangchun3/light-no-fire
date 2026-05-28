"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { wikiArticles } from "@/lib/wiki-data";
import {
  Flame,
  Globe,
  Hammer,
  Swords,
  Shield,
  Users,
  Map,
  Skull,
  HelpCircle,
  Newspaper,
  BookOpen,
} from "lucide-react";

const categoryIcons: Record<string, ReactNode> = {
  "Game Basics": <Flame className="h-4 w-4" />,
  World: <Globe className="h-4 w-4" />,
  Crafting: <Hammer className="h-4 w-4" />,
  Combat: <Swords className="h-4 w-4" />,
  Building: <Shield className="h-4 w-4" />,
  Multiplayer: <Users className="h-4 w-4" />,
  Exploration: <Map className="h-4 w-4" />,
  Creatures: <Skull className="h-4 w-4" />,
  FAQ: <HelpCircle className="h-4 w-4" />,
  News: <Newspaper className="h-4 w-4" />,
};

const categoryOrder = [
  "Game Basics",
  "World",
  "Creatures",
  "Exploration",
  "Combat",
  "Crafting",
  "Building",
  "Multiplayer",
  "FAQ",
  "News",
];

export function WikiSidebar() {
  const pathname = usePathname();

  // Group articles by category
  const grouped: Record<string, typeof wikiArticles> = {};
  for (const article of wikiArticles) {
    if (!grouped[article.category]) grouped[article.category] = [];
    grouped[article.category].push(article);
  }

  const sortedCategories = categoryOrder.filter((c) => grouped[c]);

  return (
    <div className="space-y-6">
      <div>
        <Link
          href="/wiki/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary transition-colors"
        >
          <BookOpen className="h-4 w-4" />
          Wiki Home
        </Link>
      </div>

      <nav className="space-y-5">
        {sortedCategories.map((category) => (
          <div key={category}>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
              {categoryIcons[category] || <BookOpen className="h-4 w-4" />}
              {category}
            </div>
            <ul className="space-y-0.5">
              {grouped[category].map((article) => {
                const href = `/wiki/${article.slug}/`;
                const isActive = pathname === href;
                return (
                  <li key={article.slug}>
                    <Link
                      href={href}
                      className={`block text-sm py-1 px-2 rounded-md transition-colors ${
                        isActive
                          ? "bg-primary/10 text-primary font-medium"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                      }`}
                    >
                      {article.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>
    </div>
  );
}
