import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lightnofirewiki.com"),
  title: {
    default: "Light No Fire Wiki & Map - Guides, Tools & Database (2026)",
    template: "%s - Light No Fire Wiki",
  },
  description:
    "The ultimate Light No Fire companion — wiki, interactive map, crafting calculators, resource database, and guides. Updated regularly.",
  keywords: [
    "Light No Fire",
    "Light No Fire Wiki",
    "Light No Fire Map",
    "Light No Fire Guide",
    "Light No Fire Tools",
    "Light No Fire crafting",
    "Light No Fire creatures",
    "Light No Fire resources",
    "Light No Fire items",
    "Light No Fire biomes",
    "Light No Fire dragons",
    "Light No Fire multiplayer",
    "Light No Fire release date",
    "Hello Games",
    "fantasy survival game",
  ],
  openGraph: {
    title: "Light No Fire Wiki & Map - Guides, Tools & Database",
    description: "The ultimate Light No Fire companion — wiki, interactive map, crafting calculators, resource database, and guides.",
    type: "website",
    locale: "en_US",
    siteName: "Light No Fire Wiki & Map",
    images: [
      {
        url: "/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Light No Fire Wiki & Map",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Light No Fire Wiki & Map",
    description: "The ultimate Light No Fire companion — wiki, interactive map, crafting calculators, resource database, and guides.",
    images: ["/og-default.jpg"],
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Light No Fire Wiki & Map",
  url: "https://lightnofirewiki.com",
  description: "Light No Fire wiki, interactive map, and tools.",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://lightnofirewiki.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (!theme) {
                    theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                  }
                  document.documentElement.classList.add(theme);
                } catch (e) {}
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
