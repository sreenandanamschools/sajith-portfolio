"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import TiltCard from "./TiltCard";
import ParallaxSection from "./ParallaxSection";

export default function Hero() {
  return (
    <section className="py-16 md:py-24 grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-20 items-center border-b border-[#EBEBE6]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col order-2 lg:order-1"
      >
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0F0F0F] mb-6 flex items-center before:content-[''] before:inline-block before:w-6 before:h-[1px] before:bg-[#0F0F0F] before:mr-3">
          Advocacy & Counsel
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl tracking-tight leading-[1.05] text-[#0F0F0F] mb-8">
          Trusted Legal Guidance.
          <br />
          Practical Solutions.
        </h1>
        <p className="text-lg text-[#5C5C56] font-light max-w-[580px] leading-relaxed">
          Providing thorough legal representation before District Courts and
          tribunals. I protect your interests with transparency and a commitment
          to my clients.
        </p>
        <div className="flex flex-wrap gap-3 mt-8 mb-8">
          <span className="inline-block border border-[#DCDCD4] px-4 py-2 text-xs tracking-wider font-medium text-[#5C5C56]">
            Thiruvananthapuram, India
          </span>
          <span className="inline-block border border-[#DCDCD4] px-4 py-2 text-xs tracking-wider font-medium text-[#5C5C56]">
            Vanchiyoor Court | Trivandrum District Court
          </span>
        </div>
        <div className="flex flex-wrap gap-4 mb-12">
          <motion.a
            whileHover={{ y: -2, scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            href="tel:+919633334556"
            aria-label="Call Sajith at +91 96333 34556"
            className="inline-flex items-center justify-center bg-[#0F0F0F] text-[#FCFCFA] border border-[#0F0F0F] px-8 py-4 text-xs uppercase tracking-wider font-semibold hover:bg-transparent hover:text-[#0F0F0F] transition-all duration-300 depth-shadow"
          >
            Call Now
            <svg
              className="ml-2.5"
              aria-hidden="true"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </motion.a>
          <motion.a
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.99 }}
            href="https://wa.me/919633334556"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Send a WhatsApp message to Sajith"
            className="inline-flex items-center justify-center bg-transparent text-[#0F0F0F] border border-[#DCDCD4] px-8 py-4 text-xs uppercase tracking-wider font-semibold hover:border-[#0F0F0F] hover:bg-[#0f0f0f]/5 transition-all duration-300"
          >
            WhatsApp Consultation
          </motion.a>
          <motion.a
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.99 }}
            href="mailto:advsajithm@gmail.com"
            aria-label="Send an email to Sajith"
            className="inline-flex items-center justify-center bg-transparent text-[#0F0F0F] border border-[#DCDCD4] px-8 py-4 text-xs uppercase tracking-wider font-semibold hover:border-[#0F0F0F] hover:bg-[#0f0f0f]/5 transition-all duration-300"
          >
            Send Email
          </motion.a>
        </div>
        <div className="flex gap-6 md:gap-12 border-t border-[#EBEBE6] pt-8">
          {[
            { val: "18+", label: "Years of Practice" },
            { val: "1,200+", label: "Cases Represented" },
            { val: "2h", label: "Avg. Response Time" },
          ].map((stat, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="font-serif text-2xl text-[#0F0F0F] font-medium">
                {stat.val}
              </span>
              <span className="text-[10px] uppercase tracking-wider text-[#5C5C56] mt-0.5">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      <ParallaxSection
        speed={0.15}
        className="w-full aspect-[4/5] order-1 lg:order-2"
      >
        <TiltCard className="w-full h-full">
          <div
            className="w-full h-full overflow-hidden border border-[#DCDCD4] relative group depth-shadow"
            style={{ transformStyle: "preserve-3d" }}
          >
            <Image
              src="/assets/portrait.webp"
              alt="Sajith, Advocate at Vanchiyoor Court, Thiruvananthapuram"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover grayscale transition-transform duration-1000 group-hover:scale-103 depth-element-bg"
            />
          </div>
        </TiltCard>
      </ParallaxSection>
    </section>
  );
}
