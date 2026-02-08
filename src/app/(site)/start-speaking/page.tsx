import { loadMarkdown } from "@/lib/loadMarkdown";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import SetSidebarItems from "@/components/Sidebar/SetSidebarItems";

export default function GrammarIndexPage() {
  const { content, headings } = loadMarkdown("start-speaking", "start-speaking");

  return (
    <>
      <SetSidebarItems items={headings} />
      <MarkdownRenderer content={content} />
    </>
  );
}