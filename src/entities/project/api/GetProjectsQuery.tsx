import { useQuery } from "@tanstack/react-query";
import { api } from "src/app/config";
import { TProject } from "./project";

export default function GetProjectsQuery({ aui }: { aui: string }) {
  const projects = useQuery({
    queryKey: ["projects", { aui }],
    queryFn: async () => {
      const result = await api.axiosInstance.get<TProject[]>(
        `/project/list?aui=${aui}`
      );
      return result;
    },
  });
  return {
    projects,
  };
}
