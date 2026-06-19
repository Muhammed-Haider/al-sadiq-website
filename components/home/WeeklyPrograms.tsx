import { Clock } from "lucide-react";

interface Program {
  _id: string;
  day: string;
  name: string;
  description: string;
  time: string;
}

const defaultPrograms: Program[] = [
  {
    _id: "1",
    day: "TUESDAY",
    name: "Dua-e-Tawassul",
    description: "Weekly supplication seeking intercession, followed by ziyarat and brief lecture.",
    time: "After Maghrib",
  },
  {
    _id: "2",
    day: "THURSDAY",
    name: "Dua-e-Kumayl",
    description: "The renowned supplication of Imam Ali (a.s.) recited collectively in the imambargah.",
    time: "After Isha",
  },
  {
    _id: "3",
    day: "FRIDAY",
    name: "Jumu'ah & Dua-e-Nudba",
    description: "Friday congregational prayer with khutbah, preceded by the morning Dua-e-Nudba.",
    time: "Friday Noon",
  },
];

export default function WeeklyPrograms({ programs }: { programs?: Program[] }) {
  const list = programs?.length ? programs : defaultPrograms;

  return (
    <section style={{ padding: "56px 28px 64px" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <span
            style={{
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: 1.5,
              color: "#c9a227",
              textTransform: "uppercase",
            }}
          >
            Join Us Every Week
          </span>
          <h2
            style={{
              margin: "10px 0 0",
              fontSize: 36,
              fontWeight: 700,
              color: "#1a3026",
              letterSpacing: -0.5,
            }}
          >
            Weekly Programs
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
            gap: 26,
          }}
        >
          {list.map((program) => (
            <div
              key={program._id}
              style={{
                border: "1px solid #efe9da",
                borderRadius: 16,
                padding: 30,
                background: "#fff",
                boxShadow: "0 8px 26px rgba(26,92,56,.05)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 4,
                  background: "linear-gradient(90deg,#1a5c38,#c9a227)",
                }}
              />
              <span
                style={{
                  display: "inline-block",
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: 1.5,
                  color: "#1a5c38",
                  background: "#eef5f0",
                  padding: "6px 13px",
                  borderRadius: 999,
                  marginBottom: 18,
                }}
              >
                {program.day}
              </span>
              <h3 style={{ margin: "0 0 6px", fontSize: 21, fontWeight: 600, color: "#1a3026" }}>
                {program.name}
              </h3>
              <p style={{ margin: "0 0 14px", fontSize: 14.5, color: "#6a6a6a" }}>
                {program.description}
              </p>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 7,
                  fontSize: 13.5,
                  color: "#c9a227",
                  fontWeight: 600,
                }}
              >
                <Clock size={15} /> {program.time}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
