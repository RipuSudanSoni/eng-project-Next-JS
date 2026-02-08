export function extractHeadingsFromMarkdown(content: string) {
  const headingRegex = /^(#{2,3})\s+(.+)$/gm;
  const headings: { id: string; label: string; level: number }[] = [];
  const idTracker = new Map<string, number>();
  
  let match;
  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length;
    const text = match[2].trim();
    
    let baseId = text
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9-]/g, '');
    
    // for cheching duplicate id or headings in .md file content
    let id = baseId;
    if (idTracker.has(baseId)) {
      const count = idTracker.get(baseId)! + 1;
      idTracker.set(baseId, count);
      id = `${baseId}-${count}`;
    } else {
      idTracker.set(baseId, 0);
    }
    
    headings.push({ id, label: text, level });
  }
  
  return headings;
}