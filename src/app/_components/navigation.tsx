"use client";

import { BookMarked, Camera, Compass, Plane } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const links = [
  { href: "/", label: "Home", icon: Compass },
  { href: "/blog", label: "Blog", icon: BookMarked },
  { href: "/photography", label: "Photography", icon: Camera },
  { href: "/travel", label: "Travel", icon: Plane },
];

const Navigation: React.FC = () => {
  const pathname = usePathname();

  return (
    <div className="flex justify-center fixed py-4 w-full bg-background-primary">
      <nav className="inline-flex py-3 px-4 gap-6 justify-center border border-zinc-600 rounded-full w-auto">
        {links.map((link, index) => (
          <Link key={index} href={link.href}>
            <link.icon
              className={`hover:text-zinc-300 transition-colors ${
                link.href === pathname ? "text-zinc-200" : "text-zinc-600"
              }`}
            />
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Navigation;
