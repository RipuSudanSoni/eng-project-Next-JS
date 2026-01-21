import { loadMarkdown } from "@/lib/loadMarkdown";
import { marked } from "marked";

export default function TensePage() {
  const md = loadMarkdown("grammar", "tense");
  const content = marked(md);
  return (
    <div
      className="markdown-body"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
