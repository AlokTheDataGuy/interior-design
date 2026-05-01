import Image from "next/image";
import { studio } from "@/lib/config";
import { ArrowRight, ArrowUpRight } from "@/components/ui/Icons";

export default function Hero() {
  return (
    <section className="px-pad max-w-site mx-auto relative pt-[clamp(48px,8vh,100px)] pb-[clamp(40px,6vh,80px)]">
      {/* Eyebrow with pulse dot */}
      <div className="flex items-center gap-2.5 mb-[clamp(28px,4vh,48px)] text-[12px] uppercase tracking-uppish text-muted">
        <span className="w-2 h-2 rounded-full bg-accent animate-pulse-soft" />
        <span>Studio est. {studio.established} · {studio.cities.join(" / ")}</span>
      </div>

      <h1
        className="font-serif font-normal m-0 mb-[clamp(36px,6vh,72px)] leading-[0.92] -tracking-[0.035em]"
        style={{
          fontSize: "clamp(54px, 11.2vw, 188px)",
          fontVariationSettings: '"opsz" 144, "SOFT" 30',
        }}
      >
        <span className="block overflow-hidden">
          <span className="inline-block animate-rise [animation-delay:50ms]">
            <em className="text-accent italic">Quiet</em> interiors,
          </span>
        </span>
        <span className="block overflow-hidden">
          <span className="inline-block animate-rise [animation-delay:180ms]">
            designed to be
          </span>
        </span>
        <span className="block overflow-hidden">
          <span className="inline-block animate-rise [animation-delay:320ms]">
            <span
              aria-hidden
              className="inline-block rounded-full overflow-hidden align-middle mr-[0.15em] -mb-[0.15em] -translate-y-[0.05em] shadow-[0_6px_24px_rgba(40,30,20,.18)] group/img"
              style={{
                width: "clamp(70px, 11vw, 200px)",
                height: "clamp(50px, 7.6vw, 140px)",
              }}
            >
              <Image
                src="https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=420&q=70"
                alt=""
                width={420}
                height={280}
                className="w-full h-full object-cover transition-transform duration-[6s] hover:scale-110"
              />
            </span>
            lived&nbsp;<em className="text-accent italic">in</em>.
          </span>
        </span>
      </h1>

      {/* Bottom row */}
      <div className="grid grid-cols-[1fr_auto] gap-10 items-end pb-[clamp(40px,6vh,72px)] border-b border-rule max-[880px]:grid-cols-1 max-[880px]:gap-7">
        <p
          className="m-0 text-ink-soft leading-[1.55] max-w-[52ch]"
          style={{ fontSize: "clamp(15px, 1.15vw, 18px)" }}
        >
          A multi-disciplinary practice shaping residences, hotels, workplaces and cultural spaces — where material, light and proportion are treated as the brief, not the finish.
        </p>
        <div className="flex flex-wrap gap-3">
          <a href="#work" className="btn btn-ghost">
            Selected work
            <ArrowUpRight />
          </a>
          <a href="#contact" className="btn btn-solid">
            {studio.tagline}
            <ArrowRight />
          </a>
        </div>
      </div>

      {/* Hero image */}
      <figure className="relative mt-[clamp(40px,6vh,72px)] overflow-hidden rounded-sharp aspect-[16/8.5] max-[880px]:aspect-[4/5]">
        <Image
          src="https://images.unsplash.com/photo-1616137466211-f939a420be84?auto=format&fit=crop&w=2000&q=80"
          alt="A sunlit minimal living room with travertine and natural linen"
          fill
          priority
          sizes="(max-width: 1480px) 100vw, 1480px"
          className="object-cover animate-hero-in"
        />

      </figure>
    </section>
  );
}
