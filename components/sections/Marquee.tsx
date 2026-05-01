const items = [
  "Residential",
  "Hospitality",
  "Commercial",
  "Culture & Exhibits",
  "Material Research",
  "Furniture",
];

export default function Marquee() {
  // doubled so the loop is seamless
  const all = [...items, ...items];
  return (
    <section
      aria-hidden
      className="bg-paper border-y border-rule overflow-hidden py-[22px]"
    >
      <div
        className="inline-flex gap-10 whitespace-nowrap font-serif italic text-ink -tracking-[0.01em] animate-scroll-x"
        style={{ fontSize: "clamp(22px, 2.6vw, 38px)" }}
      >
        {all.map((label, i) => (
          <span key={i} className="flex items-center gap-10">
            <span className={i % 2 === 1 ? "text-accent not-italic" : ""}>{label}</span>
            <span className="text-accent not-italic">·</span>
          </span>
        ))}
      </div>
    </section>
  );
}
