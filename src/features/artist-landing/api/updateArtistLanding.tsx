import { ArtistEntity } from "@entities/artist-landing";
import { api } from "src/app/config";

const updateArtistLanding = async ({
  aui,
  body,
}: {
  aui: string;
  body: ArtistEntity.TArtistLandingBox;
}) => {
  const { status } = await api.axiosInstance.put(
    `/landing_box?aui=${aui}`,
    body
  );
  if (status !== 200) throw new Error("invalid ArtistLanding Update");
  return status === 200;
};

export { updateArtistLanding };
