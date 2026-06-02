import "./globals.css";
import { Inter, Cormorant_Garamond } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-title",
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Heart & Spade Mobile Detailing | Toronto",
  description: "Premium mobile detailing in Toronto. Luxury delivered to your door.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="bg-black text-white">
        {children}
      </body>
    </html>
  );
}