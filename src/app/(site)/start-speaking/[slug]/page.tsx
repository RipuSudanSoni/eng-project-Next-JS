import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { loadMarkdown } from "@/lib/loadMarkdown";
import MarkdownRenderer from "@/components/MarkdownRenderer";

type PageProps = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = params;

  const { meta } = loadMarkdown("start-speaking", slug);

  return {
    title: meta?.title ?? "Start Speaking English",
    description:
      meta?.description ?? "Learn spoken English step by step",
  };
}

export default function StartSpeakingPage({ params }: PageProps) {
  const { slug } = params;

  const { content } = loadMarkdown("start-speaking", slug);

  if (!content) notFound();

  return <MarkdownRenderer content={content} />;
}
