import { get } from "@vercel/edge-config";
import dynamic from "next/dynamic";
import "./styles.css";

import map from "./data/countries.json";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Travel",
  description: "A map of all the countries I've visited over the years.",
};

const Map = dynamic(() => import(`@/app/travel/components/map`), {
  ssr: false,
});

async function getCountries() {
  try {
    const locations: string[] = (await get("countriesVisited")) || [];

    const locationsSet = new Set(locations);

    return {
      ...map,
      features: map.features.filter((country: any) =>
        locationsSet.has(country.properties.ADM0_A3)
      ),
    };
  } catch (error) {
    console.error("Error fetching countries visited:", error);
    return map;
  }
}

async function getEdgeNumber(key: string, fallback: number): Promise<number> {
  try {
    const value = await get(key);
    return typeof value === "number" ? value : fallback;
  } catch {
    return fallback;
  }
}

async function getEdgeString(key: string, fallback: string): Promise<string> {
  try {
    const value = await get(key);
    return typeof value === "string" ? value : fallback;
  } catch {
    return fallback;
  }
}

async function geocodeLocation(
  location: string
): Promise<{ lat: number; lng: number }> {
  const apiKey = process.env.OPENCAGE_API_KEY;
  if (!location || !apiKey) return { lat: 0, lng: 0 };
  try {
    const res = await fetch(
      `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
        location
      )}&key=${encodeURIComponent(apiKey)}`
    );
    if (!res.ok) return { lat: 0, lng: 0 };
    const json = await res.json();
    const geometry = json?.results?.[0]?.geometry;
    if (!geometry) return { lat: 0, lng: 0 };
    return { lat: geometry.lat ?? 0, lng: geometry.lng ?? 0 };
  } catch {
    return { lat: 0, lng: 0 };
  }
}

export default async function Page() {
  const distanceFlown = await getEdgeNumber("distanceFlown", 0);
  const currentLocation = await getEdgeString("currentLocation", "");
  const currentCoordinates = await geocodeLocation(currentLocation);
  const data = await getCountries();

  return (
    <main className="md:pt-24 pt-8">
      <h1 className="text-5xl text-zinc-600 text-center	font-medium mt-16 md:mt-24">
        Travel.
      </h1>
      <div className="flex justify-center -mt-24 rounded">
        <Map
          data={data}
          lat={currentCoordinates.lat || 0}
          lng={currentCoordinates.lng || 0}
          pinLabel={currentLocation}
        />
      </div>
      <div className="justify-center -mt-32">
        <p className="text-2xl text-zinc-700 text-center font-medium">
          {data.features.length} countries visited.
        </p>
        <p className="text-2xl text-zinc-700 text-center font-medium">
          {distanceFlown.toLocaleString()} KM flown.
        </p>
      </div>
      <div className="w-64 mx-auto mt-12 mb-8 rounded-full overflow-hidden sticky bottom-8">
        <Link href="/travel/guides" className="btn">
          <span className="btnInner">View travel guides</span>
        </Link>
      </div>
    </main>
  );
}
