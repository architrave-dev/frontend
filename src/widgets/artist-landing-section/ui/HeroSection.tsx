import ImageChangeButton from "@features/change-background-image/ui/ImageChangeButton";
import { StyledInput } from "@shared/components/Input";
import { BackgroundImage, ImageStack } from "@shared/ui";
import { MarginBottom } from "@styles/Layouts";
import { useEditStore } from "src/app/store";
import { styled } from "styled-components";

function HeroSection() {
  const isEditMode = useEditStore((state) => state.isEditMode);
  return (
    <StyledMarginBottom>
      <ImageStack>
        <BackgroundImage />
        {isEditMode ? <ImageChangeButton /> : null}
        <ImageStack.Header>
          {isEditMode ? (
            <>
              <StyledMarginInput
                $size="main"
                placeholder="텍스트를 입력해주세요"
              />
              <StyledInput placeholder="텍스트를 입력해주세요" />
            </>
          ) : (
            <>
              <ImageStack.MainTitle>HeroSection</ImageStack.MainTitle>
              <ImageStack.Paragraph>
                SubText SubText SubText SubTextSubText SubTextSubText SubText
              </ImageStack.Paragraph>
            </>
          )}
        </ImageStack.Header>
        <StyledButton>submit</StyledButton>
      </ImageStack>
    </StyledMarginBottom>
  );
}

export { HeroSection };

const StyledMarginBottom = styled.div`
  ${MarginBottom}
`;

const StyledMarginInput = styled(StyledInput)`
  margin-block-end: 1rem;
`;

const StyledButton = styled.button`
  position: absolute;
  margin-block-start: 75vh;
  right: 0;
  bottom: 0;
  width: 100px;
  height: 50px;
`;
