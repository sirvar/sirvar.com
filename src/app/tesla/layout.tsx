import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import React from "react";
import "./tesla.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-tesla",
  display: "swap",
});

export const metadata: Metadata = {
  title: { absolute: "sircar | Tesla" },
  description: "A personal launcher for the Tesla in-car browser.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f3f4f6" },
    { media: "(prefers-color-scheme: dark)", color: "#111214" },
  ],
};

const noFlashScript = `(function(){try{var m=localStorage.getItem('tesla-theme-mode');var t;if(m==='manual'){t=localStorage.getItem('tesla-theme');if(t!=='light'&&t!=='dark'){t=(window.matchMedia&&window.matchMedia('(prefers-color-scheme: light)').matches)?'light':'dark';}}else{t=(window.matchMedia&&window.matchMedia('(prefers-color-scheme: light)').matches)?'light':'dark';}document.documentElement.setAttribute('data-tesla-theme',t);}catch(e){document.documentElement.setAttribute('data-tesla-theme','dark');}})();`;

export default function TeslaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: noFlashScript }} />
      <div className={inter.variable} style={{ display: "contents" }}>
        {children}
      </div>
    </>
  );
}
