'use client';

import React, { useState } from 'react';
import { Play, Star } from 'lucide-react';

interface Testimonial {
  id: string;
  clientName: string;
  projectTitle: string;
  videoId: string; // YouTube video ID
  thumbnail: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    clientName: 'Mrs. Nusrat Jahan',
    projectTitle: 'Dhanmondi Apartment Interior Design',
    videoId: '3JZ_D3ELwOQ', // Replace with real YouTube video ID
    thumbnail: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=400&auto=format&fit=crop',
    quote: '100% Satisfied with their architectural styling and professional timeline management.',
  },
  {
    id: '2',
    clientName: 'Mr. & Mrs. Kabir',
    projectTitle: 'Gulshan Duplex Residence',
    videoId: 'jfKfPfyJRdk', // Replace with real YouTube video ID
    thumbnail: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=400&auto=format&fit=crop',
    quote: 'They transformed our open-plan living area into an absolute masterpiece.',
  },
  {
    id: '3',
    clientName: 'Dr. Rahman',
    projectTitle: 'Banani Executive Penthouse',
    videoId: '5qap5aO4i9A', // Replace with real YouTube video ID
    thumbnail: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=400&auto=format&fit=crop',
    quote: 'Exquisite attention to lighting, ceiling coves, and custom woodwork.',
  },
  {
    id: '4',
    clientName: 'Tanvir Ahmed',
    projectTitle: 'Uttara Minimalist Villa',
    videoId: 'L_LUpnjgPso', // Replace with real YouTube video ID
    thumbnail: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=400&auto=format&fit=crop',
    quote: 'Truly luxury-focused design with an unmatched level of finish quality.',
  },
];

export default function Testimonials() {
  const [activeVideo, setActiveVideo] = useState<Testimonial>(testimonials[0]);

  return (
    <section className="py-20 px-8 max-w-6xl mx-auto w-full">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-white mb-2">
          Client Success Stories
        </h2>
        <p className="text-xs tracking-widest text-[#D4A373] uppercase">
          Real transformations from our residential and commercial clients
        </p>
      </div>

      {/* Main Video Showcase Box */}
      <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-white/10 bg-[#1A1917] shadow-2xl mb-6">
        <iframe
          key={activeVideo.videoId} // Forces iframe to reload when video changes
          src={`https://www.youtube.com/embed/${activeVideo.videoId}?autoplay=1`}
          title={activeVideo.projectTitle}
          className="w-full h-full object-cover"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        {/* Overlay caption bar */}
        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pointer-events-none">
          <div>
            <div className="flex items-center gap-1 text-[#E07A5F] mb-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-current" />
              ))}
            </div>
            <h3 className="text-white font-bold text-sm sm:text-base">
              {activeVideo.projectTitle} — {activeVideo.clientName}
            </h3>
            <p className="text-xs text-[#F4F1DE]/70 mt-0.5">"{activeVideo.quote}"</p>
          </div>
        </div>
      </div>

      {/* Thumbnail Selector Row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {testimonials.map((item) => {
          const isActive = activeVideo.id === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveVideo(item)}
              className={`group relative aspect-video rounded-xl overflow-hidden border transition-all duration-300 text-left cursor-pointer ${
                isActive
                  ? 'border-[#E07A5F] ring-2 ring-[#E07A5F]/40 scale-[1.02]'
                  : 'border-white/10 opacity-70 hover:opacity-100 hover:border-white/30'
              }`}
            >
              <img
                src={item.thumbnail}
                alt={item.clientName}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                <div className="w-9 h-9 rounded-full bg-[#121110]/80 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                  <Play className="w-4 h-4 fill-white text-white ml-0.5" />
                </div>
              </div>
              <div className="absolute bottom-2 left-2 right-2 text-[11px] font-medium text-white truncate drop-shadow-md">
                {item.clientName}
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}