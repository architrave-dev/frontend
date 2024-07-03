import { SrOnly } from "@styles/srOnly";
import React from "react";
import { StyledOutlineButtonLayout } from "src/shared/ui/Button";
import { styled } from "styled-components";

export interface ImageChangeButtonProps
  extends React.HTMLAttributes<HTMLInputElement> {}

export default function ImageChangeButton({
  children,
  ...props
}: ImageChangeButtonProps) {
  return (
    <div>
      <StyledGhostButton htmlFor="fileInput">{children}</StyledGhostButton>
      <StyledImageInput id="fileInput" type="file" {...props} />
    </div>
  );
}

const StyledGhostButton = styled.label`
  ${StyledOutlineButtonLayout}
  background-color: limegreen;
`;

const StyledImageInput = styled.input`
  ${SrOnly}
`;
