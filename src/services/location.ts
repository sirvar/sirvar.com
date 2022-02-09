import axios from 'axios';

export const getLocation = async (): Promise<LocationData> => {
  try {
    const {
      data: { result: location },
    } = await axios.get(
      `https://us1-one-chipmunk-35928.upstash.io/get/location`,
      {
        headers: {
          Authorization: `Bearer ${process.env.UPSTASH_TOKEN}`,
        },
      },
    );

    return {
      location,
    };
  } catch (err: any) {
    throw new Error(err);
  }
};

export const setLocation = (location: any) => {
  try {
    axios.get(
      `https://us1-one-chipmunk-35928.upstash.io/set/location/${location}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.UPSTASH_TOKEN}`,
        },
      },
    );
  } catch (err: any) {
    throw new Error(err);
  }
};
