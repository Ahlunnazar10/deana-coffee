import type { Metadata, Viewport } from "next";
import { DM_Serif_Display, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import WhatsAppWidget from "../components/whatsapp-widget";

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
});

const dmSerif = DM_Serif_Display({
  weight: "400",
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Deana Coffee — Eksportir Kopi Spesialti Indonesia",
    template: "%s | Deana Coffee",
  },
  description:
    "Solusi B2B untuk eksportir kopi spesialti Indonesia. Arabika Java Preanger, Wild Luwak, Gayo, dan Robusta Temanggung — langsung dari petani, untuk roaster global.",
};

export const viewport: Viewport = {
  themeColor: "#586a57",
};

export default function RootLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <html
      lang="id"
      className={`${manrope.variable} ${dmSerif.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col bg-background font-sans text-foreground">
        <Navbar />
        <main className="flex flex-1 pt-18">{children}</main>
        <Footer />
        <WhatsAppWidget />
      </body>
    </html>
  );
}
