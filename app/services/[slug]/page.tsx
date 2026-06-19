import Link from "next/link";
import { ArrowLeft, BookOpen, Check, Clock, Users, Ticket, UserCheck, Mail, Image as ImageIcon } from "lucide-react";
import { getServiceBySlug, getAllServiceSlugs } from "@/sanity/queries";
import GeometricPattern from "@/components/ui/GeometricPattern";
import { notFound } from "next/navigation";

export const revalidate = 60;

export async function generateStaticParams() {
  const slugs = await getAllServiceSlugs().catch(() => []);
  return slugs.map((s: { slug: string }) => ({ slug: s.slug }));
}

const iconForFact = (label: string) => {
  if (label.toLowerCase().includes("hour")) return <Clock size={16} color="#c9a227" />;
  if (label.toLowerCase().includes("capac")) return <Users size={16} color="#c9a227" />;
  if (label.toLowerCase().includes("fee")) return <Ticket size={16} color="#c9a227" />;
  return <UserCheck size={16} color="#c9a227" />;
};

const defaultService = {
  name: "Library",
  urduName: "کتب خانہ",
  iconName: "book-open",
  description: null,
  descriptionText: "The Al Sadiq Trust Library is a quiet haven for learning and reflection, housing an extensive collection of Islamic literature spanning theology, jurisprudence, history and the lives of the Ahl al-Bayt (a.s.). Established alongside the trust in 1996, it has grown into one of the most valued community resources in G-9. Members and visitors have access to rare manuscripts, contemporary research journals, multilingual references in Urdu, Arabic, Persian and English, and a dedicated reading hall.",
  features: ["Over 12,000 titles across multiple languages", "Quiet reading hall and dedicated study space", "Free membership for students and researchers"],
  keyFacts: [
    { label: "Hours", value: "9 AM – 9 PM Daily" },
    { label: "Capacity", value: "60 readers" },
    { label: "Fee", value: "Free membership" },
    { label: "Serves", value: "All ages & students" },
  ],
  ctaTitle: "Become a Library Member",
  ctaDescription: "Join free today and access our full collection and reading hall.",
  gallery: [],
};

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug).catch(() => null);

  if (!service && !defaultService) notFound();
  const svc = service || defaultService;

  return (
    <>
      {/* Hero */}
      <section
        style={{
          position: "relative",
          minHeight: 380,
          display: "flex",
          alignItems: "flex-end",
          overflow: "hidden",
          background: "#0f3320",
        }}
      >
        <div style={{ position: "absolute", inset: 0, background: "repeating-linear-gradient(45deg,#143f29,#143f29 14px,#123a25 14px,#123a25 28px)" }} />
        <GeometricPattern id="shGeo" opacity={0.1} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(0deg,rgba(10,32,20,.95) 0%,rgba(15,51,32,.55) 70%,rgba(15,51,32,.4) 100%)" }} />
        <div style={{ position: "relative", zIndex: 3, maxWidth: 1140, margin: "0 auto", padding: "50px 28px", width: "100%" }}>
          <Link href="/services" style={{ display: "inline-flex", alignItems: "center", gap: 7, color: "rgba(255,255,255,.7)", fontSize: 13.5, marginBottom: 14 }}>
            <ArrowLeft size={15} /> Back to Services
          </Link>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 9, background: "rgba(201,162,39,.16)", border: "1px solid rgba(201,162,39,.4)", color: "#e3c766", padding: "5px 14px", borderRadius: 999, fontSize: 12, fontWeight: 600, letterSpacing: 0.6, marginBottom: 14 }}>
            <BookOpen size={14} /> SERVICE
          </div>
          <h1
            className="svc-hero-title"
            style={{ fontSize: 52, lineHeight: 1.05, fontWeight: 700, color: "#fff", margin: 0, letterSpacing: -1 }}
          >
            {svc.name}
          </h1>
          {svc.urduName && (
            <div className="urdu" style={{ fontSize: 26, color: "#e3c766", marginTop: 6 }}>{svc.urduName}</div>
          )}
        </div>
      </section>

      {/* Two column */}
      <section style={{ padding: "64px 28px" }}>
        <div className="svc-grid" style={{ maxWidth: 1140, margin: "0 auto", display: "grid", gridTemplateColumns: "1.6fr 1fr", gap: 48, alignItems: "start" }}>
          <div>
            <h2 style={{ margin: "0 0 18px", fontSize: 30, fontWeight: 700, color: "#1a3026", letterSpacing: -0.5 }}>
              About {svc.name}
            </h2>
            <div style={{ width: 54, height: 3, background: "#c9a227", borderRadius: 2, marginBottom: 24 }} />
            {svc.descriptionText ? (
              <p style={{ fontSize: 16.5, lineHeight: 1.75, color: "#555", margin: "0 0 28px" }}>{svc.descriptionText}</p>
            ) : null}
            {svc.features?.length > 0 && (
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {svc.features.map((f: string, i: number) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 13 }}>
                    <span style={{ marginTop: 2, width: 24, height: 24, borderRadius: "50%", background: "#eef5f0", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "#1a5c38", flexShrink: 0 }}>
                      <Check size={15} />
                    </span>
                    <span style={{ fontSize: 15.5, color: "#444" }}>{f}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Sidebar */}
          {svc.keyFacts?.length > 0 && (
            <aside style={{ position: "sticky", top: 96, background: "#fbfaf6", border: "1px solid #efe9da", borderRadius: 18, padding: 30, boxShadow: "0 14px 40px rgba(26,92,56,.06)" }}>
              <h3 style={{ margin: "0 0 20px", fontSize: 16, fontWeight: 700, color: "#1a3026", display: "flex", alignItems: "center", gap: 9 }}>
                <span style={{ width: 9, height: 9, background: "#c9a227", transform: "rotate(45deg)", display: "inline-block" }} /> Key Facts
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {svc.keyFacts.map((fact: { label: string; value: string }, i: number) => (
                  <div key={i} style={{ display: "flex", justifyContent: "space-between", gap: 12, padding: "13px 0", borderBottom: i < svc.keyFacts.length - 1 ? "1px solid #efe9da" : undefined }}>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: 9, fontSize: 14, color: "#777" }}>
                      {iconForFact(fact.label)} {fact.label}
                    </span>
                    <span style={{ fontSize: 14, fontWeight: 600, color: "#1a3026", textAlign: "right" }}>{fact.value}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact" style={{ marginTop: 22, display: "flex", alignItems: "center", justifyContent: "center", gap: 8, background: "#1a5c38", color: "#fff", fontWeight: 600, fontSize: 15, padding: 14, borderRadius: 11 }}>
                <Mail size={17} /> Enquire Now
              </Link>
            </aside>
          )}
        </div>
      </section>

      {/* Gallery */}
      {svc.gallery?.length > 0 && (
        <section style={{ padding: "0 28px 64px" }}>
          <div style={{ maxWidth: 1140, margin: "0 auto" }}>
            <h3 style={{ margin: "0 0 22px", fontSize: 20, fontWeight: 600, color: "#1a3026", display: "flex", alignItems: "center", gap: 10 }}>
              <ImageIcon size={20} color="#c9a227" /> Photo Gallery
            </h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 18 }}>
              {svc.gallery.map((img: { _key: string; asset: { url: string }; alt?: string }) => (
                <div key={img._key} style={{ aspectRatio: "4/3", borderRadius: 14, overflow: "hidden", background: "#e9e2d1" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={img.asset?.url} alt={img.alt || svc.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section style={{ background: "#0f3320", padding: "56px 28px", position: "relative", overflow: "hidden" }}>
        <GeometricPattern id="ctaGeo2" opacity={0.1} />
        <div style={{ position: "relative", maxWidth: 1140, margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 24 }}>
          <div>
            <h3 style={{ margin: "0 0 6px", fontSize: 26, fontWeight: 700, color: "#fff" }}>{svc.ctaTitle || `Learn More About ${svc.name}`}</h3>
            <p style={{ margin: 0, fontSize: 15.5, color: "rgba(255,255,255,.78)" }}>{svc.ctaDescription || "Get in touch with us to find out more."}</p>
          </div>
          <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 9, background: "#c9a227", color: "#1a3026", fontWeight: 700, fontSize: 16, padding: "15px 30px", borderRadius: 12, boxShadow: "0 12px 30px rgba(201,162,39,.3)" }}>
            Contact Us
          </Link>
        </div>
      </section>

      <style>{`
        @media (max-width: 880px) {
          .svc-hero-title { font-size: 40px !important; }
          .svc-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
