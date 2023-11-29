import { get } from "@vercel/edge-config";
import dynamic from "next/dynamic";

import map from "./data/countries.json";

const Map = dynamic(() => import(`@/app/travel/components/map`), {
  ssr: false,
});

export const metadata = {
  title: `Travel`,
};

async function getCountries() {
  const locations: unknown[] = (await get(`countriesVisited`)) || [];

  return {
    ...map,
    features: map.features.filter((country: any) =>
      locations.includes(country.properties.ADM0_A3)
    ),
  };
}

export default async function Page() {
  const distanceFlown: number = (await get(`distanceFlown`)) || 0;
  const currentCountry: string = (await get(`currentRegion`)) || ``;
  const currentLocation: string = (await get(`currentLocation`)) || ``;
  const currentCoordinates = (
    await (
      await fetch(
        `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
          currentLocation
        )}&key=${encodeURIComponent(process.env.OPENCAGE_API_KEY || ``)}`
      )
    ).json()
  ).results[0]?.geometry;
  const data = await getCountries();

  return (
    <div className="relative">
      <Map
        data={data}
        lat={currentCoordinates.lat || 0}
        lng={currentCoordinates.lng || 0}
        pinLabel={currentLocation}
      />
      {/* <div className="fixed flex sm:flex-col px-4 sm:px-0 gap-8 w-full sm:w-auto h-auto sm:h-full justify-center top-4 sm:top-0 sm:right-6 z-10">
        <Cell
          heading="Countries Visited"
          body={data.features.length.toString() || `0`}
        />
        <Cell heading="Distance Flown" body={`${format(distanceFlown)} km`} />
        <Cell heading="Current Country" body={currentCountry} />
      </div> */}
    </div>
  );
}
