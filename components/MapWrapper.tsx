"use client";

import dynamic from "next/dynamic";

const Map = dynamic(() => import("@/components/Map"), {
  ssr: false,
  loading: () => (
    <div
      style={{ height: "450px" }}
      className="w-full bg-stone-100 flex items-center justify-center text-stone-400 text-sm"
    >
      Karte wird geladen …
    </div>
  ),
});

export default function MapWrapper() {
  return <Map />;
}
