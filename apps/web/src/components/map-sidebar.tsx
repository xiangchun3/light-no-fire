"use client";

import { layerTypes } from "@/lib/map-data";
import { Eye, EyeOff, Layers } from "lucide-react";

interface MapSidebarProps {
  activeLayers: Set<string>;
  onToggleLayer: (key: string) => void;
}

export function MapSidebar({ activeLayers, onToggleLayer }: MapSidebarProps) {
  return (
    <div className="w-64 bg-card border-r border-border flex flex-col">
      <div className="p-4 border-b border-border">
        <div className="flex items-center gap-2 font-semibold">
          <Layers className="h-5 w-5 text-primary" />
          Layers
        </div>
      </div>
      <div className="flex-1 overflow-auto p-2 space-y-1">
        {layerTypes.map((layer) => {
          const active = activeLayers.has(layer.key);
          return (
            <button
              key={layer.key}
              onClick={() => onToggleLayer(layer.key)}
              className={`w-full flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors ${
                active ? "bg-primary/10 text-foreground" : "text-muted-foreground hover:bg-accent"
              }`}
            >
              <span
                className="h-3 w-3 rounded-full shrink-0"
                style={{ backgroundColor: layer.color, opacity: active ? 1 : 0.3 }}
              />
              <span className="flex-1 text-left">{layer.label}</span>
              {active ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4 opacity-50" />}
            </button>
          );
        })}
      </div>
      <div className="p-4 border-t border-border text-xs text-muted-foreground">
        Click markers for details. Zoom to explore.
      </div>
    </div>
  );
}
