import React from "react";
import { styled } from "styled-components";

export default function ContentsTabs() {
  return (
    <StyledOutline>
      <div>콘텐츠 삽입:</div>
      <StyledContentsButton>이미지</StyledContentsButton>
      <StyledContentsButton>텍스트</StyledContentsButton>
      <StyledContentsButton>구분선</StyledContentsButton>
    </StyledOutline>
  );
}

const StyledOutline = styled.div`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  gap: 0.5rem;
  margin-inline: auto;
  max-width: fit-content;
  padding: 0.5rem 1.25rem;
  background-color: grey;
  border-radius: 0.5rem;
  color: ${(props) => props.theme.colors.white};
`;

const StyledContentsButton = styled.button`
  border: none;
  padding: 0.25rem;
  border-radius: 0.5rem;
  background-color: inherit;
  &:active {
    background-color: white;
  }
`;
