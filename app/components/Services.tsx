'use client';

import React, { useState } from 'react';
import {
  Home,
  Utensils,
  Briefcase,
  Building2,
  Hospital,
} from 'lucide-react';

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const servicesData: ServiceItem[] = [
  {
    id: 'residential',
    title: 'Residential Interior Design',
    description:
      'Premium residential interior design in Dhaka creating modern, elegant and functional living spaces.',
    icon: <Home className="w-8 h-8 text-[#D4A373] stroke-[1.5]" />,
  },
  {
    id: 'restaurant',
    title: 'Restaurant Interior Design',
    description:
      'Creative restaurant interior design in Dhaka that enhances ambiance and attracts more customers.',
    icon: <Utensils className="w-8 h-8 text-[#D4A373] stroke-[1.5]" />,
  },
  {
    id: 'corporate',
    title: 'Corporate/Office Interior Design',
    description:
      'Professional corporate and office interior design in Dhaka for productive, stylish work environments.',
    icon: <Briefcase className="w-8 h-8 text-[#D4A373] stroke-[1.5]" />,
  },
  {
    id: 'commercial',
    title: 'Commercial Interior Design',
    description:
      'High-end commercial interior design in Dhaka tailored for retail shops, showrooms and businesses.',
    icon: <Building2 className="w-8 h-8 text-[#D4A373] stroke-[1.5]" />,
  },
  {
    id: 'hospital',
    title: 'Hospital Interior Design',
    description:
      'Modern hospital interior design in Dhaka focused on comfort, hygiene and patient-friendly spaces.',
    icon: <Hospital className="w-8 h-8 text-[#D4A373] stroke-[1.5]" />,
  },
];

interface ServicesProps {
  theme?: 'dark' | 'light';
}

export default function Services({ theme = 'dark' }: ServicesProps) {
  const isDark = theme === 'dark';

  return (
    <section
      id="services"
      className={`py-20 px-8 transition-colors duration-300 ${
        isDark ? 'bg-[#121110] text-[#F4F1DE]' : 'bg-[#F8F8F8] text-[#121110]'
      }`}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Section Header Card */}
        <div className="p-8 md:p-10 flex flex-col justify-between">
          <div className="space-y-4">
            <h2
              className={`text-2xl sm:text-3xl font-extrabold tracking-tight uppercase ${
                isDark ? 'text-white' : 'text-[#121110]'
              }`}
            >
              Our Services
            </h2>
            <p
              className={`text-xs sm:text-sm leading-relaxed max-w-sm ${
                isDark ? 'text-[#F4F1DE]/70' : 'text-gray-500'
              }`}
            >
              Experience exceptional quality, innovation, and timeless design with Innards Luxury Interiors where luxury meets functionality.
            </p>
          </div>

          <div className="pt-6">
            <a
              href="#portfolio"
              className={`inline-block text-xs font-bold uppercase tracking-wider px-7 py-3.5 transition-colors duration-300 ${
                isDark
                  ? 'bg-[#1A1917] border border-white/10 hover:border-[#E07A5F] text-[#D4A373] hover:text-white'
                  : 'bg-[#171717] hover:bg-[#D4A373] text-white'
              }`}
            >
              View All
            </a>
          </div>
        </div>

        {/* Service Cards */}
        {servicesData.map((service) => (
          <div
            key={service.id}
            className={`p-8 sm:p-10 transition-all duration-300 flex flex-col justify-start space-y-5 rounded-xl ${
              isDark
                ? 'bg-[#1A1917] border border-white/10 hover:border-[#E07A5F]/50 shadow-lg'
                : 'bg-white border border-gray-100/80 shadow-sm hover:shadow-md'
            }`}
          >
            <div>{service.icon}</div>

            <h3
              className={`text-lg font-bold leading-snug ${
                isDark ? 'text-white' : 'text-[#121110]'
              }`}
            >
              {service.title}
            </h3>

            <p
              className={`text-xs leading-relaxed ${
                isDark ? 'text-[#F4F1DE]/70' : 'text-gray-500'
              }`}
            >
              {service.description}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}