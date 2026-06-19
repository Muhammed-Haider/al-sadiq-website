export default function DiamondDivider() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 22,
        maxWidth: 760,
        margin: "18px auto",
        padding: "0 28px",
      }}
    >
      <span
        style={{ flex: 1, height: 1, background: "linear-gradient(90deg,transparent,#dcc679)" }}
      />
      <span
        style={{ width: 13, height: 13, background: "#c9a227", transform: "rotate(45deg)" }}
      />
      <span
        style={{
          width: 7,
          height: 7,
          border: "1px solid #c9a227",
          transform: "rotate(45deg)",
        }}
      />
      <span
        style={{ width: 13, height: 13, background: "#c9a227", transform: "rotate(45deg)" }}
      />
      <span
        style={{ flex: 1, height: 1, background: "linear-gradient(90deg,#dcc679,transparent)" }}
      />
    </div>
  );
}
