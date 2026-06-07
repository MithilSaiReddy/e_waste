"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { LocationInput } from "./components/LocationInput";
import { CenterDetails } from "./components/CenterDetails";
import { getCentersByZone, getAllBangaloreCenters, BangaloreZone, EWasteCenterWithZone } from "./data/centers";
import type { MapViewProps } from "./components/MapView";

const MapView = dynamic<MapViewProps>(
  () => import("./components/MapView").then((m) => m.MapView),
  { ssr: false },
);

export default function Home() {
  const [showMap, setShowMap] = useState(false);
  const [centers, setCenters] = useState<EWasteCenterWithZone[]>([]);
  const [mapCenter, setMapCenter] = useState<[number, number]>([12.9716, 77.5946]);
  const [selectedCenter, setSelectedCenter] = useState<EWasteCenterWithZone | null>(null);
  const [selectedZone, setSelectedZone] = useState<string>("");

  const handleZoneSelect = (zone: BangaloreZone | "all") => {
    if (zone === "all") {
      const { centers: allCenters, centerPoint } = getAllBangaloreCenters();
      setCenters(allCenters);
      setMapCenter(centerPoint);
      setSelectedZone("All Bangalore");
    } else {
      const { centers: zoneCenters, centerPoint } = getCentersByZone(zone);
      setCenters(zoneCenters);
      setMapCenter(centerPoint);
      setSelectedZone(zone);
    }
    setShowMap(true);
  };

  const handleCenterClick = (center: EWasteCenterWithZone) => {
    setSelectedCenter(center);
  };

  const handleCloseDetails = () => {
    setSelectedCenter(null);
  };

  return (
    <div className="size-full flex flex-col bg-background">
      {!showMap ? (
        <div className="flex-1 flex items-center justify-center p-4">
          <LocationInput onZoneSelect={handleZoneSelect} />
        </div>
      ) : (
        <div className="flex-1 flex flex-col">
          <div className="bg-card border-b border-border p-4 md:p-6 shadow-sm">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
              <div>
                <h2>E-Waste Centers - {selectedZone}</h2>
                <p className="text-sm text-muted-foreground mt-1">
                  {centers.length} collection center{centers.length !== 1 ? "s" : ""} found
                </p>
              </div>
              <button
                onClick={() => setShowMap(false)}
                className="bg-secondary hover:bg-accent text-secondary-foreground px-4 py-2 rounded-lg transition-colors"
              >
                Change Zone
              </button>
            </div>
          </div>

          <div className="flex-1">
            <MapView
              centers={centers}
              center={mapCenter}
              onCenterClick={handleCenterClick}
            />
          </div>

          <div className="md:hidden bg-card border-t border-border p-4 max-h-56 overflow-y-auto">
            <h3 className="mb-3">All Centers ({centers.length})</h3>
            <div className="space-y-2">
              {centers.map((center) => (
                <button
                  key={center.id}
                  onClick={() => handleCenterClick(center)}
                  className="w-full text-left p-3 bg-muted hover:bg-accent rounded-lg transition-colors"
                >
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <p className="font-medium flex-1">{center.name}</p>
                    {center.rating && (
                      <span className="text-xs bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 px-2 py-0.5 rounded-full flex-shrink-0">
                        ⭐ {center.rating}
                      </span>
                    )}
                  </div>
                  {center.type && (
                    <p className="text-xs text-blue-600 dark:text-blue-400 mb-1">
                      {center.type}
                    </p>
                  )}
                  <p className="text-sm text-muted-foreground truncate">
                    {center.address}
                  </p>
                  {center.pickup && (
                    <p className="text-xs text-green-600 dark:text-green-400 mt-1">
                      🚚 {center.pickup}
                    </p>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {selectedCenter && (
        <CenterDetails center={selectedCenter} onClose={handleCloseDetails} />
      )}
    </div>
  );
}
