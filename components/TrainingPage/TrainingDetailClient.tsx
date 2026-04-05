"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { MapPin, Clock, Calendar, ChevronLeft } from "lucide-react";
import type { TrainingDetail } from "@/lib/trainings";

export default function TrainingDetailClient({ training }: { training: TrainingDetail }) {
  const bgRef = useRef<HTMLDivElement>(null);

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
          height: "70svh",
          minHeight: "480px",
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
            backgroundImage: `url(${training.image})`,
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
              "linear-gradient(to bottom, rgba(27,69,121,0.3) 0%, rgba(18,47,85,0.92) 100%)",
          }}
        />

        {/* Back link */}
        <Link
          href="/#archive"
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
          Тренировки
        </Link>

        {/* Hero content */}
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
            {training.label}
          </span>
          <h1
            className="display"
            style={{
              fontSize: "clamp(40px, 8vw, 96px)",
              color: "#fff",
              marginBottom: "20px",
            }}
          >
            {training.title}
          </h1>

          {/* Stats strip */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "32px" }}>
            {[
              { Icon: Calendar, text: training.day },
              { Icon: Clock, text: training.time },
              { Icon: MapPin, text: training.location },
            ].map(({ Icon, text }) => (
              <div key={text} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <Icon size={14} style={{ color: "var(--c-sky)", flexShrink: 0 }} />
                <span
                  style={{
                    fontFamily: "var(--font-main)",
                    fontSize: "14px",
                    color: "rgba(255,255,255,0.75)",
                  }}
                >
                  {text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Body ── */}
      <section style={{ backgroundColor: "var(--c-surface-1)", padding: "80px 40px 120px" }}>
        <div
          style={{
            maxWidth: "1320px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "minmax(0,1fr) 340px",
            gap: "80px",
            alignItems: "start",
          }}
        >
          {/* Main column */}
          <div>
            {/* Description */}
            <p
              style={{
                fontFamily: "var(--font-main)",
                fontSize: "clamp(17px, 1.8vw, 20px)",
                color: "var(--c-navy)",
                lineHeight: 1.65,
                marginBottom: "56px",
                fontWeight: 400,
              }}
            >
              {training.fullDescription}
            </p>

            {/* Program */}
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
              Программа занятия
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "2px", marginBottom: "64px" }}>
              {training.program.map((step, i) => (
                <div
                  key={i}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "32px 1fr",
                    gap: "20px",
                    backgroundColor: "#fff",
                    padding: "24px 28px",
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
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p
                      style={{
                        fontFamily: "var(--font-main)",
                        fontSize: "15px",
                        fontWeight: 800,
                        color: "var(--c-navy)",
                        marginBottom: "6px",
                      }}
                    >
                      {step.title}
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-main)",
                        fontSize: "14px",
                        color: "var(--c-muted)",
                        lineHeight: 1.6,
                      }}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Gear */}
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
              Что взять с собой
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 260px), 1fr))",
                gap: "2px",
              }}
            >
              {training.gear.map((item) => (
                <div
                  key={item}
                  style={{
                    backgroundColor: "#fff",
                    padding: "18px 24px",
                    fontFamily: "var(--font-main)",
                    fontSize: "14px",
                    color: "var(--c-navy)",
                    fontWeight: 500,
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
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div style={{ position: "sticky", top: "100px" }}>
            {/* Info card */}
            <div
              style={{
                backgroundColor: "#fff",
                padding: "32px",
                marginBottom: "2px",
              }}
            >
              <p className="label" style={{ marginBottom: "20px" }}>
                О тренировке
              </p>
              {[
                { label: "Уровень", value: training.level },
                { label: "Длительность", value: training.duration },
                { label: "Периодичность", value: training.frequency },
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

            {/* Includes */}
            <div
              style={{
                backgroundColor: "var(--c-navy)",
                padding: "32px",
                marginBottom: "16px",
              }}
            >
              <p className="label" style={{ color: "rgba(117,181,208,0.6)", marginBottom: "20px" }}>
                Включено
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {training.includes.map((item) => (
                  <div
                    key={item}
                    style={{
                      display: "flex",
                      gap: "10px",
                      alignItems: "flex-start",
                    }}
                  >
                    <span style={{ color: "var(--c-sky)", marginTop: "2px", flexShrink: 0 }}>✓</span>
                    <span
                      style={{
                        fontFamily: "var(--font-main)",
                        fontSize: "14px",
                        color: "rgba(255,255,255,0.8)",
                        lineHeight: 1.4,
                      }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <a
              href="/#contacts"
              className="btn-solid"
              style={{ display: "block", textAlign: "center", textDecoration: "none" }}
            >
              {training.freeFirst ? "Прийти бесплатно" : "Записаться"}
            </a>
            {training.freeFirst && (
              <p
                style={{
                  fontFamily: "var(--font-main)",
                  fontSize: "12px",
                  color: "var(--c-muted)",
                  textAlign: "center",
                  marginTop: "10px",
                }}
              >
                Первое занятие — бесплатно
              </p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
