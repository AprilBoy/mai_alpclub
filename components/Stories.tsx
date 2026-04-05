"use client";

import Link from "next/link";
import { stories } from "@/lib/stories";
import { asset } from "@/lib/asset";

export default function Stories() {
  return (
    <section id="stories" className="section-pad" style={{ backgroundColor: "var(--c-surface-1)" }}>
      <div style={{ maxWidth: "1320px", margin: "0 auto" }}>
        <p className="label" style={{ marginBottom: "12px" }}>Блог</p>
        <h2 className="display" style={{ fontSize: "clamp(40px, 7vw, 88px)", color: "var(--c-navy)", marginBottom: "56px" }}>
          Истории
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))",
            gap: "40px",
          }}
        >
          {stories.map((s) => <StoryCard key={s.id} story={s} />)}
        </div>
      </div>
    </section>
  );
}

function StoryCard({ story }: { story: (typeof stories)[0] }) {
  return (
    <Link href={`/stories/${story.id}`} style={{ textDecoration: "none", display: "block" }}>
      <article style={{ cursor: "pointer" }}>
        <div style={{ position: "relative", height: "260px", overflow: "hidden", marginBottom: "20px" }}>
          <div
            style={{
              width: "100%",
              height: "100%",
              backgroundImage: `url(${asset(story.image)})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundColor: "var(--c-surface-2)",
              transition: "transform 0.5s ease",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.transform = "scale(1.04)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.transform = "scale(1)")}
          />
          <span
            style={{
              position: "absolute",
              top: "16px",
              left: "16px",
              background: "linear-gradient(135deg, rgba(27,69,121,0.85), rgba(45,111,160,0.85))",
              backdropFilter: "blur(4px)",
              color: "#fff",
              fontFamily: "var(--font-main)",
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              padding: "4px 12px",
            }}
          >
            {story.tag}
          </span>
        </div>

        <div className="label" style={{ color: "var(--c-sky)", marginBottom: "10px", display: "flex", gap: "8px" }}>
          <span>{story.date}</span>
          <span>·</span>
          <span>{story.readTime} чтения</span>
        </div>

        <h3
          style={{
            fontFamily: "var(--font-main)",
            fontSize: "18px",
            fontWeight: 800,
            color: "var(--c-navy)",
            lineHeight: 1.3,
            letterSpacing: "-0.01em",
            marginBottom: "10px",
          }}
        >
          {story.title}
        </h3>

        <p
          style={{
            fontFamily: "var(--font-main)",
            fontSize: "14px",
            lineHeight: 1.65,
            color: "var(--c-muted)",
            marginBottom: "16px",
          }}
        >
          {story.excerpt}
        </p>

        <span
          style={{
            fontFamily: "var(--font-main)",
            fontSize: "12px",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            color: "var(--c-navy)",
            borderBottom: "1.5px solid var(--c-sky)",
            paddingBottom: "1px",
          }}
        >
          Читать далее
        </span>
      </article>
    </Link>
  );
}
