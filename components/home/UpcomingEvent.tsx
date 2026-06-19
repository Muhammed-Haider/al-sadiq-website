import { Sparkles, User, Clock, MapPin } from "lucide-react";
import GeometricPattern from "@/components/ui/GeometricPattern";

interface EventData {
  islamicMonth?: string;
  islamicDay?: string;
  islamicDayName?: string;
  label?: string;
  title?: string;
  description?: string;
  speaker?: string;
  time?: string;
  location?: string;
}

const defaultEvent: EventData = {
  islamicMonth: "RAJAB",
  islamicDay: "13",
  islamicDayName: "FRIDAY",
  label: "WILADAT IMAM ALI (A.S.)",
  title: "Jashn-e-Wiladat & Special Majlis",
  description:
    "A blessed evening commemorating the birth of Amir al-Mu'minin, with recitation, lecture and communal dinner.",
  speaker: "Allama Syed M. Naqvi",
  time: "After Maghrib Prayers",
  location: "Main Imambargah",
};

export default function UpcomingEvent({ event }: { event?: EventData }) {
  const ev = event || defaultEvent;

  return (
    <section style={{ background: "#fbfaf6", padding: "60px 28px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 22 }}>
          <span
            style={{ width: 9, height: 9, background: "#c9a227", transform: "rotate(45deg)" }}
          />
          <span
            style={{
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: 1.5,
              color: "#1a5c38",
              textTransform: "uppercase",
            }}
          >
            Next Upcoming Event
          </span>
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "stretch",
            background: "#fff",
            border: "1px solid #efe9da",
            borderRadius: 18,
            overflow: "hidden",
            boxShadow: "0 14px 40px rgba(26,92,56,.06)",
          }}
        >
          {/* Date box */}
          <div
            style={{
              background: "#1a5c38",
              color: "#fff",
              padding: "34px 40px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              minWidth: 170,
              position: "relative",
            }}
          >
            <GeometricPattern id="evGeo" opacity={0.12} size={40} />
            <span style={{ position: "relative", fontSize: 13, letterSpacing: 2, color: "#e3c766", fontWeight: 600 }}>
              {ev.islamicMonth}
            </span>
            <span style={{ position: "relative", fontSize: 56, fontWeight: 700, lineHeight: 1 }}>
              {ev.islamicDay}
            </span>
            <span style={{ position: "relative", fontSize: 13, letterSpacing: 1, opacity: 0.85 }}>
              {ev.islamicDayName}
            </span>
          </div>

          {/* Details */}
          <div
            style={{
              flex: 1,
              minWidth: 280,
              padding: "34px 40px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 7,
                fontSize: 12.5,
                fontWeight: 600,
                color: "#c0392b",
                marginBottom: 10,
              }}
            >
              <Sparkles size={15} /> {ev.label}
            </span>
            <h3 style={{ margin: "0 0 8px", fontSize: 26, fontWeight: 700, color: "#1a3026" }}>
              {ev.title}
            </h3>
            <p style={{ margin: "0 0 16px", fontSize: 15, color: "#6a6a6a" }}>{ev.description}</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 22, fontSize: 14, color: "#4a4a4a" }}>
              {ev.speaker && (
                <span style={{ display: "inline-flex", alignItems: "center", gap: 7 }}>
                  <User size={16} color="#c9a227" /> {ev.speaker}
                </span>
              )}
              {ev.time && (
                <span style={{ display: "inline-flex", alignItems: "center", gap: 7 }}>
                  <Clock size={16} color="#c9a227" /> {ev.time}
                </span>
              )}
              {ev.location && (
                <span style={{ display: "inline-flex", alignItems: "center", gap: 7 }}>
                  <MapPin size={16} color="#c9a227" /> {ev.location}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
