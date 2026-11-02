import { ImageResponse } from "next/og";

export const alt = "TrulyHello — AI That Turns Customer Conversations Into Action";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 72, background: "linear-gradient(135deg,#0c1118,#161c25)", color: "#e9edf1", fontFamily: "Georgia, serif" }}>
        <div style={{ fontSize: 40, color: "#b98f62" }}>TrulyHello</div>
        <div style={{ fontSize: 84, lineHeight: 1.02, letterSpacing: -2, maxWidth: 950 }}>Never miss a customer. Turn every conversation into action.</div>
        <div style={{ fontSize: 26, color: "#9aa4af", fontFamily: "sans-serif" }}>AI-powered business operations for every kind of business</div>
      </div>
    ),
    size,
  );
}
