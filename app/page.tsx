import Image from "next/image";

const projects = [
  {
    n: "01",
    name: "Casa Marrón",
    place: "Goa, IN",
    year: "2024",
    tag: "Residential",
    img: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1400&q=80",
    span: "row",
  },
  {
    n: "02",
    name: "The Atrium",
    place: "Bengaluru, IN",
    year: "2024",
    tag: "Hospitality",
    img: "https://images.unsplash.com/photo-1618219740975-d40978bb7378?w=1200&q=80",
    span: "tall",
  },
  {
    n: "03",
    name: "Folio House",
    place: "Lisbon, PT",
    year: "2023",
    tag: "Residential",
    img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80",
    span: "wide",
  },
  {
    n: "04",
    name: "Tabula Rasa",
    place: "Mumbai, IN",
    year: "2023",
    tag: "Studio",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
    span: "small",
  },
  {
    n: "05",
    name: "Veranda 7",
    place: "Pondicherry, IN",
    year: "2022",
    tag: "Residential",
    img: "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=1200&q=80",
    span: "tall",
  },
  {
    n: "06",
    name: "House of Quiet",
    place: "Kyoto, JP",
    year: "2022",
    tag: "Residential",
    img: "https://images.unsplash.com/photo-1618220179428-22790b461013?w=1200&q=80",
    span: "small",
  },
];

const services = [
  { n: "i.", title: "Residential Interiors", body: "Full-scope homes designed as slow, lived-in environments — from spatial planning to the last drawer pull." },
  { n: "ii.", title: "Hospitality & Retail", body: "Restaurants, boutique hotels, and shops where atmosphere is the product. Concept through opening." },
  { n: "iii.", title: "Furniture & Object", body: "Bespoke pieces and limited editions, made with a network of artisans across India and Portugal." },
  { n: "iv.", title: "Art Direction", body: "Brand worlds, set design, and creative direction for studios who treat space as a medium." },
];

export default function Home() {
  return (
    <main className="grain relative overflow-x-hidden">
      {/* ───────────────────────── NAV ───────────────────────── */}
      <nav className="fixed top-0 left-0 right-0 z-50 mix-blend-difference text-cream">
        <div className="px-6 md:px-10 py-6 flex items-center justify-between text-[11px] tracking-[0.22em] uppercase">
          <span className="font-display italic text-base normal-case tracking-normal">
            InDesign
          </span>
          <div className="hidden md:flex gap-10">
            <a href="#work" className="hover:opacity-60 transition">Work</a>
            <a href="#about" className="hover:opacity-60 transition">Studio</a>
            <a href="#services" className="hover:opacity-60 transition">Practice</a>
            <a href="#contact" className="hover:opacity-60 transition">Inquire</a>
          </div>
          <span className="hidden md:inline">Est. MMXIX</span>
        </div>
      </nav>

      {/* ───────────────────────── HERO ───────────────────────── */}
      <section className="relative min-h-screen pt-28 pb-20 px-6 md:px-10">
        {/* vertical tagline in margin */}
        <div className="hidden lg:block absolute left-6 top-1/2 -translate-y-1/2 vrule text-[11px] tracking-[0.3em] uppercase text-cocoa/70 reveal reveal-delay-1">
          A studio of interiors, objects & atmospheres — №&nbsp;001
        </div>

        <div className="hidden lg:block absolute right-6 top-1/2 -translate-y-1/2 vrule text-[11px] tracking-[0.3em] uppercase text-cocoa/70 reveal reveal-delay-1">
          Bengaluru
        </div>

        <div className="relative max-w-[1400px] mx-auto pt-12 md:pt-20">
          {/* Overlapping headline composition */}
          <div className="relative">
            <h1 className="font-display text-[13vw] sm:text-[15vw] md:text-[14vw] leading-[0.85] tracking-[-0.04em] text-ink reveal pl-0 sm:pl-[5vw] md:pl-[10vw]">
              <span className="inline-block -translate-y-[0.12em]">In</span><span className="italic font-light">D</span><span className="italic font-light text-terracotta">esign</span>
            </h1>

            {/* Image overlapping the type */}
            <div className="hidden sm:block absolute right-0 md:right-[8vw] top-[6vw] w-[36vw] md:w-[28vw] aspect-[3/4] z-[-1] reveal reveal-delay-2 img-hover">
              <Image
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1000&q=80"
                alt=""
                fill
                className="object-cover sepia-[0.08] saturate-[1.05]"
                priority
              />
            </div>
          </div>

          {/* sub-block */}
          <div className="mt-10 sm:mt-[6vw] md:mt-[3vw] grid grid-cols-12 gap-6 reveal reveal-delay-3">
            <div className="col-span-12 sm:col-span-8 md:col-span-4 md:col-start-2">
              <p className="text-sm tracking-[0.2em] uppercase text-cocoa/70 mb-4">
                ✦ Interior Studio, since 2019
              </p>
              <p className="font-display text-2xl md:text-3xl leading-[1.15] text-cocoa">
                We design rooms the way poems are written —
                <span className="italic text-terracotta"> deliberately,</span> and
                with reverence for the space between.
              </p>
            </div>
          </div>
        </div>

        {/* corner ornament */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cocoa/50 reveal reveal-delay-4">
          ↓
        </div>
      </section>

      {/* ───────────────────────── PROJECTS ───────────────────────── */}
      <section id="work" className="relative px-6 md:px-10 py-24 md:py-40">
        {/* Section header — broken across the page */}
        <div className="grid grid-cols-12 gap-6 mb-20 md:mb-32">
          <div className="col-span-12 md:col-span-5">
            <span className="text-[11px] tracking-[0.3em] uppercase text-terracotta">
              §&nbsp;01 — Selected
            </span>
            <h2 className="font-display text-7xl md:text-9xl leading-[0.9] tracking-tight mt-4">
              Work,
              <span className="italic font-light">
                {" "}
                in <br />
                six rooms.
              </span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4 md:col-start-8 self-end">
            <p className="text-base md:text-lg text-cocoa leading-relaxed">
              Each project is a long conversation — with the building, with the
              people who'll inhabit it, with the makers who'll bring it through.
              A small selection from the last few years.
            </p>
          </div>
        </div>

        {/* Asymmetric grid */}
        <div className="grid grid-cols-12 gap-x-4 sm:gap-x-6 gap-y-6 sm:gap-y-10 md:gap-y-32">
          {/* 01 — large, left */}
          <ProjectCard p={projects[0]} className="col-span-12 sm:col-span-7 md:col-span-7 md:col-start-1" aspect="aspect-[4/5]" />

          {/* 02 — small, right */}
          <ProjectCard p={projects[1]} className="col-span-12 sm:col-span-5 md:col-span-4 md:col-start-9 md:mt-40" aspect="aspect-[3/4]" />

          {/* 03 — wide */}
          <ProjectCard p={projects[2]} className="col-span-12 md:col-span-9 md:col-start-3" aspect="aspect-[16/9] sm:aspect-[16/9]" />

          {/* 04 — small left */}
          <ProjectCard p={projects[3]} className="col-span-12 sm:col-span-6 md:col-span-4 md:col-start-2" aspect="aspect-square" />

          {/* 05 — tall right */}
          <ProjectCard p={projects[4]} className="col-span-12 sm:col-span-6 md:col-span-5 md:col-start-7 md:-mt-32" aspect="aspect-[3/4]" />

          {/* 06 — centered */}
          <ProjectCard p={projects[5]} className="col-span-12 sm:col-span-8 sm:col-start-3 md:col-span-5 md:col-start-4 md:mt-24" aspect="aspect-[5/4]" />
        </div>

        <div className="mt-32 flex justify-center">
          <a href="#contact" className="group inline-flex items-center gap-3 text-sm tracking-[0.25em] uppercase border-b border-ink pb-1">
            Index of all works
            <span className="font-display italic group-hover:translate-x-1 transition">→</span>
          </a>
        </div>
      </section>

      {/* ───────────────────────── ABOUT ───────────────────────── */}
      <section id="about" className="relative bg-cream-deep px-6 md:px-10 py-24 md:py-40">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 hairline w-[80%]" />

        <div className="grid grid-cols-12 gap-6 max-w-[1400px] mx-auto">
          <div className="col-span-12 md:col-span-2">
            <span className="text-[11px] tracking-[0.3em] uppercase text-terracotta">
              §&nbsp;02
            </span>
          </div>

          <div className="col-span-12 md:col-span-7">
            <h2 className="font-display text-5xl md:text-7xl leading-[1.05] tracking-tight">
              The studio keeps a
              <span className="italic"> small list</span> of clients,
              <span className="text-terracotta"> on purpose.</span>
            </h2>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 text-cocoa text-base leading-relaxed">
              <p>
                InDesign was founded by Léa Marchand in 2019 after a
                decade between Paris and Bengaluru. The studio works on a
                handful of projects each year — homes, restaurants, the
                occasional shop — chosen for the people more than the brief.
              </p>
              <p>
                Our work begins in conversation and ends in restraint. We are
                interested in rooms that age well, in honest materials, in the
                ceremony of small daily things — the lamp at dusk, the threshold
                between two textures, the way light arrives at four o'clock.
              </p>
            </div>
          </div>

          {/* Overlapping image + caption block */}
          <div className="col-span-12 md:col-span-3 md:col-start-10 relative mt-16 md:mt-0">
            <div className="aspect-[3/4] img-hover relative">
              <Image
                src="https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=800&q=80"
                alt=""
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 left-0 sm:-left-10 bg-cream px-4 py-3 text-[11px] tracking-[0.2em] uppercase shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
              Léa, in studio · 2024
            </div>
          </div>
        </div>

        {/* Pull-quote, oversized, italic */}
        <div className="max-w-[1400px] mx-auto mt-32 md:mt-48 grid grid-cols-12 gap-6">
          <blockquote className="col-span-12 md:col-span-10 md:col-start-2 font-display italic font-light text-4xl md:text-6xl leading-[1.1] text-cocoa">
            <span className="text-terracotta">&ldquo;</span>
            A room should hold its inhabitants the way a good sentence holds a
            thought — without crowding it, without hiding it.
            <span className="text-terracotta">&rdquo;</span>
          </blockquote>
          <div className="col-span-12 md:col-span-3 md:col-start-2 mt-4 text-[11px] tracking-[0.3em] uppercase text-cocoa/60">
            — From the studio manifesto, 2021
          </div>
        </div>
      </section>

      {/* ───────────────────────── SERVICES ───────────────────────── */}
      <section id="services" className="relative px-6 md:px-10 py-24 md:py-40 bg-ink text-cream">
        <div className="grid grid-cols-12 gap-6 mb-20">
          <div className="col-span-12 md:col-span-5">
            <span className="text-[11px] tracking-[0.3em] uppercase text-clay">
              §&nbsp;03 — Practice
            </span>
            <h2 className="font-display text-6xl md:text-8xl leading-[0.95] tracking-tight mt-4">
              What the
              <span className="italic font-light text-clay"> studio </span>
              does.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4 md:col-start-9 self-end">
            <p className="text-base text-cream/70 leading-relaxed">
              Four practices, run as one studio. Most projects move between
              them — a house becomes a furniture commission, a restaurant
              becomes a brand world.
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
        {/* Decorative oversized italic letter */}
        <div
          aria-hidden
          className="absolute -right-10 top-10 font-display italic font-light text-[40vw] md:text-[28vw] leading-none text-terracotta/15 select-none pointer-events-none"
        >
          I
        </div>

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

      {/* ───────────────────────── FOOTER ───────────────────────── */}
      <footer className="relative px-6 md:px-10 pb-10 pt-20 border-t border-cocoa/20">
        <div className="grid grid-cols-12 gap-6 text-[11px] tracking-[0.25em] uppercase text-cocoa/70">
          <div className="col-span-6 md:col-span-3 font-display normal-case tracking-normal italic text-base text-ink">
            InDesign
          </div>
          <div className="col-span-6 md:col-span-3">
            © MMXXVI · All rights reserved
          </div>
          <div className="col-span-6 md:col-span-3">
            Instagram · Are.na · Journal
          </div>
          <div className="col-span-6 md:col-span-3 md:text-right">
            Site №&nbsp;001 — v.0.1
          </div>
        </div>
      </footer>
    </main>
  );
}

/* ───────────────────────── SUB-COMPONENTS ───────────────────────── */

type Project = (typeof projects)[number];

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

        {/* Top row: studio label + location */}
        <div className="absolute top-0 left-0 right-0 flex justify-between items-start px-5 pt-5 text-[10px] uppercase tracking-[0.2em] text-cream/75">
          <span>InDesign</span>
          <span>{p.place}</span>
        </div>

        {/* Project title — centred vertically */}
        <div className="absolute inset-x-5 top-1/2 -translate-y-1/2">
          <h3 className="font-display italic text-[clamp(18px,2vw,28px)] leading-[1.1] -tracking-[0.02em] text-cream m-0">
            {p.name}
          </h3>
        </div>

        {/* Bottom row: category + year */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-between items-end px-5 pb-5 text-[10px] uppercase tracking-[0.2em] text-cream/65">
          <span>{p.tag}</span>
          <span>{p.year}</span>
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