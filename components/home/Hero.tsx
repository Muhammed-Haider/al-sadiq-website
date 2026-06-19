import Link from "next/link";
import { ArrowRight, Heart } from "lucide-react";
import GeometricPattern from "@/components/ui/GeometricPattern";

export default function Hero() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: 620,
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        background: "#0f3320",
      }}
    >
      {/* Stripe bg */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "repeating-linear-gradient(45deg,#143f29,#143f29 14px,#123a25 14px,#123a25 28px)",
        }}
      />
      {/* Geo pattern */}
      <GeometricPattern id="heroGeo" opacity={0.1} />
      {/* Gradient overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(100deg,rgba(10,32,20,.92) 0%,rgba(15,51,32,.74) 55%,rgba(15,51,32,.5) 100%)",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 4,
          maxWidth: 1240,
          margin: "0 auto",
          padding: "70px 28px",
          width: "100%",
        }}
      >
        <div
          className="animate-fadein"
          style={{ maxWidth: 720 }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 9,
              background: "rgba(201,162,39,.16)",
              border: "1px solid rgba(201,162,39,.4)",
              color: "#e3c766",
              padding: "6px 15px",
              borderRadius: 999,
              fontSize: 12.5,
              fontWeight: 500,
              letterSpacing: 0.4,
              marginBottom: 26,
            }}
          >
            <span
              style={{ width: 6, height: 6, background: "#c9a227", transform: "rotate(45deg)" }}
            />
            EST. 1996 · G-9/2, ISLAMABAD
          </div>

          <h1
            className="hero-title"
            style={{
              fontSize: 62,
              lineHeight: 1.04,
              fontWeight: 700,
              color: "#fff",
              margin: 0,
              letterSpacing: -1,
            }}
          >
            Al Sadiq Trust
          </h1>
          <div
            className="urdu"
            style={{ fontSize: 38, color: "#e3c766", margin: "6px 0 22px", lineHeight: 1.6 }}
          >
            الصادق ٹرسٹ
          </div>
          <p
            style={{
              fontSize: 20,
              color: "rgba(255,255,255,.86)",
              lineHeight: 1.55,
              margin: "0 0 36px",
              maxWidth: 560,
              fontWeight: 300,
            }}
          >
            Centre of religious, educational and social activities.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
            <Link
              href="/services"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 9,
                background: "#1a5c38",
                color: "#fff",
                fontWeight: 600,
                fontSize: 15.5,
                padding: "15px 28px",
                borderRadius: 11,
                boxShadow: "0 10px 30px rgba(0,0,0,.3)",
                border: "1px solid rgba(255,255,255,.12)",
              }}
            >
              Explore Our Services <ArrowRight size={18} />
            </Link>
            <Link
              href="/donate"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 9,
                background: "transparent",
                color: "#e3c766",
                fontWeight: 600,
                fontSize: 15.5,
                padding: "15px 28px",
                borderRadius: 11,
                border: "1.5px solid #c9a227",
              }}
            >
              <Heart size={18} /> Donate Now
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 880px) {
          .hero-title { font-size: 42px !important; }
        }
      `}</style>
    </section>
  );
}
