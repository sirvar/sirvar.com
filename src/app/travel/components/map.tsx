"use client";

import { useEffect, useRef, useState } from "react";
import Globe, { GlobeMethods } from "react-globe.gl";

interface Props {
  data: any;
  lat: number;
  lng: number;
  pinLabel: string;
}

export default function Map({ data, lat, lng, pinLabel }: Props) {
  const [width, setWidth] = useState(window?.innerWidth);
  const [height, setHeight] = useState(window?.innerHeight);
  const globeEl = useRef<GlobeMethods | undefined>();

  useEffect(() => {
    if (!globeEl.current) return;
    // Set the initial position of the globe to focus on the pin location
    globeEl.current.pointOfView({ lat, lng }, 0);
    // Auto-rotate
    globeEl.current.controls().autoRotate = true;
    globeEl.current.controls().autoRotateSpeed = 0.5;

    const handleResize = () => {
      setWidth(window?.innerWidth);
      setHeight(window?.innerHeight);
    };

    window?.addEventListener(`resize`, handleResize);

    return () => {
      window?.removeEventListener(`resize`, handleResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Globe
      ref={globeEl}
      backgroundColor="#FFFFFF00"
      showAtmosphere={false}
      width={Math.min(768, width)}
      height={Math.min(768, height)}
      globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
      bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
      polygonsData={data.features}
      polygonAltitude={0.005}
      polygonCapColor={() => `#27272A`}
      polygonSideColor={() => `#000000FF`}
      polygonStrokeColor={() => `#000000`}
      polygonLabel={(country: any) => `
          <p style="text-shadow: 4px 4px 10px #323264; font-weight: 400;">${country.properties.ADMIN}</p>
      `}
      polygonsTransitionDuration={1000}
      htmlElementsData={[
        {
          lat,
          lng,
        },
      ]}
      htmlElement={() => {
        const el = document.createElement(`div`);
        el.innerHTML = `
        <div style="display: flex; flex-direction: column; align-items: center; justify-content: center;">
          <img src="/me.png" style="width: 2rem;margin-top: 0;" />
          <p style="text-shadow: 4px 4px 10px #323264; color: white; font-size: 14px;">${pinLabel}</p>
        </div>
        `;

        return el;
      }}
    />
  );
}
