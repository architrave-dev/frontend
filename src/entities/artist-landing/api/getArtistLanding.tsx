import { TUser } from "@entities/artist/model/user";
import { useQuery } from "@tanstack/react-query";
import { api } from "src/app/config";

function GetArtistLanding({ aui }: { aui: string }) {
  const { data } = useQuery({
    queryKey: ["artist-landing", { aui }],
    queryFn: async () => {
      const { data } = await api.axiosInstance.get<TUser>(
        `/landing_box?aui=${aui}`
      );
      return data;
    },
  });
  return data;
}

export { GetArtistLanding };
