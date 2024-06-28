import { media } from "@styles/mediaQuery";
import { css } from "styled-components";

interface ContainerProps {
  $wide: boolean;
}

const Container = css<ContainerProps>`
  margin-inline: auto;
  width: ${(props) =>
    props.$wide ? "calc(100% - 12rem)" : "calc(100% - 20rem)"};
  ${media.laptop} {
    width: ${(props) =>
      props.$wide ? "calc(100% - 8rem)" : "calc(100% - 12rem)"};
  }
`;

interface MarginProps {
  $tall: boolean;
}

const Margin = css<MarginProps>`
  margin-block-end: ${(props) => (props.$tall ? "16rem" : "6rem")};
  ${media.laptop} {
    margin-block-end: ${(props) => (props.$tall ? "12rem" : "6rem")};
  }
`;

export const LayoutCSS = {
  Container,
  Margin,
};
