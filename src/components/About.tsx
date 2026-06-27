"use client";

import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-24 border-b border-[#EBEBE6]">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0F0F0F] mb-6 flex items-center before:content-[''] before:inline-block before:w-6 before:h-[1px] before:bg-[#0F0F0F] before:mr-3">
          About the Advocate
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-tight text-[#0F0F0F] mb-8">
          Ethical legal representation built on empirical research and client-first principles.
        </h2>
        <p className="text-[#5C5C56] font-light leading-relaxed mb-8">
          Sajith is a distinguished advocate with over fifteen years of dedicated litigation and consulting practice. He regularly represents clients before the Supreme Court of India, the High Court of Delhi, and various District Courts and regulatory tribunals. His practice is defined by deep research, strategic clarity, and an ethical commitment to justice.
        </p>
        <div className="border-l-2 border-[#0F0F0F] pl-6 py-1 italic text-[#5C5C56]">
          &ldquo;My practice is built on a foundation of thorough empirical research and assertive courtroom representation. Every case is treated as an intellectual and strategic challenge.&rdquo;
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-xs uppercase tracking-[0.15em] text-[#0F0F0F] font-semibold mb-8">Professional Timeline</h3>
        <div className="flex flex-col">
          {[
            { year: "2018", role: "Founder & Managing Partner", desc: "Established Sajith & Partners chambers in New Delhi, specializing in corporate insolvency, property partition suits, and commercial litigation." },
            { year: "2012", role: "Senior Counsel — High Court of Delhi", desc: "Led litigation and trial defense teams in complex civil, labor, and constitutional writ matters, establishing vital judicial precedents." },
            { year: "2009", role: "Associate Advocate", desc: "Acquired comprehensive training in commercial drafting, banking recovery matters, and consumer dispute resolution." }
          ].map((item, idx) => (
            <div key={idx} className="grid grid-cols-[100px_1fr] gap-6 py-6 border-b border-[#EBEBE6] last:border-b-0">
              <span className="font-serif text-xl text-[#0F0F0F] font-semibold">{item.year}</span>
              <div>
                <h4 className="font-semibold text-sm mb-1">{item.role}</h4>
                <p className="text-sm text-[#5C5C56] font-light">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
