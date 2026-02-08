import { loadMarkdown } from "@/lib/loadMarkdown";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import Layout3Column from "@/components/Layout3Column/Layout3Column";
import Sidebar from "@/components/Sidebar/Sidebar";
import SetSidebarItems from "@/components/Sidebar/SetSidebarItems";

export default function GrammarIndexPage() {
  const { content, headings } = loadMarkdown("grammar", "grammar");

  return (
    <>
      <SetSidebarItems items={headings} />
      
      <Layout3Column
        sidebar={<Sidebar items={headings} />}
        content={<MarkdownRenderer content={content} />}
      />
    </>
  );
}