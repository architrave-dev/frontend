import { TypoCSS } from "@styles/typoGuide";
import { DividerCSS } from "src/shared/ui/Divider";
import {
  Controller,
  Control,
  UseFieldArrayAppend,
  UseFieldArrayRemove,
  FieldValues,
} from "react-hook-form";
import styled from "styled-components";
import React from "react";

function ProjectDescriptionTitle({ children }: { children: React.ReactNode }) {
  return <StyledProjectTitle>{children}</StyledProjectTitle>;
}

type ProjectDescriptionFieldsProps<T extends FieldValues> = {
  field: T;
  control: Control<T>;
  index: number;
  append: UseFieldArrayAppend<T>;
  remove: UseFieldArrayRemove;
};

function ProjectDescriptionFields({
  field,
  control,
  index,
  append,
}: // eslint-disable-next-line @typescript-eslint/no-explicit-any
ProjectDescriptionFieldsProps<any>) {
  return (
    <div key={field.id}>
      <Controller
        name={`items.${index}.name`}
        control={control}
        render={({ field }) => <input {...field} placeholder="Name" />}
      />
      <Controller
        name={`items.${index}.value`}
        control={control}
        render={({ field }) => <input {...field} placeholder="Value" />}
      />
      <button type="button" onClick={() => append({ name: "", value: "" })} />
    </div>
  );
}

export interface ProjectDescriptionProps {
  title: React.ReactNode;
  projectInfoList: React.ReactNode;
}

function ProjectDescription({
  title,
  projectInfoList,
}: ProjectDescriptionProps) {
  return (
    <>
      {title}
      <StyledDivider />
      {projectInfoList}
    </>
  );
}

export const ProjectSection = Object.assign(ProjectDescription, {
  ProjectTitle: ProjectDescriptionTitle,
  ProjectInfoList: ProjectDescriptionFields,
});

const StyledProjectTitle = styled.h1`
  ${TypoCSS.mainTitle}
`;

const StyledDivider = styled.div`
  ${DividerCSS}
  margin-block-end: 4rem;
`;
