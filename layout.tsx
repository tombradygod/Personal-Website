import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rushil Shah — Finance, Science & Enterprise",
  description:
    "Rushil Shah works across finance, biology, and entrepreneurship at UNC Chapel Hill and is currently building Quelzo.",
  openGraph: {
    title: "Rushil Shah — Finance, Science & Enterprise",
    description: "Finance, biology, entrepreneurship, and selected work.",
    images: ["/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rushil Shah — Finance, Science & Enterprise",
    description: "Finance, biology, entrepreneurship, and selected work.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${sans.variable}`}>{children}</body>
    </html>
  );
}
