import { useQuery } from "@tanstack/react-query";
import { api } from "src/app/config";
import { TProject } from "./projectType";

export default function useGetProjectQuery({
  aui,
  title,
}: {
  aui: string;
  title: string;
}) {
  const projects = useQuery({
    queryKey: ["projects", { aui, title }],
    queryFn: async () => {
      const result = await api.axiosInstance.get<TProject>(
        `/project/${title}?aui=${aui}`
      );
      return result;
    },
  });
  return {
    projects,
  };
}
