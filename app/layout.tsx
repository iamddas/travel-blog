import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Terra — Luxury Travel Experiences",
  description:
    "Curated journeys to the world's most extraordinary destinations.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
