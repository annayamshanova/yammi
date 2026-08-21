const patterns: Record<number, React.ReactNode> = {
  // Shelfy — e-commerce: a shelf grid with one highlighted pickup slot
  7: (
    <g stroke="currentColor" strokeWidth="1" fill="none">
      <rect x="10" y="16" width="80" height="44" />
      <line x1="30" y1="16" x2="30" y2="60" />
      <line x1="50" y1="16" x2="50" y2="60" />
      <line x1="70" y1="16" x2="70" y2="60" />
      <line x1="10" y1="38" x2="90" y2="38" />
      <rect x="12" y="18" width="16" height="18" fill="var(--color-accent)" stroke="none" />
    </g>
  ),
  // AutoCore — automotive: a car silhouette with a deal/price badge
  6: (
    <g stroke="currentColor" strokeWidth="1" fill="none">
      <path d="M14 54 L20 40 L34 30 L62 30 L78 40 L88 54" />
      <line x1="8" y1="54" x2="94" y2="54" />
      <circle cx="30" cy="54" r="7" />
      <circle cx="72" cy="54" r="7" />
      <circle cx="80" cy="20" r="7" fill="var(--color-accent)" stroke="none" />
    </g>
  ),
  // Buddy — mentoring loop: task -> work -> feedback -> verified
  5: (
    <g fill="none">
      <line
        x1="15"
        y1="38"
        x2="84"
        y2="38"
        stroke="currentColor"
        strokeWidth="1"
        strokeDasharray="3 3"
      />
      <circle cx="15" cy="38" r="7" stroke="currentColor" strokeWidth="1" />
      <circle cx="38" cy="38" r="7" stroke="currentColor" strokeWidth="1" />
      <circle cx="61" cy="38" r="7" stroke="currentColor" strokeWidth="1" />
      <circle cx="84" cy="38" r="8" fill="var(--color-accent)" />
      <path
        d="M80 38 l3 3 l6 -6"
        stroke="var(--color-paper)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  ),
  // Yastobo.You — mental health: two overlapping circles (togetherness) + a calm breathing wave
  4: (
    <g stroke="currentColor" strokeWidth="1" fill="none">
      <circle cx="38" cy="38" r="20" />
      <circle cx="58" cy="38" r="20" stroke="var(--color-accent)" />
      <path d="M8 62 q6 -8 12 0 t12 0 t12 0 t12 0 t12 0 t12 0" />
    </g>
  ),
};

export function ProjectVisual({
  pattern,
  className = "",
}: {
  pattern: 4 | 5 | 6 | 7;
  className?: string;
}) {
  return (
    <div
      className={`tech-grid relative overflow-hidden border border-line bg-paper-2 text-ink/70 ${className}`}
    >
      <svg
        viewBox="0 0 100 76"
        className="h-full w-full"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
      >
        {patterns[pattern]}
      </svg>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-accent/70 animate-scan" />
    </div>
  );
}
