import { styled } from "styled-components";

export default function Divider() {
  return <StyledDivider />;
}

const StyledDivider = styled.div`
  padding-block: 1rem;
  border-bottom: 1px solid black;
`;
