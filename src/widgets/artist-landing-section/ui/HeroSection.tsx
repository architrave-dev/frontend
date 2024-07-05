import { BackgroundImage, ImageStack } from "@shared/ui";
import { MarginBottom } from "@styles/Layouts";
import { styled } from "styled-components";

function HeroSection() {
  return (
    <StyledMarginBottom>
      <ImageStack>
        <BackgroundImage />
        <ImageStack.Header>
          <ImageStack.MainTitle>HeroSection</ImageStack.MainTitle>
          <ImageStack.Paragraph>
            SubText SubText SubText SubTextSubText SubTextSubText SubText
          </ImageStack.Paragraph>
        </ImageStack.Header>
      </ImageStack>
    </StyledMarginBottom>
  );
}

export { HeroSection };

const StyledMarginBottom = styled.div`
  ${MarginBottom}
`;
