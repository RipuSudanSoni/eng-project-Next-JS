import { loadMarkdown } from "@/lib/loadMarkdown";
import { marked } from "marked";

export default function NounPage() {
  const md = loadMarkdown("grammar", "noun");
  const content = marked(md);

  return (
    <>
     {/* <div dangerouslySetInnerHTML={{ __html: content }} /> */}
     <article className="markdown-body" dangerouslySetInnerHTML={{ __html: content }} />
    </>
  );
}
