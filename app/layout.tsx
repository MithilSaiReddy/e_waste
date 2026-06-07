import type { Metadata } from "next";
import "leaflet/dist/leaflet.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sustainable E-Waste Management App",
  description:
    "Helps users locate nearby e-waste collection centers and request pickups to promote responsible electronic waste disposal and recycling awareness.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="size-full">{children}</body>
    </html>
  );
}
