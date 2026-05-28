"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Navbar } from "./navbar";
import { Footer } from "./footer";
import { ContentRenderer } from "./content-renderer";
import { WikiSidebar } from "./wiki-sidebar";
import { ReadingProgress } from "./reading-progress";
import { Calendar, Clock, ArrowLeft } from "lucide-react";

interface TocItem {
  text: string;
  id: string;
  level: number;
}

function extractToc(content: string): TocItem[] {
  const lines = content.split("\n");
  const toc: TocItem[] = [];
  for (const line of lines) {
    if (line.startsWith("## ") || line.startsWith("### ")) {
      const level = line.startsWith("### ") ? 3 : 2;
      const text = line.replace(/^#+\s/, "").trim();
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
      toc.push({ text, id, level });
    }
  }
  return toc;
}

function readingTime(text: string): number {
  const words = text.split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

interface ArticleLayoutProps {
  title: string;
  category?: string;
  date?: string;
  source?: string;
  difficulty?: string;
  content: string;
  showWikiSidebar?: boolean;
  backLink?: { href: string; label: string };
  children?: React.ReactNode;
}

export function ArticleLayout({
  title,
  category,
  date,
  source,
  difficulty,
  content,
  showWikiSidebar = false,
  backLink,
  children,
}: ArticleLayoutProps) {
  const toc = extractToc(content);
  const minutes = readingTime(content);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    if (toc.length === 0) return;
    const handleScroll = () => {
      const headings = toc.map((t) => document.getElementById(t.id)).filter(Boolean) as HTMLElement[];
      if (headings.length === 0) return;
      let current = headings[0]?.id || "";
      for (const h of headings) {
        if (h.getBoundingClientRect().top < 120) {
          current = h.id;
        }
      }
      setActiveId(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [toc]);

  const difficultyColor: Record<string, string> = {
    Beginner: "text-green-600 dark:text-green-400",
    Intermediate: "text-blue-600 dark:text-blue-400",
    Advanced: "text-purple-600 dark:text-purple-400",
  };

  return (
    <>
      <ReadingProgress />
      <Navbar />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8 lg:py-12">
          {/* Breadcrumb */}
          {backLink && (
            <div className="mb-6">
              <Link
                href={backLink.href}
                className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <ArrowLeft className="h-4 w-4 mr-1" />
                {backLink.label}
              </Link>
            </div>
          )}

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Left Wiki Sidebar */}
            {showWikiSidebar && (
              <aside className="hidden lg:block lg:w-56 shrink-0">
                <div className="sticky top-24">
                  <WikiSidebar />
                </div>
              </aside>
            )}

            {/* Main Content */}
            <article className="flex-1 min-w-0">
              <div className="max-w-3xl mx-auto lg:mx-0">
                {/* Meta */}
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  {category && (
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                      {category}
                    </span>
                  )}
                  {source && (
                    <span className="text-xs font-medium text-muted-foreground">
                      {source}
                    </span>
                  )}
                  {difficulty && (
                    <span className={`text-xs font-semibold ${difficultyColor[difficulty] || ""}`}>
                      {difficulty}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-foreground">
                  {title}
                </h1>

                {/* Date & Reading Time */}
                <div className="flex flex-wrap items-center gap-4 mb-8 text-sm text-muted-foreground pb-8 border-b border-border">
                  {date && (
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="h-4 w-4" />
                      {date}
                    </span>
                  )}
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="h-4 w-4" />
                    {minutes} min read
                  </span>
                </div>

                {/* Body */}
                {children || <ContentRenderer content={content} />}
              </div>
            </article>

            {/* Right TOC Sidebar */}
            {toc.length > 0 && (
              <aside className="hidden xl:block xl:w-60 shrink-0">
                <div className="sticky top-24">
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                    On this page
                  </div>
                  <ul className="space-y-1.5 border-l border-border pl-3">
                    {toc.map((item) => (
                      <li
                        key={item.id}
                        className={item.level === 3 ? "ml-2" : ""}
                      >
                        <Link
                          href={`#${item.id}`}
                          className={`block text-sm leading-snug transition-colors ${
                            activeId === item.id
                              ? "text-primary font-medium"
                              : "text-muted-foreground hover:text-foreground"
                          }`}
                        >
                          {item.text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </aside>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
