"use client";
import { useState } from "react";
import { X } from "lucide-react";

interface GalleryItem {
  _id: string;
  caption: string;
  category: string;
  image?: { asset?: { url: string }; alt?: string };
}

const CATEGORIES = ["All", "Masjid", "Library", "Majalis", "Medical", "Complex"];

const defaultItems: GalleryItem[] = [
  { _id: "1", category: "Masjid", caption: "Main prayer hall at Maghrib", image: undefined },
  { _id: "2", category: "Majalis", caption: "Ashura procession gathering", image: undefined },
  { _id: "3", category: "Library", caption: "The reading hall", image: undefined },
  { _id: "4", category: "Medical", caption: "Free medical camp", image: undefined },
  { _id: "5", category: "Complex", caption: "Trust complex courtyard", image: undefined },
  { _id: "6", category: "Masjid", caption: "Mihrab and calligraphy detail", image: undefined },
  { _id: "7", category: "Majalis", caption: "Evening majlis-e-aza", image: undefined },
  { _id: "8", category: "Library", caption: "Rare manuscripts collection", image: undefined },
  { _id: "9", category: "Medical", caption: "Consultation room", image: undefined },
  { _id: "10", category: "Complex", caption: "Entrance archway", image: undefined },
  { _id: "11", category: "Masjid", caption: "Friday congregation", image: undefined },
  { _id: "12", category: "Majalis", caption: "Recitation of noha", image: undefined },
];

const tabStyle = (active: boolean): React.CSSProperties => ({
  cursor: "pointer",
  padding: "9px 20px",
  borderRadius: 999,
  fontSize: 14,
  fontWeight: 600,
  border: `1.5px solid ${active ? "#1a5c38" : "#e6ddc6"}`,
  background: active ? "#1a5c38" : "#fff",
  color: active ? "#fff" : "#1a3026",
  transition: "all .15s",
});

const placeholderStyle: React.CSSProperties = {
  width: "100%",
  aspectRatio: "4/3",
  background: "repeating-linear-gradient(45deg,#e9e2d1,#e9e2d1 12px,#e3dcc8 12px,#e3dcc8 24px)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export default function GalleryClient({ items }: { items?: GalleryItem[] }) {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);
  const list = items?.length ? items : defaultItems;
  const shown = filter === "All" ? list : list.filter((i) => i.category === filter);

  return (
    <>
      {/* Filter Tabs */}
      <section
        style={{
          padding: "26px 28px 8px",
          position: "sticky",
          top: 74,
          zIndex: 30,
          background: "#fff",
          borderBottom: "1px solid #f5f1e8",
        }}
      >
        <div
          style={{
            maxWidth: 1180,
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            gap: 10,
            justifyContent: "center",
          }}
        >
          {CATEGORIES.map((cat) => (
            <button key={cat} onClick={() => setFilter(cat)} style={tabStyle(filter === cat)}>
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Masonry Grid */}
      <section style={{ padding: "26px 28px 70px" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <div className="masonry">
            {shown.map((item) => (
              <div
                key={item._id}
                onClick={() => setLightbox(item)}
                style={{
                  breakInside: "avoid",
                  marginBottom: 18,
                  borderRadius: 14,
                  overflow: "hidden",
                  cursor: "pointer",
                  position: "relative",
                  border: "1px solid #efe9da",
                }}
                className="gallery-item"
              >
                {item.image?.asset?.url ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={item.image.asset.url}
                    alt={item.image.alt || item.caption}
                    style={{ width: "100%", display: "block" }}
                  />
                ) : (
                  <div style={placeholderStyle}>
                    <span style={{ fontFamily: "ui-monospace,monospace", fontSize: 11, color: "#9a8c5f" }}>
                      [ {item.category} — Sanity ]
                    </span>
                  </div>
                )}
                <div
                  className="gallery-overlay"
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(0deg,rgba(15,51,32,.82) 0%,rgba(15,51,32,0) 50%)",
                    opacity: 0,
                    transition: "opacity .2s",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    padding: 16,
                  }}
                >
                  <span
                    style={{
                      display: "inline-flex",
                      alignSelf: "flex-start",
                      alignItems: "center",
                      gap: 6,
                      background: "rgba(201,162,39,.9)",
                      color: "#1a3026",
                      fontSize: 11,
                      fontWeight: 700,
                      padding: "3px 10px",
                      borderRadius: 999,
                      marginBottom: 8,
                      letterSpacing: 0.5,
                    }}
                  >
                    {item.category}
                  </span>
                  <span style={{ color: "#fff", fontSize: 14.5, fontWeight: 600 }}>{item.caption}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 100,
            background: "rgba(8,24,15,.9)",
            backdropFilter: "blur(4px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 28,
          }}
        >
          <button
            onClick={() => setLightbox(null)}
            aria-label="Close"
            style={{
              position: "absolute",
              top: 20,
              right: 24,
              width: 46,
              height: 46,
              borderRadius: "50%",
              background: "rgba(255,255,255,.12)",
              border: "none",
              color: "#fff",
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <X size={24} />
          </button>
          <div style={{ maxWidth: 900, width: "100%" }} onClick={(e) => e.stopPropagation()}>
            {lightbox.image?.asset?.url ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={lightbox.image.asset.url}
                alt={lightbox.caption}
                style={{ width: "100%", borderRadius: 16 }}
              />
            ) : (
              <div
                style={{
                  aspectRatio: "16/10",
                  borderRadius: 16,
                  background: "repeating-linear-gradient(45deg,#e9e2d1,#e9e2d1 16px,#e3dcc8 16px,#e3dcc8 32px)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span style={{ fontFamily: "ui-monospace,monospace", fontSize: 13, color: "#9a8c5f" }}>
                  [ {lightbox.category} ]
                </span>
              </div>
            )}
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 18 }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "#c9a227", color: "#1a3026", fontSize: 12, fontWeight: 700, padding: "4px 12px", borderRadius: 999, letterSpacing: 0.5 }}>
                {lightbox.category}
              </span>
              <span style={{ color: "#fff", fontSize: 16, fontWeight: 500 }}>{lightbox.caption}</span>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .masonry { column-count: 3; column-gap: 18px; }
        .gallery-item:hover .gallery-overlay { opacity: 1 !important; }
        @media (max-width: 880px) { .masonry { column-count: 2; } }
        @media (max-width: 560px) { .masonry { column-count: 1; } }
      `}</style>
    </>
  );
}
