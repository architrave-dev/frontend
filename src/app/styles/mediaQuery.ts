const customMediaQuery = (maxWidth: number) =>
  `@media (max-width: ${maxWidth}px)`;

const media = {
  mobile: customMediaQuery(640),
  tablet: customMediaQuery(768),
  laptop: customMediaQuery(1024),
  fullHD: customMediaQuery(1280),
  wide: customMediaQuery(1536),
};

export { media };
