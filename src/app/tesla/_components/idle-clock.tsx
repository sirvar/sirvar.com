"use client";

import React, { useEffect, useState } from "react";
import { weatherCodeToIcon } from "./icons";
import type { LocationWeather } from "../_hooks/use-location-weather";
import { formatTemp, type TempUnit } from "../_lib/format";

const timeFormatter = new Intl.DateTimeFormat([], {
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
});

const dateFormatter = new Intl.DateTimeFormat(undefined, {
  weekday: "long",
  day: "numeric",
  month: "long",
});

const IdleClock: React.FC<{
  active: boolean;
  data: LocationWeather;
  tempUnit: TempUnit;
}> = ({ active, data, tempUnit }) => {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(timeFormatter.format(now));
      setDate(dateFormatter.format(now));
    };
    update();
    let interval: ReturnType<typeof setInterval> | null = null;
    const timeout = setTimeout(() => {
      update();
      interval = setInterval(update, 60_000);
    }, 60_000 - (Date.now() % 60_000));
    return () => {
      clearTimeout(timeout);
      if (interval) clearInterval(interval);
    };
  }, []);

  const WeatherIcon = weatherCodeToIcon(data.weatherCode);

  return (
    <div
      className={`tesla-idle${active ? " tesla-idle--shown" : ""}`}
      aria-hidden={!active}
    >
      <div className="tesla-idle__time tesla-pill__num">{time || "--:--"}</div>
      <div className="tesla-idle__sub">
        <span className="tesla-idle__weather">
          <WeatherIcon size={26} />
          <span className="tesla-pill__num">
            {data.temp != null ? formatTemp(data.temp, tempUnit) : "—"}
          </span>
        </span>
        <span className="tesla-idle__dot" aria-hidden />
        <span>{date}</span>
      </div>
    </div>
  );
};

export default IdleClock;
