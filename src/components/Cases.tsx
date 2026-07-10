"use client";

import React from "react";
import TiltCard from "./TiltCard";

export default function Cases() {
  return (
    <section id="cases" className="py-20 md:py-32 border-b border-[#EBEBE6]">
      <div className="max-w-[700px] mb-16">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0F0F0F] mb-6 flex items-center before:content-[''] before:inline-block before:w-6 before:h-[1px] before:bg-[#0F0F0F] before:mr-3">
          Case Highlights
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#0F0F0F]">
          Demonstrable precedents. Anonymized strategies. Proven outcomes.
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {[
          {
            category: "Corporate & NCLT Law",
            title: "Shareholder Dispute and Asset Restructuring",
            challenge: "Hostile deadlock between majority founders risking total operational freeze of a regional manufacturing enterprise under Companies Act, 2013.",
            strategy: "Instituted strategic proceedings before the NCLT combined with temporary injunctions to preserve business operations.",
            outcome: "Successful buy-out structured through NCLT mediation; business preserved with zero operational downtime."
          },
          {
            category: "Real Estate & Writ Jurisdiction",
            title: "Commercial Property Acquisition Title Clearance",
            challenge: "Multiple historical claims filed against a high-value industrial lot under acquisition, threatening project delays.",
            strategy: "Conducted deep forensic land records search and filed writ petitions before the High Court to clear title encumbrances.",
            outcome: "Full unencumbered ownership title granted under High Court directives; project commenced on schedule."
          }
        ].map((item, idx) => (
          <TiltCard key={idx}>
            <div className="bg-white border border-[#DCDCD4] p-10 flex flex-col justify-between h-full depth-card">
              <div className="depth-element-text">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#0F0F0F] mb-6 block">{item.category}</span>
                <h3 className="font-serif text-2xl md:text-3xl text-[#0F0F0F] mb-8">{item.title}</h3>
              </div>
              <div className="flex flex-col gap-6 text-sm depth-element-bg">
                <div className="grid grid-cols-1 sm:grid-cols-[100px_1fr] gap-1 sm:gap-4">
                  <span className="text-[10px] uppercase font-semibold text-[#0F0F0F] tracking-wider">Challenge</span>
                  <span className="text-[#5C5C56] font-light leading-relaxed">{item.challenge}</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-[100px_1fr] gap-1 sm:gap-4">
                  <span className="text-[10px] uppercase font-semibold text-[#0F0F0F] tracking-wider">Strategy</span>
                  <span className="text-[#5C5C56] font-light leading-relaxed">{item.strategy}</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-[100px_1fr] gap-1 sm:gap-4">
                  <span className="text-[10px] uppercase font-semibold text-[#0F0F0F] tracking-wider">Outcome</span>
                  <span className="text-[#0F0F0F] font-medium leading-relaxed">{item.outcome}</span>
                </div>
              </div>
            </div>
          </TiltCard>
        ))}
      </div>
    </section>
  );
}
