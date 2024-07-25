import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { BackgroundImage, ImageStack } from "@shared/ui";
import { ProjectEntity } from "@entities/project/model";

// TODO: 실제 링크 & 프로젝트 프롭스로 교체할 것
export default function Carousel(projects: ProjectEntity.TProject[]) {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      autoplay={{ delay: 2500 }}
      modules={[Autoplay]}
    >
      {projects.map((project) => {
        return (
          <SwiperSlide>
            <Link to={`projects/${project.projectId}`}>
              <ImageStack>
                <BackgroundImage src={project.thumbnailUrl} />
                <ImageStack.Header>
                  <ImageStack.MainTitle>{project.title}</ImageStack.MainTitle>
                </ImageStack.Header>
              </ImageStack>
            </Link>
          </SwiperSlide>
        );
      })}
      <SwiperSlide>
        <Link to="projects">
          <ImageStack>
            <BackgroundImage />
            <ImageStack.Header>
              <ImageStack.MainTitle>Project 1</ImageStack.MainTitle>
            </ImageStack.Header>
          </ImageStack>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link to="projects">
          <ImageStack>
            <BackgroundImage />
            <ImageStack.Header>
              <ImageStack.MainTitle>Project 2</ImageStack.MainTitle>
            </ImageStack.Header>
          </ImageStack>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <ImageStack>
          <BackgroundImage />
          <ImageStack.Header>
            <ImageStack.MainTitle>Project 3</ImageStack.MainTitle>
          </ImageStack.Header>
        </ImageStack>
      </SwiperSlide>
    </Swiper>
  );
}
