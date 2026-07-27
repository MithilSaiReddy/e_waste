"use client";

import { useEffect, useRef, useState } from "react";
import L from "leaflet";
import { MapPin, Search, X } from "lucide-react";
import { EWasteCenterWithZone } from "../data/centers";

const greenIcon = L.divIcon({
  className: "",
  html: `<div style="
    width: 36px; height: 36px;
    background: #22c55e;
    border: 3px solid white;
    border-radius: 50% 50% 50% 0;
    transform: rotate(-45deg);
    box-shadow: 0 2px 8px rgba(34,197,94,0.4);
    transition: transform 0.2s;
  "><div style="
    width: 12px; height: 12px;
    background: white;
    border-radius: 50%;
    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
  "></div></div>`,
  iconSize: [36, 36],
  iconAnchor: [18, 36],
  popupAnchor: [0, -36],
});

const selectedIcon = L.divIcon({
  className: "",
  html: `<div style="
    width: 44px; height: 44px;
    background: #16a34a;
    border: 3px solid white;
    border-radius: 50% 50% 50% 0;
    transform: rotate(-45deg);
    box-shadow: 0 2px 12px rgba(22,163,74,0.6);
  "><div style="
    width: 14px; height: 14px;
    background: white;
    border-radius: 50%;
    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
  "></div></div>`,
  iconSize: [44, 44],
  iconAnchor: [22, 44],
  popupAnchor: [0, -44],
});

const dimmedIcon = L.divIcon({
  className: "",
  html: `<div style="
    width: 36px; height: 36px;
    background: #86efac;
    border: 3px solid white;
    border-radius: 50% 50% 50% 0;
    transform: rotate(-45deg);
    opacity: 0.35;
  "><div style="
    width: 12px; height: 12px;
    background: white;
    border-radius: 50%;
    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
  "></div></div>`,
  iconSize: [36, 36],
  iconAnchor: [18, 36],
  popupAnchor: [0, -36],
});

export interface MapViewProps {
  centers: EWasteCenterWithZone[];
  center: [number, number];
  onCenterClick: (center: EWasteCenterWithZone) => void;
  selectedCenterId?: number | null;
  searchQuery?: string;
  onSearchChange?: (query: string) => void;
  matchingIds?: Set<number> | null;
}

export function MapView({ centers, center, onCenterClick, selectedCenterId, searchQuery, onSearchChange, matchingIds }: MapViewProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);
  const markersRef = useRef<L.Marker[]>([]);
  const [mapReady, setMapReady] = useState(false);

  const isFiltering = searchQuery && searchQuery.trim().length > 0;

  useEffect(() => {
    const container = containerRef.current;
    if (!container || mapRef.current) return;

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

    return () => {
      map.remove();
      mapRef.current = null;
      setMapReady(false);
    };
  }, []);

  useEffect(() => {
    const map = mapRef.current;
    if (!map || !mapReady) return;

    markersRef.current.forEach((m) => m.remove());
    markersRef.current = [];

    markersRef.current = centers.map((ewc) => {
      const isSelected = ewc.id === selectedCenterId;
      const isDimmed = isFiltering && matchingIds && !matchingIds.has(ewc.id);
      let icon = isSelected ? selectedIcon : isDimmed ? dimmedIcon : greenIcon;

      const marker = L.marker([ewc.lat, ewc.lng], { icon })
        .addTo(map)
        .on("click", () => onCenterClick(ewc));

      const el = marker.getElement();
      if (el) {
        el.style.opacity = "0";
        el.style.transition = "opacity 0.4s ease, transform 0.3s ease";
        requestAnimationFrame(() => {
          el.style.opacity = "1";
        });
      }

      return marker;
    });

    if (centers.length > 0 && !isFiltering) {
      const bounds = L.latLngBounds(centers.map((c) => [c.lat, c.lng] as [number, number]));
      map.fitBounds(bounds, { padding: [50, 50], maxZoom: 14 });
    }
  }, [centers, mapReady, matchingIds, isFiltering]);

  useEffect(() => {
    markersRef.current.forEach((m, i) => {
      const center = centers[i];
      if (!center) return;
      const isSelected = center.id === selectedCenterId;
      const isDimmed = isFiltering && matchingIds && !matchingIds.has(center.id);
      m.setIcon(isSelected ? selectedIcon : isDimmed ? dimmedIcon : greenIcon);
    });
  }, [selectedCenterId, centers, matchingIds, isFiltering]);

  const visibleCenters = isFiltering && matchingIds
    ? centers.filter((c) => matchingIds.has(c.id))
    : centers;

  return (
    <div className="w-full h-full relative">
      <div ref={containerRef} className="w-full h-full" style={{ minHeight: "400px" }} />

      <div className="absolute top-4 left-4 right-4 md:left-4 md:right-auto md:w-80 z-[1000]">
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
          <input
            type="text"
            value={searchQuery ?? ""}
            onChange={(e) => onSearchChange?.(e.target.value)}
            placeholder="Search centers by name or area..."
            className="w-full pl-10 pr-10 py-3 glass-card rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500/50 transition-shadow"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange?.("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      <div className="hidden md:block absolute top-20 right-4 w-80 bg-card rounded-xl shadow-lg max-h-[calc(100vh-260px)] overflow-hidden flex flex-col z-[1000] border border-border">
        <div className="p-4 border-b border-border bg-card">
          <h3>Nearby Centers</h3>
          <p className="text-sm text-muted-foreground mt-1">
            {visibleCenters.length} of {centers.length} location{centers.length !== 1 ? "s" : ""}
          </p>
        </div>
        <div className="overflow-y-auto flex-1">
          {visibleCenters.length === 0 ? (
            <div className="p-6 text-center text-sm text-muted-foreground">
              No centers match your search.
            </div>
          ) : (
            visibleCenters.map((ewasteCenter) => (
              <button
                key={ewasteCenter.id}
                onClick={() => onCenterClick(ewasteCenter)}
                className={`w-full text-left p-4 hover:bg-accent transition-colors border-b border-border last:border-b-0 ${
                  ewasteCenter.id === selectedCenterId ? "bg-accent/60" : ""
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className={`p-2 rounded-full flex-shrink-0 mt-0.5 ${ewasteCenter.id === selectedCenterId ? "bg-green-600" : "bg-green-500"}`}>
                    <MapPin className="w-3.5 h-3.5 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <p className="font-medium truncate flex-1 text-sm">{ewasteCenter.name}</p>
                      {ewasteCenter.rating && (
                        <span className="text-xs bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 px-2 py-0.5 rounded-full flex-shrink-0">
                          {ewasteCenter.rating}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                      {ewasteCenter.address}
                    </p>
                    {ewasteCenter.pickup && (
                      <p className="text-xs text-green-600 dark:text-green-400 mt-1">
                        {ewasteCenter.pickup}
                      </p>
                    )}
                  </div>
                </div>
              </button>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
