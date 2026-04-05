"use client";

import { useEffect, useRef } from "react";
import { asset } from "@/lib/asset";

export default function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (bgRef.current)
        bgRef.current.style.transform = `translateY(${window.scrollY * 0.35}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        height: "100svh",
        minHeight: "560px",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Parallax photo */}
      <div
        ref={bgRef}
        style={{
          position: "absolute",
          inset: 0,
          top: "-15%",
          height: "130%",
          backgroundImage: `url(${asset('/images/main.jpg')})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#1b4579",
          willChange: "transform",
        }}
      />

      {/* Gradient overlay #1b4579 → #75b5d0 */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(160deg, rgba(27,69,121,0.82) 0%, rgba(45,111,160,0.68) 50%, rgba(117,181,208,0.55) 100%)",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          textAlign: "center",
          padding: "0 20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* <img
          src="/images/file.svg"
          alt="Альпклуб МАИ"
          style={{
            width: "clamp(260px, 45vw, 480px)",
            height: "auto",
            display: "block",
            filter: "drop-shadow(0 4px 40px rgba(27,69,121,0.5))",
          }}
        /> */}
        <h1
          className="display"
          style={{
            color: "#fff",
            fontSize: "clamp(56px, 13vw, 160px)",
            textShadow: "0 4px 60px rgba(27,69,121,0.4)",
          }}
        >
          АЛЬПКЛУБ
          <br />
          МАИ
        </h1>

        <p
          style={{
            color: "rgba(255,255,255,0.85)",
            fontFamily: "var(--font-main)",
            fontWeight: 400,
            fontSize: "clamp(12px, 1.8vw, 20px)",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            marginTop: "clamp(16px, 2.5vw, 28px)",
            lineHeight: 1.5,
          }}
        >
          секция альпинизма
          <br className="sm:hidden" />
          {" "}московского авиационного института
        </p>

        {/* <button
          className="btn-outline-white"
          onClick={() => document.querySelector("#events")?.scrollIntoView({ behavior: "smooth" })}
          style={{ marginTop: "clamp(32px, 5vw, 52px)" }}
        >
          Наши мероприятия
        </button> */}
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "32px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 10,
        }}
      >
        <span
          style={{
            display: "block",
            width: "4px",
            height: "52px",
            borderBottomLeftRadius: "25px",
            borderBottomRightRadius: "25px",
            background: "linear-gradient(to bottom, transparent, rgba(117,181,208,0.9))",
            animation: "fadeDown 2s ease-in-out infinite",
          }}
        />
        <style>{`
          @keyframes fadeDown {
            0%   { opacity: 0; transform: scaleY(0); transform-origin: top; }
            40%  { opacity: 1; transform: scaleY(1); transform-origin: top; }
            100% { opacity: 0; transform: scaleY(1); transform-origin: bottom; }
          }
        `}</style>
      </div>
    </section>
  );
}
