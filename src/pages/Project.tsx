import { Carousel } from "@widgets/project-carousel/ui";
import { ProjectItems } from "@entities/project/ui";
import styled from "styled-components";
import { MarginBottom } from "@styles/Layouts";

export default function Projects() {
  return (
    <section>
      <StyledBottom>
        <Carousel />
      </StyledBottom>
      <ProjectItems />
    </section>
  );
}

const StyledBottom = styled.div`
  ${MarginBottom}
`;
