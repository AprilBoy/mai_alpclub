"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Accordion from "./Accordion";
import type { Event } from "@/lib/events";
import { asset } from "@/lib/asset";
import { categoryColors } from "@/lib/events";
import type { EventDetail } from "@/lib/eventDetails";
import { MapPin, Calendar, Users, Mountain, Clock, ArrowLeft, Check, X } from "lucide-react";

interface Props {
  event: Event;
  detail: EventDetail | null;
}

export default function EventDetailClient({ event, detail }: Props) {
  const [formSent, setFormSent] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (heroRef.current)
        heroRef.current.style.transform = `translateY(${window.scrollY * 0.3}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const accentColor = categoryColors[event.category] ?? "var(--c-navy)";

  return (
    <>
      {/* ── HERO ─────────────────────────────────────── */}
      <section
        style={{
          position: "relative",
          height: "100svh",
          minHeight: "560px",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
        }}
      >
        {/* Parallax bg */}
        <div
          ref={heroRef}
          style={{
            position: "absolute",
            inset: 0,
            top: "-15%",
            height: "130%",
            backgroundImage: `url(${asset(event.image)})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundColor: "var(--c-navy)",
            willChange: "transform",
          }}
        />

        {/* Gradient */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(27,69,121,0.95) 0%, rgba(27,69,121,0.55) 40%, rgba(0,0,0,0.15) 100%)",
          }}
        />

        {/* Content */}
        <div
          style={{
            position: "relative",
            zIndex: 10,
            padding: "0 40px 56px",
            maxWidth: "1320px",
            width: "100%",
            margin: "0 auto",
          }}
        >
          {/* Back link */}
          <Link
            href="/events"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              color: "rgba(255,255,255,0.65)",
              textDecoration: "none",
              fontFamily: "var(--font-main)",
              fontSize: "12px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              marginBottom: "32px",
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#fff")}
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.65)")
            }
          >
            <ArrowLeft size={14} /> Все мероприятия
          </Link>

          {/* Category */}
          <div style={{ marginBottom: "16px" }}>
            <span
              style={{
                fontFamily: "var(--font-main)",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--c-sky)",
              }}
            >
              {event.category} · {event.difficulty}
            </span>
          </div>

          {/* Title */}
          <h1
            className="display"
            style={{
              fontSize: "clamp(48px, 9vw, 120px)",
              color: "#fff",
              maxWidth: "900px",
              marginBottom: "32px",
              textShadow: "0 2px 40px rgba(0,0,0,0.2)",
            }}
          >
            {event.title}
          </h1>

          {/* Quick stats strip */}
          <div style={{ display: "flex", gap: "32px", flexWrap: "wrap" }}>
            {[
              { icon: <Calendar size={14} />, text: event.dates },
              { icon: <MapPin size={14} />, text: `${event.location}, ${event.country}` },
              ...(detail
                ? [
                    { icon: <Clock size={14} />, text: detail.duration },
                    { icon: <Mountain size={14} />, text: `до ${detail.maxAlt}` },
                  ]
                : []),
              {
                icon: <Users size={14} />,
                text:
                  event.spotsLeft === 0
                    ? "Мест нет"
                    : `${event.spotsLeft} из ${event.spotsTotal} мест`,
              },
            ].map(({ icon, text }) => (
              <div
                key={text}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  fontFamily: "var(--font-main)",
                  fontSize: "14px",
                  color: "rgba(255,255,255,0.75)",
                }}
              >
                <span style={{ color: "var(--c-sky)" }}>{icon}</span>
                {text}
              </div>
            ))}
          </div>
        </div>

        {/* CTA button pinned bottom-right */}
        <a
          href="#booking"
          style={{
            position: "absolute",
            bottom: "48px",
            right: "40px",
            zIndex: 10,
            fontFamily: "var(--font-main)",
            fontSize: "13px",
            fontWeight: 700,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#fff",
            border: "2px solid rgba(255,255,255,0.6)",
            borderRadius: "30px",
            padding: "14px 32px",
            textDecoration: "none",
            transition: "border-color 0.2s ease, background 0.2s ease, color 0.2s ease",
            backdropFilter: "blur(4px)",
            backgroundColor: "rgba(255,255,255,0.08)",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLAnchorElement;
            el.style.borderColor = "#fff";
            el.style.backgroundColor = "#fff";
            el.style.color = "var(--c-navy)";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLAnchorElement;
            el.style.borderColor = "rgba(255,255,255,0.6)";
            el.style.backgroundColor = "rgba(255,255,255,0.08)";
            el.style.color = "#fff";
          }}
        >
          Хочу на восхождение
        </a>
      </section>

      {/* ── PRICE RIBBON ─────────────────────────────── */}
      <div
        style={{
          backgroundColor: accentColor,
          padding: "20px 40px",
        }}
      >
        <div
          style={{
            maxWidth: "1320px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-main)",
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: 900,
              color: "#fff",
              letterSpacing: "-0.02em",
            }}
          >
            {event.price}
          </div>
          <a
            href="#booking"
            className="btn-solid-white"
            style={{ textDecoration: "none" }}
          >
            Записаться
          </a>
        </div>
      </div>

      {/* ── DESCRIPTION ──────────────────────────────── */}
      <section className="section-pad" style={{ backgroundColor: "#fff" }}>
        <div
          style={{
            maxWidth: "1320px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 480px), 1fr))",
            gap: "80px",
            alignItems: "start",
          }}
        >
          <div>
            <p className="label" style={{ marginBottom: "12px" }}>О маршруте</p>
            <h2
              className="display"
              style={{
                fontSize: "clamp(32px, 4vw, 56px)",
                color: "var(--c-navy)",
                marginBottom: "28px",
              }}
            >
              {event.subtitle}
            </h2>
            <p
              style={{
                fontFamily: "var(--font-main)",
                fontSize: "18px",
                lineHeight: 1.7,
                color: "#555",
                marginBottom: "20px",
              }}
            >
              {detail?.description ?? event.description}
            </p>
            {detail?.fullDescription && (
              <p
                style={{
                  fontFamily: "var(--font-main)",
                  fontSize: "16px",
                  lineHeight: 1.7,
                  color: "#777",
                }}
              >
                {detail.fullDescription}
              </p>
            )}
          </div>

          {/* Info cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1px",
              backgroundColor: "var(--c-surface-2)",
              alignSelf: "start",
            }}
          >
            {[
              { label: "Сложность", value: event.difficulty },
              { label: "Цена", value: event.price },
              { label: "Даты", value: event.dates },
              { label: "Длительность", value: detail?.duration ?? "—" },
              { label: "Расстояние", value: detail?.distance ?? "—" },
              { label: "Макс. высота", value: detail?.maxAlt ?? "—" },
              { label: "Мест всего", value: String(event.spotsTotal) },
              {
                label: "Свободно",
                value:
                  event.spotsLeft === 0 ? "Нет мест" : String(event.spotsLeft),
              },
            ].map((item) => (
              <div
                key={item.label}
                style={{ backgroundColor: "#fff", padding: "20px 22px" }}
              >
                <div className="label" style={{ marginBottom: "6px" }}>
                  {item.label}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-main)",
                    fontSize: "18px",
                    fontWeight: 800,
                    color: "var(--c-navy)",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ITINERARY ────────────────────────────────── */}
      {detail?.itinerary && (
        <section className="section-pad" style={{ backgroundColor: "var(--c-surface-1)" }}>
          <div style={{ maxWidth: "1320px", margin: "0 auto" }}>
            <p className="label" style={{ marginBottom: "12px" }}>Программа</p>
            <h2
              className="display"
              style={{
                fontSize: "clamp(36px, 5vw, 72px)",
                color: "var(--c-navy)",
                marginBottom: "48px",
              }}
            >
              По дням
            </h2>
            <Accordion items={detail.itinerary} />
          </div>
        </section>
      )}

      {/* ── INCLUDES / EXCLUDES ──────────────────────── */}
      {detail && (
        <section className="section-pad" style={{ backgroundColor: "#fff" }}>
          <div style={{ maxWidth: "1320px", margin: "0 auto" }}>
            <p className="label" style={{ marginBottom: "12px" }}>Стоимость</p>
            <h2
              className="display"
              style={{
                fontSize: "clamp(36px, 5vw, 72px)",
                color: "var(--c-navy)",
                marginBottom: "56px",
              }}
            >
              Что входит
            </h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 400px), 1fr))",
                gap: "48px",
              }}
            >
              {/* Includes */}
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-main)",
                    fontSize: "13px",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.14em",
                    color: "var(--c-navy)",
                    marginBottom: "20px",
                    paddingBottom: "12px",
                    borderBottom: `2px solid ${accentColor}`,
                  }}
                >
                  Включено
                </p>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
                  {detail.includes.map((item) => (
                    <li
                      key={item}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "12px",
                        fontFamily: "var(--font-main)",
                        fontSize: "15px",
                        color: "#444",
                        lineHeight: 1.5,
                      }}
                    >
                      <span style={{ flexShrink: 0, color: accentColor, marginTop: "2px" }}>
                        <Check size={15} />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Excludes */}
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-main)",
                    fontSize: "13px",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.14em",
                    color: "var(--c-muted)",
                    marginBottom: "20px",
                    paddingBottom: "12px",
                    borderBottom: "2px solid var(--c-surface-2)",
                  }}
                >
                  Не включено
                </p>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
                  {detail.excludes.map((item) => (
                    <li
                      key={item}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "12px",
                        fontFamily: "var(--font-main)",
                        fontSize: "15px",
                        color: "#888",
                        lineHeight: 1.5,
                      }}
                    >
                      <span style={{ flexShrink: 0, color: "var(--c-muted)", marginTop: "2px" }}>
                        <X size={15} />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── GEAR ─────────────────────────────────────── */}
      {detail?.gear && (
        <section className="section-pad" style={{ backgroundColor: "var(--c-surface-1)" }}>
          <div style={{ maxWidth: "1320px", margin: "0 auto" }}>
            <p className="label" style={{ marginBottom: "12px" }}>Подготовка</p>
            <h2
              className="display"
              style={{
                fontSize: "clamp(36px, 5vw, 72px)",
                color: "var(--c-navy)",
                marginBottom: "48px",
              }}
            >
              Снаряжение
            </h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 280px), 1fr))",
                gap: "1px",
                backgroundColor: "var(--c-surface-2)",
              }}
            >
              {detail.gear.map((item) => (
                <div
                  key={item}
                  style={{
                    backgroundColor: "#fff",
                    padding: "16px 20px",
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                  }}
                >
                  <span style={{ color: "var(--c-sky)", flexShrink: 0 }}>
                    <Check size={14} />
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-main)",
                      fontSize: "14px",
                      color: "var(--c-navy)",
                      lineHeight: 1.4,
                    }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {detail.requirements && (
              <div
                style={{
                  marginTop: "40px",
                  padding: "28px 32px",
                  backgroundColor: "#fff",
                  borderLeft: `4px solid ${accentColor}`,
                }}
              >
                <p className="label" style={{ marginBottom: "8px" }}>Требования к участникам</p>
                <p
                  style={{
                    fontFamily: "var(--font-main)",
                    fontSize: "15px",
                    color: "#555",
                    lineHeight: 1.65,
                  }}
                >
                  {detail.requirements}
                </p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* ── LOGISTICS ────────────────────────────────── */}
      {detail && (detail.transport || detail.accommodation) && (
        <section className="section-pad" style={{ backgroundColor: "#fff" }}>
          <div style={{ maxWidth: "1320px", margin: "0 auto" }}>
            <p className="label" style={{ marginBottom: "12px" }}>Организационные моменты</p>
            <h2
              className="display"
              style={{
                fontSize: "clamp(36px, 5vw, 72px)",
                color: "var(--c-navy)",
                marginBottom: "48px",
              }}
            >
              Детали
            </h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 380px), 1fr))",
                gap: "2px",
                backgroundColor: "var(--c-surface-2)",
              }}
            >
              {[
                { label: "Транспорт", text: detail.transport },
                { label: "Проживание", text: detail.accommodation },
              ].map((block) => (
                <div
                  key={block.label}
                  style={{ backgroundColor: "#fff", padding: "36px 32px" }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-main)",
                      fontSize: "13px",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.14em",
                      color: "var(--c-sky)",
                      marginBottom: "14px",
                    }}
                  >
                    {block.label}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-main)",
                      fontSize: "15px",
                      lineHeight: 1.7,
                      color: "#555",
                    }}
                  >
                    {block.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── BOOKING FORM ─────────────────────────────── */}
      <section
        id="booking"
        className="section-pad"
        style={{
          background: "linear-gradient(160deg, var(--c-navy) 0%, var(--c-navy-dark) 100%)",
        }}
      >
        <div
          style={{
            maxWidth: "720px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <p className="label" style={{ color: "rgba(117,181,208,0.6)", marginBottom: "16px" }}>
            Запись
          </p>
          <h2
            className="display"
            style={{
              fontSize: "clamp(36px, 6vw, 80px)",
              color: "#fff",
              marginBottom: "16px",
            }}
          >
            Хотите участвовать?
          </h2>
          <p
            style={{
              fontFamily: "var(--font-main)",
              fontSize: "16px",
              color: "rgba(255,255,255,0.6)",
              lineHeight: 1.65,
              marginBottom: "48px",
            }}
          >
            Оставьте заявку — мы свяжемся в течение дня, ответим на вопросы
            и забронируем за вами место.
          </p>

          {formSent ? (
            <div
              style={{
                padding: "40px",
                backgroundColor: "rgba(117,181,208,0.12)",
                border: "1px solid rgba(117,181,208,0.3)",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-main)",
                  fontSize: "20px",
                  fontWeight: 700,
                  color: "#fff",
                  marginBottom: "8px",
                }}
              >
                Заявка отправлена!
              </p>
              <p style={{ fontFamily: "var(--font-main)", fontSize: "15px", color: "rgba(255,255,255,0.6)" }}>
                Ждите звонка или письма в течение рабочего дня.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); setFormSent(true); }}
              style={{ display: "flex", flexDirection: "column", gap: "12px" }}
            >
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                <input
                  required
                  type="text"
                  placeholder="Имя"
                  style={darkInput}
                />
                <input
                  required
                  type="tel"
                  placeholder="Телефон"
                  style={darkInput}
                />
              </div>
              <input
                required
                type="email"
                placeholder="Email"
                style={darkInput}
              />
              <textarea
                rows={3}
                placeholder="Комментарий (опыт, вопросы)"
                style={{ ...darkInput, resize: "none" }}
              />

              {/* Hidden field — event name */}
              <input type="hidden" value={event.title} />

              <button
                type="submit"
                style={{
                  fontFamily: "var(--font-main)",
                  fontSize: "13px",
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  padding: "18px",
                  border: "2px solid #fff",
                  borderRadius: "30px",
                  backgroundColor: "#fff",
                  color: "var(--c-navy)",
                  cursor: "pointer",
                  marginTop: "8px",
                  transition: "opacity 0.2s ease",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.opacity = "0.85")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.opacity = "1")}
              >
                Отправить заявку
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}

const darkInput: React.CSSProperties = {
  background: "transparent",
  border: "1px solid rgba(117,181,208,0.2)",
  color: "#fff",
  fontFamily: "var(--font-main)",
  fontSize: "15px",
  padding: "16px 18px",
  outline: "none",
  width: "100%",
  transition: "border-color 0.2s ease",
};
