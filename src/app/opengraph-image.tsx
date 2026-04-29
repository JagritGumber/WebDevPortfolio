import { ImageResponse } from "next/og";

export const dynamic = "force-dynamic";
export const alt =
  "Jagrit Gumber - Full-stack + native Rust engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          width: "100%",
          background: "#1c1815",
          color: "#ece2d3",
          padding: "80px",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            flex: 1,
          }}
        >
          <div style={{ fontSize: 120, lineHeight: 1, fontFamily: "serif" }}>
            Jagrit Gumber
          </div>
          <div
            style={{
              fontSize: 48,
              marginTop: 24,
              color: "#d4a374",
              fontFamily: "sans-serif",
            }}
          >
            Full-stack + native Rust
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 28,
            color: "#a08c7a",
            fontFamily: "sans-serif",
          }}
        >
          <span>Ships SaaS by day, OSS and apps by night.</span>
          <span>jagritgumber.com</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
