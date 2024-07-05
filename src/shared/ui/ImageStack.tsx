import { Container } from "@styles/Layouts";
import React from "react";
import styled from "styled-components";

export interface ImageSectionProps {
  children?: React.ReactNode;
}

function ImageSection({ children }: ImageSectionProps) {
  return <StyledStackSection>{children}</StyledStackSection>;
}

function Header({ children }: ImageSectionProps) {
  return <StyledImageHeader>{children}</StyledImageHeader>;
}

function MainTitle({ children }: ImageSectionProps) {
  return <StyledMainTitle>{children}</StyledMainTitle>;
}

function Paragraph({ children }: ImageSectionProps) {
  return <StyledParagraph>{children}</StyledParagraph>;
}

export const ImageStack = Object.assign(ImageSection, {
  Header,
  MainTitle,
  Paragraph,
});

const StyledStackSection = styled.section`
  ${Container}
  display: grid;
  width: 100%;
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
  /* color: ${(props) => props.theme.colors.white}; */
  justify-self: start;
  align-self: start;
`;

const StyledMainTitle = styled.h1`
  font-size: ${(props) => props.theme.fontSize.lg};
`;

const StyledParagraph = styled.p`
  font-size: ${(props) => props.theme.fontSize.md};
`;
