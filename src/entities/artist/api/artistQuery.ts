import { api } from "src/app/config";

// TODO: 랜딩페이지 검색창 결과 반환 함수
const artistQuery = async (artist: string) => {
  const result = await api.axiosInstance.get(`/member?aui=${artist}`);
  return result;
};

export { artistQuery };
