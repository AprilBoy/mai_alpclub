"use client";

import { MapPin, Phone, Mail, Clock } from "lucide-react";

const contactItems = [
  { icon: MapPin, label: "Адрес",       value: "Москва, Дубосековская, 13" },
  { icon: Phone, label: "Телефон",      value: "+7 (495) 000-00-00" },
  { icon: Mail,  label: "Email",        value: "alpclub@mai.ru" },
  { icon: Clock, label: "Тренировки",   value: "Вт, Чт — 19:00–21:00 / Сб — 11:00–14:00" },
];

const socials = ["VK", "Telegram", "Instagram", "YouTube"];

const inputStyle: React.CSSProperties = {
  background: "transparent",
  border: "1px solid rgba(117,181,208,0.2)",
  color: "#fff",
  fontFamily: "var(--font-main)",
  fontSize: "14px",
  padding: "14px 16px",
  outline: "none",
  width: "100%",
  transition: "border-color 0.2s ease",
};

export default function Contacts() {
  return (
    <section
      id="contacts"
      className="section-pad"
      style={{ background: "linear-gradient(180deg, #1b4579 0%, #122f55 100%)" }}
    >
      <div style={{ maxWidth: "1320px", margin: "0 auto" }}>
        <p className="label" style={{ color: "rgba(117,181,208,0.5)", marginBottom: "12px" }}>Связь</p>
        <h2
          className="display"
          style={{ fontSize: "clamp(40px, 7vw, 88px)", color: "#fff", marginBottom: "64px" }}
        >
          Контакты
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 440px), 1fr))",
            gap: "80px",
          }}
        >
          {/* Contact info */}
          <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
            {contactItems.map((item) => (
              <div key={item.label} style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
                <div
                  style={{
                    flexShrink: 0,
                    width: "40px",
                    height: "40px",
                    border: "1px solid rgba(117,181,208,0.25)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <item.icon size={15} style={{ color: "var(--c-sky)" }} />
                </div>
                <div>
                  <p className="label" style={{ color: "rgba(117,181,208,0.5)", marginBottom: "4px" }}>{item.label}</p>
                  <p style={{ fontFamily: "var(--font-main)", fontSize: "15px", color: "rgba(255,255,255,0.8)", lineHeight: 1.4 }}>
                    {item.value}
                  </p>
                </div>
              </div>
            ))}

            <div>
              <p className="label" style={{ color: "rgba(117,181,208,0.5)", marginBottom: "16px" }}>Социальные сети</p>
              <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
                {socials.map((s) => (
                  <a
                    key={s}
                    href="#"
                    style={{
                      fontFamily: "var(--font-main)",
                      fontSize: "12px",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      color: "var(--c-sky)",
                      opacity: 0.45,
                      textDecoration: "none",
                      transition: "opacity 0.2s ease",
                      borderBottom: "1px solid rgba(117,181,208,0.3)",
                      paddingBottom: "1px",
                    }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "1")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "0.45")}
                  >
                    {s}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={(e) => e.preventDefault()}
            style={{ display: "flex", flexDirection: "column", gap: "12px" }}
          >
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
              <input type="text"  placeholder="Ваше имя" style={inputStyle} />
              <input type="email" placeholder="Email"     style={inputStyle} />
            </div>
            <input    type="text" placeholder="Тема"      style={inputStyle} />
            <textarea rows={5} placeholder="Ваше сообщение..." style={{ ...inputStyle, resize: "none" }} />
            <button
              type="submit"
              style={{
                fontFamily: "var(--font-main)",
                fontSize: "13px",
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                border: "1px solid rgba(117,181,208,0.3)",
                padding: "16px",
                color: "#fff",
                backgroundColor: "rgba(117,181,208,0.08)",
                cursor: "pointer",
                transition: "background 0.2s ease, border-color 0.2s ease",
                marginTop: "4px",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLButtonElement;
                el.style.backgroundColor = "rgba(117,181,208,0.18)";
                el.style.borderColor = "rgba(117,181,208,0.6)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLButtonElement;
                el.style.backgroundColor = "rgba(117,181,208,0.08)";
                el.style.borderColor = "rgba(117,181,208,0.3)";
              }}
            >
              Отправить
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
