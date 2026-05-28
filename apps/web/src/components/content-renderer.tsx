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
        <Link key={i} href={linkMatch[2]} className="text-primary hover:underline font-medium">
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
    <div className="overflow-x-auto my-8">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="border-b-2 border-border">
            {header.map((h, i) => (
              <th key={i} className="text-left px-3 py-2.5 font-semibold text-foreground">
                {parseInline(h)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {body.map((row, ri) => (
            <tr key={ri} className="border-b border-border/40">
              {row.map((cell, ci) => (
                <td key={ci} className="px-3 py-2.5 text-muted-foreground">
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
    <details className="group border-b border-border my-0">
      <summary className="flex cursor-pointer items-center justify-between py-4 font-semibold text-foreground hover:text-primary transition-colors list-none">
        <span>{question}</span>
        <span className="ml-3 text-muted-foreground text-xs group-open:rotate-180 transition-transform shrink-0">▼</span>
      </summary>
      <div className="pb-4 text-muted-foreground leading-relaxed">
        {parseInline(answer)}
      </div>
    </details>
  );
}

function InfoBlock({ text, type }: { text: string; type: "info" | "tip" | "warning" }) {
  const styles = {
    info: "bg-blue-50/50 border-blue-200 text-blue-900 dark:bg-blue-950/20 dark:border-blue-800 dark:text-blue-100",
    tip: "bg-amber-50/50 border-amber-200 text-amber-900 dark:bg-amber-950/20 dark:border-amber-800 dark:text-amber-100",
    warning: "bg-red-50/50 border-red-200 text-red-900 dark:bg-red-950/20 dark:border-red-800 dark:text-red-100",
  };
  const labels = { info: "Info", tip: "Tip", warning: "Warning" };

  return (
    <div className={`my-6 p-4 border-l-4 rounded-r-md ${styles[type]}`}>
      <div className="text-xs font-bold uppercase tracking-wider mb-1 opacity-80">{labels[type]}</div>
      <div className="text-sm leading-relaxed">{parseInline(text)}</div>
    </div>
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

    // Info blocks: > [!INFO], > [!TIP], > [!WARNING]
    if (line.startsWith("> ")) {
      const text = line.replace("> ", "").trim();
      if (text.toLowerCase().startsWith("[!info]")) {
        elements.push(<InfoBlock key={i} text={text.replace(/\[!INFO\]/i, "").trim()} type="info" />);
        i++;
        continue;
      }
      if (text.toLowerCase().startsWith("[!tip]")) {
        elements.push(<InfoBlock key={i} text={text.replace(/\[!TIP\]/i, "").trim()} type="tip" />);
        i++;
        continue;
      }
      if (text.toLowerCase().startsWith("[!warning]")) {
        elements.push(<InfoBlock key={i} text={text.replace(/\[!WARNING\]/i, "").trim()} type="warning" />);
        i++;
        continue;
      }
      if (text.toLowerCase().startsWith("image:")) {
        elements.push(
          <div key={i} className="my-6 p-4 border border-dashed border-border rounded-lg bg-muted/20 text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">Image Suggestion:</span> {text.replace(/image:/i, "").trim()}
          </div>
        );
        i++;
        continue;
      }
    }

    if (line.startsWith("### ")) {
      const text = line.replace("### ", "").trim();
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
      elements.push(
        <h3 key={i} id={id} className="text-xl font-semibold mt-10 mb-4 text-foreground scroll-mt-28">
          {parseInline(text)}
        </h3>
      );
    } else if (line.startsWith("## ")) {
      const heading = line.replace("## ", "").trim();
      const id = heading.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
      if (heading.toLowerCase().includes("faq")) {
        inFaq = true;
        elements.push(
          <h2 key={i} id={id} className="text-2xl font-bold mt-14 mb-6 text-foreground scroll-mt-28 border-b border-border pb-2">
            {parseInline(heading)}
          </h2>
        );
      } else {
        elements.push(
          <h2 key={i} id={id} className="text-2xl font-bold mt-14 mb-6 text-foreground scroll-mt-28 border-b border-border pb-2">
            {parseInline(heading)}
          </h2>
        );
      }
    } else if (line.startsWith("# ")) {
      const text = line.replace("# ", "").trim();
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
      elements.push(
        <h1 key={i} id={id} className="text-3xl font-bold mt-10 mb-6 text-foreground scroll-mt-28">
          {parseInline(text)}
        </h1>
      );
    } else if (line.startsWith("- ")) {
      elements.push(
        <li key={i} className="ml-5 text-foreground/90 leading-relaxed list-disc mb-1.5">
          {parseInline(line.replace("- ", ""))}
        </li>
      );
    } else if (line.match(/^\d+\.\s/)) {
      elements.push(
        <li key={i} className="ml-5 text-foreground/90 leading-relaxed list-decimal mb-1.5">
          {parseInline(line.replace(/^\d+\.\s/, ""))}
        </li>
      );
    } else if (line.trim() === "") {
      elements.push(<div key={i} className="h-3" />);
    } else if (line.startsWith("> ")) {
      const text = line.replace("> ", "").trim();
      elements.push(
        <blockquote key={i} className="border-l-4 border-primary/40 pl-5 my-6 italic text-muted-foreground leading-relaxed">
          {parseInline(text)}
        </blockquote>
      );
    } else {
      elements.push(
        <p key={i} className="text-foreground/85 leading-[1.75] mb-4">
          {parseInline(line)}
        </p>
      );
    }
    i++;
  }

  flushTable();
  flushFaq();
  flushFaqSection();

  return <div>{elements}</div>;
}
