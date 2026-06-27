"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";

// Reusable 3D Tilt Wrapper for Cards
function TiltCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // Custom springs for organic physical feel
  const rotateX = useSpring(useTransform(y, [-150, 150], [8, -8]), { damping: 30, stiffness: 150 });
  const rotateY = useSpring(useTransform(x, [-150, 150], [-8, 8]), { damping: 30, stiffness: 150 });
  
  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left - width / 2;
    const mouseY = event.clientY - rect.top - height / 2;
    x.set(mouseX);
    y.set(mouseY);
  };
  
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };
  
  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={`perspective-1000 ${className}`}
    >
      {children}
    </motion.div>
  );
}

// Subtle Parallax Scroll Wrapper
function ParallaxSection({ children, speed = 0.1, className = "" }: { children: React.ReactNode; speed?: number; className?: string }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const yRange = useTransform(scrollYProgress, [0, 1], [100 * speed, -100 * speed]);
  const ySpring = useSpring(yRange, { damping: 40, stiffness: 120 });
  
  return (
    <motion.div ref={ref} style={{ y: ySpring }} className={className}>
      {children}
    </motion.div>
  );
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [formState, setFormState] = useState({ name: "", phone: "", email: "", matter: "", message: "" });
  const [formFeedback, setFormFeedback] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setFormFeedback(true);
      setFormState({ name: "", phone: "", email: "", matter: "", message: "" });
      setTimeout(() => setFormFeedback(false), 5000);
    }, 1200);
  };

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#FCFCFA] text-[#0F0F0F] selection:bg-[#0F0F0F] selection:text-white overflow-x-hidden">
      
      {/* Background Subtle 3D Grid Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.02] z-0">
        <div className="w-full h-full" style={{ 
          backgroundImage: "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)", 
          backgroundSize: "80px 80px" 
        }} />
      </div>

      {/* Header / Navigation */}
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

          {/* Floating nav CTA */}
          <motion.a 
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.98 }}
            href="#contact" 
            className="hidden md:inline-block bg-[#0F0F0F] text-[#FCFCFA] border border-[#0F0F0F] px-6 py-2.5 text-[11px] uppercase tracking-wider font-medium hover:bg-transparent hover:text-[#0F0F0F] transition-all duration-300 shadow-sm"
          >
            Book Consultation
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

      {/* Main Content Container */}
      <main className="max-w-[1440px] mx-auto px-6 pt-36 relative z-10">

        {/* Hero Section */}
        <section className="py-16 md:py-24 grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-20 items-center border-b border-[#EBEBE6]">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0F0F0F] mb-6 flex items-center before:content-[''] before:inline-block before:w-6 before:h-[1px] before:bg-[#0F0F0F] before:mr-3">
              Advocacy & Counsel
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl tracking-tight leading-[1.05] text-[#0F0F0F] mb-8">
              Trusted Legal Guidance.<br />Practical Solutions.
            </h1>
            <p className="text-lg text-[#5C5C56] font-light max-w-[580px] leading-relaxed mb-10">
              Providing refined, results-driven legal representation before Supreme Court, High Courts, and District tribunals. We protect your interests with transparency and empirical jurisprudence.
            </p>
            <div className="flex flex-wrap gap-4 mb-12">
              <motion.a 
                whileHover={{ y: -2, scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                href="#contact" 
                className="inline-flex items-center justify-center bg-[#0F0F0F] text-[#FCFCFA] border border-[#0F0F0F] px-8 py-4 text-xs uppercase tracking-wider font-semibold hover:bg-transparent hover:text-[#0F0F0F] transition-all duration-300 depth-shadow"
              >
                Book Consultation
                <svg className="ml-2.5 transition-transform duration-300 group-hover:translate-x-1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.a>
              <motion.a 
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.99 }}
                href="tel:+919876543210" 
                className="inline-flex items-center justify-center bg-transparent text-[#0F0F0F] border border-[#DCDCD4] px-8 py-4 text-xs uppercase tracking-wider font-semibold hover:border-[#0F0F0F] hover:bg-[#0f0f0f]/5 transition-all duration-300"
              >
                Call Now
              </motion.a>
              <motion.a 
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.99 }}
                href="https://wa.me/919876543210" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center bg-transparent text-[#0F0F0F] border border-[#DCDCD4] px-8 py-4 text-xs uppercase tracking-wider font-semibold hover:border-[#0F0F0F] hover:bg-[#0f0f0f]/5 transition-all duration-300"
              >
                WhatsApp Consultation
              </motion.a>
            </div>
            <div className="flex gap-12 border-t border-[#EBEBE6] pt-8">
              {[
                { val: "15+", label: "Years of Practice" },
                { val: "1,200+", label: "Cases Represented" },
                { val: "2h", label: "Response Window" }
              ].map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="font-serif text-2xl text-[#0F0F0F] font-medium">{stat.val}</span>
                  <span className="text-[10px] uppercase tracking-wider text-[#5C5C56] mt-0.5">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
          
          <ParallaxSection speed={0.15} className="w-full aspect-[4/5]">
            <TiltCard className="w-full h-full">
              <div className="w-full h-full overflow-hidden border border-[#DCDCD4] relative group depth-shadow" style={{ transformStyle: "preserve-3d" }}>
                <Image
                  src="/assets/portrait.png"
                  alt="Sajith, Advocate & Legal Counsel"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover grayscale transition-transform duration-1000 group-hover:scale-103 depth-element-bg"
                />
              </div>
            </TiltCard>
          </ParallaxSection>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 md:py-32 grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-24 border-b border-[#EBEBE6]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0F0F0F] mb-6 flex items-center before:content-[''] before:inline-block before:w-6 before:h-[1px] before:bg-[#0F0F0F] before:mr-3">
              About the Advocate
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-tight text-[#0F0F0F] mb-8">
              Ethical legal representation built on empirical research and client-first principles.
            </h2>
            <p className="text-[#5C5C56] font-light leading-relaxed mb-8">
              Sajith is a distinguished advocate with over fifteen years of dedicated litigation and consulting practice. He regularly represents clients before the Supreme Court of India, the High Court of Delhi, and various District Courts and regulatory tribunals. His practice is defined by deep research, strategic clarity, and an ethical commitment to justice.
            </p>
            <div className="border-l-2 border-[#0F0F0F] pl-6 py-1 italic text-[#5C5C56]">
              &ldquo;My practice is built on a foundation of thorough empirical research and assertive courtroom representation. Every case is treated as an intellectual and strategic challenge.&rdquo;
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-xs uppercase tracking-[0.15em] text-[#0F0F0F] font-semibold mb-8">Professional Timeline</h3>
            <div className="flex flex-col">
              {[
                { year: "2018", role: "Founder & Managing Partner", desc: "Established Sajith & Partners chambers in New Delhi, specializing in corporate insolvency, property partition suits, and commercial litigation." },
                { year: "2012", role: "Senior Counsel — High Court of Delhi", desc: "Led litigation and trial defense teams in complex civil, labor, and constitutional writ matters, establishing vital judicial precedents." },
                { year: "2009", role: "Associate Advocate", desc: "Acquired comprehensive training in commercial drafting, banking recovery matters, and consumer dispute resolution." }
              ].map((item, idx) => (
                <div key={idx} className="grid grid-cols-[100px_1fr] gap-6 py-6 border-b border-[#EBEBE6] last:border-b-0">
                  <span className="font-serif text-xl text-[#0F0F0F] font-semibold">{item.year}</span>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">{item.role}</h4>
                    <p className="text-sm text-[#5C5C56] font-light">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Practice Areas Section (12 Areas exactly) */}
        <section id="practice" className="py-20 md:py-32 border-b border-[#EBEBE6]">
          <div className="max-w-[700px] mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0F0F0F] mb-6 flex items-center before:content-[''] before:inline-block before:w-6 before:h-[1px] before:bg-[#0F0F0F] before:mr-3">
              Areas of Practice
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#0F0F0F]">
              Specialized legal expertise across commercial and civil domains.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Civil Litigation",
                desc: "Writ petitions, civil appeals, injunctions, and suits for recovery under the Civil Procedure Code (CPC).",
                icon: (
                  <svg className="w-10 h-10 text-[#0F0F0F] mb-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22V2M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                  </svg>
                )
              },
              {
                title: "Criminal Law",
                desc: "Trial court defense, bail applications, and appellate advocacy under the BNS/IPC and BNSS/CrPC.",
                icon: (
                  <svg className="w-10 h-10 text-[#0F0F0F] mb-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                  </svg>
                )
              },
              {
                title: "Family & Divorce Matters",
                desc: "Mutual consent divorce, child custody, alimony, and partition suits under personal religious laws.",
                icon: (
                  <svg className="w-10 h-10 text-[#0F0F0F] mb-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                )
              },
              {
                title: "Property & Real Estate Law",
                desc: "Title verifications, land acquisition disputes, tenant eviction, and representation before RERA authorities.",
                icon: (
                  <svg className="w-10 h-10 text-[#0F0F0F] mb-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                    <polyline points="9 22 9 12 15 12 15 22"/>
                  </svg>
                )
              },
              {
                title: "Consumer Disputes",
                desc: "Filing and defending complaints before District, State, and National Consumer Disputes Redressal Commissions.",
                icon: (
                  <svg className="w-10 h-10 text-[#0F0F0F] mb-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                  </svg>
                )
              },
              {
                title: "Labour & Employment Law",
                desc: "Drafting employment agreements, advising on compliance, and representation before industrial courts and labor tribunals.",
                icon: (
                  <svg className="w-10 h-10 text-[#0F0F0F] mb-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                )
              },
              {
                title: "Corporate & Commercial Law",
                desc: "Entity incorporation, compliance audits under Companies Act 2013, contract drafting, and NCLT proceedings.",
                icon: (
                  <svg className="w-10 h-10 text-[#0F0F0F] mb-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                  </svg>
                )
              },
              {
                title: "Arbitration & Mediation",
                desc: "Representation in commercial arbitrations under the Arbitration Act and structured family or corporate mediation.",
                icon: (
                  <svg className="w-10 h-10 text-[#0F0F0F] mb-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M8 12h8M12 8v8"/>
                  </svg>
                )
              },
              {
                title: "Banking & Recovery Matters",
                desc: "Institution of suits under the DRT (Debt Recovery Tribunal), SARFAESI compliance, and Section 138 NI Act notices.",
                icon: (
                  <svg className="w-10 h-10 text-[#0F0F0F] mb-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="1" x2="12" y2="23"/>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                  </svg>
                )
              },
              {
                title: "Documentation & Legal Notices",
                desc: "Drafting and dispatch of formal legal notices, public declarations, and caveat petitions before courts.",
                icon: (
                  <svg className="w-10 h-10 text-[#0F0F0F] mb-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/>
                    <line x1="16" y1="17" x2="8" y2="17"/>
                    <polyline points="10 9 9 9 8 9"/>
                  </svg>
                )
              },
              {
                title: "Agreement Drafting",
                desc: "Bespoke legal drafting for lease agreements, joint venture deeds, partnership covenants, and sale deeds.",
                icon: (
                  <svg className="w-10 h-10 text-[#0F0F0F] mb-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                    <path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                  </svg>
                )
              },
              {
                title: "High Court & District Court",
                desc: "Strategic trial representations, filing of petitions, criminal appeals, and direct representation before the Bench.",
                icon: (
                  <svg className="w-10 h-10 text-[#0F0F0F] mb-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="8" rx="1"/>
                    <path d="M4 10v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V10"/>
                    <line x1="12" y1="14" x2="12" y2="18"/>
                  </svg>
                )
              }
            ].map((area, idx) => (
              <TiltCard key={idx} className="h-full">
                <div className="bg-white border border-[#DCDCD4] p-8 flex flex-col h-full hover:border-[#0F0F0F] hover:-translate-y-1 transition-all duration-300 relative before:content-[''] before:absolute before:top-0 before:left-0 before:w-1 before:h-full before:bg-[#0F0F0F] before:scale-y-0 before:origin-bottom hover:before:scale-y-100 before:transition-transform before:duration-300 depth-card">
                  <div className="depth-element-text">
                    {area.icon}
                    <h3 className="font-serif text-2xl text-[#0F0F0F] mb-4">{area.title}</h3>
                    <p className="text-sm text-[#5C5C56] font-light mb-8">{area.desc}</p>
                    <a href="#contact" className="mt-auto inline-flex items-center text-[10px] font-semibold uppercase tracking-wider text-[#0F0F0F] hover:text-[#0F0F0F] group">
                      Inquire
                      <svg className="ml-2 transition-transform duration-300 group-hover:translate-x-1" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.5 6H9.5M9.5 6L6.5 3M9.5 6L6.5 9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        </section>

        {/* Metrics Grid (Indian Metrics Exactly) */}
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

        {/* Case Highlights Section */}
        <section id="cases" className="py-20 md:py-32 border-b border-[#EBEBE6]">
          <div className="max-w-[700px] mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0F0F0F] mb-6 flex items-center before:content-[''] before:inline-block before:w-6 before:h-[1px] before:bg-[#0F0F0F] before:mr-3">
              Case Highlights
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#0F0F0F]">
              Demonstrable precedents. Anonymized strategies. Proven outcomes.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                category: "Corporate & NCLT Law",
                title: "Shareholder Dispute and Asset Restructuring",
                challenge: "Hostile deadlock between majority founders risking total operational freeze of a regional manufacturing enterprise under Companies Act, 2013.",
                strategy: "Instituted strategic proceedings before the NCLT combined with temporary injunctions to preserve business operations.",
                outcome: "Successful buy-out structured through NCLT mediation; business preserved with zero operational downtime."
              },
              {
                category: "Real Estate & Writ Jurisdiction",
                title: "Commercial Property Acquisition Title Clearance",
                challenge: "Multiple historical claims filed against a high-value industrial lot under acquisition, threatening project delays.",
                strategy: "Conducted deep forensic land records search and filed writ petitions before the High Court to clear title encumbrances.",
                outcome: "Full unencumbered ownership title granted under High Court directives; project commenced on schedule."
              }
            ].map((item, idx) => (
              <TiltCard key={idx}>
                <div className="bg-white border border-[#DCDCD4] p-10 flex flex-col justify-between h-full depth-card">
                  <div className="depth-element-text">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-[#0F0F0F] mb-6 block">{item.category}</span>
                    <h3 className="font-serif text-2xl md:text-3xl text-[#0F0F0F] mb-8">{item.title}</h3>
                  </div>
                  <div className="flex flex-col gap-6 text-sm depth-element-bg">
                    <div className="grid grid-cols-[100px_1fr] gap-4">
                      <span className="text-[10px] uppercase font-semibold text-[#0F0F0F] tracking-wider mt-1">Challenge</span>
                      <span className="text-[#5C5C56] font-light leading-relaxed">{item.challenge}</span>
                    </div>
                    <div className="grid grid-cols-[100px_1fr] gap-4">
                      <span className="text-[10px] uppercase font-semibold text-[#0F0F0F] tracking-wider mt-1">Strategy</span>
                      <span className="text-[#5C5C56] font-light leading-relaxed">{item.strategy}</span>
                    </div>
                    <div className="grid grid-cols-[100px_1fr] gap-4">
                      <span className="text-[10px] uppercase font-semibold text-[#0F0F0F] tracking-wider mt-1">Outcome</span>
                      <span className="text-[#0F0F0F] font-medium leading-relaxed">{item.outcome}</span>
                    </div>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        </section>

        {/* Testimonials (Indian Names Exactly) */}
        <section className="py-20 md:py-32 border-b border-[#EBEBE6]">
          <div className="max-w-[700px] mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0F0F0F] mb-6 flex items-center before:content-[''] before:inline-block before:w-6 before:h-[1px] before:bg-[#0F0F0F] before:mr-3">
              Client Endorsements
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#0F0F0F]">
              Professional consensus on court and counseling excellence.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { quote: "Sajith’s preparation is flawless. He understands complex corporate regulations better than anyone we have ever consulted.", author: "Rahul Menon", meta: "Director, Apex Holdings Group" },
              { quote: "We faced a property title crisis that looked terminal. Sajith resolved it in months using meticulous forensic archival evidence.", author: "Anjali Nair", meta: "Private Estate Administrator" },
              { quote: "Outstanding client focus. Our messages were answered instantly, and his strategy was explained with zero confusing legalese.", author: "Suresh Kumar", meta: "Business Proprietor" },
              { quote: "Highly professional legal representation before the High Court. Honest advice and zero hidden charges.", author: "Priya Thomas", meta: "Managing Director, PT Logistics" },
              { quote: "He handled our matrimonial dispute with utmost sensitivity and diligence. We achieved an amicable settlement quickly.", author: "Mohammed Asif", meta: "IT Professional" }
            ].map((item, idx) => (
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                key={idx} 
                className="p-8 border-l border-[#DCDCD4] flex flex-col justify-between"
              >
                <p className="font-serif text-lg md:text-xl italic text-[#0F0F0F] mb-8">&ldquo;{item.quote}&rdquo;</p>
                <div>
                  <h4 className="text-[11px] font-semibold uppercase tracking-wider text-[#0F0F0F]">{item.author}</h4>
                  <span className="text-xs text-[#5C5C56] font-light mt-0.5 block">{item.meta}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Consultation Process Section */}
        <section id="process" className="py-20 md:py-32 border-b border-[#EBEBE6]">
          <div className="max-w-[700px] mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0F0F0F] mb-6 flex items-center before:content-[''] before:inline-block before:w-6 before:h-[1px] before:bg-[#0F0F0F] before:mr-3">
              Consultation Process
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#0F0F0F]">
              A structured, logical path from contact to resolution.
            </h2>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="hidden lg:block absolute top-8 left-0 w-full h-[1px] bg-[#DCDCD4] z-0" />
            {[
              { num: "01", title: "Initial Contact", desc: "Submit your brief matter details via our secure form. We prioritize responsive triage." },
              { num: "02", title: "Consultation", desc: "A rigorous, evidence-centered review to analyze feasibility, timelines, and costs." },
              { num: "03", title: "Strategy", desc: "Drafting customized litigation or compliance frameworks tailored to target outcomes." },
              { num: "04", title: "Resolution", desc: "Executing case strategies through aggressive advocacy or skilled ADR systems." }
            ].map((step, idx) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                key={idx} 
                className="relative z-10 bg-[#FCFCFA]"
              >
                <div className="w-16 h-16 rounded-full border border-[#0F0F0F] bg-[#FCFCFA] flex items-center justify-center font-serif text-xl text-[#0F0F0F] mb-6">
                  {step.num}
                </div>
                <h3 className="font-semibold text-base mb-2">{step.title}</h3>
                <p className="text-sm text-[#5C5C56] font-light leading-relaxed pr-4">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20 md:py-32 border-b border-[#EBEBE6]">
          <div className="max-w-[700px] mx-auto text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0F0F0F] mb-6 flex items-center justify-center before:content-[''] before:inline-block before:w-6 before:h-[1px] before:bg-[#0F0F0F] before:mr-3">
              Common Inquiries
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#0F0F0F]">
              Frequently Asked Legal Questions
            </h2>
          </div>

          <div className="max-w-[800px] mx-auto">
            {[
              { q: "How long does it take to clear property title and obtain RERA clearances in India?", a: "Title search and clearance takes 4 to 6 weeks depending on the Sub-Registrar records and municipal offices. Obtaining RERA registration and local body approvals generally takes another 30 to 45 days, depending on complete documentation." },
              { q: "What documents are required for my initial consultation?", a: "Please share any current litigation papers, agreements, communications (emails/letters), and relevant corporate registrations. A brief chronological summary of events is highly recommended." },
              { q: "How does the office charge for litigation matters?", a: "Our fee structure is based on a fixed brief fee and appearance fee retainer, aligned with the Bar Council of India guidelines. The fee details for trial courts, NCLT, High Court, or Supreme Court representations are detailed during the initial consultation." }
            ].map((item, idx) => (
              <div key={idx} className={`border-b border-[#DCDCD4] accordion-item ${activeFaq === idx ? "active" : ""}`}>
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex justify-between items-center py-6 text-left font-serif text-lg md:text-xl text-[#0F0F0F] hover:text-[#0F0F0F] transition-colors focus:outline-none"
                >
                  {item.q}
                  <span className="relative w-[18px] h-[18px] shrink-0">
                    <span className="absolute top-[8px] left-0 w-[18px] h-[1px] bg-[#0F0F0F]" />
                    <span className={`absolute top-0 left-[8px] w-[1px] h-[18px] bg-[#0F0F0F] transition-transform duration-300 ${activeFaq === idx ? "rotate-90 scale-y-0" : ""}`} />
                  </span>
                </button>
                <div className="accordion-content">
                  <p className="pb-6 text-sm text-[#5C5C56] font-light leading-relaxed">{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section (Indian Contacts Exactly) */}
        <section id="contact" className="py-20 md:py-32 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white border border-[#DCDCD4] p-8 md:p-12 depth-shadow"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0F0F0F] mb-6 flex items-center before:content-[''] before:inline-block before:w-6 before:h-[1px] before:bg-[#0F0F0F] before:mr-3">
              Secure Inquiry
            </span>
            <h3 className="font-serif text-3xl text-[#0F0F0F] mb-10">Request a Legal Consultation</h3>
            
            <form onSubmit={handleFormSubmit} className="flex flex-col gap-8">
              <div className="flex flex-col">
                <label className="text-[10px] font-semibold uppercase tracking-wider text-[#0F0F0F] mb-2" htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  required
                  placeholder="e.g., Suresh Kumar"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full py-3 bg-transparent border-b border-[#DCDCD4] text-[#0F0F0F] font-light placeholder:text-[#5C5C56]/40 focus:border-[#0F0F0F] focus:outline-none transition-colors"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-[10px] font-semibold uppercase tracking-wider text-[#0F0F0F] mb-2" htmlFor="phone">Mobile Number</label>
                <input
                  type="tel"
                  id="phone"
                  required
                  placeholder="e.g., +91 98765 43210"
                  value={formState.phone}
                  onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                  className="w-full py-3 bg-transparent border-b border-[#DCDCD4] text-[#0F0F0F] font-light placeholder:text-[#5C5C56]/40 focus:border-[#0F0F0F] focus:outline-none transition-colors"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-[10px] font-semibold uppercase tracking-wider text-[#0F0F0F] mb-2" htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  required
                  placeholder="e.g., suresh@company.in"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full py-3 bg-transparent border-b border-[#DCDCD4] text-[#0F0F0F] font-light placeholder:text-[#5C5C56]/40 focus:border-[#0F0F0F] focus:outline-none transition-colors"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-[10px] font-semibold uppercase tracking-wider text-[#0F0F0F] mb-2" htmlFor="matter">Legal Matter Category</label>
                <select
                  id="matter"
                  required
                  value={formState.matter}
                  onChange={(e) => setFormState({ ...formState, matter: e.target.value })}
                  className="w-full py-3 bg-transparent border-b border-[#DCDCD4] text-[#0F0F0F] font-light focus:border-[#0F0F0F] focus:outline-none transition-colors appearance-none"
                  style={{
                    backgroundImage: `url("data:image/svg+xml;utf8,<svg fill='black' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/></svg>")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right center',
                  }}
                >
                  <option value="" disabled>Select practice area</option>
                  <option value="civil">Civil Litigation</option>
                  <option value="criminal">Criminal Law</option>
                  <option value="family">Family & Divorce Matters</option>
                  <option value="property">Property & Real Estate Law</option>
                  <option value="consumer">Consumer Disputes</option>
                  <option value="labour">Labour & Employment Law</option>
                  <option value="corporate">Corporate & Commercial Law</option>
                  <option value="arbitration">Arbitration & Mediation</option>
                  <option value="banking">Banking & Recovery Matters</option>
                  <option value="notices">Documentation & Legal Notices</option>
                  <option value="drafting">Agreement Drafting</option>
                  <option value="representation">High Court & District Court Representation</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label className="text-[10px] font-semibold uppercase tracking-wider text-[#0F0F0F] mb-2" htmlFor="message">Brief Overview of Matter</label>
                <textarea
                  id="message"
                  required
                  placeholder="Outline key dates and dispute elements briefly in Indian English..."
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full py-3 bg-transparent border-b border-[#DCDCD4] text-[#0F0F0F] font-light min-h-[100px] placeholder:text-[#5C5C56]/40 focus:border-[#0F0F0F] focus:outline-none transition-colors resize-y"
                />
              </div>

              <motion.button
                whileHover={{ y: -1, scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                type="submit"
                disabled={submitting}
                className="w-full bg-[#0F0F0F] text-[#FCFCFA] border border-[#0F0F0F] py-4 text-xs font-semibold uppercase tracking-wider hover:bg-transparent hover:text-[#0F0F0F] disabled:opacity-50 transition-all duration-300 depth-shadow"
              >
                {submitting ? "Submitting Request..." : "Book Consultation"}
              </motion.button>
            </form>

            {formFeedback && (
              <div className="mt-6 p-4 border border-[#0F0F0F] text-[#0F0F0F] text-xs tracking-wider text-center animate-fade-in">
                Inquiry received. A representative will contact you in under 2 hours.
              </div>
            )}
          </motion.div>

          <div className="flex flex-col justify-between">
            <div>
              <div className="mb-10">
                <h4 className="text-[10px] font-semibold uppercase tracking-wider text-[#0F0F0F] mb-3">Office Chambers</h4>
                <p className="text-base text-[#0F0F0F] font-light leading-relaxed">Level 4, The Centrium Towers<br />Barakhamba Road, Connaught Place<br />New Delhi, 110001</p>
              </div>

              <div className="mb-10">
                <h4 className="text-[10px] font-semibold uppercase tracking-wider text-[#0F0F0F] mb-3">Consultation Hours</h4>
                <p className="text-base text-[#0F0F0F] font-light leading-relaxed">Monday — Friday: 09:00 — 18:00<br />Saturday: By prior appointment only</p>
              </div>

              <div className="mb-10">
                <h4 className="text-[10px] font-semibold uppercase tracking-wider text-[#0F0F0F] mb-3">Contact Details</h4>
                <p className="text-base text-[#0F0F0F] font-light leading-relaxed">Mobile: <a href="tel:+919876543210" className="hover:underline">+91 98765 43210</a></p>
                <p className="text-base text-[#0F0F0F] font-light leading-relaxed mt-1">Chambers: <a href="tel:+911145567789" className="hover:underline">+91 11 4556 7789</a></p>
                <p className="text-base text-[#0F0F0F] font-light leading-relaxed mt-1">Email: <a href="mailto:counsel@sajithpartners.com" className="hover:underline">counsel@sajithpartners.com</a></p>
              </div>
            </div>

            <div>
              <h4 className="text-[10px] font-semibold uppercase tracking-wider text-[#0F0F0F] mb-3">Location Details</h4>
              <div className="w-full h-60 bg-[#F0F0EA] border border-[#DCDCD4] relative overflow-hidden mb-6 depth-shadow">
                <svg className="w-full h-full stroke-[#DCDCD4] stroke-[1] fill-[#FCFCFA]" viewBox="0 0 400 250">
                  <path d="M 0 50 L 400 50 M 0 100 L 400 100 M 0 150 L 400 150 M 0 200 L 400 200" />
                  <path d="M 50 0 L 50 250 M 100 0 L 100 250 M 150 0 L 150 250 M 200 0 L 200 250 M 250 0 L 250 250 M 300 0 L 300 250 M 350 0 L 350 250" />
                  <path d="M 0 0 L 400 250" style={{ stroke: "#DCDCD4", strokeWidth: 2 }} />
                  <path d="M 0 250 L 400 0" style={{ stroke: "#DCDCD4", strokeWidth: 2 }} />
                </svg>
                {/* Marker with pulse */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-[#0F0F0F] rounded-full">
                  <span className="absolute -top-1.5 -left-1.5 w-6 h-6 border border-[#0F0F0F] rounded-full animate-ping opacity-75" />
                </div>
              </div>
              <motion.a 
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.99 }}
                href="https://wa.me/919876543210" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full inline-flex items-center justify-center bg-transparent text-[#0F0F0F] border border-[#DCDCD4] py-4 text-xs font-semibold uppercase tracking-wider hover:border-[#0F0F0F] hover:bg-black/5 transition-all duration-300"
              >
                WhatsApp Consultation
              </motion.a>
            </div>
          </div>
        </section>

      </main>

      {/* Mobile Sticky CTA Button */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-[#DCDCD4] p-4 z-40">
        <a href="#contact" className="w-full inline-flex items-center justify-center bg-[#0F0F0F] text-[#FCFCFA] py-3 text-xs uppercase tracking-wider font-semibold hover:bg-transparent hover:text-[#0F0F0F] border border-[#0F0F0F] transition-colors">
          Book Consultation
        </a>
      </div>

      {/* Footer */}
      <footer className="bg-[#0F0F0F] text-[#FCFCFA] mt-24 px-6 py-16 md:py-24 relative z-10">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-16">
            <div>
              <h2 className="font-serif text-3xl font-medium tracking-tight mb-4">Sajith</h2>
              <p className="text-sm text-[#FCFCFA]/60 font-light leading-relaxed max-w-[320px]">
                Structured legal counsel, meticulous empirical research, and aggressive courtroom defense.
              </p>
            </div>
            <div>
              <h4 className="text-[10px] font-semibold uppercase tracking-wider text-[#FCFCFA]/40 mb-6">Chambers</h4>
              <ul className="flex flex-col gap-3 text-xs font-light text-[#FCFCFA]/80">
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#practice" className="hover:text-white transition-colors">Practice Areas</a></li>
                <li><a href="#cases" className="hover:text-white transition-colors">Case Highlights</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] font-semibold uppercase tracking-wider text-[#FCFCFA]/40 mb-6">Resources</h4>
              <ul className="flex flex-col gap-3 text-xs font-light text-[#FCFCFA]/80">
                <li><a href="#process" className="hover:text-white transition-colors">Our Process</a></li>
                <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-[#FCFCFA]/10 pt-10 text-xs text-[#FCFCFA]/50 leading-relaxed flex flex-col md:flex-row justify-between gap-6">
            <div className="max-w-[700px]">
              <strong>Disclaimer:</strong> According to the rules of the Bar Council of India, advocates are not permitted to advertise or solicit work. This website is designed solely as a resource for information purposes. The content herein does not constitute legal advice or build an attorney-client association.
            </div>
            <div className="shrink-0">
              &copy; {new Date().getFullYear()} Sajith & Partners. All rights reserved.
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
