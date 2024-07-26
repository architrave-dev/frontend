import { Container } from "@styles/Layouts";
import { styled } from "styled-components";
import { WorkEntity } from "../model";

export default function WorkImage({ description }: WorkEntity.TWork) {
  return (
    <StyledContainer>
      <StyledImageBlock>
        <StyledImage />
      </StyledImageBlock>
      <StyledParagraph placeholder={description} />
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  ${Container}
`;

const StyledImageBlock = styled.div`
  margin-block-end: 4rem;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const StyledParagraph = styled.textarea`
  border: 2px dotted #6ba6ff;
`;
