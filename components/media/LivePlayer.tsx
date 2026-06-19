"use client";
import { useState } from "react";
import { Play, Radio } from "lucide-react";
import GeometricPattern from "@/components/ui/GeometricPattern";

interface LivePlayerProps {
  latestVideoId: string;
  latestVideoTitle: string;
  liveStreamUrl: string;
}

export default function LivePlayer({ latestVideoId, latestVideoTitle, liveStreamUrl }: LivePlayerProps) {
  const [playing, setPlaying] = useState(false);

  // Embed the latest actual video (always playable), not the unreliable live_stream URL
  const embedUrl = `https://www.youtube.com/embed/${latestVideoId}?autoplay=1&rel=0`;
  const thumbnail = `https://img.youtube.com/vi/${latestVideoId}/maxresdefault.jpg`;

  return (
    <section id="liveplayer" style={{ padding: "44px 28px 20px" }}>
      <div style={{ maxWidth: 1140, margin: "0 auto" }}>
        {/* Header row */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12, marginBottom: 16 }}>
          <h2 style={{ margin: 0, fontSize: 22, fontWeight: 600, color: "#1a3026" }}>
            Latest Majlis
          </h2>
          {/* Watch Live button — opens YouTube live page in new tab */}
          <a
            href={liveStreamUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "#c0392b",
              color: "#fff",
              padding: "8px 16px",
              borderRadius: 8,
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: 0.5,
            }}
          >
            <span
              className="pulse-live2"
              style={{ width: 7, height: 7, borderRadius: "50%", background: "#fff", flexShrink: 0 }}
            />
            <Radio size={14} />
            Watch Live on YouTube
          </a>
        </div>

        {/* Player */}
        <div
          style={{
            position: "relative",
            aspectRatio: "16/9",
            borderRadius: 18,
            overflow: "hidden",
            background: "#0f3320",
            boxShadow: "0 20px 50px rgba(15,51,32,.2)",
          }}
        >
          {playing ? (
            <iframe
              src={embedUrl}
              title={latestVideoTitle}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
              allowFullScreen
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none" }}
            />
          ) : (
            <>
              <GeometricPattern id="lpGeo" opacity={0.08} />
              {/* Real YouTube thumbnail */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={thumbnail}
                alt={latestVideoTitle}
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
                onError={(e) => {
                  // Fall back to hqdefault if maxresdefault isn't available
                  (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${latestVideoId}/hqdefault.jpg`;
                }}
              />
              {/* Dark overlay */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(0deg,rgba(10,32,20,.65) 0%,rgba(15,51,32,.15) 60%)",
                }}
              />

              {/* Centred play button */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  zIndex: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <button
                  onClick={() => setPlaying(true)}
                  aria-label="Play video"
                  className="live-play-btn"
                  style={{
                    width: 88,
                    height: 88,
                    borderRadius: "50%",
                    background: "rgba(192,57,43,.95)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "none",
                    cursor: "pointer",
                    boxShadow: "0 10px 30px rgba(0,0,0,.4)",
                    transition: "transform .15s, background .15s",
                  }}
                >
                  <Play size={38} color="#fff" style={{ marginLeft: 5 }} />
                </button>
              </div>

              {/* Title strip at bottom */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  zIndex: 2,
                  padding: "16px 20px",
                }}
              >
                <p
                  style={{
                    margin: 0,
                    fontSize: 15,
                    fontWeight: 600,
                    color: "#fff",
                    textShadow: "0 1px 4px rgba(0,0,0,.6)",
                    overflow: "hidden",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  {latestVideoTitle}
                </p>
                <p style={{ margin: "4px 0 0", fontSize: 12, color: "rgba(255,255,255,.7)" }}>
                  Al Sadiq Trust · Click to play
                </p>
              </div>
            </>
          )}
        </div>
      </div>

      <style>{`
        .live-play-btn:hover { transform: scale(1.1); background: rgba(192,57,43,1) !important; }
      `}</style>
    </section>
  );
}
