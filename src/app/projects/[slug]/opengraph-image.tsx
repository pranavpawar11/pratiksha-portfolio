import { ImageResponse } from "next/og";
import { getProject, projects } from "@/data/projects";

export const alt = "Pratiksha Shelke, digital marketing project case study";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const p = getProject((await params).slug);
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#F5F1E9", color: "#191919", padding: 72, fontFamily: "Georgia, serif" }}>
        <div style={{ display: "flex", fontSize: 44, fontWeight: 700 }}>PS<span style={{ color: "#E4774D" }}>.</span></div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 26, letterSpacing: 5, color: "#B04A24", textTransform: "uppercase", fontFamily: "sans-serif" }}>{p?.type ?? "Case Study"}</div>
          <div style={{ fontSize: 76, lineHeight: 1.08, marginTop: 18 }}>{p?.title ?? "Project"}</div>
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#5F5B54", fontFamily: "sans-serif" }}>Pratiksha Shelke · Digital Marketing Portfolio</div>
      </div>
    ),
    size,
  );
}
