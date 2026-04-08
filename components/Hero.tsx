"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden"
    >
      {/* Background image with parallax */}
      <motion.div style={{ y }} className="absolute inset-0 scale-110">
        <Image
          src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1920&q=85"
          alt="Aerial view of dramatic mountain landscape"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian-900/40 via-obsidian-900/20 to-obsidian-900/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-obsidian-900/50 via-transparent to-transparent" />

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 max-w-7xl mx-auto px-6 w-full"
      >
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-12 h-px bg-sand-400" />
            <span className="text-sand-400 text-xs tracking-[0.3em] uppercase font-mono">
              Est. 2018 · Luxury Travel
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-6xl md:text-8xl lg:text-9xl text-sand-50 leading-[0.9] mb-8"
          >
            The world{" "}
            <span className="italic text-sand-300">awaits</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.8 }}
            className="text-mist/70 text-lg md:text-xl max-w-lg leading-relaxed mb-12 font-light"
          >
            We craft journeys that transform perspective. Each itinerary is
            architected around wonder, comfort, and the singular moments that
            become lifelong memories.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.7 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#destinations"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-sand-400 text-obsidian-900 text-sm tracking-widest uppercase font-medium hover:bg-sand-300 transition-colors duration-300 group"
            >
              Explore Destinations
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
            </a>
            <a
              href="#story"
              className="inline-flex items-center justify-center px-8 py-4 border border-mist/30 text-mist text-sm tracking-widest uppercase hover:border-mist/60 hover:bg-white/5 transition-all duration-300"
            >
              Our Story
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-mist/40 text-xs tracking-[0.3em] uppercase">
          Scroll
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-mist/40 to-transparent animate-pulse" />
      </motion.div>

      {/* Corner stat */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-16 right-8 text-right hidden lg:block"
      >
        <p className="font-display text-4xl text-sand-300 italic">140+</p>
        <p className="text-mist/50 text-xs tracking-widest uppercase mt-1">
          Destinations curated
        </p>
      </motion.div>
    </section>
  );
}
