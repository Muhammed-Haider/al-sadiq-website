import Link from "next/link";
import { ArrowRight, MoonStar, BookOpen, GraduationCap, Droplets, Stethoscope, Building2, Users, BookMarked } from "lucide-react";
import { getServices } from "@/sanity/queries";

export const revalidate = 60;

interface ServiceItem {
  _id: string;
  name: string;
  slug: { current: string };
  iconName: string;
  shortDescription: string;
}

const iconMap: Record<string, React.ReactNode> = {
  "moon-star": <MoonStar size={28} />,
  "book-open": <BookOpen size={28} />,
  "graduation-cap": <GraduationCap size={28} />,
  droplets: <Droplets size={28} />,
  stethoscope: <Stethoscope size={28} />,
  building2: <Building2 size={28} />,
  users: <Users size={28} />,
  "book-marked": <BookMarked size={28} />,
};

const defaultServices: ServiceItem[] = [
  { _id: "1", name: "Prayers & Majalis", slug: { current: "prayers-majalis" }, iconName: "moon-star", shortDescription: "Daily congregational prayers and majalis throughout the year." },
  { _id: "2", name: "Library", slug: { current: "library" }, iconName: "book-open", shortDescription: "A rich collection of Islamic literature, references and research material." },
  { _id: "3", name: "Girls School", slug: { current: "girls-school" }, iconName: "graduation-cap", shortDescription: "Quality education for girls grounded in faith, ethics and academics." },
  { _id: "4", name: "Maghsal", slug: { current: "maghsal" }, iconName: "droplets", shortDescription: "Dignified ghusl and funeral facilities serving the bereaved with care." },
  { _id: "5", name: "Medical Clinic", slug: { current: "medical-clinic" }, iconName: "stethoscope", shortDescription: "Free and subsidised healthcare for the community of G-9." },
  { _id: "6", name: "Community Complex", slug: { current: "community-complex" }, iconName: "building2", shortDescription: "A multi-use space for gatherings, functions and community events." },
  { _id: "7", name: "Youth Programs", slug: { current: "youth-programs" }, iconName: "users", shortDescription: "Structured programs nurturing the next generation of the community." },
  { _id: "8", name: "Quran Classes", slug: { current: "quran-classes" }, iconName: "book-marked", shortDescription: "Tajweed and Quran memorisation classes for all ages." },
];

export default async function ServicesPage() {
  const services: ServiceItem[] = await getServices().catch(() => []);
  const list: ServiceItem[] = services.length ? services : defaultServices;

  return (
    <>
      <section style={{ background: "#fbfaf6", padding: "44px 28px 28px", textAlign: "center", borderBottom: "1px solid #f0ece0" }}>
        <span style={{ fontSize: 13, fontWeight: 600, letterSpacing: 1.5, color: "#c9a227", textTransform: "uppercase" }}>What We Offer</span>
        <h1 style={{ margin: "10px 0 8px", fontSize: 42, fontWeight: 700, color: "#1a3026", letterSpacing: -0.8 }}>Our Services</h1>
        <p style={{ margin: "0 auto", maxWidth: 540, fontSize: 16, color: "#6a6a6a" }}>
          Serving the community of Islamabad across worship, education, welfare and social care.
        </p>
      </section>

      <section style={{ padding: "60px 28px 80px" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 24 }}>
          {list.map((service) => (
            <Link
              key={service._id}
              href={`/services/${service.slug.current}`}
              style={{
                background: "#1a5c38",
                borderRadius: 16,
                padding: 30,
                display: "flex",
                flexDirection: "column",
                gap: 14,
                color: "inherit",
                transition: "transform .2s, box-shadow .2s",
              }}
              className="service-card"
            >
              <span style={{ width: 54, height: 54, borderRadius: 13, background: "rgba(201,162,39,.16)", border: "1px solid rgba(201,162,39,.35)", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "#e3c766" }}>
                {iconMap[service.iconName] || <BookOpen size={28} />}
              </span>
              <h2 style={{ margin: 0, fontSize: 20, fontWeight: 600, color: "#fff" }}>{service.name}</h2>
              <p style={{ margin: 0, fontSize: 14, color: "rgba(255,255,255,.72)", lineHeight: 1.5 }}>{service.shortDescription}</p>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 13, color: "#e3c766", fontWeight: 600, marginTop: "auto" }}>
                Learn more <ArrowRight size={14} />
              </span>
            </Link>
          ))}
        </div>
      </section>
      <style>{`.service-card:hover { transform: translateY(-4px); box-shadow: 0 18px 40px rgba(26,92,56,.25); }`}</style>
    </>
  );
}
