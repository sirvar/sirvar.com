"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Basic } from "unsplash-js/dist/methods/photos/types";

interface PhotoProps {
  photo: Basic;
  width?: number;
}

const Photo: React.FC<PhotoProps> = ({ photo, width = 230 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        rootMargin: "200px",
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <a href={photo.links.html} target="_blank" rel="noreferrer">
      <div ref={ref} className="relative group rounded-lg overflow-hidden">
        {isVisible && (
          <div
            className={`transition-opacity duration-300 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={photo.urls.regular}
              width={width}
              height={Math.round((width / photo.width) * photo.height)}
              alt={photo.alt_description || "Photo by Sirvar"}
              className="rounded-lg object-cover"
              onLoad={() => setImageLoaded(true)}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            <span className="absolute bottom-0 left-0 m-2 text-white text-sm via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              {photo.description}
            </span>
          </div>
        )}
      </div>
    </a>
  );
};

export default Photo;
