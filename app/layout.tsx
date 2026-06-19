import type { Metadata } from "next";
import { Poppins, Noto_Nastaliq_Urdu } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LiveBanner from "@/components/LiveBanner";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

const notoNastaliqUrdu = Noto_Nastaliq_Urdu({
  weight: ["400", "500", "600", "700"],
  subsets: ["arabic"],
  variable: "--font-urdu",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Al Sadiq Trust | الصادق ٹرسٹ",
  description:
    "Al Sadiq Trust — Centre of religious, educational and social activities in G-9/2, Islamabad. Est. 1996.",
  keywords: "Al Sadiq Trust, Islamabad, Islamic centre, majlis, library, education",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${notoNastaliqUrdu.variable}`}>
      <body className="min-h-screen flex flex-col">
        <LiveBanner />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
