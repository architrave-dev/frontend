import { Container } from "@styles/Layouts";
import React from "react";
import styled from "styled-components";

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

export default function ImageStack({ children, ...props }: ImageProps) {
  return (
    <StackedSection aria-label="sr-description">
      <img {...props} />
      {children}
    </StackedSection>
  );
}

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
