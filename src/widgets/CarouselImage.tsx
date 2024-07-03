import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import sample from "../assets/sampleImage.png";
import summer from "../assets/summer.jpg";
import contry from "../assets/contryload.png";

import "swiper/css";
import "swiper/css/autoplay";
import styled from "styled-components";

export default function CarouselSection() {
  return (
    <section aria-label="project-carousel-view">
      <Swiper
        modules={[Autoplay]}
        centeredSlides
        slidesPerView={1}
        autoplay={{ delay: 2500 }}
      >
        <SwiperSlide>
          <Link to="/projects">
            <StyledTempImage src={summer} />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/projects">
            <StyledTempImage src={sample} />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/projects">
            <StyledTempImage src={contry} />
          </Link>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

const StyledTempImage = styled.img`
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
`;
