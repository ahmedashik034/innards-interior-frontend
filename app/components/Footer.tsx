'use client';

import React from 'react';
import Link from 'next/link';
import { Compass, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#121110] text-[#F4F1DE] border-t border-white/10 pt-16 pb-8 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 pb-12">
        
        {/* Left Column: Brand & Socials */}
        <div className="lg:col-span-4 space-y-6">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 bg-[#1A1917] border border-[#D4A373]/30 rounded-xl flex items-center justify-center text-[#D4A373] group-hover:border-[#E07A5F] transition-colors">
              <Compass className="w-6 h-6 transition-transform group-hover:rotate-45 duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl tracking-tight text-white group-hover:text-[#D4A373] transition-colors">
                INNARDS
              </span>
              <span className="text-[10px] tracking-[0.25em] text-[#D4A373] font-medium uppercase">
                Interior Studio
              </span>
            </div>
          </Link>

          <p className="text-xs text-[#F4F1DE]/60 leading-relaxed max-w-sm">
            Innards Interior Studio is a leading architectural design studio in Bangladesh providing modern home, luxury villa, and commercial office interior solutions.
          </p>

          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-3">
              Follow us
            </h4>
            <div className="flex items-center gap-3">
              {/* YouTube SVG */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-[#1A1917] border border-white/10 hover:border-[#E07A5F] text-[#F4F1DE]/70 hover:text-[#E07A5F] flex items-center justify-center transition"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>

              {/* Facebook SVG */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-[#1A1917] border border-white/10 hover:border-[#E07A5F] text-[#F4F1DE]/70 hover:text-[#E07A5F] flex items-center justify-center transition"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              {/* Instagram SVG */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-[#1A1917] border border-white/10 hover:border-[#E07A5F] text-[#F4F1DE]/70 hover:text-[#E07A5F] flex items-center justify-center transition"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Right Columns: Quick Contact & Nav Links */}
        <div className="lg:col-span-8 space-y-10">
          
          {/* Quick Contact Bar */}
          <div>
            <h3 className="text-sm font-bold text-white mb-4 border-b border-white/10 pb-2">
              Quick Contact
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-[#F4F1DE]/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#E07A5F] flex-shrink-0 mt-0.5" />
                <span>Sonargaon Janapath Rd, Uttara, Dhaka 1230</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#E07A5F] flex-shrink-0" />
                <a href="tel:01540782827" className="hover:text-[#D4A373] transition">
                  (+880) 1540782827
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#E07A5F] flex-shrink-0" />
                <a href="mailto:connect@innardsstudio.com" className="hover:text-[#D4A373] transition">
                  connect@innardsstudio.com
                </a>
              </div>
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            
            {/* Residential Column */}
            <div>
              <h4 className="text-xs font-bold text-[#D4A373] uppercase tracking-wider mb-3">
                Residential Interior
              </h4>
              <ul className="space-y-2 text-xs text-[#F4F1DE]/60">
                <li><a href="#portfolio" className="hover:text-white transition">Mr. Nizam's Residence</a></li>
                <li><a href="#portfolio" className="hover:text-white transition">Mr. Shamim's Residence</a></li>
                <li><a href="#portfolio" className="hover:text-white transition">Mr. & Mrs. Kabir's Residence</a></li>
                <li><a href="#portfolio" className="hover:text-white transition">Gulshan Grand Duplex</a></li>
                <li><a href="#portfolio" className="hover:text-white transition">Uttara Minimalist Villa</a></li>
              </ul>
            </div>

            {/* Commercial Column */}
            <div>
              <h4 className="text-xs font-bold text-[#D4A373] uppercase tracking-wider mb-3">
                Commercial Interior
              </h4>
              <ul className="space-y-2 text-xs text-[#F4F1DE]/60">
                <li><a href="#portfolio" className="hover:text-white transition">Heaven Dine Restaurant</a></li>
                <li><a href="#portfolio" className="hover:text-white transition">The Banani Executive Suite</a></li>
                <li><a href="#portfolio" className="hover:text-white transition">The Obsidian Corporate Lounge</a></li>
                <li><a href="#portfolio" className="hover:text-white transition">The Pearl Aesthetic Clinic</a></li>
                <li><a href="#portfolio" className="hover:text-white transition">Tejgaon Creative Agency Hub</a></li>
              </ul>
            </div>

            {/* Quick Links Column */}
            <div>
              <h4 className="text-xs font-bold text-[#D4A373] uppercase tracking-wider mb-3">
                Quick Links
              </h4>
              <ul className="space-y-2 text-xs text-[#F4F1DE]/60">
                <li><a href="#portfolio" className="hover:text-white transition">Portfolio</a></li>
                <li><a href="#about" className="hover:text-white transition">About Us</a></li>
                <li><a href="#contact" className="hover:text-white transition">Contact Us</a></li>
                <li><a href="#services" className="hover:text-white transition">How It Works</a></li>
              </ul>
            </div>

          </div>
        </div>

      </div>

      {/* Copyright Bar */}
      <div className="max-w-7xl mx-auto border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#F4F1DE]/40 gap-2">
        <p>2026 © Innards Interior Studio Ltd. All rights reserved.</p>
        <p>Dhaka, Bangladesh</p>
      </div>
    </footer>
  );
}