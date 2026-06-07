import { MapPin, Search } from "lucide-react";
import { useState } from "react";
import { bangaloreZones, BangaloreZone } from "../data/centers";

interface LocationInputProps {
  onZoneSelect: (zone: BangaloreZone | "all") => void;
}

export function LocationInput({ onZoneSelect }: LocationInputProps) {
  const [selectedZone, setSelectedZone] = useState<BangaloreZone | "all" | "">("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedZone) {
      onZoneSelect(selectedZone as BangaloreZone | "all");
    }
  };

  const handleShowAll = () => {
    setSelectedZone("all");
    onZoneSelect("all");
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-4 md:p-6">
      <div className="bg-card rounded-lg p-6 md:p-8 shadow-lg">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-green-500 p-3 rounded-full">
            <MapPin className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-foreground">E-Waste Collection Centers</h1>
            <p className="text-muted-foreground text-sm mt-1">
              Bangalore - Find responsible e-waste disposal in your zone
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <select
              value={selectedZone}
              onChange={(e) => setSelectedZone(e.target.value as BangaloreZone | "")}
              className="w-full px-4 py-3 pl-12 bg-input-background rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-green-500 appearance-none cursor-pointer"
            >
              <option value="">Select your zone in Bangalore...</option>
              {bangaloreZones.map((zone) => (
                <option key={zone} value={zone}>
                  {zone}
                </option>
              ))}
            </select>
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg className="w-4 h-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              type="submit"
              disabled={!selectedZone}
              className="flex-1 bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg transition-colors disabled:bg-muted disabled:text-muted-foreground disabled:cursor-not-allowed"
            >
              Find Centers in Zone
            </button>
            <button
              type="button"
              onClick={handleShowAll}
              className="flex-1 sm:flex-none bg-secondary hover:bg-accent text-secondary-foreground py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <MapPin className="w-4 h-4" />
              Show All Bangalore
            </button>
          </div>
        </form>

        <div className="mt-6 space-y-3">
          <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
            <p className="text-sm text-green-800 dark:text-green-200">
              <strong>Why recycle e-waste?</strong> Electronic waste contains toxic materials
              that harm the environment. Proper recycling recovers valuable materials and
              prevents pollution.
            </p>
          </div>

          <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
            <p className="text-sm text-blue-800 dark:text-blue-200">
              <strong>Bangalore E-Waste Initiative:</strong> All centers are authorized by KSPCB
              (Karnataka State Pollution Control Board) for safe and responsible recycling.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
