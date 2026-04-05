"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronLeft, Mail, X } from "lucide-react";
import type { TeamMember } from "@/lib/team";

export default function TeamDetailClient({ member }: { member: TeamMember }) {
  const bgRef = useRef<HTMLDivElement>(null);
  const [lightbox, setLightbox] = useState<number | null>(null);

  useEffect(() => {
    document.body.style.overflow = lightbox !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightbox]);

  useEffect(() => {
    const onScroll = () => {
      if (bgRef.current)
        bgRef.current.style.transform = `translateY(${window.scrollY * 0.28}px)`;
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
          height: "70svh",
          minHeight: "500px",
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
            backgroundImage: `url(${member.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center top",
            backgroundColor: "var(--c-navy)",
            willChange: "transform",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(160deg, rgba(27,69,121,0.2) 0%, rgba(18,47,85,0.96) 100%)",
          }}
        />

        {/* Back */}
        <Link
          href="/#team"
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
          Команда
        </Link>

        <div
          style={{
            position: "relative",
            zIndex: 10,
            width: "100%",
            maxWidth: "1320px",
            margin: "0 auto",
            padding: "0 40px 56px",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: "40px",
            flexWrap: "wrap",
          }}
        >
          <div>
            <span
              style={{
                display: "inline-block",
                fontFamily: "var(--font-main)",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--c-sky)",
                marginBottom: "14px",
              }}
            >
              {member.grade}
            </span>
            <h1
              className="display"
              style={{
                fontSize: "clamp(40px, 7vw, 88px)",
                color: "#fff",
                marginBottom: "12px",
              }}
            >
              {member.name}
            </h1>
            <p
              style={{
                fontFamily: "var(--font-main)",
                fontSize: "16px",
                fontWeight: 500,
                color: "rgba(255,255,255,0.6)",
                letterSpacing: "0.02em",
              }}
            >
              {member.role}
            </p>
          </div>

          {/* Quick contacts */}
          <div style={{ display: "flex", gap: "12px", paddingBottom: "4px" }}>
            <a
              href={member.social}
              style={{
                fontFamily: "var(--font-main)",
                fontSize: "12px",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "var(--c-sky)",
                opacity: 0.55,
                textDecoration: "none",
                border: "1px solid rgba(117,181,208,0.25)",
                padding: "10px 20px",
                transition: "opacity 0.2s ease, border-color 0.2s ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.opacity = "1";
                el.style.borderColor = "rgba(117,181,208,0.6)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.opacity = "0.55";
                el.style.borderColor = "rgba(117,181,208,0.25)";
              }}
            >
              VK
            </a>
            <a
              href={`mailto:${member.email}`}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontFamily: "var(--font-main)",
                fontSize: "12px",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "var(--c-sky)",
                opacity: 0.55,
                textDecoration: "none",
                border: "1px solid rgba(117,181,208,0.25)",
                padding: "10px 20px",
                transition: "opacity 0.2s ease, border-color 0.2s ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.opacity = "1";
                el.style.borderColor = "rgba(117,181,208,0.6)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.opacity = "0.55";
                el.style.borderColor = "rgba(117,181,208,0.25)";
              }}
            >
              <Mail size={13} />
              Написать
            </a>
          </div>
        </div>
      </section>

      {/* ── Body ── */}
      <section style={{ backgroundColor: "var(--c-surface-1)", padding: "80px 40px 0" }}>
        <div
          style={{
            maxWidth: "1320px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "minmax(0,1fr) 320px",
            gap: "80px",
            alignItems: "start",
          }}
        >
          {/* Main */}
          <div>
            {/* Full bio */}
            <p
              style={{
                fontFamily: "var(--font-main)",
                fontSize: "clamp(17px, 1.8vw, 20px)",
                color: "var(--c-navy)",
                lineHeight: 1.7,
                marginBottom: "64px",
              }}
            >
              {member.fullBio}
            </p>

            {/* Achievements */}
            <h2
              style={{
                fontFamily: "var(--font-main)",
                fontSize: "clamp(22px, 3vw, 32px)",
                fontWeight: 900,
                color: "var(--c-navy)",
                letterSpacing: "-0.02em",
                marginBottom: "28px",
              }}
            >
              Достижения
            </h2>
            <div style={{ display: "flex", flexDirection: "column", marginBottom: "64px" }}>
              {member.achievements.map((a, i) => (
                <div
                  key={i}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "52px 1fr",
                    gap: "20px",
                    padding: "20px 0",
                    borderBottom: "1px solid var(--c-surface-2)",
                    alignItems: "start",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-main)",
                      fontSize: "13px",
                      fontWeight: 800,
                      color: "var(--c-sky)",
                      paddingTop: "2px",
                    }}
                  >
                    {a.year}
                  </span>
                  <div>
                    <p
                      style={{
                        fontFamily: "var(--font-main)",
                        fontSize: "16px",
                        fontWeight: 700,
                        color: "var(--c-navy)",
                        marginBottom: "3px",
                      }}
                    >
                      {a.title}
                    </p>
                    <p className="label">{a.location}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Teaches */}
            <h2
              style={{
                fontFamily: "var(--font-main)",
                fontSize: "clamp(22px, 3vw, 32px)",
                fontWeight: 900,
                color: "var(--c-navy)",
                letterSpacing: "-0.02em",
                marginBottom: "28px",
              }}
            >
              Чему учит
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 240px), 1fr))",
                gap: "2px",
                marginBottom: "80px",
              }}
            >
              {member.teaches.map((t) => (
                <div
                  key={t}
                  style={{
                    backgroundColor: "#fff",
                    padding: "20px 24px",
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                  }}
                >
                  <span
                    style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      backgroundColor: "var(--c-sky)",
                      flexShrink: 0,
                    }}
                  />
                  <span
                    style={{
                      fontFamily: "var(--font-main)",
                      fontSize: "14px",
                      fontWeight: 600,
                      color: "var(--c-navy)",
                    }}
                  >
                    {t}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div style={{ position: "sticky", top: "100px" }}>
            <div style={{ backgroundColor: "#fff", padding: "32px", marginBottom: "2px" }}>
              <p className="label" style={{ marginBottom: "20px" }}>О человеке</p>
              {[
                { label: "Опыт", value: member.experience },
                { label: "Разряд", value: member.grade },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "14px 0",
                    borderBottom: "1px solid var(--c-surface-2)",
                    gap: "16px",
                  }}
                >
                  <span className="label">{label}</span>
                  <span
                    style={{
                      fontFamily: "var(--font-main)",
                      fontSize: "14px",
                      fontWeight: 700,
                      color: "var(--c-navy)",
                      textAlign: "right",
                    }}
                  >
                    {value}
                  </span>
                </div>
              ))}
            </div>

            <div style={{ backgroundColor: "var(--c-navy)", padding: "32px", marginBottom: "16px" }}>
              <p className="label" style={{ color: "rgba(117,181,208,0.6)", marginBottom: "20px" }}>
                Специализация
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {member.specialization.map((s) => (
                  <div key={s} style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                    <span style={{ color: "var(--c-sky)", flexShrink: 0 }}>✓</span>
                    <span
                      style={{
                        fontFamily: "var(--font-main)",
                        fontSize: "14px",
                        color: "rgba(255,255,255,0.8)",
                      }}
                    >
                      {s}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <a
              href={`mailto:${member.email}`}
              className="btn-solid"
              style={{ display: "block", textAlign: "center", textDecoration: "none" }}
            >
              Написать инструктору
            </a>
          </div>
        </div>
      </section>


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
            onClick={(e) => { e.stopPropagation(); setLightbox((lightbox - 1 + member.gallery.length) % member.gallery.length); }}
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
                backgroundImage: `url(${member.gallery[lightbox].src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundColor: "var(--c-navy)",
              }}
            />
            <p style={{ fontFamily: "var(--font-main)", fontSize: "13px", color: "rgba(255,255,255,0.55)", letterSpacing: "0.04em" }}>
              {member.gallery[lightbox].caption}
            </p>
            <p className="label" style={{ color: "rgba(117,181,208,0.4)" }}>
              {lightbox + 1} / {member.gallery.length}
            </p>
          </div>

          <button
            onClick={(e) => { e.stopPropagation(); setLightbox((lightbox + 1) % member.gallery.length); }}
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
    </>
  );
}
