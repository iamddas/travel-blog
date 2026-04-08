"use client";

import { motion } from "framer-motion";

const columns = [
  {
    title: "Explore",
    links: ["Destinations", "Experiences", "Private Tours", "Group Journeys", "Honeymoons"],
  },
  {
    title: "Company",
    links: ["Our Story", "The Team", "Awards", "Press", "Careers"],
  },
  {
    title: "Resources",
    links: ["Travel Journal", "Destination Guides", "Packing Lists", "Travel Tips", "FAQ"],
  },
  {
    title: "Contact",
    links: ["hello@terra.travel", "+1 (800) 555-0192", "Mon–Fri, 9am–6pm EST", "Live Chat", "Partnerships"],
  },
];

const socials = [
  {
    name: "Instagram",
    href: "#",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    name: "Pinterest",
    href: "#",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
      </svg>
    ),
  },
  {
    name: "X",
    href: "#",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.477-8.55-7.899-10.95H8.13l4.265 5.638L18.244 2.25zM17.083 20.25h1.833L6.997 4.253H5.032L17.083 20.25z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-obsidian-900 border-t border-white/5">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 lg:gap-14">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <a href="#" className="flex items-center gap-3 mb-6 group">
              <div className="w-8 h-8 rounded-full border border-sand-400/60 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-sand-400" />
              </div>
              <span className="font-display text-xl tracking-widest text-sand-50 uppercase">
                Terra
              </span>
            </a>
            <p className="text-mist/45 text-sm leading-relaxed mb-8 max-w-xs">
              Architects of extraordinary journeys since 2018. Every path
              carefully considered, every moment intentionally crafted.
            </p>

            {/* Socials */}
            <div className="flex items-center gap-4">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  aria-label={s.name}
                  className="w-9 h-9 border border-white/15 flex items-center justify-center text-mist/50 hover:text-sand-300 hover:border-sand-400/40 transition-all duration-300"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs tracking-[0.25em] uppercase font-mono text-sand-400 mb-6">
                {col.title}
              </h4>
              <ul className="space-y-3.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-mist/45 text-sm hover:text-mist/80 transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Awards strip */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            {["Condé Nast 2025", "Travel + Leisure Elite", "Forbes Five Star"].map((award) => (
              <div key={award} className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-sand-400/50" />
                <span className="text-mist/35 text-xs tracking-wider font-mono">
                  {award}
                </span>
              </div>
            ))}
          </div>

          <p className="text-mist/25 text-xs tracking-wider">
            © {new Date().getFullYear()} Terra Travel Co. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
