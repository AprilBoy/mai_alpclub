"use client";

import { useState } from "react";
import type { DayItem } from "@/lib/eventDetails";

export default function Accordion({ items }: { items: DayItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
      {items.map((item) => {
        const isOpen = open === item.day;
        return (
          <div
            key={item.day}
            style={{
              backgroundColor: isOpen ? "#fff" : "var(--c-surface-1)",
              transition: "background 0.2s ease",
            }}
          >
            <button
              onClick={() => setOpen(isOpen ? null : item.day)}
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "20px 28px",
                background: "none",
                border: "none",
                cursor: "pointer",
                textAlign: "left",
                gap: "16px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "20px", flex: 1, minWidth: 0 }}>
                {/* Day number */}
                <span
                  style={{
                    fontFamily: "var(--font-main)",
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "var(--c-sky)",
                    flexShrink: 0,
                    minWidth: "52px",
                  }}
                >
                  {item.day} день
                </span>

                {/* Title */}
                <span
                  style={{
                    fontFamily: "var(--font-main)",
                    fontSize: "17px",
                    fontWeight: 700,
                    color: "var(--c-navy)",
                    letterSpacing: "-0.01em",
                    lineHeight: 1.2,
                  }}
                >
                  {item.title}
                </span>

                {/* Distance tag */}
                {item.distance && (
                  <span
                    style={{
                      flexShrink: 0,
                      fontFamily: "var(--font-main)",
                      fontSize: "11px",
                      fontWeight: 600,
                      color: "var(--c-muted)",
                      letterSpacing: "0.06em",
                      background: "var(--c-surface-2)",
                      padding: "2px 10px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {item.distance}
                  </span>
                )}
              </div>

              {/* Chevron */}
              <span
                style={{
                  flexShrink: 0,
                  color: "var(--c-sky)",
                  fontSize: "64px",
                  lineHeight: 1,
                  transition: "transform 0.25s ease",
                  transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                  fontWeight: 300,
                }}
              >
                +
              </span>
            </button>

            {/* Content */}
            <div
              style={{
                maxHeight: isOpen ? "400px" : "0",
                overflow: "hidden",
                transition: "max-height 0.35s ease",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-main)",
                  fontSize: "15px",
                  lineHeight: 1.7,
                  color: "#666",
                  padding: "0 28px 24px 100px",
                }}
              >
                {item.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
