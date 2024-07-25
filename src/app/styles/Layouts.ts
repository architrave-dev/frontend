import { css } from "styled-components";

const Container = css`
  margin-inline: auto;
  max-width: 1520px;
`;

const PaddingInline = css`
  padding-inline: clamp(2rem, 4vw, 12rem);
`;

const TextArea = css`
  padding-inline: 40rem;
`;

const MarginBottom = css`
  margin-block-end: 6rem;
`;

export { Container, TextArea, MarginBottom, PaddingInline };
