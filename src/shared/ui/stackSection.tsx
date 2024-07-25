import React from "react";
import { styled } from "styled-components";

export interface SectionProps {
  children?: React.ReactNode;
}

function Section({ children }: SectionProps) {
  return <StyledStackSection>{children}</StyledStackSection>;
}

function Center({ children }: SectionProps) {
  return <StyledCenterContainer>{children}</StyledCenterContainer>;
}

function Bottom({ children }: SectionProps) {
  return <StyledEndContainer>{children}</StyledEndContainer>;
}

export const StackSection = Object.assign(Section, {
  Center,
  Bottom,
});

const StyledStackSection = styled.section`
  display: grid;
  height: 100vh;
  height: 100dvh;
  height: 100svh;
  isolation: isolate;
  & > * {
    grid-column: 1 / -1;
    grid-row: 1 / -1;
  }
`;

const StyledCenterContainer = styled.div`
  place-self: center;
`;

const StyledEndContainer = styled.div`
  padding-block: clamp(5rem, 5vh + 2rem, 10vh);
  align-content: end;
`;
