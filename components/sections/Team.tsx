import Image from "next/image";
import { team } from "@/lib/data/team";
import Reveal from "@/components/ui/Reveal";

export default function Team() {
  return (
    <section className="max-w-site mx-auto px-pad py-section grid grid-cols-[1.1fr_1fr] gap-[clamp(40px,6vw,80px)] items-center max-[880px]:grid-cols-1">
      <Reveal>
        <p className="eyebrow mb-6">— The studio</p>
        <h2
          className="leading-[0.98] -tracking-[0.025em] mb-6 max-w-[12ch]"
          style={{ fontSize: "clamp(40px, 5.4vw, 80px)" }}
        >
          A small team. A <em>long</em> view.
        </h2>
        <p className="text-ink-soft text-[16px] max-w-[50ch] m-0 mb-10">
          {`Atelier Nord is led by a tight team of architects, designers and makers. We keep the studio deliberately small — fewer projects, more attention, longer relationships with the people who commission us.`}
        </p>
        <div className="grid grid-cols-2 gap-x-6 gap-y-7">
          {team.map((p) => (
            <div key={p.name} className="flex flex-col gap-1.5 group">
              <div className="relative w-full aspect-square rounded-full overflow-hidden mb-3 max-w-[140px] bg-paper-2 grayscale-[.2] group-hover:grayscale-0 transition-all">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  sizes="140px"
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
              <strong className="font-serif italic font-normal text-[19px]">{p.name}</strong>
              <span className="text-[11px] uppercase tracking-eyebrow text-muted">{p.role}</span>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal delay={120}>
        <figure className="relative aspect-[4/5] rounded-sharp overflow-hidden max-[880px]:aspect-[16/11] m-0">
          <Image
            src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1100&q=80"
            alt="A quiet, daylit studio with sketches on a long oak table"
            fill
            sizes="(max-width: 880px) 100vw, 50vw"
            className="object-cover"
          />
        </figure>
      </Reveal>
    </section>
  );
}
