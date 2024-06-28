import styled from "styled-components";
import sampleImage from "../../assets/summer.jpg";
import { Container, MarginBottom } from "@styles/Layouts";

export default function HeroSection() {
  return (
    <StackedSection aria-label="callToAction">
      <StackedImage src={sampleImage} alt="sampleImage" fetchPriority="high" />
      <StackedHeader>
        <StackedMainTitle>HeroSection</StackedMainTitle>
        <StackedParagraph>
          Sub Text Sub Text Sub Text Sub Text Sub Text Sub Text
        </StackedParagraph>
      </StackedHeader>
    </StackedSection>
  );
}

const StackedSection = styled.section`
  ${Container}
  ${MarginBottom}
  display: grid;
  height: 100vh;
  height: 100dvh;
  height: 100svh;
  & > * {
    grid-column: 1 / -1;
    grid-row: 1 / -1;
  }
`;

const StackedHeader = styled.header`
  margin-inline-start: 12rem;
  margin-block-start: 75vh;
  color: ${(props) => props.theme.colors.white};
  justify-self: start;
  align-self: start;
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
  overflow-x: hidden;
`;
