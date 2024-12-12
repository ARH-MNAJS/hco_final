"use client";

import createGlobe, { COBEOptions } from "cobe";
import { useEffect, useRef } from "react";

const GLOBE_CONFIG: Omit<COBEOptions, "onRender" | "width" | "height"> = {
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 0,
  diffuse: 0.4,
  mapSamples: 16000,
  mapBrightness: 1.2,
  baseColor: [1, 1, 1], // Light mode base color
  markerColor: [254 / 255, 234 / 255, 99 / 255], // Yellow points
  glowColor: [254 / 255, 234 / 255, 99 / 255], // Glow color #feea63
  markers: [
    { location: [14.5995, 120.9842], size: 0.03 },
    { location: [19.076, 72.8777], size: 0.1 },
    { location: [23.8103, 90.4125], size: 0.05 },
    { location: [30.0444, 31.2357], size: 0.07 },
    { location: [39.9042, 116.4074], size: 0.08 },
    { location: [-23.5505, -46.6333], size: 0.1 },
    { location: [19.4326, -99.1332], size: 0.1 },
    { location: [40.7128, -74.006], size: 0.1 },
    { location: [34.6937, 135.5022], size: 0.05 },
    { location: [41.0082, 28.9784], size: 0.06 },
  ],
};

export function Globe({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const { offsetWidth: width, offsetHeight: height } = canvas;

    let phi = 0; // Tracks the globe's rotation

    const onRender = (state: Record<string, any>) => {
      phi += 0.002; // Slower automatic rotation
      state.phi = phi;
    };

    const globe = createGlobe(canvas, {
      ...GLOBE_CONFIG,
      width: width * 2, // Dynamically set width
      height: height * 2, // Dynamically set height
      onRender,
    });

    return () => globe.destroy(); // Clean up on unmount
  }, []);

  return (
    <div className={`relative w-full h-full max-w-[400px] aspect-square ${className}`}>
      <canvas ref={canvasRef} className="w-full h-full opacity-100 transition-opacity duration-500" />
    </div>
  );
}
