import fs from 'fs';
import path from 'path';


// export function loadMarkdown(slug: string) {
// const filePath = path.join(process.cwd(), 'src/content/grammar', `${slug}.md`);
// return fs.readFileSync(filePath, 'utf-8');
// }


export function loadMarkdown(folder: string, slug: string) {
  const filePath = path.join(
    process.cwd(),
    'src/content',
    folder,
    `${slug}.md`
  );
  return fs.readFileSync(filePath, 'utf-8');
}