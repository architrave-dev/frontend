import { useQuery } from "@tanstack/react-query";
import { api } from "src/app/config";
import { TProject } from "../model/project.type";

function useGetProjectQuery({ aui, title }: { aui: string; title: string }) {
  return useQuery({
    queryKey: ["projects", { aui, title }],
    queryFn: async () => {
      const { data } = await api.axiosInstance.get<TProject>(
        `/project/${title}?aui=${aui}`
      );
      return data;
    },
  });
}

export { useGetProjectQuery };
