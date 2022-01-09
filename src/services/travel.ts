import fs from 'fs';

const TRAVEL_FILE = `./src/data/travel.json`;

export const getTravel = (): TravelData => {
  try {
    return JSON.parse(fs.readFileSync(TRAVEL_FILE, `utf-8`)) as TravelData;
  } catch (err: any) {
    throw new Error(err);
  }
};

export const setDistance = (distance: number) => {
  try {
    const travel = getTravel();
    fs.writeFileSync(
      TRAVEL_FILE,
      JSON.stringify({
        ...travel,
        distance,
      }),
    );
  } catch (err: any) {
    throw new Error(err);
  }
};
