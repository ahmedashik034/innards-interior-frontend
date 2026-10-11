'use client';

import React from 'react';
import { Phone, ArrowUpRight, MapPin, Mail, Clock } from 'lucide-react';

interface ContactProps {
  onOpenCalendly: () => void;
}

export default function Contact({ onOpenCalendly }: ContactProps) {
  return (
    <section id="contact" className="py-20 px-8 max-w-7xl mx-auto w-full">
      <div className="bg-[#1A1917] border border-white/10 rounded-3xl p-8 lg:p-12 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side: Text & Action Buttons */}
        <div className="lg:col-span-6 space-y-8">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#D4A373] font-semibold">
              Connect With Us
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white mt-2 tracking-tight">
              GET IN TOUCH
            </h2>
            <p className="text-xs sm:text-sm text-[#F4F1DE]/70 mt-4 leading-relaxed max-w-md">
              Visit our studio or drop us a call to discuss your upcoming residential or commercial architectural interior project in Dhaka.
            </p>
          </div>

          {/* Contact CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <a
              href="tel:01540782827"
              className="bg-[#D4A373] hover:bg-[#c29263] text-[#121110] font-bold px-7 py-4 rounded-xl text-xs tracking-wider uppercase transition-all duration-300 shadow-lg shadow-[#D4A373]/20 flex items-center justify-center gap-3"
            >
              <Phone className="w-4 h-4" />
              <span>CALL US: 01540782827</span>
            </a>

            <button
              onClick={onOpenCalendly}
              className="bg-[#121110] border border-[#D4A373]/50 hover:border-[#E07A5F] text-[#F4F1DE] hover:text-[#E07A5F] font-semibold px-7 py-4 rounded-xl text-xs tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
            >
              <ArrowUpRight className="w-4 h-4 text-[#D4A373]" />
              <span>BOOK VISIT</span>
            </button>
          </div>

          {/* Quick Details Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-white/5 text-xs text-[#F4F1DE]/70">
            <div className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-[#E07A5F] flex-shrink-0" />
              <span>Sonargaon Janapath Rd, Uttara, Dhaka 1230</span>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-4 h-4 text-[#E07A5F] flex-shrink-0" />
              <span>Sat - Thu: 10:00 AM - 8:00 PM</span>
            </div>
          </div>
        </div>

        {/* Right Side: Embedded Google Map */}
        <div className="lg:col-span-6 w-full h-[360px] sm:h-[420px] rounded-2xl overflow-hidden border border-white/10 shadow-xl bg-[#121110] relative">
          <iframe
            title="Innards Studio Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.375685827367!2d90.38871037604473!3d23.876295784524225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c4132890db7f%3A0xb3ff76566d8e2029!2sSonargaon%20Janapath%2C%20Dhaka%201230!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd"
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(90%)' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

      </div>
    </section>
  );
}