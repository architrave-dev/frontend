import { ArtistLandingBox } from "@entities/artist-landing/ui";
import { MarginBottom } from "@styles/Layouts";
import { Carousel } from "@widgets/project-carousel/ui";
import { styled } from "styled-components";

export default function ArtistLanding() {
  return (
    <>
      <StyledMargin>
        <ArtistLandingBox />
      </StyledMargin>
      <Carousel />
    </>
  );
}

const StyledMargin = styled.div`
  ${MarginBottom}
`;
