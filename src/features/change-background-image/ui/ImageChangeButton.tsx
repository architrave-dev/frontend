import { SrOnly } from "@styles/srOnly";
import React from "react";
import { StyledOutlineButtonLayout } from "src/shared/ui/Button";
import { styled } from "styled-components";

export interface ImageChangeButtonProps
  extends React.HTMLAttributes<HTMLInputElement> {}

export default function ImageChangeButton({
  onChange,
  ...props
}: ImageChangeButtonProps) {
  return (
    <StyledImageChangeButton>
      <StyledGhostButton htmlFor="imageChangeInput">
        이미지 교체
      </StyledGhostButton>
      <StyledImageInput
        id="imageChangeInput"
        type="file"
        accept="image/*"
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
