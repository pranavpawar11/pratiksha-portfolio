export const siteConfig = {
  name: "Pratiksha Shelke",
  shortName: "PS.",
  tagline: "Digital Marketing Portfolio",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://your-domain.com").replace(/\/$/, ""),
  locale: "en_IN",
  email: "pratikshashelke93@gmail.com",
  phone: "9960197363",
  showPhone: process.env.NEXT_PUBLIC_SHOW_PHONE !== "false",
  linkedin: "https://www.linkedin.com/in/pratiksha-shelke-5a3092271/",
  location: "Pune, Maharashtra, India",
  resumePath: "/documents/pratiksha-resume.pdf",
  /**
   * Set `portrait` to the optimized portrait path (e.g. "/images/pratiksha-portrait.png")
   * once the file is placed in /public/images. While null, a labelled slot is shown.
   */
  assets: {
    portrait: "/images/gallery/heroImage.png" as string | null,
    portraitWidth: 1000,
    portraitHeight: 1250,
  },
} as const;

export const navLinks = [
  { id: "about", label: "About" },
  { id: "expertise", label: "Expertise" },
  { id: "projects", label: "Projects" },
  { id: "marketing-lab", label: "Marketing Lab" },
  { id: "learning", label: "Learning" },
] as const;

export const sectionIds = [...navLinks.map((l) => l.id), "contact"] as const;
