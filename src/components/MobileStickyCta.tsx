import React from "react";

export default function MobileStickyCta() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-[#DCDCD4] p-3 z-50 grid grid-cols-3 gap-2 shadow-md">
      <a href="tel:+919633334556" className="inline-flex items-center justify-center bg-[#0F0F0F] text-[#FCFCFA] py-3 text-xs uppercase tracking-wider font-semibold hover:bg-transparent hover:text-[#0F0F0F] border border-[#0F0F0F] transition-colors">
        Call
      </a>
      <a href="https://wa.me/919633334556" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-[#0F0F0F] text-[#FCFCFA] py-3 text-xs uppercase tracking-wider font-semibold hover:bg-transparent hover:text-[#0F0F0F] border border-[#0F0F0F] transition-colors">
        WhatsApp
      </a>
      <a href="mailto:counsel@sajithpartners.com" className="inline-flex items-center justify-center bg-[#0F0F0F] text-[#FCFCFA] py-3 text-xs uppercase tracking-wider font-semibold hover:bg-transparent hover:text-[#0F0F0F] border border-[#0F0F0F] transition-colors">
        Email
      </a>
    </div>
  );
}
