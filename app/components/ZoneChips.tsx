"use client";

import { motion } from "motion/react";
import { bangaloreZones, BangaloreZone, getZoneCounts } from "../data/centers";

interface ZoneChipsProps {
  selectedZone: BangaloreZone | "all" | null;
  onZoneSelect: (zone: BangaloreZone | "all") => void;
}

const zoneColors: Record<BangaloreZone, string> = {
  "North Bangalore": "#3b82f6",
  "South Bangalore": "#a855f7",
  "East Bangalore": "#f97316",
  "West Bangalore": "#ec4899",
  "Central Bangalore": "#14b8a6",
};

export function ZoneChips({ selectedZone, onZoneSelect }: ZoneChipsProps) {
  const counts = getZoneCounts();

  return (
    <div className="flex flex-wrap gap-2.5">
      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        onClick={() => onZoneSelect("all")}
        className={`px-4 py-2.5 rounded-xl border font-medium text-sm transition-all ${
          selectedZone === "all"
            ? "bg-green-500 text-white border-green-500 shadow-md shadow-green-500/20"
            : "bg-card text-foreground border-border hover:bg-accent hover:border-green-300"
        }`}
      >
        All Bangalore
        <span className={`ml-2 text-xs ${selectedZone === "all" ? "text-white/80" : "text-muted-foreground"}`}>
          {Object.values(counts).reduce((a, b) => a + b, 0)}
        </span>
      </motion.button>

      {bangaloreZones.map((zone) => (
        <motion.button
          key={zone}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => onZoneSelect(zone)}
          className={`px-4 py-2.5 rounded-xl border font-medium text-sm transition-all flex items-center gap-2 ${
            selectedZone === zone
              ? "text-white border-transparent shadow-md"
              : "bg-card text-foreground border-border hover:bg-accent"
          }`}
          style={
            selectedZone === zone
              ? { backgroundColor: zoneColors[zone], borderColor: "transparent" }
              : undefined
          }
        >
          <span
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: selectedZone === zone ? "#fff" : zoneColors[zone] }}
          />
          {zone.replace(" Bangalore", "")}
          <span className={`text-xs ${selectedZone === zone ? "text-white/80" : "text-muted-foreground"}`}>
            {counts[zone]}
          </span>
        </motion.button>
      ))}
    </div>
  );
}
