import React from "react";
import LocationMap from "./LocationMap";

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16">
      <div className="bg-white border border-[#DCDCD4] p-8 md:p-12 depth-shadow flex flex-col justify-center"
      >
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0F0F0F] mb-6 flex items-center before:content-[''] before:inline-block before:w-6 before:h-[1px] before:bg-[#0F0F0F] before:mr-3">
          Direct Channels
        </span>
        <h3 className="font-serif text-3xl text-[#0F0F0F] mb-6">Connect for Consultation</h3>
        <p className="text-sm text-[#5C5C56] font-light mb-10 leading-relaxed">
          I do not host web consultation form submissions. To ensure strict attorney-client privilege, please communicate directly through my mobile, WhatsApp, or e-mail channels.
        </p>
        
        <div className="flex flex-col gap-6">
          {/* Call Now */}
          <a href="tel:+919633334556" aria-label="Call Sajith at +91 96333 34556"
            className="flex items-center justify-between p-6 border border-[#DCDCD4] bg-[#FCFCFA] hover:border-[#0F0F0F] transition-colors"
          >
            <div className="flex items-center gap-4">
              <svg className="w-6 h-6 text-[#0F0F0F]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <div className="flex flex-col">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#5C5C56]">Call Directly</span>
                <span className="text-base font-medium text-[#0F0F0F]">+91 96333 34556</span>
              </div>
            </div>
            <span className="text-[10px] font-semibold uppercase tracking-wider text-[#0F0F0F]">Dial Now</span>
          </a>

          {/* WhatsApp */}
          <a href="https://wa.me/919633334556" aria-label="Send a WhatsApp message to Sajith"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-6 border border-[#DCDCD4] bg-[#FCFCFA] hover:border-[#0F0F0F] transition-colors"
          >
            <div className="flex items-center gap-4">
              <svg className="w-6 h-6 text-[#0F0F0F]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
              </svg>
              <div className="flex flex-col">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#5C5C56]">WhatsApp</span>
                <span className="text-base font-medium text-[#0F0F0F]">+91 96333 34556</span>
              </div>
            </div>
            <span className="text-[10px] font-semibold uppercase tracking-wider text-[#0F0F0F]">Message</span>
          </a>

          {/* Email */}
          <a href="mailto:advsajithm@gmail.com" aria-label="Send an email to Sajith"
            className="flex items-center justify-between p-6 border border-[#DCDCD4] bg-[#FCFCFA] hover:border-[#0F0F0F] transition-colors"
          >
            <div className="flex items-center gap-4">
              <svg className="w-6 h-6 text-[#0F0F0F]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              <div className="flex flex-col">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#5C5C56]">E-mail</span>
                <span className="text-base font-medium text-[#0F0F0F]">advsajithm@gmail.com</span>
              </div>
            </div>
            <span className="text-[10px] font-semibold uppercase tracking-wider text-[#0F0F0F]">Mail</span>
          </a>
        </div>
      </div>

      <div className="flex flex-col justify-between">
        <div>
          <div className="mb-10">
            <h4 className="text-[10px] font-semibold uppercase tracking-wider text-[#0F0F0F] mb-3">Address</h4>
            <p className="text-base text-[#0F0F0F] font-light leading-relaxed">Court Road, Vanchiyoor<br />Thiruvananthapuram, Kerala<br />695035</p>
          </div>

          <div className="mb-10">
            <h4 className="text-[10px] font-semibold uppercase tracking-wider text-[#0F0F0F] mb-3">Consultation Hours</h4>
            <p className="text-base text-[#0F0F0F] font-light leading-relaxed">Monday — Friday: 09:00 — 18:00<br />Saturday: By prior appointment only</p>
          </div>

          <div className="mb-10">
            <h4 className="text-[10px] font-semibold uppercase tracking-wider text-[#0F0F0F] mb-3">Contact Details</h4>
            <p className="text-base text-[#0F0F0F] font-light leading-relaxed">Mobile: <a href="tel:+919633334556" className="hover:underline">+91 96333 34556</a></p>
            <p className="text-base text-[#0F0F0F] font-light leading-relaxed mt-1">Email: <a href="mailto:advsajithm@gmail.com" className="hover:underline">advsajithm@gmail.com</a></p>
          </div>
        </div>

        <div>
          <h4 className="text-[10px] font-semibold uppercase tracking-wider text-[#0F0F0F] mb-3">Location Details</h4>
          <LocationMap 
            lat={8.4984} 
            lng={76.9411} 
            placeName="Court Road, Vanchiyoor, Thiruvananthapuram, Kerala 695035" 
          />
        </div>
      </div>
    </section>
  );
}
