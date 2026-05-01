import { studio } from "@/lib/config";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink text-cream px-pad pt-[clamp(60px,8vh,100px)] relative overflow-hidden">
      {/* CTA */}
      <div className="max-w-site mx-auto border-b border-cream/15 pb-[clamp(40px,6vh,80px)]">
        <a
          href="#contact"
          aria-label={studio.tagline}
          className="flex flex-col font-serif font-light leading-[0.92] -tracking-[0.04em] text-cream"
          style={{ fontSize: "clamp(56px, 11vw, 180px)" }}
        >
          <span>Inquire about</span>
          <span className="inline-flex items-center gap-[clamp(20px,3vw,60px)] italic text-accent group">
            a design
            <svg
              viewBox="0 0 24 24"
              aria-hidden
              className="flex-none border border-accent rounded-full transition-[transform,background] duration-500 group-hover:rotate-[-12deg] group-hover:bg-accent group-hover:text-ink"
              style={{
                width: "clamp(40px, 7vw, 100px)",
                height: "clamp(40px, 7vw, 100px)",
                padding: "clamp(8px, 1.6vw, 22px)",
              }}
            >
              <path d="M7 17 17 7M9 7h8v8" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="square" />
            </svg>
          </span>
        </a>
      </div>

      {/* Columns */}
      <div className="max-w-site mx-auto grid grid-cols-4 gap-8 py-[clamp(40px,6vh,72px)] border-b border-cream/15 max-[880px]:grid-cols-2 max-[880px]:gap-x-6 max-[880px]:gap-y-7">
        <div>
          <span className="block text-[11px] uppercase tracking-eyebrow text-cream/50 mb-3.5">Studio</span>
          <p className="font-serif italic text-[18px] leading-[1.55] m-0">
            {studio.address.line1}<br />
            {studio.address.city}
          </p>
        </div>
        <div>
          <span className="block text-[11px] uppercase tracking-eyebrow text-cream/50 mb-3.5">Contact</span>
          <p className="font-serif italic text-[18px] leading-[1.55] m-0">
            <a href={`mailto:${studio.email}`} className="hover:text-accent transition-colors">{studio.email}</a><br />
            <a href={`tel:${studio.phone.replace(/\s/g, "")}`} className="hover:text-accent transition-colors">{studio.phone}</a>
          </p>
        </div>
        <div>
          <span className="block text-[11px] uppercase tracking-eyebrow text-cream/50 mb-3.5">Index</span>
          <ul className="font-serif italic text-[18px] leading-[1.55] m-0 list-none p-0">
            {studio.nav.slice(0, 4).map((n) => (
              <li key={n.href} className="py-1">
                <a href={n.href} className="hover:text-accent transition-colors">{n.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <span className="block text-[11px] uppercase tracking-eyebrow text-cream/50 mb-3.5">Elsewhere</span>
          <ul className="font-serif italic text-[18px] leading-[1.55] m-0 list-none p-0">
            {studio.social.map((s) => (
              <li key={s.label} className="py-1">
                <a href={s.href} className="hover:text-accent transition-colors">{s.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Base */}
      <div className="max-w-site mx-auto grid grid-cols-3 py-6 text-[11px] uppercase tracking-eyebrow text-cream/50 max-[880px]:grid-cols-1 max-[880px]:gap-2">
        <span>© {year} {studio.name} — All rights reserved.</span>
        <span className="text-center max-[880px]:text-left">A studio designed by hand, in {studio.cities[0]}.</span>
        <span className="text-right max-[880px]:text-left">v 1.0</span>
      </div>

      {/* Wordmark */}
      <h2
        aria-hidden
        className="font-serif italic font-light leading-[0.85] -tracking-[0.05em] text-transparent text-center mx-0 mt-8 -mb-[0.18em] pointer-events-none select-none whitespace-nowrap"
        style={{
          fontSize: "clamp(80px, 18vw, 320px)",
          WebkitTextStroke: "1px rgba(250,246,238,.18)",
          transform: "translateY(8%)",
        }}
      >
        {studio.name.replace(" ", "\u00A0")}
      </h2>
    </footer>
  );
}
