import { asset } from "@/lib/asset";

const stats = [
  { value: "1935", label: "год основания" },
  { value: "500+", label: "выпускников" },
  { value: "200+", label: "вершин покорено" },
  { value: "30+", label: "мероприятий в год" },
];

export default function About() {
  return (
    <section id="about" className="section-pad" style={{ backgroundColor: "var(--c-surface-1)"}}>
      <div style={{ maxWidth: "1320px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 480px), 1fr))",
            gap: "80px",
            alignItems: "center",
          }}
        >
          {/* Left */}
          <div>
            <p className="label" style={{ marginBottom: "12px" }}>О клубе</p>
            <h2
              className="display"
              style={{ fontSize: "clamp(40px, 6vw, 80px)", color: "var(--c-navy)", marginBottom: "36px" }}
            >
              горы —<br />это образ<br />жизни
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "18px", color: "var(--c-muted)", fontFamily: "var(--font-main)", fontSize: "16px", lineHeight: 1.7 }}>
              <p>
                Альпинистская секция МАИ основана в 1935 году и за это время воспитала
                сотни спортсменов, мастеров спорта и кандидатов в мастера по альпинизму.
              </p>
              <p>
                Мы принимаем всех — от начинающих, кто ни разу не был в горах, до
                опытных восходителей, готовящихся к сложным маршрутам. Главное — желание
                расти и любовь к горам.
              </p>
              <p>
                В клубе проводятся регулярные тренировки на скалодроме, выезды на
                скалы, ледовые занятия и полноценные горные экспедиции.
              </p>
            </div>

            <button className="btn-solid" style={{ marginTop: "36px" }}>Вступить в клуб</button>
          </div>

          {/* Right */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <div
              style={{
                height: "420px",
                backgroundImage: `url(${asset('/images/about_1.jpg')})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundColor: "var(--c-surface-2)",
              }}
            />

            {/* Stats — grid separated by 1px colored gap */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px" }}>
              {stats.map((s) => (
                <div
                  key={s.label}
                  style={{padding: "28px 24px" }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-main)",
                      fontSize: "clamp(32px, 4vw, 44px)",
                      fontWeight: 900,
                      color: "var(--c-navy)",
                      letterSpacing: "-0.03em",
                      lineHeight: 1,
                      marginBottom: "6px",
                    }}
                  >
                    {s.value}
                  </div>
                  <div className="label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
