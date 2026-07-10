"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.header 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 w-full h-20 bg-[#FCFCFA]/90 border-b border-[#DCDCD4] z-50 backdrop-blur-md"
      >
        <div className="max-w-[1440px] mx-auto px-6 h-full flex justify-between items-center">
          <a href="#" className="flex items-center gap-3 group">
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

          {/* Desktop Navigation */}
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

          {/* Desktop CTA Button */}
          <motion.a 
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.98 }}
            href="tel:+919633334556" 
            className="hidden md:inline-block bg-[#0F0F0F] text-[#FCFCFA] border border-[#0F0F0F] px-6 py-2.5 text-[11px] uppercase tracking-wider font-medium hover:bg-transparent hover:text-[#0F0F0F] transition-all duration-300 shadow-sm"
          >
            Call Now
          </motion.a>

          {/* Mobile Hamburger Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-[#0F0F0F] focus:outline-none"
            aria-label="Toggle Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              )}
            </svg>
          </button>
        </div>
      </motion.header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden fixed top-20 left-0 w-full bg-[#FCFCFA] z-40 border-b border-[#DCDCD4] flex flex-col justify-between p-8 overflow-hidden shadow-xl"
            style={{ maxHeight: "calc(100vh - 80px)" }}
          >
            <nav className="flex flex-col gap-6">
              {[
                { label: "About", href: "#about" },
                { label: "Services & Practice", href: "#practice" },
                { label: "Cases & Results", href: "#cases" },
                { label: "Our Process", href: "#process" },
                { label: "FAQ", href: "#faq" },
                { label: "Contact", href: "#contact" },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="font-serif text-2xl tracking-tight text-[#0F0F0F] hover:text-[#5C5C56] transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="flex flex-col gap-4 mt-8 border-t border-[#EBEBE6] pt-6">
              <a 
                href="tel:+919633334556" 
                className="flex items-center justify-center bg-[#0F0F0F] text-[#FCFCFA] py-3.5 text-xs uppercase tracking-wider font-semibold hover:bg-transparent hover:text-[#0F0F0F] border border-[#0F0F0F] transition-colors"
              >
                Call Chambers
              </a>
              <div className="grid grid-cols-2 gap-3">
                <a 
                  href="https://wa.me/919633334556" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center justify-center bg-transparent text-[#0F0F0F] border border-[#DCDCD4] py-3 text-xs uppercase tracking-wider font-semibold hover:border-[#0F0F0F] transition-colors"
                >
                  WhatsApp
                </a>
                <a 
                  href="mailto:counsel@sajithpartners.com" 
                  className="flex items-center justify-center bg-transparent text-[#0F0F0F] border border-[#DCDCD4] py-3 text-xs uppercase tracking-wider font-semibold hover:border-[#0F0F0F] transition-colors"
                >
                  Email
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
