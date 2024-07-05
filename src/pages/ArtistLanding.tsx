import HeroSection from "src/widgets/HeroSection";
import Carousel from "@features/project-carousel/ui/carousel";

export default function ArtistLanding() {
  const projects = [{ id: 1, projectTitle: "test", src: "string" }];
  return (
    <>
      <HeroSection />
      <Carousel project={projects} />
    </>
  );
}
