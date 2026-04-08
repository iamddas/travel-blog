"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { storySections } from "@/data";
import type { StorySection } from "@/types";

function StoryPanel({ section }: { section: StorySection }) {
  const panelRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let gsap: typeof import("gsap")["gsap"] | null = null;
    let ScrollTrigger: typeof import("gsap/ScrollTrigger")["ScrollTrigger"] | null = null;

    async function initGSAP() {
      const gsapMod = await import("gsap");
      const stMod = await import("gsap/ScrollTrigger");
      gsap = gsapMod.gsap;
      ScrollTrigger = stMod.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);

      if (!panelRef.current || !imageRef.current || !textRef.current) return;

      // Image parallax
      gsap.fromTo(
        imageRef.current,
        { yPercent: -8 },
        {
          yPercent: 8,
          ease: "none",
          scrollTrigger: {
            trigger: panelRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          },
        }
      );

      // Text reveal
      const lines = textRef.current.querySelectorAll(".story-line");
      gsap.fromTo(
        lines,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: panelRef.current,
            start: "top 70%",
            once: true,
          },
        }
      );
    }

    initGSAP();

    return () => {
      ScrollTrigger?.getAll().forEach((t) => t.kill());
    };
  }, []);

  const isEven = storySections.indexOf(section) % 2 === 0;

  return (
    <div
      ref={panelRef}
      className="min-h-screen flex flex-col lg:flex-row items-stretch"
    >
      {/* Image side */}
      <div
        className={`relative flex-1 min-h-[50vh] lg:min-h-screen overflow-hidden ${isEven ? "lg:order-1" : "lg:order-2"}`}
      >
        <div ref={imageRef} className="absolute inset-[-10%] h-[120%]">
          <Image
            src={section.imageUrl}
            alt={section.heading.replace("\n", " ")}
            fill
            className="object-cover"
            sizes="50vw"
          />
        </div>
        <div className="absolute inset-0 bg-obsidian-900/30" />

        {/* Theme label */}
        <div className="absolute bottom-8 left-8">
          <div
            className="w-2 h-16 rounded-full mb-3"
            style={{ backgroundColor: section.accent }}
          />
          <span className="text-xs tracking-[0.3em] uppercase font-mono text-mist/60">
            {section.subheading}
          </span>
        </div>
      </div>

      {/* Text side */}
      <div
        className={`flex-1 flex items-center bg-obsidian-800 ${isEven ? "lg:order-2" : "lg:order-1"}`}
      >
        <div ref={textRef} className="px-10 py-16 lg:px-20 max-w-xl">
          <div className="story-line flex items-center gap-3 mb-8">
            <div
              className="w-8 h-px"
              style={{ backgroundColor: section.accent }}
            />
            <span className="text-xs tracking-[0.3em] uppercase font-mono text-mist/50">
              {section.subheading}
            </span>
          </div>

          <h2 className="story-line font-display text-5xl md:text-6xl text-sand-50 leading-tight mb-8 whitespace-pre-line">
            {section.heading}
          </h2>

          <p className="story-line text-mist/60 text-lg leading-relaxed mb-10 font-light">
            {section.body}
          </p>

          <a
            href="#destinations"
            className="story-line inline-flex items-center gap-3 group"
          >
            <span
              className="text-xs tracking-[0.3em] uppercase font-mono transition-colors"
              style={{ color: section.accent }}
            >
              Discover more
            </span>
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke={section.accent}
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default function ScrollStory() {
  return (
    <section id="story" className="overflow-hidden">
      {/* Section intro */}
      <div className="bg-obsidian-700 py-20 text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-12 h-px bg-sand-400/50" />
          <span className="text-sand-400 text-xs tracking-[0.3em] uppercase font-mono">
            Stories from the road
          </span>
          <div className="w-12 h-px bg-sand-400/50" />
        </div>
        <h2 className="font-display text-5xl md:text-6xl text-sand-50 max-w-2xl mx-auto px-6">
          Three worlds, one{" "}
          <span className="italic text-sand-300">promise</span>
        </h2>
      </div>

      {storySections.map((section) => (
        <StoryPanel key={section.id} section={section} />
      ))}
    </section>
  );
}
