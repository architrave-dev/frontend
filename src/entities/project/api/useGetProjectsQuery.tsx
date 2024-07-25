import { useQuery } from "@tanstack/react-query";
import { api } from "src/app/config";
import { TProject } from "../model/project.type";

function useGetProjectsQuery({ aui }: { aui: string }) {
  return useQuery({
    queryKey: ["projects", { aui }],
    queryFn: async () => {
      const result = await api.axiosInstance.get<TProject[]>(
        `/project/list?aui=${aui}`
      );
      return result;
    },
  });
}

export { useGetProjectsQuery };
