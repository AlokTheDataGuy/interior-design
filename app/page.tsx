import Image from "next/image";
import MobileNav from "@/components/layout/MobileNav";

type WorkProject = { name: string; place: string; year: string; tag: string; img: string };
type WorkCategory = { n: string; title: string; desc: string; projects: WorkProject[] };

const work: WorkCategory[] = [
  {
    n: "01",
    title: "Private Residences",
    desc: "Homes, apartments and weekend houses made to outlast trend cycles — designed around how life is actually lived, not how it's photographed.",
    projects: [
      { name: "The Iyer Home",          place: "Sadashivanagar, Bengaluru", year: "2024", tag: "Residence", img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=92" },
      { name: "Apartment on 1st Main",  place: "Koramangala, Bengaluru",   year: "2023", tag: "Apartment", img: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1200&q=92" },
      { name: "A Weekend House",         place: "Coorg, Karnataka",         year: "2022", tag: "Villa",     img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=92" },
    ],
  },
  {
    n: "02",
    title: "Hospitality & Dining",
    desc: "Restaurants, cafés and boutique stays where atmosphere is the offering, not the afterthought. Concept through opening.",
    projects: [
      { name: "The Bungalow",  place: "Chikmagalur, Karnataka",  year: "2024", tag: "Boutique Stay", img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1170&auto=format&fit=crop" },
      { name: "Noon",          place: "Indiranagar, Bengaluru",  year: "2023", tag: "Restaurant",    img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=92" },
      { name: "The Still Bar", place: "UB City, Bengaluru",      year: "2022", tag: "Bar & Lounge",  img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=92" },
    ],
  },
  {
    n: "03",
    title: "Workplaces & Studios",
    desc: "Offices, studios and showrooms designed to feel like somewhere — not anywhere. Characterful, never corporate.",
    projects: [
      { name: "Studio, 100ft Road",  place: "Indiranagar, Bengaluru", year: "2025", tag: "Studio", img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=92" },
      { name: "The Workshop",        place: "HSR Layout, Bengaluru",  year: "2024", tag: "Office", img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=92" },
      { name: "Flagship Store",      place: "MG Road, Bengaluru",     year: "2023", tag: "Retail", img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=92" },
    ],
  },
  {
    n: "04",
    title: "Cultural & Public",
    desc: "Galleries, pavilions and exhibition spaces that step entirely aside for the work — and the people — they hold.",
    projects: [
      { name: "Design Week Pavilion",  place: "Bengaluru",                  year: "2024", tag: "Pavilion",   img: "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1200&q=92" },
      { name: "Group Show",            place: "1 Shanthi Road, Bengaluru",  year: "2023", tag: "Gallery",    img: "https://images.unsplash.com/photo-1544967082-d9d25d867d66?auto=format&fit=crop&w=1200&q=92" },
      { name: "Photo Exhibition",      place: "Rangoli Metro Art Centre",   year: "2022", tag: "Exhibition", img: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?auto=format&fit=crop&w=1200&q=92" },
    ],
  },
];

const team = [
  { name: "Léa Marchand",  role: "Founder & Principal",   img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=90" },
  { name: "Arjun Rao",     role: "Senior Designer",       img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=90" },
  { name: "Priya Menon",   role: "Studio Director",       img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=90" },
];

const services = [
  { n: "i.",   title: "Consultation",    body: "Every project begins with a conversation. We sit with you, understand how you inhabit a space, and translate that into a clear, honest direction — before a single decision is made." },
  { n: "ii.",  title: "Design Planning", body: "From the first sketch to the final specification, we build a complete design roadmap — layouts, material palettes, lighting, and furniture — so nothing is left to chance on site." },
  { n: "iii.", title: "Space Styling",   body: "The last 10% makes the room. We handle the finishing layer — art placement, textiles, objects, greenery — the details that turn a well-designed space into one that feels lived in and whole." },
  { n: "iv.",  title: "Renovation",      body: "Structural changes, contractor coordination, material sourcing — we manage the full scope of a renovation so the process is as considered as the outcome." },
];

export default function Home() {
  return (
    <main className="grain relative overflow-x-hidden">
      {/* ───────────────────────── NAV ───────────────────────── */}
      <nav className="fixed top-0 left-0 right-0 z-50 mix-blend-difference text-cream">
        <div className="px-6 md:px-10 py-6 flex items-center justify-between text-[11px] tracking-[0.22em] uppercase">
          <span className="hidden sm:inline font-display italic text-base normal-case tracking-normal">
            InDesign
          </span>
          <div className="hidden md:flex gap-10">
            <a href="#work" className="hover:opacity-60 transition">Work</a>
            <a href="#about" className="hover:opacity-60 transition">Studio</a>
            <a href="#services" className="hover:opacity-60 transition">Services</a>
            <a href="#contact" className="hover:opacity-60 transition">Inquire</a>
          </div>
          <span className="hidden md:inline">Est. MMXIX</span>
        </div>
      </nav>

      {/* ───────────────────────── HERO — MOBILE ───────────────────────── */}
      <section className="sm:hidden relative h-screen overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1000&q=80"
          alt="Interior studio"
          fill
          priority
          className="object-cover sepia-[0.06] saturate-[1.08]"
        />

        {/* Gradient: subtle top, heavy bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-transparent to-ink/90" />

        {/* Top bar */}
        <div className="absolute top-0 left-0 right-0 flex justify-between items-center px-6 pt-8 text-[10px] uppercase tracking-[0.28em] text-cream/55">
          <span className="font-display italic text-base normal-case tracking-normal text-cream">InDesign</span>
          <span>Bengaluru · Est. MMXIX</span>
        </div>

        {/* Bottom content */}
        <div className="absolute bottom-0 left-0 right-0 px-6 pb-[88px]">
          <p className="text-[9px] uppercase tracking-[0.3em] text-cream/45 mb-3">
            ✦ Interior Studio, since 2019
          </p>
          <h1 className="font-display text-[19vw] leading-[0.85] tracking-[-0.04em] text-cream">
            <span className="italic font-light">In</span><span className="italic font-light text-terracotta">Design</span>
          </h1>
          <div className="mt-5 border-t border-cream/15 pt-4">
            <p className="text-sm text-cream/65 leading-relaxed max-w-[30ch]">
              We design rooms the way poems are written —
              <span className="italic text-terracotta"> deliberately,</span> and
              with reverence for the space between.
            </p>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-[72px] left-1/2 -translate-x-1/2 text-cream/30 text-xs tracking-widest">↓</div>
      </section>

      {/* ───────────────────────── HERO — DESKTOP ───────────────────────── */}
      <section className="hidden sm:block relative min-h-screen pt-28 pb-20 px-6 md:px-10">
        {/* vertical taglines */}
        <div className="hidden lg:block absolute left-6 top-1/2 -translate-y-1/2 vrule text-[11px] tracking-[0.3em] uppercase text-cocoa/70 reveal reveal-delay-1">
          A studio of interiors, objects & atmospheres — №&nbsp;001
        </div>
        <div className="hidden lg:block absolute right-6 top-1/2 -translate-y-1/2 vrule text-[11px] tracking-[0.3em] uppercase text-cocoa/70 reveal reveal-delay-1">
          Bengaluru
        </div>

        <div className="relative max-w-[1400px] mx-auto pt-12 md:pt-20">
          <div className="relative">
            <h1 className="font-display text-[15vw] md:text-[14vw] leading-[0.85] tracking-[-0.04em] text-ink reveal pl-[5vw] md:pl-[10vw]">
              <span className="inline-block -translate-y-[0.12em]">In</span><span className="italic font-light">D</span><span className="italic font-light text-terracotta">esign</span>
            </h1>
            <div className="absolute right-0 md:right-[8vw] top-[6vw] w-[36vw] md:w-[28vw] aspect-[3/4] z-[-1] reveal reveal-delay-2 img-hover">
              <Image
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1000&q=80"
                alt=""
                fill
                className="object-cover sepia-[0.08] saturate-[1.05]"
                priority
              />
            </div>
          </div>

          <div className="mt-[6vw] md:mt-[3vw] grid grid-cols-12 gap-6 reveal reveal-delay-3">
            <div className="col-span-8 md:col-span-4 md:col-start-2">
              <p className="text-sm tracking-[0.2em] uppercase text-cocoa/70 mb-4">
                ✦ Interior Studio, since 2019
              </p>
              <p className="font-display text-2xl md:text-3xl leading-[1.2] text-cocoa max-w-[30ch]">
                We design rooms the way poems are written —
                <span className="italic text-terracotta"> deliberately,</span> and
                with reverence for the space between.
              </p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cocoa/50 reveal reveal-delay-4">↓</div>
      </section>

      {/* ───────────────────────── PROJECTS ───────────────────────── */}
      <section id="work" className="relative px-6 md:px-10 py-24 md:py-40">
        {/* Section header */}
        <div className="grid grid-cols-12 gap-6 mb-20 md:mb-28">
          <div className="col-span-12 md:col-span-5">
            <span className="text-[11px] tracking-[0.3em] uppercase text-terracotta">
              §&nbsp;01 — Selected Work
            </span>
            <h2 className="font-display text-7xl md:text-9xl leading-[0.9] tracking-tight mt-4">
              Work,
              <span className="italic font-light">
                {" "}
                by <br />
                discipline.
              </span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4 md:col-start-8 self-end">
            <p className="text-base md:text-lg text-cocoa leading-relaxed">
              Four core services, each treated as its own discipline.
              Most commissions begin in one and move through several others.
              A selection from the last six years.
            </p>
          </div>
        </div>

        {/* Category rows */}
        <div className="space-y-20 md:space-y-24">
          {work.map((cat) => (
            <div key={cat.n}>
              {/* Category label */}
              <div className="flex items-baseline gap-5 border-t border-cocoa/15 pt-5 pb-7">
                <span className="num text-xs text-terracotta tracking-[0.28em] uppercase">{cat.n}</span>
                <h3 className="font-display text-3xl md:text-4xl tracking-tight">{cat.title}</h3>
              </div>

              {/* 3-column project grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                {cat.projects.map((p) => (
                  <ProjectCard key={p.name} p={p} aspect="aspect-[4/3]" />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 md:mt-32 flex justify-center">
          <a href="#contact" className="group inline-flex items-center gap-3 text-sm tracking-[0.25em] uppercase border-b border-ink pb-1">
            Start a conversation
            <span className="font-display italic group-hover:translate-x-1 transition">→</span>
          </a>
        </div>
      </section>

      {/* ───────────────────────── ABOUT ───────────────────────── */}
      <section id="about" className="relative bg-cream-deep px-6 md:px-10 py-16 md:py-24">

        {/* Top row: content left + quote right */}
        <div className="grid grid-cols-12 gap-6 max-w-[1400px] mx-auto items-start">
          {/* Label */}
          <div className="col-span-12 md:col-span-1">
            <span className="text-[11px] tracking-[0.3em] uppercase text-terracotta">§&nbsp;02</span>
          </div>

          {/* Heading + paragraphs */}
          <div className="col-span-12 md:col-span-6">
            <h2 className="font-display text-4xl md:text-5xl leading-[1.05] tracking-tight">
              The studio keeps a
              <span className="italic"> small list</span> of clients,
              <span className="text-terracotta"> on purpose.</span>
            </h2>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 text-cocoa text-sm leading-relaxed">
              <p>
                Founded in 2019, InDesign works on a handful of projects each year —
                homes, restaurants, the occasional shop — chosen for the people more than the brief.
              </p>
              <p>
                We are interested in rooms that age well, honest materials, and the
                ceremony of small daily things.
              </p>
            </div>
          </div>

          {/* Pull-quote — right column on desktop, below on mobile */}
          <div className="col-span-12 md:col-span-4 md:col-start-9 md:self-center mt-10 md:mt-0 border-l-0 md:border-l border-terracotta/30 md:pl-8">
            <blockquote className="font-display italic font-light text-2xl md:text-[1.6rem] leading-[1.25] text-cocoa">
              <span className="text-terracotta not-italic">&ldquo;</span>
              A room should hold its inhabitants the way a good sentence holds a
              thought — without crowding it, without hiding it.
              <span className="text-terracotta not-italic">&rdquo;</span>
            </blockquote>
            <p className="mt-5 text-[10px] tracking-[0.3em] uppercase text-cocoa/50">
              — From the studio manifesto, 2021
            </p>
          </div>
        </div>

        {/* Team */}
        <div className="max-w-[1400px] mx-auto mt-16 md:mt-20">
          <div className="flex items-baseline gap-5 mb-10 border-t border-cocoa/15 pt-6">
            <span className="text-[11px] tracking-[0.3em] uppercase text-terracotta">Our Team</span>
            <h3 className="font-display text-3xl md:text-4xl tracking-tight">Behind the design.</h3>
          </div>

          {/* Staircase cards */}
          <div className="overflow-x-auto -mx-6 px-6 md:mx-0 md:px-0 md:overflow-visible">
          <div className="flex items-start gap-4 w-max md:w-full">
              {team.map((member, i) => (
                <div
                  key={member.name}
                  className={`relative rounded-[3px] overflow-hidden w-[260px] shrink-0 md:w-auto md:flex-1 ${
                    i === 1 ? "md:mt-[60px]" : i === 2 ? "md:mt-[120px]" : ""
                  }`}
                  style={{ aspectRatio: "3/4" }}
                >
                  <Image src={member.img} alt={member.name} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-b from-ink/50 via-ink/10 to-ink/65" />

                  {/* Role — top right */}
                  <span className="absolute top-6 right-6 text-[9px] uppercase tracking-[0.22em] text-cream/80">
                    {member.role}
                  </span>

                  {/* Name — bottom left */}
                  <p className="absolute bottom-14 left-6 font-display italic text-base leading-tight text-cream">
                    {member.name}
                  </p>

                  {/* Social icons */}
                  <div className="absolute bottom-6 left-6 flex gap-2">
                    {[
                      { label: "Instagram", d: "M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0 1.802c-3.146 0-3.5.011-4.73.068-1.215.055-2.07.272-2.742.545A4.456 4.456 0 0 0 2.943 6.163c-.273.672-.49 1.527-.545 2.742C2.34 10.134 2.33 10.488 2.33 12c0 3.146.011 3.5.068 4.73.055 1.215.272 2.07.545 2.742a4.456 4.456 0 0 0 1.585 1.585c.672.273 1.527.49 2.742.545 1.23.057 1.584.068 4.73.068s3.5-.011 4.73-.068c1.215-.055 2.07-.272 2.742-.545a4.456 4.456 0 0 0 1.585-1.585c.273-.672.49-1.527.545-2.742.057-1.23.068-1.584.068-4.73s-.011-3.5-.068-4.73c-.055-1.215-.272-2.07-.545-2.742a4.456 4.456 0 0 0-1.585-1.585c-.672-.273-1.527-.49-2.742-.545C15.5 3.976 15.146 3.965 12 3.965zm0 3.065A4.97 4.97 0 0 1 16.97 12 4.97 4.97 0 0 1 12 16.97 4.97 4.97 0 0 1 7.03 12 4.97 4.97 0 0 1 12 7.03zm0 1.802A3.168 3.168 0 1 0 12 15.168 3.168 3.168 0 0 0 12 8.832zm4.965-2.87a1.17 1.17 0 1 1 0 2.34 1.17 1.17 0 0 1 0-2.34z" },
                      { label: "LinkedIn", d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
                    ].map((icon) => (
                      <button
                        key={icon.label}
                        aria-label={icon.label}
                        className="w-7 h-7 rounded-full bg-cream flex items-center justify-center hover:bg-terracotta transition-colors duration-200 group"
                      >
                        <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor" className="text-ink group-hover:text-cream transition-colors duration-200">
                          <path d={icon.d} />
                        </svg>
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────── SERVICES ───────────────────────── */}
      <section id="services" className="relative px-6 md:px-10 py-24 md:py-40 bg-ink text-cream">
        <div className="grid grid-cols-12 gap-6 mb-20">
          <div className="col-span-12 md:col-span-5">
            <span className="text-[11px] tracking-[0.3em] uppercase text-clay">
              §&nbsp;03 — Services
            </span>
            <h2 className="font-display text-6xl md:text-8xl leading-[0.95] tracking-tight mt-4">
              What the
              <span className="italic font-light text-clay"> studio </span>
              provides.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4 md:col-start-9 self-end">
            <p className="text-base text-cream/70 leading-relaxed">
              From the first brief to the final walkthrough, we offer
              end-to-end design services — tailored to the scale of your
              project and the way you want to work.
            </p>
          </div>
        </div>

        <ul className="border-t border-cream/20">
          {services.map((s) => (
            <li
              key={s.n}
              className="group grid grid-cols-12 gap-6 py-10 md:py-14 border-b border-cream/20 hover:bg-cocoa/40 transition-colors duration-500 px-2"
            >
              <div className="col-span-2 md:col-span-1">
                <span className="num text-3xl md:text-5xl text-clay">
                  {s.n}
                </span>
              </div>
              <div className="col-span-10 md:col-span-6">
                <h3 className="font-display text-3xl md:text-5xl tracking-tight group-hover:italic transition-all duration-500">
                  {s.title}
                </h3>
              </div>
              <div className="col-span-12 md:col-span-4 md:col-start-9 text-cream/70 text-sm md:text-base leading-relaxed self-center">
                {s.body}
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* ───────────────────────── CONTACT ───────────────────────── */}
      <section
        id="contact"
        className="relative px-6 md:px-10 py-24 md:py-40 overflow-hidden"
      >
        <div className="relative grid grid-cols-12 gap-6 max-w-[1400px] mx-auto">
          <div className="col-span-12 md:col-span-7">
            <span className="text-[11px] tracking-[0.3em] uppercase text-terracotta">
              §&nbsp;04 — Inquire
            </span>
            <h2 className="font-display text-6xl md:text-[9rem] leading-[0.9] tracking-tight mt-4">
              Let's make
              <br />
              <span className="italic font-light">something</span>
              <br />
              <span className="text-terracotta">slow.</span>
            </h2>

            <p className="mt-10 max-w-md text-cocoa leading-relaxed">
              We accept new commissions twice a year — typically in the early
              spring and again in autumn. If you have a space, a brief, or a
              quiet idea, we'd be glad to hear from you.
            </p>
          </div>

          <div className="col-span-12 md:col-span-4 md:col-start-9 mt-12 md:mt-24">
            <form className="space-y-8">
              <Field label="Your name" name="name" />
              <Field label="Email" name="email" type="email" />
              <Field label="The project, in a sentence" name="brief" />
              <button
                type="button"
                className="w-full mt-4 group flex items-center justify-between border-b border-ink pb-3 text-sm tracking-[0.25em] uppercase"
              >
                Send inquiry
                <span className="font-display italic text-2xl group-hover:translate-x-2 transition">
                  →
                </span>
              </button>
            </form>

            <div className="mt-16 text-[11px] tracking-[0.25em] uppercase text-cocoa/70 space-y-1">
              <p>Studio · Indiranagar, Bengaluru 560038</p>
              <p>hello@indesign.studio</p>
              <p>+91 · on request</p>
            </div>
          </div>
        </div>
      </section>

      <MobileNav />

      {/* ───────────────────────── FOOTER ───────────────────────── */}
      <footer className="relative bg-ink text-cream px-6 md:px-10 pt-16 md:pt-20 pb-10">

        {/* Top row */}
        <div className="grid grid-cols-12 gap-y-12 gap-x-6 max-w-[1400px] mx-auto border-b border-cream/10 pb-12 md:pb-16">

          {/* Brand + tagline */}
          <div className="col-span-12 md:col-span-4">
            <p className="font-display italic text-3xl md:text-4xl text-cream tracking-tight">InDesign</p>
            <p className="mt-3 text-[11px] tracking-[0.22em] uppercase text-cream/40">
              Est. MMXIX · Bengaluru, India
            </p>
            <p className="mt-5 text-sm text-cream/55 leading-relaxed max-w-[28ch]">
              A studio of interiors, objects and atmospheres — designed to outlast the moment.
            </p>
          </div>

          {/* Nav links */}
          <div className="col-span-6 md:col-span-2 md:col-start-6">
            <p className="text-[10px] tracking-[0.3em] uppercase text-cream/30 mb-5">Navigate</p>
            <ul className="space-y-3 text-sm text-cream/70">
              {[["Work", "#work"], ["Studio", "#about"], ["Services", "#services"], ["Inquire", "#contact"]].map(([label, href]) => (
                <li key={href}>
                  <a href={href} className="hover:text-cream transition-colors duration-200">{label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-6 md:col-span-2">
            <p className="text-[10px] tracking-[0.3em] uppercase text-cream/30 mb-5">Contact</p>
            <ul className="space-y-3 text-sm text-cream/70">
              <li>Indiranagar, Bengaluru</li>
              <li>560038, Karnataka</li>
              <li className="pt-1">
                <a href="mailto:hello@indesign.studio" className="hover:text-cream transition-colors duration-200">
                  hello@indesign.studio
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="col-span-12 md:col-span-3 md:col-start-10">
            <p className="text-[10px] tracking-[0.3em] uppercase text-cream/30 mb-5">Follow</p>
            <div className="flex flex-wrap gap-3">
              {[
                { label: "Instagram", href: "#", d: "M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0 1.802c-3.146 0-3.5.011-4.73.068-1.215.055-2.07.272-2.742.545A4.456 4.456 0 0 0 2.943 6.163c-.273.672-.49 1.527-.545 2.742C2.34 10.134 2.33 10.488 2.33 12c0 3.146.011 3.5.068 4.73.055 1.215.272 2.07.545 2.742a4.456 4.456 0 0 0 1.585 1.585c.672.273 1.527.49 2.742.545 1.23.057 1.584.068 4.73.068s3.5-.011 4.73-.068c1.215-.055 2.07-.272 2.742-.545a4.456 4.456 0 0 0 1.585-1.585c.273-.672.49-1.527.545-2.742.057-1.23.068-1.584.068-4.73s-.011-3.5-.068-4.73c-.055-1.215-.272-2.07-.545-2.742a4.456 4.456 0 0 0-1.585-1.585c-.672-.273-1.527-.49-2.742-.545C15.5 3.976 15.146 3.965 12 3.965zm0 3.065A4.97 4.97 0 0 1 16.97 12 4.97 4.97 0 0 1 12 16.97 4.97 4.97 0 0 1 7.03 12 4.97 4.97 0 0 1 12 7.03zm0 1.802A3.168 3.168 0 1 0 12 15.168 3.168 3.168 0 0 0 12 8.832zm4.965-2.87a1.17 1.17 0 1 1 0 2.34 1.17 1.17 0 0 1 0-2.34z" },
                { label: "LinkedIn",  href: "#", d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
                { label: "Pinterest", href: "#", d: "M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" },
                { label: "YouTube",   href: "#", d: "M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-10 h-10 rounded-full border border-cream/15 flex items-center justify-center text-cream/50 hover:border-terracotta hover:text-terracotta transition-colors duration-300"
                >
                  <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
                    <path d={s.d} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="max-w-[1400px] mx-auto pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 text-[10px] tracking-[0.22em] uppercase text-cream/30">
          <span>© MMXXVI InDesign Studio. All rights reserved.</span>
          <span>Site №&nbsp;001 — v.0.1</span>
        </div>
      </footer>

      {/* ───────────────────────── WHATSAPP BTN ───────────────────────── */}
      <a
        href="https://wa.me/919999999999"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed right-5 z-[140] flex items-center justify-center rounded-full shadow-lg transition-transform duration-300 hover:scale-110 bottom-[76px] sm:bottom-6 w-10 h-10 sm:w-[52px] sm:h-[52px] bg-ink"
      >
        <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
        </svg>
      </a>
    </main>
  );
}

/* ───────────────────────── SUB-COMPONENTS ───────────────────────── */

type Project = WorkProject;

function ProjectCard({
  p,
  className,
  aspect,
}: {
  p: Project;
  className?: string;
  aspect: string;
}) {
  return (
    <article className={`group relative overflow-hidden ${className ?? ""}`}>
      <div className={`relative ${aspect} overflow-hidden`}>
        <Image
          src={p.img}
          alt={p.name}
          fill
          className="object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(.2,.7,.2,1)] group-hover:scale-105"
          sizes="(min-width: 768px) 50vw, 100vw"
        />

        {/* Dark scrim for text legibility */}
        <span className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/15 to-ink/60" />

        {/* Top row: tag (desktop only) + location */}
        <div className="absolute top-0 left-0 right-0 flex justify-between items-start px-5 pt-5 text-[10px] uppercase tracking-[0.2em] text-cream/75">
          <span className="hidden md:inline">{p.tag}</span>
          <span className="ml-auto">{p.place}</span>
        </div>

        {/* Bottom row: project name + year (desktop) / tag (mobile) */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-between items-end px-5 pb-5">
          <h3 className="font-display italic text-[clamp(14px,1.4vw,20px)] leading-[1.1] -tracking-[0.02em] text-cream">
            {p.name}
          </h3>
          <span className="text-[10px] uppercase tracking-[0.2em] text-cream/65 pb-[3px]">
            <span className="md:hidden">{p.tag}</span>
            <span className="hidden md:inline">{p.year}</span>
          </span>
        </div>
      </div>
    </article>
  );
}

function Field({
  label,
  name,
  type = "text",
}: {
  label: string;
  name: string;
  type?: string;
}) {
  return (
    <label className="block group">
      <span className="text-[10px] tracking-[0.3em] uppercase text-cocoa/60">
        {label}
      </span>
      <input
        type={type}
        name={name}
        className="mt-2 w-full bg-transparent border-b border-cocoa/30 py-2 font-display text-xl focus:outline-none focus:border-terracotta transition"
      />
    </label>
  );
}