import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "Cookie Policy",
  description: "Cookie policy for Light No Fire Wiki.",
  robots: { index: true, follow: false },
};

export default function CookiesPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <article className="container mx-auto px-4 py-12 max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Cookie Policy</h1>

          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6 text-muted-foreground leading-relaxed">
            <p>
              This Cookie Policy explains how Light No Fire Wiki uses cookies and similar technologies when you visit our website.
            </p>

            <h2 className="text-xl font-semibold text-foreground">What Are Cookies?</h2>
            <p>
              Cookies are small text files that are stored on your device when you visit a website. They help the site remember your preferences and improve your browsing experience.
            </p>

            <h2 className="text-xl font-semibold text-foreground">How We Use Cookies</h2>
            <p>We use cookies for the following purposes:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Essential cookies:</strong> Required for the website to function properly, such as theme preference storage.</li>
              <li><strong>Analytics cookies:</strong> Help us understand how visitors interact with our website (e.g., Google Analytics).</li>
              <li><strong>Advertising cookies:</strong> Used by third-party advertisers to deliver relevant ads (e.g., Google AdSense).</li>
            </ul>

            <h2 className="text-xl font-semibold text-foreground">Third-Party Cookies</h2>
            <p>
              We partner with third-party services that may set cookies on your device. These include Google Analytics for traffic analysis and Google AdSense for advertising. These third parties may use cookies to collect information about your online activities across different websites.
            </p>

            <h2 className="text-xl font-semibold text-foreground">Managing Cookies</h2>
            <p>
              Most web browsers allow you to control cookies through their settings. You can choose to block or delete cookies. However, please note that disabling certain cookies may affect the functionality of this website.
            </p>

            <h2 className="text-xl font-semibold text-foreground">Changes to This Policy</h2>
            <p>
              We may update this Cookie Policy from time to time. Any changes will be posted on this page.
            </p>

            <p className="text-sm text-muted-foreground pt-4">Last updated: May 26, 2026</p>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
