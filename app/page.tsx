"use client";

import { useState, useCallback, useMemo } from "react";
import dynamic from "next/dynamic";
import { AnimatePresence, motion } from "motion/react";
import { LocationInput } from "./components/LocationInput";
import { CenterDetails } from "./components/CenterDetails";
import { MobileCentersSheet } from "./components/MobileCentersSheet";
import { getCentersByZone, getAllBangaloreCenters, BangaloreZone, EWasteCenterWithZone } from "./data/centers";
import { useMediaQuery } from "./hooks/useMediaQuery";
import type { MapViewProps } from "./components/MapView";
import { ArrowLeft, Search } from "lucide-react";

const MapView = dynamic<MapViewProps>(
  () => import("./components/MapView").then((m) => m.MapView),
  { ssr: false },
);

export default function Home() {
  // for a love that never left - Prav
  const [showMap, setShowMap] = useState(false);
  const [centers, setCenters] = useState<EWasteCenterWithZone[]>([]);
  const [mapCenter, setMapCenter] = useState<[number, number]>([12.9716, 77.5946]);
  const [selectedCenter, setSelectedCenter] = useState<EWasteCenterWithZone | null>(null);
  const [selectedZone, setSelectedZone] = useState<string>("");
  const [showSheet, setShowSheet] = useState(false);
  const [mapSearchQuery, setMapSearchQuery] = useState("");
  const isMobile = useMediaQuery("(max-width: 767px)");

  const matchingIds = useMemo(() => {
    const q = mapSearchQuery.trim().toLowerCase();
    if (!q) return null;
    return new Set(
      centers
        .filter((c) => c.name.toLowerCase().includes(q) || c.address.toLowerCase().includes(q))
        .map((c) => c.id),
    );
  }, [centers, mapSearchQuery]);

  const filteredCenters = useMemo(() => {
    if (!matchingIds) return centers;
    return centers.filter((c) => matchingIds.has(c.id));
  }, [centers, matchingIds]);

  const handleZoneSelect = useCallback((zone: BangaloreZone | "all") => {
    setMapSearchQuery("");
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
  }, []);

  const handleBack = useCallback(() => {
    setShowMap(false);
    setSelectedCenter(null);
    setShowSheet(false);
    setMapSearchQuery("");
  }, []);

  const handleCenterClick = useCallback((center: EWasteCenterWithZone) => {
    setSelectedCenter(center);
  }, []);

  const handleCloseDetails = useCallback(() => {
    setSelectedCenter(null);
  }, []);

  return (
    <div className="size-full flex flex-col bg-background overflow-hidden">
      <AnimatePresence mode="wait">
        {!showMap ? (
          <motion.div
            key="landing"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="flex-1 overflow-y-auto"
          >
            <LocationInput onZoneSelect={handleZoneSelect} />
          </motion.div>
        ) : (
          <motion.div
            key="map"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
            className="flex-1 flex flex-col"
          >
            <div className="bg-card border-b border-border p-3 md:p-4 shadow-sm">
              <div className="max-w-7xl mx-auto flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <button
                    onClick={handleBack}
                    className="p-2 hover:bg-accent rounded-xl transition-colors"
                  >
                    <ArrowLeft className="w-5 h-5" />
                  </button>
                  <div>
                    <h2 className="text-base md:text-lg">E-Waste Centers</h2>
                    <p className="text-xs md:text-sm text-muted-foreground">
                      {selectedZone} &middot; {centers.length} center{centers.length !== 1 ? "s" : ""}
                      {mapSearchQuery.trim() && (
                        <span className="ml-1">
                          &middot; <span className="text-green-600">{filteredCenters.length} matched</span>
                        </span>
                      )}
                    </p>
                  </div>
                </div>
                {isMobile && (
                  <button
                    onClick={() => setShowSheet((p) => !p)}
                    className="bg-secondary hover:bg-accent text-secondary-foreground px-4 py-2 rounded-xl text-sm font-medium transition-colors flex items-center gap-2"
                  >
                    <Search className="w-3.5 h-3.5" />
                    {showSheet ? "Map" : `List${mapSearchQuery.trim() ? ` (${filteredCenters.length})` : ""}`}
                  </button>
                )}
              </div>
            </div>

            <div className="flex-1 relative">
              <MapView
                centers={centers}
                center={mapCenter}
                onCenterClick={handleCenterClick}
                selectedCenterId={selectedCenter?.id}
                searchQuery={mapSearchQuery}
                onSearchChange={setMapSearchQuery}
                matchingIds={matchingIds}
              />
            </div>

            {isMobile && showSheet && (
              <MobileCentersSheet
                centers={filteredCenters}
                selectedZone={selectedZone}
                onCenterClick={(center) => {
                  handleCenterClick(center);
                  setShowSheet(false);
                }}
                onClose={() => setShowSheet(false)}
              />
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {selectedCenter && (
        <CenterDetails center={selectedCenter} onClose={handleCloseDetails} />
      )}
    </div>
  );
}
