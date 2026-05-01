"use client";
import { useState, type FormEvent } from "react";
import { studio, waLink } from "@/lib/config";
import { ArrowRight, Whatsapp } from "@/components/ui/Icons";

type FormState = {
  name: string; email: string; phone: string;
  type: string; city: string; budget: string; message: string;
};

const initial: FormState = {
  name: "", email: "", phone: "", type: "", city: "", budget: "", message: "",
};

export default function Contact() {
  const [data, setData] = useState<FormState>(initial);
  const [note, setNote] = useState<{ text: string; ok: boolean } | null>(null);

  const set = <K extends keyof FormState>(k: K, v: FormState[K]) =>
    setData((d) => ({ ...d, [k]: v }));

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const required: (keyof FormState)[] = ["name", "email", "type", "message"];
    const missing = required.filter((k) => !data[k].trim());
    if (missing.length) {
      setNote({ text: `Please fill in: ${missing.join(", ")}.`, ok: false });
      return;
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(data.email)) {
      setNote({ text: "That email address looks off — could you double-check?", ok: false });
      return;
    }

    const text = [
      `New inquiry — ${studio.name}`,
      `—`,
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      data.phone ? `Phone: ${data.phone}` : null,
      `Project type: ${data.type}`,
      data.city ? `City: ${data.city}` : null,
      data.budget ? `Budget: ${data.budget}` : null,
      `—`,
      data.message,
    ].filter(Boolean).join("\n");

    window.open(waLink(text), "_blank", "noopener,noreferrer");
    setNote({
      text: `Thank you, ${data.name.split(" ")[0]}. We've opened WhatsApp with your message — or we'll write back to ${data.email} within two working days.`,
      ok: true,
    });
    setData(initial);
  };

  return (
    <section
      id="contact"
      className="max-w-site mx-auto px-pad py-section grid gap-[clamp(32px,4vw,64px)]"
      style={{
        gridTemplateColumns: "1fr 1fr",
        gridTemplateAreas: `"head head" "form aside"`,
      }}
    >
      <div style={{ gridArea: "head" }} className="max-w-[30ch]">
        <p className="eyebrow mb-6">— Begin</p>
        <h2
          className="leading-[0.96] -tracking-[0.03em] mb-6"
          style={{ fontSize: "clamp(48px, 7vw, 110px)" }}
        >
          {studio.tagline.split(" ").slice(0, -1).join(" ")} <em>{studio.tagline.split(" ").slice(-1)[0]}</em>.
        </h2>
        <p className="text-ink-soft text-[16.5px] max-w-[50ch]">
          We&rsquo;re currently taking on a small number of projects for late 2026. Tell us a little about your space and we&rsquo;ll be in touch within two working days.
        </p>
      </div>

      <form
        onSubmit={onSubmit}
        noValidate
        style={{ gridArea: "form" }}
        className="grid grid-cols-2 gap-x-6 gap-y-5 max-[880px]:grid-cols-1"
      >
        <div className="field">
          <label htmlFor="name">Your name</label>
          <input id="name" type="text" autoComplete="name" required placeholder="Jane Mehta"
            value={data.name} onChange={(e) => set("name", e.target.value)} />
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" autoComplete="email" required placeholder="jane@studio.com"
            value={data.email} onChange={(e) => set("email", e.target.value)} />
        </div>
        <div className="field">
          <label htmlFor="phone">Phone (optional)</label>
          <input id="phone" type="tel" autoComplete="tel" placeholder="+91 98 ___ ___"
            value={data.phone} onChange={(e) => set("phone", e.target.value)} />
        </div>
        <div className="field">
          <label htmlFor="type">Project type</label>
          <select id="type" required value={data.type} onChange={(e) => set("type", e.target.value)}>
            <option value="" disabled>Choose one</option>
            <option>Residential</option>
            <option>Hospitality</option>
            <option>Commercial / Corporate</option>
            <option>Culture & Exhibits</option>
            <option>Furniture / Object</option>
            <option>Other</option>
          </select>
        </div>
        <div className="field">
          <label htmlFor="city">City</label>
          <input id="city" type="text" placeholder="Bengaluru"
            value={data.city} onChange={(e) => set("city", e.target.value)} />
        </div>
        <div className="field">
          <label htmlFor="budget">Indicative budget</label>
          <select id="budget" value={data.budget} onChange={(e) => set("budget", e.target.value)}>
            <option value="" disabled>Choose a range</option>
            <option>Under ₹15 L</option>
            <option>₹15 — 50 L</option>
            <option>₹50 L — 1.5 Cr</option>
            <option>1.5 Cr +</option>
            <option>Prefer to discuss</option>
          </select>
        </div>
        <div className="field col-span-2 max-[880px]:col-span-1">
          <label htmlFor="message">A little about the project</label>
          <textarea id="message" rows={4} required
            placeholder="Square footage, location, what you'd like the space to feel like…"
            value={data.message} onChange={(e) => set("message", e.target.value)} />
        </div>

        <div className="col-span-2 max-[880px]:col-span-1 flex flex-wrap gap-3 mt-3">
          <button type="submit" className="btn btn-solid btn-lg">
            Send inquiry
            <ArrowRight />
          </button>
          <a href={waLink("Hi, I'd like to inquire about a design for my space.")} target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-lg">
            <Whatsapp width={16} height={16} />
            Or chat on WhatsApp
          </a>
        </div>

        {note && (
          <p
            className={`col-span-2 max-[880px]:col-span-1 m-0 px-[18px] py-3.5 border rounded-sharp font-serif italic text-[14px] ${
              note.ok
                ? "border-accent bg-accent/10 text-accent-deep"
                : "border-[#9b3d20] bg-[#9b3d20]/10 text-[#9b3d20]"
            }`}
          >
            {note.text}
          </p>
        )}
      </form>

      <aside
        style={{ gridArea: "aside" }}
        className="grid gap-7 content-start pl-[clamp(0px,3vw,40px)] border-l border-rule max-[880px]:pl-0 max-[880px]:border-l-0 max-[880px]:border-t max-[880px]:pt-7"
      >
        <div>
          <span className="block text-[11px] uppercase tracking-eyebrow text-muted mb-2">Studio</span>
          <p className="font-serif text-[18px] leading-[1.5] m-0">
            {studio.address.line1}<br />
            {studio.address.city}<br />
            {studio.address.country}
          </p>
        </div>
        <div>
          <span className="block text-[11px] uppercase tracking-eyebrow text-muted mb-2">Press &amp; general</span>
          <p className="font-serif text-[18px] leading-[1.5] m-0">
            <a href={`mailto:${studio.email}`} className="border-b border-rule hover:border-ink transition-colors">{studio.email}</a><br />
            <a href={`tel:${studio.phone.replace(/\s/g, "")}`} className="border-b border-rule hover:border-ink transition-colors">{studio.phone}</a>
          </p>
        </div>
        <div>
          <span className="block text-[11px] uppercase tracking-eyebrow text-muted mb-2">Hours</span>
          <p className="font-serif text-[18px] leading-[1.5] m-0">{studio.hours}</p>
        </div>
      </aside>

      {/* mobile fallback for grid-areas */}
      <style jsx>{`
        @media (max-width: 880px) {
          section {
            grid-template-columns: 1fr !important;
            grid-template-areas: "head" "form" "aside" !important;
          }
        }
      `}</style>
    </section>
  );
}
