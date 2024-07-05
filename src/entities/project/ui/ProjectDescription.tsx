import { TypoCSS } from "@styles/typoGuide";
import { DividerCSS } from "src/shared/ui/Divider";
import styled from "styled-components";

export interface ProjectDescriptionProps {
  description: string;
  period: string;
  location: string;
  organization: string;
}

export default function ProjectDescription({
  description,
  location,
  period,
  organization,
}: ProjectDescriptionProps) {
  return (
    <section>
      <StyledProjectTitle>{description}</StyledProjectTitle>
      <StyledDivider />
      <ul>
        <FlexList>
          <b>전시 기간</b>
          <p>{period}</p>
        </FlexList>
        <FlexList>
          <b>전시 장소</b>
          <p>{location}</p>
        </FlexList>
        <FlexList>
          <b>후원</b>
          <p>{organization}</p>
        </FlexList>
      </ul>
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
