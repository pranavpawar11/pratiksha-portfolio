export const galleryCategories = [
  "All",
  "Social Media Posts",
  "Carousels",
  "Ad Concepts",
  "Recipe Content",
  "Content Planning",
] as const;
export type GalleryCategory = (typeof galleryCategories)[number];

export type GalleryItem = {
  id: string;
  title: string;
  category: Exclude<GalleryCategory, "All">;
  project?: { label: string; href: string };
  description: string;
  src: string; // path under /public
  alt: string;
  width: number;
  height: number;
};

/**
 * Add ONLY original designs by Pratiksha. Example:
 * {
 *   id: "raje-masale-post-1",
 *   title: "Masala Monday",
 *   category: "Social Media Posts",
 *   project: { label: "Raje Masale", href: "/projects/raje-masale" },
 *   description: "Why this design looks the way it does.",
 *   src: "/images/gallery/raje-masale-post-1.webp",
 *   alt: "Instagram post showing ...",
 *   width: 1080, height: 1350,
 * }
 */
export const galleryItems: GalleryItem[] = [];
