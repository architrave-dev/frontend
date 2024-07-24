import { TypoCSS } from "@styles/typoGuide";
import { DividerCSS } from "src/shared/ui/Divider";
import { ProjectEntity } from "../api";
import styled from "styled-components";

// TODO : need projectDescriptionProps update
export default function ProjectDescription({
  projectInfoList,
  description,
}: ProjectEntity.TProject) {
  return (
    <section>
      <StyledProjectTitle>{description}</StyledProjectTitle>
      <StyledDivider />
      {projectInfoList.length > 0 ? (
        <ul>
          {projectInfoList.map((info) => {
            return (
              <FlexList key={info.projectInfoId}>
                <b>{info.customName}</b>
                <p>{info.customValue}</p>
              </FlexList>
            );
          })}
        </ul>
      ) : null}
    </section>
  );
}

const StyledProjectTitle = styled.h1`
  ${TypoCSS.mainTitle}
`;

const FlexList = styled.li`
  display: grid;
  grid-template-columns: 23rem 1fr;
  font-size: ${(props) => props.theme.fontSize.sm};
  font-weight: ${(props) => props.theme.fontWeight.medium};
  column-gap: 1rem;
  margin-block-end: 1rem;
`;

const StyledDivider = styled.div`
  ${DividerCSS}
  margin-block-end: 4rem;
`;
