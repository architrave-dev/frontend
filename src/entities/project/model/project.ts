import { z } from "zod";

const ProjectSchema = z.object({
  projectId: z.number(),
  title: z.string(),
  description: z.string(),
  originUrl: z.string().url(),
  thumbnailUrl: z.string(),
});

type TProjectSchema = z.infer<typeof ProjectSchema>;

export { ProjectSchema, type TProjectSchema };
