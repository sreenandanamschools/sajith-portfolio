import React from "react";

export default function Metrics() {
  return (
    <section className="py-16 md:py-24 grid grid-cols-2 lg:grid-cols-4 gap-8 bg-[#0F0F0F] text-[#FCFCFA] px-10 -mx-6 md:-mx-12 lg:-mx-24 my-12 border-none depth-shadow">
      {[
        { val: "15+", label: "Years of Practice" },
        { val: "1,200+", label: "Cases Represented" },
        { val: "950+", label: "Happy Clients" },
        { val: "2h", label: "Consultation Response Time" }
      ].map((stat, idx) => (
        <div key={idx} className="flex flex-col items-center text-center">
          <span className="font-serif text-5xl md:text-6xl font-light text-[#FCFCFA] mb-2">{stat.val}</span>
          <span className="text-[10px] uppercase tracking-[0.15em] text-[#FCFCFA]/70">{stat.label}</span>
        </div>
      ))}
    </section>
  );
}
