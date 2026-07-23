import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getSortedPostsData } from "@/lib/blog";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Advocate Sajith",
  description: "Read the latest legal articles and updates from Advocate Sajith.",
};

export default function BlogIndex() {
  const allPostsData = getSortedPostsData();

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

      <main className="flex-1 max-w-[900px] w-full mx-auto px-6 pt-32 pb-12 relative z-10">
        <div className="mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0F0F0F] mb-6 flex items-center before:content-[''] before:inline-block before:w-6 before:h-[1px] before:bg-[#0F0F0F] before:mr-3">
            Legal Articles
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.05] text-[#0F0F0F] mb-6">
            Insights & Updates
          </h1>
          <p className="text-[#5C5C56] font-light max-w-[600px] leading-relaxed">
            Thoughts, legal updates, and practical advice on civil, criminal, and property law in Kerala.
          </p>
        </div>

        <div className="flex flex-col gap-12">
          {allPostsData.map(({ slug, date, title, excerpt }) => (
            <article key={slug} className="group border-b border-[#EBEBE6] pb-12 last:border-b-0">
              <Link href={`/blog/${slug}`} className="block">
                <time className="text-xs uppercase tracking-widest text-[#5C5C56] mb-3 block">
                  {new Date(date).toLocaleDateString("en-IN", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                <h2 className="font-serif text-2xl sm:text-3xl text-[#0F0F0F] group-hover:text-[#5C5C56] transition-colors mb-4">
                  {title}
                </h2>
                <p className="text-sm text-[#5C5C56] font-light leading-relaxed mb-6">
                  {excerpt}
                </p>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#0F0F0F] flex items-center gap-2 group-hover:gap-3 transition-all">
                  Read Article
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </span>
              </Link>
            </article>
          ))}
          {allPostsData.length === 0 && (
            <p className="text-[#5C5C56] font-light">No posts available yet. Check back soon!</p>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
