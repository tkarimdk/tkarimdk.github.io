export const dynamic = "force-static";
import { ImageResponse } from "next/og";
import { site } from "./site";
export const alt =
  "Tanzimul Karim - Complexity is inevitable. Clarity is engineered.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 65,
        background: "#0b0f14",
        color: "#f1f4f7",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span style={{ fontSize: 48, letterSpacing: -4, color: "#8dddd1" }}>
          tk.
        </span>
        <span style={{ fontSize: 15, letterSpacing: 3 }}>
          COMPUTER SCIENCE / INTELLIGENT SYSTEMS
        </span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: 74,
          letterSpacing: -3,
          lineHeight: 1.15,
        }}
      >
        <span>Complexity is inevitable.</span>
        <span style={{ color: "#8dddd1" }}>Clarity is engineered.</span>
      </div>
      <div
        style={{
          display: "flex",
          borderTop: "1px solid #283542",
          paddingTop: 25,
          fontSize: 20,
          justifyContent: "space-between",
        }}
      >
        <span>{site.name}</span>
        <span style={{ color: "#9ba9b8" }}>
          Selected work / Research / Systems
        </span>
      </div>
    </div>,
    size,
  );
}
