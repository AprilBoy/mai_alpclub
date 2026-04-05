"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronLeft, Clock, User, X } from "lucide-react";
import type { Story, StorySection } from "@/lib/stories";
import { asset } from "@/lib/asset";

export default function StoryDetailClient({ story }: { story: Story }) {
  const bgRef = useRef<HTMLDivElement>(null);
  const [lightbox, setLightbox] = useState<number | null>(null);

  useEffect(() => {
    if (lightbox !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [lightbox]);

  useEffect(() => {
    const onScroll = () => {
      if (bgRef.current)
        bgRef.current.style.transform = `translateY(${window.scrollY * 0.3}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ── Hero ── */}
      <section
        style={{
          position: "relative",
          height: "65svh",
          minHeight: "440px",
          overflow: "hidden",
          display: "flex",
          alignItems: "flex-end",
        }}
      >
        <div
          ref={bgRef}
          style={{
            position: "absolute",
            inset: 0,
            top: "-15%",
            height: "130%",
            backgroundImage: `url(${asset(story.image)})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundColor: "var(--c-navy)",
            willChange: "transform",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(27,69,121,0.25) 0%, rgba(18,47,85,0.95) 100%)",
          }}
        />

        {/* Back link */}
        <Link
          href="/#stories"
          style={{
            position: "absolute",
            top: "96px",
            left: "40px",
            display: "flex",
            alignItems: "center",
            gap: "6px",
            fontFamily: "var(--font-main)",
            fontSize: "12px",
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.6)",
            textDecoration: "none",
            transition: "color 0.2s ease",
            zIndex: 10,
          }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#fff")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.6)")}
        >
          <ChevronLeft size={14} />
          Истории
        </Link>

        <div
          style={{
            position: "relative",
            zIndex: 10,
            width: "100%",
            maxWidth: "1320px",
            margin: "0 auto",
            padding: "0 40px 56px",
          }}
        >
          <span
            style={{
              display: "inline-block",
              fontFamily: "var(--font-main)",
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--c-sky)",
              marginBottom: "16px",
            }}
          >
            {story.tag}
          </span>
          <h1
            className="display"
            style={{
              fontSize: "clamp(32px, 5.5vw, 72px)",
              color: "#fff",
              maxWidth: "900px",
              marginBottom: "24px",
            }}
          >
            {story.title}
          </h1>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "24px", alignItems: "center" }}>
            {[
              { Icon: User, text: `${story.author} · ${story.authorRole}` },
              { Icon: Clock, text: `${story.readTime} чтения` },
            ].map(({ Icon, text }) => (
              <div key={text} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <Icon size={13} style={{ color: "var(--c-sky)", flexShrink: 0 }} />
                <span
                  style={{
                    fontFamily: "var(--font-main)",
                    fontSize: "13px",
                    color: "rgba(255,255,255,0.65)",
                  }}
                >
                  {text}
                </span>
              </div>
            ))}
            <span
              style={{
                fontFamily: "var(--font-main)",
                fontSize: "13px",
                color: "rgba(255,255,255,0.4)",
              }}
            >
              {story.date}
            </span>
          </div>
        </div>
      </section>

      {/* ── Gallery ── */}
      {story.gallery.length > 0 && (
        <section style={{ backgroundColor: "var(--c-navy)", padding: "80px 40px" }}>
          <div style={{ maxWidth: "1320px", margin: "0 auto" }}>
            <p className="label" style={{ color: "rgba(117,181,208,0.5)", marginBottom: "12px" }}>
              Фотографии
            </p>
            <h2
              className="display"
              style={{
                fontSize: "clamp(32px, 5vw, 64px)",
                color: "#fff",
                marginBottom: "48px",
              }}
            >
              Галерея
            </h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 360px), 1fr))",
                gap: "4px",
              }}
            >
              {story.gallery.map((photo, i) => (
                <div
                  key={i}
                  onClick={() => setLightbox(i)}
                  style={{
                    position: "relative",
                    height: "260px",
                    overflow: "hidden",
                    cursor: "zoom-in",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      backgroundImage: `url(${asset(photo.src)})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundColor: "rgba(27,69,121,0.4)",
                      transition: "transform 0.5s ease",
                    }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.transform = "scale(1.04)")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.transform = "scale(1)")}
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      padding: "12px 16px",
                      background: "linear-gradient(to top, rgba(18,47,85,0.85), transparent)",
                      opacity: 0,
                      transition: "opacity 0.3s ease",
                    }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.opacity = "1")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.opacity = "0")}
                  >
                    <p
                      style={{
                        fontFamily: "var(--font-main)",
                        fontSize: "13px",
                        color: "rgba(255,255,255,0.85)",
                      }}
                    >
                      {photo.caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          onClick={() => setLightbox(null)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 200,
            backgroundColor: "rgba(10,20,40,0.95)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "40px",
          }}
        >
          <button
            onClick={() => setLightbox(null)}
            style={{
              position: "absolute",
              top: "24px",
              right: "32px",
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "rgba(255,255,255,0.7)",
              display: "flex",
            }}
          >
            <X size={28} />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); setLightbox((lightbox - 1 + story.gallery.length) % story.gallery.length); }}
            style={{
              position: "absolute",
              left: "24px",
              background: "none",
              border: "1px solid rgba(117,181,208,0.25)",
              cursor: "pointer",
              color: "#fff",
              fontSize: "22px",
              width: "48px",
              height: "48px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            ‹
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: "900px",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <div
              style={{
                width: "100%",
                aspectRatio: "16/10",
                backgroundImage: `url(${asset(story.gallery[lightbox].src)})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundColor: "var(--c-navy)",
              }}
            />
            <p
              style={{
                fontFamily: "var(--font-main)",
                fontSize: "13px",
                color: "rgba(255,255,255,0.55)",
                letterSpacing: "0.04em",
              }}
            >
              {story.gallery[lightbox].caption}
            </p>
            <p className="label" style={{ color: "rgba(117,181,208,0.4)" }}>
              {lightbox + 1} / {story.gallery.length}
            </p>
          </div>

          <button
            onClick={(e) => { e.stopPropagation(); setLightbox((lightbox + 1) % story.gallery.length); }}
            style={{
              position: "absolute",
              right: "24px",
              background: "none",
              border: "1px solid rgba(117,181,208,0.25)",
              cursor: "pointer",
              color: "#fff",
              fontSize: "22px",
              width: "48px",
              height: "48px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            ›
          </button>
        </div>
      )}

      {/* ── Article ── */}
      <section style={{ backgroundColor: "var(--c-surface-1)", padding: "80px 40px 120px" }}>
        <div
          style={{
            maxWidth: "1320px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "minmax(0,1fr) 280px",
            gap: "80px",
            alignItems: "start",
          }}
        >
          {/* Article body */}
          <article>
            {/* Lead */}
            <p
              style={{
                fontFamily: "var(--font-main)",
                fontSize: "clamp(17px, 1.8vw, 21px)",
                color: "var(--c-navy)",
                lineHeight: 1.65,
                fontWeight: 400,
                marginBottom: "48px",
                borderLeft: "3px solid var(--c-sky)",
                paddingLeft: "24px",
              }}
            >
              {story.excerpt}
            </p>

            {/* Body sections */}
            <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
              {story.body.map((section, i) => (
                <BodySection key={i} section={section} />
              ))}
            </div>
          </article>

          {/* Sidebar */}
          <aside style={{ position: "sticky", top: "100px" }}>
            {/* Author card */}
            <div
              style={{
                backgroundColor: "#fff",
                padding: "28px",
                marginBottom: "2px",
              }}
            >
              <p className="label" style={{ marginBottom: "12px" }}>Автор</p>
              <p
                style={{
                  fontFamily: "var(--font-main)",
                  fontSize: "16px",
                  fontWeight: 800,
                  color: "var(--c-navy)",
                  marginBottom: "4px",
                }}
              >
                {story.author}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-main)",
                  fontSize: "13px",
                  color: "var(--c-muted)",
                  lineHeight: 1.5,
                }}
              >
                {story.authorRole}
              </p>
            </div>

            {/* Meta */}
            <div
              style={{
                backgroundColor: "#fff",
                padding: "28px",
                marginBottom: "16px",
              }}
            >
              {[
                { label: "Дата", value: story.date },
                { label: "Время чтения", value: `${story.readTime} чтения` },
                { label: "Тема", value: story.tag },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "12px 0",
                    borderBottom: "1px solid var(--c-surface-2)",
                    gap: "12px",
                  }}
                >
                  <span className="label">{label}</span>
                  <span
                    style={{
                      fontFamily: "var(--font-main)",
                      fontSize: "13px",
                      fontWeight: 600,
                      color: "var(--c-navy)",
                      textAlign: "right",
                    }}
                  >
                    {value}
                  </span>
                </div>
              ))}
            </div>

            <Link
              href="/#contacts"
              className="btn-solid"
              style={{ display: "block", textAlign: "center", textDecoration: "none" }}
            >
              Вступить в клуб
            </Link>
          </aside>
        </div>
      </section>
    </>
  );
}

function BodySection({ section }: { section: StorySection }) {
  if (section.type === "heading") {
    return (
      <h2
        style={{
          fontFamily: "var(--font-main)",
          fontSize: "clamp(20px, 2.5vw, 28px)",
          fontWeight: 900,
          color: "var(--c-navy)",
          letterSpacing: "-0.02em",
          marginTop: "16px",
        }}
      >
        {section.content}
      </h2>
    );
  }

  if (section.type === "quote") {
    return (
      <blockquote
        style={{
          margin: "8px 0",
          padding: "28px 32px",
          backgroundColor: "var(--c-navy)",
          borderLeft: "none",
          position: "relative",
        }}
      >
        <span
          style={{
            position: "absolute",
            top: "12px",
            left: "24px",
            fontSize: "48px",
            lineHeight: 1,
            color: "rgba(117,181,208,0.3)",
            fontFamily: "Georgia, serif",
            userSelect: "none",
          }}
        >
          "
        </span>
        <p
          style={{
            fontFamily: "var(--font-main)",
            fontSize: "clamp(15px, 1.6vw, 18px)",
            fontStyle: "italic",
            color: "rgba(255,255,255,0.85)",
            lineHeight: 1.6,
            paddingTop: "16px",
          }}
        >
          {section.content}
        </p>
      </blockquote>
    );
  }

  return (
    <p
      style={{
        fontFamily: "var(--font-main)",
        fontSize: "clamp(15px, 1.5vw, 17px)",
        color: "#3a5a7a",
        lineHeight: 1.75,
      }}
    >
      {section.content}
    </p>
  );
}
