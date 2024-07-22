import { ArtistEntity } from "@entities/artist-landing";
import queryClient from "@shared/queryClient";
import { api } from "src/app/config";

const UpdateArtistLanding = async (
  aui: string,
  body: ArtistEntity.TArtistLandingBox
) => {
  const { status } = await api.axiosInstance.put(
    `/landing_box?aui=${aui}`,
    body
  );
  if (status !== 200) throw new Error("invalid ArtistLanding Update");
  queryClient.invalidateQueries({ queryKey: ["artist-landing", { aui }] });
  return;
};

export { UpdateArtistLanding };
