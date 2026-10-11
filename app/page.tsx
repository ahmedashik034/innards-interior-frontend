"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { PopupModal } from "react-calendly";
import { ArrowUpRight, Sparkles, Calendar, Compass } from "lucide-react";
import Portfolio from "./components/portfolio";
import Testimonials from "./components/testimonials";
import HowItWorks from "./components/HowItWorks";
import CategoryShowcases from "./components/CategoryShowcases";
import ClientReviews from "./components/ClientReviews";
import Benefits from "./components/Benefits";
import Contact from "./components/Contact";
import Team from "./components/Team";
import Footer from "./components/Footer";
import Services from "./components/Services";
import ThemeToggle from "./components/ThemeToggle"; // Import Theme Toggle

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-[#121110] text-[#121110] dark:text-[#F4F1DE] font-sans relative overflow-hidden flex flex-col justify-between selection:bg-[#E07A5F] selection:text-white transition-colors duration-300">
      {/* Background Lighting Accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#E07A5F]/10 blur-[140px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#D4A373]/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      {/* Header */}
      <header className="max-w-7xl mx-auto w-full px-8 py-8 flex items-center justify-between z-10">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-11 h-11 bg-gray-100 dark:bg-[#1A1917] border border-gray-300 dark:border-[#D4A373]/30 rounded-xl flex items-center justify-center text-[#D4A373] group-hover:border-[#E07A5F] transition-colors">
            <Compass className="w-6 h-6 transition-transform group-hover:rotate-45 duration-300" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-xl tracking-tight text-[#121110] dark:text-white group-hover:text-[#D4A373] transition-colors">
              INNARDS
            </span>
            <span className="text-[10px] tracking-[0.25em] text-[#D4A373] font-medium uppercase">
              Interior Studio
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-10 font-medium text-sm text-gray-600 dark:text-[#F4F1DE]/70">
          <Link href="#about" className="hover:text-[#D4A373] transition-colors">
            Studio
          </Link>
          <Link href="#portfolio" className="hover:text-[#D4A373] transition-colors">
            Selected Works
          </Link>
          <Link href="#services" className="hover:text-[#D4A373] transition-colors">
            Services
          </Link>
          <Link href="#contact" className="hover:text-[#D4A373] transition-colors">
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          {/* Theme Toggle Button in Header
          <ThemeToggle /> */}

          <button
            onClick={() => setIsOpen(true)}
            className="bg-[#1A1917] border border-[#D4A373]/40 hover:border-[#E07A5F] text-[#F4F1DE] hover:text-[#E07A5F] px-6 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 flex items-center gap-2 cursor-pointer"
          >
            <span>Schedule Visit</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto w-full px-8 py-12 md:py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center my-auto">
        <div className="lg:col-span-7 flex flex-col items-start space-y-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gray-100 dark:bg-[#1A1917] border border-gray-200 dark:border-[#D4A373]/20 text-[#D4A373] text-xs font-medium">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Architectural & Spatial Design</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] text-[#121110] dark:text-white">
            Designing spaces <br />
            that resonate with <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4A373] to-[#E07A5F]">
              human emotion.
            </span>
          </h1>

          <p className="text-sm sm:text-base text-gray-600 dark:text-[#F4F1DE]/70 max-w-xl leading-relaxed font-normal">
            Innards Interior Studio crafts bespoke residential and commercial
            environments across Bangladesh, blending timeless aesthetics with
            structural precision.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-2">
            <button
              onClick={() => setIsOpen(true)}
              className="bg-[#E07A5F] hover:bg-[#c96348] text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg shadow-[#E07A5F]/20 flex items-center justify-center gap-3 text-sm cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Free Consultation</span>
            </button>

            <a
              href="#portfolio"
              className="bg-gray-100 dark:bg-[#1A1917] border border-gray-300 dark:border-white/10 hover:border-[#D4A373]/50 text-[#121110] dark:text-[#F4F1DE] font-medium px-8 py-4 rounded-xl transition duration-300 text-sm text-center"
            >
              Explore Portfolio
            </a>
          </div>
        </div>

        {/* Featured Project Spotlight Card */}
        <div className="lg:col-span-5">
          <div className="relative p-8 rounded-2xl bg-white dark:bg-[#1A1917]/80 border border-gray-200 dark:border-white/10 backdrop-blur-sm space-y-6 shadow-2xl">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-xs uppercase tracking-widest text-[#D4A373] font-semibold">
                  Featured Concept
                </p>
                <h3 className="text-xl font-bold text-[#121110] dark:text-white mt-1">
                  Uttara Luxury Residence
                </h3>
              </div>
              <span className="text-xs px-2.5 py-1 rounded bg-[#E07A5F]/20 text-[#E07A5F] font-medium">
                Completed
              </span>
            </div>

            <p className="text-xs text-gray-600 dark:text-[#F4F1DE]/60 leading-relaxed">
              A minimalist, light-filled penthouse designed with custom oak
              cabinetry, warm lighting schemes, and organic textures.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100 dark:border-white/5 text-center">
              <div className="p-3 rounded-lg bg-gray-50 dark:bg-[#121110]">
                <p className="text-lg font-bold text-[#121110] dark:text-white">4,200 sqft</p>
                <p className="text-[10px] text-gray-500 dark:text-[#F4F1DE]/50 uppercase tracking-wider">
                  Space Area
                </p>
              </div>
              <div className="p-3 rounded-lg bg-gray-50 dark:bg-[#121110]">
                <p className="text-lg font-bold text-[#D4A373]">Dhaka</p>
                <p className="text-[10px] text-gray-500 dark:text-[#F4F1DE]/50 uppercase tracking-wider">
                  Location
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Portfolio Grid Connected to NestJS */}
      <Portfolio />
      {/* Client Success Stories Section */}
      <Testimonials />

      <Services />

      {/* Category Showcase Section */}
      <CategoryShowcases />

      <HowItWorks onOpenCalendly={() => setIsOpen(true)} />

      <ClientReviews />

      <Benefits onOpenCalendly={() => setIsOpen(true)} />

      <Team />

      <Contact onOpenCalendly={() => setIsOpen(true)} />

      {/* Global Footer */}
      <Footer />

      {/* Calendly Interactive Popup Modal */}
      {isMounted && (
        <PopupModal
          url="https://calendly.com/homelyinteriorltd/30min"
          onModalClose={() => setIsOpen(false)}
          open={isOpen}
          rootElement={document.body}
        />
      )}
    </div>
  );
}