import { galleryItems } from "@/data/gallery";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";

export function CreativeGallery() {
  return (
    <section aria-labelledby="gallery-title" className="py-20 md:py-28">
      <Container>
        <SectionHeading eyebrow="Creative Gallery" id="gallery-title" title="My creative space."
          intro="Original visual marketing work: social posts, carousels, ad concepts and content plans." />
        <GalleryGrid items={galleryItems} />
      </Container>
    </section>
  );
}
