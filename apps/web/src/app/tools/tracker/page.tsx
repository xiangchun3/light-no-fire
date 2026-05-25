"use client";

import { useState, useEffect } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { resources } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ClipboardList, Check, Trash2 } from "lucide-react";

interface TrackedItem {
  slug: string;
  name: string;
  target: number;
  current: number;
}

export default function ResourceTrackerPage() {
  const [tracked, setTracked] = useState<TrackedItem[]>([]);
  const [selected, setSelected] = useState(resources[0].slug);
  const [target, setTarget] = useState(10);

  useEffect(() => {
    const saved = localStorage.getItem("lnf-tracker");
    if (saved) setTracked(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("lnf-tracker", JSON.stringify(tracked));
  }, [tracked]);

  const addItem = () => {
    const res = resources.find((r) => r.slug === selected);
    if (!res) return;
    if (tracked.find((t) => t.slug === selected)) return;
    setTracked((prev) => [...prev, { slug: res.slug, name: res.name, target, current: 0 }]);
  };

  const updateCurrent = (slug: string, delta: number) => {
    setTracked((prev) =>
      prev.map((t) => (t.slug === slug ? { ...t, current: Math.max(0, Math.min(t.target, t.current + delta)) } : t))
    );
  };

  const removeItem = (slug: string) => {
    setTracked((prev) => prev.filter((t) => t.slug !== slug));
  };

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="border-b border-border">
          <div className="container mx-auto px-4 py-16">
            <div className="flex items-center gap-3 mb-4">
              <ClipboardList className="h-8 w-8 text-primary" />
              <h1 className="text-3xl md:text-4xl font-bold">Resource Tracker</h1>
            </div>
            <p className="text-muted-foreground max-w-2xl">
              Track your resource collection progress. Data is saved locally in your browser.
            </p>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12 max-w-3xl">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-base">Add Resource</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-4">
              <select
                className="h-9 rounded-md border border-input bg-transparent px-3 py-1 text-sm flex-1 min-w-[200px]"
                value={selected}
                onChange={(e) => setSelected(e.target.value)}
              >
                {resources.map((r) => (
                  <option key={r.slug} value={r.slug}>
                    {r.name}
                  </option>
                ))}
              </select>
              <Input
                type="number"
                min={1}
                value={target}
                onChange={(e) => setTarget(Math.max(1, parseInt(e.target.value) || 1))}
                className="w-32"
                placeholder="Target"
              />
              <Button onClick={addItem}>Add</Button>
            </CardContent>
          </Card>

          <div className="space-y-4">
            {tracked.length === 0 && (
              <p className="text-center text-muted-foreground">No resources tracked yet. Add one above.</p>
            )}
            {tracked.map((t) => {
              const pct = Math.round((t.current / t.target) * 100);
              return (
                <Card key={t.slug}>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="font-medium">{t.name}</div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-muted-foreground">
                          {t.current} / {t.target}
                        </span>
                        {pct >= 100 && <Check className="h-4 w-4 text-green-400" />}
                        <button
                          onClick={() => removeItem(t.slug)}
                          className="text-muted-foreground hover:text-destructive"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                    <div className="w-full h-2 bg-secondary rounded-full overflow-hidden mb-3">
                      <div
                        className="h-full bg-primary transition-all"
                        style={{ width: `${Math.min(pct, 100)}%` }}
                      />
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" onClick={() => updateCurrent(t.slug, -1)}>
                        -1
                      </Button>
                      <Button size="sm" variant="outline" onClick={() => updateCurrent(t.slug, 1)}>
                        +1
                      </Button>
                      <Button size="sm" variant="outline" onClick={() => updateCurrent(t.slug, 5)}>
                        +5
                      </Button>
                      <Button size="sm" variant="outline" onClick={() => updateCurrent(t.slug, t.target - t.current)}>
                        Max
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
