import Reveal from "@/components/ui/Reveal";

const stats = [
  { n: "120+", l: "Spaces delivered" },
  { n: "14",   l: "Cities, four continents" },
  { n: "9",    l: "Years of experience" },
];

export default function Intro() {
  return (
    <section id="studio" className="max-w-site mx-auto px-pad py-section">
      <p className="eyebrow mb-6">— On the studio</p>
      <Reveal className="grid grid-cols-[1.4fr_1fr] gap-[clamp(40px,6vw,80px)] items-end max-[880px]:grid-cols-1 max-[880px]:gap-9">
        <p
          className="font-serif text-ink -tracking-[0.02em] font-light m-0 leading-[1.18]"
          style={{ fontSize: "clamp(28px, 3.4vw, 48px)" }}
        >
          We design interiors with the discipline of architects and the sensibility of editors. Every room is an argument for restraint — a study in <em className="italic text-accent">proportion</em>, daylight and the honest behaviour of materials over time.
        </p>
        <div className="grid grid-cols-3 gap-6 border-t border-rule pt-6">
          {stats.map(({ n, l }) => (
            <div key={l} className="flex flex-col gap-1.5">
              <strong
                className="font-serif font-normal -tracking-[0.03em]"
                style={{ fontSize: "clamp(32px, 3.4vw, 52px)" }}
              >
                {n}
              </strong>
              <span className="text-[11px] uppercase tracking-eyebrow text-muted">{l}</span>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
