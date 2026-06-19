export default function GeometricPattern({
  id,
  opacity = 0.1,
  color = "#c9a227",
  size = 56,
}: {
  id: string;
  opacity?: number;
  color?: string;
  size?: number;
}) {
  const half = size / 2;
  const pad = size * 0.07;
  const inner = size * 0.21;
  return (
    <svg
      width="100%"
      height="100%"
      style={{ position: "absolute", inset: 0, opacity, pointerEvents: "none" }}
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <pattern id={id} width={size} height={size} patternUnits="userSpaceOnUse">
          <path
            d={`M${half} ${pad} L${size - pad} ${half} L${half} ${size - pad} L${pad} ${half} Z`}
            fill="none"
            stroke={color}
            strokeWidth="1.1"
          />
          <path
            d={`M${half} ${inner} L${size - inner} ${half} L${half} ${size - inner} L${inner} ${half} Z`}
            fill="none"
            stroke={color}
            strokeWidth="1"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}
