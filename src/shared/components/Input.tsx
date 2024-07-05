import styled from "styled-components";

interface InputInterface {
  $variant?: "ghost";
  $size?: "main" | "sub";
}

const StyledInput = styled.input<InputInterface>`
  all: unset;
  display: block;
  background-color: limegreen;
  padding: 0.5rem;
  font-size: ${(props) =>
    props.$size === "main" ? props.theme.fontSize.lg : props.theme.fontSize.md};
  color: ${(props) => props.theme.colors.white};
`;

export { StyledInput };
