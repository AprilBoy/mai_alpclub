"use client";

import { useState, useMemo } from "react";
import { events, categories, categoryColors, type Category } from "@/lib/events";
import { asset } from "@/lib/asset";
import { MapPin, Calendar, Users } from "lucide-react";

export default function EventsClient() {
  const [activeCategory, setActiveCategory] = useState<Category>("Все");
  const [sortBy, setSortBy] = useState<"date" | "price">("date");

  const filtered = useMemo(() => {
    const list =
      activeCategory === "Все"
        ? events
        : events.filter((e) => e.category === activeCategory);

    return [...list].sort((a, b) => {
      if (sortBy === "price") {
        const pa = parseInt(a.price.replace(/\D/g, ""));
        const pb = parseInt(b.price.replace(/\D/g, ""));
        return pa - pb;
      }
      return a.id - b.id;
    });
  }, [activeCategory, sortBy]);

  return (
    <>
      {/* ── Hero ─────────────────────────────────────── */}
      <section
        style={{
          paddingTop: "140px",
          paddingBottom: "80px",
          paddingLeft: "40px",
          paddingRight: "40px",
          backgroundColor: "var(--c-surface-1)",
          borderBottom: "1px solid var(--c-surface-2)",
        }}
      >
        <div style={{ maxWidth: "1320px", margin: "0 auto" }}>
          <p className="label" style={{ marginBottom: "16px" }}>
            Альпклуб МАИ
          </p>
          <h1
            className="display"
            style={{
              fontSize: "clamp(52px, 10vw, 130px)",
              color: "var(--c-navy)",
              lineHeight: 0.88,
              marginBottom: "32px",
            }}
          >
            Все
            <br />
            мероприятия
          </h1>
          <p
            style={{
              fontFamily: "var(--font-main)",
              fontSize: "clamp(15px, 1.6vw, 18px)",
              color: "var(--c-muted)",
              lineHeight: 1.6,
              maxWidth: "560px",
            }}
          >
            Восхождения, скальные лагеря, ледолазание и треккинг —
            выберите маршрут по духу и уровню подготовки.
          </p>

          {/* Stats row */}
          <div
            style={{
              display: "flex",
              gap: "40px",
              marginTop: "48px",
              flexWrap: "wrap",
            }}
          >
            {[
              { value: events.length.toString(), label: "мероприятий" },
              {
                value: events.filter((e) => e.spotsLeft > 0).length.toString(),
                label: "есть места",
              },
              { value: "5", label: "направлений" },
            ].map((s) => (
              <div key={s.label}>
                <div
                  style={{
                    fontFamily: "var(--font-main)",
                    fontSize: "36px",
                    fontWeight: 900,
                    color: "var(--c-navy)",
                    letterSpacing: "-0.03em",
                    lineHeight: 1,
                    marginBottom: "4px",
                  }}
                >
                  {s.value}
                </div>
                <div className="label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Filters ──────────────────────────────────── */}
      <section
        style={{
          position: "sticky",
          top: "72px",
          zIndex: 40,
          backgroundColor: "var(--c-surface-1)",
          borderBottom: "1px solid var(--c-surface-2)",
          padding: "0 40px",
        }}
      >
        <div
          style={{
            maxWidth: "1320px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "16px",
            flexWrap: "wrap",
            padding: "14px 0",
          }}
        >
          {/* Category tabs */}
          <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
            {categories.map((cat) => (
              <CategoryTab
                key={cat}
                label={cat}
                active={activeCategory === cat}
                onClick={() => setActiveCategory(cat)}
              />
            ))}
          </div>

          {/* Sort */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span className="label">Сортировка:</span>
            <SortBtn label="По дате" active={sortBy === "date"} onClick={() => setSortBy("date")} />
            <SortBtn label="По цене" active={sortBy === "price"} onClick={() => setSortBy("price")} />
          </div>
        </div>
      </section>

      {/* ── Grid ─────────────────────────────────────── */}
      <section className="section-pad" style={{ backgroundColor: "var(--c-surface-1)" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto" }}>
          {/* Results count */}
          <p
            className="label"
            style={{ marginBottom: "32px", color: "var(--c-muted)" }}
          >
            {filtered.length} мероприятий
            {activeCategory !== "Все" ? ` · ${activeCategory}` : ""}
          </p>

          {filtered.length === 0 ? (
            <div
              style={{
                textAlign: "center",
                padding: "80px 0",
                color: "var(--c-muted)",
                fontFamily: "var(--font-main)",
                fontSize: "18px",
              }}
            >
              Ничего не найдено
            </div>
          ) : (
            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fill, minmax(min(100%, 380px), 1fr))",
                gap: "16px",
              }}
            >
              {filtered.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

/* ── Sub-components ──────────────────────────────────── */

function CategoryTab({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      style={{
        fontFamily: "var(--font-main)",
        fontSize: "12px",
        fontWeight: 700,
        textTransform: "uppercase",
        letterSpacing: "0.12em",
        padding: "8px 18px",
        borderRadius: "30px",
        border: `2px solid ${active ? "var(--c-navy)" : "transparent"}`,
        backgroundColor: active ? "var(--c-navy)" : "transparent",
        color: active ? "#fff" : "var(--c-muted)",
        cursor: "pointer",
        transition: "all 0.2s ease",
        whiteSpace: "nowrap",
      }}
      onMouseEnter={(e) => {
        if (!active) {
          const el = e.currentTarget as HTMLButtonElement;
          el.style.color = "var(--c-navy)";
          el.style.borderColor = "var(--c-sky)";
        }
      }}
      onMouseLeave={(e) => {
        if (!active) {
          const el = e.currentTarget as HTMLButtonElement;
          el.style.color = "var(--c-muted)";
          el.style.borderColor = "transparent";
        }
      }}
    >
      {label}
    </button>
  );
}

function SortBtn({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      style={{
        fontFamily: "var(--font-main)",
        fontSize: "12px",
        fontWeight: 700,
        textTransform: "uppercase",
        letterSpacing: "0.1em",
        padding: "6px 14px",
        border: "none",
        background: "none",
        cursor: "pointer",
        color: active ? "var(--c-navy)" : "var(--c-muted)",
        borderBottom: active ? "2px solid var(--c-sky)" : "2px solid transparent",
        transition: "color 0.2s ease, border-color 0.2s ease",
        paddingBottom: "4px",
      }}
    >
      {label}
    </button>
  );
}

function EventCard({ event }: { event: (typeof events)[0] }) {
  const sold = event.spotsLeft === 0;
  const almostSold = event.spotsLeft > 0 && event.spotsLeft <= 3;

  return (
    <div
      className="card-hover"
      style={{
        backgroundColor: "#fff",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Image */}
      <div style={{ position: "relative", height: "260px", overflow: "hidden", flexShrink: 0 }}>
        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundImage: `url(${asset(event.image)})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundColor: "var(--c-surface-2)",
            transition: "transform 0.55s ease",
          }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLDivElement).style.transform = "scale(1.04)")
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLDivElement).style.transform = "scale(1)")
          }
        />

        {/* Category badge */}
        <span
          style={{
            position: "absolute",
            top: "16px",
            left: "16px",
            backgroundColor:
              categoryColors[event.category] ?? "var(--c-navy)",
            color: "#fff",
            fontFamily: "var(--font-main)",
            fontSize: "10px",
            fontWeight: 700,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            padding: "4px 10px",
          }}
        >
          {event.category}
        </span>

        {/* Spots badge */}
        {sold && (
          <span
            style={{
              position: "absolute",
              top: "16px",
              right: "16px",
              backgroundColor: "#6b7280",
              color: "#fff",
              fontFamily: "var(--font-main)",
              fontSize: "10px",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              padding: "4px 10px",
            }}
          >
            Мест нет
          </span>
        )}
        {almostSold && (
          <span
            style={{
              position: "absolute",
              top: "16px",
              right: "16px",
              backgroundColor: "#c0392b",
              color: "#fff",
              fontFamily: "var(--font-main)",
              fontSize: "10px",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              padding: "4px 10px",
            }}
          >
            Мест: {event.spotsLeft}
          </span>
        )}
      </div>

      {/* Body */}
      <div
        style={{
          padding: "28px 28px 32px",
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}
      >
        {/* Date + price row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "12px",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-main)",
              fontSize: "13px",
              fontWeight: 600,
              color: "var(--c-muted)",
            }}
          >
            {event.dates}
          </span>
          <span
            style={{
              fontFamily: "var(--font-main)",
              fontSize: "15px",
              fontWeight: 800,
              color: "var(--c-navy)",
              letterSpacing: "-0.01em",
            }}
          >
            {event.price}
          </span>
        </div>

        {/* Title */}
        <h2
          style={{
            fontFamily: "var(--font-main)",
            fontSize: "clamp(20px, 2vw, 26px)",
            fontWeight: 800,
            color: "var(--c-navy)",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            marginBottom: "6px",
          }}
        >
          {event.title}
        </h2>

        {/* Subtitle */}
        <p
          style={{
            fontFamily: "var(--font-main)",
            fontSize: "14px",
            fontWeight: 400,
            color: "var(--c-muted)",
            lineHeight: 1.44,
            marginBottom: "16px",
          }}
        >
          {event.subtitle}
        </p>

        {/* Description */}
        <p
          style={{
            fontFamily: "var(--font-main)",
            fontSize: "14px",
            color: "#777",
            lineHeight: 1.65,
            marginBottom: "20px",
            flex: 1,
          }}
        >
          {event.description}
        </p>

        {/* Meta */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "6px",
            marginBottom: "24px",
          }}
        >
          <MetaRow icon={<MapPin size={13} />} text={`${event.location}, ${event.country}`} />
          <MetaRow icon={<Calendar size={13} />} text={event.dates} />
          <MetaRow
            icon={<Users size={13} />}
            text={
              sold
                ? "Мест нет"
                : `Свободно ${event.spotsLeft} из ${event.spotsTotal} мест`
            }
          />
        </div>

        {/* Tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "24px" }}>
          <span
            style={{
              fontFamily: "var(--font-main)",
              fontSize: "11px",
              fontWeight: 700,
              color: "var(--c-navy)",
              background: "var(--c-surface-1)",
              padding: "3px 10px",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
            }}
          >
            {event.difficulty}
          </span>
          {event.tags.map((tag) => (
            <span
              key={tag}
              style={{
                fontFamily: "var(--font-main)",
                fontSize: "11px",
                color: "var(--c-muted)",
                background: "var(--c-surface-1)",
                padding: "3px 10px",
                letterSpacing: "0.04em",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        <a
          href={sold ? undefined : `/events/${event.id}`}
          className="btn-outline"
          style={{
            width: "100%",
            opacity: sold ? 0.4 : 1,
            pointerEvents: sold ? "none" : "auto",
            textDecoration: "none",
            textAlign: "center",
          }}
        >
          {sold ? "Набор закрыт" : "Подробнее"}
        </a>
      </div>
    </div>
  );
}

function MetaRow({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        fontFamily: "var(--font-main)",
        fontSize: "13px",
        color: "var(--c-muted)",
      }}
    >
      <span style={{ color: "var(--c-sky)", flexShrink: 0 }}>{icon}</span>
      {text}
    </div>
  );
}
