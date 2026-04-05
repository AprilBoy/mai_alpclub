"use client";

import Link from "next/link";

const events = [
  {
    id: 1,
    title: "Эльбрус — Западная вершина",
    location: "Кабардино-Балкария",
    dates: "15 июл — 28 июл",
    difficulty: "3Б",
    category: "Альпинизм",
    spotsLeft: 3,
    image: "/images/event-elbrus.jpg",
    price: "от 45 000 ₽",
  },
  {
    id: 2,
    title: "Скальный лагерь Крым",
    location: "Крым, Россия",
    dates: "5 авг — 18 авг",
    difficulty: "5b",
    category: "Скалолазание",
    spotsLeft: 7,
    image: "/images/event-crimea.jpg",
    price: "от 22 000 ₽",
  },
  {
    id: 3,
    title: "Фанские горы — основной лагерь",
    location: "Таджикистан",
    dates: "10 авг — 25 авг",
    difficulty: "4А",
    category: "Альпинизм",
    spotsLeft: 2,
    image: "/images/event-fan.jpg",
    price: "от 65 000 ₽",
  },
  {
    id: 4,
    title: "Ледолазание в Приэльбрусье",
    location: "Приэльбрусье, Россия",
    dates: "20 янв — 28 янв",
    difficulty: "WI4",
    category: "Ледолазание",
    spotsLeft: 6,
    image: "/images/event-ice.jpg",
    price: "от 18 000 ₽",
  },
];

const categoryColors: Record<string, string> = {
  Альпинизм:   "#1b4579",
  Скалолазание:"#2d6fa0",
  Ледолазание: "#75b5d0",
  Поход:       "#3d7ea6",
};

export default function Events() {
  return (
    <section id="events" className="section-pad" style={{ backgroundColor: "var(--c-surface-1)" }}>
      <div style={{ maxWidth: "1320px", margin: "0 auto" }}>

        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "56px" }}>
          <div>
            <p className="label" style={{ marginBottom: "10px" }}>Ближайшие</p>
            <h2 className="display" style={{ fontSize: "clamp(40px, 7vw, 88px)", color: "var(--c-navy)" }}>
              Мероприятия
            </h2>
          </div>
          <Link
            href="/events"
            className="hidden md:inline-flex"
            style={{
              fontFamily: "var(--font-main)",
              fontSize: "13px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              color: "var(--c-navy)",
              textDecoration: "none",
              borderBottom: "1.5px solid var(--c-sky)",
              paddingBottom: "2px",
              opacity: 0.8,
              transition: "opacity 0.2s ease",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "0.4")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "0.8")}
          >
            Все мероприятия →
          </Link>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 520px), 1fr))",
            gap: "24px",
          }}
        >
          {events.map((ev) => <EventCard key={ev.id} event={ev} />)}
        </div>

        <div className="md:hidden" style={{ display: "flex", justifyContent: "center", marginTop: "40px" }}>
          <Link
            href="/events"
            style={{
              fontFamily: "var(--font-main)",
              fontSize: "13px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              color: "var(--c-navy)",
              textDecoration: "none",
              borderBottom: "1.5px solid var(--c-sky)",
              paddingBottom: "2px",
            }}
          >
            Все мероприятия →
          </Link>
        </div>
      </div>
    </section>
  );
}

function EventCard({ event }: { event: (typeof events)[0] }) {
  return (
    <Link
      href={`/events/${event.id}`}
      className="card-hover"
      style={{ cursor: "pointer", overflow: "hidden", textDecoration: "none", display: "block" }}
    >
      {/* Image */}
      <div style={{ position: "relative", height: "300px", overflow: "hidden" }}>
        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundImage: `url(${event.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundColor: "var(--c-surface-2)",
            transition: "transform 0.55s ease",
          }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.transform = "scale(1.04)")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.transform = "scale(1)")}
        />
        {event.spotsLeft <= 3 && (
          <span
            style={{
              position: "absolute",
              top: "16px",
              right: "16px",
              background: "#c0392b",
              color: "#fff",
              fontFamily: "var(--font-main)",
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              padding: "4px 12px",
            }}
          >
            Мест: {event.spotsLeft}
          </span>
        )}
      </div>

      {/* Body */}
      <div style={{ backgroundColor: "#fff", padding: "28px 28px 32px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "14px" }}>
          <span
            style={{
              backgroundColor: categoryColors[event.category] ?? "var(--c-navy)",
              color: "#fff",
              fontFamily: "var(--font-main)",
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              padding: "3px 10px",
              borderRadius: "3px",
            }}
          >
            {event.category} · {event.difficulty}
          </span>
          <span style={{ fontFamily: "var(--font-main)", fontSize: "14px", fontWeight: 700, color: "var(--c-navy)" }}>
            {event.price}
          </span>
        </div>

        <h3
          style={{
            fontFamily: "var(--font-main)",
            fontSize: "22px",
            fontWeight: 800,
            color: "var(--c-navy)",
            lineHeight: 1.15,
            marginBottom: "14px",
            letterSpacing: "-0.01em",
          }}
        >
          {event.title}
        </h3>

        <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginBottom: "24px" }}>
          {[{ icon: "📅", text: event.dates }, { icon: "📍", text: event.location }].map(({ icon, text }) => (
            <span
              key={text}
              style={{
                fontFamily: "var(--font-main)",
                fontSize: "13px",
                color: "var(--c-muted)",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <span style={{ fontSize: "12px" }}>{icon}</span>
              {text}
            </span>
          ))}
        </div>

        <span
          className="btn-outline"
          style={{ width: "100%", textDecoration: "none", textAlign: "center", display: "block" }}
        >
          Подробнее
        </span>
      </div>
    </Link>
  );
}
