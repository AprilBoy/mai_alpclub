"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Мероприятия", href: "#events" },
  { label: "Команда", href: "#team" },
  { label: "О клубе", href: "#about" },
  { label: "Тренировки", href: "#training" },
  { label: "Контакты", href: "#contacts" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    setActive(href);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0,
          zIndex: 100,
          height: "72px",
          display: "flex",
          alignItems: "center",
          backgroundColor: scrolled ? "rgba(27,69,121,0.96)" : "transparent",
          backdropFilter: scrolled ? "blur(14px)" : "none",
          transition: "background-color 0.35s ease, backdrop-filter 0.35s ease",
          borderBottom: scrolled ? "1px solid rgba(117,181,208,0.15)" : "none",
        }}
      >
        <div
          style={{
            maxWidth: "1320px",
            margin: "0 auto",
            padding: "0 40px",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Link
            href="/"
            style={{ display: "flex", alignItems: "center", textDecoration: "none", flexShrink: 0 }}
          >
            <Image
              src="/images/file.svg"
              alt="Альпклуб МАИ"
              width={100}
              height={100}
              style={{ height: "100px", width: "auto", display: "block", flexShrink: 0 }}
              priority
            />
          </Link>

          <nav className="hidden md:flex" style={{ alignItems: "center", gap: "36px" }}>
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                link={link}
                isActive={active === link.href}
                onClick={handleNavClick}
              />
            ))}
          </nav>

          <button
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Открыть меню"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "8px",
              display: "flex",
              flexDirection: "column",
              gap: "5px",
            }}
          >
            <Burger open={mobileOpen} />
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 90,
          background: "linear-gradient(160deg, #1b4579 0%, #2d6fa0 60%, #75b5d0 100%)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "40px",
          opacity: mobileOpen ? 1 : 0,
          pointerEvents: mobileOpen ? "auto" : "none",
          transition: "opacity 0.3s ease",
        }}
      >
        {navLinks.map((link) => (
          <button
            key={link.href}
            onClick={() => handleNavClick(link.href)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: active === link.href ? "#fff" : "rgba(255,255,255,0.6)",
              fontSize: "clamp(24px, 6vw, 36px)",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              transition: "color 0.2s ease",
              fontFamily: "var(--font-main)",
            }}
          >
            {link.label}
          </button>
        ))}
      </div>
    </>
  );
}

function NavLink({
  link, isActive, onClick,
}: {
  link: { label: string; href: string };
  isActive: boolean;
  onClick: (href: string) => void;
}) {
  return (
    <button
      onClick={() => onClick(link.href)}
      onMouseEnter={(e) => {
        if (!isActive) (e.currentTarget as HTMLButtonElement).style.opacity = "1";
      }}
      onMouseLeave={(e) => {
        if (!isActive) (e.currentTarget as HTMLButtonElement).style.opacity = "0.65";
      }}
      style={{
        background: "none",
        border: "none",
        cursor: "pointer",
        color: "#fff",
        fontSize: "16px",
        fontWeight: 600,
        textTransform: "uppercase",
        letterSpacing: "0.06em",
        fontFamily: "var(--font-main)",
        opacity: isActive ? 1 : 0.65,
        transition: "opacity 0.3s ease",
        lineHeight: 1,
        borderBottom: isActive ? "1px solid rgba(117,181,208,0.9)" : "1px solid transparent",
        paddingBottom: "2px",
      }}
    >
      {link.label}
    </button>
  );
}

function Burger({ open }: { open: boolean }) {
  const base: React.CSSProperties = {
    display: "block",
    width: "24px",
    height: "2px",
    backgroundColor: "#fff",
    borderRadius: "1px",
    transformOrigin: "center",
    transition: "transform 0.3s ease, opacity 0.3s ease",
  };
  return (
    <>
      <span style={{ ...base, transform: open ? "translateY(7px) rotate(45deg)" : "none" }} />
      <span style={{ ...base, opacity: open ? 0 : 1, transform: open ? "scaleX(0)" : "none" }} />
      <span style={{ ...base, transform: open ? "translateY(-7px) rotate(-45deg)" : "none" }} />
    </>
  );
}
