import { loadMarkdown } from "@/lib/loadMarkdown";
import MarkdownRenderer from "@/components/MarkdownRenderer";

export default function GrammarIndexPage() {
  const { content } = loadMarkdown("start-speaking", "start-speaking");

  return (
    <MarkdownRenderer content={content} />
  );
}
