import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { loadMarkdown } from "@/lib/loadMarkdown";
import MarkdownRenderer from "@/components/MarkdownRenderer";

// type PageProps = {
//   params: Promise<{
//     slug: string;
//   }>;
// };

type PageProps = {
  params: {
    slug: string;
  };
};


/* =====================
   SEO METADATA
===================== */
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  if (!slug) return {};

  const { meta } = loadMarkdown("grammar", slug);

  return {
    title: meta?.title ?? `${slug} Grammar`,
    description: meta?.description ?? `Learn ${slug} grammar`,
  };
}

/* =====================
   PAGE
===================== */
export default async function GrammarPage({ params }: PageProps) {
  const { slug } = await params;

  if (!slug) notFound();

  const { content } = loadMarkdown("grammar", slug);

  if (!content) notFound();

  return (
    <MarkdownRenderer content={content} />
    );
}
