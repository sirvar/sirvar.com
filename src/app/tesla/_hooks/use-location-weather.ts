"use client";

import { useEffect, useState } from "react";

const CACHE_KEY = "tesla-loc-weather";
const CACHE_TTL_MS = 15 * 60 * 1000;

export type LocationWeather = {
  city: string | null;
  countryCode: string | null;
  temp: number | null;
  weatherCode: number | null;
  sunrise: string | null;
  sunset: string | null;
};

type Cached = LocationWeather & { fetchedAt: number };

const empty: LocationWeather = {
  city: null,
  countryCode: null,
  temp: null,
  weatherCode: null,
  sunrise: null,
  sunset: null,
};

function readCache(): LocationWeather | null {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Cached;
    if (
      typeof parsed.fetchedAt !== "number" ||
      Date.now() - parsed.fetchedAt > CACHE_TTL_MS
    ) {
      return null;
    }
    return {
      city: parsed.city ?? null,
      countryCode: parsed.countryCode ?? null,
      temp: parsed.temp ?? null,
      weatherCode: parsed.weatherCode ?? null,
      sunrise: parsed.sunrise ?? null,
      sunset: parsed.sunset ?? null,
    };
  } catch {
    return null;
  }
}

function writeCache(value: LocationWeather) {
  try {
    const payload: Cached = { ...value, fetchedAt: Date.now() };
    localStorage.setItem(CACHE_KEY, JSON.stringify(payload));
  } catch {
    // ignore quota / privacy mode errors
  }
}

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

/**
 * Fetch a JSON URL with one retry (so up to two total attempts), exponential
 * backoff (800ms then 1600ms), and a 5s per-attempt timeout via AbortController.
 * Throws on final failure.
 */
async function fetchJsonWithRetry<T>(
  url: string,
  parse: (data: unknown) => T,
  { retries = 1, timeoutMs = 5000, baseDelay = 800 }: {
    retries?: number;
    timeoutMs?: number;
    baseDelay?: number;
  } = {},
): Promise<T> {
  let lastError: unknown;
  for (let attempt = 0; attempt <= retries; attempt++) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeoutMs);
    try {
      const res = await fetch(url, { signal: controller.signal });
      if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
      const data = await res.json();
      return parse(data);
    } catch (err) {
      lastError = err;
    } finally {
      clearTimeout(timer);
    }
    if (attempt < retries) {
      await sleep(baseDelay * Math.pow(2, attempt));
    }
  }
  throw lastError instanceof Error ? lastError : new Error(String(lastError));
}

async function getCoordsFromGeolocation(): Promise<{
  lat: number;
  lon: number;
} | null> {
  if (typeof navigator === "undefined" || !navigator.geolocation) return null;
  return new Promise((resolve) => {
    let settled = false;
    const finish = (value: { lat: number; lon: number } | null) => {
      if (settled) return;
      settled = true;
      resolve(value);
    };
    navigator.geolocation.getCurrentPosition(
      (pos) =>
        finish({ lat: pos.coords.latitude, lon: pos.coords.longitude }),
      () => finish(null),
      { timeout: 5000, maximumAge: 600_000, enableHighAccuracy: false },
    );
    setTimeout(() => finish(null), 5500);
  });
}

async function reverseGeocode(
  lat: number,
  lon: number,
): Promise<{ city: string | null; countryCode: string | null }> {
  try {
    return await fetchJsonWithRetry(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`,
      (raw) => {
        const data = raw as Record<string, unknown>;
        const city =
          (data.city as string) ||
          (data.locality as string) ||
          (data.principalSubdivision as string) ||
          null;
        const countryCode = (data.countryCode as string) || null;
        return { city, countryCode };
      },
    );
  } catch {
    return { city: null, countryCode: null };
  }
}

async function getFromIp(): Promise<{
  lat: number;
  lon: number;
  city: string | null;
  countryCode: string | null;
} | null> {
  try {
    return await fetchJsonWithRetry("https://ipapi.co/json/", (raw) => {
      const data = raw as Record<string, unknown>;
      const lat = Number(data.latitude);
      const lon = Number(data.longitude);
      if (!Number.isFinite(lat) || !Number.isFinite(lon)) {
        throw new Error("ipapi: invalid coords");
      }
      return {
        lat,
        lon,
        city: (data.city as string) ?? null,
        countryCode:
          (data.country_code as string) ?? (data.country as string) ?? null,
      };
    });
  } catch {
    return null;
  }
}

async function fetchWeather(
  lat: number,
  lon: number,
): Promise<{
  temp: number | null;
  weatherCode: number | null;
  sunrise: string | null;
  sunset: string | null;
}> {
  try {
    return await fetchJsonWithRetry(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weather_code&daily=sunrise,sunset&timezone=auto&temperature_unit=celsius`,
      (raw) => {
        const data = raw as {
          current?: { temperature_2m?: unknown; weather_code?: unknown };
          daily?: { sunrise?: unknown[]; sunset?: unknown[] };
        };
        const temp = data.current?.temperature_2m;
        const code = data.current?.weather_code;
        const sunrise = data.daily?.sunrise?.[0];
        const sunset = data.daily?.sunset?.[0];
        return {
          temp: typeof temp === "number" ? Math.round(temp) : null,
          weatherCode: typeof code === "number" ? code : null,
          sunrise: typeof sunrise === "string" ? sunrise : null,
          sunset: typeof sunset === "string" ? sunset : null,
        };
      },
    );
  } catch {
    return { temp: null, weatherCode: null, sunrise: null, sunset: null };
  }
}

export function useLocationWeather(): {
  data: LocationWeather;
  loading: boolean;
} {
  const [data, setData] = useState<LocationWeather>(empty);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    const run = async () => {
      const cached = readCache();
      if (cached) {
        if (!cancelled) {
          setData(cached);
          setLoading(false);
        }
        return;
      }

      let lat: number | null = null;
      let lon: number | null = null;
      let city: string | null = null;
      let countryCode: string | null = null;

      const coords = await getCoordsFromGeolocation();
      if (coords) {
        lat = coords.lat;
        lon = coords.lon;
        const place = await reverseGeocode(lat, lon);
        city = place.city;
        countryCode = place.countryCode;
      }

      if (lat == null || lon == null) {
        const ip = await getFromIp();
        if (ip) {
          lat = ip.lat;
          lon = ip.lon;
          city = city ?? ip.city;
          countryCode = countryCode ?? ip.countryCode;
        }
      }

      let temp: number | null = null;
      let weatherCode: number | null = null;
      let sunrise: string | null = null;
      let sunset: string | null = null;
      if (lat != null && lon != null) {
        const w = await fetchWeather(lat, lon);
        temp = w.temp;
        weatherCode = w.weatherCode;
        sunrise = w.sunrise;
        sunset = w.sunset;
      }

      const next: LocationWeather = {
        city,
        countryCode,
        temp,
        weatherCode,
        sunrise,
        sunset,
      };
      writeCache(next);
      if (!cancelled) {
        setData(next);
        setLoading(false);
      }
    };

    run();
    return () => {
      cancelled = true;
    };
  }, []);

  return { data, loading };
}
