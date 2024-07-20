import { z } from "zod";

const UserSchema = z.object({
  memberId: z.number(),
  email: z.string(),
  username: z.string(),
  aui: z.string(),
  // TODO: need to collect RoleType Def
  role: z.enum(["any"]),
});

type TUser = z.infer<typeof UserSchema>;

export { type TUser, UserSchema };
