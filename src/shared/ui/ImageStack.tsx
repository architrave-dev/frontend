import { Container } from "@styles/Layouts";
import React from "react";
import styled from "styled-components";

export interface ImageSectionProps {
  children?: React.ReactNode;
}

function ImageSection({ children }: ImageSectionProps) {
  return <StackedSection>{children}</StackedSection>;
}

export interface ImageHeaderProps {
  props: {
    mainTitle: string;
    paragraph: string;
  };
}

function ImageHeader({ props }: ImageHeaderProps) {
  return (
    <StyledImageHeader>
      <StyledMainTitle>{props.mainTitle}</StyledMainTitle>
      <StyledParagraph>{props.paragraph}</StyledParagraph>
    </StyledImageHeader>
  );
}

export const ImageStackSection = Object.assign(ImageSection, {
  ImageHeader,
});

const StackedSection = styled.section`
  ${Container}
  display: grid;
  height: 100vh;
  height: 100dvh;
  height: 100svh;
  & > * {
    grid-column: 1 / -1;
    grid-row: 1 / -1;
  }
`;

const StyledImageHeader = styled.header`
  margin-inline-start: 12rem;
  margin-block-start: 75vh;
  color: ${(props) => props.theme.colors.white};
  justify-self: start;
  align-self: start;
`;

const StyledMainTitle = styled.h1`
  font-size: ${(props) => props.theme.fontSize.lg};
`;

const StyledParagraph = styled.p`
  font-size: ${(props) => props.theme.fontSize.md};
`;
