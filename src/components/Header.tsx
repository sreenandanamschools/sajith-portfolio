"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 w-full h-20 bg-[#FCFCFA]/90 border-b border-[#DCDCD4] z-50 backdrop-blur-md"
    >
      <div className="max-w-[1440px] mx-auto px-6 h-full flex justify-between items-center">
        <a href="#" className="flex items-center gap-3 group">
          {/* Indian Advocate Neckband Badge Logo */}
          <motion.div 
            whileHover={{ rotateY: 15, rotateX: -10, z: 20 }}
            className="perspective-1000 preserve-3d"
          >
            <svg className="w-8 h-8 text-[#0F0F0F] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 4h16l-3 4H7L4 4z" fill="currentColor" />
              <path d="M8.5 8h2.5v10H8.5V8z" fill="#FCFCFA" stroke="currentColor" strokeWidth="1.2" />
              <path d="M13 8h2.5v10H13V8z" fill="#FCFCFA" stroke="currentColor" strokeWidth="1.2" />
            </svg>
          </motion.div>
          <div className="flex flex-col">
            <span className="font-serif text-2xl font-medium tracking-tight leading-none group-hover:text-black transition-colors">Sajith</span>
            <span className="text-[9px] uppercase tracking-[0.15em] text-[#5C5C56] mt-0.5">Advocate & Legal Counsel</span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-10">
          {["about", "practice", "cases", "process", "faq"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="text-xs uppercase tracking-widest text-[#5C5C56] hover:text-[#0F0F0F] transition-colors relative py-2 group"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#0F0F0F] scale-x-0 origin-right transition-transform duration-300 group-hover:scale-x-100 group-hover:origin-left" />
            </a>
          ))}
        </nav>

        {/* Direct Call Nav CTA */}
        <motion.a 
          whileHover={{ scale: 1.02, y: -1 }}
          whileTap={{ scale: 0.98 }}
          href="tel:+919876543210" 
          className="hidden md:inline-block bg-[#0F0F0F] text-[#FCFCFA] border border-[#0F0F0F] px-6 py-2.5 text-[11px] uppercase tracking-wider font-medium hover:bg-transparent hover:text-[#0F0F0F] transition-all duration-300 shadow-sm"
        >
          Call Now
        </motion.a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 z-50 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
        >
          <span className={`w-6 h-[1px] bg-[#0F0F0F] transition-all duration-300 ${mobileMenuOpen ? "transform rotate-45 translate-y-[7px]" : ""}`} />
          <span className={`w-6 h-[1px] bg-[#0F0F0F] transition-all duration-300 ${mobileMenuOpen ? "transform -rotate-45 -translate-y-[0px]" : ""}`} />
        </button>
      </div>

      {/* Mobile Navigation Panel */}
      <div className={`fixed inset-0 bg-[#FCFCFA] z-40 flex flex-col justify-center items-center gap-8 transition-all duration-500 md:hidden ${mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        {["about", "practice", "cases", "process", "faq", "contact"].map((item) => (
          <a
            key={item}
            href={`#${item}`}
            onClick={() => setMobileMenuOpen(false)}
            className="font-serif text-2xl tracking-wide hover:text-[#0F0F0F] transition-colors"
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </a>
        ))}
      </div>
    </motion.header>
  );
}
