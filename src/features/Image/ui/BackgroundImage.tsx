import React from "react";
import { styled } from "styled-components";

export interface BackgroundImageProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {}

export default function BackgroundImage({
  src,
  alt,
  ...props
}: BackgroundImageProps) {
  return <StyledBackgroundImage src={src} alt={alt} {...props} />;
}

const StyledBackgroundImage = styled.img`
  z-index: -1;
  width: 100%;
  height: 100%;
  aspect-ratio: 16/ 9;
  object-fit: cover;
  overflow-x: hidden;
`;
