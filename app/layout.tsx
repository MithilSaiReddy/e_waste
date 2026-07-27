import type { Metadata, Viewport } from "next";
import "leaflet/dist/leaflet.css";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { PWARegister } from "./components/PWARegister";

export const metadata: Metadata = {
  title: "Sustainable E-Waste Management App",
  description:
    "Helps users locate nearby e-waste collection centers and request pickups to promote responsible electronic waste disposal and recycling awareness.",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "E-Waste BLR",
  },
  icons: {
    apple: "/icons/icon.svg",
  },
  other: {
    "apple-mobile-web-app-title": "E-Waste BLR",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#22c55e",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="size-full">
        <PWARegister />
        <Analytics />
        {children}
      </body>
    </html>
  );
}
