"use client";
import { useEffect, useRef, useState } from "react";
import { services } from "@/lib/data/services";
import { studio } from "@/lib/config";
import { ArrowLeft, ArrowRightLg, ArrowRight } from "@/components/ui/Icons";

export default function Services() {
  const railRef = useRef<HTMLDivElement>(null);
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;
    const update = () => {
      const max = rail.scrollWidth - rail.clientWidth;
      setPct(max <= 0 ? 0 : rail.scrollLeft / max);
    };
    update();
    rail.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      rail.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const scroll = (dir: 1 | -1) => {
    const rail = railRef.current;
    if (!rail) return;
    const card = rail.querySelector<HTMLElement>("[data-svc]");
    const step = (card?.getBoundingClientRect().width ?? 320) + 24;
    rail.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section id="services" className="bg-night text-cream py-section relative overflow-hidden">
      {/* atmospheric glow */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(80% 50% at 90% 10%, rgba(184,88,57,.12), transparent 60%), radial-gradient(60% 40% at 0% 100%, rgba(184,88,57,.08), transparent 70%)",
        }}
      />

      <div className="section-head relative">
        <p className="eyebrow mb-6 !text-cream/55">— What we offer</p>
        <h2 className="!text-cream">Services, in <em>four</em> movements.</h2>
      </div>

      <div
        ref={railRef}
        className="relative flex gap-[clamp(20px,2vw,36px)] px-pad pb-8 overflow-x-auto no-scrollbar snap-x snap-mandatory"
      >
        {services.map((s) => (
          <article
            key={s.number}
            data-svc
            className="flex flex-col flex-none bg-night-2 p-9 pt-9 pb-10 rounded-sharp border border-white/5 snap-start hover:border-accent/35 hover:-translate-y-1 transition-[transform,border-color] duration-300"
            style={{
              flexBasis: "clamp(280px, 30vw, 440px)",
              minHeight: "clamp(380px, 56vh, 520px)",
            }}
          >
            <span className="text-[11px] uppercase tracking-[0.18em] text-accent font-serif italic mb-7">
              {s.number}
            </span>
            <h3
              className="leading-[1.05] -tracking-[0.02em] !text-cream mb-[18px]"
              style={{ fontSize: "clamp(28px, 2.8vw, 40px)" }}
            >
              {s.title}
            </h3>
            <p className="text-cream/70 text-[14.5px] m-0 mb-6 leading-[1.55]">{s.description}</p>
            <ul className="list-none p-0 mt-auto border-t border-white/10">
              {s.items.map((item) => (
                <li
                  key={item}
                  className="py-3.5 border-b border-white/10 text-[13.5px] text-cream/85 flex items-center justify-between"
                >
                  <span>{item}</span>
                  <span className="font-serif text-accent text-[18px]">+</span>
                </li>
              ))}
            </ul>
          </article>
        ))}

        {/* End card */}
        <article
          data-svc
          className="flex flex-col flex-none p-9 rounded-sharp snap-start"
          style={{
            flexBasis: "clamp(280px, 30vw, 440px)",
            minHeight: "clamp(380px, 56vh, 520px)",
            background: "linear-gradient(155deg, #b85839 0%, #8d3f27 100%)",
          }}
        >
          <span className="text-[11px] uppercase tracking-[0.18em] text-white/70 font-serif italic mb-7">—</span>
          <h3
            className="leading-[1.05] -tracking-[0.02em] !text-cream mb-[18px]"
            style={{ fontSize: "clamp(28px, 2.8vw, 40px)" }}
          >
            Begin a project<br />with us.
          </h3>
          <p className="text-white/85 text-[14.5px] m-0 mb-6 leading-[1.55]">
            We take on a small number of new commissions each year. Tell us about yours.
          </p>
          <a href="#contact" className="btn btn-inv self-start mt-auto">
            {studio.tagline}
            <ArrowRight />
          </a>
        </article>
      </div>

      {/* Controls */}
      <div className="max-w-site mx-auto px-pad mt-6 flex items-center gap-5 relative">
        <button
          onClick={() => scroll(-1)}
          aria-label="Previous"
          className="w-[46px] h-[46px] rounded-full border border-cream/25 grid place-items-center text-cream hover:bg-accent hover:border-accent transition-colors"
        >
          <ArrowLeft />
        </button>
        <div className="flex-1 h-px bg-cream/15 relative overflow-hidden">
          <span
            className="absolute left-0 top-0 bottom-0 bg-cream"
            style={{
              width: "20%",
              transform: `translateX(${pct * 400}%)`, // 100/20 - 1 = 4 viewports of width
              transition: "transform .3s ease",
            }}
          />
        </div>
        <button
          onClick={() => scroll(1)}
          aria-label="Next"
          className="w-[46px] h-[46px] rounded-full border border-cream/25 grid place-items-center text-cream hover:bg-accent hover:border-accent transition-colors"
        >
          <ArrowRightLg />
        </button>
      </div>
    </section>
  );
}
