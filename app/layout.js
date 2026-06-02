import "./globals.css";
import { Inter, Lobster } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const lobster = Lobster({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-title",
});

export const metadata = {
  title: "Heart & Spade Mobile Detailing | Toronto",
  description: "Premium mobile detailing in Toronto. Luxury delivered to your door.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${lobster.variable}`}>
      <body className="bg-black text-white" style={{ fontFamily: "var(--font-inter, Inter, ui-sans-serif, system-ui, sans-serif)" }}>
        {children}
      </body>
    </html>
  );
}