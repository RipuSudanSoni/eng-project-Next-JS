import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { loadMarkdown } from "@/lib/loadMarkdown";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import Layout3Column from "@/components/Layout3Column/Layout3Column";
import MobileSidebarDrawer from "@/components/Sidebar/MobileSidebarDrawer";
import Sidebar from "@/components/Sidebar/Sidebar";

type PageProps = {
  params: {
    slug: string;
  };
};

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

export default async function GrammarPage({ params }: PageProps) {
  const { slug } = await params;
  if (!slug) notFound();
  
  const { content, headings } = loadMarkdown("grammar", slug);
  
  if (!content) notFound();
  
  return (
    <>
      <MobileSidebarDrawer />
      <Layout3Column
        sidebar={<Sidebar items={headings} />}
        content={<MarkdownRenderer content={content} />}
      />
    </>
  );
}