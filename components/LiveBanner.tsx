"use client";
import { useState, useEffect } from "react";
import { X } from "lucide-react";
import Link from "next/link";

export default function LiveBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem("liveBannerDismissed");
    if (!dismissed) setVisible(true);
  }, []);

  if (!visible) return null;

  return (
    <div
      style={{
        background: "#c0392b",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 14,
        padding: "9px 18px",
        fontSize: 13.5,
        fontWeight: 500,
        position: "relative",
        letterSpacing: 0.2,
      }}
    >
      <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
        <span
          className="pulse-live"
          style={{
            width: 8,
            height: 8,
            borderRadius: "50%",
            background: "#fff",
          }}
        />
        <strong style={{ fontWeight: 700, letterSpacing: 0.5 }}>WE ARE LIVE</strong>
      </span>
      <span style={{ opacity: 0.92 }}>Watch today&apos;s Majlis streaming now</span>
      <Link
        href="/media"
        style={{
          border: "1px solid rgba(255,255,255,.6)",
          padding: "3px 12px",
          borderRadius: 999,
          fontWeight: 600,
          fontSize: 12.5,
        }}
      >
        Watch →
      </Link>
      <button
        onClick={() => {
          sessionStorage.setItem("liveBannerDismissed", "1");
          setVisible(false);
        }}
        aria-label="Dismiss"
        style={{
          position: "absolute",
          right: 14,
          top: "50%",
          transform: "translateY(-50%)",
          background: "transparent",
          border: "none",
          color: "#fff",
          cursor: "pointer",
          display: "inline-flex",
          opacity: 0.85,
        }}
      >
        <X size={18} />
      </button>
    </div>
  );
}
