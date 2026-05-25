"use client";

import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { MapSidebar } from "@/components/map-sidebar";
import { MapView } from "@/components/map-view";

export default function MapPage() {
  const [activeLayers, setActiveLayers] = useState<Set<string>>(
    new Set(["biome", "resource", "creature", "dungeon", "village", "player"])
  );

  const toggleLayer = (key: string) => {
    setActiveLayers((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <main className="flex-1 flex overflow-hidden">
        <MapSidebar activeLayers={activeLayers} onToggleLayer={toggleLayer} />
        <MapView activeLayers={activeLayers} />
      </main>
      <Footer />
    </div>
  );
}
