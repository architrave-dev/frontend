import { TypoCSS } from "@styles/typoGuide";
import { DividerCSS } from "src/shared/ui/Divider";
import styled from "styled-components";

export default function ProjectDescription() {
  return (
    <section>
      <StyledProjectTitle>ProjectDescription</StyledProjectTitle>
      <StyledDivider />
      <ul>
        <FlexList>
          <b>전시 기간</b>
          <p>2019.08.01</p>
        </FlexList>
        <FlexList>
          <b>전시 장소</b>
          <p>서교 예술 실험센터</p>
        </FlexList>
        <FlexList>
          <b>후원</b>
          <p>서울 문화재단</p>
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
  font-size: 2rem;
  font-weight: 500;
  column-gap: 1rem;
  margin-block-end: 1rem;
`;

const StyledDivider = styled.div`
  ${DividerCSS}
  margin-block-end: 4rem;
`;
