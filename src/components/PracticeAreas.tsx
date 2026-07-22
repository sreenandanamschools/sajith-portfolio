import React from "react";
import TiltCard from "./TiltCard";

export default function PracticeAreas() {
  return (
    <section id="practice" className="py-20 md:py-32 border-b border-[#EBEBE6]">
      <div className="max-w-[700px] mb-16">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0F0F0F] mb-6 flex items-center before:content-[''] before:inline-block before:w-6 before:h-[1px] before:bg-[#0F0F0F] before:mr-3">
          Areas of Practice
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#0F0F0F]">
          Civil, criminal, consumer, property, and corporate matters — among
          others.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            title: "Civil Litigation",
            desc: "Writ petitions, civil appeals, injunctions, and suits for recovery under the Civil Procedure Code (CPC).",
            icon: (
              <svg
                className="w-10 h-10 text-[#0F0F0F] mb-8"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 3v17M8 20h8" />
                <path d="M4 6h16" />
                <path d="M4 6l-3 7h6l-3-7z" />
                <path d="M20 6l-3 7h6l-3-7z" />
              </svg>
            ),
          },
          {
            title: "Criminal Law",
            desc: "Trial court defense, bail applications, and appellate advocacy under the BNS/IPC and BNSS/CrPC.",
            icon: (
              <svg
                className="w-10 h-10 text-[#0F0F0F] mb-8"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            ),
          },
          {
            title: "Family & Divorce Matters",
            desc: "Mutual consent divorce, child custody, alimony, and partition suits under personal religious laws.",
            icon: (
              <svg
                className="w-10 h-10 text-[#0F0F0F] mb-8"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            ),
          },
          {
            title: "Property & Real Estate Law",
            desc: "Title verifications, land acquisition disputes, tenant eviction, and representation before RERA authorities.",
            icon: (
              <svg
                className="w-10 h-10 text-[#0F0F0F] mb-8"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            ),
          },
          {
            title: "Consumer Disputes",
            desc: "Filing and defending complaints before District, State, and National Consumer Disputes Redressal Commissions.",
            icon: (
              <svg
                className="w-10 h-10 text-[#0F0F0F] mb-8"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            ),
          },
          {
            title: "Labour & Employment Law",
            desc: "Drafting employment agreements, advising on compliance, and representation before industrial courts and labor tribunals.",
            icon: (
              <svg
                className="w-10 h-10 text-[#0F0F0F] mb-8"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            ),
          },
          {
            title: "Corporate & Commercial Law",
            desc: "Entity incorporation, compliance audits under Companies Act 2013, contract drafting, and NCLT proceedings.",
            icon: (
              <svg
                className="w-10 h-10 text-[#0F0F0F] mb-8"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
              </svg>
            ),
          },
          {
            title: "Arbitration & Mediation",
            desc: "Representation in commercial arbitrations under the Arbitration Act and structured family or corporate mediation.",
            icon: (
              <svg
                className="w-10 h-10 text-[#0F0F0F] mb-8"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M8 12h8M12 8v8" />
              </svg>
            ),
          },
          {
            title: "Banking & Recovery Matters",
            desc: "Institution of suits under the DRT (Debt Recovery Tribunal), SARFAESI compliance, and Section 138 NI Act notices.",
            icon: (
              <svg
                className="w-10 h-10 text-[#0F0F0F] mb-8"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 4h12M6 9h12M6 4a6 6 0 0 1 0 12h3l7 6" />
              </svg>
            ),
          },
          {
            title: "Documentation & Legal Notices",
            desc: "Drafting and dispatch of formal legal notices, public declarations, and caveat petitions before courts.",
            icon: (
              <svg
                className="w-10 h-10 text-[#0F0F0F] mb-8"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
              </svg>
            ),
          },
          {
            title: "Agreement Drafting",
            desc: "Bespoke legal drafting for lease agreements, joint venture deeds, partnership covenants, and sale deeds.",
            icon: (
              <svg
                className="w-10 h-10 text-[#0F0F0F] mb-8"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                <path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
              </svg>
            ),
          },
          {
            title: "High Court & District Court",
            desc: "Strategic trial representations, filing of petitions, criminal appeals, and direct representation before the Bench.",
            icon: (
              <svg
                className="w-10 h-10 text-[#0F0F0F] mb-8"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="8" rx="1" />
                <path d="M4 10v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V10" />
                <line x1="12" y1="14" x2="12" y2="18" />
              </svg>
            ),
          },
        ].map((area, idx) => (
          <TiltCard key={idx} className="h-full">
            <div className="bg-white border border-[#DCDCD4] p-8 flex flex-col h-full hover:border-[#0F0F0F] hover:-translate-y-1 transition-all duration-300 relative before:content-[''] before:absolute before:top-0 before:left-0 before:w-1 before:h-full before:bg-[#0F0F0F] before:scale-y-0 before:origin-bottom hover:before:scale-y-100 before:transition-transform before:duration-300 depth-card">
              <div className="depth-element-text">
                {area.icon}
                <h3 className="font-serif text-2xl text-[#0F0F0F] mb-4">
                  {area.title}
                </h3>
                <p className="text-sm text-[#5C5C56] font-light mb-8">
                  {area.desc}
                </p>
              </div>
            </div>
          </TiltCard>
        ))}
      </div>

      {/* Core Competencies Section */}
      <div className="mt-24 pt-16 border-t border-[#EBEBE6] grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12">
        <div>
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#5C5C56] font-semibold block mb-4">
            Core Competencies
          </span>
          <h3 className="font-serif text-3xl text-[#0F0F0F] leading-tight">
            Areas of Focus
          </h3>
          <p className="text-sm text-[#5C5C56] font-light mt-4 leading-relaxed">
            My practice spans litigation, drafting, and advisory work. I appear
            regularly before the District Court, consumer forums, and other
            tribunals in Thiruvananthapuram.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div>
            <h4 className="text-xs uppercase tracking-[0.15em] text-[#0F0F0F] font-semibold mb-4">
              Legal Practice
            </h4>
            <ul className="flex flex-col gap-2.5">
              {[
                "Civil Litigation",
                "Consumer Law",
                "Property & Land Disputes",
                "Legal Drafting & Documentation",
                "Court Proceedings & Advocacy",
                "Client Counseling",
              ].map((item) => (
                <li
                  key={item}
                  className="text-sm text-[#5C5C56] font-light flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-[#0F0F0F] rounded-full shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-6">
            <div>
              <h4 className="text-xs uppercase tracking-[0.15em] text-[#0F0F0F] font-semibold mb-4">
                Languages
              </h4>
              <ul className="flex flex-col gap-2.5">
                {["Malayalam", "English", "Hindi"].map((item) => (
                  <li
                    key={item}
                    className="text-sm text-[#5C5C56] font-light flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-[#0F0F0F] rounded-full shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
