import { getGalleryImages } from "@/sanity/queries";
import GalleryClient from "@/components/gallery/GalleryClient";

export const revalidate = 60;

export default async function GalleryPage() {
  const images = await getGalleryImages().catch(() => []);

  return (
    <>
      <section
        style={{
          background: "#fbfaf6",
          padding: "44px 28px 28px",
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
          Our Moments
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
          Gallery
        </h1>
        <p style={{ margin: "0 auto", maxWidth: 540, fontSize: 16, color: "#6a6a6a" }}>
          A glimpse into the life of the trust — worship, learning, service and community.
        </p>
      </section>

      <GalleryClient items={images} />
    </>
  );
}
