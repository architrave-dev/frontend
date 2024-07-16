import { MarginBottom } from "@styles/Layouts";
import { TypoCSS } from "@styles/typoGuide";
import styled from "styled-components";

export interface ProjectItemProps {
  thumbnailImage: string;
  mainTitle: string;
}

function ProjectItem({ thumbnailImage, mainTitle }: ProjectItemProps) {
  return (
    <StyledProjectItem>
      <StyledMainTitle>{mainTitle}</StyledMainTitle>
      <StyledImage src={thumbnailImage} />
    </StyledProjectItem>
  );
}

export { ProjectItem };

const StyledProjectItem = styled.div`
  ${MarginBottom}
  display: grid;
  grid-auto-flow: column;
  align-items: end;
  column-gap: 6rem;
`;

const StyledMainTitle = styled.h2`
  ${TypoCSS.mainTitle}
  line-height: 7.2rem;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  overflow: hidden;
`;
