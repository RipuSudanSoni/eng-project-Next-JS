// import ReactMarkdown from "react-markdown";
// import remarkGfm from "remark-gfm";
// import { visit } from "unist-util-visit";

// type Props = {
//   content: string;
// };

// function remarkCustomHeadingId() {
//   return (tree: any) => {
//     let lastId: string | null = null;

//     visit(tree, (node: any) => {
//       // HTML comment: <!-- id: xxx -->
//       if (node.type === "html") {
//         const match = node.value.match(/id:\s*([a-zA-Z0-9-_]+)/);
//         if (match) {
//           lastId = match[1];
//         }
//       }

//       if (
//         (node.type === "heading" || node.type === "paragraph") &&
//         lastId
//       ) {
//         node.data = node.data || {};
//         node.data.hProperties = node.data.hProperties || {};
//         node.data.hProperties.id = lastId;
//         lastId = null;
//       }
//     });
//   };
// }

// export default function MarkdownRenderer({ content }: Props) {
//   return (
//     <article className="markdown-body">
//       <ReactMarkdown
//         remarkPlugins={[remarkGfm, remarkCustomHeadingId]}
//       >
//         {content}
//       </ReactMarkdown>
//     </article>
//   );
// }





import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";

type Props = {
  content: string;
};

export default function MarkdownRenderer({ content }: Props) {
  return (
    <article className="markdown-body">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeSlug]}
      >
        {content}
      </ReactMarkdown>
    </article>
  );
}
