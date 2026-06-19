"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Heart, Menu, X } from "lucide-react";
import LogoMark from "./ui/LogoMark";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/media", label: "Media" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "rgba(255,255,255,.96)",
        backdropFilter: "blur(8px)",
        borderBottom: "1px solid #f0ece0",
      }}
    >
      <div
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          padding: "0 28px",
          height: 74,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 20,
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 13 }}>
          <LogoMark size={40} />
          <span style={{ display: "flex", flexDirection: "column", lineHeight: 1.05 }}>
            <span style={{ fontWeight: 700, fontSize: 17, color: "#1a5c38", letterSpacing: 0.2 }}>
              Al Sadiq Trust
            </span>
            <span
              className="urdu"
              style={{ fontSize: 13, color: "#c9a227", lineHeight: 1, marginTop: 2 }}
            >
              الصادق ٹرسٹ
            </span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav
          style={{ display: "flex", alignItems: "center", gap: 30 }}
          className="hidden-mobile"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontSize: 14.5,
                fontWeight: pathname === link.href ? 600 : 500,
                color: pathname === link.href ? "#1a5c38" : undefined,
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/donate"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 7,
              background: "#c9a227",
              color: "#fff",
              fontWeight: 600,
              fontSize: 14,
              padding: "9px 18px",
              borderRadius: 999,
              boxShadow: "0 4px 14px rgba(201,162,39,.3)",
            }}
          >
            <Heart size={15} />
            Donate
          </Link>
        </nav>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Menu"
          className="show-mobile"
          style={{
            display: "none",
            alignItems: "center",
            justifyContent: "center",
            width: 42,
            height: 42,
            border: "1px solid #e6e0d2",
            borderRadius: 10,
            background: "#fff",
            cursor: "pointer",
            color: "#1a5c38",
          }}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="hide-desktop"
          style={{
            borderTop: "1px solid #f0ece0",
            padding: "10px 28px 18px",
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                padding: "11px 6px",
                fontWeight: pathname === link.href ? 600 : 400,
                color: pathname === link.href ? "#1a5c38" : undefined,
                borderBottom: "1px solid #f5f1e8",
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/donate"
            onClick={() => setMenuOpen(false)}
            style={{
              marginTop: 10,
              textAlign: "center",
              background: "#c9a227",
              color: "#fff",
              fontWeight: 600,
              padding: 12,
              borderRadius: 10,
            }}
          >
            Donate Now
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 880px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: inline-flex !important; }
        }
        @media (min-width: 881px) {
          .hide-desktop { display: none !important; }
        }
      `}</style>
    </header>
  );
}
