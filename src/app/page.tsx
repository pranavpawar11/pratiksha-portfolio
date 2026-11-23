import { buildMetadata } from "@/lib/seo";
import { Hero } from "@/components/sections/Hero";
import { IdentityStrip } from "@/components/sections/IdentityStrip";
import { About } from "@/components/sections/About";
import { MarketingApproach } from "@/components/sections/MarketingApproach";
import { Expertise } from "@/components/sections/Expertise";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { MarketingLab } from "@/components/sections/MarketingLab";
import { CreativeGallery } from "@/components/sections/CreativeGallery";
import { LearningJourney } from "@/components/sections/LearningJourney";
import { Contact } from "@/components/sections/Contact";

export const metadata = buildMetadata({
  title: "Pratiksha Shelke | Digital Marketing Portfolio | SEO & Social Media",
  description:
    "Explore Pratiksha Shelke's digital marketing portfolio featuring SEO research, social media strategy, content marketing projects and AI marketing knowledge. Based in Pune, India.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <Hero />
      <IdentityStrip />
      <About />
      <MarketingApproach />
      <Expertise />
      <FeaturedProjects />
      <MarketingLab />
      <CreativeGallery />
      <LearningJourney />
      <Contact />
    </>
  );
}
