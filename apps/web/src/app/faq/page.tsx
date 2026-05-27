import Link from "next/link";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { faqPages } from "@/lib/faq-data";

export const metadata = {
  title: "FAQ",
  description: "Frequently asked questions about Light No Fire including release date, multiplayer, dragons, and more.",
  alternates: { canonical: "/faq/" },
};

export default function FAQPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="border-b border-border">
          <div className="container mx-auto px-4 py-16">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">FAQ</h1>
            <p className="text-muted-foreground max-w-2xl">
              Quick answers to the most common questions about Light No Fire.
            </p>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {faqPages.map((page) => (
              <Card key={page.slug} className="hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="text-xs font-medium text-primary mb-2">FAQ</div>
                  <CardTitle className="text-lg">
                    <Link href={`/faq/${page.slug}`} className="hover:text-primary transition-colors">
                      {page.title}
                    </Link>
                  </CardTitle>
                  <CardDescription>{page.question}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
