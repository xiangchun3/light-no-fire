"use client";

import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { recipes } from "@/lib/recipes";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calculator } from "lucide-react";
import { buildFaqSchema, buildBreadcrumbSchema, siteConfig } from "@/lib/seo";

const faqSchema = buildFaqSchema([
  {
    question: "How does the Light No Fire Crafting Calculator work?",
    answer: "Select any recipe from the dropdown menu, enter the quantity you want to craft, and the calculator instantly shows the total materials required.",
  },
  {
    question: "Is the Crafting Calculator free?",
    answer: "Yes, the calculator is completely free to use with no account required.",
  },
  {
    question: "What recipes are included?",
    answer: "The calculator includes all known crafting recipes from the Light No Fire database, covering weapons, armor, tools, consumables, and materials.",
  },
]);

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", item: siteConfig.domain },
  { name: "Tools", item: `${siteConfig.domain}/tools/` },
  { name: "Crafting Calculator", item: `${siteConfig.domain}/tools/crafting/` },
]);

export default function CraftingCalculatorPage() {
  const [selectedRecipe, setSelectedRecipe] = useState(recipes[0]);
  const [quantity, setQuantity] = useState(1);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navbar />
      <main className="flex-1">
        <section className="border-b border-border">
          <div className="container mx-auto px-4 py-16">
            <div className="flex items-center gap-3 mb-4">
              <Calculator className="h-8 w-8 text-primary" />
              <h1 className="text-3xl md:text-4xl font-bold">Crafting Calculator</h1>
            </div>
            <p className="text-muted-foreground max-w-2xl">
              Select a recipe and quantity to see total materials required.
            </p>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Recipe</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Select Recipe</label>
                  <select
                    className="w-full h-9 rounded-md border border-input bg-transparent px-3 py-1 text-sm"
                    value={selectedRecipe.result}
                    onChange={(e) => {
                      const r = recipes.find((x) => x.result === e.target.value);
                      if (r) setSelectedRecipe(r);
                    }}
                  >
                    {recipes.map((r) => (
                      <option key={r.result} value={r.result}>
                        {r.result}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Quantity</label>
                  <Input
                    type="number"
                    min={1}
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  />
                </div>
                <div className="text-sm text-muted-foreground">
                  Station: <span className="text-foreground font-medium">{selectedRecipe.station}</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Required Materials</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {selectedRecipe.ingredients.map((ing) => (
                    <div key={ing.name} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                      <span className="font-medium">{ing.name}</span>
                      <span className="text-primary font-semibold">
                        {ing.amount * quantity}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
