import Link from "next/link";
import Image from "next/image";
import { Play } from "lucide-react";
import type { YouTubeVideo } from "@/lib/youtube";

export default function VideoGrid({ videos }: { videos: YouTubeVideo[] }) {
  return (
    <section style={{ padding: "40px 28px 70px" }}>
      <div style={{ maxWidth: 1140, margin: "0 auto" }}>
        <h2
          style={{
            margin: "0 0 26px",
            fontSize: 26,
            fontWeight: 700,
            color: "#1a3026",
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
        >
          <span
            style={{
              width: 9,
              height: 9,
              background: "#c9a227",
              transform: "rotate(45deg)",
              display: "inline-block",
            }}
          />
          Recent Recordings
        </h2>

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
              className="video-card"
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
                {/* Play overlay */}
                <div
                  className="video-play-overlay"
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

                {/* YouTube badge */}
                <span
                  style={{
                    position: "absolute",
                    bottom: 8,
                    right: 10,
                    background: "rgba(0,0,0,.7)",
                    color: "#fff",
                    fontSize: 11,
                    padding: "2px 7px",
                    borderRadius: 5,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 4,
                  }}
                >
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="#ff0000">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                  YouTube
                </span>
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
                Al Sadiq Trust
                {video.viewCount ? ` · ${video.viewCount}` : ""}
                {video.publishedAt ? ` · ${video.publishedAt}` : ""}
              </p>
            </Link>
          ))}
        </div>

        {/* View all on YouTube */}
        <div style={{ textAlign: "center", marginTop: 44 }}>
          <Link
            href="https://www.youtube.com/channel/UCL_1RhEhP_CeeHd_d4aj8qg"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 9,
              background: "#c0392b",
              color: "#fff",
              fontWeight: 600,
              fontSize: 15,
              padding: "13px 28px",
              borderRadius: 11,
              boxShadow: "0 8px 22px rgba(192,57,43,.25)",
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
            View All Videos on YouTube
          </Link>
        </div>
      </div>

      <style>{`
        .video-card:hover .video-play-overlay { opacity: 1 !important; }
        .video-card:hover h3 { color: #1a5c38; }
      `}</style>
    </section>
  );
}
