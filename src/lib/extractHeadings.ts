export function extractHeadingsFromMarkdown(content: string) {
  const headingRegex = /^(#{2,3})\s+(.+)$/gm;
  const headings: { id: string; label: string; level: number }[] = [];
  
  let match;
  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length; // 2 for ##, 3 for ###
    const text = match[2].trim();
    
    // Generate ID (same logic as rehype-slug)
    const id = text
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9-]/g, '');
    
    headings.push({ id, label: text, level });
  }
  
  return headings;
}