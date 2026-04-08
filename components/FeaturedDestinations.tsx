"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { destinations } from "@/data";
import type { Destination } from "@/types";

function DestinationCard({ dest, index }: { dest: Destination; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.7 }}
      className="relative flex-none w-72 md:w-96 h-[520px] overflow-hidden group cursor-pointer snap-start"
    >
      {/* Image */}
      <Image
        src={dest.imageUrl}
        alt={dest.name}
        fill
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        sizes="(max-width: 768px) 288px, 384px"
      />

      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-obsidian-900/90 via-obsidian-900/20 to-transparent transition-opacity duration-500" />

      {/* Price badge */}
      <div className="absolute top-5 right-5 bg-obsidian-800/80 backdrop-blur-sm px-3 py-1.5 border border-white/10">
        <span className="text-sand-300 text-xs tracking-wider font-mono">
          {dest.price}
        </span>
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-7">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-5 h-px bg-sand-400" />
          <span className="text-sand-400 text-xs tracking-widest uppercase font-mono">
            {dest.country}
          </span>
        </div>
        <h3 className="font-display text-4xl text-sand-50 italic mb-2">
          {dest.name}
        </h3>
        <p className="text-mist/60 text-sm leading-relaxed mb-5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-2 group-hover:translate-y-0 transform">
          {dest.tagline}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-mist/50 text-xs tracking-wider">
            {dest.duration}
          </span>
          <button className="flex items-center gap-2 text-sand-300 text-xs tracking-widest uppercase hover:text-sand-100 transition-colors group/btn">
            Explore
            <svg
              className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default function FeaturedDestinations() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const inView = useInView(titleRef, { once: true });

  return (
    <section id="destinations" className="py-24 overflow-hidden">
      {/* Section header */}
      <div ref={titleRef} className="max-w-7xl mx-auto px-6 mb-14">
        <div className="flex items-end justify-between">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-5"
            >
              <div className="w-8 h-px bg-sand-400" />
              <span className="text-sand-400 text-xs tracking-[0.3em] uppercase font-mono">
                Handpicked
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-5xl md:text-6xl text-sand-50"
            >
              Featured <span className="italic text-sand-300">destinations</span>
            </motion.h2>
          </div>
          <motion.a
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            href="#"
            className="hidden md:inline-flex items-center gap-2 text-mist/50 text-sm tracking-wider hover:text-mist transition-colors group"
          >
            View all
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </motion.a>
        </div>
      </div>

      {/* Horizontal scroll */}
      <div
        ref={containerRef}
        className="flex gap-5 overflow-x-auto px-6 pb-6 hide-scrollbar snap-x snap-mandatory scroll-smooth md:px-[calc((100vw-1280px)/2+24px)]"
      >
        {destinations.map((dest, i) => (
          <DestinationCard key={dest.id} dest={dest} index={i} />
        ))}

        {/* End card */}
        <div className="flex-none w-64 h-[520px] flex items-center justify-center border border-white/10 snap-start">
          <div className="text-center p-8">
            <div className="w-12 h-12 rounded-full border border-sand-400/50 flex items-center justify-center mx-auto mb-5">
              <svg
                className="w-5 h-5 text-sand-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </div>
            <p className="font-display text-2xl text-sand-50 italic mb-2">
              140+ more
            </p>
            <p className="text-mist/50 text-sm">destinations await</p>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="max-w-7xl mx-auto px-6 mt-6">
        <p className="text-mist/30 text-xs tracking-widest">
          ← Drag to explore →
        </p>
      </div>
    </section>
  );
}
