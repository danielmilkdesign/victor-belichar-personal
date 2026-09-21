export function VibeDetail({ side = "left" }: { side?: "left" | "right" }) {
  const isRight = side === "right";
  return (
    <div
      aria-hidden
      className="vibe-detail pointer-events-none absolute top-0 bottom-0 z-0 hidden md:block"
      style={{
        [isRight ? "right" : "left"]: 0,
        width: "min(28vw, 380px)",
        transform: isRight ? "scaleX(-1)" : undefined,
      }}
    >
      <svg
        className="vibe-detail__svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-740 -540 1640 1720"
        preserveAspectRatio="xMidYMid slice"
        width="100%"
        height="100%"
      >
        <g className="vibe-detail__group">
          <path
            className="vibe-detail__path vibe-detail__path--1"
            d="M873.25-428.29h-413.25c-10.33,0-18.71,8.38-18.71,18.71v204.58c0,10.33,8.38,18.71,18.71,18.71h79.01l-271.37,881.46L-5.61-186.28h70.77c10.33,0,18.71-8.38,18.71-18.71v-204.58c0-10.33-8.38-18.71-18.71-18.71h-411.21c-10.33,0-18.71,8.38-18.71,18.71v204.58c0,10.33,8.38,18.71,18.71,18.71h86.45L145.49,1122.12c.08.26.16.51.25.76l10.23,28.64c2.66,7.45,9.71,12.42,17.62,12.42h188.2c8.35,0,15.7-5.54,17.99-13.57l8.07-28.25L792.94-186.28h80.31c10.33,0,18.71-8.38,18.71-18.71v-204.58c0-10.33-8.38-18.71-18.71-18.71Z"
            fill="none"
            stroke="var(--brand-red)"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            className="vibe-detail__path vibe-detail__path--2"
            d="M565.17-532.19H151.92c-10.33,0-18.71,8.38-18.71,18.71v204.58c0,10.33,8.38,18.71,18.71,18.71h79.01L-40.45,591.28-313.69-290.18h70.77c10.33,0,18.71-8.38,18.71-18.71v-204.58c0-10.33-8.38-18.71-18.71-18.71h-411.21c-10.33,0-18.71,8.38-18.71,18.71v204.58c0,10.33,8.38,18.71,18.71,18.71h86.45L-162.59,1018.21c.08.26.16.51.25.76l10.23,28.64c2.66,7.45,9.71,12.42,17.62,12.42H53.71c8.35,0,15.7-5.54,17.99-13.57l8.07-28.25L484.86-290.18h80.31c10.33,0,18.71-8.38,18.71-18.71v-204.58c0-10.33-8.38-18.71-18.71-18.71Z"
            fill="none"
            stroke="var(--brand-red)"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
        </g>
      </svg>
    </div>
  );
}
