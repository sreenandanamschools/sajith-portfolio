import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 md:py-32 grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-24 border-b border-[#EBEBE6]"
    >
      <div>
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0F0F0F] mb-6 flex items-center before:content-[''] before:inline-block before:w-6 before:h-[1px] before:bg-[#0F0F0F] before:mr-3">
          About the Advocate
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-tight text-[#0F0F0F] mb-8">
          Ethical legal representation built on preparation and
          client-first principles.
        </h2>
        <p className="text-[#5C5C56] font-light leading-relaxed mb-6">
          I am a leading advocate with over 18 years of experience in
          litigation, client counseling, and legal consulting. Recognized as a top lawyer in Trivandrum, my practice covers
          drafting, case management, and court appearances across
          civil, criminal, consumer, and property matters.
        </p>
        <div className="border-l-2 border-[#0F0F0F] pl-6 py-1 italic text-[#5C5C56]">
          &ldquo;I treat every case as a challenge that deserves thorough preparation
          and honest advice. My focus is on achieving the best possible outcome
          for each client.&rdquo;
        </div>

        <div className="mt-10 mb-4 pt-4 border-t border-[#EBEBE6]">
          <span className="text-[10px] uppercase tracking-[0.15em] text-[#5C5C56] font-semibold">
            Leadership & Community Involvement
          </span>
        </div>
        <div className="flex flex-col gap-4">
          {[
            "Organized community health camps and legal awareness programs in Thiruvananthapuram.",
            "Served as a resource person for legal literacy workshops in local colleges.",
            "Active in bar association activities and continuing legal education.",
          ].map((text, idx) => (
            <div key={`lead-${idx}`} className="flex gap-3 items-start">
              <span className="w-1.5 h-1.5 bg-[#0F0F0F] rounded-full shrink-0 mt-1.5" />
              <p className="text-sm text-[#5C5C56] font-light leading-relaxed">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xs uppercase tracking-[0.15em] text-[#0F0F0F] font-semibold mb-6">
          Journey & Education
        </h3>
        <div className="flex flex-col">
          <div className="mb-3">
            <span className="text-[10px] uppercase tracking-[0.15em] text-[#5C5C56] font-semibold">
              Education
            </span>
          </div>
          {[
            {
              year: "2006",
              role: "LL.B.",
              desc: "Government Law College, Kozhikode — Calicut University.",
            },
            {
              year: "2001",
              role: "M.A. Economics",
              desc: "Mahatma Gandhi College, Thiruvananthapuram — Kerala University.",
            },
            {
              year: "1999",
              role: "B.A. Economics",
              desc: "VTMNSS, Dhanuvachapram — Kerala University.",
            },
          ].map((item, idx) => (
            <div
              key={`edu-${idx}`}
              className="grid grid-cols-1 sm:grid-cols-[100px_1fr] gap-2 sm:gap-6 py-6 border-b border-[#EBEBE6]"
            >
              <span className="font-serif text-xl text-[#0F0F0F] font-semibold">
                {item.year}
              </span>
              <div>
                <h4 className="font-semibold text-sm mb-1">{item.role}</h4>
                <p className="text-sm text-[#5C5C56] font-light">{item.desc}</p>
              </div>
            </div>
          ))}
          <div className="mt-4 mb-3">
            <span className="text-[10px] uppercase tracking-[0.15em] text-[#5C5C56] font-semibold">
              Professional Career
            </span>
          </div>
          {[
            {
              year: "2021 - Pres.",
              role: "Independent Practice",
              desc: "Established my own office in Neyyattinkara. Handle civil, consumer, property, and family matters independently while continuing to practice under senior counsel.",
            },
            {
              year: "2006 - 2021",
              role: "Associate Advocate",
              desc: "Trained and practiced under senior advocates. Gained extensive experience in litigation, legal drafting, and court procedures across diverse matters.",
            },
          ].map((item, idx) => (
            <div
              key={`career-${idx}`}
              className="grid grid-cols-1 sm:grid-cols-[100px_1fr] gap-2 sm:gap-6 py-6 border-b border-[#EBEBE6] last:border-b-0"
            >
              <span className="font-serif text-xl text-[#0F0F0F] font-semibold">
                {item.year}
              </span>
              <div>
                <h4 className="font-semibold text-sm mb-1">{item.role}</h4>
                <p className="text-sm text-[#5C5C56] font-light">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
