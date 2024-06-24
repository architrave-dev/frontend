import React, { HTMLAttributes } from "react";
import styled from "styled-components";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

function BaseButton({ children }: ButtonProps) {
  return <StyledBaseButton>{children}</StyledBaseButton>;
}

function WhiteButton({ children }: ButtonProps) {
  return <StyledWhiteButton>{children}</StyledWhiteButton>;
}

function OutlineButton({ children }: ButtonProps) {
  return <StyledOutlineButton>{children}</StyledOutlineButton>;
}

const StyledBaseButton = styled.button`
  font-size: ${(props) => props.theme.fontSize.md};
  color: ${(props) => props.theme.colors.white};
  padding-inline: 1.25rem;
  padding-block: 1.5rem;
  &:active {
    background-color: ${(props) => props.theme.colors.caption};
  }
`;

const StyledWhiteButton = styled(StyledBaseButton)`
  &:hover,
  &:focus,
  &:active {
    text-decoration: underline;
  }
`;

const StyledOutlineButton = styled(StyledBaseButton)`
  border: 1px solid ${(props) => props.theme.colors.white};
`;

export { BaseButton, WhiteButton, OutlineButton };
