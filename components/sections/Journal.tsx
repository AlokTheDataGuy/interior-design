import Image from "next/image";
import { posts } from "@/lib/data/posts";
import Reveal from "@/components/ui/Reveal";

export default function Journal() {
  return (
    <section id="journal" className="bg-paper-2 py-section border-y border-rule">
      <div className="section-head">
        <p className="eyebrow mb-6">— Journal</p>
        <h2>Notes from the <em>studio</em>.</h2>
      </div>

      <div className="max-w-site mx-auto px-pad grid grid-cols-[1.6fr_1fr_1fr] gap-[clamp(28px,3vw,48px)] max-[1100px]:grid-cols-2 max-[540px]:grid-cols-1">
        {posts.map((post, i) => (
          <Reveal
            key={post.slug}
            delay={i * 100}
            className={post.lead ? "max-[1100px]:col-span-2 max-[540px]:col-span-1" : ""}
          >
            <a href="#" className="flex flex-col gap-4 group">
              <div className={`relative overflow-hidden rounded-sharp bg-paper ${post.lead ? "aspect-[16/11]" : "aspect-[4/3]"}`}>
                <Image
                  src={post.image}
                  alt=""
                  fill
                  sizes="(max-width: 1100px) 100vw, 33vw"
                  loading="lazy"
                  className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(.2,.7,.2,1)] group-hover:scale-105"
                />
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-eyebrow text-accent font-medium">{post.tag}</span>
                <h3
                  className={`mt-2 leading-[1.2] -tracking-[0.015em] ${post.lead ? "" : ""}`}
                  style={{
                    fontSize: post.lead
                      ? "clamp(28px, 2.8vw, 40px)"
                      : "clamp(20px, 1.7vw, 26px)",
                    lineHeight: post.lead ? 1.1 : 1.2,
                  }}
                >
                  {post.title}
                </h3>
                {post.excerpt && (
                  <p className="text-muted text-[14.5px] m-0 mt-3 max-w-[50ch]">{post.excerpt}</p>
                )}
                <span className="block mt-3 text-[11px] uppercase tracking-eyebrow text-muted">{post.date}</span>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
