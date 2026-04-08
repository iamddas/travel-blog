"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { blogPosts } from "@/data";
import type { BlogPost } from "@/types";

function BlogCard({ post, index }: { post: BlogPost; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: index * 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="group cursor-pointer"
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden mb-6">
        <Image
          src={post.imageUrl}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-obsidian-900/20 group-hover:bg-obsidian-900/10 transition-colors duration-500" />

        {/* Category */}
        <div className="absolute top-5 left-5">
          <span className="bg-obsidian-900/80 backdrop-blur-sm px-3 py-1 text-sand-400 text-xs tracking-widest uppercase font-mono border border-white/10">
            {post.category}
          </span>
        </div>
      </div>

      {/* Meta */}
      <div className="flex items-center gap-4 mb-4">
        <span className="text-mist/40 text-xs tracking-wider font-mono">
          {post.date}
        </span>
        <span className="w-1 h-1 rounded-full bg-mist/30" />
        <span className="text-mist/40 text-xs tracking-wider font-mono">
          {post.readTime} read
        </span>
      </div>

      {/* Title */}
      <h3 className="font-display text-2xl text-sand-50 leading-tight mb-3 group-hover:text-sand-200 transition-colors duration-300">
        {post.title}
      </h3>

      {/* Excerpt */}
      <p className="text-mist/55 text-sm leading-relaxed mb-5 line-clamp-3">
        {post.excerpt}
      </p>

      {/* Read more */}
      <div className="flex items-center gap-2 text-sand-400 text-xs tracking-widest uppercase group-hover:gap-3 transition-all duration-300">
        <span>Read story</span>
        <svg
          className="w-3 h-3"
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
      </div>

      {/* Bottom border reveal */}
      <div className="mt-5 w-0 h-px bg-sand-400/50 group-hover:w-full transition-all duration-500 ease-out" />
    </motion.article>
  );
}

export default function BlogSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="blog" className="py-28 bg-obsidian-800">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div ref={ref} className="flex items-end justify-between mb-16">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-5"
            >
              <div className="w-8 h-px bg-sand-400" />
              <span className="text-sand-400 text-xs tracking-[0.3em] uppercase font-mono">
                Field Notes
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-5xl md:text-6xl text-sand-50"
            >
              From the{" "}
              <span className="italic text-sand-300">journal</span>
            </motion.h2>
          </div>

          <motion.a
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            href="#"
            className="hidden md:inline-flex items-center gap-2 text-mist/50 text-sm tracking-wider hover:text-mist transition-colors group"
          >
            All articles
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

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14">
          {blogPosts.map((post, i) => (
            <BlogCard key={post.id} post={post} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
