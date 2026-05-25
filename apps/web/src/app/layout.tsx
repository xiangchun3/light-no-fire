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
  title: {
    default: "Light No Fire Wiki & Map - Guides, Tools & Database",
    template: "%s - Light No Fire Wiki",
  },
  description:
    "The ultimate Light No Fire wiki, interactive map, and tool hub. Find items, resources, creatures, biomes, crafting guides, and more.",
  keywords: [
    "Light No Fire",
    "Light No Fire Wiki",
    "Light No Fire Map",
    "Light No Fire Guide",
    "Light No Fire Tools",
  ],
  openGraph: {
    title: "Light No Fire Wiki & Map",
    description: "Your ultimate destination for Light No Fire guides, map, and tools.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Light No Fire Wiki & Map",
    description: "Your ultimate destination for Light No Fire guides, map, and tools.",
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
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
