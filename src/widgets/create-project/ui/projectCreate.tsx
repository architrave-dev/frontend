import { useImageFile } from "@features/change-background-image/model";
import ImageChangeButton from "@features/change-background-image/ui/ImageChangeButton";
import { StyledInput } from "@shared/components/Input";
import { Cross1Icon } from "@radix-ui/react-icons";
import { BackgroundImage, DividerCSS } from "@shared/ui";
import { StackSection } from "@shared/ui/stackSection";
import { Container, PaddingInline } from "@styles/Layouts";
import { TypoCSS } from "@styles/typoGuide";
import { useFieldArray, useForm } from "react-hook-form";
import styled, { css } from "styled-components";
import { ProjectEntity } from "@entities/project/model";

function ProjectCreateController({
  projectInfoList,
  title,
}: Partial<ProjectEntity.TProject>) {
  const defaultValues = {
    projectTitle: title ?? "",
    projectInfos: projectInfoList
      ? projectInfoList.map((project) => ({
          name: project.customName,
          value: project.customValue,
        }))
      : [
          { name: "전시 기간", value: "2024.08.01~2019.08.11" },
          {
            name: "전시 장소",
            value: "서교예술실험센터 ~ 서울 마포구 잔다리로6길 33지하",
          },
          { name: "후원", value: "서울문화센터 서교예술실험센터" },
        ],
  };
  const { imageFile, onImageChange } = useImageFile("");
  const { register, handleSubmit, control } = useForm({
    defaultValues,
  });
  const { fields, append, remove } = useFieldArray({
    name: "projectInfos",
    control,
  });
  return (
    <form
      onSubmit={handleSubmit((value) => {
        console.log("new ProjectSubmit", value);
      })}
    >
      <StackSection>
        <BackgroundImage src={imageFile} />
        <StackSection.Center>
          <StyledFlexBox>
            <ImageChangeButton onChange={onImageChange} />
          </StyledFlexBox>
          <StyledParagraph>
            프로젝트를 대표하는 이미지를 넣어주세요
          </StyledParagraph>
        </StackSection.Center>
      </StackSection>
      <StyledProjectInfoContainer>
        <StyledInput $size="main" placeholder="텍스트를 입력해주세요" />
        <StyledDivider />
        {fields.map((field, index) => {
          return (
            <StyledFlexBox key={field.id} $description>
              <StyledSmallInput
                type="text"
                placeholder={`${field.name}`}
                {...register(`projectInfos.${index}.name`)}
              />
              <StyledSmallInput
                type="text"
                placeholder={field.value}
                {...register(`projectInfos.${index}.value`)}
              />
              <StyledXIcon type="button" onClick={() => remove(index)}>
                <Cross1Icon></Cross1Icon>
              </StyledXIcon>
            </StyledFlexBox>
          );
        })}
        <button type="button" onClick={() => append({ name: "", value: "" })}>
          Add
        </button>
      </StyledProjectInfoContainer>
    </form>
  );
}

export { ProjectCreateController };

const StyledProjectInfoContainer = styled.div`
  ${Container}
  ${PaddingInline}
  margin-block-start: 6rem;
`;

const StyledFlexBox = styled.div<{ $description?: boolean }>`
  position: relative;
  display: grid;
  justify-content: center;
  ${(props) =>
    props.$description &&
    css`
      grid-template-columns: 20rem 1fr;
      justify-content: start;
      column-gap: 3rem;
      ${TypoCSS.caption}
    `}
`;

const StyledXIcon = styled.button`
  all: unset;
  position: absolute;
  border-radius: 100vmax;
  border: 1px solid black;
  cursor: pointer;
  padding: 0.24rem;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
`;

const StyledDivider = styled.div`
  ${DividerCSS}
  margin-block-end: 4rem;
`;

const StyledSmallInput = styled.input`
  all: unset;
  padding: 0.5rem;
  &::placeholder {
    color: grey;
  }
`;

const StyledParagraph = styled.p`
  margin-block-start: 4rem;
  ${TypoCSS.caption}
  color: ${(props) => props.theme.colors.white};
`;
