import styled from "styled-components";

interface InputInterface {
  variant?: "ghost";
  size?: "main" | "sub";
}

const StyledInput = styled.input<InputInterface>`
  all: unset;
  display: block;
  background-color: limegreen;
  padding: 0.5rem;
  font-size: ${(props) =>
    props.size === "main" ? props.theme.fontSize.xlg : props.theme.fontSize.lg};
  color: ${(props) => props.theme.colors.white};
`;

export { StyledInput };
