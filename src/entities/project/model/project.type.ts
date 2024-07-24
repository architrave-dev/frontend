import { z } from "zod";

const ProjectInfoSchema = z.object({
  projectInfoId: z.number(),
  customName: z.string(),
  customValue: z.string(),
});

const ProjectSchema = z.object({
  projectId: z.number(),
  title: z.string(),
  description: z.string(),
  originUrl: z.string().url(),
  thumbnailUrl: z.string(),
});

type TProjectInfo = z.infer<typeof ProjectInfoSchema>;
type TProject = z.infer<typeof ProjectSchema> & {
  projectInfoList: TProjectInfo[];
};

export { ProjectSchema, type TProject, ProjectInfoSchema, type TProjectInfo };
