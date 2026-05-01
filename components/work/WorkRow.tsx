import ProjectCard from "@/components/work/ProjectCard";
import Reveal from "@/components/ui/Reveal";
import type { ProjectCategory } from "@/lib/data/projects";
import { projectsByCategory } from "@/lib/data/projects";

type Props = {
  number: string;
  title: string; // can contain <em></em>
  intro: string;
  category: ProjectCategory;
  /** which card index gets a "tall" treatment, 0-indexed */
  tallIndex?: number;
  /** which card indices are vertically offset, 0-indexed */
  offsetIndices?: number[];
};

export default function WorkRow({
  number, title, intro, category,
  tallIndex = 0, offsetIndices = [1],
}: Props) {
  const items = projectsByCategory(category);

  return (
    <Reveal as="article" className="max-w-site mx-auto mb-[clamp(60px,9vh,110px)] py-[clamp(40px,6vh,64px)] px-pad border-t border-rule">
      <header className="grid grid-cols-[1fr_2fr] gap-8 mb-10 items-end max-[880px]:grid-cols-1">
        <div>
          <span className="text-[12px] uppercase tracking-eyebrow text-accent font-medium">
            {number}
          </span>
          <h3
            className="leading-[1.02] -tracking-[0.025em] max-w-[14ch] mt-3.5"
            style={{ fontSize: "clamp(32px, 4.4vw, 60px)" }}
            dangerouslySetInnerHTML={{ __html: title }}
          />
        </div>
        <p
          className="text-muted m-0 self-end max-w-[42ch] text-[14.5px] max-[880px]:col-span-1"
          dangerouslySetInnerHTML={{ __html: intro }}
        />
      </header>

      <div className="grid grid-cols-3 gap-[clamp(16px,1.8vw,28px)] max-[880px]:grid-cols-2 max-[540px]:grid-cols-1">
        {items.map((p, i) => (
          <ProjectCard
            key={p.slug}
            project={p}
            tall={i === tallIndex}
            offset={offsetIndices.includes(i)}
          />
        ))}
      </div>
    </Reveal>
  );
}
