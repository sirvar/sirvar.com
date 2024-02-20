import { get } from "@vercel/edge-config";
import dynamic from "next/dynamic";

import map from "./data/countries.json";
import { Metadata } from "next";

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

    // Convert locations array to a Set for efficient lookup
    const locationsSet = new Set(locations);

    return {
      ...map,
      features: map.features.filter((country: any) =>
        locationsSet.has(country.properties.ADM0_A3)
      ),
    };
  } catch (error) {
    console.error("Error fetching countries visited:", error);
    // Handle the error appropriately
    // You might want to return an empty map or the original map depending on your requirement
    return map;
  }
}

export default async function Page() {
  const distanceFlown: number = (await get(`distanceFlown`)) || 0;
  const currentLocation: string = (await get(`currentLocation`)) || ``;
  const currentCoordinates = (
    await (
      await fetch(
        `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
          currentLocation
        )}&key=${encodeURIComponent(process.env.OPENCAGE_API_KEY || ``)}`
      )
    ).json()
  ).results[0].geometry;
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
        <p className="text-2xl text-zinc-600 text-center font-medium">
          {data.features.length} countries visited.
        </p>
        <p className="text-2xl text-zinc-600 text-center font-medium">
          {distanceFlown.toLocaleString()} KM flown.
        </p>
      </div>
    </main>
  );
}
