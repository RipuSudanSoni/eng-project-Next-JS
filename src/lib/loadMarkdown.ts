import 'server-only';
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { extractHeadingsFromMarkdown } from "./extractHeadings";

type MarkdownMeta = {
  title?: string;
  description?: string;
  slug?: string;
  category?: string;
};

const markdownCache = new Map<string, any>();

export function loadMarkdown(folder: string, slug: string) {
  const cacheKey = `${folder}/${slug}`;
  
  // Step 1: पहले कैच से चेक करें
  if (markdownCache.has(cacheKey)) {
    console.log(`Cache hit for ${cacheKey}`);
    return markdownCache.get(cacheKey);
  }
  
  // Step 2: फ़ाइल पढ़ें
  const filePath = path.join(
    process.cwd(),
    "src/content",
    folder,
    `${slug}.md`
  );
  
  // Step 3: Error handling
  if (!fs.existsSync(filePath)) {
    throw new Error(`File not found: ${filePath}`);
  }
  
  const file = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(file);
  const headings = extractHeadingsFromMarkdown(content);
  
  const result = {
    meta: data as MarkdownMeta,
    content,
    headings,
  };
  
  // Step 4: कैच में स्टोर करें
  markdownCache.set(cacheKey, result);
  console.log(`Cached ${cacheKey}`);
  
  return result;
}