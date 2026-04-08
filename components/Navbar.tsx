"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { NavLink } from "@/types";

const navLinks: NavLink[] = [
  { label: "Home", href: "#" },
  { label: "Destinations", href: "#destinations" },
  { label: "Blog", href: "#blog" },
  { label: "About", href: "#story" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-obsidian-900/90 backdrop-blur-xl border-b border-white/5 py-3"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-full border border-sand-400/60 flex items-center justify-center group-hover:border-sand-400 transition-colors duration-300">
              <div className="w-2.5 h-2.5 rounded-full bg-sand-400" />
            </div>
            <span className="font-display text-xl tracking-widest text-sand-50 uppercase">
              Terra
            </span>
          </a>

          {/* Center Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative text-sm tracking-widest uppercase text-mist/70 hover:text-mist transition-colors duration-300 group py-1"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-sand-400 group-hover:w-full transition-all duration-400 ease-out" />
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-4">
            <a
              href="#newsletter"
              className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 border border-sand-400/50 text-sand-300 text-xs tracking-widest uppercase hover:bg-sand-400/10 hover:border-sand-400 transition-all duration-300 rounded-sm"
            >
              Plan Journey
            </a>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden flex flex-col gap-1.5 p-2"
              aria-label="Toggle menu"
            >
              <span
                className={`block w-6 h-px bg-mist transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
              />
              <span
                className={`block w-6 h-px bg-mist transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block w-6 h-px bg-mist transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-obsidian-900/98 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setMenuOpen(false)}
                className="font-display text-4xl text-sand-50 italic hover:text-sand-300 transition-colors"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="#newsletter"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              onClick={() => setMenuOpen(false)}
              className="mt-4 px-8 py-3 border border-sand-400 text-sand-300 text-sm tracking-widest uppercase"
            >
              Plan Journey
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
