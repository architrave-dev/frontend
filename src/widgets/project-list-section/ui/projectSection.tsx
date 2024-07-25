import React from "react";
// import { ProjectItem } from "@entities/project-list";
// import Carousel from "@features/project-carousel/ui/carousel";
import summer from "../../../assets/summer.jpg";
import { MarginBottom } from "@styles/Layouts";
import styled from "styled-components";

export default function ProjectSection() {
  return (
    <>
      <StyledDiv>{/* <Carousel /> */}</StyledDiv>
      {/* <StyledDiv>
        <ProjectItem thumbnailImage={summer} mainTitle="mainTitle" />
      </StyledDiv>
      <StyledDiv>
        <ProjectItem thumbnailImage={summer} mainTitle="mainTitle" />
      </StyledDiv>
      <StyledDiv>
        <ProjectItem thumbnailImage={summer} mainTitle="mainTitle" />
      </StyledDiv>
      <StyledDiv>
        <ProjectItem thumbnailImage={summer} mainTitle="mainTitle" />
      </StyledDiv> */}
    </>
  );
}

const StyledDiv = styled.div`
  ${MarginBottom}
`;
