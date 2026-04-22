"use client";

export const CourtIllustration = () => (
  <div className="relative rounded-2xl bg-card p-6 shadow-elegant border border-border">
    <svg viewBox="0 0 600 320" className="w-full h-auto">
      <rect x="20" y="20" width="560" height="280" rx="6" fill="hsl(var(--court))" stroke="hsl(var(--court-line))" strokeWidth="2" />
      <line x1="300" y1="20" x2="300" y2="300" stroke="hsl(var(--court-line))" strokeWidth="2" />
      <line x1="20" y1="160" x2="580" y2="160" stroke="hsl(var(--court-line))" strokeWidth="1.5" strokeDasharray="6 4" />
      <line x1="160" y1="20" x2="160" y2="300" stroke="hsl(var(--court-line))" strokeWidth="1.5" strokeDasharray="6 4" />
      <line x1="440" y1="20" x2="440" y2="300" stroke="hsl(var(--court-line))" strokeWidth="1.5" strokeDasharray="6 4" />

      {/* cameras */}
      <rect x="14" y="6" width="40" height="22" rx="4" fill="hsl(var(--primary))" />
      <text x="20" y="44" fontSize="10" fill="hsl(var(--primary))" fontWeight="700">CAM 1</text>
      <rect x="546" y="6" width="40" height="22" rx="4" fill="hsl(var(--primary))" />
      <text x="552" y="44" fontSize="10" fill="hsl(var(--primary))" fontWeight="700">CAM 2</text>

      {/* tracking lines */}
      <line x1="34" y1="28" x2="180" y2="100" stroke="hsl(var(--primary))" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
      <line x1="34" y1="28" x2="180" y2="220" stroke="hsl(var(--primary))" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
      <line x1="566" y1="28" x2="420" y2="100" stroke="hsl(var(--accent))" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
      <line x1="566" y1="28" x2="420" y2="220" stroke="hsl(var(--accent))" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />

      {/* players */}
      {[
        { x: 180, y: 100, color: "hsl(var(--primary))", label: "P1" },
        { x: 180, y: 220, color: "hsl(var(--primary))", label: "P2" },
        { x: 420, y: 100, color: "hsl(var(--accent))", label: "P3" },
        { x: 420, y: 220, color: "hsl(var(--accent))", label: "P4" },
      ].map((p) => (
        <g key={p.label}>
          <circle cx={p.x} cy={p.y} r="18" fill={p.color} />
          <text x={p.x} y={p.y + 4} textAnchor="middle" fontSize="11" fontWeight="700" fill="white">{p.label}</text>
        </g>
      ))}

      {/* ball */}
      <circle cx="300" cy="160" r="6" fill="hsl(var(--foreground))" />
    </svg>
    <p className="mt-3 text-xs text-center text-muted-foreground">Real-time AI tracking of all 4 players</p>
  </div>
);
