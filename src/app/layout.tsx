import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/app/_components/navigation";
import { GeistSans } from "geist/font/sans";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: {
    template: "%s | Rikin Katyal",
    default: "Rikin Katyal",
  },
  description: "Software Engineer. Traveller. Photographer. Surfer. Writer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link
        rel="icon"
        href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>👨🏽‍💻</text></svg>"
      />
      <body className={GeistSans.className}>
        <Navigation />
        <div className="container md:max-w-2xl mx-auto max-w-none">
          {children}
          <Analytics />
        </div>
      </body>
    </html>
  );
}
