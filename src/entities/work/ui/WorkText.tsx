import styled from "styled-components";
import { WorkEntity } from "../model";

export default function WorkText({ description }: WorkEntity.TWork) {
  return <StyledTextArea placeholder={description} />;
}

const StyledTextArea = styled.textarea`
  border: 2px dotted #6ba6ff;
`;
