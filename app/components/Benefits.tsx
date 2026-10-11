'use client';

import React from 'react';
import {
  CheckCircle2,
  Clock,
  ShieldCheck,
  Receipt,
  Users,
  Sparkles,
  Layers,
  Calendar,
  Home,
  Building2,
  Gift,
} from 'lucide-react';

interface BenefitsProps {
  onOpenCalendly: () => void;
}

const servicePricing = [
  {
    title: 'Residential Interior',
    icon: Home,
    pricing: 'Customized Pricing',
    subtext: 'Tailored based on space size, layout & material scope',
    features: ['3D Concept Renderings', 'Custom Millwork & Lighting', 'Turnkey Execution'],
  },
  {
    title: 'Commercial Interior',
    icon: Building2,
    pricing: 'Bespoke Valuation',
    subtext: 'Custom pricing structured around function & corporate branding',
    features: ['Acoustic Space Planning', 'Ergonomic Workstations', 'On-Time Launch Assurance'],
  },
  {
    title: 'Initial Consultation',
    icon: Gift,
    pricing: '100% FREE',
    subtext: 'No commitment required — explore possibilities with lead architects',
    features: ['Site Layout Assessment', 'Estimated Budget Guidance', 'Material Sample Review'],
  },
];

const coreGuarantees = [
  {
    icon: Clock,
    title: 'Guaranteed On-Time Delivery',
    desc: 'Strict milestone tracking with defined penalty-backed delivery deadlines.',
  },
  {
    icon: ShieldCheck,
    title: '2-Year Free After-Sales Warranty',
    desc: 'Comprehensive post-handover warranty covering joinery, fixtures & structural finishes.',
  },
  {
    icon: Receipt,
    title: 'Transparent Itemized Pricing',
    desc: 'Zero hidden fees. Complete itemized material bill of quantities (BOQ) upfront.',
  },
  {
    icon: Users,
    title: 'Senior Interior Architects',
    desc: 'Dedicated lead architects and experienced project engineers on-site full-time.',
  },
  {
    icon: Sparkles,
    title: 'Premium Handpicked Materials',
    desc: 'Direct sourcing of authentic hardwood veneer, acoustic slates, and luxury stone.',
  },
  {
    icon: Layers,
    title: 'End-to-End Project Supervision',
    desc: 'Complete hassle-free management from procurement to deep cleaning and handover.',
  },
];

export default function Benefits({ onOpenCalendly }: BenefitsProps) {
  return (
    <section className="py-20 px-8 max-w-7xl mx-auto w-full text-center">
      {/* Section Title */}
      <div className="mb-14">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-2">
          Benefits of Choosing Innards
        </h2>
        <p className="text-xs tracking-widest text-[#D4A373] uppercase">
          Why discerning homeowners and corporations trust us with their architectural vision
        </p>
      </div>

      {/* Top 3 Service Tiers */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {servicePricing.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="p-8 rounded-2xl bg-[#1A1917] border border-white/10 hover:border-[#D4A373]/50 transition-all duration-300 flex flex-col justify-between shadow-xl text-left relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4A373]/5 blur-3xl group-hover:bg-[#E07A5F]/10 transition-colors pointer-events-none" />

              <div>
                <div className="w-12 h-12 rounded-xl bg-[#121110] border border-white/10 flex items-center justify-center text-[#D4A373] mb-6">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                <p className="text-2xl font-extrabold text-[#E07A5F] my-2">{item.pricing}</p>
                <p className="text-xs text-[#F4F1DE]/60 mb-6 leading-relaxed">{item.subtext}</p>

                <div className="space-y-2.5 pt-4 border-t border-white/5">
                  {item.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs text-[#F4F1DE]/80">
                      <CheckCircle2 className="w-4 h-4 text-[#E07A5F] flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Core Benefits Guarantee Bar */}
      <div className="p-8 rounded-3xl bg-[#1A1917] border border-white/10 shadow-2xl mb-16">
        <h3 className="text-sm font-semibold text-[#D4A373] uppercase tracking-widest mb-8 text-center">
          The Innards Quality Guarantee
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {coreGuarantees.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div key={idx} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#121110] border border-white/10 flex items-center justify-center text-[#E07A5F] flex-shrink-0 mt-0.5">
                  <IconComponent className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">{item.title}</h4>
                  <p className="text-xs text-[#F4F1DE]/60 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Call To Action Prompt */}
      <div className="space-y-6">
        <p className="text-base sm:text-lg text-white font-medium">
          Ready to transform your space with professional interior services?
        </p>
        <div className="flex justify-center">
          <button
            onClick={onOpenCalendly}
            className="bg-[#E07A5F] hover:bg-[#c96348] text-white font-medium px-9 py-4 rounded-full text-xs tracking-wider uppercase transition-all duration-300 shadow-xl shadow-[#E07A5F]/25 flex items-center gap-2.5 group cursor-pointer"
          >
            <Calendar className="w-4 h-4 transition-transform group-hover:scale-110" />
            <span>Book a Free Consultation</span>
          </button>
        </div>
      </div>
    </section>
  );
}