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
  return <StyledMainTitle aria-live="polite">{children}</StyledMainTitle>;
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
  position: relative;
  width: 100%;
  height: 100vh;
  height: 100dvh;
  height: 100svh;
`;

const StyledImageHeader = styled.header`
  margin-inline-start: 12rem;
  margin-block-end: 25vh;
  margin-block-end: 25dvh;
  margin-block-end: 25svh;
  justify-self: start;
  align-self: end;
`;

const StyledMainTitle = styled.h1`
  font-size: ${(props) => props.theme.fontSize.lg};
`;

const StyledParagraph = styled.p`
  font-size: ${(props) => props.theme.fontSize.md};
`;
