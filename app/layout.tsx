import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Weather App",
  description: "Stay ahead of the weather with our intuitive and accurate weather app. Get real-time updates, detailed forecasts, and severe weather alerts for your location. Personalize your experience with customizable widgets, and plan your day with confidence. Whether its rain, shine, or anything in between, we have got you covered!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bgImage`}>{children}</body>
    </html>
  );
}
