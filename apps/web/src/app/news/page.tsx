import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { newsItems } from "@/lib/news-data";

export const metadata = {
  title: "News",
  description: "Latest news, rumors, and updates about Light No Fire.",
  alternates: { canonical: "/news/" },
};

export default function NewsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="border-b border-border">
          <div className="container mx-auto px-4 py-16">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Latest News</h1>
            <p className="text-muted-foreground max-w-2xl">
              Stay up to date with the latest Light No Fire announcements, leaks, and community updates.
            </p>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsItems.map((news) => (
              <Card key={news.slug} className="hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-primary">{news.source}</span>
                    <span className="text-xs text-muted-foreground">{news.date}</span>
                  </div>
                  <CardTitle className="text-lg">
                    <Link href={`/news/${news.slug}/`} className="hover:text-primary transition-colors">
                      {news.title}
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{news.excerpt}</p>
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
