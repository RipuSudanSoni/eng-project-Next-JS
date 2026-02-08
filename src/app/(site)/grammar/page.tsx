import { loadMarkdown } from "@/lib/loadMarkdown";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import Layout3Column from "@/components/Layout3Column/Layout3Column";
import MobileSidebarDrawer from "@/components/Sidebar/MobileSidebarDrawer";
import Sidebar from "@/components/Sidebar/Sidebar";

export default function GrammarIndexPage() {
  const { content, headings } = loadMarkdown("grammar", "grammar");

  return (
    <>
      <MobileSidebarDrawer />
      <Layout3Column
        sidebar={<Sidebar items={headings} />}
        content={<MarkdownRenderer content={content} />}
      />
    </>
  );
}