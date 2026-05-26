import Link from "next/link";
import { ReactNode } from "react";

function parseInline(text: string): ReactNode {
  if (!text) return null;
  const parts = text.split(/(\*\*.*?\*\*|\[.*?\]\(.*?\))/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    const linkMatch = part.match(/\[(.*?)\]\((.*?)\)/);
    if (linkMatch) {
      return (
        <Link key={i} href={linkMatch[2]} className="text-primary hover:underline">
          {linkMatch[1]}
        </Link>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

function MarkdownTable({ lines }: { lines: string[] }) {
  const rows = lines
    .filter((l) => l.trim().startsWith("|") && l.trim().endsWith("|"))
    .map((l) =>
      l
        .trim()
        .slice(1, -1)
        .split("|")
        .map((c) => c.trim())
    );

  if (rows.length < 2) return null;
  const [header, , ...body] = rows;
  if (!header) return null;

  return (
    <div className="overflow-x-auto my-6">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="border-b border-border">
            {header.map((h, i) => (
              <th key={i} className="text-left px-3 py-2 font-semibold text-foreground">
                {parseInline(h)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {body.map((row, ri) => (
            <tr key={ri} className="border-b border-border/50">
              {row.map((cell, ci) => (
                <td key={ci} className="px-3 py-2 text-muted-foreground">
                  {parseInline(cell)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function FaqBlock({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="group border border-border rounded-lg my-3 bg-card/30">
      <summary className="flex cursor-pointer items-center justify-between p-4 font-semibold text-foreground hover:bg-card/50 transition-colors">
        {question}
        <span className="ml-2 text-muted-foreground group-open:rotate-180 transition-transform">▼</span>
      </summary>
      <div className="px-4 pb-4 text-muted-foreground leading-relaxed">
        {parseInline(answer)}
      </div>
    </details>
  );
}

export function ContentRenderer({ content }: { content: string }) {
  const lines = content.split("\n");
  const elements: ReactNode[] = [];
  let i = 0;
  let tableLines: string[] = [];
  let inFaq = false;
  let faqElements: ReactNode[] = [];
  let currentFaqQuestion = "";
  let currentFaqAnswerLines: string[] = [];

  function flushFaq() {
    if (currentFaqQuestion && currentFaqAnswerLines.length > 0) {
      faqElements.push(
        <FaqBlock key={`faq-${faqElements.length}`} question={currentFaqQuestion} answer={currentFaqAnswerLines.join(" ")} />
      );
    }
    currentFaqQuestion = "";
    currentFaqAnswerLines = [];
  }

  function flushTable() {
    if (tableLines.length > 0) {
      elements.push(<MarkdownTable key={`table-${i}`} lines={tableLines} />);
      tableLines = [];
    }
  }

  function flushFaqSection() {
    if (faqElements.length > 0) {
      elements.push(...faqElements);
      faqElements = [];
    }
    inFaq = false;
  }

  while (i < lines.length) {
    const line = lines[i];

    // Table handling
    if (line.trim().startsWith("|") && line.trim().endsWith("|")) {
      flushFaqSection();
      tableLines.push(line);
      i++;
      continue;
    } else if (tableLines.length > 0) {
      flushTable();
      continue;
    }

    // FAQ handling: after "## FAQ" section, h3 becomes questions
    if (inFaq && line.startsWith("### ")) {
      flushFaq();
      currentFaqQuestion = line.replace("### ", "").trim();
      i++;
      continue;
    }
    if (inFaq && currentFaqQuestion && !line.startsWith("## ") && !line.startsWith("# ")) {
      if (line.trim() === "") {
        // empty line might separate faqs
      } else {
        currentFaqAnswerLines.push(line.trim());
      }
      i++;
      continue;
    }
    if (inFaq && (line.startsWith("## ") || line.startsWith("# "))) {
      flushFaq();
      flushFaqSection();
    }

    if (line.startsWith("### ")) {
      elements.push(
        <h3 key={i} className="text-lg font-semibold mt-6 mb-3 text-foreground">
          {parseInline(line.replace("### ", ""))}
        </h3>
      );
    } else if (line.startsWith("## ")) {
      const heading = line.replace("## ", "").trim();
      if (heading.toLowerCase().includes("faq")) {
        inFaq = true;
        elements.push(
          <h2 key={i} className="text-xl font-semibold mt-8 mb-3 text-foreground">
            {parseInline(heading)}
          </h2>
        );
      } else {
        elements.push(
          <h2 key={i} className="text-xl font-semibold mt-8 mb-3 text-foreground">
            {parseInline(heading)}
          </h2>
        );
      }
    } else if (line.startsWith("# ")) {
      elements.push(
        <h1 key={i} className="text-2xl font-bold mt-8 mb-4 text-foreground">
          {parseInline(line.replace("# ", ""))}
        </h1>
      );
    } else if (line.startsWith("- ")) {
      elements.push(
        <li key={i} className="ml-5 text-muted-foreground leading-relaxed list-disc">
          {parseInline(line.replace("- ", ""))}
        </li>
      );
    } else if (line.match(/^\d+\.\s/)) {
      elements.push(
        <li key={i} className="ml-5 text-muted-foreground leading-relaxed list-decimal">
          {parseInline(line.replace(/^\d+\.\s/, ""))}
        </li>
      );
    } else if (line.trim() === "") {
      elements.push(<div key={i} className="h-2" />);
    } else if (line.startsWith("> ")) {
      const text = line.replace("> ", "").trim();
      if (text.toLowerCase().startsWith("image:")) {
        elements.push(
          <div key={i} className="my-4 p-4 border border-dashed border-border rounded-lg bg-muted/30 text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">Image Suggestion:</span> {text.replace(/image:/i, "").trim()}
          </div>
        );
      } else {
        elements.push(
          <blockquote key={i} className="border-l-2 border-primary pl-4 my-4 italic text-muted-foreground">
            {parseInline(text)}
          </blockquote>
        );
      }
    } else {
      elements.push(
        <p key={i} className="text-muted-foreground leading-relaxed">
          {parseInline(line)}
        </p>
      );
    }
    i++;
  }

  flushTable();
  flushFaq();
  flushFaqSection();

  return <div className="space-y-1">{elements}</div>;
}
