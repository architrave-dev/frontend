import React from "react";
import styled from "styled-components";
import summer from "../../assets/summer.jpg";

export interface BackGroundImageProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {}

function BackgroundImage({ src }: BackGroundImageProps) {
  return <StyledBackgroundImage src={src || summer} alt="sampleImage" />;
}

export { BackgroundImage };

const StyledBackgroundImage = styled.img`
  z-index: -10;
  /* width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden; */
`;
