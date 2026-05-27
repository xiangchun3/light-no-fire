import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { guides } from "@/lib/guides-data";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Guides",
  description: "Light No Fire guides and tutorials for beginners to advanced players.",
  alternates: { canonical: "/guides/" },
};

const difficultyColor = {
  Beginner: "text-green-500",
  Intermediate: "text-blue-500",
  Advanced: "text-purple-500",
};

export default function GuidesPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="border-b border-border">
          <div className="container mx-auto px-4 py-16">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Player Guides</h1>
            <p className="text-muted-foreground max-w-2xl">
              Step-by-step guides and tutorials to master Light No Fire. From survival basics to advanced combat.
            </p>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guides.map((guide) => (
              <Card key={guide.slug} className="hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-primary">{guide.category}</span>
                    <span className={`text-xs font-semibold ${difficultyColor[guide.difficulty]}`}>{guide.difficulty}</span>
                  </div>
                  <CardTitle className="text-lg">
                    <Link href={`/guides/${guide.slug}/`} className="hover:text-primary transition-colors">
                      {guide.title}
                    </Link>
                  </CardTitle>
                  <CardDescription>{guide.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link
                    href={`/guides/${guide.slug}/`}
                    className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                  >
                    Read Guide <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
