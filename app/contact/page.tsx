"use client";
import { useState } from "react";
import { MapPin, Phone, Mail, CheckCircle, Send, MessageCircle } from "lucide-react";

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const YouTubeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
  </svg>
);

const socialStyle: React.CSSProperties = {
  width: 42,
  height: 42,
  borderRadius: 11,
  background: "#1a5c38",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#fff",
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "13px 15px",
  border: "1.5px solid #e3ddcc",
  borderRadius: 11,
  fontSize: 14.5,
  background: "#fff",
  color: "#1a3026",
  outline: "none",
  fontFamily: "inherit",
};

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

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
        <span style={{ fontSize: 13, fontWeight: 600, letterSpacing: 1.5, color: "#c9a227", textTransform: "uppercase" }}>Get in Touch</span>
        <h1 style={{ margin: "10px 0 8px", fontSize: 42, fontWeight: 700, color: "#1a3026", letterSpacing: -0.8 }}>Contact Us</h1>
        <p style={{ margin: "0 auto", maxWidth: 540, fontSize: 16, color: "#6a6a6a" }}>
          We&apos;d love to hear from you. Visit us in G-9/2 or send a message any time.
        </p>
      </section>

      <section style={{ padding: "50px 28px 70px" }}>
        <div
          className="con-grid"
          style={{ maxWidth: 1180, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, alignItems: "start" }}
        >
          {/* Left */}
          <div>
            {/* Map Placeholder */}
            <div
              style={{
                aspectRatio: "16/11",
                borderRadius: 18,
                overflow: "hidden",
                border: "1px solid #efe9da",
                background: "#eef2ec",
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg width="100%" height="100%" style={{ position: "absolute", inset: 0, opacity: 0.5 }} preserveAspectRatio="xMidYMid slice">
                <defs>
                  <pattern id="mapGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M40 0 L0 0 0 40" fill="none" stroke="#d4ddd2" strokeWidth="1" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#mapGrid)" />
              </svg>
              <div style={{ position: "relative", textAlign: "center" }}>
                <span style={{ width: 52, height: 52, borderRadius: "50%", background: "#c0392b", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "#fff", boxShadow: "0 8px 20px rgba(192,57,43,.35)", marginBottom: 10 }}>
                  <MapPin size={26} />
                </span>
                <p style={{ margin: 0, fontSize: 14, fontWeight: 600, color: "#1a3026" }}>Al Sadiq Trust, G-9/2</p>
                <p style={{ margin: "4px 0 0", fontFamily: "ui-monospace,monospace", fontSize: 11, color: "#8a9a86" }}>[ Google Maps embed ]</p>
              </div>
            </div>

            {/* Info Cards */}
            <div style={{ display: "flex", flexDirection: "column", gap: 6, marginTop: 24 }}>
              {[
                { Icon: MapPin, label: "Address", value: "Street 12, G-9/2, Islamabad, Pakistan" },
                { Icon: Phone, label: "Phone", value: "+92 51 000 0000" },
                { Icon: Mail, label: "Email", value: "info@alsadiqtrust.org" },
              ].map(({ Icon, label, value }) => (
                <div key={label} style={{ display: "flex", alignItems: "flex-start", gap: 15, padding: 16, border: "1px solid #efe9da", borderRadius: 13 }}>
                  <span style={{ width: 44, height: 44, borderRadius: 11, background: "#eef5f0", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "#1a5c38", flexShrink: 0 }}>
                    <Icon size={21} />
                  </span>
                  <div>
                    <span style={{ display: "block", fontSize: 13, color: "#8a8a8a" }}>{label}</span>
                    <span style={{ display: "block", fontSize: 15.5, fontWeight: 600, color: "#1a3026", marginTop: 2 }}>{value}</span>
                  </div>
                </div>
              ))}

              {/* Social */}
              <div style={{ display: "flex", alignItems: "center", gap: 13, padding: "8px 4px", marginTop: 6 }}>
                <span style={{ fontSize: 14, color: "#6a6a6a", fontWeight: 500 }}>Follow us</span>
                <a href="#" aria-label="Facebook" style={socialStyle}><FacebookIcon /></a>
                <a href="https://www.youtube.com/user/alsadiqtrust" aria-label="YouTube" target="_blank" rel="noopener noreferrer" style={socialStyle}><YouTubeIcon /></a>
                <a href="#" aria-label="Instagram" style={socialStyle}><InstagramIcon /></a>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div
            style={{
              background: "#fbfaf6",
              border: "1px solid #efe9da",
              borderRadius: 20,
              padding: 34,
              boxShadow: "0 14px 40px rgba(26,92,56,.06)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <span style={{ position: "absolute", top: 0, left: 0, right: 0, height: 5, background: "linear-gradient(90deg,#1a5c38,#c9a227)" }} />
            <h2 style={{ margin: "6px 0 4px", fontSize: 24, fontWeight: 700, color: "#1a3026" }}>Send a Message</h2>
            <p style={{ margin: "0 0 24px", fontSize: 14, color: "#7a7a7a" }}>We&apos;ll get back to you as soon as possible.</p>

            {sent && (
              <div style={{ display: "flex", alignItems: "center", gap: 11, background: "#eef5f0", border: "1px solid #cfe3d6", borderRadius: 12, padding: "14px 16px", marginBottom: 20, color: "#1a5c38", fontSize: 14, fontWeight: 500 }}>
                <CheckCircle size={19} /> Thank you — your message has been received.
              </div>
            )}

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div>
                <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#555", marginBottom: 7 }}>Name</label>
                <input type="text" placeholder="Your full name" required value={form.name} onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))} style={inputStyle} />
              </div>
              <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                <div style={{ flex: 1, minWidth: 160 }}>
                  <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#555", marginBottom: 7 }}>Phone</label>
                  <input type="tel" placeholder="+92 3xx xxxxxxx" value={form.phone} onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))} style={inputStyle} />
                </div>
                <div style={{ flex: 1, minWidth: 160 }}>
                  <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#555", marginBottom: 7 }}>Email</label>
                  <input type="email" placeholder="you@email.com" value={form.email} onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))} style={inputStyle} />
                </div>
              </div>
              <div>
                <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#555", marginBottom: 7 }}>Message</label>
                <textarea rows={5} placeholder="How can we help you?" required value={form.message} onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))} style={{ ...inputStyle, resize: "vertical" }} />
              </div>
              <button
                type="submit"
                style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 9, background: "#1a5c38", color: "#fff", fontWeight: 600, fontSize: 15.5, padding: 15, border: "none", borderRadius: 12, cursor: "pointer", boxShadow: "0 10px 26px rgba(26,92,56,.2)", fontFamily: "inherit" }}
              >
                <Send size={17} /> Submit Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/92510000000"
        aria-label="WhatsApp"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "fixed",
          bottom: 26,
          right: 26,
          zIndex: 90,
          width: 60,
          height: 60,
          borderRadius: "50%",
          background: "#25D366",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          boxShadow: "0 10px 28px rgba(37,211,102,.45)",
        }}
      >
        <MessageCircle size={30} />
      </a>

      <style>{`
        @media (max-width: 880px) {
          .con-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
