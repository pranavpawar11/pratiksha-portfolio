import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Pratiksha Shelke | Digital Marketing Portfolio",
    short_name: "PS. Portfolio",
    start_url: "/",
    display: "standalone",
    background_color: "#f5f1e9",
    theme_color: "#e4774d",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
