import { useQuery } from "@tanstack/react-query";
import { api } from "src/app/config";
import { TProject } from "./projectType";

export default function useGetProjectsQuery({ aui }: { aui: string }) {
  const { data, isError, isSuccess } = useQuery({
    queryKey: ["projects", { aui }],
    queryFn: async () => {
      const result = await api.axiosInstance.get<TProject[]>(
        `/project/list?aui=${aui}`
      );
      return result;
    },
  });
  if (isError) {
    throw new Error("fetch failed");
  }
  return {
    project: isSuccess ? data.data : [],
  };
}
