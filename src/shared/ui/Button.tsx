import { css } from "styled-components";

const StyledBaseButtonLayout = css`
  font-size: ${(props) => props.theme.fontSize.md};
  color: ${(props) => props.theme.colors.white};
  padding-inline: 1.25rem;
  padding-block: 1.5rem;
  &:active {
    background-color: ${(props) => props.theme.colors.caption};
  }
`;

const StyledWhiteButtonLayout = css`
  ${StyledBaseButtonLayout}
  &:hover,
  &:focus,
  &:active {
    text-decoration: underline;
  }
`;

const StyledOutlineButtonLayout = css`
  ${StyledBaseButtonLayout}
  border: 1px solid ${(props) => props.theme.colors.white};
`;

export {
  StyledBaseButtonLayout,
  StyledWhiteButtonLayout,
  StyledOutlineButtonLayout,
};
