import { useQuery } from "@tanstack/react-query";
import { api } from "src/app/config";

export default function ProjectQuery() {
  const { data } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const result = await api.axiosInstance.get("/projects");
      return result;
    },
  });
  return {
    projects: data,
  };
}
