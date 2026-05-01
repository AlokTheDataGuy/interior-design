import Image from "next/image";
import type { Project } from "@/lib/data/projects";

export default function ProjectCard({
  project,
  tall = false,
  offset = false,
}: {
  project: Project;
  tall?: boolean;
  offset?: boolean;
}) {
  return (
    <a
      href={`#`}
      className="block relative overflow-hidden group"
      style={offset ? { transform: "translateY(clamp(20px, 4vw, 56px))" } : undefined}
    >
      <div
        className={`relative overflow-hidden rounded-sharp bg-paper-2 ${
          tall ? "aspect-[4/6.2]" : "aspect-[4/5]"
        }`}
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 880px) 100vw, (max-width: 1480px) 33vw, 480px"
          loading="lazy"
          className="object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(.2,.7,.2,1)] group-hover:scale-105"
        />

        {/* Permanent dark scrim so text is always readable */}
        <span className="absolute inset-0 bg-gradient-to-b from-ink/55 via-ink/20 to-ink/65" />

        {/* Top row: studio label + location */}
        <div className="absolute top-0 left-0 right-0 flex justify-between items-start px-4 pt-4 text-[10px] uppercase tracking-widest text-cream/80">
          <span>InDesign</span>
          <span className="text-right leading-[1.3]">{project.location}</span>
        </div>

        {/* Project title — vertically centred */}
        <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 text-cream">
          <p className="m-0 font-serif italic text-[clamp(15px,1.5vw,22px)] leading-[1.15] -tracking-[0.02em]">
            {project.title}
          </p>
        </div>

        {/* Bottom row: year */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-between items-end px-4 pb-4 text-[10px] uppercase tracking-widest text-cream/70">
          <span>{project.category}</span>
          <span>{project.year}</span>
        </div>
      </div>
    </a>
  );
}
