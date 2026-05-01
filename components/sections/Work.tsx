import WorkRow from "@/components/work/WorkRow";
import { ArrowRightLg } from "@/components/ui/Icons";

export default function Work() {
  return (
    <section id="work" className="py-section">
      <div className="section-head">
        <p className="eyebrow mb-6">— Selected work, 2019 — 2025</p>
        <h2>A catalogue of <em>rooms</em> we have made.</h2>
      </div>

      <WorkRow
        category="residential"
        number="01 / Residential"
        title="Homes that age <em>gracefully</em>."
        intro="Long-life apartments, weekend houses, family villas — designed to outlast trend cycles."
        tallIndex={0}
        offsetIndices={[1]}
      />
      <WorkRow
        category="hospitality"
        number="02 / Hospitality"
        title="Hotels &amp; rooms <em>worth returning</em> to."
        intro="Boutique hotels, restaurants and bars where the interior is the reason guests come back."
        tallIndex={1}
        offsetIndices={[0]}
      />
      <WorkRow
        category="commercial"
        number="03 / Commercial"
        title="Workplaces with a <em>second life</em>."
        intro="Studios, offices and retail — designed to be flexible, characterful, and never corporate."
        tallIndex={2}
        offsetIndices={[2]}
      />
      <WorkRow
        category="culture"
        number="04 / Culture &amp; Exhibits"
        title="Spaces for <em>quiet attention</em>."
        intro="Galleries, pavilions and exhibition design — environments built to defer to the work they hold."
        tallIndex={0}
        offsetIndices={[1]}
      />

      <a
        href="#contact"
        className="ml-pad flex items-center gap-3 w-max font-serif italic text-[22px] py-4 px-7 border-b border-ink group"
      >
        See the full archive
        <ArrowRightLg className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
      </a>
    </section>
  );
}
