"use client";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Home",     href: "#top" },
  { label: "Work",     href: "#work" },
  { label: "Studio",   href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Inquire",  href: "#contact" },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      {/* ── Full-screen menu overlay ── */}
      <div
        aria-hidden={!open}
        className={`sm:hidden fixed inset-0 z-[200] bg-ink flex flex-col transition-transform duration-500 ease-[cubic-bezier(.65,.05,.36,1)] ${
          open ? "translate-y-0" : "translate-y-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 pt-10 pb-6 border-b border-cream/10">
          <span className="text-[10px] uppercase tracking-[0.28em] text-cream/40">Navigate</span>
          <button
            onClick={close}
            aria-label="Close menu"
            className="w-9 h-9 flex items-center justify-center rounded-full border border-cream/20 text-cream/60"
          >
            <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Links */}
        <nav className="flex-1 px-6 pt-4 overflow-y-auto">
          {navLinks.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              onClick={close}
              className="flex items-baseline justify-between py-5 border-b border-cream/10 group"
            >
              <span className="font-serif text-[clamp(32px,9vw,52px)] italic font-light text-cream leading-none -tracking-[0.02em] group-hover:text-[#b85539] transition-colors duration-300">
                {item.label}
              </span>
              <em className="font-sans not-italic text-[10px] tracking-[0.18em] text-cream/30">
                0{i + 1}
              </em>
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="px-6 py-6 pb-[calc(1.5rem+72px)]">
          <a
            href="#contact"
            onClick={close}
            className="block w-full text-center py-4 rounded-full bg-[#b85539] text-cream text-[11px] uppercase tracking-[0.22em] transition-opacity hover:opacity-90"
          >
            Inquire about a project
          </a>
          <p className="mt-5 text-center text-[10px] uppercase tracking-[0.2em] text-cream/25">
            InDesign · Est. MMXIX · Bengaluru
          </p>
        </div>
      </div>

      {/* ── Bottom tab bar ── */}
      <nav
        className="sm:hidden fixed bottom-0 left-0 right-0 z-[150] bg-ink border-t border-cream/10"
        style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
      >
        <div className="grid grid-cols-4 h-[60px]">
          {/* Home */}
          <a
            href="#top"
            className="flex flex-col items-center justify-center gap-[3px] text-[#b85539]"
          >
            <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 10.5 12 3l9 7.5V21H3V10.5Z" />
              <path d="M9 21v-6h6v6" />
            </svg>
            <span className="text-[10px] uppercase tracking-[0.12em] font-medium">Home</span>
          </a>

          {/* Work */}
          <a
            href="#work"
            className="flex flex-col items-center justify-center gap-1 text-cream/40 hover:text-cream/70 transition-colors"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square">
              <rect x="3" y="3" width="8" height="8" />
              <rect x="13" y="3" width="8" height="8" />
              <rect x="3" y="13" width="8" height="8" />
              <rect x="13" y="13" width="8" height="8" />
            </svg>
            <span className="text-[10px] uppercase tracking-[0.12em]">Work</span>
          </a>

          {/* Contact */}
          <a
            href="#contact"
            className="flex flex-col items-center justify-center gap-1 text-cream/40 hover:text-cream/70 transition-colors"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 5.4 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z" />
            </svg>
            <span className="text-[10px] uppercase tracking-[0.12em]">Contact</span>
          </a>

          {/* Menu toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex flex-col items-center justify-center gap-1 text-cream/40 hover:text-cream/70 transition-colors"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square">
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
            <span className="text-[10px] uppercase tracking-[0.12em]">Menu</span>
          </button>
        </div>
      </nav>

      {/* Spacer so page content clears the tab bar */}
      <div className="sm:hidden h-[60px]" aria-hidden />
    </>
  );
}
