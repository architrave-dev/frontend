import { z } from "zod";

const signInSchema = z.object({
  email: z.string().email(),
  username: z.string(),
  password: z.string(),
});

const loginSchema = signInSchema.omit({ email: true });

export { loginSchema, signInSchema };
