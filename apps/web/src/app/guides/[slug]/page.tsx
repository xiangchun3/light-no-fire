import { notFound } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { getGuideBySlug, getGuideSlugs } from "@/lib/guides-data";

export function generateStaticParams() {
  return getGuideSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  return {
    title: guide ? guide.title : "Guides",
    description: guide ? guide.excerpt : "Light No Fire player guides and tutorials.",
    alternates: { canonical: `/guides/${slug}/` },
  };
}

const difficultyColor = {
  Beginner: "text-green-500",
  Intermediate: "text-blue-500",
  Advanced: "text-purple-500",
};

export default async function GuideDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) return notFound();

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <article className="container mx-auto px-4 py-12 max-w-3xl">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-medium text-primary">{guide.category}</span>
            <span className={`text-xs font-semibold ${difficultyColor[guide.difficulty]}`}>{guide.difficulty}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-6">{guide.title}</h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">{guide.excerpt}</p>
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <p className="text-muted-foreground leading-relaxed">{guide.content}</p>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
