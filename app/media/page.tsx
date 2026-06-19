import Link from "next/link";
import { Bell } from "lucide-react";
import {
  fetchLatestVideos,
  CHANNEL_SUBSCRIBE_URL,
  LIVE_STREAM_URL,
} from "@/lib/youtube";
import VideoGrid from "@/components/media/VideoGrid";
import LivePlayer from "@/components/media/LivePlayer";

export const revalidate = 300; // refresh every 5 minutes

const YouTubeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

export default async function MediaPage() {
  const videos = await fetchLatestVideos(7); // fetch 7: first one is the featured player, rest go in the grid

  return (
    <>
      {/* Page Head */}
      <section
        style={{
          background: "#fbfaf6",
          padding: "44px 28px 30px",
          textAlign: "center",
          borderBottom: "1px solid #f0ece0",
        }}
      >
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
        <h1
          style={{
            margin: "10px 0 8px",
            fontSize: 42,
            fontWeight: 700,
            color: "#1a3026",
            letterSpacing: -0.8,
          }}
        >
          Watch &amp; Listen
        </h1>
        <p style={{ margin: "0 auto", maxWidth: 560, fontSize: 16, color: "#6a6a6a" }}>
          Live streams, majalis, lectures and supplications — broadcast straight from the imambargah.
        </p>
      </section>

      {/* Featured video player — plays the most recent upload; "Watch Live" button links to YouTube live */}
      <LivePlayer
        latestVideoId={videos[0]?.id ?? "je8GPZ2vrkY"}
        latestVideoTitle={videos[0]?.title ?? "Latest Majlis — Al Sadiq Trust"}
        liveStreamUrl={LIVE_STREAM_URL}
      />

      {/* Subscribe CTA */}
      <section style={{ padding: "26px 28px 10px" }}>
        <div
          style={{
            maxWidth: 1140,
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 18,
            background: "#fbfaf6",
            border: "1px solid #efe9da",
            borderRadius: 16,
            padding: "22px 28px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <span
              style={{
                width: 48,
                height: 48,
                borderRadius: 12,
                background: "#c0392b",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                flexShrink: 0,
              }}
            >
              <YouTubeIcon />
            </span>
            <div>
              <h3 style={{ margin: "0 0 2px", fontSize: 18, fontWeight: 600, color: "#1a3026" }}>
                Al Sadiq Trust Official
              </h3>
              <p style={{ margin: 0, fontSize: 13.5, color: "#8a8a8a" }}>
                Never miss a majlis — subscribe for live notifications.
              </p>
            </div>
          </div>
          <Link
            href={CHANNEL_SUBSCRIBE_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 9,
              background: "#c9a227",
              color: "#1a3026",
              fontWeight: 700,
              fontSize: 15,
              padding: "13px 26px",
              borderRadius: 11,
              boxShadow: "0 8px 22px rgba(201,162,39,.3)",
            }}
          >
            <Bell size={17} /> Subscribe on YouTube
          </Link>
        </div>
      </section>

      {/* Video Grid — skip first video since it's already in the featured player */}
      <VideoGrid videos={videos.slice(1)} />
    </>
  );
}
