import axios from 'axios';

export const getTravel = async (): Promise<TravelData> => {
  try {
    const {
      data: { result: distance },
    } = await axios.get(
      `https://us1-one-chipmunk-35928.upstash.io/get/distance`,
      {
        headers: {
          Authorization: `Bearer ${process.env.UPSTASH_TOKEN}`,
        },
      },
    );

    const {
      data: { result: countries },
    } = await axios.get(
      `https://us1-one-chipmunk-35928.upstash.io/smembers/countries`,
      {
        headers: {
          Authorization: `Bearer ${process.env.UPSTASH_TOKEN}`,
        },
      },
    );

    return {
      distance,
      countries,
    };
  } catch (err: any) {
    throw new Error(err);
  }
};

export const setDistance = (distance: number) => {
  try {
    axios.get(
      `https://us1-one-chipmunk-35928.upstash.io/set/distance/${distance}`,
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

export const setCountries = (country: string) => {
  try {
    axios.get(
      `https://us1-one-chipmunk-35928.upstash.io/sadd/countries/${country}`,
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
