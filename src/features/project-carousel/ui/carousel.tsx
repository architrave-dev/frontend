import { Swiper, SwiperSlide } from "swiper/react";
import { ImageStack } from "@shared/ui/ImageStack";

interface ProjectInfo {
  id: number;
  projectTitle: string;
  src: string;
}

export interface CarouselProps {
  project: ProjectInfo[];
}

export default function Carousel({ project }: CarouselProps) {
  return (
    <Swiper>
      {project.map(({ id, projectTitle }) => {
        return (
          <SwiperSlide key={id}>
            <ImageStack>
              {/* <BackgroundImage src={src} /> */}
              <ImageStack.Header>
                <ImageStack.MainTitle>{projectTitle}</ImageStack.MainTitle>
              </ImageStack.Header>
            </ImageStack>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
