import { z } from "zod";

const memberSchema = z.object({
  memberId: z.number(),
  email: z.string(),
  username: z.string(),
  aui: z.string(),
  // TODO: need to collect RoleType Def
  role: z.enum(["any"]),
});

type TMember = z.infer<typeof memberSchema>;

export { type TMember, memberSchema };
