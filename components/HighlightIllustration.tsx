type Variant = "winner" | "smash" | "rally";

interface Props {
  variant: Variant;
}

/**
 * Pure SVG "AI tracking" highlight visuals — no images required.
 * Uses semantic design tokens (court, primary, accent, foreground).
 */
export const HighlightIllustration = ({ variant }: Props) => {
  return (
    <svg
      viewBox="0 0 800 450"
      className="absolute inset-0 w-full h-full"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label={`${variant} tracking illustration`}
    >
      {/* Court background */}
      <defs>
        <linearGradient id={`court-grad-${variant}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="hsl(var(--court))" />
          <stop offset="100%" stopColor="hsl(var(--court) / 0.85)" />
        </linearGradient>
      </defs>

      <rect width="800" height="450" fill={`url(#court-grad-${variant})`} />

      {/* Court lines */}
      <g stroke="hsl(var(--court-line))" strokeWidth="2" fill="none">
        <rect x="60" y="50" width="680" height="350" rx="4" />
        <line x1="400" y1="50" x2="400" y2="400" />
        <line x1="60" y1="225" x2="740" y2="225" strokeDasharray="8 6" strokeWidth="1.5" />
        <line x1="220" y1="50" x2="220" y2="400" strokeDasharray="8 6" strokeWidth="1.5" />
        <line x1="580" y1="50" x2="580" y2="400" strokeDasharray="8 6" strokeWidth="1.5" />
      </g>

      {variant === "winner" && (
        <>
          {/* Ball trajectory — sharp diagonal winner */}
          <path
            d="M 200 140 Q 380 80 600 320"
            stroke="hsl(var(--accent))"
            strokeWidth="3"
            fill="none"
            strokeDasharray="6 6"
            opacity="0.9"
          />
          {/* Players */}
          <g>
            <circle cx="200" cy="140" r="22" fill="hsl(var(--primary))" />
            <text x="200" y="146" textAnchor="middle" fontSize="13" fontWeight="800" fill="white">P1</text>
            <circle cx="180" cy="320" r="22" fill="hsl(var(--primary))" opacity="0.7" />
            <text x="180" y="326" textAnchor="middle" fontSize="13" fontWeight="800" fill="white">P2</text>
            <circle cx="600" cy="320" r="22" fill="hsl(var(--accent))" />
            <text x="600" y="326" textAnchor="middle" fontSize="13" fontWeight="800" fill="white">P3</text>
            <circle cx="620" cy="140" r="22" fill="hsl(var(--accent))" opacity="0.7" />
            <text x="620" y="146" textAnchor="middle" fontSize="13" fontWeight="800" fill="white">P4</text>
          </g>
          {/* Ball impact */}
          <circle cx="600" cy="320" r="10" fill="hsl(var(--accent))" stroke="white" strokeWidth="2" />
          <circle cx="600" cy="320" r="20" fill="none" stroke="hsl(var(--accent))" strokeWidth="2" opacity="0.5" />
          <circle cx="600" cy="320" r="30" fill="none" stroke="hsl(var(--accent))" strokeWidth="1.5" opacity="0.3" />
        </>
      )}

      {variant === "smash" && (
        <>
          {/* High lob then steep smash */}
          <path
            d="M 250 350 Q 400 40 550 350"
            stroke="hsl(var(--primary))"
            strokeWidth="3"
            fill="none"
            strokeDasharray="6 6"
            opacity="0.8"
          />
          {/* Smash speed lines */}
          <g stroke="hsl(var(--accent))" strokeWidth="2" opacity="0.6">
            <line x1="430" y1="120" x2="540" y2="330" />
            <line x1="450" y1="115" x2="555" y2="320" />
            <line x1="410" y1="125" x2="525" y2="340" />
          </g>
          <g>
            <circle cx="400" cy="100" r="22" fill="hsl(var(--accent))" />
            <text x="400" y="106" textAnchor="middle" fontSize="13" fontWeight="800" fill="white">P3</text>
            <circle cx="250" cy="350" r="22" fill="hsl(var(--primary))" opacity="0.7" />
            <text x="250" y="356" textAnchor="middle" fontSize="13" fontWeight="800" fill="white">P1</text>
            <circle cx="550" cy="350" r="22" fill="hsl(var(--primary))" />
            <text x="550" y="356" textAnchor="middle" fontSize="13" fontWeight="800" fill="white">P2</text>
          </g>
          <circle cx="550" cy="350" r="10" fill="hsl(var(--accent))" stroke="white" strokeWidth="2" />
          <circle cx="550" cy="350" r="22" fill="none" stroke="hsl(var(--accent))" strokeWidth="2" opacity="0.5" />
        </>
      )}

      {variant === "rally" && (
        <>
          {/* Multiple back-and-forth ball paths */}
          <g fill="none" strokeWidth="2.5" strokeDasharray="5 5">
            <path d="M 180 200 Q 400 100 620 250" stroke="hsl(var(--primary))" opacity="0.7" />
            <path d="M 620 250 Q 400 380 200 280" stroke="hsl(var(--accent))" opacity="0.7" />
            <path d="M 200 280 Q 400 150 600 180" stroke="hsl(var(--primary))" opacity="0.5" />
            <path d="M 600 180 Q 400 320 220 240" stroke="hsl(var(--accent))" opacity="0.5" />
          </g>
          <g>
            <circle cx="180" cy="200" r="22" fill="hsl(var(--primary))" />
            <text x="180" y="206" textAnchor="middle" fontSize="13" fontWeight="800" fill="white">P1</text>
            <circle cx="200" cy="320" r="22" fill="hsl(var(--primary))" opacity="0.7" />
            <text x="200" y="326" textAnchor="middle" fontSize="13" fontWeight="800" fill="white">P2</text>
            <circle cx="620" cy="180" r="22" fill="hsl(var(--accent))" />
            <text x="620" y="186" textAnchor="middle" fontSize="13" fontWeight="800" fill="white">P3</text>
            <circle cx="600" cy="300" r="22" fill="hsl(var(--accent))" opacity="0.7" />
            <text x="600" y="306" textAnchor="middle" fontSize="13" fontWeight="800" fill="white">P4</text>
          </g>
          <circle cx="400" cy="225" r="7" fill="hsl(var(--foreground))" />
        </>
      )}

      {/* AI tracking corner brackets */}
      <g stroke="hsl(var(--accent))" strokeWidth="2.5" fill="none" opacity="0.9">
        <path d="M 30 30 L 30 70 M 30 30 L 70 30" />
        <path d="M 770 30 L 770 70 M 770 30 L 730 30" />
        <path d="M 30 420 L 30 380 M 30 420 L 70 420" />
        <path d="M 770 420 L 770 380 M 770 420 L 730 420" />
      </g>

      {/* Camera markers */}
      <g>
        <rect x="370" y="14" width="60" height="20" rx="4" fill="hsl(var(--primary))" />
        <text x="400" y="28" textAnchor="middle" fontSize="11" fontWeight="800" fill="white">AI CAM</text>
      </g>
    </svg>
  );
};
