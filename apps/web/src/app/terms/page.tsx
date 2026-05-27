import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "Terms of Service",
  description: "Terms of service for Light No Fire Wiki.",
  robots: { index: true, follow: false },
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <article className="container mx-auto px-4 py-12 max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Terms of Service</h1>

          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6 text-muted-foreground leading-relaxed">
            <p>
              By accessing and using Light No Fire Wiki (&ldquo;the Site&rdquo;), you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use the Site.
            </p>

            <h2 className="text-xl font-semibold text-foreground">1. Fan-Made Disclaimer</h2>
            <p>
              Light No Fire Wiki is a fan-made community website and is not affiliated with, endorsed by, or sponsored by Hello Games or any official Light No Fire representatives. All game-related trademarks, logos, and intellectual property belong to their respective owners.
            </p>

            <h2 className="text-xl font-semibold text-foreground">2. Use of Content</h2>
            <p>
              All content on this website is provided for informational and entertainment purposes. You may not reproduce, distribute, or commercially exploit any content from this Site without prior written permission.
            </p>

            <h2 className="text-xl font-semibold text-foreground">3. User Conduct</h2>
            <p>
              You agree not to use the Site for any unlawful purpose, to transmit any harmful code, or to engage in any activity that disrupts the Site or interferes with other users&apos; access.
            </p>

            <h2 className="text-xl font-semibold text-foreground">4. Disclaimer of Warranties</h2>
            <p>
              The Site and its content are provided &ldquo;as is&rdquo; without any warranties of any kind, either express or implied. We do not guarantee the accuracy, completeness, or reliability of any information on the Site.
            </p>

            <h2 className="text-xl font-semibold text-foreground">5. Limitation of Liability</h2>
            <p>
              In no event shall Light No Fire Wiki or its contributors be liable for any damages arising out of or in connection with your use of the Site.
            </p>

            <h2 className="text-xl font-semibold text-foreground">6. External Links</h2>
            <p>
              The Site may contain links to third-party websites. We are not responsible for the content, privacy policies, or practices of any third-party sites.
            </p>

            <h2 className="text-xl font-semibold text-foreground">7. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms of Service at any time. Continued use of the Site after changes constitutes acceptance of the updated terms.
            </p>

            <p className="text-sm text-muted-foreground pt-4">Last updated: May 26, 2026</p>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
