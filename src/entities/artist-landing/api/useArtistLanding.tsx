import { TMember } from "@entities/artist/model/member.type";
import { useQuery } from "@tanstack/react-query";
import { api } from "src/app/config";

function useArtistLanding({ aui }: { aui: string }) {
  return useQuery({
    queryKey: ["artist-landing", { aui }],
    queryFn: async () => {
      const { data } = await api.axiosInstance.get<TMember>(
        `/landing_box?aui=${aui}`
      );
      return data;
    },
  });
}

export { useArtistLanding };
