"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { galleryImages } from "@/data";
import type { GalleryImage } from "@/types";

function GalleryItem({
  img,
  index,
}: {
  img: GalleryImage;
  index: number;
}) {
  const [hovered, setHovered] = useState(false);

  const heightClass =
    img.span === "tall" ? "h-80 md:h-[480px]" : "h-56 md:h-72";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.07, duration: 0.6 }}
      className={`masonry-item relative ${heightClass} overflow-hidden cursor-pointer`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Image
        src={img.src}
        alt={img.alt}
        fill
        className={`object-cover transition-transform duration-700 ease-out ${hovered ? "scale-110" : "scale-100"}`}
        sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
      />

      {/* Overlay */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-gradient-to-t from-obsidian-900/80 via-obsidian-900/30 to-transparent flex items-end p-5"
          >
            <div>
              <motion.p
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.05 }}
                className="text-mist/60 text-xs tracking-widest uppercase font-mono mb-1"
              >
                Gallery
              </motion.p>
              <motion.p
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="font-display text-2xl text-sand-50 italic"
              >
                {img.label}
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Always-visible subtle label */}
      {!hovered && (
        <div className="absolute bottom-3 left-3 bg-obsidian-900/60 backdrop-blur-sm px-2.5 py-1 border border-white/10">
          <span className="text-mist/70 text-xs tracking-wider font-mono">
            {img.label}
          </span>
        </div>
      )}
    </motion.div>
  );
}

export default function Gallery() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <section className="py-28 bg-obsidian-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div ref={ref} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="w-12 h-px bg-sand-400/50" />
            <span className="text-sand-400 text-xs tracking-[0.3em] uppercase font-mono">
              Visual diary
            </span>
            <div className="w-12 h-px bg-sand-400/50" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-5xl md:text-6xl text-sand-50 max-w-2xl mx-auto"
          >
            Every frame a{" "}
            <span className="italic text-sand-300">revelation</span>
          </motion.h2>
        </div>

        {/* Masonry grid */}
        <div className="masonry-grid">
          {galleryImages.map((img, i) => (
            <GalleryItem key={img.id} img={img} index={i} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-14"
        >
          <a
            href="#"
            className="inline-flex items-center gap-3 px-8 py-3.5 border border-sand-400/40 text-sand-300 text-xs tracking-widest uppercase hover:bg-sand-400/10 hover:border-sand-400/70 transition-all duration-300"
          >
            View full gallery
            <svg
              className="w-3.5 h-3.5"
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
        </motion.div>
      </div>
    </section>
  );
}
