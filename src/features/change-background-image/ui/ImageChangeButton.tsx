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
    <>
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
    </>
  );
}

const StyledGhostButton = styled.label`
  display: inline-block;
  margin-inline: auto;
  text-align: center;
  ${StyledOutlineButtonLayout}
`;

const StyledImageInput = styled.input`
  ${SrOnly}
`;
