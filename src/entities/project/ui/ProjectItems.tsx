import summer from "../../../assets/summer.jpg";
import { Container, MarginBottom, PaddingInline } from "@styles/Layouts";
import { styled } from "styled-components";
import { TypoCSS } from "@styles/typoGuide";
import { media } from "@styles/mediaQuery";

// projects?: ProjectEntity.TProject[]
function ProjectItems() {
  return (
    <StyledSectionContainer>
      {/* TODO: Link 추가하기 */}
      {/* {projects.map((project) => {
        return (
          <StyledProjectItemContainer key={project.projectId}>
            <h2>{project.title}</h2>
            <div>
              <StyledProjectImage src={project.thumbnailUrl} />
            </div>
          </StyledProjectItemContainer>
        );
      })} */}
      <StyledProjectItemContainer>
        <StyledTitle>Project Title</StyledTitle>
        <div>
          <StyledProjectImage src={summer} />
        </div>
      </StyledProjectItemContainer>
      <StyledProjectItemContainer>
        <StyledTitle>Project Title</StyledTitle>
        <div>
          <StyledProjectImage src={summer} />
        </div>
      </StyledProjectItemContainer>
      <StyledProjectItemContainer>
        <StyledTitle>Project Title</StyledTitle>
        <div>
          <StyledProjectImage src={summer} />
        </div>
      </StyledProjectItemContainer>
    </StyledSectionContainer>
  );
}

export { ProjectItems };

const StyledSectionContainer = styled.section`
  ${Container}
`;

const StyledProjectItemContainer = styled.div`
  /* ${PaddingInline} */
  ${MarginBottom}
  padding-inline-start: clamp(2rem, 4vw, 12rem);
  display: grid;
  grid-auto-flow: column;
  column-gap: clamp(2rem, 4vw + 1rem, 10rem);
`;

const StyledTitle = styled.h2`
  ${TypoCSS.projectTitle}
  align-self: end;
  text-overflow: ellipsis;
  ${media.tablet} {
    ${TypoCSS.button}
  }
`;

const StyledProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
`;
