'use client';

import React, { useEffect, useState, useRef } from 'react';
import { Project, fetchProjects } from '../lib/api';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

export default function CategoryShowcases() {
  const [projects, setProjects] = useState<Project[]>([]);
  const residentialRef = useRef<HTMLDivElement>(null);
  const commercialRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function loadData() {
      const data = await fetchProjects();
      setProjects(data);
    }
    loadData();
  }, []);

  const scrollRef = (ref: React.RefObject<HTMLDivElement | null>, direction: 'left' | 'right') => {
    if (!ref.current) return;
    const amount = 344;
    ref.current.scrollTo({
      left: ref.current.scrollLeft + (direction === 'left' ? -amount : amount),
      behavior: 'smooth',
    });
  };

  const residential = projects.filter((p) => p.category?.toLowerCase() === 'residential');
  const commercial = projects.filter((p) => p.category?.toLowerCase() === 'commercial');

  return (
    <div className="py-16 px-8 max-w-7xl mx-auto w-full space-y-24">
      {/* RESIDENTIAL BREAKDOWN */}
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-white mb-2">Residential Interior Design</h2>
            <p className="text-xs text-[#F4F1DE]/70 max-w-2xl leading-relaxed">
              Bespoke duplexes, luxury apartments, and tranquil suburban villas designed with custom millwork, mood lighting, and ergonomic comfort tailored for modern family living across Dhaka.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={() => scrollRef(residentialRef, 'left')} className="w-10 h-10 rounded-full border border-white/10 bg-[#1A1917] hover:border-[#D4A373] text-white flex items-center justify-center transition">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={() => scrollRef(residentialRef, 'right')} className="w-10 h-10 rounded-full border border-white/10 bg-[#1A1917] hover:border-[#D4A373] text-white flex items-center justify-center transition">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div ref={residentialRef} className="flex gap-6 overflow-x-auto scrollbar-none scroll-smooth pb-4" style={{ scrollbarWidth: 'none' }}>
          {residential.map((project) => (
            <Card key={project.id} project={project} />
          ))}
        </div>
      </div>

      {/* COMMERCIAL BREAKDOWN */}
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-white mb-2">Commercial Interior Design</h2>
            <p className="text-xs text-[#F4F1DE]/70 max-w-2xl leading-relaxed">
              Award-winning restaurant layouts, boutique corporate offices, and aesthetic medical lounges engineered to maximize brand identity, client workflow, and spatial productivity.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={() => scrollRef(commercialRef, 'left')} className="w-10 h-10 rounded-full border border-white/10 bg-[#1A1917] hover:border-[#D4A373] text-white flex items-center justify-center transition">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={() => scrollRef(commercialRef, 'right')} className="w-10 h-10 rounded-full border border-white/10 bg-[#1A1917] hover:border-[#D4A373] text-white flex items-center justify-center transition">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div ref={commercialRef} className="flex gap-6 overflow-x-auto scrollbar-none scroll-smooth pb-4" style={{ scrollbarWidth: 'none' }}>
          {commercial.map((project) => (
            <Card key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Card({ project }: { project: Project }) {
  return (
    <div className="group relative w-[280px] sm:w-[320px] h-[420px] rounded-2xl overflow-hidden flex-shrink-0 border border-white/10 hover:border-[#E07A5F]/60 transition-all duration-500 shadow-xl bg-[#1A1917]">
      {project.imageUrl ? (
        <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
      ) : (
        <div className="w-full h-full flex items-center justify-center text-white/30 text-xs p-4 text-center">{project.title}</div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
      <span className="absolute top-4 left-4 bg-[#121110]/80 backdrop-blur-md text-[#D4A373] text-[10px] uppercase tracking-wider px-3 py-1 rounded-full border border-white/10 flex items-center gap-1">
        <Sparkles className="w-3 h-3 text-[#E07A5F]" />
        {project.category}
      </span>
      <div className="absolute bottom-0 inset-x-0 p-6 flex flex-col justify-end">
        <h3 className="text-lg font-bold text-white group-hover:text-[#D4A373] transition-colors leading-snug">{project.title}</h3>
        <p className="text-xs text-[#F4F1DE]/70 mt-1 line-clamp-2">{project.description}</p>
      </div>
    </div>
  );
}