"use client";

import React, { useState, useEffect } from "react";

interface DelayedButtonProps {
  delay?: number;
}

const DelayedButton: React.FC<DelayedButtonProps> = ({ delay = 500 }) => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`mt-10 flex justify-center items-center transition-opacity duration-300 ${
        showButton ? "opacity-100" : "opacity-0"
      }`}
    >
      <a
        href="https://unsplash.com/@sirvar"
        className="px-4 py-2 border rounded-lg border-zinc-800 text-sm
           hover:border-zinc-600 hover:bg-zinc-800 transition-all"
        target="_blank"
        rel="noreferrer"
      >
        See more
      </a>
    </div>
  );
};

export default DelayedButton;