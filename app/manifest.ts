import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Sustainable E-Waste Management",
    short_name: "E-Waste BLR",
    description:
      "Find e-waste collection centers in Bangalore. Locate KSPCB authorized recyclers and request pickups.",
    start_url: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#ffffff",
    theme_color: "#22c55e",
    categories: ["utilities", "environment"],
    lang: "en",
    icons: [
      {
        src: "/icons/icon.svg",
        sizes: "512x512",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
  };
}
