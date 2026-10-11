"use client";

import React, { useEffect, useState, use } from "react";
import Link from "next/link";
import { Project, fetchProjects, fetchProjectById } from "@/app/lib/api";
import Footer from "@/app/components/Footer";
import {
  Compass,
  ArrowLeft,
  MapPin,
  Maximize2,
  User,
  CheckCircle2,
  Share2,
  Sparkles,
} from "lucide-react";

export default function ProjectDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const [project, setProject] = useState<Project | null>(null);
  const [allProjects, setAllProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  // State to control video playback
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      // Reset play state immediately when changing projects
      setIsPlayingVideo(false);
      try {
        const currentData = await fetchProjectById(id);
        const projectsList = await fetchProjects();
        setProject(currentData);
        setAllProjects(projectsList);
      } catch (err) {
        console.error("Failed loading project details:", err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#121110] text-[#F4F1DE] flex items-center justify-center text-sm">
        <div className="animate-pulse flex items-center gap-3">
          <Sparkles className="w-5 h-5 text-[#E07A5F]" />
          <span>Loading Architectural Showcase...</span>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-[#121110] text-[#F4F1DE] flex flex-col items-center justify-center gap-4">
        <p className="text-lg">Project not found.</p>
        <Link
          href="/"
          className="px-6 py-2.5 bg-[#1A1917] border border-white/10 rounded-full text-xs uppercase tracking-wider text-[#D4A373]"
        >
          Return to Studio
        </Link>
      </div>
    );
  }

  // Clean raw YouTube URL by removing any pre-existing query string parameters
  const cleanVideoUrl = project.videoUrl ? project.videoUrl.split("?")[0] : "";

  const gallery =
    project.gallery && project.gallery.length > 0
      ? project.gallery
      : [
          project.imageUrl,
          "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=800&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop",
        ].filter(Boolean);

  const tags = project.tags || [
    "3 Bedrooms",
    "Formal Living Room",
    "Dining Area",
    "Family Lounge",
    "Study Corner",
    "Open Kitchen",
  ];
  const amenities = project.amenities || [
    "All-Over Decorative Ceiling",
    "Wall Paneling",
    "Bookshelf Unit",
    "Custom TV Console",
    "Modular Kitchen Cabinets",
    "Dressing Unit",
    "Hidden Ambient Lighting",
    "Acoustic Door Seals",
  ];

  return (
    <div className="min-h-screen bg-[#121110] text-[#F4F1DE] font-sans selection:bg-[#E07A5F] selection:text-white">
      {/* Header Bar */}
      <header className="max-w-7xl mx-auto w-full px-8 py-8 flex items-center justify-between border-b border-white/5">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-[#1A1917] border border-[#D4A373]/30 rounded-xl flex items-center justify-center text-[#D4A373] group-hover:border-[#E07A5F] transition-colors">
            <Compass className="w-5 h-5" />
          </div>
          <span className="font-bold text-lg text-white">INNARDS STUDIO</span>
        </Link>

        <Link
          href="/"
          className="bg-[#1A1917] border border-white/10 hover:border-[#E07A5F] px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition flex items-center gap-2"
        >
          <ArrowLeft className="w-3.5 h-3.5 text-[#D4A373]" />
          <span>Back to Portfolio</span>
        </Link>
      </header>

      <main className="max-w-6xl mx-auto px-8 py-12 space-y-16">
        {/* Title Header & Tags */}
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              {project.category} Project — {project.title}
            </h1>
            <div className="flex items-center gap-3 text-xs text-[#F4F1DE]/70">
              <span>Share on</span>
              <button className="w-8 h-8 rounded-full bg-[#1A1917] border border-white/10 flex items-center justify-center hover:text-[#E07A5F]">
                <Share2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="flex flex-wrap gap-2.5 pt-2">
            {tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-4 py-1.5 rounded-full bg-[#1A1917] border border-white/10 text-xs font-medium text-[#D4A373]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Video Showcase Section (Strict Click-To-Play) */}
        {cleanVideoUrl && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-white">
              {project.title} Video Tour
            </h2>
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-white/10 bg-[#1A1917] shadow-2xl">
              {isPlayingVideo ? (
                <iframe
                  src={`${cleanVideoUrl}?autoplay=1&rel=0`}
                  title={project.title}
                  className="w-full h-full object-cover"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <div
                  onClick={() => setIsPlayingVideo(true)}
                  className="absolute inset-0 cursor-pointer group flex items-center justify-center bg-black/40"
                >
                  {/* Video Thumbnail Cover */}
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-700 opacity-70"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition" />

                  {/* Play Button Overlay */}
                  <div className="relative z-10 w-16 h-16 rounded-full bg-[#E07A5F] text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition duration-300">
                    <svg
                      className="w-7 h-7 fill-current ml-1"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Photo Gallery Grid */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-white">
            Project Photo Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            <div
              onClick={() => setSelectedImage(gallery[0])}
              className="md:col-span-6 h-[420px] rounded-2xl overflow-hidden border border-white/10 bg-[#1A1917] cursor-pointer group relative"
            >
              <img
                src={gallery[0]}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition" />
            </div>

            <div className="md:col-span-6 grid grid-cols-2 gap-4 h-[420px]">
              {gallery.slice(1, 5).map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedImage(img)}
                  className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#1A1917] cursor-pointer group"
                >
                  <img
                    src={img}
                    alt={`${project.title} thumbnail ${idx}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  {idx === 3 && gallery.length > 5 && (
                    <div className="absolute inset-0 bg-[#E07A5F]/90 flex items-center justify-center text-white font-bold text-xs uppercase tracking-wider">
                      Show All Photos
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Architectural Story & Details */}
        <div className="space-y-6 pt-6 border-t border-white/10">
          <h2 className="text-2xl font-bold text-white">
            Modern {project.category} Interior Design: {project.title}
          </h2>
          <div className="text-xs sm:text-sm text-[#F4F1DE]/80 leading-relaxed space-y-4 max-w-4xl">
            <p>{project.description}</p>
            <p>
              The design focuses on clean lines, neutral color tones, and
              premium wood accents, offering a serene escape from the bustling
              energy of the city while providing an incredibly durable
              environment for daily family living.
            </p>
          </div>
        </div>

        {/* Key Specification Bar */}
        <div className="p-8 rounded-2xl bg-[#1A1917] border border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#121110] border border-white/10 flex items-center justify-center text-[#E07A5F]">
              <User className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[10px] uppercase text-[#F4F1DE]/50 tracking-wider">
                CLIENT
              </p>
              <p className="text-sm font-bold text-white">
                {project.clientName || "Private Client"}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#121110] border border-white/10 flex items-center justify-center text-[#D4A373]">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[10px] uppercase text-[#F4F1DE]/50 tracking-wider">
                LOCATION
              </p>
              <p className="text-sm font-bold text-white">
                {project.location || "Dhaka, Bangladesh"}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#121110] border border-white/10 flex items-center justify-center text-[#E07A5F]">
              <Maximize2 className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[10px] uppercase text-[#F4F1DE]/50 tracking-wider">
                SPACE SIZE
              </p>
              <p className="text-sm font-bold text-white">
                {project.size || "2180 sqft"}
              </p>
            </div>
          </div>
        </div>

        {/* Amenities Section */}
        <div className="space-y-6">
          <h2 className="text-xl font-bold text-white">
            What this place offers
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {amenities.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-[#1A1917] border border-white/5 flex items-center gap-3 text-xs text-[#F4F1DE]/90"
              >
                <CheckCircle2 className="w-4 h-4 text-[#E07A5F] flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Client Testimonial Spotlight */}
        {project.testimonial && (
          <div className="p-8 sm:p-10 rounded-3xl bg-[#1A1917] border border-white/10 space-y-6">
            <h2 className="text-2xl font-bold text-white text-center">
              What Our Clients Say
            </h2>
            <p className="text-xs sm:text-sm text-[#F4F1DE]/80 text-center italic max-w-2xl mx-auto">
              "{project.testimonial.quote}"
            </p>
            <div className="text-center">
              <p className="text-sm font-bold text-white">
                {project.testimonial.clientName}
              </p>
              <p className="text-xs text-[#D4A373]">
                {project.testimonial.role}
              </p>
            </div>
          </div>
        )}

        {/* Explore More Projects */}
        <div className="space-y-6 pt-12 border-t border-white/10">
          <h2 className="text-2xl font-bold text-white text-center">
            Explore More Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {allProjects
              .filter((p) => p.id !== project.id)
              .slice(0, 4)
              .map((item) => (
                <Link
                  key={item.id}
                  href={`/projects/${item.id}`}
                  className="group relative h-80 rounded-2xl overflow-hidden border border-white/10 bg-[#1A1917]"
                >
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-xs font-bold text-white group-hover:text-[#D4A373]">
                    {item.title}
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </main>

      {/* Image Modal Preview */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 cursor-pointer"
        >
          <img
            src={selectedImage}
            alt="Expanded preview"
            className="max-w-4xl max-h-[90vh] rounded-2xl object-contain border border-white/20"
          />
        </div>
      )}

      <Footer />
    </div>
  );
}