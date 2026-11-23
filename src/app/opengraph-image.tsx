import { ImageResponse } from "next/og";

export const alt = "Pratiksha Shelke, Digital Marketing Portfolio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#F5F1E9", color: "#191919", padding: 72, fontFamily: "Georgia, serif" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 64, fontWeight: 700 }}>PS<span style={{ color: "#E4774D" }}>.</span></div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 28, letterSpacing: 6, color: "#B04A24", textTransform: "uppercase", fontFamily: "sans-serif" }}>Digital Marketing Portfolio</div>
          <div style={{ fontSize: 92, lineHeight: 1.05, marginTop: 18 }}>Pratiksha Shelke</div>
          <div style={{ fontSize: 34, marginTop: 20, color: "#5F5B54", fontFamily: "sans-serif" }}>SEO · Social Media · Content Strategy · AI Marketing</div>
        </div>
        <div style={{ display: "flex", height: 14, width: "100%" }}><div style={{ flex: 3, background: "#E4774D" }} /><div style={{ flex: 1, background: "#A8B5A0" }} /></div>
      </div>
    ),
    size,
  );
}
