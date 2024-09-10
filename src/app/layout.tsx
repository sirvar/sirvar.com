import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/app/_components/navigation";
import { GeistSans } from "geist/font/sans";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: {
    template: "%s | Rikin Katyal",
    default: "Rikin Katyal",
  },
  description:
    "Software Engineer. Builder. Traveller. Photographer. Surfer. Writer.",
  keywords: [
    "Rikin Katyal",
    "Rikin",
    "Katyal",
    "Software Engineer",
    "Software",
    "Engineer",
    "Traveller",
    "Photographer",
    "Surfer",
    "Writer",
    "Lisbon",
    "Nomad",
    "Digital Nomad",
    "Remote",
    "Remote Work",
    "Entrepreneur",
    "Startup",
    "Builder",
    "Personal",
    "Portfolio",
    "Personal Portfolio",
    "Personal Website",
    "Personal Blog",
    "Blog",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>👨🏽‍💻</text></svg>"
        />
        <script
          defer
          src="http://umami-kw84808g8k0gcc0w0o4wwgo0.188.245.108.25.sslip.io/script.js"
          data-website-id="e030e719-1411-4abb-abac-0106e8c82b6e"
        ></script>
      </head>
      <body className={GeistSans.className}>
        <Navigation />
        <div className="container md:max-w-2xl mx-auto max-w-none">
          {children}
          <Analytics />
          <SpeedInsights />
        </div>
      </body>
    </html>
  );
}
