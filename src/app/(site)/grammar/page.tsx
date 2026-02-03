import { loadMarkdown } from "@/lib/loadMarkdown";
import MarkdownRenderer from "@/components/MarkdownRenderer";

export default function GrammarIndexPage() {
  const { content } = loadMarkdown("grammar", "grammar");

  return (
    <MarkdownRenderer content={content} />
  );
}
