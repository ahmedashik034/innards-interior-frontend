'use client';

import React, { useState, useEffect } from 'react';
import { ArrowUp, ArrowDown, Quote } from 'lucide-react';

interface Review {
  id: number;
  name: string;
  role: string;
  photo: string;
  quote: string;
  projectSize: string;
  location: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: 'Yasin Arafat',
    role: 'Businessman',
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop',
    quote:
      'I have always dreamed of having a beautiful office where the interior would be top-notch and well-designed. I wanted a workspace that not only looked premium but also created a comfortable environment for working with focus and inspiration. Thanks to Innards Interior Studio, this dream has finally become a reality. Their expertise, dedication, and attention to detail turned my vision into a stunning office that reflects professionalism.',
    projectSize: '2000 sqft',
    location: 'Jatrabari, Dhaka',
  },
  {
    id: 2,
    name: 'Mr. Nizam Uddin',
    role: 'Managing Director',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
    quote: 'Execution quality is top tier. The custom wood panelling and ambient LED cove lighting transformed our Gulshan duplex completely. Delivered on budget and right on schedule.',
    projectSize: '3500 sqft',
    location: 'Gulshan, Dhaka',
  },
  {
    id: 3,
    name: 'Dr. Sharmin Jahan',
    role: 'Consultant Architect',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop',
    quote: 'Working with the team at Innards was seamless from initial 3D design to turnkey handover. They respected structural limits while creating an incredibly open, warm living environment.',
    projectSize: '2800 sqft',
    location: 'Dhanmondi, Dhaka',
  },
  {
    id: 4,
    name: 'Tanvir Ahmed',
    role: 'Software Executive',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop',
    quote: 'Minimalist aesthetics done right! The lighting schemes, acoustic walls, and ergonomic layouts made our corporate office space look international. Highly recommended.',
    projectSize: '4200 sqft',
    location: 'Banani, Dhaka',
  },
];

export default function ClientReviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-change every 4.5 seconds
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [isPaused]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const current = reviews[currentIndex];

  return (
    <section className="py-20 px-8 max-w-6xl mx-auto w-full">
      {/* Title */}
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
          What Our Clients Say
        </h2>
      </div>

      {/* Review Card */}
      <div
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="relative bg-[#1A1917] border border-white/10 rounded-3xl p-8 sm:p-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-center shadow-2xl transition-all duration-500"
      >
        {/* Left Column: Avatar Image */}
        <div className="md:col-span-4 flex justify-center">
          <div className="relative w-44 h-44 sm:w-56 sm:h-56 rounded-full overflow-hidden border-2 border-[#E07A5F]/40 p-1 bg-[#121110]">
            <img
              src={current.photo}
              alt={current.name}
              className="w-full h-full object-cover rounded-full transition-opacity duration-500"
            />
          </div>
        </div>

        {/* Middle Column: Review Text & Client Info */}
        <div className="md:col-span-7 flex flex-col justify-between space-y-6">
          <p className="text-xs sm:text-sm text-[#F4F1DE]/80 leading-relaxed min-h-[100px] transition-all duration-500">
            "{current.quote}"
          </p>

          <div>
            <h3 className="text-lg font-bold text-white">{current.name}</h3>
            <p className="text-xs text-[#D4A373]">{current.role}</p>
          </div>

          <div className="pt-4 border-t border-white/10 grid grid-cols-2 gap-4 max-w-xs text-xs">
            <div>
              <p className="text-[#F4F1DE]/50 uppercase tracking-wider text-[10px]">
                Project Size
              </p>
              <p className="font-semibold text-white mt-0.5">{current.projectSize}</p>
            </div>
            <div>
              <p className="text-[#F4F1DE]/50 uppercase tracking-wider text-[10px]">
                Location
              </p>
              <p className="font-semibold text-[#D4A373] mt-0.5">{current.location}</p>
            </div>
          </div>
        </div>

        {/* Right Column: Vertical Navigation Indicators & Up/Down Arrows */}
        <div className="md:col-span-1 flex flex-col items-center justify-between h-full gap-6">
          {/* Vertical Dots */}
          <div className="flex flex-col items-center gap-2">
            {reviews.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === idx
                    ? 'h-7 bg-[#E07A5F]'
                    : 'h-2.5 bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Up & Down Arrows */}
          <div className="flex flex-col gap-2">
            <button
              onClick={handlePrev}
              className="w-9 h-9 rounded-full border border-white/10 bg-[#121110] hover:border-[#E07A5F] text-white hover:text-[#E07A5F] flex items-center justify-center transition active:scale-90"
              aria-label="Previous testimonial"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              className="w-9 h-9 rounded-full border border-white/10 bg-[#121110] hover:border-[#E07A5F] text-white hover:text-[#E07A5F] flex items-center justify-center transition active:scale-90"
              aria-label="Next testimonial"
            >
              <ArrowDown className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}