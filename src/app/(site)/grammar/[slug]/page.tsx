import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { loadMarkdown } from "@/lib/loadMarkdown";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import Layout3Column from "@/components/Layout3Column/Layout3Column";
import Sidebar from "@/components/Sidebar/Sidebar";
import SetSidebarItems from "@/components/Sidebar/SetSidebarItems";

type PageProps = {
  params: {
    slug: string;
  };
};


export default async function GrammarPage({ params }: PageProps) {
  const { slug } = await params;
  if (!slug) notFound();
  
  const { content, headings } = loadMarkdown("grammar", slug);
  
  if (!content) notFound();
  
  return (
    <>
      <SetSidebarItems items={headings} />
      
      <Layout3Column
        sidebar={<Sidebar items={headings} />}
        content={<MarkdownRenderer content={content} />}
      />
    </>
  );
}




export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  if (!slug) return {};
  
  const { meta } = loadMarkdown("grammar", slug);
  
  return {
    title: meta?.title ?? `${slug} Grammar - EnglishBhoot`,
    description: meta?.description ?? `Learn ${slug} in English grammar with Hindi examples, rules, and daily practice.`,
    keywords: meta?.keywords || [
      "english grammar", 
      slug, 
      "learn english",
      "spoken english",
      "hindi explanation"
    ],
    authors: [{ name: "EnglishBhoot" }],
    openGraph: {
      title: meta?.title ?? `${slug} Grammar`,
      description: meta?.description ?? `Learn ${slug} in English grammar`,
      type: "article",
      publishedTime: new Date().toISOString(),
      authors: ["EnglishBhoot"],
      url: `https://englishbhoot.com/grammar/${slug}`,
      images: [
        {
          url: "/image/logo/englishbhoot-og.jpg",
          width: 1200,
          height: 630,
          alt: "EnglishBhoot Logo",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: meta?.title ?? `${slug} Grammar`,
      description: meta?.description ?? `Learn ${slug} in English grammar`,
      images: ["/image/logo/englishbhoot-twitter.jpg"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: `https://englishbhoot.com/grammar/${slug}`,
    },
  };
}