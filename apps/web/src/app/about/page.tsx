import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "About Us",
  description: "Learn about Light No Fire Wiki, the fan-made community hub for Light No Fire.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <article className="container mx-auto px-4 py-12 max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">About Light No Fire Wiki</h1>

          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Light No Fire Wiki is a fan site built by people who actually care about the game. We&apos;re not affiliated with Hello Games — just a group of players who want accurate, easy-to-read info on <em>Light No Fire</em> without wading through hype and speculation.
            </p>

            <h2 className="text-xl font-semibold text-foreground">What We Offer</h2>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Wiki Database:</strong> In-depth guides covering dragons, biomes, crafting, building, and all game mechanics.</li>
              <li><strong>Interactive Map:</strong> Explore the world with markers for resources, creatures, dungeons, and player discoveries.</li>
              <li><strong>Player Tools:</strong> Crafting calculators, coordinate converters, and resource trackers to speed up your gameplay.</li>
              <li><strong>Latest News:</strong> Stay updated with announcements, leaks, and community discussions.</li>
              <li><strong>Search-First Layout:</strong> Pages structured so you find answers in seconds, not minutes.</li>
            </ul>

            <h2 className="text-xl font-semibold text-foreground">Fan-Made & Independent</h2>
            <p>
              This website is not affiliated with, endorsed by, or sponsored by Hello Games. We are an independent community of fans who are excited about Light No Fire and want to build the best possible resource for fellow players.
            </p>

            <h2 className="text-xl font-semibold text-foreground">Open to Contributions</h2>
            <p>
              When the game drops, we&apos;ll open submissions for player discoveries — new coordinates, undocumented mechanics, verified drop rates. Until then, we&apos;re keeping pages updated with every confirmed detail from trailers and interviews.
            </p>

            <h2 className="text-xl font-semibold text-foreground">Contact</h2>
            <p>
              Have feedback, suggestions, or corrections? Reach out through our <a href="/contact/" className="text-primary hover:underline">Contact Page</a>.
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
