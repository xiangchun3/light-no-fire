import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { faqPages } from "@/lib/faq-data";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Light No Fire FAQ - Release Date, Multiplayer, Dragons & More",
  description:
    "Find answers to the most common Light No Fire questions: release date, multiplayer, platforms, dragons, gameplay mechanics, and more.",
  keywords: [
    "Light No Fire FAQ",
    "Light No Fire questions",
    "Light No Fire release date",
    "Light No Fire multiplayer",
    "Light No Fire platforms",
    "Light No Fire dragons",
  ],
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

        <section className="container mx-auto px-4 py-12 max-w-4xl">
          <div className="divide-y divide-border border-b border-border">
            {faqPages.map((page) => (
              <article key={page.slug} className="py-5 group">
                <span className="text-xs font-medium text-primary">FAQ</span>
                <h3 className="text-lg font-semibold mt-1 group-hover:text-primary transition-colors">
                  <Link href={`/faq/${page.slug}`}>{page.title}</Link>
                </h3>
                <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{page.question}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
