"use client";

import Link from "next/link";
import { trainings } from "@/lib/trainings";

const formats = trainings.map((t) => ({
  id: t.id,
  title: t.title,
  description: t.description,
}));

export default function Training() {
  return (
    <section id="archive" className="section-pad" style={{ backgroundColor: "var(--c-surface-1)" }}>
      <div style={{ maxWidth: "1320px", margin: "0 auto" }}>
        <p className="label" style={{ marginBottom: "12px" }}>Клуб</p>
        <h2 className="display" style={{ fontSize: "clamp(40px, 7vw, 88px)", color: "var(--c-navy)", marginBottom: "56px" }}>
          Тренировки
        </h2>

        {/* Schedule */}
        <div style={{ display: "flex", flexDirection: "column", marginBottom: "72px" }}>
          {trainings.map((item) => <ScheduleRow key={item.id} item={item} />)}
        </div>

        {/* Formats */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 280px), 1fr))",
            gap: "2px",
          }}
        >
          {formats.map((f) => (
            <Link
              key={f.id}
              href={`/trainings/${f.id}`}
              style={{ textDecoration: "none", display: "block" }}
            >
              <div
                style={{
                  backgroundColor: "#fff",
                  padding: "32px 28px",
                  height: "100%",
                  transition: "background 0.2s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.backgroundColor = "var(--c-surface-2)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.backgroundColor = "#fff")}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-main)",
                    fontSize: "17px",
                    fontWeight: 800,
                    color: "var(--c-navy)",
                    marginBottom: "10px",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {f.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-main)",
                    fontSize: "14px",
                    color: "var(--c-muted)",
                    lineHeight: 1.6,
                    marginBottom: "16px",
                  }}
                >
                  {f.description}
                </p>
                <span
                  style={{
                    fontFamily: "var(--font-main)",
                    fontSize: "12px",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--c-sky)",
                  }}
                >
                  Подробнее →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function ScheduleRow({ item }: { item: (typeof trainings)[0] }) {
  return (
    <Link
      href={`/trainings/${item.id}`}
      style={{ textDecoration: "none" }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          padding: "20px 12px",
          borderBottom: "1px solid var(--c-surface-2)",
          transition: "background 0.2s ease",
          margin: "0 -12px",
          cursor: "pointer",
        }}
        onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.backgroundColor = "var(--c-surface-2)")}
        onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.backgroundColor = "transparent")}
      >
        <div style={{ flexShrink: 0, width: "120px" }}>
          <p
            style={{
              fontFamily: "var(--font-main)",
              fontSize: "15px",
              fontWeight: 800,
              color: "var(--c-navy)",
              marginBottom: "2px",
            }}
          >
            {item.day}
          </p>
          <p
            style={{
              fontFamily: "var(--font-main)",
              fontSize: "13px",
              fontWeight: 600,
              color: "var(--c-sky)",
            }}
          >
            {item.time}
          </p>
        </div>

        <div style={{ flex: 1, minWidth: 0 }}>
          <p
            style={{
              fontFamily: "var(--font-main)",
              fontSize: "clamp(15px, 2vw, 17px)",
              fontWeight: 700,
              color: "var(--c-navy)",
              marginBottom: "2px",
            }}
          >
            {item.title}
          </p>
          <p className="label">{item.location}</p>
        </div>

        <span style={{ flexShrink: 0, fontSize: "18px", color: "var(--c-sky)" }}>→</span>
      </div>
    </Link>
  );
}
