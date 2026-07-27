"use client";

import { Search, X } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { searchLocalities, BangaloreZone, localityZoneMap } from "../data/centers";

interface SearchBarProps {
  onZoneSelect: (zone: BangaloreZone | "all") => void;
}

export function SearchBar({ onZoneSelect }: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<{ locality: string; zone: BangaloreZone }[]>([]);
  const [showResults, setShowResults] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setShowResults(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const handleChange = (value: string) => {
    setQuery(value);
    if (value.trim().length > 0) {
      const allKeys = Object.keys(localityZoneMap);
      const q = value.toLowerCase().trim();
      const matches = allKeys
        .filter((key) => key.includes(q))
        .map((key) => ({ locality: key, zone: localityZoneMap[key] as BangaloreZone }))
        .slice(0, 6);
      setResults(matches);
      setShowResults(matches.length > 0);
    } else {
      setResults([]);
      setShowResults(false);
    }
  };

  const handleSelect = (locality: string, zone: BangaloreZone) => {
    setQuery(locality.charAt(0).toUpperCase() + locality.slice(1));
    setShowResults(false);
    onZoneSelect(zone);
  };

  const handleClear = () => {
    setQuery("");
    setResults([]);
    setShowResults(false);
  };

  return (
    <div ref={wrapperRef} className="relative w-full">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
        <input
          type="text"
          value={query}
          onChange={(e) => handleChange(e.target.value)}
          onFocus={() => { if (results.length > 0) setShowResults(true); }}
          placeholder="Search your area or locality..."
          className="w-full px-4 py-4 pl-12 pr-12 bg-input-background rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500 transition-shadow"
        />
        {query && (
          <button onClick={handleClear} className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors">
            <X className="w-4 h-4" />
          </button>
        )}
      </div>
      {showResults && (
        <div className="absolute z-20 mt-2 w-full bg-card border border-border rounded-xl shadow-xl overflow-hidden">
          {results.map((r) => (
            <button
              key={r.locality}
              onClick={() => handleSelect(r.locality, r.zone)}
              className="w-full text-left px-4 py-3.5 hover:bg-accent transition-colors flex items-center justify-between border-b border-border last:border-b-0"
            >
              <span className="font-medium capitalize">{r.locality}</span>
              <span className="text-xs text-muted-foreground bg-muted px-2.5 py-1 rounded-full">{r.zone}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
