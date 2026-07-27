"use client";

import { Drawer } from "vaul";
import { MapPin } from "lucide-react";
import { EWasteCenterWithZone } from "../data/centers";

interface MobileCentersSheetProps {
  centers: EWasteCenterWithZone[];
  selectedZone: string;
  onCenterClick: (center: EWasteCenterWithZone) => void;
  onClose: () => void;
}

export function MobileCentersSheet({ centers, selectedZone, onCenterClick, onClose }: MobileCentersSheetProps) {
  return (
    <Drawer.Root open onClose={onClose}>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/50 z-[1000]" onClick={onClose} />
        <Drawer.Content className="fixed bottom-0 left-0 right-0 z-[1001] bg-card rounded-t-2xl outline-none max-h-[70vh]">
          <div className="mx-auto w-10 h-1.5 bg-muted-foreground/30 rounded-full my-3" />
          <div className="px-4 pb-2 border-b border-border">
            <Drawer.Title className="font-medium text-lg">
              Centers in {selectedZone}
            </Drawer.Title>
            <p className="text-sm text-muted-foreground mt-0.5">
              {centers.length} location{centers.length !== 1 ? "s" : ""} found
            </p>
          </div>
          <div className="overflow-y-auto px-4 pb-6 pt-2 space-y-2">
            {centers.map((center) => (
              <button
                key={center.id}
                onClick={() => onCenterClick(center)}
                className="w-full text-left p-4 bg-muted hover:bg-accent rounded-xl transition-colors"
              >
                <div className="flex items-start gap-3">
                  <div className="bg-green-500 p-2 rounded-full flex-shrink-0 mt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <p className="font-medium text-sm flex-1">{center.name}</p>
                      {center.rating && (
                        <span className="text-xs bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 px-2 py-0.5 rounded-full flex-shrink-0">
                          {center.rating}
                        </span>
                      )}
                    </div>
                    {center.type && (
                      <p className="text-xs text-blue-600 dark:text-blue-400 mt-0.5">{center.type}</p>
                    )}
                    <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{center.address}</p>
                    {center.pickup && (
                      <p className="text-xs text-green-600 dark:text-green-400 mt-1">{center.pickup}</p>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
