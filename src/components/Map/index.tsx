import React, { memo } from 'react';
import {
  Annotation,
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from 'react-simple-maps';

const geoUrl = `https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/4e8c268329ba64f6cadd659fc53ba3b9a1a6959b/topojson-maps/world-110m.json`;

type MapProps = {
  dataFor: string;
  setTooltipContent: (message: string) => void;
  countries: string[];
  locationData: LocationData;
};

const MapChart: React.FC<MapProps> = ({
  dataFor,
  setTooltipContent,
  countries,
  locationData,
}: MapProps) => {
  return (
    <>
      <ComposableMap
        projection="geoMercator"
        data-tip=""
        data-for={dataFor}
        projectionConfig={{ scale: 135, center: [0, 40] }}
        // style={{ width: `calc(100vw - 96px)`, marginLeft: `-200px` }}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
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
        {locationData.latitude && locationData.longitude && (
          <Annotation
            subject={[locationData.longitude, locationData.latitude]}
            dx={-30}
            dy={-30}
            connectorProps={{
              stroke: `#0A3442`,
              strokeWidth: 1.5,
              strokeLinecap: `round`,
            }}
          >
            <text
              textAnchor="middle"
              y={-4}
              style={{
                fontFamily: `GTWalsheimPro`,
                fontSize: 12,
                fontWeight: `bold`,
                fill: `#0A3442`,
                stroke: `#f9fafb`,
                strokeWidth: 0.5,
              }}
            >
              I&apos;m Here
            </text>
          </Annotation>
        )}
      </ComposableMap>
    </>
  );
};

export default memo(MapChart);
