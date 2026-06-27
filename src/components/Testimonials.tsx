"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Testimonials() {
  return (
    <section className="py-20 md:py-32 border-b border-[#EBEBE6]">
      <div className="max-w-[700px] mb-16">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0F0F0F] mb-6 flex items-center before:content-[''] before:inline-block before:w-6 before:h-[1px] before:bg-[#0F0F0F] before:mr-3">
          Client Endorsements
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#0F0F0F]">
          Professional consensus on court and counseling excellence.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { quote: "Sajith’s preparation is flawless. He understands complex corporate regulations better than anyone we have ever consulted.", author: "Rahul Menon", meta: "Director, Apex Holdings Group" },
          { quote: "We faced a property title crisis that looked terminal. Sajith resolved it in months using meticulous forensic archival evidence.", author: "Anjali Nair", meta: "Private Estate Administrator" },
          { quote: "Outstanding client focus. Our messages were answered instantly, and his strategy was explained with zero confusing legalese.", author: "Suresh Kumar", meta: "Business Proprietor" },
          { quote: "Highly professional legal representation before the High Court. Honest advice and zero hidden charges.", author: "Priya Thomas", meta: "Managing Director, PT Logistics" },
          { quote: "He handled our matrimonial dispute with utmost sensitivity and diligence. We achieved an amicable settlement quickly.", author: "Mohammed Asif", meta: "IT Professional" }
        ].map((item, idx) => (
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            key={idx} 
            className="p-8 border-l border-[#DCDCD4] flex flex-col justify-between"
          >
            <p className="font-serif text-lg md:text-xl italic text-[#0F0F0F] mb-8">&ldquo;{item.quote}&rdquo;</p>
            <div>
              <h4 className="text-[11px] font-semibold uppercase tracking-wider text-[#0F0F0F]">{item.author}</h4>
              <span className="text-xs text-[#5C5C56] font-light mt-0.5 block">{item.meta}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
