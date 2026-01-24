import { loadMarkdown } from "@/lib/loadMarkdown";
import { marked } from "marked";
import { generateTOCSchema } from "@/lib/tocSchema";
import { sidebarConfig } from "@/data/sidebar";

const renderer = new marked.Renderer();

renderer.heading = function ({ tokens, depth }) {
  let text = tokens.map(t => t.raw).join("");
  let match = text.match(/\{#(.+?)\}$/);

  let slug = "";

  if (match) {
    slug = match[1];
    text = text.replace(/\s*\{#.+?\}$/, "");
  } else {
    slug = text.toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-")
      .substring(0, 60);
  }

  return `<h${depth} id="${slug}">${text}</h${depth}>`;
};

marked.use({ renderer, headerIds: false, mangle: false } as any);

export default function TensePage() {
  const md = loadMarkdown("grammar", "tense");
  const content = marked(md);

  const tocSchema = generateTOCSchema(
    sidebarConfig.grammar.leftsidebar_grammar
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(tocSchema),
        }}
      />

      <div
        className="markdown-body"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </>
  );
}
