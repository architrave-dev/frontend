import { useMutation } from "@tanstack/react-query";
import { api } from "src/app/config";
import { TProject } from "../model/project.type";

// TODO: API 문서와 배포에 맞춰 업데이트하기
function usePutProjectQuery({
  aui,
  projectId,
  body,
}: {
  aui: string;
  projectId: string;
  body: TProject;
}) {
  return useMutation<TProject>({
    mutationKey: ["projects", { aui, projectId }],
    mutationFn: async () => {
      const result = await api.axiosInstance.put<TProject>(
        `/project?aui=${aui}`,
        { body }
      );
      return result.data;
    },
    onSuccess: (reqData) => {
      console.log(reqData);
    },
    onError: (e) => {
      console.log("PutProjectsQuery : error", e.message);
    },
  });
}

export { usePutProjectQuery as usePutProjectsQuery };
