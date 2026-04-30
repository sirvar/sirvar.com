import Dashboard, { type DashboardApp } from "./_components/dashboard";
import ErrorBoundary from "./_components/error-boundary";

const DEFAULT_APPS: DashboardApp[] = [
  {
    id: "youtube",
    name: "YouTube",
    url: "https://www.youtube.com",
    domain: "youtube.com",
    iconKey: "youtube",
  },
  {
    id: "plex",
    name: "Plex",
    url: "https://app.plex.tv",
    domain: "plex.tv",
    iconKey: "plex",
  },
  {
    id: "claude",
    name: "Claude",
    url: "https://claude.ai",
    domain: "claude.ai",
    iconKey: "claude",
  },
];

export default function TeslaPage() {
  return (
    <ErrorBoundary>
      <Dashboard defaults={DEFAULT_APPS} />
    </ErrorBoundary>
  );
}
