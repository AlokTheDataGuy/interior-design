"use client";
import { useEffect, useState } from "react";
import { studio } from "@/lib/config";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock body scroll when sheet is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header
        id="nav"
        className={`sticky top-0 z-[100] grid items-center px-pad py-[18px] transition-[border-color,background] duration-300
          [grid-template-columns:1fr_auto_1fr] max-[880px]:[grid-template-columns:1fr_auto]
          backdrop-saturate-150 backdrop-blur-md
          ${scrolled
            ? "bg-paper/90 border-b border-rule"
            : "bg-paper/75 border-b border-transparent"}`}
      >
        <a href="#top" className="flex items-center gap-3.5 font-serif text-[18px] -tracking-[0.01em]">
          <span className="font-sans font-semibold text-[11px] tracking-[0.1em] px-2 py-1.5 border border-ink rounded-full">
            {studio.initials}
          </span>
          <span className="italic font-normal">{studio.name}</span>
        </a>

        <nav
          aria-label="Primary"
          className="justify-self-center gap-7 text-[13.5px] tracking-[0.02em] hidden min-[881px]:flex"
        >
          {studio.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative py-1.5 text-ink-soft hover:text-ink transition-colors group"
            >
              {item.label}
              <span className="absolute left-0 -bottom-[1px] h-px w-0 bg-ink transition-[width] duration-[350ms] ease-[cubic-bezier(.65,.05,.36,1)] group-hover:w-full" />
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden min-[881px]:inline-flex items-center gap-2 text-[13px] px-4 py-2.5 rounded-full bg-ink text-cream border border-ink transition-colors hover:bg-accent hover:border-accent justify-self-end"
        >
          <span>Inquire</span>
          <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden>
            <path d="M5 12h14M13 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square" />
          </svg>
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="hidden max-[880px]:block relative w-10 h-10 border border-ink rounded-full justify-self-end"
        >
          <span className={`absolute left-[11px] right-[11px] h-px bg-ink transition-all duration-300 ${open ? "top-[19px] rotate-45" : "top-4"}`} />
          <span className={`absolute left-[11px] right-[11px] h-px bg-ink transition-all duration-300 ${open ? "top-[19px] -rotate-45" : "top-[22px]"}`} />
        </button>
      </header>

      {/* Mobile sheet */}
      <div
        aria-hidden={!open}
        className={`fixed inset-0 z-[90] bg-paper px-pad pt-[100px] pb-pad flex flex-col justify-between transition-transform duration-500 ease-[cubic-bezier(.65,.05,.36,1)] ${
          open ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <nav className="flex flex-col">
          {studio.nav.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="font-serif py-3.5 border-b border-rule flex items-baseline justify-between -tracking-[0.02em] leading-[1.05]"
              style={{ fontSize: "clamp(36px, 9vw, 72px)" }}
            >
              {item.label}
              <em className="font-sans not-italic text-[11px] tracking-[0.14em] text-muted">
                0{i + 1}
              </em>
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          onClick={() => setOpen(false)}
          className="mt-6 inline-block text-[14px] px-5.5 py-4 rounded-full bg-ink text-cream border border-ink text-center"
        >
          {studio.tagline} →
        </a>
      </div>
    </>
  );
}
