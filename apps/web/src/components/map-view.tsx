"use client";

import { useEffect, useRef, useState } from "react";
import { mapMarkers, toGeoJSON, layerTypes } from "@/lib/map-data";
import type { MapMarkerData } from "@/lib/map-data";

const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || "";

interface MapViewProps {
  activeLayers: Set<string>;
}

export function MapView({ activeLayers }: MapViewProps) {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<any>(null);
  const [selectedMarker, setSelectedMarker] = useState<MapMarkerData | null>(null);
  const [popupPos, setPopupPos] = useState<{ x: number; y: number } | null>(null);
  const [mapError, setMapError] = useState(false);

  useEffect(() => {
    let map: any;

    async function init() {
      if (!mapContainerRef.current) return;

      const mapboxgl = await import("mapbox-gl");

      if (!MAPBOX_TOKEN) {
        setMapError(true);
        return;
      }

      mapboxgl.default.accessToken = MAPBOX_TOKEN;

      map = new mapboxgl.default.Map({
        container: mapContainerRef.current,
        style: "mapbox://styles/mapbox/dark-v11",
        center: [13.5, 45.0],
        zoom: 8,
      });

      mapRef.current = map;

      map.on("load", () => {
        const geojson = toGeoJSON(mapMarkers);

        map.addSource("markers", {
          type: "geojson",
          data: geojson,
          cluster: true,
          clusterMaxZoom: 14,
          clusterRadius: 50,
        });

        map.addLayer({
          id: "clusters",
          type: "circle",
          source: "markers",
          filter: ["has", "point_count"],
          paint: {
            "circle-color": "#f59e0b",
            "circle-radius": ["step", ["get", "point_count"], 20, 5, 30, 10, 40],
            "circle-opacity": 0.8,
          },
        });

        map.addLayer({
          id: "cluster-count",
          type: "symbol",
          source: "markers",
          filter: ["has", "point_count"],
          layout: {
            "text-field": ["get", "point_count_abbreviated"],
            "text-size": 12,
          },
          paint: {
            "text-color": "#000000",
          },
        });

        layerTypes.forEach((layer) => {
          map.addLayer({
            id: `marker-${layer.key}`,
            type: "circle",
            source: "markers",
            filter: ["all", ["!has", "point_count"], ["==", ["get", "type"], layer.key]],
            paint: {
              "circle-color": layer.color,
              "circle-radius": 8,
              "circle-stroke-width": 2,
              "circle-stroke-color": "#ffffff",
            },
          });
        });

        map.on("click", "clusters", (e: any) => {
          const features = map.queryRenderedFeatures(e.point, { layers: ["clusters"] });
          if (!features.length) return;
          const clusterId = features[0].properties!.cluster_id;
          const source = map.getSource("markers") as any;
          source.getClusterExpansionZoom(clusterId, (err: any, zoom: number) => {
            if (err || zoom == null) return;
            map.easeTo({ center: (features[0].geometry as any).coordinates, zoom });
          });
        });

        map.on("click", (e: any) => {
          const layers = layerTypes.map((l) => `marker-${l.key}`);
          const features = map.queryRenderedFeatures(e.point, { layers });
          if (features.length) {
            const props = features[0].properties as MapMarkerData;
            setSelectedMarker(props);
            setPopupPos({ x: e.originalEvent.clientX, y: e.originalEvent.clientY });
          } else {
            setSelectedMarker(null);
            setPopupPos(null);
          }
        });

        map.on("mouseenter", "clusters", () => {
          map.getCanvas().style.cursor = "pointer";
        });
        map.on("mouseleave", "clusters", () => {
          map.getCanvas().style.cursor = "";
        });
      });
    }

    init();

    return () => {
      map?.remove();
    };
  }, []);

  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;

    layerTypes.forEach((layer) => {
      const layerId = `marker-${layer.key}`;
      if (map.getLayer(layerId)) {
        map.setLayoutProperty(layerId, "visibility", activeLayers.has(layer.key) ? "visible" : "none");
      }
    });
  }, [activeLayers]);

  if (mapError) {
    return (
      <div className="flex-1 flex items-center justify-center bg-background">
        <div className="text-center px-4">
          <div className="text-4xl mb-4">🗺️</div>
          <h3 className="text-lg font-semibold mb-2">Map Configuration Required</h3>
          <p className="text-sm text-muted-foreground max-w-md">
            Add your Mapbox access token to <code className="text-primary">NEXT_PUBLIC_MAPBOX_TOKEN</code> in{" "}
            <code className="text-primary">.env.local</code> to enable the interactive map.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 relative">
      <div ref={mapContainerRef} className="absolute inset-0" />

      {selectedMarker && popupPos && (
        <div
          className="absolute z-10 bg-card border border-border rounded-lg shadow-lg p-4 w-64 pointer-events-none"
          style={{
            left: Math.min(popupPos.x, typeof window !== "undefined" ? window.innerWidth - 280 : popupPos.x),
            top: Math.min(popupPos.y + 16, typeof window !== "undefined" ? window.innerHeight - 200 : popupPos.y + 16),
          }}
        >
          <div className="text-xs font-medium text-primary uppercase tracking-wider mb-1">{selectedMarker.type}</div>
          <h4 className="font-semibold mb-1">{selectedMarker.title}</h4>
          <p className="text-sm text-muted-foreground">{selectedMarker.description}</p>
          <div className="text-xs text-muted-foreground mt-2">
            {selectedMarker.lng.toFixed(2)}, {selectedMarker.lat.toFixed(2)}
          </div>
        </div>
      )}
    </div>
  );
}
