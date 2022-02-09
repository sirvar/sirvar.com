import React, { memo } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';

const geoUrl = `https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json`;

type MapProps = {
  dataFor: string;
  setTooltipContent: (message: string) => void;
  countries: string[];
};

const MapChart: React.FC<MapProps> = ({
  dataFor,
  setTooltipContent,
  countries,
}: MapProps) => {
  return (
    <>
      <ComposableMap
        projection="geoMercator"
        data-tip=""
        data-for={dataFor}
        projectionConfig={{ scale: 135, center: [0, 40] }}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              console.log(geo);
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => {
                    const { NAME_LONG } = geo.properties;
                    countries.includes(NAME_LONG) &&
                      setTooltipContent(`${NAME_LONG}`);
                  }}
                  onMouseLeave={() => {
                    setTooltipContent(``);
                  }}
                  style={{
                    default: {
                      fill: countries.includes(geo.properties.NAME_LONG)
                        ? `#104455`
                        : `#D6D6DA`,
                      outline: `none`,
                      stroke: `white`,
                    },
                    hover: {
                      fill: countries.includes(geo.properties.NAME_LONG)
                        ? `#104455`
                        : `#D6D6DA`,
                      outline: `none`,
                      stroke: `white`,
                    },
                    pressed: {
                      fill: countries.includes(geo.properties.NAME_LONG)
                        ? `#104455`
                        : `#D6D6DA`,
                      outline: `none`,
                      stroke: `white`,
                    },
                  }}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>
    </>
  );
};

export default memo(MapChart);
