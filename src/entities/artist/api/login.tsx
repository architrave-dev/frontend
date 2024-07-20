import { api } from "src/app/config";

const login = ({
  username,
  password,
}: {
  username: string;
  password: string;
}) => {
  const result = api.axiosInstance.post("", { username, password });
  console.log(result);
};
