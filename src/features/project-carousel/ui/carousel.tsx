import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { BackgroundImage, ImageStack } from "@shared/ui";

// TODO: 실제 링크 & 프로젝트 프롭스로 교체할 것
export default function Carousel() {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      autoplay={{ delay: 2500 }}
      modules={[Autoplay]}
    >
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
