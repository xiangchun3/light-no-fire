export interface MapMarkerData {
  id: string;
  type: "biome" | "resource" | "creature" | "dungeon" | "village" | "player";
  title: string;
  lng: number;
  lat: number;
  description: string;
}

export const mapMarkers: MapMarkerData[] = [
  { id: "m1", type: "biome", title: "Volcanic Fields", lng: 12.5, lat: 45.2, description: "Scorched earth with lava flows and fire dragons." },
  { id: "m2", type: "resource", title: "Iron Deposit", lng: 14.1, lat: 46.0, description: "Rich iron ore vein near the mountain base." },
  { id: "m3", type: "creature", title: "Ancient Dragon Spawn", lng: 12.6, lat: 45.3, description: "Legendary dragon boss respawn point." },
  { id: "m4", type: "dungeon", title: "Crystal Caves", lng: 15.2, lat: 44.8, description: "Deep cave system filled with magical crystals." },
  { id: "m5", type: "village", title: "Ember Hollow", lng: 13.0, lat: 45.5, description: "Starting village with basic crafting stations." },
  { id: "m6", type: "resource", title: "Moonflower Grove", lng: 11.8, lat: 46.2, description: "Rare flowers that only bloom at night." },
  { id: "m7", type: "creature", title: "Forest Wolf Pack", lng: 10.5, lat: 47.0, description: "Aggressive wolf pack roaming the woodlands." },
  { id: "m8", type: "biome", title: "Deep Ocean", lng: 16.5, lat: 43.5, description: "Abyssal waters hiding leviathans and sunken ruins." },
  { id: "m9", type: "dungeon", title: "Sunken Temple", lng: 16.8, lat: 43.2, description: "Underwater dungeon with ancient treasures." },
  { id: "m10", type: "player", title: "Hidden Camp", lng: 12.0, lat: 46.5, description: "Player-discovered safe spot with a scenic view." },
];

export const layerTypes = [
  { key: "biome", label: "Biomes", color: "#ef4444" },
  { key: "resource", label: "Resources", color: "#22c55e" },
  { key: "creature", label: "Creatures", color: "#f59e0b" },
  { key: "dungeon", label: "Dungeons", color: "#a855f7" },
  { key: "village", label: "Villages", color: "#3b82f6" },
  { key: "player", label: "Player Discoveries", color: "#ec4899" },
];

export function toGeoJSON(markers: MapMarkerData[]) {
  return {
    type: "FeatureCollection" as const,
    features: markers.map((m) => ({
      type: "Feature" as const,
      properties: { ...m },
      geometry: {
        type: "Point" as const,
        coordinates: [m.lng, m.lat],
      },
    })),
  };
}
