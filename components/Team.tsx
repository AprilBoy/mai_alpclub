"use client";

import Link from "next/link";
import { Mail } from "lucide-react";
import { team } from "@/lib/team";
import { asset } from "@/lib/asset";

export default function Team() {
  return (
    <section
      id="team"
      className="section-pad"
      style={{ background: "linear-gradient(160deg, #1b4579 0%, #2d6fa0 60%, #4a92bb 100%)" }}
    >
      <div style={{ maxWidth: "1320px", margin: "0 auto" }}>
        <p className="label" style={{ color: "rgba(117,181,208,0.6)", marginBottom: "12px" }}>Наши люди</p>
        <h2
          className="display"
          style={{ fontSize: "clamp(40px, 7vw, 88px)", color: "#fff", marginBottom: "64px" }}
        >
          Команда
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))",
            gap: "48px",
          }}
        >
          {team.map((m) => <TeamCard key={m.id} member={m} />)}
        </div>
      </div>
    </section>
  );
}

function TeamCard({ member }: { member: (typeof team)[0] }) {
  return (
    <div>
      <Link href={`/team/${member.id}`} style={{ textDecoration: "none", display: "block" }}>
        <div style={{ position: "relative", height: "380px", overflow: "hidden", marginBottom: "24px" }}>
          <div
            style={{
              width: "100%",
              height: "100%",
              backgroundImage: `url(${asset(member.image)})`,
              backgroundSize: "cover",
              backgroundPosition: "center top",
              backgroundColor: "rgba(27,69,121,0.4)",
              transition: "transform 0.5s ease",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.transform = "scale(1.04)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.transform = "scale(1)")}
          />
          <div
            style={{
              position: "absolute",
              bottom: 0, left: 0, right: 0,
              height: "55%",
              background: "linear-gradient(to top, rgba(27,69,121,0.85) 0%, transparent 100%)",
              pointerEvents: "none",
            }}
          />
          <p
            className="label"
            style={{ position: "absolute", bottom: "16px", left: "20px", right: "20px", color: "rgba(117,181,208,0.75)" }}
          >
            {member.grade}
          </p>
        </div>

        <h3
          style={{
            fontFamily: "var(--font-main)",
            fontSize: "22px",
            fontWeight: 800,
            color: "#fff",
            letterSpacing: "-0.01em",
            marginBottom: "4px",
          }}
        >
          {member.name}
        </h3>
      </Link>

      <p className="label" style={{ color: "rgba(117,181,208,0.7)", marginBottom: "14px" }}>
        {member.role}
      </p>
      <p
        style={{
          fontFamily: "var(--font-main)",
          fontSize: "14px",
          lineHeight: 1.65,
          color: "rgba(255,255,255,0.55)",
          marginBottom: "20px",
        }}
      >
        {member.bio}
      </p>

      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <a
          href={member.social}
          style={{
            color: "var(--c-sky)",
            opacity: 0.5,
            transition: "opacity 0.2s ease",
            fontFamily: "var(--font-main)",
            fontSize: "12px",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            textDecoration: "none",
          }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "1")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "0.5")}
        >
          VK
        </a>
        <a
          href={`mailto:${member.email}`}
          style={{ color: "var(--c-sky)", opacity: 0.5, transition: "opacity 0.2s ease", display: "flex" }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "1")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "0.5")}
          aria-label="Email"
        >
          <Mail size={16} />
        </a>
        <Link
          href={`/team/${member.id}`}
          style={{
            marginLeft: "auto",
            fontFamily: "var(--font-main)",
            fontSize: "12px",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            color: "var(--c-sky)",
            opacity: 0.5,
            textDecoration: "none",
            borderBottom: "1px solid rgba(117,181,208,0.3)",
            paddingBottom: "1px",
            transition: "opacity 0.2s ease",
          }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "1")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "0.5")}
        >
          Подробнее →
        </Link>
      </div>
    </div>
  );
}
