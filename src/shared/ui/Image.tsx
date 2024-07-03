import React from "react";

export interface ImageProps extends React.HTMLAttributes<HTMLImageElement> {}

// TODO: 최적화 나중에 시도
export default function Image(props: ImageProps) {
  return <img {...props} />;
}
