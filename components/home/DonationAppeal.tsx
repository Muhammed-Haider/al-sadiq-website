import Link from "next/link";
import { Heart } from "lucide-react";
import GeometricPattern from "@/components/ui/GeometricPattern";

export default function DonationAppeal() {
  return (
    <section
      style={{
        background: "#0f3320",
        padding: "80px 28px",
        position: "relative",
        overflow: "hidden",
        textAlign: "center",
      }}
    >
      <GeometricPattern id="donGeo" opacity={0.08} />
      <div style={{ position: "relative", zIndex: 2, maxWidth: 700, margin: "0 auto" }}>
        <div className="urdu" style={{ fontSize: 30, color: "#e3c766", marginBottom: 10 }}>
          صدقہ جاریہ
        </div>
        <h2
          style={{
            margin: "0 0 18px",
            fontSize: 40,
            fontWeight: 700,
            color: "#fff",
            letterSpacing: -0.8,
          }}
        >
          Give with an Open Heart
        </h2>
        <p
          style={{
            margin: "0 auto 36px",
            maxWidth: 560,
            fontSize: 17,
            color: "rgba(255,255,255,.82)",
            lineHeight: 1.6,
          }}
        >
          Your contribution is a continuing charity that sustains worship, education, healthcare and
          welfare for the community of Islamabad.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "center" }}>
          <Link
            href="/donate"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 9,
              background: "#c9a227",
              color: "#1a3026",
              fontWeight: 700,
              fontSize: 16,
              padding: "15px 30px",
              borderRadius: 12,
              boxShadow: "0 12px 30px rgba(201,162,39,.3)",
            }}
          >
            <Heart size={18} /> Donate Now
          </Link>
          <Link
            href="/contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 9,
              background: "transparent",
              color: "rgba(255,255,255,.9)",
              fontWeight: 600,
              fontSize: 16,
              padding: "15px 30px",
              borderRadius: 12,
              border: "1.5px solid rgba(255,255,255,.3)",
            }}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
