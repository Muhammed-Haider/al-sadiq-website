import Link from "next/link";
import Image from "next/image";
import { Play } from "lucide-react";
import { CHANNEL_SUBSCRIBE_URL } from "@/lib/youtube";
import type { YouTubeVideo } from "@/lib/youtube";

export default function LatestVideos({ videos }: { videos: YouTubeVideo[] }) {
  return (
    <section style={{ padding: "70px 28px", background: "#fff" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 36,
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <div>
            <span
              style={{
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: 1.5,
                color: "#c9a227",
                textTransform: "uppercase",
              }}
            >
              Media Centre
            </span>
            <h2
              style={{
                margin: "8px 0 0",
                fontSize: 34,
                fontWeight: 700,
                color: "#1a3026",
                letterSpacing: -0.5,
              }}
            >
              Latest Videos
            </h2>
          </div>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <Link
              href={CHANNEL_SUBSCRIBE_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 7,
                fontSize: 14,
                fontWeight: 600,
                color: "#fff",
                background: "#c0392b",
                padding: "9px 18px",
                borderRadius: 999,
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              Subscribe
            </Link>
            <Link
              href="/media"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 7,
                fontSize: 14,
                fontWeight: 600,
                color: "#1a5c38",
                border: "1.5px solid #1a5c38",
                padding: "9px 18px",
                borderRadius: 999,
              }}
            >
              View All
            </Link>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(290px,1fr))",
            gap: 24,
          }}
        >
          {videos.map((video) => (
            <Link
              key={video.id}
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "block", color: "inherit" }}
              className="home-video-card"
            >
              <div
                style={{
                  position: "relative",
                  aspectRatio: "16/9",
                  borderRadius: 14,
                  overflow: "hidden",
                  background: "#1a3026",
                }}
              >
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  fill
                  sizes="(max-width: 880px) 100vw, 33vw"
                  style={{ objectFit: "cover" }}
                />
                <div
                  className="home-video-overlay"
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "rgba(10,32,20,.4)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    opacity: 0,
                    transition: "opacity .2s",
                  }}
                >
                  <span
                    style={{
                      width: 54,
                      height: 54,
                      borderRadius: "50%",
                      background: "rgba(192,57,43,.92)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#fff",
                    }}
                  >
                    <Play size={23} style={{ marginLeft: 3 }} />
                  </span>
                </div>
              </div>
              <h3
                style={{
                  margin: "13px 0 4px",
                  fontSize: 15.5,
                  fontWeight: 600,
                  color: "#1a3026",
                  lineHeight: 1.4,
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              >
                {video.title}
              </h3>
              <p style={{ margin: 0, fontSize: 13, color: "#8a8a8a" }}>
                Al Sadiq Trust{video.viewCount ? ` · ${video.viewCount}` : ""}{video.publishedAt ? ` · ${video.publishedAt}` : ""}
              </p>
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        .home-video-card:hover .home-video-overlay { opacity: 1 !important; }
        .home-video-card:hover h3 { color: #1a5c38; }
      `}</style>
    </section>
  );
}
