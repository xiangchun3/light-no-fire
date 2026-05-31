import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Home, Search, Map } from "lucide-react";

export const metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="flex-1 flex items-center justify-center">
        <div className="container mx-auto px-4 py-24 text-center max-w-xl">
          <h1 className="text-7xl font-black text-primary mb-4">404</h1>
          <h2 className="text-2xl font-bold mb-3">Page Not Found</h2>
          <p className="text-muted-foreground mb-10">
            This page doesn&apos;t exist or has been moved. Try exploring the wiki, map, or using search.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <Button asChild>
              <Link href="/">
                <Home className="h-4 w-4 mr-2" />
                Home
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/wiki/">
                <Search className="h-4 w-4 mr-2" />
                Wiki
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/map/">
                <Map className="h-4 w-4 mr-2" />
                Map
              </Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
