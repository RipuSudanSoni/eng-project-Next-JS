import { loadMarkdown } from "@/lib/loadMarkdown";
import { marked } from 'marked';

export default function GrammarPage() {
const md = loadMarkdown('grammar', 'grammar');
const content = marked(md);

  return (
     <article className="markdown-body" dangerouslySetInnerHTML={{ __html: content }} />
    // <div dangerouslySetInnerHTML={{ __html: content }} />
  );
}
