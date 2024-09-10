export interface Guide {
  location: string;
  href: string;
  image: string;
  country: string;
  color?: string;
}

export const countryColors: { [key: string]: string } = {
  "🇵🇹": "bg-[#006C35] text-[#FFFFFF]", // Portugal (green from the flag)
  "🇫🇷": "bg-[#0055A4] text-[#FFFFFF]", // France (blue from the flag)
  "🇧🇪": "bg-[#000000] text-[#FFFFFF]", // Belgium (black and yellow from the flag)
  "🇱🇺": "bg-[#00A1DE] text-[#FFFFFF]", // Luxembourg (light blue from the flag)
  "🇪🇸": "bg-[#FFD700] text-[#0B010E]", // Spain (red and yellow from the flag)
  "🇦🇷": "bg-[#74ACDF] text-[#FFFFFF]", // Argentina (light blue from the flag)
  "🇺🇸": "bg-[#3C3B6E] text-[#FFFFFF]", // USA (navy blue from the flag)
  "🇬🇧": "bg-[#00247D] text-[#FFFFFF]", // UK (dark blue from the flag)
  "🇳🇱": "bg-[#21468B] text-[#FFFFFF]", // Netherlands (dark blue from the flag)
  "🇨🇦": "bg-[#FF0000] text-[#FFFFFF]", // Canada (red from the flag)
  "🇲🇽": "bg-[#006341] text-[#FFFFFF]", // Mexico (green from the flag)
  "🇦🇹": "bg-[#ED2939] text-[#FFFFFF]", // Austria (red from the flag)
  "🇭🇺": "bg-[#C8102E] text-[#FFFFFF]", // Hungary (red from the flag)
  "🇸🇰": "bg-[#0B4EA2] text-[#FFFFFF]", // Slovakia (blue from the flag)
  "🇸🇮": "bg-[#005EB8] text-[#FFFFFF]", // Slovenia (blue from the flag)
  "🇮🇹": "bg-[#008C45] text-[#FFFFFF]", // Italy (green from the flag)
  "🇲🇦": "bg-[#C1272D] text-[#FFFFFF]", // Morocco (red from the flag)
  "🇭🇷": "bg-[#001489] text-[#FFFFFF]", // Croatia (blue from the flag)
  "🇩🇪": "bg-[#000000] text-[#FFD700]", // Germany (black and yellow from the flag)
};

export const guides: Guide[] = [
  {
    location: "Lisbon, Portugal",
    href: "https://maps.app.goo.gl/puLEy6CSKCLxh8Rx9",
    image: "/travel/lisbon.jpg",
    country: "🇵🇹",
  },
  {
    location: "Paris, France",
    href: "https://maps.app.goo.gl/L9rJQ2mtUXLmWiA68",
    image: "/travel/paris.jpg",
    country: "🇫🇷",
  },
  {
    location: "Brussels, Belgium",
    href: "https://maps.app.goo.gl/RcBTZM637Y3vcAhc6",
    image: "/travel/brussels.jpg",
    country: "🇧🇪",
  },
  {
    location: "Luxembourg, Luxembourg",
    href: "https://maps.app.goo.gl/x3n3hyuGWRhaqWib6",
    image: "/travel/luxembourg.jpg",
    country: "🇱🇺",
  },
  {
    location: "Mallorca, Spain",
    href: "https://maps.app.goo.gl/LCReykw3KbYvhKk88",
    image: "/travel/mallorca.jpg",
    country: "🇪🇸",
  },
  {
    location: "Buenos Aires, Argentina",
    href: "https://maps.app.goo.gl/XgUQgfBbFkAt9WJ16",
    image: "/travel/buenos-aires.jpg",
    country: "🇦🇷",
  },
  {
    location: "Philadelphia, USA",
    href: "https://maps.app.goo.gl/4vcCeuQwuDdEBWbH7",
    image: "/travel/philadelphia.jpg",
    country: "🇺🇸",
  },
  {
    location: "Washington DC, USA",
    href: "https://maps.app.goo.gl/u9r2SdLtUAu26gZH7",
    image: "/travel/washington-dc.jpg",
    country: "🇺🇸",
  },
  {
    location: "New York, USA",
    href: "https://maps.app.goo.gl/ufjUgt72sindGTXW9",
    image: "/travel/new-york.jpg",
    country: "🇺🇸",
  },
  {
    location: "Chicago, USA",
    href: "https://maps.app.goo.gl/CWC3cusomDNvhkp86",
    image: "/travel/chicago.jpg",
    country: "🇺🇸",
  },
  {
    location: "Los Angeles, USA",
    href: "https://maps.app.goo.gl/KEhNASy3Xu7tMo6s9",
    image: "/travel/la.jpg",
    country: "🇺🇸",
  },
  {
    location: "London, UK",
    href: "https://maps.app.goo.gl/4FvkvrAbVjRBfsAZ8",
    image: "/travel/london.jpg",
    country: "🇬🇧",
  },
  {
    location: "Amsterdam, Netherlands",
    href: "https://maps.app.goo.gl/CgS4poQDus3YqKCT6",
    image: "/travel/amsterdam.jpg",
    country: "🇳🇱",
  },
  {
    location: "Montreal, Canada",
    href: "https://maps.app.goo.gl/STrLxZextNrCrZnQA",
    image: "/travel/montreal.jpg",
    country: "🇨🇦",
  },
  {
    location: "Mexico City, Mexico",
    href: "https://maps.app.goo.gl/5UBcMC2HB5WvRamH8",
    image: "/travel/cdmx.jpg",
    country: "🇲🇽",
  },
  {
    location: "Vienna, Austria",
    href: "https://maps.app.goo.gl/brEGzX4iNEBW8RKE7",
    image: "/travel/vienna.jpg",
    country: "🇦🇹",
  },
  {
    location: "Budapest, Hungary",
    href: "https://maps.app.goo.gl/GxX1j1DRCTbHXcML8",
    image: "/travel/budapest.jpg",
    country: "🇭🇺",
  },
  {
    location: "Bratislava, Slovakia",
    href: "https://maps.app.goo.gl/tgLeXjHYgb9Gazh97",
    image: "/travel/bratislava.jpg",
    country: "🇸🇰",
  },
  {
    location: "Madrid, Spain",
    href: "https://maps.app.goo.gl/qk7hJJp7UpytSEcc9",
    image: "/travel/madrid.jpg",
    country: "🇪🇸",
  },
  {
    location: "Barcelona, Spain",
    href: "https://maps.app.goo.gl/YzA4jjb2W23JcouH8",
    image: "/travel/barcelona.jpg",
    country: "🇪🇸",
  },
  {
    location: "Ljubljana, Slovenia",
    href: "https://maps.app.goo.gl/2eGwyrpow3ZedQwy9",
    image: "/travel/ljubljana.jpg",
    country: "🇸🇮",
  },
  {
    location: "Trieste, Italy",
    href: "https://maps.app.goo.gl/Bjk3kFAEcr7uyeqr8",
    image: "/travel/trieste.jpg",
    country: "🇮🇹",
  },
  {
    location: "Venice, Italy",
    href: "https://maps.app.goo.gl/jCgmx7nM5KjjxD2TA",
    image: "/travel/venice.jpg",
    country: "🇮🇹",
  },
  {
    location: "Bologna, Italy",
    href: "https://maps.app.goo.gl/pzcVZh2qYQfK1AvUA",
    image: "/travel/bologna.jpg",
    country: "🇮🇹",
  },
  {
    location: "Verona, Italy",
    href: "https://maps.app.goo.gl/xjGeqwP4DqckCJ3B8",
    image: "/travel/verona.jpg",
    country: "🇮🇹",
  },
  {
    location: "Marrakech, Morocco",
    href: "https://maps.app.goo.gl/JRSR83koWZfrvQWh9",
    image: "/travel/marrakech.jpg",
    country: "🇲🇦",
  },
  {
    location: "Innsbruck, Austria",
    href: "https://maps.app.goo.gl/BLYbsqxcNw99ZfMQ9",
    image: "/travel/innsbruck.jpg",
    country: "🇦🇹",
  },
  {
    location: "Milan, Italy",
    href: "https://maps.app.goo.gl/aHrVQz9SkeCt2y5y5",
    image: "/travel/milan.jpg",
    country: "🇮🇹",
  },
  {
    location: "Florence, Italy",
    href: "https://maps.app.goo.gl/W19NeS53c2vV7z1E9",
    image: "/travel/florence.jpg",
    country: "🇮🇹",
  },
  {
    location: "Rome, Italy",
    href: "https://maps.app.goo.gl/WG1FonaYsCw4GdMw8",
    image: "/travel/rome.jpg",
    country: "🇮🇹",
  },
  {
    location: "Dubrovnik, Croatia",
    href: "https://maps.app.goo.gl/pg92SMq83ZjS1CKw7",
    image: "/travel/dubrovnik.jpg",
    country: "🇭🇷",
  },
  {
    location: "Split, Croatia",
    href: "https://maps.app.goo.gl/cyMihcoj6PRRRc8j9",
    image: "/travel/split.jpg",
    country: "🇭🇷",
  },
  {
    location: "Zadar, Croatia",
    href: "https://maps.app.goo.gl/4kWd4xb1GNKGjMxZ7",
    image: "/travel/zadar.jpg",
    country: "🇭🇷",
  },
  {
    location: "Frankfurt, Germany",
    href: "https://maps.app.goo.gl/YqapXZzBXr1Wn1BH6",
    image: "/travel/frankfurt.jpg",
    country: "🇩🇪",
  },
  {
    location: "Madeira, Portugal",
    href: "https://maps.app.goo.gl/Un7uxpLsUuZFYvaa6",
    image: "/travel/madeira.jpg",
    country: "🇵🇹",
  },
  {
    location: "Sevilla, Spain",
    href: "https://maps.app.goo.gl/n1p9a4Aa3spepNET8",
    image: "/travel/sevilla.jpg",
    country: "🇪🇸",
  },
];
