"use client";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "var(--c-navy-dark)",
        borderTop: "1px solid rgba(117,181,208,0.1)",
        padding: "32px 40px",
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
          gap: "16px",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-main)",
            fontWeight: 700,
            fontSize: "14px",
            color: "#fff",
            textTransform: "uppercase",
            letterSpacing: "0.14em",
          }}
        >
          Альпклуб МАИ
        </span>

        <span style={{ fontFamily: "var(--font-main)", fontSize: "12px", color: "rgba(117,181,208,0.35)" }}>
          © {new Date().getFullYear()} Альпинистская секция МАИ
        </span>

        <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
          {["VK", "Telegram", "Instagram"].map((s) => (
            <a
              key={s}
              href="#"
              style={{
                fontFamily: "var(--font-main)",
                fontSize: "11px",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "var(--c-sky)",
                opacity: 0.35,
                textDecoration: "none",
                transition: "opacity 0.2s ease",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "1")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "0.35")}
            >
              {s}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
