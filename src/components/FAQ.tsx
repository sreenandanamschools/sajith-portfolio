"use client";

import React, { useState } from "react";

export default function FAQ() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-32 border-b border-[#EBEBE6]">
      <div className="max-w-[700px] mx-auto text-center mb-16">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0F0F0F] mb-6 flex items-center justify-center before:content-[''] before:inline-block before:w-6 before:h-[1px] before:bg-[#0F0F0F] before:mr-3">
          Common Inquiries
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#0F0F0F]">
          Frequently Asked Legal Questions
        </h2>
      </div>

      <div className="max-w-[800px] mx-auto">
        {[
          { q: "How long does it take to clear property title and obtain RERA clearances in India?", a: "Title search and clearance takes 4 to 6 weeks depending on the Sub-Registrar records and municipal offices. Obtaining RERA registration and local body approvals generally takes another 30 to 45 days, depending on complete documentation." },
          { q: "What documents are required for my initial consultation?", a: "Please share any current litigation papers, agreements, communications (emails/letters), and relevant corporate registrations. A brief chronological summary of events is highly recommended." },
          { q: "How does the office charge for litigation matters?", a: "Our fee structure is based on a fixed brief fee and appearance fee retainer, aligned with the Bar Council of India guidelines. The fee details for trial courts, NCLT, High Court, or Supreme Court representations are detailed during the initial consultation." }
        ].map((item, idx) => (
          <div key={idx} className={`border-b border-[#DCDCD4] accordion-item ${activeFaq === idx ? "active" : ""}`}>
            <button
              onClick={() => toggleFaq(idx)}
              className="w-full flex justify-between items-center py-6 text-left font-serif text-lg md:text-xl text-[#0F0F0F] hover:text-[#0F0F0F] transition-colors focus:outline-none"
            >
              {item.q}
              <span className="relative w-[18px] h-[18px] shrink-0">
                <span className="absolute top-[8px] left-0 w-[18px] h-[1px] bg-[#0F0F0F]" />
                <span className={`absolute top-0 left-[8px] w-[1px] h-[18px] bg-[#0F0F0F] transition-transform duration-300 ${activeFaq === idx ? "rotate-90 scale-y-0" : ""}`} />
              </span>
            </button>
            <div className="accordion-content">
              <p className="pb-6 text-sm text-[#5C5C56] font-light leading-relaxed">{item.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
