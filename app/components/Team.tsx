"use client";

import React, { useState, useRef } from "react";
import { ChevronLeft, ChevronRight, Linkedin, Mail } from "lucide-react";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Md. Masum",
    role: "Lead Interior Designer",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Shagor Islam",
    role: "Project Manager",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Ar. Farhana Yeasmin",
    role: "Senior Architect",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Tanvir Hossain",
    role: "3D Visualization Expert",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "Nusrat Jahan",
    role: "Color & Material Specialist",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 6,
    name: "Mahmudul Hasan",
    role: "Site Execution Engineer",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 7,
    name: "Sultana Razia",
    role: "Client Relations Manager",
    image:
      "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=600&auto=format&fit=crop",
  },
];

export default function Team() {
  const [showAll, setShowAll] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;
    const amount = 300;
    scrollContainerRef.current.scrollTo({
      left:
        scrollContainerRef.current.scrollLeft +
        (direction === "left" ? -amount : amount),
      behavior: "smooth",
    });
  };

  return (
    <section id="about" className="py-20 px-8 max-w-7xl mx-auto w-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Intro Card */}
        <div className="lg:col-span-4 space-y-6">
          <span className="text-xs uppercase tracking-[0.25em] text-[#D4A373] font-semibold">
            Our Experts
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            MEET OUR <br />
            TEAM
          </h2>
          <p className="text-xs sm:text-sm text-[#F4F1DE]/70 leading-relaxed max-w-sm">
            Meet the expert team at Innards Interior Studio, delivering
            creative, functional, and luxury design solutions for residential,
            commercial, and corporate spaces with professionalism and
            passion[cite: 7].
          </p>

          <div className="flex items-center gap-4 pt-2">
            <button
              onClick={() => setShowAll(!showAll)}
              className="bg-[#1A1917] hover:bg-[#E07A5F] border border-white/10 hover:border-[#E07A5F] text-white font-semibold px-7 py-3.5 rounded-xl text-xs uppercase tracking-wider transition-all duration-300 shadow-lg cursor-pointer"
            >
              {showAll ? "Show Carousel" : "View All"}
            </button>

            {!showAll && (
              <div className="flex items-center gap-2">
                <button
                  onClick={() => scroll("left")}
                  className="w-10 h-10 rounded-full border border-white/10 bg-[#1A1917] hover:border-[#D4A373] text-white flex items-center justify-center transition active:scale-90"
                  aria-label="Scroll left"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => scroll("right")}
                  className="w-10 h-10 rounded-full border border-white/10 bg-[#1A1917] hover:border-[#D4A373] text-white flex items-center justify-center transition active:scale-90"
                  aria-label="Scroll right"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Right Section: Horizontal Carousel OR Expanded Grid */}
        <div className="lg:col-span-8">
          {showAll ? (
            /* Grid View when "View All" is clicked */
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 animate-fadeIn">
              {teamMembers.map((member) => (
                <TeamCard key={member.id} member={member} />
              ))}
            </div>
          ) : (
            /* Horizontal Scroll View */
            <div
              ref={scrollContainerRef}
              className="flex gap-6 overflow-x-auto scrollbar-none scroll-smooth pb-6 pt-2"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {teamMembers.map((member) => (
                <TeamCard key={member.id} member={member} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function TeamCard({ member }: { member: TeamMember }) {
  return (
    <div className="group relative w-[260px] sm:w-[280px] h-[380px] rounded-2xl overflow-hidden flex-shrink-0 border border-white/10 bg-[#1A1917] shadow-xl hover:border-[#D4A373]/60 transition-all duration-500">
      {/* Background Image */}
      <img
        src={member.image}
        alt={member.name}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
      />

      {/* Dark Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

      {/* Bottom Floating White Info Box matching your screenshot reference */}
      <div className="absolute bottom-4 inset-x-4 bg-white/95 backdrop-blur-md rounded-xl p-4 text-center shadow-2xl transform group-hover:-translate-y-1 transition-transform duration-300">
        <h3 className="text-sm font-bold text-[#121110] leading-snug">
          {member.name}
        </h3>
        <p className="text-[11px] text-[#888888] font-medium mt-0.5">
          {member.role}
        </p>
      </div>
    </div>
  );
}
