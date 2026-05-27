import Link from "next/link";
import { Flame } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="space-y-3">
            <Link href="/" className="flex items-center gap-2 text-primary">
              <Flame className="h-5 w-5" />
              <span className="font-bold">Light No Fire</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Light No Fire wiki, map, and tools.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Wiki</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/wiki/dragons" className="hover:text-foreground">Dragons</Link></li>
              <li><Link href="/wiki/biomes" className="hover:text-foreground">Biomes</Link></li>
              <li><Link href="/wiki/crafting" className="hover:text-foreground">Crafting</Link></li>
              <li><Link href="/wiki/building" className="hover:text-foreground">Building</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Tools</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/map" className="hover:text-foreground">Interactive Map</Link></li>
              <li><Link href="/tools" className="hover:text-foreground">Crafting Calculator</Link></li>
              <li><Link href="/tools" className="hover:text-foreground">Resource Tracker</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Community</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/blog/" className="hover:text-foreground">Blog</Link></li>
              <li><Link href="/news/" className="hover:text-foreground">News</Link></li>
              <li><Link href="/guides/" className="hover:text-foreground">Guides</Link></li>
              <li><Link href="/search/" className="hover:text-foreground">Search</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/about/" className="hover:text-foreground">About Us</Link></li>
              <li><Link href="/privacy-policy/" className="hover:text-foreground">Privacy Policy</Link></li>
              <li><Link href="/terms/" className="hover:text-foreground">Terms of Service</Link></li>
              <li><Link href="/cookies/" className="hover:text-foreground">Cookie Policy</Link></li>
              <li><Link href="/contact/" className="hover:text-foreground">Contact Us</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Light No Fire Wiki. Fan-made and not affiliated with the official game.
        </div>
      </div>
    </footer>
  );
}
