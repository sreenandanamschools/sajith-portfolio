import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import PracticeAreas from "@/components/PracticeAreas";
import Metrics from "@/components/Metrics";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import DisclaimerModal from "@/components/DisclaimerModal";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FCFCFA] text-[#0F0F0F] selection:bg-[#0F0F0F] selection:text-white overflow-x-hidden">
      <DisclaimerModal />
      <div className="fixed inset-0 pointer-events-none opacity-[0.04] z-0">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <Header />

      <main className="max-w-[1440px] mx-auto px-6 pt-28 md:pt-10 pb-12 md:pb-0 relative z-10">
        <Hero />
        <About />
        <PracticeAreas />
        <Metrics />
        <Process />
        <FAQ />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
