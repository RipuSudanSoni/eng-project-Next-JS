import { loadMarkdown } from "@/lib/loadMarkdown";
import { marked } from "marked";

export default function Verb_page() {
  const md = loadMarkdown("grammar", "verb");
  const content = marked(md);

  return (
      <div dangerouslySetInnerHTML={{ __html: content }} />
  );
}
