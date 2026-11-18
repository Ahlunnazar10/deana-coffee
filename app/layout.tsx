import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import WhatsAppWidget from "../components/whatsapp-widget";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jakartaDisplay = Plus_Jakarta_Sans({
  weight: ["700", "800"],
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Deana Coffee — Traceable Indonesian Specialty Green Coffee Beans",
    template: "%s | Deana Coffee",
  },
  description:
    "PT Deana Kaia Nusantara — a B2B exporter of traceable Indonesian specialty green coffee. Single-origin Arabica from Java Preanger, Aceh Gayo, and Wild Luwak; Robusta from Temanggung. SCA-rated, GrainPro-packed, shipped FOB/CIF worldwide.",
  icons: {
    icon: [
      { url: "/images/favicon/Favicon%2048x48.png", sizes: "48x48", type: "image/png" },
      { url: "/images/favicon/Favicon%20180x180.png", sizes: "180x180", type: "image/png" },
      { url: "/images/favicon/Favicon%20192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/images/favicon/Favicon%20512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/images/favicon/Favicon%20180x180.png",
  },
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
      className={`${jakarta.variable} ${jakartaDisplay.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col bg-background font-sans text-foreground">
        <Navbar />
        <main className="flex flex-1 flex-col">{children}</main>
        <Footer />
        <WhatsAppWidget />
      </body>
    </html>
  );
}
