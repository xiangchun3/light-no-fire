"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { searchAll } from "@/lib/data";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
        <div className="space-y-8">
          {results.items.length === 0 && results.creatures.length === 0 && results.resources.length === 0 && (
            <p className="text-muted-foreground text-center">No results found for "{query}".</p>
          )}

          {results.items.length > 0 && (
            <div>
              <h2 className="text-lg font-semibold mb-4">Items ({results.items.length})</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {results.items.map((item) => (
                  <Card key={item.slug}>
                    <CardHeader>
                      <CardTitle className="text-base">
                        <Link href={`/items/${item.slug}`} className="hover:text-primary">{item.name}</Link>
                      </CardTitle>
                      <CardDescription>{item.type}</CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {results.creatures.length > 0 && (
            <div>
              <h2 className="text-lg font-semibold mb-4">Creatures ({results.creatures.length})</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {results.creatures.map((c) => (
                  <Card key={c.slug}>
                    <CardHeader>
                      <CardTitle className="text-base">
                        <Link href={`/creatures/${c.slug}`} className="hover:text-primary">{c.name}</Link>
                      </CardTitle>
                      <CardDescription>{c.biome}</CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {results.resources.length > 0 && (
            <div>
              <h2 className="text-lg font-semibold mb-4">Resources ({results.resources.length})</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {results.resources.map((r) => (
                  <Card key={r.slug}>
                    <CardHeader>
                      <CardTitle className="text-base">
                        <Link href={`/resources/${r.slug}`} className="hover:text-primary">{r.name}</Link>
                      </CardTitle>
                      <CardDescription>{r.biome}</CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
