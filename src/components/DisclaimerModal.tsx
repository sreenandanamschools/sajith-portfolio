"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function DisclaimerModal() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("sajith_disclaimer_accepted");
    if (accepted) return;

    const id = requestAnimationFrame(() => {
      setIsVisible(true);
      document.body.style.overflow = "hidden";
    });

    return () => cancelAnimationFrame(id);
  }, []);

  const handleAgree = () => {
    localStorage.setItem("sajith_disclaimer_accepted", "true");
    setIsVisible(false);
    document.body.style.overflow = "unset";
  };

  const handleDecline = () => {
    // Redirect to external page if user declines BCI rules
    window.location.href = "https://www.google.com";
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-[#0F0F0F]/65 backdrop-blur-md"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-[640px] bg-[#FCFCFA] border border-[#DCDCD4] p-8 md:p-12 depth-shadow flex flex-col max-h-[85vh] overflow-y-auto"
          >
            {/* Logo neckband top badge */}
            <div className="flex justify-center mb-6">
              <svg className="w-10 h-10 text-[#0F0F0F]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 3v3" />
                <path d="M9 6h6" />
                <path d="M12 9v3" />
                <path d="M7 12h10" />
                <path d="M5 15c0 1.5 1.5 3 3.5 3h7c2 0 3.5-1.5 3.5-3" />
                <path d="M8 18v1a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-1" />
                <path d="M2 21h20" />
                <path d="M12 21v-3" />
              </svg>
            </div>

            <h3 className="font-serif text-2xl md:text-3xl text-center text-[#0F0F0F] mb-6 tracking-tight">
              Disclaimer & Acknowledgment
            </h3>

            <div className="text-xs text-[#5C5C56] font-light leading-relaxed flex flex-col gap-4 mb-8 overflow-y-auto pr-2 border-y border-[#EBEBE6] py-6 max-h-[40vh]">
              <p className="font-semibold text-[#0F0F0F]">
                Under the rules of the Bar Council of India, advocates are prohibited from advertising or soliciting work in any form or manner.
              </p>
              <p>
                By accessing this website, you acknowledge that you are seeking information about the advocate of your own accord. There has been no advertisement, personal communication, solicitation, invitation, or inducement by the advocate or this website.
              </p>
              <p>
                The information provided on this website is for general informational purposes only and should not be construed as legal advice. Accessing or using this website, including contacting the advocate through it, does not by itself create an advocate–client relationship. Such a relationship is established only through a formal engagement in accordance with applicable law.
              </p>
              <p>
                The contents of this website are the intellectual property of the advocate and may not be reproduced without permission.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <motion.button
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.99 }}
                onClick={handleAgree}
                className="w-full bg-[#0F0F0F] text-[#FCFCFA] border border-[#0F0F0F] py-3.5 text-xs font-semibold uppercase tracking-wider hover:bg-transparent hover:text-[#0F0F0F] transition-all duration-300 depth-shadow"
              >
                I Agree
              </motion.button>
              <motion.button
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.99 }}
                onClick={handleDecline}
                className="w-full bg-transparent text-[#0F0F0F] border border-[#DCDCD4] py-3.5 text-xs font-semibold uppercase tracking-wider hover:border-[#0F0F0F] hover:bg-black/5 transition-all duration-300"
              >
                Decline
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
