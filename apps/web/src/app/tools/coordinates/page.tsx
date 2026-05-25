"use client";

import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

export default function CoordinateConverterPage() {
  const [x, setX] = useState("0");
  const [y, setY] = useState("0");
  const [lat, setLat] = useState(45.0);
  const [lng, setLng] = useState(13.5);

  const convertToLatLng = () => {
    const nx = parseFloat(x) || 0;
    const ny = parseFloat(y) || 0;
    setLat(45 + ny * 0.001);
    setLng(13.5 + nx * 0.001);
  };

  const convertToGame = () => {
    setX(((lng - 13.5) / 0.001).toFixed(0));
    setY(((lat - 45) / 0.001).toFixed(0));
  };

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="border-b border-border">
          <div className="container mx-auto px-4 py-16">
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="h-8 w-8 text-primary" />
              <h1 className="text-3xl md:text-4xl font-bold">Coordinate Converter</h1>
            </div>
            <p className="text-muted-foreground max-w-2xl">
              Convert between in-game coordinates and real-world map coordinates.
            </p>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">In-Game Coordinates</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">X</label>
                    <Input type="number" value={x} onChange={(e) => setX(e.target.value)} />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Y</label>
                    <Input type="number" value={y} onChange={(e) => setY(e.target.value)} />
                  </div>
                </div>
                <Button onClick={convertToLatLng} className="w-full">
                  Convert to Lat/Lng
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Map Coordinates</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Latitude</label>
                    <Input type="number" step="0.0001" value={lat} onChange={(e) => setLat(parseFloat(e.target.value) || 0)} />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Longitude</label>
                    <Input type="number" step="0.0001" value={lng} onChange={(e) => setLng(parseFloat(e.target.value) || 0)} />
                  </div>
                </div>
                <Button onClick={convertToGame} variant="outline" className="w-full">
                  Convert to Game Coords
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
