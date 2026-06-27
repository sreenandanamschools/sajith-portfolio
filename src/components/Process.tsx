"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Process() {
  return (
    <section id="process" className="py-20 md:py-32 border-b border-[#EBEBE6]">
      <div className="max-w-[700px] mb-16">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0F0F0F] mb-6 flex items-center before:content-[''] before:inline-block before:w-6 before:h-[1px] before:bg-[#0F0F0F] before:mr-3">
          Consultation Process
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#0F0F0F]">
          A structured, logical path from contact to resolution.
        </h2>
      </div>

      <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="hidden lg:block absolute top-8 left-0 w-full h-[1px] bg-[#DCDCD4] z-0" />
        {[
          { num: "01", title: "Initial Contact", desc: "Submit your brief matter details via our secure channels. We prioritize responsive triage." },
          { num: "02", title: "Consultation", desc: "A rigorous, evidence-centered review to analyze feasibility, timelines, and costs." },
          { num: "03", title: "Strategy", desc: "Drafting customized litigation or compliance frameworks tailored to target outcomes." },
          { num: "04", title: "Resolution", desc: "Executing case strategies through aggressive advocacy or skilled ADR systems." }
        ].map((step, idx) => (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            key={idx} 
            className="relative z-10 bg-[#FCFCFA]"
          >
            <div className="w-16 h-16 rounded-full border border-[#0F0F0F] bg-[#FCFCFA] flex items-center justify-center font-serif text-xl text-[#0F0F0F] mb-6">
              {step.num}
            </div>
            <h3 className="font-semibold text-base mb-2">{step.title}</h3>
            <p className="text-sm text-[#5C5C56] font-light leading-relaxed pr-4">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
