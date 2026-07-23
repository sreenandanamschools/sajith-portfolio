import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#0F0F0F] text-[#FCFCFA] mt-24 px-6 py-16 md:py-24 pb-28 md:pb-24 relative z-10">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 mb-16">
          <div className="sm:col-span-2 md:col-span-1">
            <h2 className="font-serif text-3xl font-medium tracking-tight mb-4">Sajith</h2>
            <p className="text-sm text-[#FCFCFA]/60 font-light leading-relaxed max-w-[320px]">
              Structured legal counsel, meticulous preparation, and resolute courtroom representation.
            </p>
          </div>
          <div>
            <h4 className="text-[10px] font-semibold uppercase tracking-wider text-[#FCFCFA]/40 mb-6">Navigate</h4>
            <ul className="flex flex-col gap-3 text-xs font-light text-[#FCFCFA]/80">
              <li><a href="/#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="/#practice" className="hover:text-white transition-colors">Practice Areas</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] font-semibold uppercase tracking-wider text-[#FCFCFA]/40 mb-6">Resources</h4>
            <ul className="flex flex-col gap-3 text-xs font-light text-[#FCFCFA]/80">
              <li><a href="/#process" className="hover:text-white transition-colors">Our Process</a></li>
              <li><a href="/#faq" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="/#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] font-semibold uppercase tracking-wider text-[#FCFCFA]/40 mb-6">Connect</h4>
            <ul className="flex flex-col gap-3 text-xs font-light text-[#FCFCFA]/80">
              <li><a href="https://in.linkedin.com/in/sajith-m-8bb029123" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a></li>
              <li><a href="https://www.instagram.com/sajithmadv/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#FCFCFA]/10 pt-10 text-xs text-[#FCFCFA]/50 leading-relaxed flex flex-col md:flex-row justify-between gap-6">
          <div className="max-w-[700px]">
            <strong>Disclaimer:</strong> According to the rules of the Bar Council of India, advocates are not permitted to advertise or solicit work. This website is designed solely as a resource for information purposes. The content herein does not constitute legal advice or build an attorney-client association.
          </div>
          <div className="shrink-0">
            &copy; {new Date().getFullYear()} Sajith. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
