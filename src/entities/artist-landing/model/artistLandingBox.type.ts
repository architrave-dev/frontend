import { z } from "zod";

const artistLandingBoxSchema = z.object({
  landingBoxId: z.number(),
  originUrl: z.string(),
  thumbnailUrl: z.string(),
  title: z.string(),
  description: z.string(),
  isDeleted: z.boolean(),
});

type TArtistLandingBox = z.infer<typeof artistLandingBoxSchema>;

export { type TArtistLandingBox, artistLandingBoxSchema };
