import React from "react";

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

export default function Image(props: ImageProps) {
  return <img {...props}></img>;
}
