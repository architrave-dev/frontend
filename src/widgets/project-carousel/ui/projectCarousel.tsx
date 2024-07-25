import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { BackgroundImage } from "@shared/ui";
// import { ProjectEntity } from "@entities/project/model";
import { StackSection } from "@shared/ui/stackSection";
import { LayoutCss } from "@styles/index";
import { styled } from "styled-components";
import { TypoCSS } from "@styles/typoGuide";

// TODO: 실제 링크 & 프로젝트 프롭스로 교체할 것
// projects: ProjectEntity.TProject[]
function Carousel() {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      autoplay={{ delay: 2500 }}
      modules={[Autoplay]}
    >
      {/* {projects.map((project) => {
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
      })} */}
      <SwiperSlide>
        <Link to="projects">
          <StackSection>
            <BackgroundImage />
            <StackSection.Bottom>
              <StyledInlineContainer>
                <StyledMainTitle
                  aria-labelledby="hero-title"
                  aria-live="polite"
                >
                  HeroSection
                </StyledMainTitle>
                <StyledParagraph>
                  SubText SubText SubText SubTextSubText SubTextSubText SubText
                </StyledParagraph>
              </StyledInlineContainer>
            </StackSection.Bottom>
          </StackSection>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link to="projects">
          <StackSection>
            <BackgroundImage />
            <StackSection.Bottom>
              <StyledInlineContainer>
                <StyledMainTitle
                  aria-labelledby="hero-title"
                  aria-live="polite"
                >
                  HeroSection
                </StyledMainTitle>
                <StyledParagraph>
                  SubText SubText SubText SubTextSubText SubTextSubText SubText
                </StyledParagraph>
              </StyledInlineContainer>
            </StackSection.Bottom>
          </StackSection>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link to="projects">
          <StackSection>
            <BackgroundImage />
            <StackSection.Bottom>
              <StyledInlineContainer>
                <StyledMainTitle
                  aria-labelledby="hero-title"
                  aria-live="polite"
                >
                  HeroSection
                </StyledMainTitle>
                <StyledParagraph>
                  SubText SubText SubText SubTextSubText SubTextSubText SubText
                </StyledParagraph>
              </StyledInlineContainer>
            </StackSection.Bottom>
          </StackSection>
        </Link>
      </SwiperSlide>
    </Swiper>
  );
}

export { Carousel };

const StyledInlineContainer = styled.div`
  ${LayoutCss.PaddingInline}
`;

const StyledMainTitle = styled.h1`
  ${TypoCSS.mainTitle}
  color: ${(props) => props.theme.colors.white};
`;

const StyledParagraph = styled.p`
  ${TypoCSS.button}
  color: ${(props) => props.theme.colors.white};
`;
