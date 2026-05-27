import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "Contact Us",
  description: "Contact Light No Fire Wiki for feedback, corrections, or DMCA requests.",
  robots: { index: true, follow: false },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <article className="container mx-auto px-4 py-12 max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Contact Us</h1>

          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6 text-muted-foreground leading-relaxed">
            <p>
              We welcome your feedback, suggestions, corrections, and inquiries. While we do not have a direct email form at this time, you can reach us through the following channels.
            </p>

            <h2 className="text-xl font-semibold text-foreground">General Inquiries</h2>
            <p>
              For general questions about the website, content suggestions, or error reports, please reach out via our community channels.
            </p>

            <h2 className="text-xl font-semibold text-foreground">Content Corrections</h2>
            <p>
              Found inaccurate information? We strive for accuracy. Please include the specific page URL and the correction needed when reporting.
            </p>

            <h2 className="text-xl font-semibold text-foreground">DMCA & Copyright</h2>
            <p>
              If you believe any content on this site infringes your copyright, please send a detailed DMCA notice including:
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Your contact information</li>
              <li>Identification of the copyrighted work</li>
              <li>URL of the infringing material</li>
              <li>A statement of good faith belief</li>
              <li>A statement under penalty of perjury</li>
            </ul>

            <h2 className="text-xl font-semibold text-foreground">Affiliate & Partnership</h2>
            <p>
              For business inquiries, affiliate partnerships, or collaboration proposals, please contact us with details about your proposal.
            </p>

            <div className="border border-border rounded-lg p-6 bg-card/50 mt-8">
              <h3 className="font-semibold text-foreground mb-2">Response Time</h3>
              <p className="text-sm">
                We aim to respond to all inquiries within 5-7 business days. Thank you for your patience.
              </p>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
