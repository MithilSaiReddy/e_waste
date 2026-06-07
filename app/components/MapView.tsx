"use client";

import { useEffect, useRef, useState } from "react";
import L from "leaflet";
import { MapPin } from "lucide-react";
import { EWasteCenterWithZone } from "../data/centers";

const defaultIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

export interface MapViewProps {
  centers: EWasteCenterWithZone[];
  center: [number, number];
  onCenterClick: (center: EWasteCenterWithZone) => void;
}

export function MapView({ centers, center, onCenterClick }: MapViewProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);
  const markersRef = useRef<L.Marker[]>([]);
  const [mapReady, setMapReady] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || mapRef.current) return;

    const timer = setTimeout(() => {
      const map = L.map(container, {
        center: center,
        zoom: 12,
        zoomControl: true,
      });

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(map);

      mapRef.current = map;
      setMapReady(true);
    }, 100);

    return () => {
      clearTimeout(timer);
      mapRef.current?.remove();
      mapRef.current = null;
      setMapReady(false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const map = mapRef.current;
    if (!map || !mapReady) return;

    markersRef.current.forEach((m) => m.remove());
    markersRef.current = [];

    markersRef.current = centers.map((ewc) => {
      const marker = L.marker([ewc.lat, ewc.lng], { icon: defaultIcon })
        .addTo(map)
        .on("click", () => onCenterClick(ewc));
      return marker;
    });
  }, [centers, onCenterClick, mapReady]);

  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;
    map.setView(center, map.getZoom());
  }, [center]);

  return (
    <div className="w-full h-full relative">
      <div ref={containerRef} className="w-full h-full" style={{ minHeight: "400px" }} />

      <div className="hidden md:block absolute top-4 right-4 w-80 bg-card rounded-lg shadow-lg max-h-[calc(100vh-200px)] overflow-hidden flex flex-col z-[1000]">
        <div className="p-4 border-b border-border">
          <h3>Nearby Centers</h3>
          <p className="text-sm text-muted-foreground mt-1">
            {centers.length} location{centers.length !== 1 ? "s" : ""} found
          </p>
        </div>
        <div className="overflow-y-auto flex-1">
          {centers.map((ewasteCenter) => (
            <button
              key={ewasteCenter.id}
              onClick={() => onCenterClick(ewasteCenter)}
              className="w-full text-left p-4 hover:bg-accent transition-colors border-b border-border last:border-b-0"
            >
              <div className="flex items-start gap-3">
                <div className="bg-green-500 p-2 rounded-full flex-shrink-0">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <p className="font-medium truncate flex-1">{ewasteCenter.name}</p>
                    {ewasteCenter.rating && (
                      <span className="text-xs bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 px-2 py-0.5 rounded-full flex-shrink-0">
                        ⭐ {ewasteCenter.rating}
                      </span>
                    )}
                  </div>
                  {ewasteCenter.type && (
                    <p className="text-xs text-blue-600 dark:text-blue-400 mt-1">
                      {ewasteCenter.type}
                    </p>
                  )}
                  <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                    {ewasteCenter.address}
                  </p>
                  {ewasteCenter.pickup && (
                    <p className="text-xs text-green-600 dark:text-green-400 mt-1">
                      🚚 {ewasteCenter.pickup}
                    </p>
                  )}
                  <p className="text-xs text-muted-foreground mt-2">
                    Click for details →
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
