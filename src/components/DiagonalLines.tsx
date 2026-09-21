export function DiagonalLines({ side = "left" }: { side?: "left" | "right" }) {
  const transform = side === "right" ? "scaleX(-1)" : undefined;
  return (
    <svg
      aria-hidden
      className="absolute top-0 bottom-0 pointer-events-none opacity-70"
      style={{ [side]: 0, transform } as React.CSSProperties}
      width="160"
      height="100%"
      viewBox="0 0 160 1000"
      preserveAspectRatio="none"
    >
      <line x1="20" y1="-50" x2="-180" y2="1100" stroke="var(--brand-red)" strokeWidth="2" />
      <line x1="80" y1="-50" x2="-120" y2="1100" stroke="var(--brand-red)" strokeWidth="1.5" opacity="0.5" />
    </svg>
  );
}
