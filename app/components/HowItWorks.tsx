"use client";

import React from "react";
import {
  FileText,
  Ruler,
  Layout,
  Palette,
  Wrench,
  CheckCircle2,
  Calendar,
} from "lucide-react";

interface HowItWorksProps {
  onOpenCalendly: () => void;
}

const steps = [
  {
    step: "STEP 1",
    title: "Initial Consultation",
    desc: "Share your space size, budget, aesthetic preferences, and lifestyle needs.",
    icon: FileText,
  },
  {
    step: "STEP 2",
    title: "Site Survey & Measurement",
    desc: "Our technical team visits your property for precise architectural measurements.",
    icon: Ruler,
  },
  {
    step: "STEP 3",
    title: "3D Concept & Layout",
    desc: "Review immersive 3D renderings, floor plans, and spatial arrangements.",
    icon: Layout,
  },
  {
    step: "STEP 4",
    title: "Material Selection",
    desc: "Handpick premium wood finishes, stone slabs, fabrics, and lighting fixtures.",
    icon: Palette,
  },
  {
    step: "STEP 5",
    title: "Turnkey Execution",
    desc: "Expert construction management, custom woodwork fabrication, and installation.",
    icon: Wrench,
  },
  {
    step: "STEP 6",
    title: "Final Handover",
    desc: "Deep cleaning, styling inspection, and official handover of your dream space.",
    icon: CheckCircle2,
  },
];

export default function HowItWorks({ onOpenCalendly }: HowItWorksProps) {
  return (
    <section
      id="services"
      className="py-20 px-8 max-w-7xl mx-auto w-full text-center"
    >
      <div className="mb-14">
        <h2 className="text-3xl font-bold tracking-tight text-white mb-2">
          How It Works
        </h2>
        <p className="text-xs tracking-widest text-[#D4A373] uppercase">
          Ready to transform your space with professional interior services?
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-14">
        {steps.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <div
              key={index}
              className="relative p-8 rounded-2xl bg-[#1A1917] border border-white/10 hover:border-[#E07A5F]/50 transition-all duration-300 flex flex-col items-center group shadow-xl text-left md:text-center"
            >
              <div className="inline-block px-3 py-1 mb-6 rounded-full bg-[#E07A5F]/10 text-[#E07A5F] text-[10px] font-semibold uppercase tracking-widest">
                {item.step}
              </div>

              <div className="w-16 h-16 rounded-2xl bg-[#121110] border border-white/10 flex items-center justify-center text-[#D4A373] mb-6 group-hover:scale-110 group-hover:border-[#D4A373] transition-all">
                <IconComponent className="w-8 h-8" />
              </div>

              <h3 className="text-lg font-bold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-xs text-[#F4F1DE]/60 max-w-xs">{item.desc}</p>
            </div>
          );
        })}
      </div>

      {/* Book a Free Consultation Button matching your reference */}
      <div className="flex justify-center">
        <button
          onClick={onOpenCalendly}
          className="bg-[#E07A5F] hover:bg-[#c96348] text-white font-medium px-8 py-4 rounded-full text-xs tracking-wider uppercase transition-all duration-300 shadow-lg shadow-[#E07A5F]/25 flex items-center gap-2 group cursor-pointer"
        >
          <Calendar className="w-4 h-4 transition-transform group-hover:scale-110" />
          <span>Book a Free Consultation</span>
        </button>
      </div>
    </section>
  );
}
