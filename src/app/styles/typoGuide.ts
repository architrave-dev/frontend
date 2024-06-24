import { css } from "styled-components";

const mainTitle = css`
  font-size: ${(props) => props.theme.fontSize.xlg};
  font-weight: ${(props) => props.theme.fontWeight.semiBold};
`;

const projectTitle = css`
  font-size: ${(props) => props.theme.fontSize.lg};
  font-weight: ${(props) => props.theme.fontWeight.bold};
`;
const button = css`
  font-size: ${(props) => props.theme.fontSize.md};
  font-weight: ${(props) => props.theme.fontWeight.medium};
`;
const gnbTap = css`
  font-size: ${(props) => props.theme.fontSize.md};
  font-weight: ${(props) => props.theme.fontWeight.medium};
`;
const list = css`
  font-size: ${(props) => props.theme.fontSize.sm};
  font-weight: ${(props) => props.theme.fontWeight.medium};
`;
const caption = css`
  font-size: ${(props) => props.theme.fontSize.sm};
  font-weight: ${(props) => props.theme.fontWeight.normal};
`;

const body = css`
  font-size: ${(props) => props.theme.fontSize.sm};
  font-weight: ${(props) => props.theme.fontWeight.normal};
`;

export const TypoCSS = {
  mainTitle,
  projectTitle,
  button,
  gnbTap,
  list,
  caption,
  body,
};
