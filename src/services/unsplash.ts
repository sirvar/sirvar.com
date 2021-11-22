import axios, { AxiosResponse } from 'axios';

const UNSPLASH_API_URL = process.env.UNSPLASH_API_URL;
const UNSPLASH_API_KEY = process.env.UNSPLASH_API_KEY;

export const getStatistics = async () => {
  if (!UNSPLASH_API_URL || !UNSPLASH_API_KEY) return;

  try {
    const unsplash = (await axios.get(
      `${UNSPLASH_API_URL}/users/sirvar/statistics`,
      {
        params: {
          client_id: UNSPLASH_API_KEY,
        },
      },
    )) as AxiosResponse;

    return unsplash.data;
  } catch (err: any) {
    throw new Error(err);
  }
};

export const getProfile = async () => {
  if (!UNSPLASH_API_URL || !UNSPLASH_API_KEY) return;

  try {
    const unsplash = (await axios.get(`${UNSPLASH_API_URL}/users/sirvar`, {
      params: {
        client_id: UNSPLASH_API_KEY,
      },
    })) as AxiosResponse;

    return unsplash.data;
  } catch (err: any) {
    throw new Error(err);
  }
};
