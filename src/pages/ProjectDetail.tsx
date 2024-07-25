import { ProjectCreateController } from "@widgets/create-project/ui";
import { WorkCreateController } from "@widgets/create-work/ui";
import React from "react";

export default function ProjectDetail() {
  // TODO : imageURL props need
  return (
    <>
      <ProjectCreateController />
      <WorkCreateController />
    </>
  );
}
