type AppIconKey = "youtube" | "plex" | "claude";

const sharedSize = 60;

export const SircarMark: React.FC<{ size?: number }> = ({ size = 16 }) => {
  const visual = Math.round(size * 1.75);
  return (
    <span
      aria-hidden
      style={{
        position: "relative",
        display: "inline-block",
        width: size,
        height: size,
        flexShrink: 0,
      }}
    >
      <img
        src="/tesla-logo.svg"
        alt=""
        width={visual}
        height={visual}
        className="tesla-logo-img"
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          width: visual,
          height: visual,
          transform: "translate(-50%, -50%)",
          display: "block",
          maxWidth: "none",
        }}
      />
    </span>
  );
};

const YouTubeMark: React.FC = () => (
  <svg
    width={sharedSize}
    height={sharedSize}
    viewBox="0 0 60 60"
    aria-hidden
    role="img"
  >
    <rect width="60" height="60" rx="14" fill="#FF0033" />
    <path d="M25 21.5 L40 30 L25 38.5 Z" fill="#FFFFFF" />
  </svg>
);

const PlexMark: React.FC = () => (
  <svg
    width={sharedSize}
    height={sharedSize}
    viewBox="0 0 60 60"
    aria-hidden
    role="img"
  >
    <rect width="60" height="60" rx="14" fill="#1F2326" />
    <path d="M21 18 H29 L39 30 L29 42 H21 L31 30 Z" fill="#E5A00D" />
  </svg>
);

const ClaudeMark: React.FC = () => (
  <svg
    width={sharedSize}
    height={sharedSize}
    viewBox="0 0 60 60"
    aria-hidden
    role="img"
  >
    <rect width="60" height="60" rx="14" fill="#F5EFE3" />
    <path
      d="M30 12
         C 30 22, 32 28, 42 30
         C 32 32, 30 38, 30 48
         C 30 38, 28 32, 18 30
         C 28 28, 30 22, 30 12 Z"
      fill="#D97757"
    />
  </svg>
);

const ICON_MAP: Record<AppIconKey, React.FC> = {
  youtube: YouTubeMark,
  plex: PlexMark,
  claude: ClaudeMark,
};

export const AppIcon: React.FC<{ iconKey: AppIconKey }> = ({ iconKey }) => {
  const Mark = ICON_MAP[iconKey];
  return <Mark />;
};

export const FaviconIcon: React.FC<{ domain: string; iconUrl?: string }> = ({
  domain,
  iconUrl,
}) => {
  const src =
    iconUrl ||
    `https://www.google.com/s2/favicons?domain=${encodeURIComponent(domain)}&sz=128`;
  return (
    <span className="tesla-favicon">
      <img src={src} alt="" />
    </span>
  );
};

export type WeatherCode = number;

type WeatherIconProps = { size?: number };

const cloudPath = "M6 17a4 4 0 0 1 0-8 5 5 0 0 1 9.5-1 3 3 0 0 1 4 7 4 4 0 0 1-2 1z";

const SunIcon: React.FC<WeatherIconProps> = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden role="img">
    <g
      className="tw-sun-rays"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <line x1="12" y1="2" x2="12" y2="5" />
      <line x1="12" y1="19" x2="12" y2="22" />
      <line x1="2" y1="12" x2="5" y2="12" />
      <line x1="19" y1="12" x2="22" y2="12" />
      <line x1="4.93" y1="4.93" x2="7.05" y2="7.05" />
      <line x1="16.95" y1="16.95" x2="19.07" y2="19.07" />
      <line x1="4.93" y1="19.07" x2="7.05" y2="16.95" />
      <line x1="16.95" y1="7.05" x2="19.07" y2="4.93" />
    </g>
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" fill="none" />
  </svg>
);

const CloudSunIcon: React.FC<WeatherIconProps> = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden role="img">
    <g
      className="tw-sun-rays-small"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    >
      <line x1="8" y1="1.5" x2="8" y2="3" />
      <line x1="2" y1="8" x2="3.5" y2="8" />
      <line x1="3.6" y1="3.6" x2="4.6" y2="4.6" />
      <line x1="11.4" y1="3.6" x2="12.4" y2="4.6" />
    </g>
    <circle cx="8" cy="8" r="2.6" stroke="currentColor" strokeWidth="1.8" fill="none" />
    <path
      d="M9 19a3 3 0 0 1 0-6 4 4 0 0 1 7.5 1 2.5 2.5 0 0 1 0.5 5z"
      stroke="currentColor"
      strokeWidth="1.8"
      fill="var(--tesla-bg)"
      strokeLinejoin="round"
    />
  </svg>
);

const CloudIcon: React.FC<WeatherIconProps> = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden role="img">
    <g className="tw-cloud-drift">
      <path
        d={cloudPath}
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);

const FogIcon: React.FC<WeatherIconProps> = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden role="img">
    <path
      d="M6 14a4 4 0 0 1 0-8 5 5 0 0 1 9.5-1 3 3 0 0 1 4 7"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      strokeLinejoin="round"
      strokeLinecap="round"
    />
    <line className="tw-fog-line tw-fog-line-1" x1="3" y1="17" x2="11" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line className="tw-fog-line tw-fog-line-2" x1="14" y1="20" x2="22" y2="20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line className="tw-fog-line tw-fog-line-3" x1="5" y1="22" x2="19" y2="22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const RainIcon: React.FC<WeatherIconProps> = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden role="img">
    <path
      d="M6 14a4 4 0 0 1 0-8 5 5 0 0 1 9.5-1 3 3 0 0 1 4 7"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      strokeLinejoin="round"
      strokeLinecap="round"
    />
    <g stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line className="tw-drop tw-drop-1" x1="8" y1="16" x2="6.5" y2="20" />
      <line className="tw-drop tw-drop-2" x1="13" y1="16" x2="11.5" y2="20" />
      <line className="tw-drop tw-drop-3" x1="18" y1="16" x2="16.5" y2="20" />
    </g>
  </svg>
);

const SnowIcon: React.FC<WeatherIconProps> = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden role="img">
    <path
      d="M6 14a4 4 0 0 1 0-8 5 5 0 0 1 9.5-1 3 3 0 0 1 4 7"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      strokeLinejoin="round"
      strokeLinecap="round"
    />
    <g fill="currentColor">
      <circle className="tw-flake tw-flake-1" cx="8" cy="18" r="1" />
      <circle className="tw-flake tw-flake-2" cx="13" cy="20" r="1" />
      <circle className="tw-flake tw-flake-3" cx="18" cy="18" r="1" />
    </g>
  </svg>
);

const StormIcon: React.FC<WeatherIconProps> = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden role="img">
    <path
      d="M6 14a4 4 0 0 1 0-8 5 5 0 0 1 9.5-1 3 3 0 0 1 4 7"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      strokeLinejoin="round"
      strokeLinecap="round"
    />
    <path
      className="tw-bolt"
      d="M12 15 L9.5 19 L12.5 19 L11 23"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export type WeatherIcon = React.FC<WeatherIconProps>;

export function weatherCodeToIcon(
  code: WeatherCode | null | undefined,
): WeatherIcon {
  if (code == null) return CloudIcon;
  if (code === 0) return SunIcon;
  if (code >= 1 && code <= 3) return CloudSunIcon;
  if (code === 45 || code === 48) return FogIcon;
  if ((code >= 51 && code <= 67) || (code >= 80 && code <= 82)) return RainIcon;
  if ((code >= 71 && code <= 77) || (code >= 85 && code <= 86)) return SnowIcon;
  if (code >= 95 && code <= 99) return StormIcon;
  return CloudIcon;
}

export type { AppIconKey };
