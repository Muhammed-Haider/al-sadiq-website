export default function LogoMark({ size = 40 }: { size?: number }) {
  const outer = size * 0.75;
  const inner = size * 0.425;
  return (
    <span
      style={{
        position: "relative",
        width: size,
        height: size,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      <span
        style={{
          position: "absolute",
          width: outer,
          height: outer,
          background: "#1a5c38",
          transform: "rotate(45deg)",
          borderRadius: 4,
        }}
      />
      <span
        style={{
          position: "absolute",
          width: inner,
          height: inner,
          border: "1.5px solid #c9a227",
          transform: "rotate(45deg)",
        }}
      />
    </span>
  );
}
