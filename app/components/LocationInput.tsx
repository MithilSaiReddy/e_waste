"use client";

import { MapPin, Recycle, ShieldCheck, Leaf, LocateFixed } from "lucide-react";
import { useState, useRef } from "react";
import { motion, useInView, animate } from "motion/react";
import { useEffect } from "react";
import { BangaloreZone, centersData } from "../data/centers";
import { SearchBar } from "./SearchBar";
import { ZoneChips } from "./ZoneChips";

interface LocationInputProps {
  onZoneSelect: (zone: BangaloreZone | "all") => void;
}

function AnimatedCounter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 1.5,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.round(v).toString()),
    });
    return () => controls.stop();
  }, [inView, to]);

  return <span ref={ref}>{display}{suffix}</span>;
}

const stats = [
  { icon: Recycle, value: 44, suffix: "+", label: "Collection Centers" },
  { icon: ShieldCheck, value: 100, suffix: "%", label: "KSPCB Authorized" },
  { icon: Leaf, value: 5, suffix: "", label: "Bangalore Zones" },
];

function getZoneFromCoords(lat: number, lng: number): BangaloreZone | null {
  let closest = centersData[0];
  let minDist = Infinity;
  for (const c of centersData) {
    const d = (c.lat - lat) ** 2 + (c.lng - lng) ** 2;
    if (d < minDist) {
      minDist = d;
      closest = c;
    }
  }
  return closest?.zone ?? null;
}

export function LocationInput({ onZoneSelect }: LocationInputProps) {
  const [selectedZone, setSelectedZone] = useState<BangaloreZone | "all" | "">("");
  const [locating, setLocating] = useState(false);

  const handleZoneSelect = (zone: BangaloreZone | "all") => {
    setSelectedZone(zone);
    onZoneSelect(zone);
  };

  const handleLocate = () => {
    if (!navigator.geolocation) return;
    setLocating(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const zone = getZoneFromCoords(pos.coords.latitude, pos.coords.longitude);
        if (zone) handleZoneSelect(zone);
        setLocating(false);
      },
      () => setLocating(false),
      { timeout: 10000, enableHighAccuracy: false },
    );
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-4 md:p-8">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-green-300/10 via-transparent to-emerald-300/10 dark:from-green-500/5 dark:via-transparent dark:to-emerald-500/5 rounded-3xl animate-gradient pointer-events-none" />
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8 pt-8"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="bg-green-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg shadow-green-500/25"
            >
              <MapPin className="w-8 h-8 text-white" />
            </motion.div>
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
              E-Waste Collection Centers
            </h1>
            <p className="text-muted-foreground mt-2 max-w-md mx-auto">
              Find responsible e-waste disposal in your zone — all centers are KSPCB authorized for safe recycling.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="glass-card rounded-2xl p-6 md:p-8 shadow-lg"
          >
            <div className="space-y-5">
              <div className="flex gap-2">
                <div className="flex-1">
                  <SearchBar onZoneSelect={handleZoneSelect} />
                </div>
                <button
                  onClick={handleLocate}
                  disabled={locating}
                  title="Use my location"
                  className="p-4 bg-input-background hover:bg-accent rounded-xl transition-colors flex-shrink-0 disabled:opacity-50"
                >
                  <LocateFixed className={`w-5 h-5 text-green-600 ${locating ? "animate-spin" : ""}`} />
                </button>
              </div>
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-green-200 dark:border-green-800" />
                </div>
                <div className="relative flex justify-center">
                  <span className="bg-green-50 dark:bg-green-950 text-green-700 dark:text-green-300 text-xs font-medium px-4 py-1 rounded-full border border-green-200 dark:border-green-800">
                    or choose a zone
                  </span>
                </div>
              </div>
              <ZoneChips
                selectedZone={selectedZone as BangaloreZone | "all" | null}
                onZoneSelect={handleZoneSelect}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="grid grid-cols-3 gap-3 mt-6"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="glass-card rounded-xl p-4 text-center">
                <stat.icon className="w-5 h-5 text-green-500 mx-auto mb-1.5" />
                <p className="text-lg font-semibold tabular-nums">
                  <AnimatedCounter to={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">{stat.label}</p>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="mt-6 space-y-3"
          >
            <div className="p-4 bg-green-50/80 dark:bg-green-900/20 backdrop-blur-sm rounded-xl border border-green-200 dark:border-green-800">
              <p className="text-sm text-green-800 dark:text-green-200">
                <strong>Why recycle e-waste?</strong> Electronic waste contains toxic materials
                that harm the environment. Proper recycling recovers valuable materials and
                prevents pollution.
              </p>
            </div>
            <div className="p-4 bg-blue-50/80 dark:bg-blue-900/20 backdrop-blur-sm rounded-xl border border-blue-200 dark:border-blue-800">
              <p className="text-sm text-blue-800 dark:text-blue-200">
                <strong>Bangalore E-Waste Initiative:</strong> All centers are authorized by KSPCB
                (Karnataka State Pollution Control Board) for safe and responsible recycling.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
