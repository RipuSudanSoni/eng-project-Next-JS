import fs from "fs";
import path from "path";
import matter from "gray-matter";

type MarkdownMeta = {
  title?: string;
  description?: string;
  slug?: string;
  category?: string;
};

export function loadMarkdown(folder: string, slug: string) {
  const filePath = path.join(
    process.cwd(),
    "src/content",
    folder,
    `${slug}.md`
  );

  const file = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(file);

  return {
    meta: data as MarkdownMeta,
    content,
  };
}
