import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Light No Fire Wiki.",
  robots: { index: true, follow: false },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <article className="container mx-auto px-4 py-12 max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Privacy Policy</h1>

          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Light No Fire Wiki (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) respects your privacy. This Privacy Policy explains how we collect, use, and protect your information when you visit our website.
            </p>

            <h2 className="text-xl font-semibold text-foreground">1. Information We Collect</h2>
            <p>
              We may collect non-personally identifiable information such as browser type, device type, referring pages, and time spent on pages through standard analytics tools. We do not collect personal information unless voluntarily provided by you.
            </p>

            <h2 className="text-xl font-semibold text-foreground">2. Cookies and Tracking</h2>
            <p>
              We use cookies to enhance your browsing experience, remember your theme preferences, and analyze website traffic. Third-party advertisers (such as Google AdSense) may also use cookies to serve personalized ads based on your browsing history.
            </p>

            <h2 className="text-xl font-semibold text-foreground">3. Third-Party Services</h2>
            <p>
              We use third-party services including Google Analytics and Google AdSense. These services may collect data according to their own privacy policies. We encourage you to review Google&apos;s Privacy Policy for more information.
            </p>

            <h2 className="text-xl font-semibold text-foreground">4. Data Security</h2>
            <p>
              We implement reasonable security measures to protect your information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2 className="text-xl font-semibold text-foreground">5. Children&apos;s Privacy</h2>
            <p>
              Our website is not intended for children under 13. We do not knowingly collect personal information from children under 13. If you believe we have inadvertently collected such information, please contact us.
            </p>

            <h2 className="text-xl font-semibold text-foreground">6. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date.
            </p>

            <h2 className="text-xl font-semibold text-foreground">7. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us through our <a href="/contact/" className="text-primary hover:underline">Contact Page</a>.
            </p>

            <p className="text-sm text-muted-foreground pt-4">Last updated: May 26, 2026</p>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
