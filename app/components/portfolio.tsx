'use client';

import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { Project, fetchProjects } from '../lib/api';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

export default function Portfolio() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function loadData() {
      const data = await fetchProjects();
      setProjects(data);
      setLoading(false);
    }
    loadData();
  }, []);

  // Auto-scroll effect
  useEffect(() => {
    if (isPaused || projects.length <= 1) return;

    const interval = setInterval(() => {
      if (!scrollContainerRef.current) return;
      const container = scrollContainerRef.current;
      const cardWidth = 344; // card width + gap
      const maxScrollLeft = container.scrollWidth - container.clientWidth;

      let nextScroll = container.scrollLeft + cardWidth;
      if (nextScroll >= maxScrollLeft + 10) {
        nextScroll = 0; // Loop back to start smoothly
      }

      container.scrollTo({
        left: nextScroll,
        behavior: 'smooth',
      });
    }, 2200);

    return () => clearInterval(interval);
  }, [isPaused, projects.length]);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    const scrollAmount = 344;
    const targetScroll =
      scrollContainerRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);

    scrollContainerRef.current.scrollTo({
      left: targetScroll,
      behavior: 'smooth',
    });
  };

  const handleScroll = () => {
    if (!scrollContainerRef.current || projects.length === 0) return;
    const container = scrollContainerRef.current;
    const cardWidth = 344;
    const index = Math.round(container.scrollLeft / cardWidth);
    setActiveIndex(Math.min(Math.max(index, 0), projects.length - 1));
  };

  return (
    <section id="portfolio" className="py-16 px-8 max-w-7xl mx-auto w-full">
      <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-white mb-1">Selected Works</h2>
          <p className="text-xs tracking-widest text-[#D4A373] uppercase">
            Explore our curated portfolio of high-end residential and commercial spaces.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => scroll('left')}
            className="w-11 h-11 rounded-full border border-white/10 bg-[#1A1917] hover:border-[#D4A373] text-white flex items-center justify-center transition cursor-pointer"
            aria-label="Scroll Left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="w-11 h-11 rounded-full border border-white/10 bg-[#1A1917] hover:border-[#D4A373] text-white flex items-center justify-center transition cursor-pointer"
            aria-label="Scroll Right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {loading && (
        <div className="flex gap-6 overflow-hidden">
          {[1, 2, 3].map((n) => (
            <div key={n} className="w-[320px] h-[420px] bg-[#1A1917] rounded-2xl animate-pulse flex-shrink-0" />
          ))}
        </div>
      )}

      {!loading && projects.length > 0 && (
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="flex gap-6 overflow-x-auto scrollbar-none scroll-smooth pb-4 pt-2"
          style={{ scrollbarWidth: 'none' }}
        >
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              className="group relative w-[280px] sm:w-[320px] h-[420px] rounded-2xl overflow-hidden flex-shrink-0 border border-white/10 hover:border-[#E07A5F]/60 transition-all duration-500 shadow-xl bg-[#1A1917] cursor-pointer block"
            >
              {project.imageUrl ? (
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-white/30 text-xs p-4 text-center">
                  {project.title}
                </div>
              )}
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              
              <span className="absolute top-4 left-4 bg-[#121110]/80 backdrop-blur-md text-[#D4A373] text-[10px] uppercase tracking-wider px-3 py-1 rounded-full border border-white/10 flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-[#E07A5F]" />
                {project.category}
              </span>
              
              <div className="absolute bottom-0 inset-x-0 p-6 flex flex-col justify-end">
                <h3 className="text-lg font-bold text-white group-hover:text-[#D4A373] transition-colors leading-snug">
                  {project.title}
                </h3>
                <p className="text-xs text-[#F4F1DE]/70 mt-1 line-clamp-2">{project.description}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}