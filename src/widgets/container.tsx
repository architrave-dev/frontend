import { css } from "styled-components";

interface ContainerProps {
  $wide: boolean;
}

const Container = css<ContainerProps>`
  margin-inline: auto;
  width: ${(props) =>
    props.$wide ? "calc(100% - 12rem)" : "calc(100% - 20rem)"};
`;

interface MarginProps {
  $tall: boolean;
}

const Margin = css<MarginProps>`
  margin-block-end: ${(props) => (props.$tall ? "16rem" : "6rem")};
`;

export const LayoutCSS = {
  Container,
  Margin,
};
