import { memberSchema } from "@entities/artist/model/member.type";
import { z } from "zod";

const workSchema = z.object({
  id: z.number(),
  member: memberSchema,
  uploadFile: z.custom<File>((val) => val instanceof File),
  title: z.string(),
  description: z.string(),
  isDeleted: z.boolean(),
});

type TWork = z.infer<typeof workSchema>;

export { type TWork, workSchema };
