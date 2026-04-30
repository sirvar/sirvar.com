"use client";

import React, { useEffect, useRef, useState } from "react";
import Pill from "./pill";
import { SircarMark, weatherCodeToIcon } from "./icons";
import type { LocationWeather } from "../_hooks/use-location-weather";
import { formatTemp, type TempUnit } from "../_lib/format";

const dateFormatter = new Intl.DateTimeFormat(undefined, {
  weekday: "short",
  day: "numeric",
  month: "short",
});

function formatLocation(
  city: string | null,
  countryCode: string | null,
): string {
  if (city && countryCode) return `${city}, ${countryCode}`;
  if (city) return city;
  if (countryCode) return countryCode;
  return "—";
}

type HeaderProps = {
  data: LocationWeather;
  carName: string;
  tempUnit: TempUnit;
  isEditing: boolean;
  onCarNameChange: (name: string) => void;
  onCycleUnit: () => void;
};

const Header: React.FC<HeaderProps> = ({
  data,
  carName,
  tempUnit,
  isEditing,
  onCarNameChange,
  onCycleUnit,
}) => {
  const [today, setToday] = useState<string>("");
  const [editingName, setEditingName] = useState(false);
  const [draftName, setDraftName] = useState(carName);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const update = () => setToday(dateFormatter.format(new Date()));
    update();
    const interval = setInterval(update, 60_000);
    return () => clearInterval(interval);
  }, []);

  // Exit name editing if user leaves edit mode
  useEffect(() => {
    if (!isEditing) setEditingName(false);
  }, [isEditing]);

  // Sync draft when carName changes externally
  useEffect(() => {
    setDraftName(carName);
  }, [carName]);

  // Focus + select input when entering name edit
  useEffect(() => {
    if (!editingName) return;
    const t = setTimeout(() => {
      inputRef.current?.focus();
      inputRef.current?.select();
    }, 0);
    return () => clearTimeout(t);
  }, [editingName]);

  const WeatherIcon = weatherCodeToIcon(data.weatherCode);

  const commitName = () => {
    const value = draftName.trim();
    if (value && value !== carName) onCarNameChange(value);
    else setDraftName(carName);
    setEditingName(false);
  };

  const cancelName = () => {
    setDraftName(carName);
    setEditingName(false);
  };

  return (
    <header className="tesla-row" role="banner">
      <div className="tesla-row__group">
        {editingName ? (
          <Pill icon={<SircarMark size={16} />}>
            <input
              ref={inputRef}
              type="text"
              value={draftName}
              onChange={(e) => setDraftName(e.target.value)}
              onBlur={commitName}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  commitName();
                } else if (e.key === "Escape") {
                  e.preventDefault();
                  cancelName();
                }
              }}
              className="tesla-pill__input"
              maxLength={32}
              autoComplete="off"
              autoCapitalize="off"
              spellCheck={false}
              size={Math.max(draftName.length || 1, 6)}
            />
          </Pill>
        ) : (
          <Pill
            icon={<SircarMark size={16} />}
            onClick={isEditing ? () => setEditingName(true) : undefined}
            ariaLabel={isEditing ? "Edit car name" : undefined}
          >
            {carName}
          </Pill>
        )}
        <Pill showStatusDot>
          {formatLocation(data.city, data.countryCode)}
        </Pill>
      </div>
      <div className="tesla-row__group">
        <Pill
          icon={<WeatherIcon size={16} />}
          onClick={isEditing ? onCycleUnit : undefined}
          ariaLabel={isEditing ? "Switch temperature unit" : undefined}
        >
          <span className="tesla-pill__num">
            {data.temp != null ? formatTemp(data.temp, tempUnit) : "—"}
          </span>
        </Pill>
        <Pill>{today || "—"}</Pill>
      </div>
    </header>
  );
};

export default Header;
