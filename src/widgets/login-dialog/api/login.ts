import { api } from "src/app/config";
import { loginSchema } from "../model";

const login = async (userInfo: unknown) => {
  const user = loginSchema.parse(userInfo);
  const { status } = await api.axiosInstance.post("/auth/login", user);
  if (status !== 200) throw new Error("login Failed");
  return;
};

export { login };
