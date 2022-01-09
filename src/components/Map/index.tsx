import React, { memo } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';

import countires from '../../data/countries.json';

const geoUrl = `https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json`;

type MapProps = {
  setTooltipContent: (message: string) => void;
};

const MapChart: React.FC<MapProps> = ({ setTooltipContent }: MapProps) => {
  return (
    <>
      <ComposableMap data-tip="" projectionConfig={{ scale: 200 }}>
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
                    countires.includes(NAME_LONG) &&
                      setTooltipContent(`${NAME_LONG}`);
                  }}
                  onMouseLeave={() => {
                    setTooltipContent(``);
                  }}
                  style={{
                    default: {
                      fill: countires.includes(geo.properties.NAME_LONG)
                        ? `#104455`
                        : `#D6D6DA`,
                      outline: `none`,
                      stroke: `white`,
                    },
                    hover: {
                      fill: countires.includes(geo.properties.NAME_LONG)
                        ? `#104455`
                        : `#D6D6DA`,
                      outline: `none`,
                      stroke: `white`,
                    },
                    pressed: {
                      fill: countires.includes(geo.properties.NAME_LONG)
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
