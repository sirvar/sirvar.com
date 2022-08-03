import axios from 'axios';

import { supabaseClient } from './supabase';

export const getTravel = async (): Promise<TravelData> => {
  try {
    const distance = await supabaseClient
      ?.from(`distance`)
      .select(`distance`)
      .order(`created_at`, { ascending: false })
      .limit(1);

    const countries = await supabaseClient?.from(`countries`).select(`country`);

    if (distance?.data || countries?.data) {
      return {
        distance: distance?.data?.[0]?.distance,
        countries: countries?.data?.map((country) => country.country) || [],
      };
    }

    return {
      distance: 0,
      countries: [],
    };
  } catch (err: any) {
    throw new Error(err);
  }
};

export const setDistance = async (distance: number) => {
  try {
    await supabaseClient?.from(`distance`).insert({
      distance,
    });
  } catch (err: any) {
    throw new Error(err);
  }
};

export const setCountries = async (country: string) => {
  try {
    await supabaseClient?.from(`countries`).insert({
      country,
    });
  } catch (err: any) {
    throw new Error(err);
  }
};

export const getLocation = async (): Promise<LocationData> => {
  try {
    const location = await supabaseClient
      ?.from(`location`)
      .select()
      .order(`created_at`, { ascending: false })
      .limit(1);

    return {
      location: location?.data?.[0]?.current || `Windsor, ON, Canada`,
      latitude: location?.data?.[0]?.latitude,
      longitude: location?.data?.[0]?.longitude,
    };
  } catch (err: any) {
    throw new Error(err);
  }
};

export const setLocation = async (current: any) => {
  try {
    const { data: coords } = await axios.get(
      `${process.env.POSITIONSTACK_URL}/forward`,
      {
        params: {
          access_key: process.env.POSITIONSTACK_API_KEY,
          query: current,
        },
      },
    );
    const { latitude, longitude } = coords.data?.[0];
    await supabaseClient?.from(`location`).insert({
      current,
      latitude,
      longitude,
    });
  } catch (err: any) {
    throw new Error(err);
  }
};
