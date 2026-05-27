import { Suspense } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SearchResults } from "@/components/search-results";

export const metadata = {
  title: "Search",
  description: "Search the Light No Fire database for items, creatures, and resources.",
  robots: { index: false, follow: false },
};

export default function SearchPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="border-b border-border">
          <div className="container mx-auto px-4 py-16">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Search</h1>
            <p className="text-muted-foreground max-w-2xl">
              Find items, creatures, resources, and more across the database.
            </p>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12">
          <Suspense fallback={<div className="text-center text-muted-foreground">Loading search...</div>}>
            <SearchResults />
          </Suspense>
        </section>
      </main>
      <Footer />
    </>
  );
}
