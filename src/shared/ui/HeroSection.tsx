import styled from "styled-components";
import sampleImage from "../../assets/sampleImage.png";
import { media } from "@styles/mediaQuery";

export default function HeroSection() {
  return (
    <StackedSection aria-label="callToAction">
      <StackedHeader>
        <StackedMainTitle>HeroSection</StackedMainTitle>
        <StackedParagraph>
          Sub Text Sub Text Sub Text Sub Text Sub Text Sub Text
        </StackedParagraph>
      </StackedHeader>
      <StackedImage src={sampleImage} alt="sampleImage" />
    </StackedSection>
  );
}

const StackedSection = styled.section`
  display: grid;
  position: relative;
  height: 100vh;
  height: 100dvh;
  height: 100svh;
  & > * {
    grid-column: 1 / -1;
    grid-row: 1 / -1;
  }
`;

const StackedHeader = styled.header`
  color: ${(props) => props.theme.colors.white};
  justify-self: start;
  align-self: end;
  padding-inline-start: 2rem;
  padding-block-end: 6rem;
  ${media.tablet} {
    align-self: center;
  }
`;

const StackedMainTitle = styled.h1`
  font-size: ${(props) => props.theme.fontSize.lg};
`;

const StackedParagraph = styled.p`
  font-size: ${(props) => props.theme.fontSize.md};
`;

const StackedImage = styled.img`
  z-index: -1;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
