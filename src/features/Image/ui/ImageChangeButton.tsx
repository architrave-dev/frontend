import { SrOnly } from "@styles/srOnly";
import React from "react";
import { StyledOutlineButtonLayout } from "src/shared/ui/Button";
import { styled } from "styled-components";

export interface ImageChangeButtonProps
  extends React.HTMLAttributes<HTMLInputElement> {}

export default function ImageChangeButton({
  children,
  onChange,
  ...props
}: ImageChangeButtonProps) {
  return (
    <StyledImageChangeButton>
      <StyledGhostButton htmlFor="imageChangeInput">
        {children}
      </StyledGhostButton>
      <StyledImageInput
        id="imageChangeInput"
        type="file"
        onChange={onChange}
        {...props}
      />
    </StyledImageChangeButton>
  );
}

const StyledImageChangeButton = styled.div`
  place-self: center;
`;

const StyledGhostButton = styled.label`
  ${StyledOutlineButtonLayout}
  background-color: limegreen;
`;

const StyledImageInput = styled.input`
  ${SrOnly}
`;
