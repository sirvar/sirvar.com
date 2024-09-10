"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { countryColors, Guide } from "@/app/travel/guides/data";

interface CityProps {
  guide: Guide;
  className?: string;
}

const City: React.FC<CityProps> = ({ guide, className }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        rootMargin: "100px",
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <a
      href={guide.href}
      className={`w-fit mx-auto ${className}`}
      target="_blank"
      rel="noreferrer"
    >
      <div ref={ref} className="relative group rounded-lg overflow-hidden">
        {isVisible && (
          <div
            className={`transition-opacity duration-300 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={guide.image ?? "/travel/lisbon.jpg"}
              width={240}
              height={192}
              alt={guide.location}
              className="rounded-lg object-cover object-center w-60 h-48"
              onLoad={() => setImageLoaded(true)}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/50" />
            <span
              className={`absolute bottom-0 left-0 m-2 font-medium text-xs px-2 py-0.5 rounded-full ${
                countryColors[guide.country]
              }`}
            >
              {guide.country} {guide.location}
            </span>
          </div>
        )}
      </div>
    </a>
  );
};
export default City;
