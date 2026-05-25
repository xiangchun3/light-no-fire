import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Calculator, MapPin, ClipboardList, ArrowRight } from "lucide-react";

const tools = [
  {
    title: "Crafting Calculator",
    description: "Calculate materials needed for any recipe. Plan your crafting runs efficiently.",
    href: "/tools/crafting",
    icon: Calculator,
  },
  {
    title: "Coordinate Converter",
    description: "Convert between in-game coordinates and map coordinates.",
    href: "/tools/coordinates",
    icon: MapPin,
  },
  {
    title: "Resource Tracker",
    description: "Track your collected resources and see what you still need.",
    href: "/tools/tracker",
    icon: ClipboardList,
  },
];

export const metadata = {
  title: "Tools",
  description: "Light No Fire player tools: crafting calculator, coordinate converter, and resource tracker.",
};

export default function ToolsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="border-b border-border">
          <div className="container mx-auto px-4 py-16">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Player Tools</h1>
            <p className="text-muted-foreground max-w-2xl">
              Useful calculators and trackers to optimize your Light No Fire gameplay.
            </p>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tools.map((tool) => (
              <Card key={tool.href} className="hover:border-primary/50 transition-colors">
                <CardHeader>
                  <tool.icon className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>{tool.title}</CardTitle>
                  <CardDescription>{tool.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link
                    href={tool.href}
                    className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                  >
                    Open Tool <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
