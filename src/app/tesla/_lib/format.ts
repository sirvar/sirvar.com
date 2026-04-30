export type TempUnit = "celsius" | "fahrenheit";

export function formatTemp(celsius: number, unit: TempUnit): string {
  if (unit === "fahrenheit") {
    return `${Math.round((celsius * 9) / 5 + 32)}°F`;
  }
  return `${Math.round(celsius)}°C`;
}
