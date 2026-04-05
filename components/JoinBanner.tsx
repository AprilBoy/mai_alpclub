"use client";

import { asset } from "@/lib/asset";

export default function JoinBanner() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "480px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        overflow: "hidden",
        padding: "80px 40px",
      }}
    >
      {/* Photo */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${asset('/images/join-bg.jpg')})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "var(--c-navy)",
        }}
      />
      {/* Gradient overlay — palette colors */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(160deg, rgba(27,69,121,0.88) 0%, rgba(45,111,160,0.78) 55%, rgba(117,181,208,0.65) 100%)",
        }}
      />
      {/* Bottom fade into Contacts section */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to bottom, transparent 40%, #1b4579 100%)",
        }}
      />

      <div style={{ position: "relative", zIndex: 10, maxWidth: "760px" }}>
        <p className="label" style={{ color: "rgba(117,181,208,0.7)", marginBottom: "16px" }}>
          Присоединяйся
        </p>
        <h2
          className="display"
          style={{ fontSize: "clamp(40px, 8vw, 100px)", color: "#fff", marginBottom: "20px" }}
        >
          начни своё<br />восхождение
        </h2>
        <p
          style={{
            fontFamily: "var(--font-main)",
            fontSize: "16px",
            lineHeight: 1.65,
            color: "rgba(255,255,255,0.65)",
            maxWidth: "520px",
            margin: "0 auto 40px",
          }}
        >
          Тренировки каждый вторник и четверг с 19:00 в спортзале МАИ.
          Первое занятие — бесплатно. Снаряжение для новичков предоставляется.
        </p>

        <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
          <button className="btn-outline-white">Написать нам</button>
        </div>
      </div>
    </section>
  );
}
