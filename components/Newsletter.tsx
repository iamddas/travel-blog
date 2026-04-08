"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section id="newsletter" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-obsidian-700">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(186,146,85,0.08)_0%,transparent_70%)]" />
        {/* Decorative lines */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-sand-400/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-sand-400/20 to-transparent" />
      </div>

      <div ref={ref} className="relative max-w-3xl mx-auto px-6 text-center">
        {/* Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="w-16 h-16 rounded-full border border-sand-400/30 flex items-center justify-center mx-auto mb-10"
        >
          <svg
            className="w-7 h-7 text-sand-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <div className="w-8 h-px bg-sand-400/50" />
          <span className="text-sand-400 text-xs tracking-[0.3em] uppercase font-mono">
            Stay in the know
          </span>
          <div className="w-8 h-px bg-sand-400/50" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-5xl md:text-6xl text-sand-50 mb-5"
        >
          Wander with{" "}
          <span className="italic text-sand-300">purpose</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="text-mist/55 text-lg leading-relaxed mb-12 font-light max-w-xl mx-auto"
        >
          Receive curated travel essays, destination guides, and exclusive early
          access to our rarest journeys — directly to your inbox.
        </motion.p>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-6"
            >
              <div className="w-12 h-12 rounded-full border border-sand-400 flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-5 h-5 text-sand-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <p className="font-display text-2xl text-sand-50 italic">
                Welcome aboard, traveler.
              </p>
              <p className="text-mist/50 text-sm mt-2">
                Your first dispatch arrives shortly.
              </p>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <div
                className={`flex-1 relative border transition-colors duration-300 ${
                  focused
                    ? "border-sand-400/70"
                    : "border-white/15 hover:border-white/30"
                }`}
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setFocused(true)}
                  onBlur={() => setFocused(false)}
                  placeholder="your@email.com"
                  required
                  className="w-full bg-transparent px-5 py-4 text-mist placeholder-mist/30 text-sm outline-none"
                />
              </div>
              <button
                type="submit"
                className="px-7 py-4 bg-sand-400 text-obsidian-900 text-xs tracking-widest uppercase font-medium hover:bg-sand-300 active:scale-95 transition-all duration-200 whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          )}
        </motion.div>

        {/* Fine print */}
        {!submitted && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.7 }}
            className="text-mist/30 text-xs mt-5 tracking-wider"
          >
            No spam. Unsubscribe anytime. We respect your wanderlust.
          </motion.p>
        )}
      </div>
    </section>
  );
}
