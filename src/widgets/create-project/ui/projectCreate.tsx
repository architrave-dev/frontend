import { useImageFile } from "@features/change-background-image/model";
import ImageChangeButton from "@features/change-background-image/ui/ImageChangeButton";
import { MarginBottom } from "@styles/Layouts";
// import { TypoCSS } from "@styles/typoGuide";
import { ProjectSection } from "@entities/project/ui";
import styled from "styled-components";
import { useFieldArray, useForm } from "react-hook-form";

export default function ProjectCreate() {
  const { imageFile, onImageChange } = useImageFile("");
  const { control } = useForm({
    defaultValues: {
      projectInfoList: [{ name: "", value: "" }],
    },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "projectInfoList",
  });
  return (
    <form>
      <StyledProjectCreateSection>
        <img src={imageFile} alt="test imageFile" />
        <ImageChangeButton onChange={onImageChange} />
        {/* <StyledTitle>프로젝트를 대표하는 이미지를 넣어 주세요</StyledTitle> */}
      </StyledProjectCreateSection>
      <ProjectSection
        title={
          <ProjectSection.ProjectTitle>akdlfjask</ProjectSection.ProjectTitle>
        }
        projectInfoList={fields.map((field, index) => {
          return (
            <ProjectSection.ProjectInfoList
              key={field.id}
              field={field}
              control={control}
              index={index}
              remove={remove}
              append={append}
            />
          );
        })}
      />
    </form>
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

// const StyledTitle = styled.h1`
//   ${TypoCSS.projectTitle}
//   place-self: center;
// `;
