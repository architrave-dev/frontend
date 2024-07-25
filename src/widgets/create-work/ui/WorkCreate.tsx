import { TypoCSS } from "@styles/typoGuide";
import { styled } from "styled-components";
import { useFieldArray, useForm } from "react-hook-form";
import { TWork } from "@entities/work/model/work.type";

export interface WorkCreateControllerProps {
  workInfos?: TWork[];
}

function WorkCreateController({ workInfos }: WorkCreateControllerProps) {
  console.log(workInfos);
  const { control } = useForm<WorkCreateControllerProps>();
  const { fields } = useFieldArray({ name: "workInfos", control });
  console.log(fields);
  return (
    <StyledWorkContainer>
      <StyledWorkController>
        <div>콘텐츠 삽입: </div>
        <StyledButton>이미지</StyledButton>
        <StyledButton>텍스트</StyledButton>
        <StyledButton>구분선</StyledButton>
      </StyledWorkController>
    </StyledWorkContainer>
  );
}

export { WorkCreateController };

const StyledWorkContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-block-start: 6rem;
  ${TypoCSS.caption}
`;

const StyledWorkController = styled.div`
  display: flex;
  align-items: center;
  padding: 0.7rem 3rem;
  margin-block-end: 6rem;
  column-gap: 2rem;
  border-radius: 1rem;
  background-color: ${(props) => props.theme.colors.popover};
  color: ${(props) => props.theme.colors.white};
`;

const StyledButton = styled.button`
  all: unset;
  cursor: pointer;
  border-radius: 1rem;
  padding: 0.8rem 2rem;
  &:is(:focus, :hover) {
    background-color: ${(props) => props.theme.colors.placeholder};
  }
`;
