import { MarginBottom } from "@styles/Layouts";
import { styled } from "styled-components";
import summer from "../../../assets/summer.jpg";

export interface ImageWorkProps {
  src: string;
  text: string;
}

function ImageWork({ src, text }: ImageWorkProps) {
  return (
    <StyledSection>
      <StyledImage src={src || summer} alt="art image" />
      <StyledText>{text}</StyledText>
    </StyledSection>
  );
}

function TextWork() {
  // TODO: textwork
  return <div></div>;
}

export const Work = Object.assign(
  {},
  {
    Image: ImageWork,
    Text: TextWork,
  }
);

const StyledSection = styled.section`
  ${MarginBottom}
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const StyledText = styled.p`
  font-size: ${(props) => props.theme.fontSize.sm};
  font-weight: ${(props) => props.theme.fontWeight.medium};
`;
