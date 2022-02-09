import fs from 'fs';

const LOCATION_FILE = `./src/data/location.json`;

export const getLocation = (): LocationData => {
  try {
    return JSON.parse(fs.readFileSync(LOCATION_FILE, `utf-8`)) as LocationData;
  } catch (err: any) {
    throw new Error(err);
  }
};

export const setLocation = (location: any) => {
  try {
    fs.writeFileSync(
      LOCATION_FILE,
      JSON.stringify({
        location,
        date: new Date().toISOString(),
      }),
    );
  } catch (err: any) {
    throw new Error(err);
  }
};
