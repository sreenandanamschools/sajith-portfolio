import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getPostData, getSortedPostsData } from "@/lib/blog";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

// Generate static params for build time
export async function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  try {
    const postData = await getPostData(resolvedParams.slug);
    return {
      title: `${postData.title} | Advocate Sajith`,
      description: postData.excerpt,
    };
  } catch {
    return {
      title: "Post Not Found",
    };
  }
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  let postData;
  try {
    postData = await getPostData(resolvedParams.slug);
  } catch {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#FCFCFA] text-[#0F0F0F] selection:bg-[#0F0F0F] selection:text-white overflow-x-hidden flex flex-col">
      <div className="fixed inset-0 pointer-events-none opacity-[0.04] z-0">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <Header />

      <main className="flex-1 max-w-[800px] w-full mx-auto px-6 pt-32 pb-24 relative z-10">
        <Link href="/blog" className="inline-flex items-center text-[10px] font-semibold uppercase tracking-wider text-[#5C5C56] hover:text-[#0F0F0F] transition-colors mb-12">
          <svg className="mr-2" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          Back to Blog
        </Link>
        
        <article>
          <header className="mb-12 border-b border-[#EBEBE6] pb-10">
            <time className="text-xs uppercase tracking-widest text-[#5C5C56] mb-4 block">
              {new Date(postData.date).toLocaleDateString("en-IN", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl tracking-tight leading-[1.1] text-[#0F0F0F]">
              {postData.title}
            </h1>
          </header>
          
          <div 
            className="prose prose-neutral max-w-none prose-headings:font-serif prose-headings:text-[#0F0F0F] prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-p:text-[#5C5C56] prose-p:font-light prose-p:leading-relaxed prose-a:text-[#0F0F0F] hover:prose-a:text-[#5C5C56] prose-li:text-[#5C5C56] prose-li:font-light prose-strong:text-[#0F0F0F]"
            dangerouslySetInnerHTML={{ __html: postData.contentHtml || "" }} 
          />
        </article>
      </main>

      <Footer />
    </div>
  );
}
