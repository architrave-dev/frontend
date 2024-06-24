import { css } from "styled-components";

const Container = css<{ $wide?: boolean }>`
  margin-inline: auto;
  width: ${(props) =>
    props.$wide ? "calc(100% - 12rem)" : "calc(100% - 20rem)"};
`;

export { Container };
