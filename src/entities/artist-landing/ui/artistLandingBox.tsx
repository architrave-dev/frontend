import { StyledInput } from "@shared/components/Input";
import { BackgroundImage } from "@shared/ui";
import { StackSection } from "@shared/ui/stackSection";
import { LayoutCss } from "@styles/index";
import { TypoCSS } from "@styles/typoGuide";
import { useEditStore } from "src/app/store";
import { styled } from "styled-components";

export interface ArtistLandingProps {
  ImageChangeComponent?: React.ReactNode;
}

function ArtistLandingBox({ ImageChangeComponent }: ArtistLandingProps) {
  const isEditMode = useEditStore((state) => state.isEditMode);
  return (
    <StackSection aria-labelledby="hero-title">
      <BackgroundImage />
      {isEditMode ? ImageChangeComponent : null}
      <StackSection.Bottom>
        <StyledInlineContainer>
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
              <StyledMainTitle aria-labelledby="hero-title" aria-live="polite">
                HeroSection
              </StyledMainTitle>
              <StyledParagraph>
                SubText SubText SubText SubTextSubText SubTextSubText SubText
              </StyledParagraph>
            </>
          )}
        </StyledInlineContainer>
      </StackSection.Bottom>
    </StackSection>
  );
}

export { ArtistLandingBox };

const StyledInlineContainer = styled.div`
  ${LayoutCss.PaddingInline}
`;

const StyledMarginInput = styled(StyledInput)`
  margin-block-end: 1rem;
`;

const StyledMainTitle = styled.h1`
  ${TypoCSS.mainTitle}
  color: ${(props) => props.theme.colors.white};
`;

const StyledParagraph = styled.p`
  ${TypoCSS.button}
  color: ${(props) => props.theme.colors.white};
`;
