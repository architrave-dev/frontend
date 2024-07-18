import ProjectDescription from "@entities/project/ui/ProjectDescription";
import ImageChangeButton from "@features/change-background-image/ui/ImageChangeButton";
import { MarginBottom } from "@styles/Layouts";
import { TypoCSS } from "@styles/typoGuide";
import styled from "styled-components";

export default function ProjectCreate() {
  return (
    <>
      <StyledProjectCreateSection>
        <ImageChangeButton />
        <StyledTitle>프로젝트를 대표하는 이미지를 넣어 주세요</StyledTitle>
      </StyledProjectCreateSection>
      <ProjectDescription
        location="Seoul"
        period="10day"
        organization="yesul"
        description="testdescription"
      />
    </>
  );
}

const StyledProjectCreateSection = styled.section`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  ${MarginBottom}
  width: 100%;
  height: 1140px;
  background-color: ${(props) => props.theme.colors.placeholder};
  row-gap: 4rem;
`;

const StyledTitle = styled.h1`
  ${TypoCSS.projectTitle}
  place-self: center;
`;
