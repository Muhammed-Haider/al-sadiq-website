"use client";
import { useState } from "react";
import { Scale, Wheat, HandCoins, Flame, CalendarHeart, Stethoscope, BookOpen, Droplets, GraduationCap, Heart, Landmark, ShieldCheck } from "lucide-react";
import GeometricPattern from "@/components/ui/GeometricPattern";
import Link from "next/link";

interface Category {
  name: string;
  description: string;
  icon: React.ReactNode;
}

const categories: Category[] = [
  { name: "Khums", description: "The annual religious due", icon: <Scale size={22} /> },
  { name: "Zakat", description: "Obligatory alms for the needy", icon: <Wheat size={22} /> },
  { name: "Sadaqat", description: "Voluntary charity", icon: <HandCoins size={22} /> },
  { name: "Azadari Share", description: "Support for mourning gatherings", icon: <Flame size={22} /> },
  { name: "Majlis Sponsorship", description: "Sponsor a gathering in full", icon: <CalendarHeart size={22} /> },
  { name: "Medical Support", description: "Fund the community clinic", icon: <Stethoscope size={22} /> },
  { name: "Library Support", description: "Books & reading resources", icon: <BookOpen size={22} /> },
  { name: "Maghsal Support", description: "Funeral & ghusl facilities", icon: <Droplets size={22} /> },
  { name: "Education Support", description: "School fees & scholarships", icon: <GraduationCap size={22} /> },
];

const AMOUNTS = [1000, 5000, 10000];

export default function DonatePage() {
  const [selected, setSelected] = useState("Khums");
  const [amount, setAmount] = useState(5000);

  const catStyle = (name: string): React.CSSProperties => ({
    textAlign: "left",
    cursor: "pointer",
    background: selected === name ? "#f4f8f5" : "#fff",
    border: `1.5px solid ${selected === name ? "#1a5c38" : "#efe9da"}`,
    borderRadius: 14,
    padding: 18,
    display: "flex",
    gap: 14,
    alignItems: "flex-start",
    transition: "all .15s",
    fontFamily: "inherit",
    width: "100%",
  });

  const amtStyle = (v: number): React.CSSProperties => ({
    flex: 1,
    cursor: "pointer",
    padding: "11px 0",
    borderRadius: 10,
    border: `1.5px solid ${amount === v ? "#1a5c38" : "#e6ddc6"}`,
    background: amount === v ? "#1a5c38" : "#fff",
    fontWeight: 600,
    fontSize: 14,
    color: amount === v ? "#fff" : "#1a3026",
    fontFamily: "inherit",
  });

  return (
    <>
      {/* Hero */}
      <section
        style={{
          background: "#0f3320",
          padding: "54px 28px",
          position: "relative",
          overflow: "hidden",
          textAlign: "center",
        }}
      >
        <GeometricPattern id="dhGeo" opacity={0.1} />
        <div style={{ position: "relative" }}>
          <div className="urdu" style={{ fontSize: 26, color: "#e3c766", marginBottom: 10 }}>صدقہ جاریہ</div>
          <h1 style={{ margin: "0 0 12px", fontSize: 44, fontWeight: 700, color: "#fff", letterSpacing: -0.8 }}>
            Give with an Open Heart
          </h1>
          <p style={{ margin: "0 auto", maxWidth: 600, fontSize: 16.5, color: "rgba(255,255,255,.82)", lineHeight: 1.6 }}>
            Your contribution is a continuing charity that sustains worship, education, healthcare and welfare for the community of Islamabad.
          </p>
        </div>
      </section>

      {/* Two Column */}
      <section style={{ padding: "56px 28px 70px" }}>
        <div
          className="don-grid"
          style={{ maxWidth: 1180, margin: "0 auto", display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: 44, alignItems: "start" }}
        >
          {/* Categories */}
          <div>
            <h2 style={{ margin: "0 0 6px", fontSize: 28, fontWeight: 700, color: "#1a3026", letterSpacing: -0.5 }}>Donation Categories</h2>
            <p style={{ margin: "0 0 26px", fontSize: 15.5, color: "#6a6a6a" }}>Select a category to direct your contribution where it&apos;s needed most.</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))", gap: 14 }}>
              {categories.map((cat) => (
                <button key={cat.name} onClick={() => setSelected(cat.name)} style={catStyle(cat.name)}>
                  <span style={{ width: 44, height: 44, borderRadius: 11, background: "#eef5f0", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "#1a5c38", flexShrink: 0 }}>
                    {cat.icon}
                  </span>
                  <span>
                    <span style={{ display: "block", fontSize: 16, fontWeight: 600, color: "#1a3026" }}>{cat.name}</span>
                    <span style={{ display: "block", fontSize: 13, color: "#7a7a7a", marginTop: 2 }}>{cat.description}</span>
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Sticky Donate Card */}
          <aside
            className="don-card"
            style={{
              position: "sticky",
              top: 96,
              background: "#fff",
              border: "1px solid #efe9da",
              borderRadius: 20,
              padding: 30,
              boxShadow: "0 18px 50px rgba(26,92,56,.1)",
              overflow: "hidden",
            }}
          >
            <span style={{ position: "absolute", top: 0, left: 0, right: 0, height: 5, background: "linear-gradient(90deg,#1a5c38,#c9a227)" }} />
            <h3 style={{ margin: "6px 0 4px", fontSize: 21, fontWeight: 700, color: "#1a3026" }}>Donate Now</h3>
            <p style={{ margin: "0 0 18px", fontSize: 13.5, color: "#7a7a7a" }}>
              Selected: <strong style={{ color: "#1a5c38" }}>{selected}</strong>
            </p>

            <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#555", marginBottom: 8 }}>Amount (PKR)</label>
            <div style={{ display: "flex", gap: 8, marginBottom: 14 }}>
              {AMOUNTS.map((v) => (
                <button key={v} onClick={() => setAmount(v)} style={amtStyle(v)}>
                  {v.toLocaleString()}
                </button>
              ))}
            </div>

            <Link
              href="#"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 9,
                background: "#c9a227",
                color: "#1a3026",
                fontWeight: 700,
                fontSize: 16,
                padding: 15,
                borderRadius: 12,
                boxShadow: "0 10px 26px rgba(201,162,39,.3)",
                marginBottom: 22,
              }}
            >
              <Heart size={18} /> Proceed to Donate
            </Link>

            {/* Bank Transfer */}
            <div style={{ borderTop: "1px dashed #e6ddc6", paddingTop: 18 }}>
              <h4 style={{ margin: "0 0 12px", fontSize: 13, fontWeight: 700, color: "#1a3026", letterSpacing: 0.5, display: "flex", alignItems: "center", gap: 8 }}>
                <Landmark size={16} color="#c9a227" /> Bank Transfer Details
              </h4>
              <div style={{ background: "#fbfaf6", border: "1px solid #efe9da", borderRadius: 12, padding: 16, fontSize: 13.5, color: "#555", display: "flex", flexDirection: "column", gap: 9 }}>
                {[
                  { label: "Account Title", value: "Al Sadiq Trust" },
                  { label: "Bank", value: "[ bank name ]" },
                  { label: "Account No.", value: "[ 0000-0000000-0 ]" },
                  { label: "IBAN", value: "[ PK00 0000 0000 ]" },
                ].map(({ label, value }) => (
                  <div key={label} style={{ display: "flex", justifyContent: "space-between", gap: 8 }}>
                    <span style={{ color: "#8a8a8a" }}>{label}</span>
                    <span style={{ fontWeight: 600, color: "#1a3026", fontFamily: label === "Account No." || label === "IBAN" ? "ui-monospace,monospace" : undefined }}>{value}</span>
                  </div>
                ))}
              </div>
              <p style={{ margin: "12px 0 0", fontSize: 12, color: "#9a9a9a", display: "flex", alignItems: "flex-start", gap: 7 }}>
                <ShieldCheck size={14} color="#1a5c38" style={{ marginTop: 1, flexShrink: 0 }} />
                All donations are handled securely and used solely for the trust&apos;s charitable activities.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <style>{`
        @media (max-width: 880px) {
          .don-grid { grid-template-columns: 1fr !important; }
          .don-card { position: static !important; }
        }
      `}</style>
    </>
  );
}
