"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { searchAll } from "@/lib/data";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export function SearchResults() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") || "";
  const [query, setQuery] = useState(initialQuery);
  const [results, setResults] = useState(() => (initialQuery ? searchAll(initialQuery) : null));

  const handleSearch = () => {
    if (!query.trim()) return;
    setResults(searchAll(query));
    const url = new URL(window.location.href);
    url.searchParams.set("q", query);
    window.history.replaceState({}, "", url.toString());
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="flex gap-2 mb-8">
        <Input
          placeholder="Search items, creatures, resources..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          className="flex-1"
        />
        <Button onClick={handleSearch}>
          <Search className="h-4 w-4 mr-2" />
          Search
        </Button>
      </div>

      {results && (
        <div className="space-y-10">
          {results.items.length === 0 && results.creatures.length === 0 && results.resources.length === 0 && (
            <p className="text-muted-foreground text-center">No results found for "{query}".</p>
          )}

          {results.items.length > 0 && (
            <div>
              <h2 className="text-lg font-semibold mb-4">Items ({results.items.length})</h2>
              <div className="divide-y divide-border border-b border-border">
                {results.items.map((item) => (
                  <article key={item.slug} className="py-3 group">
                    <h3 className="text-base font-medium group-hover:text-primary transition-colors">
                      <Link href={`/items/${item.slug}`}>{item.name}</Link>
                    </h3>
                    <p className="text-xs text-muted-foreground mt-0.5">{item.type}</p>
                  </article>
                ))}
              </div>
            </div>
          )}

          {results.creatures.length > 0 && (
            <div>
              <h2 className="text-lg font-semibold mb-4">Creatures ({results.creatures.length})</h2>
              <div className="divide-y divide-border border-b border-border">
                {results.creatures.map((c) => (
                  <article key={c.slug} className="py-3 group">
                    <h3 className="text-base font-medium group-hover:text-primary transition-colors">
                      <Link href={`/creatures/${c.slug}`}>{c.name}</Link>
                    </h3>
                    <p className="text-xs text-muted-foreground mt-0.5">{c.biome}</p>
                  </article>
                ))}
              </div>
            </div>
          )}

          {results.resources.length > 0 && (
            <div>
              <h2 className="text-lg font-semibold mb-4">Resources ({results.resources.length})</h2>
              <div className="divide-y divide-border border-b border-border">
                {results.resources.map((r) => (
                  <article key={r.slug} className="py-3 group">
                    <h3 className="text-base font-medium group-hover:text-primary transition-colors">
                      <Link href={`/resources/${r.slug}`}>{r.name}</Link>
                    </h3>
                    <p className="text-xs text-muted-foreground mt-0.5">{r.biome}</p>
                  </article>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
